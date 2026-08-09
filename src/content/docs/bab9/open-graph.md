---
title: "Open Graph & Social"
description: Memahami Open Graph Protocol untuk mengontrol tampilan preview link di WhatsApp, Facebook, Twitter, LinkedIn — serta cara menulis og:title, og:description, og:image yang efektif.
---

## 📱 Mengapa Tampilan Preview Link Penting?

Kamu pernah membagikan link di WhatsApp dan link itu muncul sebagai preview yang cantik — lengkap dengan judul, deskripsi, dan gambar? Atau justru muncul hanya sebagai URL polos tanpa preview?

Perbedaannya ditentukan oleh **Open Graph Protocol** di `<head>` halaman tersebut.

Ketika seseorang membagikan link di platform media sosial, platform tersebut tidak menampilkan URL mentah — ia mengunjungi URL tersebut, membaca tag Open Graph di `<head>`, lalu membuat *link preview card*.

```
WhatsApp, Facebook, LinkedIn, Telegram:
  → Baca og:title
  → Baca og:description  
  → Unduh og:image
  → Tampilkan sebagai preview card
```

Tanpa Open Graph → platform menampilkan URL polos atau menebak-nebak informasinya.

---

## 📐 Open Graph Protocol — Dasar-dasarnya

Open Graph Protocol (OGP) diciptakan oleh Facebook pada 2010, tapi kini digunakan secara universal oleh semua platform media sosial dan messaging.

Tag Open Graph ditulis menggunakan `<meta>` dengan atribut `property` (bukan `name`):

```html
<!-- Perhatikan: gunakan property="og:..." bukan name="og:..." -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Rizki Pratama — Junior Web Developer" />
<meta property="og:description" content="Portfolio junior web developer dari Jakarta." />
<meta property="og:image" content="https://rizkipratama.com/og-image.png" />
<meta property="og:url" content="https://rizkipratama.com/" />
```

---

## 🏷️ Tag Open Graph yang Wajib Ada

### `og:type` — Jenis Konten

```html
<meta property="og:type" content="website" />
```

Nilai yang umum:
- `website` — halaman website umum (paling umum untuk portfolio)
- `article` — artikel blog atau berita
- `profile` — halaman profil seseorang

### `og:title` — Judul Preview

```html
<meta property="og:title" content="Rizki Pratama — Junior Web Developer" />
```

Ini yang muncul sebagai judul besar di preview card. Boleh sama dengan `<title>` atau lebih pendek/berbeda sesuai konteks sharing.

**Panjang optimal:** 60–90 karakter untuk tampilan yang tidak terpotong.

### `og:description` — Deskripsi Preview

```html
<meta property="og:description" 
      content="Portfolio junior web developer dari Jakarta. Proyek HTML, CSS, dan JavaScript — semua dibangun dari nol." />
```

Teks deskripsi yang muncul di bawah judul dalam preview card.

**Panjang optimal:** 100–200 karakter.

### `og:image` — Gambar Preview

```html
<meta property="og:image" content="https://rizkipratama.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Halaman portfolio Rizki Pratama" />
```

Gambar ini yang muncul sebagai thumbnail besar di preview card. Ini adalah elemen paling visual dan paling memengaruhi apakah orang mau mengklik linkmu.

**Spesifikasi gambar OG yang ideal:**
- Ukuran: **1200 × 630 piksel** (rasio 1.91:1)
- Format: JPG atau PNG
- Ukuran file: di bawah 1MB
- Selalu gunakan URL absolut (bukan relatif)

```html
<!-- ✅ URL absolut -->
<meta property="og:image" content="https://rizkipratama.com/og-image.png" />

<!-- ❌ URL relatif — tidak bekerja untuk crawlers eksternal -->
<meta property="og:image" content="/og-image.png" />
```

### `og:url` — URL Resmi Halaman

```html
<meta property="og:url" content="https://rizkipratama.com/" />
```

URL kanonik dari halaman. Biasanya sama dengan nilai `<link rel="canonical">`.

