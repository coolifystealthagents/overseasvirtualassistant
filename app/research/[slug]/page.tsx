import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { researchPosts } from '../../fleet-content';

const formatPublicDate = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() { return researchPosts.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find(p => p.slug === slug);
  return { title: post?.title || 'Research', description: post?.excerpt, alternates: { canonical: `https://overseasvirtualassistant.com/research/${slug}` }, openGraph: { title: post?.title, description: post?.excerpt, type: 'article', url: `https://overseasvirtualassistant.com/research/${slug}`, publishedTime: post?.published } };
}

export default async function ResearchArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find(p => p.slug === slug);
  if (!post) notFound();
  return <>
    <Header />
    <main className="fleet-main">
      <article className="section article-shell">
        <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, datePublished: post.published, dateModified: post.published, citation: post.sources.map(s => s.url), mainEntityOfPage: `https://overseasvirtualassistant.com/research/${post.slug}` }} />
        <p className="eyebrow">Philippines staffing research · <time dateTime={post.published}>{formatPublicDate(post.published)}</time></p>
        <h1>{post.title}</h1>
        <p className="lead">{post.excerpt}</p>
        <img src={post.image.src} alt={post.image.alt} className="article-image" />
        <h2>Methodology</h2><p>{post.methodology}</p>
        <aside className="fleet-card"><b>{post.headlineStat.value}</b><p>{post.headlineStat.label}</p><small>{post.headlineStat.source}</small></aside>
        <h2>Key Stats</h2><ul>{post.keyStats.map(s => <li key={s.label}><strong>{s.value}</strong>: {s.label}</li>)}</ul>
        <h2>Key Takeaways</h2><ul>{post.takeaways.map(x => <li key={x}>{x}</li>)}</ul>
        {post.sections.map(section => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p><table><tbody>{section.table.map((row, i) => <tr key={i}>{row.map((cell, j) => i === 0 ? <th key={j}>{cell}</th> : <td key={j}>{cell}</td>)}</tr>)}</tbody></table></section>)}
        <p>{post.sourceNotes}</p>
        <h2>Sources</h2><ol>{post.sources.map(s => <li key={s.url}><a href={s.url}>{s.name}</a>: {s.note}</li>)}</ol>
        <h2>FAQs</h2>{post.faqs.map(f => <section key={f.question}><h3>{f.question}</h3><p>{f.answer}</p></section>)}
        <h2>Related Research</h2><div className="fleet-card-grid">{post.relatedResearch.map(relatedSlug => <a className="fleet-card" href={relatedSlug} key={relatedSlug}>Read related research</a>)}</div>
        <p><a href="/blog">Read the daily blog guides</a> · <a href="/services">Explore service workflows</a> · <a href="/contact">Plan your staffing routine</a></p>
        <p>{post.cta}</p>
      </article>
      <CTA />
    </main>
    <Footer />
  </>;
}
