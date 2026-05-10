'use client';

import { motion } from 'framer-motion';

export default function EventsCta({ label }: { label: string }) {
  return (
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
        {label}
      </button>
    </motion.div>
  );
}
