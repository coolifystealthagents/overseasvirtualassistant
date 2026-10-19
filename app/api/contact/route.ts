import { NextRequest, NextResponse } from 'next/server';

const MAX_BODY_BYTES=48_000; const WINDOW_MS=15*60_000; const EMAIL=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; const PHONE=/^[+()\d][+()\d\s.-]{6,30}$/; const buckets=new Map<string,number[]>();
const limits:Record<string,number>={firstName:100,lastName:100,email:320,phone:100,companyName:200,website:300,industry:100,positions:60,referral:100,referralSpecify:150,message:3000};
function reply(status:number,message:string){return NextResponse.json({accepted:false,message},{status,headers:{'cache-control':'no-store'}})}
function clientIp(r:NextRequest){return r.headers.get('cf-connecting-ip')||r.headers.get('x-real-ip')||r.headers.get('x-forwarded-for')?.split(',')[0]?.trim()||'unknown'}
function rateLimited(key:string,max:number){const now=Date.now();const recent=(buckets.get(key)||[]).filter(t=>now-t<WINDOW_MS);recent.push(now);buckets.set(key,recent);if(buckets.size>5000)for(const [k,v] of buckets)if(!v.some(t=>now-t<WINDOW_MS))buckets.delete(k);return recent.length>max}
function sameOrigin(r:NextRequest){
 const fetchSite=r.headers.get('sec-fetch-site');if(fetchSite!==null&&fetchSite!=='same-origin')return false;
 const origin=r.headers.get('origin');if(!origin)return false;
 try{const parsed=new URL(origin);const host=(r.headers.get('x-forwarded-host')||r.headers.get('host')||'').split(',')[0].trim().toLowerCase();const proto=(r.headers.get('x-forwarded-proto')||r.nextUrl.protocol.replace(':','')).split(',')[0].trim().toLowerCase();return parsed.host.toLowerCase()===host&&parsed.protocol===`${proto}:`}catch{return false}
}
export async function POST(request:NextRequest){
 if(!sameOrigin(request))return reply(403,'Request not accepted.');
 const type=request.headers.get('content-type')||'';const declared=Number(request.headers.get('content-length')||0);if(!type.includes('application/x-www-form-urlencoded')||!Number.isFinite(declared)||declared>MAX_BODY_BYTES)return reply(413,'Request not accepted.');
 if(rateLimited(`ip:${clientIp(request)}`,8))return reply(429,'Please wait before trying again.');
 let raw='';try{raw=await request.text()}catch{return reply(400,'Request not accepted.')}if(Buffer.byteLength(raw)>MAX_BODY_BYTES)return reply(413,'Request not accepted.');
 const body=new URLSearchParams(raw);if(body.get('website_url')?.trim())return reply(400,'Request not accepted.');
 const get=(key:string)=>{const value=(body.get(key)||'').trim();return value.length<=(limits[key]||500)?value:null};
 const firstName=get('firstName'),lastName=get('lastName'),email=get('email')?.toLowerCase(),phone=get('phone'),companyName=get('companyName'),website=get('website'),industry=get('industry'),positions=get('positions'),referral=get('referral'),referralSpecify=get('referralSpecify'),message=get('message');
 if([firstName,lastName,email,phone,companyName,website,industry,positions,referral,message].some(v=>v===null)||!firstName||!lastName||!email||!EMAIL.test(email)||!phone||!PHONE.test(phone)||!website||!companyName||!industry||!positions||!referral)return reply(422,'Check the required fields and try again.');
 if(rateLimited(`email:${email}`,3))return reply(429,'Please wait before trying again.');
 const token=process.env.LEAD_AUTH_TOKEN;const endpoint=process.env.LEAD_INGEST_URL;if(!token||!endpoint)return reply(503,'The form is temporarily unavailable.');
 const sourcePage=new URL('/contact-us',request.url).toString();const payload={full_name:`${firstName} ${lastName}`,email,phone,company_name:companyName,message:[message,`Website: ${website}`,`Industry: ${industry}`,`Virtual assistants needed: ${positions}`].filter(Boolean).join('\n'),how_they_heard:referralSpecify?`${referral}: ${referralSpecify}`:referral,client_event_id:crypto.randomUUID(),attribution:{source_page:sourcePage,landing_page:sourcePage,referrer:request.headers.get('referer')||'',page_journey:['Contact Us','Lead accepted']}};
 try{const upstream=await fetch(endpoint,{method:'POST',headers:{'content-type':'application/json','x-lead-token':token},body:JSON.stringify(payload),cache:'no-store',signal:AbortSignal.timeout(10000)});if(!upstream.ok)return reply(502,'We could not submit the request. Please try again.');return NextResponse.json({accepted:true,redirect:'/thank-you'},{status:202,headers:{'cache-control':'no-store'}})}catch{return reply(502,'We could not submit the request. Please try again.')}
}
