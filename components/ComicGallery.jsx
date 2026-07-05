'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '@/lib/data';

// Galeri sebagai panel-panel komik dengan rotasi acak + lightbox.
const tilts = ['-2deg', '1.5deg', '-1deg', '2deg', '-1.5deg', '1deg'];

export default function ComicGallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);

  return (
    <section className="relative z-10 bg-blush halftone px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-4xl text-rose-deep md:text-5xl" style={{ WebkitTextStroke: '1.5px #15173a' }}>
          Aksi Sang Jagoan
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.button
              key={src}
              style={{ rotate: tilts[i % tilts.length] }}
              whileHover={{ rotate: '0deg', scale: 1.03 }}
              onClick={() => setActive(src)}
              className="comic-border comic-shadow-sm block overflow-hidden bg-cream"
              aria-label={`Perbesar aksi ${i + 1}`}
            >
              <div className="relative h-40 w-full md:h-52">
                <Image src={src} alt={`Aksi ${i + 1}`} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true"
          >
            <button className="absolute right-5 top-5 text-cream" onClick={() => setActive(null)} aria-label="Tutup">
              <X size={30} />
            </button>
            <motion.div
              className="comic-border relative h-[70vh] w-full max-w-xl bg-cream"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={active} alt="Aksi" fill sizes="100vw" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
