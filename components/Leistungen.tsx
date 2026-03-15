'use client';

import { motion } from 'framer-motion';

const leistungen = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
    title: 'Politik & Gesellschaft',
    description: 'Podiumsdiskussionen, Parteiveranstaltungen und politische Bürgerevents – mit Fingerspitzengefühl und neutraler Professionalität.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: 'Firmenevents & Jubiläen',
    description: 'Jubiläumsfeiern und Corporate Events professionell und mit Stil moderieren.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
    title: 'Messen & Kongresse',
    description: 'Messe-Moderation, Kongresseröffnungen und Podiumspräsentationen – souverän und zielgruppengerecht.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    ),
    title: 'Gala & Award-Ceremonies',
    description: 'Laudatien, Preisverleihungen und Galaabende mit eleganter Bühnenpräsenz und dem richtigen Ton.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    title: 'Modenschauen & Fashion',
    description: 'Runway-Shows, Fashion Weeks und Präsentationen – dynamisch, stylisch und im Takt der Kollektion.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    title: 'Charity & Benefiz',
    description: 'Benefizabende und Spendenveranstaltungen mit Empathie, Herz und professioneller Moderation.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
      </svg>
    ),
    title: 'Sportevents & Konzerte',
    description: 'Live-Begleitung von Sportveranstaltungen, Konzerten und Open-Air-Events – mitreißend und professionell.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    title: 'Imagefilm-Sprecherin',
    description: 'Klare, markante Off-Stimme für Imagefilme, Erklärvideos und Unternehmensporträts.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 0 0 4.5 21h15a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0 0 12 6.75Z" />
      </svg>
    ),
    title: 'Werbespots (Radio & TV)',
    description: 'Stimmstarke Sprecher-Leistungen für Radio-Spots und TV-Werbung – professionell und einprägsam.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="section-padding"
      style={{ background: '#0A0A0F' }}
      aria-label="Leistungen von Sarah Eid"
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
            Leistungen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl text-cream mb-4"
          >
            Was ich für Sie moderiere
          </motion.h2>
          <div className="gold-divider-center" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter font-light text-muted max-w-xl mx-auto leading-relaxed"
          >
            Als Event Moderatorin Deutschland bringe ich für jeden Anlass die richtige Energie –
            von Galas bis zu politischen Podiumsdiskussionen in Rheinland-Pfalz und bundesweit.
          </motion.p>
        </div>

        {/* Cards Grid – 4 cols desktop, 2 tablet, 1 mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          role="list"
          aria-label="Liste der Leistungen"
        >
          {leistungen.map((item) => (
            <motion.article
              key={item.title}
              variants={cardVariants}
              role="listitem"
              className="relative p-6 group cursor-default transition-all duration-300"
              style={{
                background: '#13131A',
                border: '1px solid #252530',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#252530';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              {/* Gold top accent */}
              <div
                className="absolute top-0 left-0 w-10 h-[2px] transition-all duration-500 group-hover:w-full"
                style={{ background: '#C9A84C' }}
                aria-hidden="true"
              />

              {/* Icon */}
              <div className="text-gold mb-4 mt-1">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="font-playfair text-base text-cream mb-2 font-medium leading-snug">
                {item.title}
              </h3>
              <p className="font-inter text-xs text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="font-inter text-sm text-muted mb-6">
            Ihr Event ist nicht dabei?{' '}
            <span className="text-cream/70">Kein Problem – sprechen Sie mich an!</span>
          </p>
          <button
            onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary rounded-full"
            aria-label="Zur Buchungsanfrage springen"
          >
            Moderatorin buchen
          </button>
        </motion.div>
      </div>
    </section>
  );
}
