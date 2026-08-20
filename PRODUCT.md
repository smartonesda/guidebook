# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro v7.x + Astro Starlight (documentation framework) + MDX + Expressive Code + Sharp. Deployed to Vercel (primary) and GitHub Pages. Static site generation only.

## Users

**Primary:** Siswa SMK Rekayasa Perangkat Lunak (RPL), mahasiswa informatika/ilmu komputer, dan pemula web development di Indonesia.

**Secondary:** Guru/mentor programming yang menggunakan guidebook sebagai media ajar; junior frontend developer yang ingin memperkuat fondasi CSS.

**Situation:** Belajar mandiri di browser — baik di laptop maupun HP — mengikuti urutan 16 bab tanpa bimbingan langsung. Sering belajar di luar jam sekolah, koneksi internet bervariasi.

## Jobs

1. Memahami cara kerja browser dalam membaca dan menerapkan CSS (Cascade, Specificity, Inheritance, Box Model).
2. Membangun layout responsif dengan Flexbox dan CSS Grid.
3. Menciptakan micro-interaction dan animasi yang halus.
4. Mengerjakan mini project dan challenge lab untuk mengisi portofolio kerja.
5. Menggunakan CSS Handbook (BAB 15) sebagai referensi cepat saat membangun proyek nyata.

## Purpose & Positioning

CSS Guidebook adalah panduan pembelajaran CSS modern berbahasa Indonesia yang dirancang khusus untuk siswa SMK RPL dan pemula — gratis selamanya. Berbeda dari tutorial barat atau video singkat, guidebook ini menawarkan kurikulum 16 bab yang linear, terstruktur, dan selaras dengan kebutuhan kejuruan Indonesia, dilengkapi studi kasus nyata, mini project bertahap, dan CSS Studio interaktif bawaan halaman.

Mekanisme pembeda utama: struktur linear "bab demi bab" yang menghilangkan kebingungan "mulai dari mana" — setiap bab membangun di atas bab sebelumnya, diakhiri mini project yang membentuk portofolio nyata.

## Success

Pengguna berhasil jika: menyelesaikan seluruh 16 bab, mengumpulkan 5+ mini project, memahami Cascade & Specificity tanpa mengandalkan !important, dan mampu mem-build landing page responsif siap deploy.

## Capabilities

- Materi terstruktur 16 bab: BAB 0 (Getting Started) hingga BAB 15 (CSS Handbook).
- Interactive CSS Studio (live code preview) di halaman utama.
- Box Model Demo interaktif.
- Modern CSS Board (fitur CSS 2026 yang sudah browser-safe).
- Challenge Lab (6 lab + boss challenge).
- Mini Project Collection (5 project + 1 final project).
- Full-text search (Starlight built-in).
- Dark mode & light mode.
- Copy-kode satu klik (Expressive Code).
- 100% Bahasa Indonesia.

## Constraints

- Gratis selamanya — tidak ada fitur berbayar atau paywall.
- Tidak ada backend/server-side code; static site only.
- Konten harus ramah pembaca pemula: analogi visual, bahasa sederhana, tidak ada jargon tanpa penjelasan.
- Barisan materi harus sesuai standar W3C dan browser-safe.
- Aksesibilitas: halaman harus dapat dibaca dengan screen reader (Starlight baseline).

## Voice & Brand

- Nama: **CSS Guidebook** oleh **SmartOne Dev** (alias: SmartOneDev).
- Nada: ramah, langsung, mengajar seperti mentor berpengalaman — bukan akademik kaku, bukan santai berlebihan.
- Bahasa: Bahasa Indonesia (istilah teknis standar industri tetap dalam bahasa Inggris, e.g. "Cascade", "Flexbox").
- Aksen merek: merah (#e8392b dark / #c62020 light), tipografi Inter + JetBrains Mono.
- Favicon: logo SmartOne.

## Assets & Evidence

- Logo: public/images/light-smartone.png, src/assets/images/light-smartone.png
- Hero images: src/assets/images/hero-dark.png, src/assets/images/hero-light.png
- Cover OG image: public/images/cover-learn.png
- Live site: https://css-guidebook.vercel.app
- GitHub: https://github.com/smartonesda/guidebook/tree/css

## Accessibility

WCAG 2.1 AA target (Starlight baseline). Semua elemen interaktif harus keyboard-navigable; gambar dekoratif diberi ria-hidden="true"; konten utama tidak bergantung pada warna saja.

## Open Decisions

- [undecided] Apakah akan ada fitur komentar/diskusi per halaman di masa depan?
- [undecided] Target deploy tambahan selain Vercel dan GitHub Pages?
