---
title: "Studi Kasus"
description: Audit dan refactor menyeluruh dari kode portfolio yang berantakan (Working Code) menjadi kode yang maintainable, bersih, valid W3C, dan berkinerja tinggi.
---

> *"Menulis kode yang bisa berjalan adalah langkah pertama. Merapikannya hingga memenuhi standar profesional adalah pembeda antara pemula dan developer sejati."*

---

## 🎯 Tujuan Studi Kasus

Dalam studi kasus ini, kita akan melakukan **Full Code Review & Refactor** terhadap sebuah berkas halaman portofolio `index.html` yang berantakan tetapi "bekerja", lalu mengubahnya menjadi kode berstandar industri (Clean, Valid, Accessible, Maintainable, & Performant).

---

## 🔍 KODE LAMA: "Working Code" yang Berantakan (Sebelum)

Berikut adalah kode HTML milik siswa yang secara tampilan "bisa dibuka", tetapi penuh dengan anti-pattern, indentasi hancur, dan atribut salah:

```html
<!DOCTYPE HTML>
<html>
<HEAD>
<TITLE>Portfolio Rizki</TITLE>
<meta name=viewport content="width=device-width">
<style>*:focus{outline:none;}</style>
</HEAD>
<BODY>
<DIV CLASS="HEADER-BOX">
<DIV CLASS="MENU"><A HREF="#">Home</A> | <A HREF="#proyek">Proyek</A> | <A HREF="#kontak">Kontak</A></DIV>
</DIV>
<HR>
<H1>Halo Saya Rizki</H1>
<IMG SRC="foto.jpg">
<P>Saya siswa SMK RPL yang suka belajar coding.</P>
<H4>Keahlian Saya</H4>
<UL><LI>HTML<LI>CSS<LI>JS</UL>
<HR>
<H2 ID="proyek">Proyek Saya</H2>
<DIV CLASS="CARD">
<H3>Website SMK</H3>
<IMG SRC="smk.jpg">
<P>Website profil sekolah.</P>
<A HREF="https://google.com" TARGET="_blank">Demo</A>
</DIV>
<HR>
<H2 ID="kontak">Kontak</H2>
<FORM ACTION="proses.php">
<INPUT TYPE="text" PLACEHOLDER="Nama">
<INPUT TYPE="text" PLACEHOLDER="Email">
<TEXTAREA PLACEHOLDER="Pesan"></TEXTAREA>
<BUTTON ONCLICK="kirim()">Kirim</BUTTON>
</FORM>
</BODY>
</HTML>
```

---

## 📋 Daftar Hasil Audit & Temuan Bug

1. **Format Kode**: Menggunakan UPPERCASE (`<DIV>`, `<HEAD>`), tidak ada indentasi sama sekali.
2. **Standard DOCTYPE & Lang**: Lupa atribut `lang="id"` pada tag `<html>`.
3. **Struktur Semantik**: Penuh dengan `DIV-Soup`, menggunakan `<p>` dan `<HR>` sebagai pemisah manual alih-alih elemen `<header>`, `<nav>`, `<main>`, `<section>`, dan `<footer>`.
4. **Heading Hierarchy**: Loncat dari `<H1>` langsung ke `<H4>` pada keahlian.
5. **Aksesibilitas**:
   - Menghapus outline fokus (`*:focus { outline: none; }`).
   - Tag `<img>` tidak punya atribut `alt`.
   - Form tanpa `<label>` (hanya placeholder).
   - Button di dalam form tidak punya `type="submit"`.
   - Link `target="_blank"` tidak punya `rel="noopener noreferrer"`.
6. **Performa**: Gambar tidak memiliki `width`, `height`, dan `loading="lazy"`.

---

