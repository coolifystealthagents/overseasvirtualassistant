import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import {CTA,Footer,Header,JsonLd} from '../../components';
import {site} from '../../data';
import {alternatives} from '../data';

export function generateStaticParams(){return alternatives.map(item=>({slug:item.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=alternatives.find(entry=>entry.slug===slug);if(!item)return {};return {title:item.title,description:item.summary,alternates:{canonical:`/alternatives/${item.slug}`},openGraph:{title:item.title,description:item.summary,url:`/alternatives/${item.slug}`,type:'article'}}}

export default async function AlternativePage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const item=alternatives.find(entry=>entry.slug===slug);
  if(!item)notFound();
  const url=`${site.url}/alternatives/${item.slug}`;
  const schema=[{'@context':'https://schema.org','@type':'Article',headline:item.title,description:item.summary,dateModified:item.reviewed,mainEntityOfPage:url,publisher:{'@type':'Organization',name:site.brand,url:site.url}},{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[['Home',site.url],['Alternatives',`${site.url}/alternatives`],[item.title,url]].map(([name,link],index)=>({'@type':'ListItem',position:index+1,name,item:link}))}];
  return <><Header/><main><JsonLd data={schema}/><article className="section"><div className="container article-shell"><p className="eyebrow">{item.category} · Reviewed {item.reviewed}</p><h1>{item.title}</h1><p className="lead">{item.summary}</p><aside className="callout"><strong>Best for:</strong> {item.bestFor}</aside><section className="wide-table-wrap card"><h2>Side-by-side operating comparison</h2><table><thead><tr><th>Decision area</th><th>Option one</th><th>Option two</th></tr></thead><tbody>{item.comparison.map(row=><tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>)}</tbody></table></section><section><h2>Buyer checks before you choose</h2><ul className="list">{item.checks.map(check=><li key={check}>{check}</li>)}</ul></section><section><h2>How to compare fairly</h2><p>Give each candidate or provider the same written task lane, sample inputs, quality scorecard, schedule, access limits, and prohibited decisions. A country or service-model label gives context; it does not prove that a particular person can perform the work.</p></section><p><a href="/alternatives">← View all alternatives</a></p></div><CTA/></article></main><Footer/></>;
}
