---
title: "The Ultimate Boss Challenge"
description: Ujian puncak debugging HTML — melakukan audit menyeluruh dan perbaikan penuh pada berkas proyek web yang mengalami 12 kerusakan gabungan.
---

Selamat! Kamu telah berhasil menaklukkan Lab 1 hingga Lab 6.

Sekarang kamu dihadapkan pada **The Ultimate Boss Challenge**: sebuah berkas HTML utuh proyek *Company Profile & Event* yang mengalami **12 kesalahan gabungan** (Semantik, Aksesibilitas, SEO, Atribut, dan Sintaks).

---

## 🎯 Misimu

1. **Temukan 12 Kesalahan** pada kode di bawah ini.
2. **Jelaskan Mengapa** setiap kesalahan memicu masalah.
3. **Tuliskan Kode Perbaikannya** hingga lolos **0 Error W3C Validator**.

---

## 💣 Broken Code — "The Disaster Project"

```html
<!DOCTYPE HTML>
<html>
<head>
  <title>Website</title>
  <meta name="viewport" content="width=320, user-scalable=no">
  <style>*:focus{outline:none;}</style>
</head>
<body>

  <div id="header">
    <div class="logo">SMK Nusantara</div>
    <div id="menu">
      <a href="#">Beranda</a>
      <a href="#event">Event</a>
      <a href="#daftar">Pendaftaran</a>
    </div>
  </div>

  <div id="main">
    <h1>Event Workshop Web 2026</h1>
    <img src="banner.jpg">
    <p>Workshop pengembangan web modern untuk siswa SMK RPL.</p>

    <div id="header">
      <h2>Jadwal Pembicara</h2>
    </div>

    <table>
      <tr><td>Jam</td><td>Materi</td></tr>
      <tr><td>08.00</td><td>HTML5 Semantik</td></tr>
    </table>

    <div id="daftar">
      <h2>Formulir Pendaftaran</h2>
      <form action="/proses.php">
        <p>Nama Lengkap:</p>
        <input type="text" id="nama" placeholder="Ketik nama..." required="false">

        <p>Email:</p>
        <input type="email" id="email" placeholder="nama@domain.com">

        <p>Pilih Sesi:</p>
        <input type="radio" name="sesi1" value="pagi"> Sesi Pagi
        <input type="radio" name="sesi2" value="siang"> Sesi Siang

        <button onclick="kirimForm()">Daftar Sekarang</button>
      </form>
    </div>
  </div>

  <div id="footer">
    <p>Hubungi Kami: email@smknusantara.sch.id</p>
    <a href="https://facebook.com/smk" target="_blank">Facebook</a>
  </div>

</body>
</html>
```

---

## 🕵️ 12 Temuan Masalah & Diagnosis

```
1. [Sintaks/Doctype]  : Tidak ada deklarasi lang="id" dan <meta charset="UTF-8">.
2. [SEO/Title]        : <title>Website</title> terlalu generik (tidak spesifik).
3. [Aksesibilitas]    : user-scalable=no memblokir zoom di mobile.
4. [Aksesibilitas]    : *:focus { outline: none; } merusak navigasi keyboard.
5. [Semantik]         : Menggunakan <div id="header"> dan <div id="menu"> alih-alih <header> dan <nav>.
6. [Sintaks/ID]       : Duplicate ID id="header" dipakai dua kali di dalam halaman.
7. [Aksesibilitas]    : Gambar <img> banner.jpg tidak memiliki atribut alt dan width/height.
8. [Semantik Tabel]   : Tabel jadwal tidak menggunakan <thead>, <tbody>, dan <th> scope="col".
9. [Form Bug]         : required="false" tetap mengaktifkan atribut wajib diisi.
10. [Form Bug]        : Radio button memiliki name yang berbeda (sesi1 vs sesi2).
11. [Form A11y]       : Input tidak punya tag <label for="..."> (hanya teks paragraf biasa).
12. [Keamanan Link]   : Link target="_blank" tidak punya rel="noopener noreferrer".
```

