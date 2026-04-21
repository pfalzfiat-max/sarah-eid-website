'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ueberMich } from '@/lib/content';

export default function UeberMich() {
  return (
    <section
      id="ueber-mich"
      className="section-padding overflow-hidden"
      style={{ background: '#13131A' }}
      aria-label="Über Sarah Eid – Warum ich?"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
            className="relative"
          >
            {/* Outer gold frame */}
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
              {/* Gold border offset */}
              <div
                className="absolute -top-4 -right-4 w-full h-full hidden lg:block"
                style={{ border: '1px solid rgba(201,168,76,0.4)' }}
                aria-hidden="true"
              />
              <Image
                src="/images/sarah+alexander.jpeg"
                alt="Sarah Eid mit Alexander Schweitzer"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-5">
              {ueberMich.label}
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-2 leading-tight">
              {ueberMich.headingLine1}
              <span className="block">{ueberMich.headingLine2}</span>
            </h2>
            <div className="gold-divider" />

            <p className="font-inter font-light text-cream/60 leading-relaxed mb-5">
              {ueberMich.bioParagraf1}
            </p>
            <p className="font-inter font-light text-cream/60 leading-relaxed mb-8">
              {ueberMich.bioParagraf2}
            </p>

            {/* Strengths */}
            <ul className="space-y-3 mb-10" aria-label="Stärken von Sarah Eid">
              {ueberMich.staerken.map((strength) => (
                <li key={strength} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 text-gold font-bold text-sm" aria-hidden="true">✓</span>
                  <span className="font-inter font-light text-sm text-cream/70 leading-relaxed">
                    {strength}
                  </span>
                </li>
              ))}
            </ul>

            {/* Leistungsbereiche pills */}
            <div className="mb-8">
              <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-muted mb-3">
                Tätigkeitsbereiche
              </p>
              <div
                className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
                aria-label="Tätigkeitsbereiche von Sarah Eid"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {ueberMich.bereiche.map(({ icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 whitespace-nowrap px-3 py-1.5 rounded-full font-inter text-xs flex-shrink-0"
                    style={{
                      background: 'rgba(201,168,76,0.08)',
                      border: '1px solid rgba(201,168,76,0.35)',
                      color: '#C9A84C',
                    }}
                  >
                    <span aria-hidden="true">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Blockquote */}
            <blockquote
              className="border-l-2 pl-5 py-1 mb-8"
              style={{ borderColor: '#C9A84C' }}
            >
              <p className="font-cormorant font-light text-xl text-cream/80 italic leading-relaxed">
                &ldquo;{ueberMich.zitat}&rdquo;
              </p>
              <footer className="font-inter text-[10px] text-gold uppercase tracking-[0.25em] mt-3">
                Sarah Eid
              </footer>
            </blockquote>

            <button
              onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary rounded-full"
              aria-label="Buchungsanfrage senden"
            >
              {ueberMich.ctaButton}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
