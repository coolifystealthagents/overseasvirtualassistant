import type {Metadata} from 'next';
import {Footer,Header,JsonLd} from '../components';
import {site} from '../data';
import {alternatives} from './data';

export const metadata:Metadata={
  title:'Overseas Virtual Assistant Alternatives',
  description:'Compare overseas virtual assistant hiring, country, and schedule models using consistent buyer checks.',
  alternates:{canonical:'/alternatives'},
  openGraph:{title:'Overseas Virtual Assistant Alternatives',description:'Practical comparisons for overseas hiring decisions.',url:'/alternatives',type:'website'},
};

export default function AlternativesPage(){
  const schema={'@context':'https://schema.org','@type':'CollectionPage',name:'Overseas Virtual Assistant Alternatives',url:`${site.url}/alternatives`,mainEntity:{'@type':'ItemList',numberOfItems:alternatives.length,itemListElement:alternatives.map((item,index)=>({'@type':'ListItem',position:index+1,name:item.title,url:`${site.url}/alternatives/${item.slug}`}))}};
  return <><Header/><main><JsonLd data={schema}/><section className="fleet-hero"><div className="container"><p className="eyebrow">Buyer-intent comparison library</p><h1>Compare overseas virtual assistant options</h1><p className="lead">Use the same scope, work sample, schedule, security, and management questions for every model. These guides help you compare operating fit—not stereotypes.</p></div></section><section className="section"><div className="container fleet-card-grid">{alternatives.map(item=><a className="fleet-card" href={`/alternatives/${item.slug}`} key={item.slug}><span>{item.category}</span><h2>{item.title}</h2><p>{item.summary}</p><b>Read the comparison →</b></a>)}</div></section></main><Footer/></>;
}
