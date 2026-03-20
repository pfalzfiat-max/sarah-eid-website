'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const events = [
  {
    name: 'Zukunftsdialog Ahrtal',
    description:
      'Politische Talkrunde mit Ministerpräsident Alexander Schweitzer (SPD RLP) über Wiederaufbau, Wirtschaft und Perspektiven der Region.',
    kategorie: 'Politik',
    image: '/images/events/Ahrtal.jpeg',
  },
  {
    name: 'Alexander-Schweitzer-Tour',
    description:
      'Moderation der politischen Gesprächsrunden zur Zukunft des Weinbaus in der Pfalz – Neustadt-Mußbach.',
    kategorie: 'Politik & Wein',
    image: '/images/events/Alexander-Schweizer.jpeg',
  },
  {
    name: 'Frankenthaler Pfalzfest',
    description:
      '4 Tage Bühnenmoderation – von der feierlichen Eröffnung mit dem Oberbürgermeister bis zu Interviews mit Künstlern und regionalen Persönlichkeiten.',
    kategorie: 'Festival',
    image: '/images/events/Pfalzfest.jpeg',
  },
  {
    name: 'Talkrunde Mainzer Dom',
    description:
      'Outdoor-Moderation in der Landeshauptstadt Mainz – professionell, mitreißend, mit Bühnenpräsenz und starker Außenwirkung.',
    kategorie: 'Live-Event',
    image: '/images/events/talkrunde-mainzer-dom.jpg',
  },
  {
    name: 'Billigheimer Purzelmarkt',
    description:
      'Moderation des PreOpening-Abends beim 575. Purzelmarkt – inklusive der feierlichen Krönung der neuen Purzelmarktkönigin.',
    kategorie: 'Brauchtum',
    image: '/images/events/purzelmarkt.jpg',
  },
  {
    name: 'IHK Pfalz Workshop',
    description:
      'Als Social-Media-Expertin & Kameracoach leitete Sarah einen Praxis-Workshop zu professionellen Videoinhalten für Instagram & Recruiting.',
    kategorie: 'Coach / IHK',
    image: '/images/events/ihk-workshop.jpeg',
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="section-padding"
      style={{ background: '#13131A' }}
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
            Bühnenmoderationen und Workshops.
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
              className="group relative flex flex-col overflow-hidden transition-all duration-300 cursor-default"
              style={{
                background: '#0A0A0F',
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
                className="absolute top-0 left-0 right-0 h-px z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
                aria-hidden="true"
              />

              {/* Image area */}
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: '16/9' }}
              >
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  /* Placeholder */
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-3"
                    style={{ background: '#13131A', border: 'none' }}
                    aria-label="Bild folgt"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                      className="w-8 h-8"
                      style={{ color: 'rgba(201,168,76,0.3)' }}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                    <span className="font-inter text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(201,168,76,0.3)' }}>
                      Foto folgt
                    </span>
                  </div>
                )}
                {/* Overlay gradient */}
                {event.image && (
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.5) 0%, transparent 60%)' }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col p-6 flex-1">
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
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <button
            onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary rounded-full"
            aria-label="Buchungsanfrage für Ihr Event stellen"
          >
            Ihr Event anfragen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
