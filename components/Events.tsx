'use client';

import { motion } from 'framer-motion';

const events = [
  {
    name: 'Zukunftsdialog Ahrtal',
    description:
      'Politische Talkrunde mit Ministerpräsident Alexander Schweitzer (SPD RLP) über Wiederaufbau, Wirtschaft und Perspektiven der Region.',
    kategorie: 'Politik',
    icon: '🎙️',
  },
  {
    name: 'Alexander-Schweitzer-Tour',
    description:
      'Moderation der politischen Gesprächsrunden zur Zukunft des Weinbaus in der Pfalz – Neustadt-Mußbach.',
    kategorie: 'Politik & Wein',
    icon: '🍇',
  },
  {
    name: 'Frankenthaler Pfalzfest',
    description:
      '4 Tage Bühnenmoderation – von der feierlichen Eröffnung mit dem Oberbürgermeister bis zu Interviews mit Künstlern und regionalen Persönlichkeiten.',
    kategorie: 'Festival',
    icon: '🎪',
  },
  {
    name: 'Talkrunde Mainzer Dom',
    description:
      'Outdoor-Moderation in der Landeshauptstadt Mainz – professionell, mitreißend, mit Bühnenpräsenz unter Scheinwerfern.',
    kategorie: 'Live-Event',
    icon: '🎤',
  },
  {
    name: 'Billigheimer Purzelmarkt',
    description:
      'Moderation des PreOpening-Abends beim 575. Purzelmarkt – inklusive der feierlichen Krönung der neuen Purzelmarktkönigin.',
    kategorie: 'Brauchtum',
    icon: '👑',
  },
  {
    name: 'IHK Pfalz Workshop',
    description:
      'Als Social-Media-Expertin & Kameracoach leitete Sarah einen Praxis-Workshop zu professionellen Videoinhalten für Instagram & Recruiting.',
    kategorie: 'Coach / IHK',
    icon: '📹',
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="section-padding"
      style={{ background: '#0A0A0F' }}
      aria-label="Ausgewählte Events – Sarah Eid"
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
            Portfolio & Referenzen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl text-cream mb-4"
          >
            Ausgewählte Events
          </motion.h2>
          <div className="gold-divider-center" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter font-light text-muted max-w-xl mx-auto"
          >
            Ein Einblick in aktuelle Projekte – von politischen Talkrunden bis zu
            Bühnenmodeationen und Workshops.
          </motion.p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Event-Portfolio"
        >
          {events.map((event, i) => (
            <motion.article
              key={event.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              role="listitem"
              className="group relative flex flex-col p-7 transition-all duration-300 cursor-default"
              style={{
                background: '#13131A',
                border: '1px solid rgba(201,168,76,0.18)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.45)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.18)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Gold top-accent line on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
                aria-hidden="true"
              />

              {/* Icon */}
              <span className="text-3xl mb-5 block" aria-hidden="true">{event.icon}</span>

              {/* Badge */}
              <span
                className="inline-flex self-start items-center px-2.5 py-1 rounded-full font-inter text-[10px] uppercase tracking-widest mb-4"
                style={{
                  background: 'rgba(201,168,76,0.08)',
                  border: '1px solid rgba(201,168,76,0.35)',
                  color: '#C9A84C',
                }}
              >
                {event.kategorie}
              </span>

              {/* Name */}
              <h3 className="font-playfair text-lg text-cream mb-3 leading-snug">
                {event.name}
              </h3>

              {/* Description */}
              <p className="font-inter font-light text-sm text-cream/50 leading-relaxed">
                {event.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
