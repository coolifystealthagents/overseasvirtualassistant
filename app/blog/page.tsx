import { Header, Footer, JsonLd } from '../components';
import { blogPosts, site } from '../data';

export const metadata = {
  title: 'Overseas virtual assistant hiring blog',
  description: 'Plain guides for hiring Filipino virtual assistants, including role scope, Philippines shifts, onboarding, security, and work reviews.',
  alternates: { canonical: `${site.url}/blog` },
};

export default function Blog(){
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Overseas virtual assistant hiring blog',
    url: `${site.url}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: blogPosts.map((post, index)=>({ '@type': 'ListItem', position: index + 1, name: post.title, url: `${site.url}/blog/${post.slug}` })),
    },
  };
  return <><Header/><main className="section"><JsonLd data={schema}/><div className="container"><p className="eyebrow">Blog</p><h1>Plain guides for hiring Filipino virtual assistants</h1><p className="lead">Use these guides to scope the work, plan a Philippines-based shift, check providers, limit access, and prepare the first handoff.</p><div className="cards">{blogPosts.map((p)=><a className="card" href={`/blog/${p.slug}`} key={p.slug}><h3>{p.title}</h3><p>{p.excerpt}</p><span className="pill">{p.minutes} min read</span><span className="pill">Updated {p.updated}</span></a>)}</div></div></main><Footer/></>;
}
