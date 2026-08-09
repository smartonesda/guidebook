---
title: "Studi Kasus"
description: Refactor portfolio dari div-first menjadi semantic HTML — menganalisis kode lama, mengidentifikasi masalah, dan membangun ulang dengan struktur yang bermakna.
---

> *"Kode yang berfungsi bukanlah tujuan akhir. Kode yang bermakna, mudah dipahami, dan aksesibel — itulah standar yang perlu kita tuju."*

---

## 🎯 Tujuan Studi Kasus

Di studi kasus ini, kita akan melakukan **refactor** — bukan membuat dari nol, tapi memperbaiki kode yang sudah ada.

Kita akan mengambil `index.html` portfolio yang sudah dibangun sejak BAB 1, mengidentifikasi bagian-bagian yang kurang semantic, dan mengubahnya menjadi struktur yang benar.

Ini adalah langkah paling realistis yang akan kamu lakukan di dunia kerja nyata: **memperbaiki kode yang sudah ada**.

---

## 🔍 Kode Lama: Portfolio v0.7 (Sebelum Refactor)

Sebelum bab ini, struktur portfolio kita masih campuran antara semantic dan non-semantic:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rizki Pratama — Junior Web Developer</title>
</head>
<body id="halaman-beranda" class="page page--home">

  <!-- Navigasi — menggunakan <p> bukan <nav> -->
  <p>
    <strong>Beranda</strong> | 
    <a href="projects.html">Proyek Saya</a> | 
    <a href="#kontak">Hubungi Saya</a>
  </p>

  <hr />

  <!-- Header profil — menggunakan <header> tapi tanpa struktur yang tepat -->
  <header id="profil" class="profile-header" role="banner">
    <figure id="profil-foto">
      <img src="foto.jpg" alt="Foto Rizki" width="150" height="150" />
      <figcaption>Rizki Pratama — Junior Web Developer</figcaption>
    </figure>
    <dl id="info-profil">
      <dt>Domisili</dt><dd>Jakarta</dd>
      <dt>Jurusan</dt><dd>RPL</dd>
    </dl>
  </header>

  <hr />

  <!-- Konten utama — menggunakan <main> tapi section-section belum ada -->
  <main id="konten-utama">

    <h2>Tentang Saya</h2>
    <p>Nama saya <strong>Rizki Pratama</strong>...</p>

    <h2>Keahlian Saya</h2>
    <ul id="daftar-keahlian">
      <li data-level="mahir">HTML5</li>
      <li data-level="menengah">CSS3</li>
    </ul>

    <h2 id="kontak">Hubungi Saya</h2>
    <form>...</form>

  </main>

  <hr />

  <footer>
    <p>&copy; 2026 Rizki Pratama</p>
  </footer>

