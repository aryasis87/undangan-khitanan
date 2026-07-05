// ============================================================
//  KONFIGURASI UNDANGAN — Khitanan (Comic "Petualangan Jagoan Kecil")
//  Ubah seluruh isi undangan dari satu tempat ini saja.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Undangan Khitanan — Kapten Fauzan',
    description: 'Episode spesial telah tiba! Hadirilah misi keberanian Sang Jagoan Kecil dalam acara khitanan.',
  },

  // -- Teks komik pembuka --
  opening: {
    episode: 'Episode Spesial',
    tagline: 'Hari ini, Sang Jagoan menuntaskan misi keberaniannya!',
    battlecry: 'Bismillah, aku berani!',
  },

  // -- Sang Jagoan (tokoh utama) --
  hero: {
    name: 'Fauzan',
    alias: 'Kapten Fauzan',
    fullName: 'Muhammad Fauzan Al-Hakim',
    age: 8,
    parents: 'Bpk. Hidayat & Ibu Lestari',
    photo: 'https://placehold.co/600x800/2563eb/fff8e7.png?text=Sang+Jagoan',
    // "stat" ala kartu game
    stats: [
      { label: 'Keberanian', value: 99 },
      { label: 'Keceriaan', value: 95 },
      { label: 'Kesholehan', value: 100 },
    ],
    powers: ['Suka Mengaji', 'Jago Sepak Bola', 'Hobi Menggambar'],
  },

  // -- Tanggal utama untuk countdown / peta misi (ISO) --
  mainDate: '2026-09-06T08:00:00+07:00',

  // -- Misi (acara) --
  mission: {
    name: 'Tasyakuran Khitan',
    date: 'Minggu, 6 September 2026',
    time: '08.00 - 13.00 WIB',
    venue: 'Markas Keluarga Hidayat',
    address: 'Jl. Melati No. 17, Yogyakarta',
    start: '2026-09-06T08:00:00+07:00',
    end: '2026-09-06T13:00:00+07:00',
  },

  // -- Checkpoint menuju hari-H (ditampilkan sbg peta petualangan) --
  checkpoints: [
    { icon: '🦸', label: 'Sang Jagoan Siap' },
    { icon: '🗺️', label: 'Menyusun Rencana' },
    { icon: '💪', label: 'Mengumpulkan Keberanian' },
    { icon: '🎉', label: 'Hari Misi Tiba!' },
  ],

  // -- Lokasi (embed Google Maps) --
  location: {
    label: 'Markas Keluarga Hidayat, Yogyakarta',
    mapEmbed: 'https://www.google.com/maps?q=Tugu+Yogyakarta&output=embed',
    mapLink: 'https://maps.google.com/?q=Tugu+Yogyakarta',
  },

  // -- Galeri (panel komik) --
  gallery: [
    'https://placehold.co/600x800/2563eb/fff8e7.png?text=Aksi+1',
    'https://placehold.co/600x800/ef4444/fff8e7.png?text=Aksi+2',
    'https://placehold.co/600x800/facc15/15173a.png?text=Aksi+3',
    'https://placehold.co/600x800/ef4444/fff8e7.png?text=Aksi+4',
    'https://placehold.co/600x800/2563eb/fff8e7.png?text=Aksi+5',
    'https://placehold.co/600x800/facc15/15173a.png?text=Aksi+6',
  ],

  // -- Musik latar (taruh file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/song.mp3',
    title: 'Backsound',
  },

  // -- Footer --
  footer: {
    closing: 'Kehadiran & doamu adalah kekuatan super bagi Sang Jagoan!',
    hashtag: '#PetualanganFauzan',
  },
};

export default config;
