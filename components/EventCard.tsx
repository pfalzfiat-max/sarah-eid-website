'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface EventCardProps {
  name: string;
  description: string;
  kategorie: string;
  image?: string | null;
  index: number;
}

export default function EventCard({ name, description, kategorie, image, index }: EventCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      role="listitem"
      className="group relative flex flex-col overflow-hidden transition-all duration-300 cursor-default"
      style={{ background: '#0A0A0F', border: '1px solid rgba(201,168,76,0.18)' }}
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
      <div
        className="absolute top-0 left-0 right-0 h-px z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1/1' }}>
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ background: '#13131A' }}
          >
            <span className="font-inter text-[10px] uppercase tracking-[0.2em]" style={{ color: 'rgba(201,168,76,0.3)' }}>
              Foto folgt
            </span>
          </div>
        )}
        {image && (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.5) 0%, transparent 60%)' }}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex flex-col p-6 flex-1">
        <span
          className="inline-flex self-start items-center px-2.5 py-1 rounded-full font-inter text-[10px] uppercase tracking-widest mb-4"
          style={{
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.35)',
            color: '#C9A84C',
          }}
        >
          {kategorie}
        </span>
        <h3 className="font-playfair text-lg text-cream mb-3 leading-snug">{name}</h3>
        <p className="font-inter font-light text-sm text-cream/50 leading-relaxed">{description}</p>
      </div>
    </motion.article>
  );
}
