---
title: "Elemen link & Favicon"
description: Memahami elemen link sebagai penghubung resource eksternal — favicon, stylesheet, preload, prefetch — dan cara kerjanya serta perbedaannya dengan elemen anchor.
---

## 🔗 Elemen `<link>` — Bukan Hyperlink!

Ini adalah salah satu kebingungan paling umum pemula HTML: ada dua elemen yang terasa mirip tapi fungsinya sangat berbeda.

```html
<!-- Elemen <a>: hyperlink untuk navigasi pengguna -->
<a href="/tentang">Halaman Tentang</a>

<!-- Elemen <link>: menghubungkan resource kepada dokumen -->
<link rel="stylesheet" href="style.css" />
```

| | `<a>` (anchor) | `<link>` |
|---|---|---|
| **Ada di mana?** | `<body>` | `<head>` |
| **Ditampilkan?** | Ya, sebagai teks/gambar yang bisa diklik | Tidak |
| **Siapa yang menggunakannya?** | Pengguna (klik) | Browser (memuat resource) |
| **Fungsi** | Navigasi pengguna | Menghubungkan resource ke dokumen |
| **Void element?** | Tidak (ada tag penutup) | Ya (tidak ada tag penutup) |

`<link>` adalah **void element** seperti `<img>` dan `<input>` — tidak memiliki konten dan tidak butuh tag penutup.

---

## 🏷️ Atribut `rel` — Jenis Hubungan

Atribut `rel` (relationship) pada `<link>` mendefinisikan **jenis hubungan** antara dokumen saat ini dengan resource yang dituju.

### `rel="stylesheet"` — Memuat CSS Eksternal

```html
<link rel="stylesheet" href="style.css" />
<link rel="stylesheet" href="https://cdn.example.com/bootstrap.min.css" />
```

Ini adalah penggunaan `<link>` yang paling umum — memuat file CSS eksternal. Browser akan langsung mengunduh dan menerapkan stylesheet ini saat memuat halaman.

### `rel="icon"` — Favicon

```html
<link rel="icon" href="/favicon.ico" />
<link rel="icon" type="image/png" href="/favicon.png" sizes="32x32" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

### `rel="canonical"` — URL Resmi

```html
<link rel="canonical" href="https://rizkipratama.com/" />
```

Sudah kita bahas di halaman sebelumnya.

### `rel="preload"` — Muat Lebih Awal

```html
<!-- Muat font sebelum dibutuhkan CSS -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />

<!-- Muat gambar hero sebelum dibutuhkan HTML -->
<link rel="preload" href="/hero-image.jpg" as="image" />
```

`preload` memberitahu browser: "Resource ini penting, mulai unduh sekarang meski belum dibutuhkan."

### `rel="prefetch"` — Antisipasi Navigasi Berikutnya

```html
<!-- Unduh halaman /proyek di background, untuk navigasi berikutnya -->
<link rel="prefetch" href="/proyek" />
```

`prefetch` berbeda dari `preload` — ia untuk resource yang *mungkin* dibutuhkan di halaman berikutnya, bukan halaman sekarang.

---

## 🖼️ Favicon — Ikon Kecil yang Penting

### Apa itu Favicon?

**Favicon** (*favorite icon*) adalah ikon kecil yang muncul di:
- Tab browser di sebelah judul halaman
- Bookmark browser
- Daftar recent tabs
- Shortcut di layar ponsel

Meski kecil, favicon adalah elemen identitas visual yang sangat penting — ia membuat website kamu mudah dikenali di antara banyak tab yang terbuka.

### Format Favicon yang Direkomendasikan

```html
<!-- Favicon ICO — format paling lama, kompatibilitas terluas -->
<link rel="icon" href="/favicon.ico" sizes="any" />

<!-- Favicon SVG — skala sempurna di semua ukuran, support dark mode -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

<!-- Apple Touch Icon — ikon saat website di-bookmark di iOS -->
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
```

**Urutan prioritas yang disarankan:**
1. `.ico` sebagai fallback untuk browser lama
2. `.svg` sebagai pilihan utama untuk browser modern
3. Apple touch icon untuk iOS

### Membuat Favicon

Untuk portfolio pemula, cukup buat satu gambar persegi (misalnya inisial nama dengan background warna) lalu konversi ke format yang dibutuhkan menggunakan tools online seperti:
- realfavicongenerator.net
- favicon.io

### Ukuran Favicon

```html
<!-- Berbagai ukuran untuk berbagai konteks -->
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
```

Untuk kebanyakan kasus, cukup `favicon.ico` dan `favicon.svg`.

---

## 📦 `<meta name="theme-color">` — Warna Browser Mobile

Bukan `<link>`, tapi meta tag yang memengaruhi tampilan browser:

```html
<!-- Warna toolbar browser di Android Chrome -->
<meta name="theme-color" content="#0ea5e9" />

<!-- Versi dark mode -->
<meta name="theme-color" content="#0ea5e9" media="(prefers-color-scheme: light)" />
<meta name="theme-color" content="#0284c7" media="(prefers-color-scheme: dark)" />
```

---

## 🏗️ `<head>` Portfolio Kita Sejauh Ini

```html
<head>
  <!-- Dasar -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Identitas & SEO -->
  <title>Rizki Pratama — Junior Web Developer</title>
  <meta name="description" 
        content="Portfolio Rizki Pratama, junior web developer dari Jakarta." />
  <meta name="author" content="Rizki Pratama" />
  <meta name="robots" content="index, follow" />
  
  <!-- Canonical -->
  <link rel="canonical" href="https://rizkipratama.com/" />
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  
  <!-- Theme color -->
  <meta name="theme-color" content="#0ea5e9" />
</head>
```

---

**[Lanjut: Open Graph & Social →](/bab9/open-graph/)**
