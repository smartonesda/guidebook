---
title: "Introduction"
description: Pengantar BAB 8 — memahami Semantic HTML, mengapa makna element penting, dan bagaimana pilihan tag memengaruhi browser, search engine, dan aksesibilitas.
---

Kembali lagi di HTML Guidebook! Di BAB 7, kita sudah membongkar **HTML Attributes** — bagaimana memberikan informasi tambahan kepada element melalui `id`, `class`, `data-*`, dan ARIA.

Sekarang kita naik satu level lagi: **bukan hanya bagaimana memberi konfigurasi pada element, tetapi bagaimana memilih element yang paling tepat untuk menggambarkan makna konten.**

Inilah inti dari **BAB 8 — Semantic HTML**.

---

## 🤔 Sebuah Pertanyaan Sederhana

Coba lihat dua kode ini:

```html
<!-- Versi A -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Beranda</div>
    <div class="nav-item">Proyek</div>
  </div>
</div>

<!-- Versi B -->
<header>
  <nav>
    <a href="/">Beranda</a>
    <a href="/proyek">Proyek</a>
  </nav>
</header>
```

Jika kamu menerapkan CSS yang sama pada keduanya, **tampilannya bisa identik di browser**.

Tapi apakah keduanya benar-benar sama?

**Tidak.** Dan itulah yang akan kita pelajari di BAB 8 ini.

---

## 🎯 Tujuan Pembelajaran BAB 8

Setelah menyelesaikan bab ini, kamu akan mampu:
- Menjelaskan apa yang dimaksud dengan "semantic" dalam konteks HTML.
- Membedakan semantic element dan generic element (`div`, `span`).
- Memahami mengapa pilihan element memengaruhi aksesibilitas, SEO, dan keterbacaan kode.
- Menggunakan `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>` dengan benar.
- Memahami kapan `<div>` dan `<span>` tetap tepat digunakan.
- Membangun struktur halaman portfolio yang semantic dari awal hingga akhir.
- Berpikir: "Konten ini maknanya apa?" sebelum memilih element.

---

## 🗺️ Peta Pelajaran BAB 8

- **8.2 header & nav** — Bagian kepala halaman dan navigasi.
- **8.3 main & article** — Konten utama dan konten yang berdiri sendiri.
- **8.4 section & aside** — Pengelompokan konten dan konten pendukung.
- **8.5 footer** — Bagian kaki halaman dan informasi penutup.
- **8.6 div vs Semantic** — Kapan `<div>` tepat, kapan tidak, dan mengapa keduanya punya tempat.
- **8.7 Struktur Halaman Nyata** — Melihat pola semantic dari website nyata dan cara membangunnya.
- **8.8 Studi Kasus** — Refactor portfolio dari `<div>`-first menjadi semantic HTML.
- **8.9 Mini Project** — Membangun halaman portfolio dengan struktur semantic yang benar.
- **8.10 Challenge** — Tantangan mengidentifikasi, menganalisis, dan memperbaiki struktur halaman.
- **8.11 Error Corner** — Kesalahan paling sering dalam penggunaan semantic element.
- **8.12 Ringkasan** — Rekap prinsip dan panduan pilihan element.

Mari kita mulai dengan pertanyaan yang paling mendasar: **apa itu semantic, dan mengapa browser peduli?**

**[Lanjut: header & nav →](/bab8/header-nav/)**
