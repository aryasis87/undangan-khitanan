// ============================================================
//  KONFIGURASI UNDANGAN — Khitanan (Comic "Petualangan Jagoan Kecil")
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//
//  Ini undangan CONTOH: nama dan tempat fiktif. Foto di
//  /public/images adalah placeholder berlabel — ganti dengan
//  foto asli (potret 3:4).
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
    photo: '/images/sang-jagoan.webp',
    // Bar "stat" ala kartu game — sekadar seru-seruan, bukan penilaian.
    stats: [
      { label: 'Keberanian', value: 99 },
      { label: 'Keceriaan', value: 95 },
      { label: 'Semangat', value: 100 },
    ],
    powers: ['Suka Mengaji', 'Jago Sepak Bola', 'Hobi Menggambar'],
  },

  // -- Tanggal utama untuk countdown (format ISO) --
  mainDate: '2027-07-04T08:00:00+07:00',

  // -- Misi (acara) --
  mission: {
    name: 'Tasyakuran Khitan',
    date: 'Minggu, 4 Juli 2027',
    time: '08.00 - 13.00 WIB',
    venue: 'Markas Keluarga Hidayat',
    address: 'Umbulharjo, Yogyakarta',
    start: '2027-07-04T08:00:00+07:00',
    end: '2027-07-04T13:00:00+07:00',
  },

  // -- Peta petualangan (checkpoint menuju hari H) --
  checkpoints: [
    { icon: '🦸', label: 'Sang Jagoan Siap' },
    { icon: '🗺️', label: 'Menyusun Rencana' },
    { icon: '💪', label: 'Mengumpulkan Keberanian' },
    { icon: '🎉', label: 'Hari Misi Tiba!' },
  ],

  // Contoh ini menunjuk area Umbulharjo. Ganti `q=` dengan nama/koordinat tempat acara.
  location: {
    label: 'Markas Keluarga Hidayat, Umbulharjo, Yogyakarta',
    note: 'Peta contoh menunjukkan area Umbulharjo.',
    mapEmbed: 'https://www.google.com/maps?q=Umbulharjo,+Yogyakarta&output=embed',
    mapLink: 'https://maps.google.com/?q=Umbulharjo,+Yogyakarta',
  },

  // -- Galeri aksi (potret 3:4) --
  gallery: [
    '/images/aksi-1.webp',
    '/images/aksi-2.webp',
    '/images/aksi-3.webp',
    '/images/aksi-4.webp',
    '/images/aksi-5.webp',
    '/images/aksi-6.webp',
  ],

  // -- Musik latar (file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/latar.mp3',
    title: 'Radetzky March — Johann Strauss I',
    credit: 'rekaman US Marine Band, domain publik',
  },

  footer: {
    closing: 'Kehadiran & doamu adalah kekuatan super bagi Sang Jagoan!',
    hashtag: '#PetualanganFauzan',
  },

  // -- Halaman /kirim (tautan undangan per tamu) --
  kirim: {
    pesan:
      'Halo {nama}! 🦸\n\nKapten Fauzan mengundangmu ke Tasyakuran Khitan, Minggu, 4 Juli 2027, pukul 08.00 WIB di markas keluarga Hidayat.\n\nBuka komik undangannya: {tautan}\n\nDoa dan kehadiranmu jadi kekuatan super untuk Sang Jagoan!',
  },
};

export default config;
