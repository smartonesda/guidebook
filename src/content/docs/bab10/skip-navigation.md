---
title: "Skip Navigation"
description: Memahami teknik Skip Navigation (Skip to Content) — mengapa fitur ini sangat penting bagi pengguna keyboard, cara kerjanya di HTML, dan cara mengimplementasikannya.
---

## 🏃 Masalah: Pengulangan Navigasi yang Melelahkan

Bayangkan kamu seorang pengguna keyboard. Setiap kali kamu berpindah halaman di sebuah website, hal pertama di bagian atas halaman adalah menu navigasi yang berisi 15 link:

```
[Beranda] [Tentang] [Proyek] [Blog] [Layanan] [Tim] [Karir] [Kontak] ...
```

Untuk membaca artikel di halaman tersebut, kamu harus menekan tombol **`Tab` 15 kali** di SETIAP HALAMAN baru yang kamu buka — hanya untuk melewati menu navigasi yang sama berulang-ulang.

Ini adalah pengalaman yang sangat melelahkan dan membuat frustrasi.

---

## 🎯 Solusinya: Skip Navigation Link

**Skip Navigation** (sering disebut *Skip to Content*) adalah sebuah link tersembunyi yang diletakkan di **paling atas dokumen HTML** — elemen pertama di dalam `<body>`.

Link ini tersembunyi secara visual dari layar biasa, tapi **langsung muncul ketika pengguna keyboard menekan tombol `Tab` pertama kali**.

Ketika ditekan (`Enter`), link ini langsung melompati seluruh menu navigasi dan memindahkan fokus kursor ke elemen `<main>` atau konten utama.

```
Pengguna buka halaman → Tekan Tab → Link "Lompati ke konten utama" muncul
→ Tekan Enter → Kursor langsung di <main>!
```

---

## ✍️ Cara Mengimplementasikan Skip Navigation

Implementasi Skip Navigation membutuhkan dua hal: **HTML** di paling atas `<body>` dan sedikit **CSS** untuk menyembunyikan/menampilkannya.

### 1. Struktur HTML (Elemen Pertama di `<body>`)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Portfolio Rizki Pratama</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ⚡ SKIP LINK: Harus menjadi elemen PERTAMA di dalam <body> -->
  <a href="#konten-utama" class="skip-link">
    Lompati ke konten utama
  </a>

  <!-- Header & Navigasi yang dilompati -->
  <header>
    <nav>
      <a href="/">Beranda</a>
      <a href="/proyek">Proyek</a>
      <a href="/blog">Blog</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>

  <!-- Konten Utama: Target dari skip link -->
  <!-- tabindex="-1" memastikan main bisa menerima fokus saat skip link diklik -->
  <main id="konten-utama" tabindex="-1">
    <h1>Selamat Datang di Portfolio Saya</h1>
    <p>Konten utama dimulai di sini...</p>
  </main>

</body>
</html>
```

Perhatikan:
- `<a href="#konten-utama">` menunjuk ke `<main id="konten-utama">`.
- `<main tabindex="-1">` ditambahi `tabindex="-1"` agar browser (terutama Chrome dan Safari) mau memindahkan fokus keyboard secara konsisten ke elemen `<main>` saat link diklik.

### 2. CSS Pembantu (Sembunyikan Visual, Tampilkan saat Fokus)

```css
/* Styling untuk Skip Link */
.skip-link {
  position: absolute;
  top: -100px;         /* Sembunyikan di luar layar di atas */
  left: 10px;
  background: #0ea5e9; /* Warna kontras tinggi */
  color: white;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: bold;
  z-index: 9999;       /* Selalu paling atas */
  text-decoration: none;
  transition: top 0.2s ease;
}

/* Munculkan hanya ketika menerima FOKUS (saat ditekan Tab) */
.skip-link:focus {
  top: 10px;           /* Turun ke dalam layar saat difokus */
  outline: 3px solid #000;
}
```

---

## 🧪 Mengapa Ini Sangat Efektif?

- **Pengguna visual (mouse):** Tidak melihat link ini sama sekali karena `top: -100px`.
- **Pengguna keyboard:** Tekan `Tab` sekali → link muncul di pojok kiri atas → tekan `Enter` → langsung di isi utama!
- **Pengguna screen reader:** Screen reader membaca: *"Link, Lompati ke konten utama"* sebagai hal pertama saat halaman dimuat.

---

## 📋 Standardisasi Nama Skip Link

Gunakan teks yang jelas dan spesifik bahasa:

```html
<!-- Bahasa Indonesia -->
<a href="#konten-utama" class="skip-link">Lompati ke konten utama</a>

<!-- Bahasa Inggris -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## 🏗️ Integrasi dalam Portfolio Kita

Inilah struktur awal `<body>` portfolio kita yang sudah memiliki Skip Navigation:

```html
<body>

  <!-- 1. Skip link untuk aksesibilitas keyboard -->
  <a href="#konten-utama" class="skip-link">
    Lompati ke konten utama
  </a>

  <!-- 2. Header & Navigasi -->
  <header id="site-header">
    <nav aria-label="Navigasi utama">
      <a href="/">Beranda</a>
      <a href="/proyek">Proyek</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>

  <!-- 3. Konten Utama (Target) -->
  <main id="konten-utama" tabindex="-1">
    <!-- Seluruh konten portfolio di sini -->
  </main>

  <!-- 4. Footer -->
  <footer>...</footer>

</body>
```

Satu link sederhana ini adalah **salah satu fitur aksesibilitas berdampak terbesar** yang bisa kamu tambahkan ke website kamu.

---

**[Lanjut: Studi Kasus →](/bab10/studi-kasus/)**
