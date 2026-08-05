'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const volltext = [
  'Wir haben Sarah als Traurednerin für unsere Freie Trauung engagiert. Sie hat eine wunderschöne, persönliche Traurede gehalten und die komplette Trauzeremonie moderiert. Wir könnten glücklicher nicht sein!',
  'Sarah hat sich zur Vorbereitung sehr viel Zeit für uns genommen, um herauszufinden, was wir möchten und einen stimmigen Ablauf zu erstellen. Sie ist nicht nur auf jeden unserer Wünsche eingegangen, sondern hat auch zusätzlich sehr viele eigene Ideen und Impulse gegeben, um die Trauung zu dem zu machen, was wir uns wünschen. Dank Sarah ist unsere Trauung noch sehr viel schöner geworden, als wir uns das hätten vorstellen können.',
  'Im Vorfeld hat Sarah mehrere gut vorbereitete Interviews mit uns geführt. Ihre warme und herzliche Art hat es uns leicht gemacht, emotionale und intime Momente mit ihr zu teilen. So ist es ihr gelungen, eine wahnsinnig persönliche Rede zu gestalten. In dieser Rede hat sie all unsere Gefühle eingefangen und bestmöglich an unsere Gäste vermittelt. Nicht nur wir, sondern alle Anwesenden waren zu Tränen gerührt. Trotzdem hat es der Zeremonie nicht an Leichtigkeit gefehlt. Die Trauung war gleichzeitig humorvoll, kurzweilig und emotional – genau so, wie wir uns das gewünscht haben. Sarah hat in den Interviews genau erfasst, was uns in unserer Beziehung wichtig ist, und hat dies in die perfekten Worte gefasst.',
  'Um die Koordination des Ablaufs unserer Trauung (mit anderen Rednerinnen und der Musik) hat Sarah sich sehr intensiv gekümmert. Der Ablauf hat einfach perfekt geklappt!',
  'Liebe Sarah, du hast unseren Tag zu etwas ganz besonderem gemacht! Wir danken dir von Herzen, dass du dir so viel Zeit für uns genommen hast. Wir können immer noch nicht fassen, wie schön die Zeremonie war. Auch unsere Gäste waren von dir, deiner Art und deiner Rede begeistert. Wir können dich und deine Arbeit jedem Brautpaar absolut weiterempfehlen!',
];

export default function TraurednerinTestimonial() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-20 px-6" style={{ background: '#13131A' }}>
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-inter text-[10px] tracking-[0.35em] uppercase mb-4" style={{ color: '#C9A84C' }}>
          Erfahrungsbericht
        </p>
        <div className="w-12 h-px mx-auto mb-10" style={{ background: '#C9A84C' }} />

        <blockquote>
          <AnimatePresence mode="wait" initial={false}>
            {!expanded ? (
              <motion.p
                key="kurz"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-cormorant italic text-xl md:text-2xl leading-relaxed"
                style={{ color: 'rgba(245,240,232,0.85)' }}
              >
                &ldquo;Sarah hat sich zur Vorbereitung sehr viel Zeit für uns genommen, um herauszufinden, was wir möchten, und hat mit sehr vielen eigenen Ideen und Impulsen die Trauung zu dem gemacht, was wir uns wünschen. In mehreren einfühlsamen Interviews hat sie all unsere Gefühle eingefangen und in einer wahnsinnig persönlichen Rede an unsere Gäste vermittelt – humorvoll, kurzweilig und emotional zugleich. Nicht nur wir, auch alle Gäste waren zu Tränen gerührt. Wir können Sarah und ihre Arbeit jedem Brautpaar absolut weiterempfehlen!&rdquo;
              </motion.p>
            ) : (
              <motion.div
                key="voll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-left space-y-5"
              >
                {volltext.map((absatz, i) => (
                  <p
                    key={i}
                    className="font-cormorant italic text-lg md:text-xl leading-relaxed"
                    style={{ color: 'rgba(245,240,232,0.85)' }}
                  >
                    {absatz}
                  </p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <footer className="mt-8">
            <div className="w-8 h-px mx-auto mb-4" style={{ background: '#C9A84C' }} aria-hidden="true" />
            <p className="font-inter font-medium text-xs uppercase tracking-wider" style={{ color: '#C9A84C' }}>
              Selina &amp; Adrian
            </p>
            <p className="font-inter text-xs mt-0.5" style={{ color: 'rgba(245,240,232,0.4)' }}>
              Freie Trauung
            </p>
          </footer>
        </blockquote>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-8 font-inter text-xs uppercase tracking-widest border-b pb-0.5 transition-colors"
          style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.4)' }}
        >
          {expanded ? 'Weniger anzeigen' : 'Ganzen Bericht lesen'}
        </button>
      </div>
    </section>
  );
}