</body>
</html>
```

---

## 🔍 Identifikasi Masalah

Mari kita audit satu per satu:

| Bagian | Masalah | Solusi |
|---|---|---|
| Navigasi `<p>` | Menggunakan `<p>` untuk navigasi | Ganti dengan `<nav>` |
| `<header>` profil | `<header>` dipakai untuk profil, bukan site header | Pisahkan site header dan profil section |
| `<hr>` sebagai separator | `<hr>` digunakan sebagai visual divider, bukan semantic | Hilangkan atau ganti dengan CSS border |
| Konten utama tanpa section | Semua konten bertumpuk di `<main>` tanpa pemisahan tematik | Bungkus dengan `<section>` yang tepat |
| Judul sebagai heading biasa | `<h2>` melayang tanpa section container | Masukkan ke dalam `<section>` |

---

## ✨ Portfolio v0.8 — Hasil Refactor Semantic

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rizki Pratama — Junior Web Developer</title>
  <meta name="description" 
        content="Portfolio Rizki Pratama, siswa SMK RPL yang membangun karir di web development." />
</head>
<body class="page page--home">

  <!-- ===================== SITE HEADER ===================== -->
  <header id="site-header" class="site-header">
    
    <div class="header-brand">
      <p class="brand-name">Rizki Pratama</p>
      <p class="brand-role">Junior Web Developer · SMK RPL Jakarta</p>
    </div>

    <nav id="nav-utama" aria-label="Navigasi utama">
      <a href="/" class="nav-link nav-link--active" aria-current="page">Beranda</a>
      <a href="projects.html" class="nav-link">Proyek Saya</a>
      <a href="#kontak" class="nav-link">Hubungi Saya</a>
    </nav>

  </header>

  <!-- ===================== KONTEN UTAMA ===================== -->
  <main id="konten-utama">

    <!-- Bagian Hero / Profil -->
    <section id="hero" class="section-hero" aria-labelledby="hero-name">

      <figure class="profile-figure">
        <img 
          src="assets/images/foto-rizki.jpg" 
          alt="Foto potret Rizki Pratama tersenyum menghadap kamera"
          width="150" height="150"
          loading="eager"
          class="profile-photo"
        />
        <figcaption class="profile-caption">Rizki Pratama, Jakarta 2026</figcaption>
      </figure>

      <div class="hero-text">
        <h1 id="hero-name" class="hero-title">Halo, saya Rizki 👋</h1>
        <p class="hero-tagline">
          Siswa SMK RPL yang sedang membangun portofolio web pertamanya 
          dan siap berkolaborasi dalam proyek nyata.
        </p>
        <dl class="profile-info">
          <dt>Domisili</dt>
          <dd>Jakarta, Indonesia</dd>
          <dt>Jurusan</dt>
          <dd><abbr title="Rekayasa Perangkat Lunak">RPL</abbr></dd>
        </dl>
      </div>

    </section>

    <!-- Bagian Tentang -->
    <section id="tentang" class="section" aria-labelledby="tentang-heading">
      <h2 id="tentang-heading" class="section-title">Tentang Saya</h2>
      <p>
        Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang 
        <em>junior web developer</em> yang tertarik dalam merancang 
        struktur halaman web secara rapi dan bermakna.
      </p>
      <p>
        Saat ini saya mempelajari HTML, CSS, dan dasar-dasar JavaScript 
        untuk mempersiapkan diri memasuki dunia kerja di bidang 
        <abbr title="Rekayasa Perangkat Lunak">RPL</abbr>.
      </p>
      <blockquote cite="https://www.w3.org/TR/html52/">
        <p>
          Menulis kode HTML yang terstruktur dengan baik adalah 
          langkah pertama menuju web development yang profesional.
        </p>
      </blockquote>
    </section>

    <!-- Bagian Keahlian -->
    <section id="keahlian" class="section" aria-labelledby="keahlian-heading">
      <h2 id="keahlian-heading" class="section-title">Keahlian Teknis</h2>
      <ul id="daftar-keahlian" class="skills-grid" 
          aria-label="Daftar keahlian teknis Rizki">
        <li class="skill-item" data-level="mahir">HTML5</li>
        <li class="skill-item" data-level="menengah">CSS3</li>
        <li class="skill-item" data-level="pemula">JavaScript</li>
        <li class="skill-item" data-level="pemula">Git & GitHub</li>
        <li class="skill-item" data-level="pemula">Figma (Desain)</li>
      </ul>
      <p>
        Unduh 
        <a href="dokumen/resume.pdf" download 
           aria-label="Unduh Resume Rizki dalam format PDF">
          Resume PDF
        </a> 
        untuk informasi lebih lengkap.
      </p>
    </section>

    <!-- Bagian Proyek (preview) -->
    <section id="proyek" class="section" aria-labelledby="proyek-heading">
      <h2 id="proyek-heading" class="section-title">Proyek Terbaru</h2>

      <div class="project-grid">

        <article class="project-card" id="proyek-smk" data-status="selesai">
          <header class="project-header">
            <h3 class="project-title">Website SMK Nusantara</h3>
            <p class="project-meta">
              <time datetime="2025-06">Juni 2025</time> · 
              <span class="badge badge--selesai">Selesai</span>
            </p>
          </header>
          <p class="project-desc">
            Website profil sekolah yang responsif dengan halaman beranda, 
            profil guru, dan formulir kontak.
          </p>
          <ul class="project-tech-list" aria-label="Teknologi yang digunakan">
            <li>HTML5</li><li>CSS3</li>
          </ul>
          <footer class="project-footer">
            <a href="https://demo.example.com"
               target="_blank" rel="noopener noreferrer"
               aria-label="Demo Website SMK (tab baru)" class="btn-link">
              Demo
            </a>
            <a href="https://github.com/rizki/smk"
               target="_blank" rel="noopener noreferrer"
               aria-label="Kode di GitHub (tab baru)" class="btn-link btn-link--ghost">
              GitHub
            </a>
          </footer>
        </article>

      </div>

      <p><a href="projects.html" class="link-all-projects">Lihat semua proyek →</a></p>
    </section>

    <!-- Bagian Kontak -->
    <section id="kontak" class="section" aria-labelledby="kontak-heading">
      <h2 id="kontak-heading" class="section-title">Hubungi Saya</h2>
      <p>
        Ingin berkolaborasi atau mengajukan inquiry proyek? 
        Isi formulir di bawah ini.
      </p>

      <form id="form-kontak" class="contact-form"
            action="/proses-inquiry.php" method="POST"
            aria-labelledby="form-title">
        <h3 id="form-title" class="form-title">Kirim Pesan</h3>

        <fieldset>
          <legend>Informasi Pengirim</legend>
          <div class="form-group">
            <label for="nama-pengirim">
              Nama Lengkap <abbr title="Wajib diisi">*</abbr>
            </label>
            <input type="text" id="nama-pengirim" name="nama_lengkap"
                   placeholder="Contoh: Budi Santoso"
                   minlength="3" autocomplete="name" required />
          </div>
          <div class="form-group">
            <label for="email-pengirim">
              Email <abbr title="Wajib diisi">*</abbr>
            </label>
            <input type="email" id="email-pengirim" name="email_pengirim"
                   placeholder="nama@domain.com" autocomplete="email" required />
          </div>
        </fieldset>

        <fieldset>
          <legend>Detail Pesan</legend>
          <div class="form-group">
            <label for="pesan">
              Pesan <abbr title="Wajib diisi">*</abbr>
            </label>
            <textarea id="pesan" name="pesan_detail" rows="5"
                      placeholder="Ceritakan apa yang ingin kamu diskusikan..."
                      minlength="20" required></textarea>
          </div>
        </fieldset>

        <div class="form-group form-group--checkbox">
          <input type="checkbox" id="setuju" name="persetujuan"
                 value="setuju" required />
          <label for="setuju">
            Saya menyetujui penggunaan data ini untuk keperluan kontak.
          </label>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">Kirim Pesan</button>
          <button type="reset" class="btn btn-secondary">Hapus Isian</button>
        </div>
      </form>

      <p class="contact-alt">
        Atau hubungi langsung: 
        <a href="mailto:rizki@example.com">rizki@example.com</a>
      </p>
    </section>

  </main>

  <!-- ===================== SITE FOOTER ===================== -->
  <footer id="site-footer" class="site-footer">

    <div class="footer-brand">
      <p class="footer-name">Rizki Pratama</p>
      <p class="footer-tagline">Junior Web Developer · Jakarta</p>
    </div>

    <nav aria-label="Navigasi footer">
      <a href="/">Beranda</a>
      <a href="projects.html">Proyek</a>
      <a href="#kontak">Kontak</a>
    </nav>

    <address>
      <a href="mailto:rizki@example.com">rizki@example.com</a>
    </address>

    <p class="footer-copy">
      &copy; <time datetime="2026">2026</time> Rizki Pratama. 
      Dibangun dengan HTML5 yang penuh makna.
    </p>

  </footer>

</body>
</html>
```

