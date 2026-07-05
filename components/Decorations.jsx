'use client';
import { motion } from 'framer-motion';

// Ledakan kata khas komik (POW! / BAM!) melayang di latar. pointer-events-none.
function Burst({ text, color, className, rotate = -8 }) {
  return (
    <motion.span
      className={`absolute select-none font-display text-3xl md:text-4xl ${className}`}
      style={{ color, WebkitTextStroke: '2px #15173a', rotate: `${rotate}deg` }}
      animate={{ scale: [1, 1.18, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      aria-hidden="true"
    >
      {text}
    </motion.span>
  );
}

export default function Decorations() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Burst text="POW!" color="#facc15" rotate={-10} className="left-[6%] top-[14%]" />
      <Burst text="BAM!" color="#ef4444" rotate={8} className="right-[8%] top-[22%]" />
      <Burst text="ZAP!" color="#2563eb" rotate={-6} className="left-[12%] bottom-[18%]" />
      <Burst text="WOW!" color="#facc15" rotate={10} className="right-[10%] bottom-[24%]" />
    </div>
  );
}
