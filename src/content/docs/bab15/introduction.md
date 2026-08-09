---
title: "Introduction & Quick Start"
description: BAB 15 — HTML Handbook. Pusat referensi pencarian cepat (Quick Lookup) sintaks, elemen, atribut, dan cheat sheet HTML5 untuk menemani proses belajar dan pengembangan web.
---

Selamat datang di **BAB 15 — HTML Handbook (Reference Center)**! 📚

Berbeda dari BAB 1–14 yang merupakan materi pembelajaran linear, BAB 15 adalah **Buku Saku Referensi Cepat (*Quick Reference Manual*)**.

```
Mental Model:
"Kamu tidak perlu menghafal seluruh tag HTML.
Kamu hanya perlu tahu di mana menemukannya saat dibutuhkan."
```

---

## ⚡ HTML Document Quick Start Skeleton

Salin template dasar dokumen HTML5 standar ini setiap kali kamu memulai proyek baru:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Judul Halaman — Nama Website</title>
  <meta name="description" content="Deskripsi ringkas halaman untuk snippet Google (120-160 karakter)." />
  
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

  <!-- Skip Navigation Link untuk Aksesibilitas Keyboard -->
  <a href="#konten-utama" class="skip-link">Lompati ke konten utama</a>

  <!-- Header Situs & Navigasi Utama -->
  <header id="site-header">
    <nav aria-label="Navigasi utama">
      <a href="/" aria-current="page">Beranda</a>
      <a href="#fitur">Fitur</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>

  <!-- Konten Utama Dokumen -->
  <main id="konten-utama" tabindex="-1">
    <section id="hero" aria-labelledby="hero-title">
      <h1 id="hero-title">Judul Utama Halaman</h1>
      <p>Paragraf pembuka...</p>
    </section>
  </main>

  <!-- Footer Situs -->
  <footer id="site-footer">
    <p>&copy; <time datetime="2026">2026</time> Nama Website.</p>
  </footer>

</body>
</html>
```

---

## 🔍 Peta Navigasi Handbook (Quick Lookup)

- **[Kamus Elemen HTML](/bab15/elements-reference/)**: Referensi cepat seluruh tag HTML5 A–Z per kategori.
- **[Kamus Atribut HTML](/bab15/attributes-reference/)**: Atribut Global, Boolean, dan Spesifik.
- **[Kamus Input Types](/bab15/input-types-reference/)**: Semua tipe input form beserta kegunaannya.
- **[HTML Entities](/bab15/entities-reference/)**: Kode simbol dan karakter khusus (`&lt;`, `&gt;`, `&amp;`, `&copy;`).
- **[Decision Guide](/bab15/decision-guide/)**: Panduan cepat memilih elemen (div vs article vs section, button vs a).
- **[A11y & ARIA Reference](/bab15/accessibility-reference/)**: Quick lookup atribut aksesibilitas dan ARIA roles.
- **[SEO & Metadata](/bab15/seo-metadata-reference/)**: Template meta tags dan Open Graph social preview.
- **[Elemen Usang](/bab15/deprecated-elements/)**: Daftar elemen tua yang tidak boleh digunakan lagi.
- **[VS Code Snippets](/bab15/vscode-snippets/)**: Pintasan keyboard & cheat sheet produktivitas.

Gunakan BAB 15 ini sebagai tempat pencarian cepat setiap kali kamu ragu akan sintaks HTML!

**[Lanjut: Kamus Elemen HTML →](/bab15/elements-reference/)**
