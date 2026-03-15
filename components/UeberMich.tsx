'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const strengths = [
  'Natürliche Bühnenpräsenz & authentische Ausstrahlung',
  'Souveräner Umgang mit spontanen Live-Situationen',
  'Erfahrung mit hochrangigen Persönlichkeiten aus Politik & Wirtschaft',
  'Weinexpertise: Ehemalige Weinprinzessin Südliche Weinstraße 23/24',
  'Zuletzt tätig als Moderatorin für politische Großveranstaltungen in Rheinland-Pfalz',
  'Sprachlich versiert – Vorbereitung auf Zielgruppe und Agenda',
];

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
                src={process.env.NEXT_PUBLIC_PORTRAIT_URL || 'https://picsum.photos/600/800?random=10'}
                alt="Sarah Eid – Moderatorin und Sprecherin aus Rheinland-Pfalz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Weinprinzessin badge */}
              <div
                className="absolute bottom-4 left-4 px-3 py-2 border"
                style={{
                  background: 'rgba(10,10,15,0.85)',
                  backdropFilter: 'blur(8px)',
                  borderColor: 'rgba(201,168,76,0.5)',
                }}
                aria-label="Weinprinzessin Südliche Weinstraße 2023/24"
              >
                <p className="font-inter text-[9px] text-gold uppercase tracking-[0.25em]">
                  Weinprinzessin SÜW 23/24
                </p>
              </div>
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
              Warum Sarah Eid?
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-2 leading-tight">
              Mehr als eine Stimme –
              <span className="block">eine Persönlichkeit.</span>
            </h2>
            <div className="gold-divider" />

            <p className="font-inter font-light text-cream/60 leading-relaxed mb-5">
              Als Moderatorin aus Rheinland-Pfalz bringe ich Erfahrung, Empathie und Energie
              auf die Bühne. Ob große Gala, politische Podiumsdiskussion oder emotionaler
              Charity-Abend – ich passe mich jedem Event an, ohne meine Handschrift zu verlieren.
            </p>
            <p className="font-inter font-light text-cream/60 leading-relaxed mb-8">
              Mein Hintergrund als anerkannte Beraterin für Deutschen Wein und ehemalige
              Weinprinzessin verschafft mir eine besondere Glaubwürdigkeit für Wein- und
              Genussevents. Zuletzt war ich u.a. als Moderatorin für politische Großveranstaltungen
              in Rheinland-Pfalz tätig – ein Bereich, der höchste Anforderungen an Professionalität,
              Neutralität und Spontanität stellt.
            </p>

            {/* Strengths */}
            <ul className="space-y-3 mb-10" aria-label="Stärken von Sarah Eid">
              {strengths.map((strength) => (
                <li key={strength} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 text-gold font-bold text-sm" aria-hidden="true">✓</span>
                  <span className="font-inter font-light text-sm text-cream/70 leading-relaxed">
                    {strength}
                  </span>
                </li>
              ))}
            </ul>

            {/* Blockquote */}
            <blockquote
              className="border-l-2 pl-5 py-1 mb-8"
              style={{ borderColor: '#C9A84C' }}
            >
              <p className="font-cormorant font-light text-xl text-cream/80 italic leading-relaxed">
                &ldquo;Professionelle Moderation bedeutet für mich: Vorbereitung,
                Präsenz und Herzlichkeit – in dieser Reihenfolge.&rdquo;
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
              Jetzt anfragen
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
