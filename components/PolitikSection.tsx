'use client';

import { motion } from 'framer-motion';

const pills = ['Diskret & vertraulich', 'Überparteilich professionell', 'Live-erfahren & belastbar'];

export default function PolitikSection() {
  return (
    <section
      id="politik"
      className="py-32 relative overflow-hidden"
      style={{ background: '#070710', borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}
      aria-label="Politikmoderation – Sarah Eid"
    >
      {/* Decorative large quote */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 font-playfair leading-none select-none pointer-events-none"
        style={{ fontSize: '18rem', color: 'rgba(201,168,76,0.05)' }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-6"
        >
          Politikmoderation
        </motion.p>

        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-playfair text-4xl md:text-5xl text-cream mb-8 leading-tight"
        >
          Moderation auf höchstem
          <br />politischen Niveau.
        </motion.h2>

        {/* Body – Cormorant */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-cormorant font-light text-xl leading-relaxed mb-5"
          style={{ color: 'rgba(245,240,232,0.7)' }}
        >
          Politische Veranstaltungen verlangen besondere Sorgfalt, Neutralität und absolute
          Professionalität. Sarah Eid moderiert Parteiveranstaltungen, Podiumsdiskussionen
          und politische Bürgerevents mit Fingerspitzengefühl.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-cormorant font-light text-xl leading-relaxed mb-12"
          style={{ color: 'rgba(245,240,232,0.7)' }}
        >
          Zu ihren Referenzen zählen Veranstaltungen im Umfeld der rheinland-pfälzischen
          Landespolitik – darunter Veranstaltungen im Kontext der Landtagswahl 2026.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
          aria-label="Kernkompetenzen Politikmoderation"
        >
          {pills.map((label) => (
            <span
              key={label}
              className="font-inter text-xs px-4 py-2 rounded-full"
              style={{
                border: '1px solid rgba(201,168,76,0.4)',
                color: 'rgba(245,240,232,0.7)',
              }}
            >
              {label}
            </span>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-l-2 pl-4 text-left max-w-md mx-auto mb-10"
          style={{ borderColor: 'rgba(201,168,76,0.6)' }}
          role="note"
          aria-label="Hinweis zu politischen Moderationen"
        >
          <p className="font-inter text-xs italic leading-relaxed text-muted">
            Politische Anfragen werden ausschließlich nach persönlichem Vorgespräch
            und sorgfältiger Prüfung angenommen.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button
            onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline-gold"
            aria-label="Anfrage für politische Veranstaltungen stellen"
          >
            Anfrage stellen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