---

## 🔍 Apa yang Berubah dari v0.7 ke v0.8?

| Aspek | Sebelum (v0.7) | Sesudah (v0.8) |
|---|---|---|
| Navigasi | `<p>` dengan teks dan pemisah `\|` | `<nav>` dengan `aria-label` |
| Site header | `<header>` langsung berisi profil foto | `<header>` berisi brand + `<nav>` |
| Konten utama | Heading `<h2>` melayang tanpa container | Setiap bagian dalam `<section>` dengan `aria-labelledby` |
| Proyek | Belum ada struktur | `<article>` dengan `<header>` dan `<footer>` sendiri |
| Footer | Satu baris teks | `<nav>`, `<address>`, info copyright terstruktur |
| Separator | `<hr>` sebagai visual divider | Dihilangkan — separator lewat CSS |

---

## ✅ Checklist Verifikasi Semantic

```
☐ Ada tepat satu <main> yang terlihat
☐ <header> site ada di luar <main>
☐ Semua navigasi menggunakan <nav> dengan aria-label
☐ Setiap <section> punya heading dan aria-labelledby
☐ Proyek menggunakan <article> dengan <header> + <footer>
☐ Tanggal menggunakan <time datetime="...">
☐ Gambar profil ada dalam <figure> + <figcaption>
☐ Info kontak dalam <address>
☐ Link eksternal punya target="_blank" + rel="noopener noreferrer"
☐ HTML lolos W3C Validator
```

---

**[Lanjut: Mini Project →](/bab8/mini-project/)**
