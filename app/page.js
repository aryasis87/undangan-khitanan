'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import Decorations from '@/components/Decorations';
import ComicCover from '@/components/ComicCover';
import HeroPanel from '@/components/HeroPanel';
import Mission from '@/components/Mission';
import JourneyMap from '@/components/JourneyMap';
import HeroStats from '@/components/HeroStats';
import ComicGallery from '@/components/ComicGallery';
import MapEmbed from '@/components/MapEmbed';
import RSVPForm from '@/components/RSVPForm';
import WishesForm from '@/components/WishesForm';
import Footer from '@/components/Footer';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [opened, setOpened] = useState(false);

  const handleRSVP = (data) => {
    // TODO: kirim ke backend/Firebase
    console.log('RSVP:', data);
  };

  return (
    <main>
      <Decorations />

      <AnimatePresence>
        {!opened && <ComicCover key="cover" onOpen={() => setOpened(true)} />}
      </AnimatePresence>

      {opened && (
        <div className="relative z-10">
          <HeroPanel />
          <Mission />
          <JourneyMap />
          <HeroStats />
          <ComicGallery />
          <MapEmbed />
          <RSVPForm onSubmit={handleRSVP} />
          <WishesForm />
          <Footer />
          <MusicPlayer playing={opened} />
        </div>
      )}
    </main>
  );
}
