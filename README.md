# Undangan Digital — Khitanan ("Petualangan Jagoan Kecil")

Konsep **komik superhero** — sengaja dibuat beda STRUKTUR dari varian lain (bukan gulir-section undangan biasa):

- **ComicCover** — sampul ala buku komik ("Episode Spesial", tombol *Mulai Misi*)
- **HeroPanel** — jagoan + balon ucapan (battlecry), garis pancar
- **Mission** — acara disajikan sebagai *briefing misi* (bukan kartu acara biasa)
- **JourneyMap** — countdown jadi *peta checkpoint* zig-zag
- **HeroStats** — profil jadi *kartu karakter game* (bar stat + kekuatan super)
- **ComicGallery** — galeri sebagai panel komik miring + lightbox
- **WishesForm** — ucapan jadi dinding stiker/sticky-note
- **Footer** — panel "TAMAT"

Gaya visual: panel bergaris tebal (`comic-border`), bayangan keras (`comic-shadow`), halftone, warna pop (biru/merah/kuning), font **Bangers + Luckiest Guy + Nunito**.

## Menjalankan
```bash
npm install && npm run dev
```
Semua konten di **`lib/data.js`** (objek `hero`, `mission`, `checkpoints`).
