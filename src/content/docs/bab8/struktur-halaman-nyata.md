---
title: "Struktur Halaman Nyata"
description: Melihat bagaimana semantic HTML diterapkan pada berbagai jenis halaman nyata — halaman utama, halaman artikel, dan halaman daftar — beserta pola yang bisa dipelajari.
---

Setelah memahami masing-masing elemen semantic, sekarang saatnya melihat bagaimana semuanya **bekerja bersama dalam konteks halaman nyata**.

Di halaman ini, kita akan membedah tiga pola halaman yang paling umum — dan masing-masing akan memperlihatkan bagaimana memilih elemen yang tepat berdasarkan makna kontennya.

---

## 🏠 Pola 1: Halaman Utama (Homepage / Beranda)

Halaman utama portfolio adalah halaman yang paling sering dikunjungi. Strukturnya biasanya:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rizki Pratama — Junior Web Developer</title>
</head>
<body>

  <!-- ===== SITE HEADER ===== -->
  <header id="site-header" class="site-header">
    <a href="/" class="site-brand">
      <span class="brand-name">Rizki Pratama</span>
      <span class="brand-role">Junior Web Developer</span>
    </a>
    <nav aria-label="Navigasi utama">
      <a href="/" aria-current="page">Beranda</a>
      <a href="/proyek">Proyek</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>

  <!-- ===== KONTEN UTAMA ===== -->
  <main id="konten-utama">

    <!-- Bagian Hero / Perkenalan -->
    <section id="hero" aria-labelledby="hero-heading">
      <h1 id="hero-heading">Halo, saya Rizki 👋</h1>
      <p class="hero-tagline">
        Siswa SMK RPL yang sedang membangun portfolio web pertamanya.
      </p>
      <a href="#proyek" class="btn-cta">Lihat Proyek Saya</a>
    </section>

    <!-- Bagian Tentang -->
    <section id="tentang" aria-labelledby="tentang-heading">
      <h2 id="tentang-heading">Tentang Saya</h2>
      <div class="about-content">
        <figure class="profile-figure">
          <img 
            src="foto.jpg" 
            alt="Foto Rizki Pratama tersenyum"
            width="200" height="200"
            loading="eager"
          />
          <figcaption>Rizki Pratama, Jakarta 2026</figcaption>
        </figure>
        <div class="about-text">
          <p>
            Nama saya <strong>Rizki Pratama</strong>, siswa kelas XII 
            jurusan <abbr title="Rekayasa Perangkat Lunak">RPL</abbr> 
            di SMK Nusantara Jakarta.
          </p>
          <p>
            Saya tertarik pada web development dan sedang membangun 
            karier di bidang ini melalui berbagai project nyata.
          </p>
        </div>
      </div>
    </section>

    <!-- Bagian Keahlian -->
    <section id="keahlian" aria-labelledby="keahlian-heading">
      <h2 id="keahlian-heading">Keahlian Teknis</h2>
      <ul class="skills-grid" aria-label="Daftar keahlian">
        <li class="skill-item" data-level="mahir">HTML5</li>
        <li class="skill-item" data-level="menengah">CSS3</li>
        <li class="skill-item" data-level="pemula">JavaScript</li>
        <li class="skill-item" data-level="pemula">Git</li>
      </ul>
    </section>

    <!-- Bagian Proyek (highlight) -->
    <section id="proyek" aria-labelledby="proyek-heading">
      <h2 id="proyek-heading">Proyek Terbaru</h2>
      <div class="project-grid">

        <article class="project-card" id="proyek-1">
          <header class="project-header">
            <h3>Website SMK Nusantara</h3>
            <p class="project-meta">
              <time datetime="2025-06">Juni 2025</time> · 
              <span class="badge badge--selesai">Selesai</span>
            </p>
          </header>
          <figure>
            <img 
              src="proyek-sekolah.png"
              alt="Screenshot halaman utama website SMK Nusantara"
              loading="lazy"
              width="400" height="225"
            />
          </figure>
          <p>Website profil sekolah responsif dengan HTML dan CSS.</p>
          <footer class="project-footer">
            <a href="https://demo.example.com" 
               target="_blank" rel="noopener noreferrer"
               aria-label="Demo Website SMK (tab baru)">Demo</a>
            <a href="https://github.com/rizki/smk"
               target="_blank" rel="noopener noreferrer"
               aria-label="Kode sumber di GitHub (tab baru)">GitHub</a>
          </footer>
        </article>

      </div>
      <p><a href="/proyek">Lihat semua proyek →</a></p>
    </section>

    <!-- Bagian Kontak -->
    <section id="kontak" aria-labelledby="kontak-heading">
      <h2 id="kontak-heading">Hubungi Saya</h2>
      <p>Punya ide atau mau berkolaborasi? Kirim pesan!</p>
      <form action="/proses" method="POST" aria-labelledby="form-title">
        <h3 id="form-title">Kirim Pesan</h3>
        <fieldset>
          <legend>Informasi Pengirim</legend>
          <div class="form-group">
            <label for="nama">Nama:</label>
            <input type="text" id="nama" name="nama" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
        </fieldset>
        <div class="form-group">
          <label for="pesan">Pesan:</label>
          <textarea id="pesan" name="pesan" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Kirim</button>
      </form>
    </section>

  </main>

  <!-- ===== SITE FOOTER ===== -->
  <footer id="site-footer" class="site-footer">
    <address>
      <p>
        <a href="mailto:rizki@example.com">rizki@example.com</a>
      </p>
    </address>
    <nav aria-label="Navigasi footer">
      <a href="/">Beranda</a>
      <a href="/proyek">Proyek</a>
    </nav>
    <p>&copy; <time datetime="2026">2026</time> Rizki Pratama</p>
  </footer>

