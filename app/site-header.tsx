'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

function LogoMark(){return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="Overseas Virtual Assistant logo"/><span className="logo-name">Overseas Virtual Assistant</span></span>}
const links = [['Home','/'],['Services','/services'],['Contact Us','/contact-us']] as const;
export function SiteHeader(){
  const pathname=usePathname(); const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false); const button=useRef<HTMLButtonElement>(null); const panel=useRef<HTMLElement>(null);
  useEffect(()=>{const update=()=>setScrolled(window.scrollY>12);update();window.addEventListener('scroll',update,{passive:true});return()=>window.removeEventListener('scroll',update)},[]);
  useEffect(()=>{if(!open)return; const first=panel.current?.querySelector<HTMLElement>('a'); first?.focus(); const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);button.current?.focus()} if(e.key==='Tab'&&panel.current){const all=[button.current,...panel.current.querySelectorAll<HTMLElement>('a')].filter(Boolean) as HTMLElement[];const at=all.indexOf(document.activeElement as HTMLElement);if(e.shiftKey&&at===0){e.preventDefault();all.at(-1)?.focus()}else if(!e.shiftKey&&at===all.length-1){e.preventDefault();all[0].focus()}}};document.addEventListener('keydown',key);return()=>document.removeEventListener('keydown',key)},[open]);
  const current=(href:string)=>href==='/'?pathname==='/':pathname===href||pathname.startsWith(`${href}/`);
  return <header className={`nav field-header${scrolled?' is-scrolled':''}`}><div className="nav-inner"><a className="logo" href="/" aria-label="Overseas Virtual Assistant home"><LogoMark/></a><span className="powered">Powered by <a href="https://stealthagents.com" rel="noopener noreferrer">StealthAgents</a></span><nav className="links" aria-label="Primary navigation">{links.map(([label,href])=><a key={href} href={href} aria-current={current(href)?'page':undefined}>{label}</a>)}</nav><button ref={button} className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(x=>!x)}><span aria-hidden="true">☰</span><span>Menu</span></button><nav ref={panel} id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation" hidden={!open}>{links.map(([label,href])=><a key={href} href={href} aria-current={current(href)?'page':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</nav></div></header>
}
