import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';

export function generateStaticParams() { return blogPosts.map((p)=>({ slug: p.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p)=>p.slug===slug);
  return {
    title: post?.title || 'Overseas VA guide',
    description: post?.excerpt,
    alternates: { canonical: `${site.url}/blog/${slug}` },
    openGraph: { title: post?.title, description: post?.excerpt, url: `${site.url}/blog/${slug}`, type: 'article' },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
 const { slug } = await params;
 const post = blogPosts.find((p)=>p.slug===slug) || blogPosts[0];
 const articleSchema = {
   '@context': 'https://schema.org',
   '@type': 'Article',
   headline: post.title,
   description: post.excerpt,
   dateModified: post.updated,
   datePublished: post.updated,
   author: { '@type': 'Organization', name: site.brand, url: site.url },
   publisher: { '@type': 'Organization', name: site.brand, url: site.url },
   mainEntityOfPage: `${site.url}/blog/${post.slug}`,
   citation: post.sources.map((source)=>source.url),
 };
 const faqSchema = {
   '@context': 'https://schema.org',
   '@type': 'FAQPage',
   mainEntity: post.faqs.map((faq)=>({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
 };
 const breadcrumbSchema = {
   '@context': 'https://schema.org',
   '@type': 'BreadcrumbList',
   itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog` },
    { '@type': 'ListItem', position: 3, name: post.title, item: `${site.url}/blog/${post.slug}` },
   ],
 };
 return <><Header/><main className="section"><JsonLd data={articleSchema}/><JsonLd data={faqSchema}/><JsonLd data={breadcrumbSchema}/><article className="container article"><p className="eyebrow">Philippines staffing guide</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="meta-row"><span>{post.minutes} min read</span><span>Updated {post.updated}</span></div><div className="card takeaways"><h2>Key takeaways</h2><ul className="list">{post.takeaways.map((item)=><li key={item}>{item}</li>)}</ul></div>{post.sections.map((section)=><section className="card article-block" key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p>{section.bullets ? <ul className="list">{section.bullets.map((bullet)=><li key={bullet}>{bullet}</li>)}</ul> : null}</section>)}<section className="card"><h2>Questions for the hiring call</h2><p className="quote">&quot;I want help with these tasks first: [tasks]. Here are examples of good work. Here is what you should send back for approval. Can you show me how you would handle the first three items?&quot;</p><p>Use this on a call with a Philippines staffing provider or Filipino freelancer. It keeps the discussion on the work instead of broad promises.</p></section><section className="card"><h2>FAQ</h2>{post.faqs.map((faq)=><div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section><section className="card"><h2>Sources</h2><p>Use these references for background. Ask a qualified adviser about legal, tax, security, or worker-classification questions that apply to your company.</p><ul className="list">{post.sources.map((source)=><li key={source.url}><a href={source.url}>{source.name}</a>: {source.note}</li>)}</ul></section><section className="card related"><h2>Related guides</h2>{blogPosts.filter((p)=>p.slug!==post.slug).slice(0,3).map((p)=><a className="pill" href={`/blog/${p.slug}`} key={p.slug}>{p.title}</a>)}</section></article><CTA/></main><Footer/></>;
}
