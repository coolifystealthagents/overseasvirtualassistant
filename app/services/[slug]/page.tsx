import refreshContent from '../../_refresh/content.json';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { site } from '../../data';
import { serviceGuides } from './service-guides';
import './service-detail.css';

export function generateStaticParams() {
  return refreshContent.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = refreshContent.services.find((item) => item.slug === slug);
  if (!service) return {};
  const url = `${site.url}/services/${slug}`;
  return { title: service.title, description: service.summary, alternates: { canonical: url }, openGraph: { title: service.title, description: service.summary, url, type: 'website', images: [{ url: `${site.url}${service.image}`, alt: service.imageAlt }] } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = refreshContent.services.find((item) => item.slug === slug);
  const guide = serviceGuides[slug];
  if (!service || !guide) notFound();
  const index = refreshContent.services.findIndex((item) => item.slug === slug);
  const related = [...refreshContent.services.slice(index + 1), ...refreshContent.services.slice(0, index)].slice(0, 3);
  const url = `${site.url}/services/${slug}`;
  const faqs = [
    { q: guide.question, a: guide.answer },
    { q: 'What should be ready before the role starts?', a: `Bring the working examples, source records, tools and approval route for ${service.title.toLowerCase()}. Start with a small set of work that a manager can check.` },
    { q: 'How do we decide when to expand the scope?', a: 'Review a sample of completed work, open exceptions and handoffs. Add responsibilities only when the current process is clear and consistently followed.' },
  ];
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.summary, url, areaServed: 'Philippines' },
    { '@type': 'HowTo', '@id': `${url}#launch`, name: `Start ${service.title.toLowerCase()} support`, step: guide.launch.map((step, position) => ({ '@type': 'HowToStep', position: position + 1, name: ['Set the rules', 'Run a first batch', 'Review the handoff'][position], text: step })) },
    { '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
  ] };

  return <><Header /><main id="main-content" className="ov-guide"><JsonLd data={schema} />
    <section className="ov-guide-hero"><div className="ov-guide-wrap ov-guide-hero-grid"><div>
      <a href="/services" className="ov-guide-back">&larr; All services</a>
      <p className="ov-guide-kicker">Overseas Virtual Assistant / Service guide</p><h1>{service.title}</h1>
      <p className="ov-guide-lead">{service.summary}</p><p className="ov-guide-fit">{guide.fit}</p>
      <a className="ov-guide-button" href={`/contact-us?role=${slug}`}>Discuss this role <span aria-hidden="true">&nearr;</span></a>
    </div><figure><img src={service.image} alt={service.imageAlt} width="1200" height="800" fetchPriority="high" /></figure></div></section>

    <nav className="ov-guide-nav" aria-label="This service guide"><div className="ov-guide-wrap"><a href="#scope">The work</a><a href="#example">Working example</a><a href="#launch">Getting started</a><a href="#boundary">Decision boundary</a></div></nav>

    <section id="scope" className="ov-guide-scope"><div className="ov-guide-wrap"><div className="ov-guide-section-head"><p className="ov-guide-kicker">The work</p><h2>A focused role with a visible finish line.</h2></div><div className="ov-guide-scope-grid"><div className="ov-guide-tasks"><h3>In scope</h3><ul>{service.tasks.map((task) => <li key={task}>{task}</li>)}</ul></div><div className="ov-guide-inputs"><h3>To begin, provide</h3><ul>{guide.inputs.map((input) => <li key={input}>{input}</li>)}</ul><h3>What comes back</h3><ul>{guide.outputs.map((output) => <li key={output}>{output}</li>)}</ul></div></div></div></section>

    <section id="example" className="ov-guide-example"><div className="ov-guide-wrap ov-guide-example-grid"><div><p className="ov-guide-kicker">A working day</p><h2>{guide.example.title}</h2><p>{guide.example.request}</p></div><div><article><h3>The assistant prepares</h3><p>{guide.example.preparation}</p></article><article><h3>The owner decides</h3><p>{guide.example.owner}</p></article></div></div></section>

    <section id="launch" className="ov-guide-launch"><div className="ov-guide-wrap"><div className="ov-guide-section-head"><p className="ov-guide-kicker">Getting started</p><h2>Start with one reviewable lane.</h2></div><div className="ov-guide-launch-grid">{guide.launch.map((step, position) => <article key={step}><h3>{['Set the rules', 'Run a first batch', 'Review the handoff'][position]}</h3><p>{step}</p></article>)}</div></div></section>

    <section id="boundary" className="ov-guide-boundary"><div className="ov-guide-wrap ov-guide-boundary-grid"><div><p className="ov-guide-kicker">Decision boundary</p><h2>Keep authority with the right person.</h2><p>{guide.boundary}</p></div><div><h3>Checks to agree before launch</h3><ul><li>Give access only to the tools and records this role needs.</li><li>Keep an owner for exceptions and approvals.</li><li>Review a sample of the work before the queue expands.</li></ul></div></div></section>

    <section className="ov-guide-faq"><div className="ov-guide-wrap ov-guide-faq-grid"><div><p className="ov-guide-kicker">Before launch</p><h2>Questions to settle.</h2></div><div>{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
    <section className="ov-guide-related"><div className="ov-guide-wrap"><div className="ov-guide-section-head"><p className="ov-guide-kicker">Related roles</p><h2>Build around the next useful handoff.</h2></div><div className="ov-guide-related-grid">{related.map((item) => <a href={`/services/${item.slug}`} key={item.slug}><img src={item.image} alt={item.imageAlt} width="600" height="400" loading="lazy" /><span>{item.title} <b aria-hidden="true">&nearr;</b></span><p>{item.summary}</p></a>)}</div></div></section>
    <section className="ov-guide-cta"><div className="ov-guide-wrap"><p className="ov-guide-kicker">Plan the role</p><h2>Bring the work. We will help define the handoff.</h2><p>Share the tasks, tools, hours and decisions involved. We can shape a practical Philippines-based role around them.</p><a className="ov-guide-button" href={`/contact-us?role=${slug}`}>Contact Us about {service.title} <span aria-hidden="true">&nearr;</span></a></div></section>
  </main><Footer /></>;
}
