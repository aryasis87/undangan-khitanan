'use client';
import { Share2 } from 'lucide-react';
import config from '@/lib/data';
import { whatsappShareUrl } from '@/lib/utils';

// Penutup komik: panel "TAMAT".
export default function Footer() {
  const { footer, hero } = config;

  const share = () => {
    const text = `Undangan Khitanan ${hero.alias}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: window.location.href }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="relative z-10 bg-rose-deep px-6 py-20 text-center">
      <div className="mx-auto max-w-lg">
        <p className="font-bold text-cream/90">{footer.closing}</p>

        <h2
          className="my-7 font-display text-6xl text-gold sm:text-7xl md:text-8xl"
          style={{ WebkitTextStroke: '3px #15173a' }}
        >
          TAMAT
        </h2>

        <p className="font-script text-2xl text-cream">{hero.alias}</p>
        <p className="mt-1 font-bold text-gold">{footer.hashtag}</p>

        <button
          onClick={share}
          className="comic-border comic-shadow-sm mt-7 inline-flex items-center gap-2 bg-gold px-6 py-3 font-display text-xl text-ink transition hover:bg-cream"
        >
          <Share2 size={16} /> Bagikan Petualangan
        </button>
      </div>
    </footer>
  );
}