## ✨ KODE BARU: Clean & Maintainable (Sesudah Refactor)

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Identitas & SEO -->
    <title>Rizki Pratama — Junior Web Developer · Jakarta</title>
    <meta
      name="description"
      content="Portfolio Rizki Pratama, junior web developer dari SMK RPL Jakarta. Proyek HTML, CSS, dan web yang bersih dan aksesibel."
    />
    <meta name="author" content="Rizki Pratama" />
    <link rel="canonical" href="https://rizkipratama.com/" />

    <!-- Favicon & Stylesheet -->
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>
  <body class="page page--home">
    <!-- Skip Navigation Link -->
    <a href="#konten-utama" class="skip-link">Lompati ke konten utama</a>

    <!-- Navigasi Utama -->
    <header id="site-header" class="site-header">
      <div class="header-brand">
        <p class="brand-name">Rizki Pratama</p>
        <p class="brand-role">Junior Web Developer</p>
      </div>

      <nav id="nav-utama" aria-label="Navigasi utama">
        <a href="index.html" class="nav-link nav-link--active" aria-current="page">Home</a>
        <a href="#proyek" class="nav-link">Proyek</a>
        <a href="#kontak" class="nav-link">Kontak</a>
      </nav>
    </header>

    <!-- Konten Utama -->
    <main id="konten-utama" tabindex="-1">
      <!-- Section Hero -->
      <section id="hero" class="section-hero" aria-labelledby="hero-title">
        <figure class="profile-figure">
          <img
            src="assets/images/foto.jpg"
            alt="Foto potret Rizki Pratama tersenyum"
            width="150"
            height="150"
            loading="eager"
            class="profile-photo"
          />
          <figcaption class="profile-caption">Rizki Pratama</figcaption>
        </figure>

        <div class="hero-text">
          <h1 id="hero-title" class="hero-title">Halo, Saya Rizki 👋</h1>
          <p class="hero-desc">
            Saya siswa SMK RPL yang fokus merancang kode HTML bersih, terstruktur, dan aksesibel.
          </p>
        </div>
      </section>

      <!-- Section Keahlian -->
      <section id="keahlian" class="section" aria-labelledby="keahlian-title">
        <h2 id="keahlian-title" class="section-title">Keahlian Saya</h2>
        <ul class="skills-list" aria-label="Daftar keahlian teknis">
          <li class="skill-item">HTML5</li>
          <li class="skill-item">CSS3</li>
          <li class="skill-item">JavaScript</li>
        </ul>
      </section>

      <!-- Section Proyek -->
      <section id="proyek" class="section" aria-labelledby="proyek-title">
        <h2 id="proyek-title" class="section-title">Proyek Terbaru</h2>

        <div class="project-grid">
          <article class="project-card">
            <header class="project-card__header">
              <h3 class="project-card__title">Website SMK</h3>
            </header>
            <figure class="project-card__figure">
              <img
                src="assets/images/smk.jpg"
                alt="Screenshot tampilan beranda Website Profil SMK"
                width="400"
                height="225"
                loading="lazy"
              />
            </figure>
            <p class="project-card__desc">Website profil sekolah responsif.</p>
            <footer class="project-card__footer">
              <a
                href="https://demo-smk.example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lihat demo Website SMK (terbuka di tab baru)"
                class="btn-link"
              >
                Demo
              </a>
            </footer>
          </article>
        </div>
      </section>

      <!-- Section Kontak -->
      <section id="kontak" class="section" aria-labelledby="kontak-title">
        <h2 id="kontak-title" class="section-title">Hubungi Saya</h2>

        <form id="form-kontak" action="/proses.php" method="POST" class="contact-form">
          <div class="form-group">
            <label for="nama-pengirim">
              Nama Lengkap <abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>
            </label>
            <input
              type="text"
              id="nama-pengirim"
              name="nama_lengkap"
              placeholder="Contoh: Budi Santoso"
              required
            />
          </div>

          <div class="form-group">
            <label for="email-pengirim">
              Alamat Email <abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>
            </label>
            <input
              type="email"
              id="email-pengirim"
              name="email_pengirim"
              placeholder="nama@domain.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="pesan-pengirim">
              Pesan <abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>
            </label>
            <textarea
              id="pesan-pengirim"
              name="pesan_detail"
              rows="4"
              placeholder="Tulis pesan lengkapmu..."
              required
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">Kirim Pesan</button>
        </form>
      </section>
    </main>

    <!-- Footer -->
    <footer id="site-footer" class="site-footer">
      <p>&copy; <time datetime="2026">2026</time> Rizki Pratama. Hak Cipta Dilindungi.</p>
    </footer>
  </body>
</html>
```

---

## 📊 Hasil Akhir Pengujian

- **W3C Validator**: 🟢 0 Error, 0 Warning.
- **Linter (HTMLHint)**: 🟢 Pass tanpa peringatan.
- **Aksesibilitas Keyboard**: 🟢 Bekerja 100% dengan tombol Tab & Skip Link.
- **Maintainability**: Kode ter-indentasi 2 spasi secara presisi, mudah dibaca dan dimodifikasi oleh siapapun.

---

**[Lanjut: Mini Project →](/bab11/mini-project/)**
