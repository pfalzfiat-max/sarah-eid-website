'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const stats = [
  { value: '50+', label: 'Events' },
  { value: '10+', label: 'Jahre' },
  { value: '6', label: 'Bundesländer' },
  { value: '2.400+', label: 'Follower' },
];

export default function Hero() {
  const scrollToKontakt = () =>
    document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToLeistungen = () =>
    document.querySelector('#leistungen')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grain"
      aria-label="Hero – Sarah Eid Moderatorin & Sprecherin"
      style={{ background: '#0A0A0F' }}
    >
      {/* Subtle atmospheric background */}
      <div className="absolute inset-0 z-0 opacity-[0.07]">
        <Image
          src="/images/sarah-f1.jpg"
          alt=""
          fill
          priority={true}
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />
      </div>

      {/* Radial glow top-right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(201,168,76,0.08) 0%, transparent 65%)' }}
        aria-hidden="true"
      />

      {/* Decorative corner lines */}
      <div className="absolute top-28 left-8 lg:left-16 w-px h-20 hidden lg:block z-10" style={{ background: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />
      <div className="absolute top-28 left-8 lg:left-16 w-20 h-px hidden lg:block z-10" style={{ background: 'rgba(201,168,76,0.35)' }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen py-28 lg:py-32">

          {/* Left – Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            <motion.p
              {...fadeUp(0.2)}
              className="font-inter text-xs tracking-[0.35em] uppercase text-gold mb-8"
            >
              Professionelle Moderatorin · Bundesweit buchbar
            </motion.p>

            <motion.h1
              {...fadeUp(0.4)}
              className="font-playfair font-bold leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', textShadow: '0 4px 60px rgba(0,0,0,0.5)' }}
            >
              Sarah Eid
            </motion.h1>

            {/* Gold divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="w-14 h-px mb-7 mx-auto lg:mx-0"
              style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
              aria-hidden="true"
            />

            {/* Tagline */}
            <motion.p
              {...fadeUp(0.85)}
              className="font-cormorant font-light mb-4"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: 'rgba(245,240,232,0.75)', letterSpacing: '0.02em' }}
            >
              Die Stimme für Ihren besonderen Moment.
            </motion.p>

            {/* Subline */}
            <motion.p
              {...fadeUp(1.0)}
              className="font-inter font-light text-base text-cream/50 max-w-lg mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              Moderatorin für Veranstaltungen, Live-Events, Messen, Talkrunden, Podcasts, TV &amp; Radio –
              sowie Sprecherin für Imagefilme und Werbung.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(1.15)}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14"
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
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && (
                    <div className="w-px h-8" style={{ background: 'rgba(37,37,48,1)' }} aria-hidden="true" />
                  )}
                  <div className="text-center lg:text-left">
                    <p className="font-playfair font-bold text-gold" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
                      {stat.value}
                    </p>
                    <p className="font-inter text-[9px] text-cream/40 uppercase tracking-[0.2em] mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right – Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-none" style={{ maxWidth: '420px' }}>
              {/* Gold offset frame */}
              <div
                className="absolute -top-5 -right-5 w-full h-full hidden lg:block"
                style={{ border: '1px solid rgba(201,168,76,0.35)' }}
                aria-hidden="true"
              />
              {/* Gold offset frame bottom-left */}
              <div
                className="absolute -bottom-5 -left-5 w-24 h-24 hidden lg:block"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
                aria-hidden="true"
              />

              {/* Portrait */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/sarah-portrait.jpg"
                  alt="Sarah Eid – Moderatorin auf der Bühne"
                  fill
                  priority={true}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                {/* Bottom gradient */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.6) 0%, transparent 100%)' }}
                  aria-hidden="true"
                />
              </div>

              {/* Floating Moderatorin badge */}
              <div
                className="absolute bottom-6 left-0 lg:-left-8 px-5 py-3.5"
                style={{
                  background: 'rgba(10,10,15,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}
              >
                <p className="font-inter text-[9px] text-gold uppercase tracking-[0.3em]">Moderatorin</p>
                <p className="font-playfair text-cream text-sm mt-0.5">Rheinland-Pfalz · Bundesweit</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-inter text-[9px] text-cream/30 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-cream/30 to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
