---
title: "Meta Description & Robots"
description: Memahami meta description sebagai snippets di hasil pencarian Google, meta robots untuk kontrol crawler, serta konsep canonical URL dan mengapa keakuratan lebih penting dari keyword stuffing.
---

## 📝 Meta Description — Snippet di Hasil Pencarian

### Apa itu Meta Description?

`<meta name="description">` adalah elemen yang menyediakan **ringkasan singkat** tentang isi halaman. Nilainya biasanya ditampilkan sebagai *snippet* (teks pendek) di bawah judul di hasil pencarian Google.

```html
<meta 
  name="description" 
  content="Portfolio Rizki Pratama, junior web developer dari Jakarta. Lihat proyek HTML, CSS, dan JavaScript yang telah saya bangun." 
/>
```

Di Google, ini tampilannya:
```
Rizki Pratama — Junior Web Developer
https://rizkipratama.com
Portfolio Rizki Pratama, junior web developer dari Jakarta.
Lihat proyek HTML, CSS, dan JavaScript yang telah saya bangun.
```

### Apakah Meta Description Langsung Menentukan Ranking Google?

**Tidak secara langsung.** Google secara resmi menyatakan bahwa meta description **tidak digunakan sebagai faktor ranking**. Tapi ia sangat memengaruhi **Click-Through Rate (CTR)** — persentase orang yang mengklik linkmu setelah melihatnya di hasil pencarian.

Deskripsi yang menarik dan relevan = lebih banyak klik = lebih banyak pengunjung.

### Menulis Meta Description yang Baik

```html
<!-- ✅ Baik: spesifik, menarik, sesuai isi halaman -->
<meta 
  name="description" 
  content="Portfolio Rizki Pratama — siswa SMK RPL Jakarta yang membangun proyek web development dari nol. Lihat proyek website sekolah, aplikasi absensi, dan contact form interaktif." 
/>

<!-- ❌ Buruk: terlalu generik -->
<meta name="description" content="Ini adalah halaman portfolio saya." />

<!-- ❌ Buruk: keyword stuffing -->
<meta name="description" content="web developer web design HTML CSS JavaScript portfolio Jakarta web developer website murah web developer terbaik" />

<!-- ❌ Buruk: tidak sesuai isi halaman -->
<meta name="description" content="Toko online terpercaya dengan ribuan produk." />
```

**Panduan menulis description:**
- **Panjang:** 120–160 karakter (lebih dari itu dipotong Google)
- **Unik:** Setiap halaman harus punya description yang berbeda
- **Relevan:** Harus benar-benar menggambarkan isi halaman
- **Mengundang klik:** Jelaskan manfaat yang akan didapat pengunjung

### Google Bisa Mengabaikan Description Kamu

Google tidak selalu menggunakan meta description yang kamu tulis. Jika Google menilai teks lain di halamanmu lebih relevan dengan kueri pencarian pengguna, Google akan menggunakan teks tersebut sebagai snippet.

Ini normal dan tidak perlu dikhawatirkan — tapi alasan lebih besar untuk memastikan konten halamanmu benar-benar berkualitas dan relevan.

---

## 🤖 Meta Robots — Kontrol Crawler Search Engine

### Apa itu Meta Robots?

`<meta name="robots">` memberi instruksi kepada **web crawler** (bot yang merayapi internet) tentang bagaimana memperlakukan halaman kamu.

```html
<meta name="robots" content="index, follow" />
```

### Nilai-nilai yang Umum

```html
<!-- Default: izinkan indexing dan ikuti link -->
<meta name="robots" content="index, follow" />

<!-- Jangan index halaman ini, tapi ikuti link di dalamnya -->
<meta name="robots" content="noindex, follow" />

<!-- Index halaman, tapi jangan ikuti link -->
<meta name="robots" content="index, nofollow" />

<!-- Jangan index DAN jangan ikuti link -->
<meta name="robots" content="noindex, nofollow" />
```

