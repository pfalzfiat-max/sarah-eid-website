'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Traurednerin() {
  return (
    <section
      id="traurednerin"
      className="section-padding overflow-hidden"
      style={{ background: '#0A0A0F' }}
      aria-label="Sarah Eid – Freie Traurednerin"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85 }}
          >
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-gold mb-5">
              Freie Traurednerin
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-2 leading-tight">
              Ihr schönster Moment –
              <span className="block">mit den richtigen Worten.</span>
            </h2>
            <div className="gold-divider" />

            <p className="font-inter font-light text-cream/60 leading-relaxed mb-5">
              Eine Hochzeit ist der bedeutendste Tag im Leben zweier Menschen. Als freie Traurednerin gestalte ich Ihre Zeremonie individuell, persönlich und von Herzen – unabhängig von Konfession oder Ort. Ob im Freien, im Weingut, im Schloss oder im kleinen Kreis: Jede Trauung ist so einzigartig wie das Paar, das sie feiert.
            </p>
            <p className="font-inter font-light text-cream/60 leading-relaxed mb-8">
              In einem persönlichen Vorgespräch lerne ich Sie und Ihre Geschichte kennen – und schreibe daraus eine Rede, die wirklich zu Ihnen passt. Mit natürlicher Wärme, echtem Einfühlungsvermögen und dem Gespür für den richtigen Moment begleite ich Sie durch eine Zeremonie, die alle Anwesenden berührt.
            </p>

            <ul className="space-y-3 mb-10" aria-label="Leistungen als Traurednerin">
              {[
                'Individuelle Zeremonie – auf Ihr Paar zugeschnitten',
                'Persönliches Kennenlerngespräch & professionelle Vorbereitung',
                'Standesamtlich oder freie Trauung – flexibel & konfessionslos',
                'Bundesweit verfügbar – auch für Destinationsweddings',
                'Einfühlsam, warmherzig und mit echter Bühnenpräsenz',
              ].map((punkt) => (
                <li key={punkt} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 text-gold font-bold text-sm" aria-hidden="true">✓</span>
                  <span className="font-inter font-light text-sm text-cream/70 leading-relaxed">
                    {punkt}
                  </span>
                </li>
              ))}
            </ul>

            <blockquote
              className="border-l-2 pl-5 py-1 mb-8"
              style={{ borderColor: '#C9A84C' }}
            >
              <p className="font-cormorant font-light text-xl text-cream/80 italic leading-relaxed">
                &ldquo;Ihre Geschichte verdient eine Zeremonie, die so besonders ist wie Sie selbst.&rdquo;
              </p>
              <footer className="font-inter text-[10px] text-gold uppercase tracking-[0.25em] mt-3">
                Sarah Eid
              </footer>
            </blockquote>

            <button
              onClick={() => document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary rounded-full"
              aria-label="Anfrage als Traurednerin stellen"
            >
              Trauung anfragen
            </button>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <div
                className="absolute -top-4 -left-4 w-full h-full hidden lg:block"
                style={{ border: '1px solid rgba(201,168,76,0.4)' }}
                aria-hidden="true"
              />
              <Image
                src="/Traurednerin.png"
                alt="Sarah Eid – Freie Traurednerin"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
