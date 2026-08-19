---
title: "Studi Kasus"
description: Menghias website portfolio multi-halaman dengan gambar profil, tangkapan layar proyek, pemutar video, dan bingkai peta interaktif secara valid.
---

> *"Sebuah website yang kaya media membantu pengunjung menangkap informasi secara visual dengan cepat, tanpa harus lelah membaca seluruh tulisan."*

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Melanjutkan pengembangan berkas proyek portfolio dari BAB 3.
- Mengatur susunan aset gambar dan video di dalam folder `assets/`.
- Memasang foto profil berdimensi stabil dan berdeskripsi alternatif ramah aksesibilitas.
- Menyisipkan pemutar video demonstrasi program secara lokal bawaan HTML5.
- Menyematkan peta lokasi sekolah menggunakan elemen `<iframe>` yang aman.

---

## 🧠 Skenario: Proyek Portfolio Menjadi Kaya Media

Pada BAB 3 kemarin, kita telah berhasil membagi website portfolio kita menjadi struktur multi-halaman yang saling terhubung.

Berikut adalah struktur folder terbaru proyek kita setelah ditambahkan folder penyimpanan aset media:

```text
portfolio-proyek/
├── index.html            (Halaman Profil Utama)
├── projects.html         (Halaman Daftar Proyek)
├── dokumen/
│   └── resume.pdf        (Berkas PDF Unduhan)
└── assets/
    ├── images/
    │   ├── foto-rizki.jpg  (Foto profil Rizki, rasio 1:1)
    │   ├── proyek-1.png    (Screenshot proyek portfolio v0.1)
    │   └── proyek-2.png    (Screenshot proyek portfolio v0.2)
    └── videos/
        └── demo-code.mp4   (Video singkat demonstrasi koding)
```

---

## 🔧 Pengembangan Proyek di BAB 4

Kita akan mempercantik tampilan portofolio kita dengan menyematkan beberapa elemen media baru:

1. **Foto Profil Utama (`index.html`)**: Menambahkan foto diri di bagian header, dibungkus menggunakan tag `<figure>` dan diberi teks keterangan `<figcaption>`.
2. **Peta Lokasi (`index.html`)**: Menyisipkan peta Google Maps interaktif lokasi sekolahmu di bagian bawah menggunakan `<iframe>` lengkap dengan atribut `title`.
3. **Tangkapan Layar Proyek (`projects.html`)**: Menampilkan gambar visual hasil tangkapan layar dari masing-masing proyek yang pernah dibuat.
4. **Video Demo Koding (`projects.html`)**: Menyediakan demo visual berupa rekaman video pemutaran kode program yang bisa langsung ditonton oleh calon guru penguji atau industri magang.

---

## 💻 Langkah 1: Memperbarui Berkas `index.html`

Perhatikan penempatan tag gambar `<figure>` di bagian atas dan tag peta `<iframe>` di bagian bawah:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
  </head>
  <body>

    <!-- ========== MENU NAVIGASI ========== -->
    <p>
      <strong>Beranda</strong> | 
      <a href="projects.html">Proyek Saya</a> | 
      <a href="#kontak">Hubungi Saya</a>
    </p>

    <hr />

    <!-- ========== HEADER PROFIL ========== -->
    <figure>
      <!-- Foto profil dengan dimensi asli 150px x 150px agar stabil -->
      <img src="assets/images/foto-rizki.jpg" alt="Foto potret wajah Rizki Pratama tersenyum ramah" width="150" height="150" />
      <figcaption>Rizki Pratama — Junior Web Developer</figcaption>
    </figure>
    
    <p>Domisili: Jakarta, Indonesia</p>
    
    <hr />

    <!-- ========== KONTEN UTAMA ========== -->
    
    <!-- Tentang Saya -->
    <h2>Tentang Saya</h2>
    <p>
      Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang <em>junior 
      web developer</em> yang tertarik dalam merancang struktur halaman web secara rapi.
    </p>
    <p>
      Saat ini, saya sedang mempelajari dasar-dasar <abbr title="HyperText Markup Language">HTML</abbr> 
      melalui guidebook interaktif ini untuk membangun karir magang saya di bidang 
      <abbr title="Rekayasa Perangkat Lunak">RPL</abbr>.
    </p>

    <blockquote>
      <p>Menulis kode HTML yang terstruktur dengan baik adalah langkah pertama untuk menjadi web developer profesional yang andal.</p>
    </blockquote>
    <p>— <cite>Mentor Web Modern</cite></p>

    <hr />

    <!-- Keahlian -->
    <h2>Keahlian Saya</h2>
    <p>
      Saya memahami cara menguji keabsahan kode menggunakan halaman web 
      <cite>W3C HTML Validator</cite>. Perintah dasar yang saya pelajari meliputi 
      cara membuat judul, memformat paragraf, dan menyusun tag secara teratur.
    </p>
    <pre><code>&lt;p&gt;Saya sedang belajar &lt;strong&gt;HTML&lt;/strong&gt;.&lt;/p&gt;</code></pre>
    
    <p>
      Untuk mengunduh curriculum vitae resmi saya, silakan klik 
      <a href="dokumen/resume.pdf" download>Unduh Resume (PDF)</a>.
    </p>

    <hr />

    <!-- Lokasi Sekolah -->
    <h2>Lokasi Sekolah Saya</h2>
    <!-- Menyematkan Google Maps secara aman dengan title dan lazy loading -->
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521262277685!2d106.8195613!3d-6.1947234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f421a11f2a37%3A0x6b44a2c9c7bf5948!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
      width="100%" 
      height="300" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      title="Peta lokasi Monumen Nasional Jakarta sebagai perwakilan lokasi dekat sekolah"
    ></iframe>

    <hr />

    <!-- Kontak -->
    <h2 id="kontak">Kontak Saya</h2>
    <p>
      Jangan ragu untuk menghubungi saya melalui surat elektronik di 
      <a href="mailto:rizki@example.com">rizki@example.com</a> atau mengintip 
      profil repositori kode saya di 
      <a href="https://github.com/rizkipratama" target="_blank" rel="noopener noreferrer">github.com/rizkipratama</a>.
    </p>

    <hr />

    <!-- ========== FOOTER ========== -->
    <p>
      Dibuat oleh Rizki Pratama. Hak Cipta 
      &copy; <time datetime="2026">2026</time>. 
      Pembaruan terakhir dilakukan pada <time datetime="2026-08-10">10 Agustus 2026</time>.
    </p>

  </body>
