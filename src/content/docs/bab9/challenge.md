---
title: "Challenge"
description: Tantangan berjenjang untuk menguji pemahaman Metadata & SEO — dari identifikasi kesalahan hingga analisis praktik SEO dan membuat head lengkap untuk berbagai jenis halaman.
---

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan semua tantangan ini, kamu akan mampu:
- Mengidentifikasi metadata yang hilang, salah, atau berlebihan.
- Menulis `<head>` yang benar untuk berbagai jenis halaman.
- Membedakan antara metadata yang benar-benar berguna dan "cargo cult metadata".
- Menjelaskan mengapa metadata tidak bisa menggantikan konten berkualitas.

---

## 🔴 Challenge 1: Audit `<head>` yang Bermasalah (20 poin)

Kode `<head>` di bawah ini mengandung **8 masalah**. Temukan semuanya dan tulis versi yang benar.

```html
<head>
  <title>Selamat Datang di Website Keren Saya yang Sangat Bagus dan Informatif Tentang Web Development</title>
  
  <meta charset="UTF-8">
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
  
  <meta name="description" content="website portfolio web developer web design HTML CSS JavaScript web developer Jakarta web developer murah terbaik profesional">
  
  <meta property="description" content="Portfolio junior web developer.">
  
  <meta name="og:title" content="Portfolio Saya">
  <meta name="og:image" content="/og-image.png">
  <meta name="og:url" content="https://example.com/">
  
  <link rel="canonical" href="/index.html">
</head>
```

**Petunjuk:** Masalah berkaitan dengan urutan, panjang, keyword stuffing, atribut yang salah, URL relatif, viewport restrictive, dan duplikasi.

---

## 🟡 Challenge 2: Tulis `<head>` dari Deskripsi (20 poin)

Buat `<head>` yang lengkap untuk halaman berikut:

**Deskripsi halaman:**
- Halaman detail proyek: "Website Toko Roti Nusantara"
- Pemilik: Budi Santoso, web developer dari Bandung
- Deskripsi: Website e-commerce sederhana untuk toko roti lokal dengan fitur menu, pemesanan online, dan kontak
- URL: `https://budisantoso.dev/proyek/toko-roti/`
- URL gambar OG: `https://budisantoso.dev/images/toko-roti-og.jpg`
- Website berbahasa Indonesia
- Ingin diindeks Google

Requirements: semua fundamental, identitas, canonical, favicon (placeholder), Open Graph lengkap, Twitter Card.

---

## 🟠 Challenge 3: Benar atau Salah? (20 poin)

Untuk setiap pernyataan, tentukan Benar atau Salah dan jelaskan alasannya:

1. Meta description secara langsung meningkatkan ranking Google jika mengandung keyword yang tepat.
2. `<title>` dan `<h1>` boleh berbeda — mereka punya fungsi berbeda.
3. Nilai `og:image` boleh menggunakan URL relatif seperti `/images/og.png`.
4. Jika tidak ada `<meta name="robots">`, browser akan memblokir Google dari mengindeks halaman.
5. Website yang punya meta description yang bagus tapi konten yang buruk akan tetap ranking tinggi di Google.
6. `<meta charset="UTF-8">` harus diletakkan setelah `<title>` agar browser bisa membaca judul dengan benar.
7. `user-scalable=no` pada viewport melanggar standar aksesibilitas.
8. Open Graph dan Twitter Card menggunakan sistem yang sama persis — tidak perlu menulis keduanya.

---

## 🔵 Challenge 4: Metadata untuk Berbagai Halaman (20 poin)

Portfolio biasanya punya lebih dari satu halaman. Tulis `<title>` dan `<meta name="description">` yang tepat (memenuhi panduan panjang) untuk masing-masing halaman berikut:

**Halaman A:** Beranda/homepage portfolio  
**Halaman B:** Halaman daftar semua proyek  
**Halaman C:** Halaman detail satu proyek: "Aplikasi Absensi Kelas XII RPL"  
**Halaman D:** Halaman kontak  
**Halaman E:** Halaman "Tentang Saya"

Untuk setiap halaman:
- `<title>` harus unik, spesifik, 50–60 karakter, menggunakan format "Judul Halaman — Nama Developer"
- `<meta description>` harus unik, relevan, 120–160 karakter

---

## ⚫ Challenge 5: Analisis Mendalam (20 poin)

Jawab pertanyaan berikut dalam bentuk tulisan analitis:

**Pertanyaan 1:**
Seorang siswa berkata: *"Saya sudah isi semua meta tag — charset, viewport, title, description, robots, canonical, dan Open Graph. Sekarang portfolio saya pasti muncul di halaman 1 Google."*

Apa yang salah dari pemahaman ini? Jelaskan apa yang sebenarnya menentukan ranking Google, dan apa peran metadata di dalamnya.

**Pertanyaan 2:**
Perhatikan dua versi `<head>` berikut:

Versi A:
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Andi Wijaya — Frontend Developer Bandung</title>
  <meta name="description" content="Portfolio Andi Wijaya, frontend developer dari Bandung dengan pengalaman 1 tahun di HTML, CSS, dan React.">
</head>
```

Versi B:
```html
<head>
  <meta name="keywords" content="frontend developer, web developer, HTML, CSS, JavaScript, React, Angular, Vue, Bootstrap, Tailwind, jQuery, web design, UI UX, website murah, jasa website">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HOME</title>
  <meta charset="UTF-8">
  <meta name="description" content="Portfolio saya.">
</head>
```

Analisis: Apa yang benar dan salah dari masing-masing versi? Versi mana yang lebih baik dan mengapa?

**Pertanyaan 3:**
Jelaskan dengan kata-katamu sendiri: apa perbedaan konseptual antara `<head>` dan `<body>` dalam sebuah dokumen HTML? Mengapa pemisahan ini penting?

---

## 📊 Rubrik Penilaian

| Challenge | Poin | Kriteria |
|---|---|---|
| 1: Audit Head | 20 | Menemukan 8 masalah + penjelasan + perbaikan |
| 2: Tulis Head | 20 | Semua tag wajib, format benar, nilai relevan |
| 3: Benar/Salah | 20 | Jawaban tepat + penjelasan yang akurat |
| 4: Multi-Halaman | 20 | Title & description unik, panjang sesuai per halaman |
| 5: Analisis | 20 | Jawaban mendalam, tidak hanya definisi |
| **Total** | **100** | |

---

**[Lanjut: Error Corner →](/bab9/error-corner/)**
