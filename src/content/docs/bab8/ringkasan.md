---
title: "Ringkasan"
description: Rekap lengkap Semantic HTML — prinsip utama, panduan pilihan element, hierarki struktur halaman, dan pertanyaan refleksi untuk membangun cara berpikir developer.
---

Selamat! Kamu telah menyelesaikan **BAB 8 — Semantic HTML** 🎉

Di bab ini, HTML berhenti terasa seperti "tulis tag dan lihat hasilnya" — dan mulai terasa seperti **bahasa yang punya makna dan tujuan di setiap elemennya**.

---

## 🧠 Satu Prinsip yang Mengubah Segalanya

> **Gunakan element berdasarkan MAKNA konten, bukan berdasarkan TAMPILAN.**

Dua element bisa terlihat identik di browser, tapi memiliki makna yang sangat berbeda bagi browser, search engine, screen reader, dan developer lain yang membaca kode kamu.

```
MAKNA → ELEMENT
TAMPILAN → CSS
REUSABILITY/STYLING HOOK → CLASS
```

---

## 🗺️ Hierarki Semantic Halaman

```
<body>
│
├── <header>                 ← pengantar: brand, nav
│   └── <nav>               ← navigasi utama
│
├── <main>                   ← konten utama (unik per halaman)
│   ├── <section>           ← kelompok tematik (perlu heading)
│   │   ├── <article>       ← konten mandiri
│   │   │   ├── <header>   ← pengantar artikel
│   │   │   ├── <figure>   ← gambar/diagram
│   │   │   │   └── <figcaption>
│   │   │   └── <footer>   ← penutup artikel
│   │   └── <aside>         ← konten pendukung
│   └── <section>
│
└── <footer>                 ← penutup: kontak, copyright
    ├── <nav>               ← navigasi footer
    └── <address>           ← info kontak penulis
```

---

## 📊 Tabel Panduan Pilihan Element

| Situasi | Element Tepat | Alasan |
|---|---|---|
| Pengantar website | `<header>` | Konten pengantar/header |
| Navigasi link utama | `<nav>` | Kelompok navigasi signifikan |
| Konten utama halaman | `<main>` | Inti dokumen (satu per halaman) |
| Konten mandiri | `<article>` | Bisa berdiri sendiri |
| Kelompok tematik | `<section>` | Punya tema + heading |
| Konten pendukung | `<aside>` | Berkaitan tapi tidak inti |
| Penutup halaman/artikel | `<footer>` | Info penutup |
| Gambar + keterangan | `<figure>` + `<figcaption>` | Konten visual dengan caption |
| Tanggal/waktu | `<time datetime="...">` | Mesin-readable |
| Info kontak penulis | `<address>` | Kontak pemilik/penulis |
| Teks disorot/relevan | `<mark>` | Highlight kontekstual |
| Wrapper layout CSS | `<div>` | Tidak ada semantic yang cocok |
| Styling teks inline | `<span>` | Tidak ada semantic yang cocok |

---

## ⚖️ `<section>` vs `<article>` — Cara Cepat Memutuskan

**Pertanyaan:** Bisakah konten ini dipublikasikan secara mandiri di luar halaman ini?

- **Ya** → `<article>` (posting blog, proyek, ulasan, komentar)
- **Tidak** → `<section>` (bagian tentang, keahlian, kontak dalam portfolio)

---

## 🚫 Yang Harus Dihindari

| Kesalahan | Dampak |
|---|---|
| `<section>` tanpa heading | Screen reader tidak tahu topik section |
| `<article>` untuk komponen UI | Salah makna: badge dan tombol bukan "konten mandiri" |
| `<nav>` untuk semua kumpulan link | Membingungkan screen reader dengan terlalu banyak "navigasi" |
| Lebih dari satu `<main>` terlihat | Melanggar spesifikasi HTML5 |
| `<aside>` untuk konten tidak berkaitan | Salah semantik: aside bukan "div yang ada di samping" |
| Hierarki heading yang loncat (h1 → h4) | Navigasi screen reader jadi membingungkan |
| `<hr>` sebagai visual divider | `<hr>` punya makna: perpindahan topik, bukan garis hiasan |

---

## 🤔 Pertanyaan Refleksi untuk Dibawa Pulang

Renungkan pertanyaan-pertanyaan ini:

**1. Sebelum belajar Semantic HTML, kamu memilih tag berdasarkan apa?**
Apakah berdasarkan tampilan? Kebiasaan? Atau hanya menggunakan `<div>` untuk segalanya?

**2. Setelah belajar Semantic HTML, apa yang berubah dari cara kamu melihat HTML?**
Apakah kamu mulai bertanya "konten ini maknanya apa?" sebelum menulis tag?

**3. Jika dua element terlihat sama di browser, apakah berarti keduanya memiliki makna yang sama?**
Tidak. Tampilan adalah tanggung jawab CSS. HTML adalah tentang makna dan struktur.

---

## ➡ Handoff ke BAB 9 — Metadata & SEO

Di BAB 8, kita sudah memastikan bahwa **struktur halaman memiliki makna yang jelas** — browser, screen reader, dan developer bisa memahami konten dari pilihan element yang tepat.

Sekarang pertanyaannya adalah: **bagaimana search engine menemukan halaman kita? Bagaimana social media tahu judul dan gambar apa yang harus ditampilkan saat link kita dibagikan?**

Jawabannya ada di metadata — informasi tentang halaman yang kita tulis di dalam `<head>`, bukan di `<body>`.

Di **BAB 9 — Metadata & SEO**, kita akan mempelajari `<meta>` tags, Open Graph Protocol, Twitter Cards, sitemap, dan strategi dasar agar halaman portfolio kita bisa ditemukan dan tampil dengan baik di search engine dan social media.

**[Lanjut ke BAB 9 — Metadata & SEO →](/bab9/introduction/)**