</html>
```

---

## 💻 Langkah 2: Memperbarui Berkas `projects.html`

Perhatikan pemanggilan tangkapan layar gambar proyek di bawah judul dan penyisipan pemutar video demo koding di bagian bawah:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Proyek Rizki Pratama — Junior Web Developer</title>
  </head>
  <body>

    <!-- ========== MENU NAVIGASI ========== -->
    <p>
      <a href="index.html">Beranda</a> | 
      <strong>Proyek Saya</strong> | 
      <a href="index.html#kontak">Kontak</a>
    </p>

    <hr />

    <!-- ========== HEADER HALAMAN ========== -->
    <h1>Daftar Proyek Saya</h1>
    <p>Kompilasi hasil karya pembuatan halaman web sejak pertama belajar HTML.</p>

    <hr />

    <!-- ========== DAFTAR PROYEK ========== -->
    
    <h2>1. Halaman Profil Sederhana (BAB 1)</h2>
    <p>
      Ini adalah kerangka dasar pertama portofolio saya. Dibuat dengan 
      mematuhi standar dokumen dasar HTML5 yang valid.
    </p>
    <figure>
      <!-- Screenshot berdimensi proporsional -->
      <img src="assets/images/proyek-1.png" alt="Tangkapan layar halaman depan profil hitam putih berstruktur dasar" width="400" height="250" />
      <figcaption>Tampilan Proyek Portfolio Versi 0.1</figcaption>
    </figure>
    
    <h2>2. Halaman Tipografi Menarik (BAB 2)</h2>
    <p>
      Menerapkan tag pemformatan teks semantik seperti tag penekanan penting, 
      blok kutipan referensi, serta penulisan entitas khusus dan waktu terstruktur.
    </p>
    <figure>
      <img src="assets/images/proyek-2.png" alt="Tangkapan layar halaman profil yang sudah dilengkapi sekat horizontal dan kutipan blockquote menjorok" width="400" height="250" />
      <figcaption>Tampilan Proyek Portfolio Versi 0.2</figcaption>
    </figure>

    <hr />

    <!-- ========== VIDEO DEMO KODING ========== -->
    <h2>Video Demonstrasi Koding</h2>
    <p>Tonton cuplikan cara saya menulis kode HTML dan menjalankannya langsung di VS Code:</p>
    
    <video width="640" height="360" controls poster="assets/images/proyek-2.png">
      <source src="assets/videos/demo-code.mp4" type="video/mp4" />
      <p>Browsermu tidak mendukung pemutar video bawaan HTML5. Silakan unduh langsung file video di sini.</p>
    </video>

    <hr />

    <!-- ========== FOOTER ========== -->
    <p>
      Kembali ke halaman <a href="index.html">Beranda Utama</a>.
    </p>

  </body>
</html>
```

*Catatan realitas: Karena file gambar dan video di atas merupakan visual pembelajaran, browser akan menampilkan ikonBroken Image saat dijalankan luring jika kamu belum menaruh file gambar nyata di dalam folder proyekmu. Pada Mini Project nanti, kamu akan meletakkan gambar nyatamu sendiri secara lengkap!*

**[Lanjut: Mini Project →](/bab4/mini-project/)**
