'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';

// Sampul pop-art comic (porting Stitch "Little Hero Adventure").
export default function ComicCover({ onOpen }) {
  const guest = useGuestName();
  const { hero, opening } = config;

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-y-auto bg-cream"
      exit={{ opacity: 0, scale: 1.08 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      {/* Latar: sunburst + halftone */}
      <div className="sunburst pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
      <div className="halftone pointer-events-none absolute inset-0 opacity-30" aria-hidden="true" />

      {/* Tape sudut */}
      <span className="absolute left-5 top-5 h-4 w-12 -rotate-45 border border-ink bg-gold comic-shadow-sm" aria-hidden="true" />
      <span className="absolute bottom-5 right-5 h-4 w-12 -rotate-45 border border-ink bg-rose comic-shadow-sm" aria-hidden="true" />

      <div className="relative flex min-h-full flex-col items-center justify-center px-6 py-12 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.5 }}
          className="comic-shadow-sm mb-6 -rotate-3 border-2 border-ink bg-gold px-4 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-ink"
        >
          {opening.episode}
        </motion.div>

        {/* Judul ber-outline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="text-comic-outline mb-8 rotate-2 font-display text-5xl leading-none text-cream sm:text-6xl"
        >
          Keberanian<br />{hero.name}
        </motion.h1>

        {/* Kartu hero */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
          className="comic-shadow-lg relative mb-8 aspect-[3/4] w-[72%] max-w-[260px] -rotate-2 overflow-hidden rounded-lg border-4 border-ink bg-blush"
        >
          <Image src={hero.photo} alt={hero.fullName} fill priority sizes="260px" className="object-cover" />
          <span className="absolute bottom-2 left-2 comic-border bg-gold px-2 py-0.5 font-display text-lg text-ink">{hero.alias}</span>
        </motion.div>

        {/* Sub-label */}
        <div className="comic-shadow-sm mb-7 rotate-1 border-2 border-ink bg-cream px-6 py-2 font-display text-2xl text-ink">
          Misi Khitanan Sang Pahlawan
        </div>

        {/* Tamu */}
        <p className="mb-5 text-xs font-bold uppercase tracking-widest text-muted">Kepada Yth.</p>
        <p className="-mt-3 mb-7 text-lg font-extrabold text-ink">{guest}</p>

        {/* Tombol */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="comic-shadow group inline-flex items-center gap-2 rounded-full border-4 border-ink bg-flame px-10 py-4 font-display text-2xl uppercase tracking-widest text-cream transition-all hover:-translate-y-0.5 hover:comic-shadow-lg active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Mulai! <ArrowRight size={26} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.section>
  );
}
