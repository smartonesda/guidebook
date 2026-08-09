---
title: "Performa Dasar HTML"
description: Memahami dasar-dasar optimasi performa halaman web dari sisi HTML — lazy loading, preloading, resource hints, dan eksekusi script.
---

Performa website dimulai dari kode HTML. Seberapa cepat halaman dimuat di HP atau koneksi internet pengguna sangat dipengaruhi oleh bagaimana kita menstrukturkan pemuatan aset (gambar, font, stylesheet, dan script).

---

## ⚡ 1. Optimasi Gambar dengan `loading="lazy"`

Gambar adalah penyumbang ukuran file terbesar di sebagian besar website.

Secara default, browser mengunduh **semua gambar** yang ada di dalam kode HTML saat halaman pertama dibuka — meskipun gambar tersebut berada jauh di bawah layar (*below the fold*).

```html
<!-- ❌ DAHULU: Semua gambar diunduh langsung (boros kuota & lambat) -->
<img src="foto-bawah.jpg" alt="Foto Proyek 10" />

<!-- ✅ SEKARANG: Gunakan loading="lazy" untuk gambar di bawah layar -->
<img src="foto-bawah.jpg" alt="Foto Proyek 10" loading="lazy" />

<!-- ⚡ PENTING: Gambar di paling atas (Above the Fold) gunakan loading="eager" -->
<img src="hero-banner.jpg" alt="Banner Utama" loading="eager" width="1200" height="600" />
```

- **`loading="lazy"`**: Gambar hanya diunduh ketika layar pengguna mendekati posisi gambar tersebut.
- **`loading="eager"`**: Gambar diunduh segera (gunakan untuk gambar banner utama di paling atas).

---

## 📐 2. Selalu Tentukan Atribut `width` dan `height` pada Gambar

Menentukan atribut `width` dan `height` pada elemen `<img>` mencegah terjadinya **Cumulative Layout Shift (CLS)** — yaitu fenomena ketika tampilan halaman "meloncat-loncat" secara mengganggu saat gambar selesai dimuat.

```html
<!-- ❌ TANPA LEBAR & TINGGI: Halaman akan meloncat saat gambar selesai download -->
<img src="logo.png" alt="Logo" />

<!-- ✅ DENGAN LEBAR & TINGGI: Browser mencadangkan ruang kosong terlebih dahulu -->
<img src="logo.png" alt="Logo" width="200" height="50" />
```

---

## 📜 3. Optimasi Pemuatan Script JavaScript (`defer` & `async`)

Tag `<script>` secara default memblokir proses pembacaan HTML (*render-blocking*). Saat browser menemukan tag `<script>`, ia akan berhenti membaca HTML, mengunduh file JS, dan menjalankannya terlebih dahulu sebelum melanjutkan membaca sisa HTML.

```html
<!-- ❌ SALAH: Script di head tanpa atribut khusus (memblokir tampilan) -->
<head>
  <script src="app.js"></script>
</head>

<!-- ✅ BEST PRACTICE 1: Gunakan atribut `defer` di head -->
<head>
  <script src="app.js" defer></script>
</head>
<!-- `defer` mengunduh JS di background dan menjalankannya SETELAH seluruh HTML selesai dibaca -->

<!-- ✅ BEST PRACTICE 2: Atau letakkan tag script di paling bawah sebelum </body> -->
<body>
  ...
  <script src="app.js"></script>
</body>
```

---

## 🚀 4. Resource Hints: `dns-prefetch` & `preconnect`

Jika websitemu memuat aset dari server eksternal (misal: Google Fonts, FontAwesome, CDN), beritahu browser untuk melakukan koneksi jaringan lebih awal menggunakan Resource Hints di dalam `<head>`.

```html
<head>
  <!-- Menghubungkan koneksi ke Google Fonts lebih awal -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
</head>
```

---

## 📊 Checklist Ringkas Performa HTML

```
[ ] Semua gambar di bawah layar menggunakan loading="lazy".
[ ] Gambar utama (Hero/Banner) menggunakan loading="eager".
[ ] Semua tag <img> menyertakan atribut width dan height.
[ ] Script JavaScript menggunakan atribut defer atau diletakkan di akhir <body>.
[ ] Font dan aset CDN eksternal menggunakan preconnect.
```

---

**[Lanjut: Studi Kasus →](/bab11/studi-kasus/)**
