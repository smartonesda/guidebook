---
title: "Arsitektur Informasi"
description: Merancang Arsitektur Informasi (Information Architecture) dan Peta Situs (Site Map) sebelum mulai mengetik baris kode HTML pertama.
---

Seorang arsitek bangunan membuat cetak biru (*blueprint*) sebelum semen dituangkan. Begitu juga seorang web developer: mereka merancang **Arsitektur Informasi (*Information Architecture*)** dan **Peta Situs (*Site Map*)** sebelum menulis baris kode HTML pertama.

---

## 🗺️ Apa Itu Arsitektur Informasi (IA)?

Arsitektur Informasi adalah ilmu mengorganisir, menstrukturkan, dan memberi label pada konten website agar pengguna dapat menemukan informasi yang mereka cari dengan cepat dan intuitif.

---

## 📐 Contoh Peta Situs (Site Map Diagram)

Berikut adalah contoh peta situs untuk Final Project pilihan **Option A (School Website)** atau **Option F (Portfolio)**:

```
[ WEBSITE ROOT / INDEX.HTML ]
  │
  ├── <header> (Site Navigation)
  │    ├── Home (index.html)
  │    ├── Program / Proyek (#seksi-proyek)
  │    ├── Berita / Artikel (#seksi-berita)
  │    └── Kontak (#seksi-kontak)
  │
  ├── <main> (Unique Content)
  │    ├── Section 1: Hero Banner & Tagline
  │    ├── Section 2: Visi Misi / Profil Utama
  │    ├── Section 3: Program / Katalog Karya (Article Grid)
  │    ├── Section 4: Data Statistik & Tabel Perbandingan (Table Data)
  │    └── Section 5: Formulir Pendaftaran / Inquiry (Form Interaktif)
  │
  └── <footer> (Site Footer)
       ├── Alamat Kontak (<address>)
       ├── Link Sosial Media (External Links)
       └── Hak Cipta (<time>)
```

---

## 📋 Langkah Merancang Arsitektur Informasi

1. **Inventory Content**: Catat semua bahan teks, gambar, tabel, dan form yang dimiliki.
2. **Group Content**: Kelompokkan konten ke dalam kategori utama yang sejenis.
3. **Establish Hierarchy**: Tentukan mana informasi utama (taruh di atas / `<h1>` / Hero), dan mana informasi pendukung (taruh di bawah / `<aside>`).
4. **Map Links**: Tentukan bagaimana pengguna berpindah antar halaman atau antar seksi (`href="#id"`).

---

## ✍️ Lembar Kerja Perencanaan (Planning Worksheet)

Sebelum menulis kode, lengkapi lembar kerja perencanaan berikut di catatanmu:

```
PROYEK PILIHAN   : ___________________________
NAMA DOMAIN/APP  : ___________________________
TARGET PENGGUNA  : ___________________________

SEKSI UTAMA DALAM HALAMAN:
1. Hero Banner  -> Target Tag: <section id="hero">
2. Profil Utama -> Target Tag: <section id="profil">
3. Katalog Data -> Target Tag: <section id="katalog"> -> Elemen: <table> / <article>
4. Formulir     -> Target Tag: <section id="kontak">  -> Elemen: <form>

SELESAI PLANNED? [ Ya / Tidak ]
```

---

**[Lanjut: Panduan Alur Kerja →](/bab13/workflow-guide/)**
