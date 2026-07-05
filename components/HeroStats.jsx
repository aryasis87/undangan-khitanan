'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import config from '@/lib/data';

// Kartu karakter ala game: foto + bar "stat" + daftar "kekuatan super".
export default function HeroStats() {
  const { hero } = config;

  return (
    <section className="relative z-10 bg-cream px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="comic-border comic-shadow mx-auto max-w-md bg-rose-deep p-5 text-cream"
      >
        <div className="comic-border bg-gold px-3 py-1 text-center font-display text-2xl text-ink">
          Kartu Sang Jagoan
        </div>

        <div className="comic-border relative mt-4 h-56 w-full overflow-hidden bg-cream">
          <Image src={hero.photo} alt={hero.fullName} fill sizes="400px" className="object-cover" />
        </div>

        <h3 className="mt-4 text-center font-display text-3xl text-gold">{hero.fullName}</h3>
        <p className="text-center text-sm font-bold text-cream/80">{hero.age} Tahun • Putra dari {hero.parents}</p>

        {/* Bar stat */}
        <div className="mt-5 space-y-3">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <div className="flex justify-between text-xs font-extrabold uppercase">
                <span>{s.label}</span><span>{s.value}</span>
              </div>
              <div className="comic-border mt-1 h-4 bg-cream">
                <motion.div
                  className="h-full bg-rose"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Kekuatan super */}
        <div className="mt-5 flex flex-wrap gap-2">
          {hero.powers.map((p) => (
            <span key={p} className="comic-border inline-flex items-center gap-1 bg-blush px-2.5 py-1 text-xs font-bold text-ink">
              <Sparkles size={12} /> {p}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
