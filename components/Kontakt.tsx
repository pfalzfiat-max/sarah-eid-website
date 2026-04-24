'use client';

import { motion } from 'framer-motion';

export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="section-padding"
      style={{ background: '#0A0A0F' }}
      aria-label="Anfrage an Sarah Eid"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-5"
        >
          Anfragen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-playfair text-4xl md:text-5xl text-cream mb-4"
        >
          Lassen Sie uns sprechen.
        </motion.h2>
        <div className="gold-divider-center" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter font-light text-muted max-w-md mx-auto mb-14"
        >
          Ich freue mich auf Ihre Anfrage und melde mich innerhalb von 24–48 Stunden.
        </motion.p>

        {/* Kontakt-Karten */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* E-Mail */}
          <a
            href="mailto:mail@saraheid.de"
            className="group flex items-center gap-5 w-full sm:w-auto px-8 py-6 transition-all duration-300"
            style={{ background: '#13131A', border: '1px solid rgba(201,168,76,0.2)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
            aria-label="E-Mail an Sarah Eid senden"
          >
            <div
              className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-gold"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-gold group-hover:text-dark transition-colors" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-1">E-Mail</p>
              <p className="font-inter text-sm text-cream group-hover:text-gold transition-colors">
                mail@saraheid.de
              </p>
            </div>
          </a>

          {/* Telefon */}
          <a
            href="tel:+4917632727160"
            className="group flex items-center gap-5 w-full sm:w-auto px-8 py-6 transition-all duration-300"
            style={{ background: '#13131A', border: '1px solid rgba(201,168,76,0.2)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
            aria-label="Sarah Eid anrufen"
          >
            <div
              className="w-12 h-12 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-gold"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 text-gold group-hover:text-dark transition-colors" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-gold mb-1">Telefon</p>
              <p className="font-inter text-sm text-cream group-hover:text-gold transition-colors">
                0176 32727160
              </p>
            </div>
          </a>
        </motion.div>

        {/* Hinweis */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-inter font-light text-xs text-muted mt-10"
        >
          Rheinland-Pfalz · Baden-Württemberg · Hessen · <span className="text-cream/60">Bundesweit auf Anfrage</span>
        </motion.p>
      </div>
    </section>
  );
}
