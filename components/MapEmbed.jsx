import { MapPin } from 'lucide-react';
import config from '@/lib/data';

// Lokasi markas (peta) gaya panel komik.
export default function MapEmbed() {
  const { location } = config;
  return (
    <section className="relative z-10 bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl text-rose md:text-5xl" style={{ WebkitTextStroke: '1.5px #15173a' }}>
          Lokasi Markas
        </h2>
        <div className="comic-border comic-shadow mt-8 overflow-hidden bg-cream">
          <iframe
            src={location.mapEmbed}
            title="Peta lokasi acara"
            className="h-72 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-4 font-bold text-ink">{location.label}</p>
        <a
          href={location.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="comic-border comic-shadow-sm mt-5 inline-flex items-center gap-2 bg-gold px-6 py-3 font-display text-lg text-ink transition hover:bg-rose hover:text-cream"
        >
          <MapPin size={18} /> Buka di Google Maps
        </a>
      </div>
    </section>
  );
}