---

## 🐦 Twitter Cards

Twitter/X menggunakan sistem metadata sendiri yang disebut **Twitter Cards**, meskipun juga membaca beberapa tag Open Graph sebagai fallback:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@rizkipratama" />
<meta name="twitter:creator" content="@rizkipratama" />
<meta name="twitter:title" content="Rizki Pratama — Junior Web Developer" />
<meta name="twitter:description" content="Portfolio junior web developer dari Jakarta." />
<meta name="twitter:image" content="https://rizkipratama.com/og-image.png" />
<meta name="twitter:image:alt" content="Halaman portfolio Rizki Pratama" />
```

**Nilai `twitter:card`:**
- `summary` — preview kecil dengan thumbnail kecil
- `summary_large_image` — preview dengan gambar besar (paling umum untuk portfolio)
- `player` — untuk konten video/audio

Jika kamu tidak punya Twitter/X atau tidak peduli Twitter, minimal pasang tag Open Graph — Twitter juga membacanya sebagai fallback.

---

## 🔍 Cara Memeriksa Open Graph

Setelah menambahkan tag Open Graph, kamu bisa memeriksanya sebelum benar-benar membagikan link:

- **Facebook Sharing Debugger:** developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector:** linkedin.com/post-inspector/
- **Twitter Card Validator:** cards-dev.twitter.com/validator
- **Open Graph Checker:** opengraph.xyz atau metatags.io

Tools ini mengakses URL-mu dan menampilkan bagaimana preview card akan terlihat.

---

## 🏗️ `<head>` Portfolio Lengkap

Inilah `<head>` portfolio kita yang sudah lengkap dengan semua metadata:

```html
<head>
  <!-- =================== FUNDAMENTAL =================== -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- =================== IDENTITAS =================== -->
  <title>Rizki Pratama — Junior Web Developer · Jakarta</title>
  <meta name="description" 
        content="Portfolio Rizki Pratama, junior web developer dari Jakarta. Proyek HTML, CSS, dan form interaktif dari siswa SMK RPL." />
  <meta name="author" content="Rizki Pratama" />
  <meta name="robots" content="index, follow" />

  <!-- =================== CANONICAL =================== -->
  <link rel="canonical" href="https://rizkipratama.com/" />

  <!-- =================== FAVICON =================== -->
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <meta name="theme-color" content="#0ea5e9" />

  <!-- =================== OPEN GRAPH =================== -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Portfolio Rizki Pratama" />
  <meta property="og:title" content="Rizki Pratama — Junior Web Developer" />
  <meta property="og:description" 
        content="Portfolio junior web developer dari Jakarta. Lihat proyek HTML, CSS, dan JavaScript yang dibangun dari nol." />
  <meta property="og:image" content="https://rizkipratama.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Halaman portfolio Rizki Pratama" />
  <meta property="og:url" content="https://rizkipratama.com/" />
  <meta property="og:locale" content="id_ID" />

  <!-- =================== TWITTER CARD =================== -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Rizki Pratama — Junior Web Developer" />
  <meta name="twitter:description" 
        content="Portfolio junior web developer dari Jakarta." />
  <meta name="twitter:image" content="https://rizkipratama.com/og-image.png" />
  <meta name="twitter:image:alt" content="Portfolio Rizki Pratama" />

</head>
```

---

## 💡 Tips Membuat OG Image untuk Portfolio

Tidak punya kemampuan design? Gunakan tools ini untuk membuat OG image secara cepat:
- **Canva** — template gratis ukuran 1200×630
- **Figma** — lebih fleksibel, export ke PNG
- **og-image.vercel.app** — generate otomatis dari teks

Isi OG image yang efektif untuk portfolio:
- Nama dan role (contoh: "Rizki Pratama | Web Developer")
- Foto profil (opsional)
- Warna brand/tema yang konsisten
- Logo atau initial name

---

**[Lanjut: Studi Kasus →](/bab9/studi-kasus/)**
