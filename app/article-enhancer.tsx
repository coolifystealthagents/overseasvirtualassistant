'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Item={id:string;text:string};
const clean=(value:string)=>value.replace(/[—–]/g,', ').replace(/\s*--\s*/g,', ').replace(/,\s*,/g,',');
export function ArticleEnhancer(){
 const [items,setItems]=useState<Item[]>([]); const [active,setActive]=useState(''); const [host,setHost]=useState<HTMLElement|null>(null);
 useEffect(()=>{
   const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node:Node|null;
   while((node=walker.nextNode())){const p=node.parentElement;if(!p||['SCRIPT','STYLE','TEXTAREA','CODE','PRE'].includes(p.tagName))continue;const next=clean(node.textContent||'');if(next!==node.textContent)node.textContent=next}
   const detail=/^\/(blog|research)\/[^/]+\/?$/.test(window.location.pathname);if(!detail)return;
   const root=document.querySelector<HTMLElement>('main > article, main.article-shell > article, main article.container.article, main article.article-shell, article[data-article-root]');if(!root)return;
   // The October 22 template already renders its own sticky desktop ToC and
   // mobile disclosure. Wrapping it again creates a second ToC and can move the
   // sticky panel outside the layout it was styled for.
   if(root.querySelector('.oct22-side, .oct22-mobile-toc, .oct22-layout'))return;
   const heads=[...root.querySelectorAll<HTMLElement>('h2')];if(heads.length<1)return;
   root.classList.add('editorial-prose');
   const parent=root.parentElement; if(!parent)return;
   const layout=document.createElement('div'); layout.className='editorial-layout';
   const tocHost=document.createElement('div'); tocHost.className='editorial-sidebar-host';
   parent.insertBefore(layout,root); layout.append(tocHost,root); setHost(tocHost);
   const seen=new Map<string,number>(); const list=heads.map((h,i)=>{let base=(h.id||h.textContent||`section-${i+1}`).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const n=seen.get(base)||0;seen.set(base,n+1);h.id=n?`${base}-${n+1}`:base;return{id:h.id,text:clean(h.textContent||'Section')}});setItems(list);
   const observer=new IntersectionObserver(entries=>{const visible=entries.filter(x=>x.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];if(visible)setActive(visible.target.id)},{rootMargin:'-96px 0px -68%'});heads.forEach(h=>observer.observe(h));
   return()=>{observer.disconnect();setHost(null);if(layout.parentElement){layout.parentElement.insertBefore(root,layout);layout.remove()}};
 },[]);
 if(items.length<1||!host)return null;
 return createPortal(<aside className="generated-toc" aria-label="Article tools"><details open><summary>On this page</summary><nav aria-label="Table of contents">{items.map(x=><a key={x.id} className={active===x.id?'active':''} href={`#${x.id}`}>{x.text}</a>)}</nav><div className="toc-utility"><strong>Article guide</strong><p>Use the headings to scan methods, controls, evidence, and next actions.</p><a href="/services">Related service field guides</a><a href="/contact-us">Discuss a role</a></div></details></aside>,host)
}
