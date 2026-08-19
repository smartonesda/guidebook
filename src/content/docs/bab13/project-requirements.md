---
title: "Persyaratan & Spesifikasi"
description: Spesifikasi teknis wajib Final Project — cakupan struktur dokumen, navigasi, konten semantik, form, metadata, aksesibilitas, dan kualitas kode.
---

Apapun pilihan proyek yang kamu ambil dari 7 Project Briefs, websitemu **WAJIB memenuhi seluruh spesifikasi teknis berikut** agar dinyatakan lulus pengujian kualitas.

---

## 📋 Checklist Spesifikasi Teknis Wajib

### 1. Dokumentasi & Navigasi Utama (Skor Maksimal: 15)
- [ ] Menyertakan `<!DOCTYPE html>`, `lang="id"`, dan tag dasar `<head>` & `<body>`.
- [ ] Elemen `<header>` yang menampung branding situs dan navigasi `<nav>`.
- [ ] Navigasi `<nav>` memiliki atribut `aria-label` yang deskriptif.
- [ ] Link halaman yang sedang aktif ditandai dengan `aria-current="page"`.
- [ ] Memiliki fitur **Skip Navigation Link** di awal `<body>` yang menunjuk ke `<main id="konten-utama" tabindex="-1">`.

### 2. Semantik & Struktur Konten (Skor Maksimal: 25)
- [ ] Seluruh konten utama dibungkus oleh tepat satu elemen `<main>`.
- [ ] Setiap seksi utama dibungkus oleh `<section>` yang memiliki `id` unik dan `aria-labelledby`.
- [ ] Hirarki heading yang disiplin dan berurutan (`<h1>` -> `<h2>` -> `<h3>`) tanpa melompati tingkatan.
- [ ] Menggunakan elemen semantik khusus yang relevan: `<article>`, `<aside>`, `<figure>`, `<figcaption>`, `<time>`, `<address>`, dan `<abbr>`.
- [ ] Memiliki elemen `<footer>` yang menampung informasi hak cipta, kontak `<address>`, dan navigasi sekunder.

### 3. Data Terstruktur (Tabel & List) (Skor Maksimal: 15)
- [ ] Menggunakan daftar (`<ul>`, `<ol>`, atau `<dl>`) secara tepat sesuai jenis informasi.
- [ ] Menyajikan minimal **satu tabel data semantik** (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th> scope="col/row"`).

### 4. Formulir Interaktif & Validasi (Skor Maksimal: 15)
- [ ] Menyertakan minimal **satu formulir bermakna** (`<form method="POST">`).
- [ ] Pengelompokan elemen form menggunakan `<fieldset>` dan `<legend>`.
- [ ] Seluruh kotak input terhubung presisi ke tag `<label>` via atribut `for`↔`id`.
- [ ] Menggunakan atribut validasi HTML5 bawaan (`required`, `pattern`, `minlength`, `type="email"`, `type="tel"`, dsb.).
- [ ] Tanda wajib diisi dibungkus oleh `<abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>`.

### 5. Metadata, SEO, & Open Graph (Skor Maksimal: 15)
- [ ] Atribut `<meta charset="UTF-8">` diletakkan di baris pertama `<head>`.
- [ ] Konfigurasi viewport mobile `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- [ ] `<title>` yang spesifik dan informatif (50–60 karakter).
- [ ] `<meta name="description">` yang relevan (120–160 karakter).
- [ ] Tag Open Graph lengkap (`og:type`, `og:title`, `og:description`, `og:image`, `og:url`).
- [ ] Favicon resmi (`<link rel="icon">`).

### 6. Aksesibilitas WCAG & Kualitas Kode (Skor Maksimal: 15)
- [ ] Semua elemen `<img>` memiliki atribut `alt` yang bermakna.
- [ ] Gambar di bawah lipatan layar (*below the fold*) menggunakan `loading="lazy"`.
- [ ] Semua link eksternal (`target="_blank"`) memiliki `rel="noopener noreferrer"` dan `aria-label` penjelas.
- [ ] Indikator fokus keyboard tidak dihapus (`:focus-visible` terjaga).
- [ ] Indentasi 2 spasi secara disiplin di seluruh dokumen.
- [ ] Lolos **0 Error** di W3C HTML Validator (`validator.w3.org`).

---

**[Lanjut: Arsitektur Informasi →](/bab13/information-architecture/)**