### Kapan Menggunakan `noindex`?

- Halaman "Under Construction" yang belum siap publik
- Halaman konfirmasi pembelian (tidak ada nilai untuk diindeks)
- Halaman login atau admin
- Halaman hasil pencarian internal (duplikat konten)
- Halaman yang berisi konten privat

### Untuk Portfolio: Biarkan Default

Untuk halaman portfolio yang ingin ditemukan orang:

```html
<!-- Biarkan Google mengindeks dan mengikuti semua link -->
<meta name="robots" content="index, follow" />

<!-- Atau cukup tidak tulis meta robots sama sekali — defaultnya sudah index, follow -->
```

---

## 🔗 Canonical URL — Mengatasi Duplikat Konten

### Apa itu Canonical URL?

`<link rel="canonical">` memberitahu search engine: **"Ini adalah URL resmi/utama dari halaman ini."**

Ini penting ketika satu halaman bisa diakses dari beberapa URL berbeda:

```
https://rizkipratama.com/
https://rizkipratama.com/index.html
https://rizkipratama.com/?ref=github
https://www.rizkipratama.com/
```

Semua URL di atas mungkin menampilkan halaman yang sama, tapi search engine bisa menganggapnya sebagai halaman yang berbeda — dan menghukum website dengan "konten duplikat".

```html
<!-- Beritahu Google: URL resmi halaman ini adalah ini -->
<link rel="canonical" href="https://rizkipratama.com/" />
```

Dengan canonical, semua "kekuatan SEO" dari halaman-halaman duplikat dikumpulkan ke URL yang kamu tentukan.

### Aturan Canonical

```html
<!-- ✅ Selalu gunakan URL lengkap (absolut), bukan relatif -->
<link rel="canonical" href="https://rizkipratama.com/proyek/" />

<!-- ❌ Jangan gunakan URL relatif -->
<link rel="canonical" href="/proyek/" />

<!-- ✅ Untuk halaman beranda, canonical menunjuk ke dirinya sendiri -->
<link rel="canonical" href="https://rizkipratama.com/" />
```

---

## 👤 Meta Author

```html
<meta name="author" content="Rizki Pratama" />
```

Menginformasikan penulis/pembuat halaman. Tidak memiliki dampak SEO langsung, tapi berguna untuk identitas dokumen.

---

## 🏗️ `<head>` Portfolio yang Lengkap Sejauh Ini

```html
<head>
  <!-- Dasar -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Identitas -->
  <title>Rizki Pratama — Junior Web Developer</title>
  <meta name="description" 
        content="Portfolio Rizki Pratama, junior web developer dari Jakarta. Proyek HTML, CSS, dan form interaktif dari siswa SMK RPL." />
  <meta name="author" content="Rizki Pratama" />
  
  <!-- Crawler -->
  <meta name="robots" content="index, follow" />
  
  <!-- Canonical -->
  <link rel="canonical" href="https://rizkipratama.com/" />
</head>
```

---

## ⚠️ Mitos SEO yang Harus Dihindari

**Mitos 1: Semakin banyak keyword di meta description, semakin tinggi ranking.**

Fakta: Meta description tidak memengaruhi ranking Google. Keyword stuffing justru bisa merusak kepercayaan pengguna.

**Mitos 2: Metadata yang lengkap = SEO yang baik.**

Fakta: SEO yang baik dimulai dari **konten yang berkualitas dan relevan**. Metadata hanya membantu search engine memahami konten yang sudah bagus — tidak bisa menggantikannya.

**Mitos 3: Jika description kamu bagus, Google akan selalu menggunakannya.**

Fakta: Google bisa memilih teks lain dari halamanmu yang lebih relevan dengan kueri pengguna. Ini adalah keputusan algoritma, bukan bug.

---

**[Lanjut: Elemen link & Favicon →](/bab9/link-favicon/)**