---

## ✨ Kode Solusi Lengkap (100% Valid & Accessible)

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Workshop Web Development 2026 — SMK Nusantara</title>
  <meta name="description" content="Pendaftaran resmi Workshop Web Development 2026 SMK Nusantara Jakarta untuk siswa RPL." />
  <meta name="author" content="SMK Nusantara" />
  <link rel="canonical" href="https://smknusantara.sch.id/workshop" />

  <style>
    .skip-link {
      position: absolute;
      top: -100px;
      left: 10px;
      background: #0ea5e9;
      color: #fff;
      padding: 10px 15px;
      z-index: 9999;
      text-decoration: none;
    }
    .skip-link:focus { top: 10px; }
    :focus-visible { outline: 3px solid #0ea5e9; outline-offset: 2px; }
  </style>
</head>
<body class="page">

  <!-- Skip Navigation -->
  <a href="#konten-utama" class="skip-link">Lompati ke konten utama</a>

  <!-- Header Situs -->
  <header id="site-header" class="site-header">
    <div class="site-brand">SMK Nusantara</div>
    
    <nav aria-label="Navigasi utama">
      <a href="/" aria-current="page">Beranda</a>
      <a href="#event">Event</a>
      <a href="#daftar">Pendaftaran</a>
    </nav>
  </header>

  <!-- Konten Utama -->
  <main id="konten-utama" tabindex="-1">
    
    <section id="event" aria-labelledby="judul-event">
      <h1 id="judul-event">Event Workshop Web 2026</h1>
      <figure>
        <img 
          src="banner.jpg" 
          alt="Banner promosi Event Workshop Web Development 2026" 
          width="1200" 
          height="630"
          loading="eager"
        />
      </figure>
      <p>Workshop pengembangan web modern untuk siswa SMK RPL.</p>
    </section>

    <section id="jadwal" aria-labelledby="judul-jadwal">
      <h2 id="judul-jadwal">Jadwal Pembicara</h2>
      <table>
        <caption>Rundown Acara Workshop Web 2026</caption>
        <thead>
          <tr>
            <th scope="col">Jam</th>
            <th scope="col">Materi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">08.00</th>
            <td>HTML5 Semantik</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section id="daftar" aria-labelledby="judul-daftar">
      <h2 id="judul-daftar">Formulir Pendaftaran</h2>
      
      <form action="/proses.php" method="POST">
        
        <div class="form-group">
          <label for="nama">Nama Lengkap <abbr title="Wajib diisi">*</abbr></label>
          <input type="text" id="nama" name="nama_lengkap" placeholder="Ketik nama..." required />
        </div>

        <div class="form-group">
          <label for="email">Email <abbr title="Wajib diisi">*</abbr></label>
          <input type="email" id="email" name="email_peserta" placeholder="nama@domain.com" required />
        </div>

        <fieldset>
          <legend>Pilih Sesi Workshop:</legend>
          <input type="radio" id="sesi-pagi" name="sesi_workshop" value="pagi" checked />
          <label for="sesi-pagi">Sesi Pagi</label>

          <input type="radio" id="sesi-siang" name="sesi_workshop" value="siang" />
          <label for="sesi-siang">Sesi Siang</label>
        </fieldset>

        <button type="submit">Daftar Sekarang</button>
      </form>
    </section>

  </main>

  <!-- Footer Situs -->
  <footer id="site-footer">
    <address>
      Hubungi Kami: <a href="mailto:email@smknusantara.sch.id">email@smknusantara.sch.id</a>
    </address>
    <p>
      Ikuti kami di 
      <a 
        href="https://facebook.com/smk" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Facebook SMK Nusantara (terbuka di tab baru)"
      >
        Facebook
      </a>
    </p>
  </footer>

</body>
</html>
```

---

**[Lanjut: Everything Can Break →](/bab14/everything-you-learned-can-break/)**
