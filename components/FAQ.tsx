'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    frage: 'Was kostet eine professionelle Moderatorin?',
    antwort:
      'Die Kosten variieren je nach Veranstaltungsformat, Dauer und Reiseaufwand. Sarah Eid erstellt auf Anfrage ein individuelles Angebot – gerne über das Kontaktformular.',
  },
  {
    frage: 'Welche Events moderiert Sarah Eid?',
    antwort:
      'Sarah Eid moderiert Firmenevents, Jubiläen, Messen, Kongresse, Galas, politische Podiumsdiskussionen, Parteitage, Wahlkampfveranstaltungen, Charity-Events, Modenschauen und Sportevents – bundesweit.',
  },
  {
    frage: 'Wie kann ich Sarah Eid als Moderatorin buchen?',
    antwort:
      'Eine Buchungsanfrage ist über das Kontaktformular auf dieser Seite, per E-Mail an mail@saraheid.de oder telefonisch unter +49-176-32727160 möglich.',
  },
  {
    frage: 'In welchen Bundesländern ist Sarah Eid buchbar?',
    antwort:
      'Sarah Eid ist bundesweit buchbar. Ihr Schwerpunkt liegt in Rheinland-Pfalz, sie ist jedoch für Veranstaltungen in ganz Deutschland verfügbar.',
  },
  {
    frage: 'Hat Sarah Eid Erfahrung mit politischen Veranstaltungen?',
    antwort:
      'Ja. Sarah Eid hat u.a. den Landesparteitag der Freien Wähler RLP, Gesprächsrunden mit Bundesverkehrsminister Patrick Schnieder sowie Veranstaltungen im Kontext der rheinland-pfälzischen Landtagswahl 2026 moderiert. Politische Anfragen werden nach sorgfältiger Prüfung angenommen.',
  },
];

export default function FAQ() {
  const [offen, setOffen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="section-padding"
      style={{ background: '#0A0A0F' }}
      aria-label="Häufige Fragen – Sarah Eid Moderatorin"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-5"
          >
            Häufige Fragen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl text-cream mb-4"
          >
            FAQ
          </motion.h2>
          <div className="gold-divider-center" />
        </div>

        {/* Fragen */}
        <dl className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ border: '1px solid rgba(201,168,76,0.18)', background: '#13131A' }}
            >
              <dt>
                <button
                  onClick={() => setOffen(offen === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                  aria-expanded={offen === i}
                >
                  <span className="font-inter font-medium text-cream text-sm pr-4">
                    {item.frage}
                  </span>
                  <span
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: '#C9A84C',
                      transform: offen === i ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                  </span>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {offen === i && (
                  <motion.dd
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-inter font-light text-sm text-cream/60 leading-relaxed px-6 pb-5">
                      {item.antwort}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
