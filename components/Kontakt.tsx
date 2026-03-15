'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2, 'Bitte geben Sie Ihren Namen ein.'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein.'),
  telefon: z.string().optional(),
  veranstaltungsart: z.string().min(1, 'Bitte wählen Sie eine Veranstaltungsart.'),
  datum: z.string().optional(),
  ort: z.string().optional(),
  nachricht: z.string().min(10, 'Bitte beschreiben Sie Ihr Event kurz (min. 10 Zeichen).'),
});

type FormValues = z.infer<typeof schema>;

const veranstaltungsarten = [
  { value: '', label: 'Art der Veranstaltung wählen …' },
  { value: 'Firmenevent', label: 'Firmenevent / Jubiläum' },
  { value: 'Messe', label: 'Messe / Kongress' },
  { value: 'Gala', label: 'Gala / Award Ceremony' },
  { value: 'Modenschau', label: 'Modenschau / Fashion Event' },
  { value: 'Charity', label: 'Charity / Benefizveranstaltung' },
  { value: 'Sportevent', label: 'Sportevent / Konzert' },
  { value: 'Politik', label: 'Politische Veranstaltung' },
  { value: 'Sprecher-Job', label: 'Sprecher-Job (Imagefilm/Werbespot)' },
  { value: 'Sonstiges', label: 'Sonstiges' },
];

