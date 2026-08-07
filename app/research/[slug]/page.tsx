import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { researchPosts } from '../../fleet-content';

export function generateStaticParams() { return researchPosts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = researchPosts.find(p => p.slug === slug); return { title: post?.title || 'Research', description: post?.excerpt, alternates: { canonical: `https://overseasvirtualassistant.com/research/${slug}` } }; }

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const post = researchPosts.find(p => p.slug === slug); if (!post) notFound();
  return <><Header/><main className="fleet-main"><article className="section article-shell"><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.published, dateModified: post.published, citation: post.sources.map(s => s.url) }}/><p className="eyebrow">Philippines staffing research</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><img src={post.image.src} alt={post.image.alt} className="article-image"/>{post.body.map((x, i) => <p key={i}>{x}</p>)}<h2>Sources</h2><ul>{post.sources.map(s => <li key={s.url}><a href={s.url}>{s.name}</a>: {s.note}</li>)}</ul><p>{post.cta}</p><p><a href="/blog">Read the daily blog guides</a> · <a href="/contact">Plan your staffing routine</a></p></article><CTA/></main><Footer/></>;
}
