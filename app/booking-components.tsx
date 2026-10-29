'use client';

import { useEffect, useRef } from 'react';
import reviewProvenance from './review-provenance.json';

const stealthAgentsReviews = reviewProvenance.records;

export function TestimonialsRail({ contact = false }: { contact?: boolean }) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingId = contact ? 'contact-stealth-agents-reviews' : 'booking-stealth-agents-reviews';

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;
    let previous = performance.now();
    let offset = 0;
    let paused = false;
    const tick = (now: number) => {
      const elapsed = Math.min(now - previous, 50);
      previous = now;
      if (!paused) {
        offset += elapsed * 0.026;
        const first = track.firstElementChild as HTMLElement | null;
        if (first) {
          const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0');
          const width = first.getBoundingClientRect().width + gap;
          if (offset >= width) { track.append(first); offset -= width; }
        }
        track.style.transform = `translate3d(${-offset}px,0,0)`;
      }
      frame = requestAnimationFrame(tick);
    };
    const pause = () => { paused = true; };
    const resume = () => { paused = false; previous = performance.now(); };
    viewport.addEventListener('pointerenter', pause);
    viewport.addEventListener('pointerleave', resume);
    viewport.addEventListener('focusin', pause);
    viewport.addEventListener('focusout', resume);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      viewport.removeEventListener('pointerenter', pause);
      viewport.removeEventListener('pointerleave', resume);
      viewport.removeEventListener('focusin', pause);
      viewport.removeEventListener('focusout', resume);
    };
  }, []);

  return <section className={`sa-testimonials${contact ? ' sa-testimonials-contact' : ''}`} aria-labelledby={headingId}>
    <div className="sa-testimonial-heading"><div><p>Client feedback</p><h2 id={headingId}>What StealthAgents clients said</h2></div></div>
    <div ref={viewportRef} className="sa-testimonial-viewport" tabIndex={0} aria-label="Ten StealthAgents client reviews">
      <div ref={trackRef} className="sa-testimonial-track">
        {stealthAgentsReviews.map((item) => <article className="sa-testimonial-card" key={item.name}>
          <h3>{item.headline}</h3><blockquote>“{item.body}”</blockquote><p>{item.name}</p><span className="sa-testimonial-source">{item.detail}</span>
        </article>)}
      </div>
    </div>
  </section>;
}