</body>
</html>
```

---

## 📄 Pola 2: Halaman Daftar Proyek

```html
<main>
  <header class="page-header">
    <h1>Semua Proyek</h1>
    <p class="page-description">
      Kumpulan proyek yang telah saya kerjakan sejak 2024.
    </p>
  </header>

  <section id="daftar-proyek" aria-labelledby="daftar-heading">
    <h2 id="daftar-heading" class="sr-only">Daftar Proyek</h2>

    <article class="project-card" data-status="selesai">
      <header>
        <h2>Website SMK Nusantara</h2>
        <p><time datetime="2025-06">Juni 2025</time></p>
      </header>
      <p>Deskripsi singkat proyek...</p>
      <footer>
        <a href="/proyek/smk-nusantara">Baca Selengkapnya</a>
      </footer>
    </article>

    <article class="project-card" data-status="berjalan">
      <header>
        <h2>Aplikasi Absensi</h2>
        <p><time datetime="2025-09">September 2025</time></p>
      </header>
      <p>Deskripsi singkat proyek...</p>
      <footer>
        <a href="/proyek/absensi">Baca Selengkapnya</a>
      </footer>
    </article>

  </section>
</main>
```

---

## 📰 Pola 3: Halaman Detail Proyek / Artikel

```html
<main>
  <article id="proyek-smk" class="project-detail">
    
    <header class="article-header">
      <h1>Website SMK Nusantara</h1>
      <div class="article-meta">
        <p>Selesai: <time datetime="2025-06">Juni 2025</time></p>
        <p>Teknologi: <span class="tech-badge">HTML</span> <span class="tech-badge">CSS</span></p>
      </div>
    </header>

    <figure class="article-hero">
      <img 
        src="screenshot-utama.png"
        alt="Screenshot halaman beranda Website SMK Nusantara"
        width="1200" height="675"
        loading="eager"
      />
      <figcaption>Tampilan halaman beranda yang responsif di desktop dan mobile.</figcaption>
    </figure>

    <section aria-labelledby="latar-belakang">
      <h2 id="latar-belakang">Latar Belakang</h2>
      <p>Proyek ini dibuat sebagai tugas akhir semester...</p>
    </section>

    <section aria-labelledby="teknologi-digunakan">
      <h2 id="teknologi-digunakan">Teknologi yang Digunakan</h2>
      <ul>
        <li>HTML5 untuk struktur halaman</li>
        <li>CSS3 untuk styling dan layout</li>
      </ul>
    </section>

    <section aria-labelledby="tantangan">
      <h2 id="tantangan">Tantangan & Solusi</h2>
      <p>Tantangan terbesar adalah membuat layout responsif...</p>
    </section>

    <aside aria-label="Proyek terkait">
      <h2>Proyek Serupa</h2>
      <ul>
        <li><a href="/proyek/web-desa">Website Profil Desa</a></li>
        <li><a href="/proyek/web-umkm">Website UMKM Lokal</a></li>
      </ul>
    </aside>

    <footer class="article-footer">
      <p>
        Ditulis oleh 
        <address>
          <a href="mailto:rizki@example.com">Rizki Pratama</a>
        </address>
      </p>
      <nav aria-label="Navigasi artikel">
        <a href="/proyek">← Kembali ke daftar proyek</a>
      </nav>
    </footer>

  </article>
</main>
```

---

## 🔍 Yang Bisa Dipelajari dari Pola di Atas

1. **`<section>` selalu punya heading** — meski heading bisa disembunyikan secara visual dengan `class="sr-only"` (screen-reader only).

2. **`<article>` punya `<header>` dan `<footer>` sendiri** — karena ia adalah unit konten mandiri.

3. **`<aside>` ada di dalam `<article>`** — untuk konten pendukung yang berkaitan dengan artikel tersebut.

4. **`<figure>` untuk gambar utama** — dengan `<figcaption>` yang deskriptif.

5. **`<address>` di dalam `<footer>`** — untuk informasi kontak penulis.

6. **`<time>` untuk semua tanggal** — agar mesin bisa membacanya dengan benar.

---

**[Lanjut: Studi Kasus →](/bab8/studi-kasus/)**
