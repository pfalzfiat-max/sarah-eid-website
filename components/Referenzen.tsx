'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      'Sarah Eid hat unsere Jubiläumsfeier auf ein völlig neues Level gehoben. Professionell, charmant und immer souverän – auch wenn der Abend eine unerwartete Wendung nahm.',
    name: 'Markus L.',
    role: 'Geschäftsführer, Mittelständisches Unternehmen, Mannheim',
  },
  {
    quote:
      'Die Messe-Moderation durch Sarah war genau das, was wir gesucht haben: strukturiert, sympathisch und mit der richtigen Dosierung Humor. Unsere Aussteller und Besucher waren begeistert.',
    name: 'Claudia F.',
    role: 'Eventmanagerin, Fachmesse Rhein-Neckar',
  },
  {
    quote:
      'Für unsere politische Podiumsdiskussion brauchten wir jemanden, der mit Fingerspitzengefühl moderiert und alle Beteiligten fair zu Wort kommen lässt. Sarah hat das meisterhaft gemeistert.',
    name: 'Dr. Andreas K.',
    role: 'Referent, Landespolitisches Forum RLP',
  },
];

const stats = [
  { value: 50, suffix: '+', label: 'Events' },
  { value: 10, suffix: '+', label: 'Jahre Erfahrung' },
  { value: 6, suffix: '', label: 'Bundesländer' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(1800 / target);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <div ref={ref}>{count}{suffix}</div>;
}

export default function Referenzen() {
  return (
    <section
      id="referenzen"
      className="section-padding"
      style={{ background: '#0A0A0F' }}
      aria-label="Referenzen und Kundenstimmen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-5"
          >
            Vertrauen & Referenzen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl text-cream mb-4"
          >
            Was Kunden sagen
          </motion.h2>
          <div className="gold-divider-center" />
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8 mb-20 max-w-xl mx-auto text-center"
          aria-label="Zahlen und Fakten"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border" aria-hidden="true" />
              )}
              <p
                className="font-playfair text-5xl font-bold mb-2 text-gold"
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
          aria-label="Kundenbewertungen"
        >
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              role="listitem"
              className="relative p-8 transition-all duration-300 group"
              style={{
                background: '#13131A',
                border: '1px solid #252530',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#252530';
              }}
            >
              {/* Opening quote mark */}
              <div
                className="font-playfair leading-none select-none mb-4"
                style={{ fontSize: '3.5rem', color: 'rgba(201,168,76,0.25)', lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5" aria-label="5 von 5 Sternen">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="text-gold text-sm" aria-hidden="true">★</span>
                ))}
              </div>

              <p className="font-cormorant italic text-xl leading-relaxed mb-6"
                style={{ color: 'rgba(245,240,232,0.8)' }}>
                {t.quote}
              </p>

              <footer>
                <div className="w-8 h-px mb-3 bg-gold" aria-hidden="true" />
                <cite className="not-italic">
                  <p className="font-inter font-medium text-xs text-gold uppercase tracking-wider">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-muted mt-0.5">
                    {t.role}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