const fieldClass = (hasError: boolean) =>
  `w-full px-4 py-3.5 font-inter text-sm text-cream placeholder-muted focus:outline-none transition-colors duration-200 ${
    hasError
      ? 'border border-red-500 focus:border-red-400'
      : 'border border-border focus:border-gold'
  }`;

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { veranstaltungsart: '' },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitError(false);
    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            telefon: data.telefon || '',
            veranstaltungsart: data.veranstaltungsart,
            datum: data.datum || '',
            ort: data.ort || '',
            nachricht: data.nachricht,
            _subject: `Buchungsanfrage: ${data.veranstaltungsart} – ${data.name}`,
          }),
        });
        if (!res.ok) throw new Error('Formspree error');
        setSubmitted(true);
      } catch {
        setSubmitError(true);
      }
    } else {
      // Fallback: mailto
      const subject = encodeURIComponent(`Buchungsanfrage: ${data.veranstaltungsart} – ${data.name}`);
      const body = encodeURIComponent(
        `Name: ${data.name}\nE-Mail: ${data.email}\nTelefon: ${data.telefon || '–'}\n` +
        `Veranstaltungsart: ${data.veranstaltungsart}\nDatum: ${data.datum || '–'}\n` +
        `Ort/Region: ${data.ort || '–'}\n\nNachricht:\n${data.nachricht}`
      );
      window.open(`mailto:mail@saraheid.de?subject=${subject}&body=${body}`, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <section
      id="kontakt"
      className="section-padding"
      style={{ background: '#0A0A0F' }}
      aria-label="Buchungsanfrage an Sarah Eid"
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
            Buchungsanfrage
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-playfair text-4xl md:text-5xl text-cream mb-4"
          >
            Lassen Sie uns Ihr Event planen
          </motion.h2>
          <div className="gold-divider-center" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-inter font-light text-muted max-w-xl mx-auto"
          >
            Schildern Sie mir Ihr Event – ich melde mich innerhalb von 48 Stunden.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-8"
                  style={{ background: '#13131A', border: '1px solid rgba(201,168,76,0.3)' }}
                  role="alert"
                  aria-live="polite"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ background: '#C9A84C' }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" style={{ color: '#0A0A0F' }}>
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-playfair text-2xl text-cream mb-3">
                    Vielen Dank für Ihre Anfrage!
                  </h3>
                  <p className="font-inter font-light text-muted max-w-sm leading-relaxed">
                    Ihre Nachricht ist eingegangen. Ich melde mich innerhalb von 24–48 Stunden.
                    Alternativ erreichen Sie mich direkt unter{' '}
                    <a
                      href="mailto:mail@saraheid.de"
                      className="text-gold hover:text-gold-light transition-colors"
                    >
                      mail@saraheid.de
                    </a>
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 btn-primary rounded-full"
                    aria-label="Neue Anfrage senden"
                  >
                    Neue Anfrage
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  aria-label="Buchungsanfrageformular"
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-inter text-[10px] uppercase tracking-wider text-cream/50 mb-2">
                        Name <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="name" type="text" autoComplete="name"
                        placeholder="Ihr vollständiger Name"
                        aria-required="true" aria-invalid={!!errors.name}
                        {...register('name')}
                        className={fieldClass(!!errors.name)}
                        style={{ background: '#13131A' }}
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1.5 text-xs text-red-400 font-inter">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-inter text-[10px] uppercase tracking-wider text-cream/50 mb-2">
                        E-Mail <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <input
                        id="email" type="email" autoComplete="email"
                        placeholder="ihre@email.de"
                        aria-required="true" aria-invalid={!!errors.email}
                        {...register('email')}
                        className={fieldClass(!!errors.email)}
                        style={{ background: '#13131A' }}
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1.5 text-xs text-red-400 font-inter">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="telefon" className="block font-inter text-[10px] uppercase tracking-wider text-cream/50 mb-2">
                      Telefon <span className="text-muted text-xs normal-case">(optional)</span>
                    </label>
                    <input
                      id="telefon" type="tel" autoComplete="tel"
                      placeholder="+49 176 …"
                      {...register('telefon')}
                      className={fieldClass(false)}
                      style={{ background: '#13131A' }}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="veranstaltungsart" className="block font-inter text-[10px] uppercase tracking-wider text-cream/50 mb-2">
                        Veranstaltungsart <span className="text-gold" aria-hidden="true">*</span>
                      </label>
                      <select
                        id="veranstaltungsart"
                        aria-required="true" aria-invalid={!!errors.veranstaltungsart}
                        {...register('veranstaltungsart')}
                        className={`${fieldClass(!!errors.veranstaltungsart)} cursor-pointer`}
                        style={{ background: '#13131A' }}
                      >
                        {veranstaltungsarten.map((opt) => (
                          <option key={opt.value} value={opt.value} disabled={opt.value === ''}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                      {errors.veranstaltungsart && (
                        <p role="alert" className="mt-1.5 text-xs text-red-400 font-inter">{errors.veranstaltungsart.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="datum" className="block font-inter text-[10px] uppercase tracking-wider text-cream/50 mb-2">
                        Datum <span className="text-muted text-xs normal-case">(optional)</span>
                      </label>
                      <input
                        id="datum" type="date"
                        {...register('datum')}
                        className={fieldClass(false)}
                        style={{ background: '#13131A' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ort" className="block font-inter text-[10px] uppercase tracking-wider text-cream/50 mb-2">
                      Ort / Region <span className="text-muted text-xs normal-case">(optional)</span>
                    </label>
                    <input
                      id="ort" type="text"
                      placeholder="z.B. Mainz, Rheinland-Pfalz"
                      {...register('ort')}
                      className={fieldClass(false)}
                      style={{ background: '#13131A' }}
                    />
                  </div>

                  <div>
                    <label htmlFor="nachricht" className="block font-inter text-[10px] uppercase tracking-wider text-cream/50 mb-2">
                      Ihre Nachricht <span className="text-gold" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="nachricht" rows={5}
                      placeholder="Beschreiben Sie kurz Ihre Veranstaltung und Ihre Erwartungen …"
                      aria-required="true" aria-invalid={!!errors.nachricht}
                      {...register('nachricht')}
                      className={`${fieldClass(!!errors.nachricht)} resize-none`}
                      style={{ background: '#13131A' }}
                    />
                    {errors.nachricht && (
                      <p role="alert" className="mt-1.5 text-xs text-red-400 font-inter">{errors.nachricht.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Buchungsanfrage absenden"
                  >
                    {isSubmitting ? 'Wird gesendet …' : 'Anfrage senden'}
                  </button>

                  {submitError && (
                    <p role="alert" className="font-inter text-xs text-red-400 text-center">
                      Beim Senden ist ein Fehler aufgetreten. Bitte schreiben Sie direkt an{' '}
                      <a href="mailto:mail@saraheid.de" className="underline hover:text-gold transition-colors">
                        mail@saraheid.de
                      </a>
                    </p>
                  )}

                  <p className="font-inter text-xs text-muted text-center">
                    Oder direkt:{' '}
                    <a href="mailto:mail@saraheid.de" className="text-gold hover:text-gold-light transition-colors">
                      mail@saraheid.de
                    </a>
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
            aria-label="Kontaktinformationen"
          >
            <div className="sticky top-24 space-y-8">
              <div>
                <p className="font-inter text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                  Direktkontakt
                </p>
                <h3 className="font-playfair text-2xl text-cream mb-6">
                  Lieber direkt in Kontakt treten?
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+4917632727160"
                    className="flex items-center gap-4 group"
                    aria-label="Sarah Eid anrufen: +49 176 32727160"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-gold"
                      style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gold group-hover:text-dark transition-colors" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                      </svg>
                    </div>
                    <span className="font-inter text-sm text-cream/70 group-hover:text-gold transition-colors">
                      +49 176 32727160
                    </span>
                  </a>
                  <a
                    href="mailto:mail@saraheid.de"
                    className="flex items-center gap-4 group"
                    aria-label="E-Mail senden: mail@saraheid.de"
                  >
                    <div
                      className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-colors duration-200 group-hover:bg-gold"
                      style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gold group-hover:text-dark transition-colors" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <span className="font-inter text-sm text-cream/70 group-hover:text-gold transition-colors">
                      mail@saraheid.de
                    </span>
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-border" aria-hidden="true" />

              <div className="p-5 border-l-2" style={{ borderColor: '#C9A84C', background: '#13131A' }}>
                <p className="font-playfair text-cream font-medium mb-2">Schnelle Rückmeldung</p>
                <p className="font-inter font-light text-sm text-muted leading-relaxed">
                  Ich antworte in der Regel innerhalb von 24–48 Stunden.
                  Für dringende Anfragen bin ich auch telefonisch erreichbar.
                </p>
              </div>

              <div>
                <p className="font-inter text-[10px] uppercase tracking-wider text-muted mb-3">
                  Tätigkeitsregion
                </p>
                <p className="font-inter font-light text-sm text-cream/60 leading-relaxed">
                  Rheinland-Pfalz · Baden-Württemberg · Hessen ·{' '}
                  <span className="text-cream/80 font-medium">Bundesweit auf Anfrage</span>
                </p>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
