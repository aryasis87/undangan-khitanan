import './globals.css';
import { Bangers, Luckiest_Guy, Nunito } from 'next/font/google';
import config from '@/lib/data';

const display = Bangers({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bangers',
  display: 'swap',
});
const script = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiest',
  display: 'swap',
});
const body = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://undangan.example.com'),
  title: config.meta.title,
  description: config.meta.description,
  openGraph: {
    title: config.meta.title,
    description: config.meta.description,
    type: 'website',
    locale: 'id_ID',
    images: [{ url: config.hero.photo, width: 600, height: 800 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: config.meta.title,
    description: config.meta.description,
  },
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#2563eb',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
