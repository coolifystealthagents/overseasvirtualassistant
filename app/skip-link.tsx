'use client';

import { useEffect } from 'react';

export function SkipLink(){
  useEffect(()=>{
    const main=document.querySelector<HTMLElement>('main');
    if(!main)return;
    main.id='main-content';
    main.tabIndex=-1;
  },[]);
  function skip(event:React.MouseEvent<HTMLAnchorElement>){
    const main=document.querySelector<HTMLElement>('main');
    if(!main)return;
    event.preventDefault();
    main.id='main-content';
    main.tabIndex=-1;
    main.focus({preventScroll:true});
    main.scrollIntoView({block:'start'});
    history.replaceState(null,'','#main-content');
  }
  return <a className="skip-link" href="#main-content" onClick={skip}>Skip to main content</a>;
}
