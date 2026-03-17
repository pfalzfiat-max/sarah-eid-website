'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  const scrollToKontakt = () =>
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToLeistungen = () =>
    document.querySelector('#leistungen')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain"
      aria-label="Hero – Sarah Eid Moderatorin & Sprecherin"
      style={{ background: '#0A0A0F' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sarah-f1.jpg"
          alt="Sarah Eid – Moderatorin auf der Bühne"
          fill
          priority={true}
          className="object-cover object-center opacity-30"
          sizes="100vw"
        />
        {/* Deep cinematic gradient */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(10,10,15,0.5) 0%, rgba(10,10,15,0.4) 40%, rgba(10,10,15,0.75) 85%, #0A0A0F 100%)' }} />
        {/* Gold vignette bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to top, rgba(201,168,76,0.06), transparent)' }} />
      </div>

      {/* Decorative corner lines */}
      <div className="absolute top-28 left-8 lg:left-16 w-px h-20 hidden lg:block" style={{ background: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
      <div className="absolute top-28 left-8 lg:left-16 w-20 h-px hidden lg:block" style={{ background: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
      <div className="absolute bottom-24 right-8 lg:right-16 w-px h-20 hidden lg:block" style={{ background: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
      <div className="absolute bottom-24 right-8 lg:right-16 w-20 h-px hidden lg:block" style={{ background: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-cream pt-20">

        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="font-inter text-xs tracking-[0.35em] uppercase text-gold mb-8"
        >
          Professionelle Moderatorin · Bundesweit buchbar
        </motion.p>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.4)}
          className="font-playfair font-bold leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)', textShadow: '0 4px 60px rgba(0,0,0,0.5)' }}
        >
          Sarah Eid
        </motion.h1>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="w-14 h-px mx-auto mb-7"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          aria-hidden="true"
        />

        {/* Tagline – Cormorant */}
        <motion.p
          {...fadeUp(0.85)}
          className="font-cormorant font-light mb-4"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', color: 'rgba(245,240,232,0.75)', letterSpacing: '0.02em' }}
        >
          Die Stimme für Ihren besonderen Moment.
        </motion.p>

        {/* Subline */}
        <motion.p
          {...fadeUp(1.0)}
          className="font-inter font-light text-base text-cream/50 max-w-xl mx-auto leading-relaxed mb-12"
        >
          Moderatorin für Veranstaltungen, Live-Events, Messen, Talkrunden, Podcasts, TV &amp; Radio –
          sowie Sprecherin für Imagefilme und Werbung.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.15)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={scrollToKontakt}
            className="btn-primary rounded-full px-10 py-4 w-full sm:w-auto"
            aria-label="Jetzt Buchungsanfrage stellen"
          >
            Jetzt anfragen
          </button>
          <button
            onClick={scrollToLeistungen}
            className="btn-secondary rounded-full px-10 py-4 w-full sm:w-auto"
            aria-label="Leistungen von Sarah Eid entdecken"
          >
            Leistungen entdecken
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-24 pb-8"
        >
          {[
            { value: '50+', label: 'Events' },
            { value: '10+', label: 'Jahre Erfahrung' },
            { value: '6', label: 'Bundesländer' },
            { value: '2.400+', label: 'Instagram-Follower' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair font-bold text-gold"
                style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.875rem)' }}>
                {stat.value}
              </p>
              <p className="font-inter text-[10px] text-cream/40 uppercase tracking-[0.2em] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-inter text-[9px] text-cream/30 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
