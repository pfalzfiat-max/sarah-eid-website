'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

export default function VideoReel() {
  const [isPlaying, setIsPlaying] = useState(false);

  const showreelUrl = process.env.NEXT_PUBLIC_SHOWREEL_URL || '';
  const videoId = showreelUrl ? extractYouTubeId(showreelUrl) : null;
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : null;

  return (
    <section
      id="showreel"
      className="section-padding relative overflow-hidden"
      style={{ background: '#13131A' }}
      aria-label="Showreel – Sarah Eid Moderatorin"
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 60px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-xs tracking-[0.3em] uppercase text-gold mb-4"
          >
            Showreel
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl text-cream mb-4"
          >
            Sarah Eid in Aktion
          </motion.h2>
          <div
            className="w-14 h-0.5 mx-auto mb-6"
            style={{ background: 'linear-gradient(90deg, #C9A84C, #E2C97E)' }}
            aria-hidden="true"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter font-light text-muted max-w-xl mx-auto"
          >
            Erleben Sie Bühnenpräsenz, Professionalität und Herzlichkeit
            in einem – mein Showreel gibt einen Einblick in meine Moderationsarbeit.
          </motion.p>
        </div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video"
          style={{ background: '#0A0A0F', boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.15)' }}
        >
          {!embedUrl ? (
            /* Fallback UI – shown when NEXT_PUBLIC_SHOWREEL_URL is not set */
            <div
              className="absolute inset-0 flex flex-col items-center justify-center gap-6"
              aria-label="Showreel folgt in Kürze"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'radial-gradient(ellipse at center, #C9A84C44 0%, transparent 70%)' }}
                aria-hidden="true"
              />
              <div className="relative z-10 text-center px-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.06)' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7 text-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                </div>
                <p className="font-playfair text-xl text-cream mb-2">Showreel folgt in Kürze</p>
                <p className="font-inter text-xs text-cream/40 mb-6 max-w-xs mx-auto leading-relaxed">
                  Das Showreel wird demnächst hier verfügbar sein. Auf Anfrage sende ich Ihnen gerne aktuelle Videobeispiele zu.
                </p>
                <button
                  onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-outline-gold text-xs px-6 py-2"
                >
                  Videobeispiele anfordern
                </button>
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/20" aria-hidden="true" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/20" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/20" aria-hidden="true" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/20" aria-hidden="true" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {isPlaying ? (
                <motion.iframe
                  key="iframe"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={embedUrl}
                  title="Sarah Eid Showreel – Moderatorin & Sprecherin"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <motion.div
                  key="thumbnail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                  style={{ background: '#0A0A0F' }}
                  onClick={() => setIsPlaying(true)}
                  role="button"
                  tabIndex={0}
                  aria-label="Showreel abspielen"
                  onKeyDown={(e) => e.key === 'Enter' && setIsPlaying(true)}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(ellipse at center, #C9A84C44 0%, transparent 70%)' }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-gold group-hover:bg-gold/20 transition-colors duration-300"
                      style={{ boxShadow: '0 0 40px rgba(201,168,76,0.2)' }}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gold ml-1">
                        <path d="M8 5.14v14l11-7-11-7z" />
                      </svg>
                    </motion.div>
                    <div className="text-center">
                      <p className="font-playfair text-white text-xl mb-1">Showreel ansehen</p>
                      <p className="font-inter text-white/40 text-xs uppercase tracking-wider">
                        Sarah Eid – Moderatorin & Sprecherin
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold/30" aria-hidden="true" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold/30" aria-hidden="true" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold/30" aria-hidden="true" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold/30" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </motion.div>

        {/* Note below video */}
        {embedUrl && (
          <p className="text-center font-inter text-xs text-white/30 mt-6 tracking-wide">
            Showreel wird auf Anfrage zur Verfügung gestellt ·{' '}
            <button
              onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gold/60 hover:text-gold transition-colors underline"
            >
              Jetzt anfragen
            </button>
          </p>
        )}
      </div>
    </section>
  );
}
