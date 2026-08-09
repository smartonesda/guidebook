---
title: "Studi Kasus"
description: Menghubungkan halaman-halaman portfolio dan tautan eksternal menggunakan relative path dan absolute path.
---

> *"Navigasi yang terencana dengan baik adalah kunci agar pengunjung betah menjelajahi setiap sudut dari websitemu."*

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Membagi website satu halaman menjadi website multi-halaman (*multi-page*).
- Merancang struktur menu navigasi menggunakan relative path.
- Membuat tautan aktif untuk surat elektronik, repositori eksternal, dan pengunduhan berkas.
- Menerapkan fragment identifier untuk melompat ke bagian halaman yang sama.

---

## 🧠 Skenario: Mengembangkan Halaman Tunggal Menjadi Multi-Halaman

Di BAB 2 kemarin, kita memiliki satu file portofolio utuh bernama `index.html`. 

Sekarang, kita ingin mengembangkan portfolio tersebut agar memiliki halaman khusus proyek terpisah bernama `projects.html`, ditambah sebuah file resume PDF yang disimpan di dalam sub-folder proyek.

Berikut adalah struktur folder proyek baru kita:

```text
portfolio-proyek/
├── index.html          (Halaman Profil Utama)
├── projects.html       (Halaman Daftar Proyek)
└── dokumen/
    └── resume.pdf      (Berkas PDF untuk diunduh)
```

---

## 🔧 Pengembangan Proyek di BAB 3

Kita akan merombak kode portfolio kita dengan menambahkan lorong-lorong tautan (`<a>`):

1. **Menu Navigasi**: Kita tambahkan menu navigasi di bagian atas `index.html` dan `projects.html` agar pengunjung bisa berpindah di antara kedua halaman tersebut secara timbal-balik.
2. **Pintasan Lompatan**: Menambahkan link *"Lompat ke Kontak"* di bagian atas halaman profil utama untuk melompat ke bagian `#kontak` menggunakan fragment identifier.
3. **Klik Surel & Repositori**: Mengubah teks surel biasa menjadi link aktif `mailto:` dan tautan GitHub eksternal menggunakan `target="_blank"` dan `rel="noopener noreferrer"`.
4. **Unduh Resume**: Menyediakan tautan khusus untuk mengunduh berkas `resume.pdf` menggunakan atribut `download`.

---

## 💻 Langkah 1: Memperbarui Halaman Utama (`index.html`)

Berikut adalah kode terbaru dari `index.html`. Perhatikan bagian navigasi dan kontak yang kini telah aktif menggunakan tautan:

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
    <h1>Rizki Pratama</h1>
    <p>Junior Web Developer | Jakarta, Indonesia</p>
    
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

## 💻 Langkah 2: Membuat Halaman Proyek Baru (`projects.html`)

Mari kita buat file baru bernama `projects.html` di dalam folder proyek yang sama. File ini menampilkan daftar proyek Rizki Pratama dan terhubung kembali secara mulus ke `index.html`:

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
      <a href="index.html#kontak">Hubungi Saya</a>
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
    
    <h2>2. Halaman Menu Kuliner (BAB 2)</h2>
    <p>
      Menerapkan tag pemformatan teks semantik seperti tag penekanan penting, 
      blok kutipan referensi, serta penulisan entitas khusus dan waktu terstruktur.
    </p>

    <hr />

    <!-- ========== FOOTER ========== -->
    <p>
      Kembali ke halaman <a href="index.html">Beranda Utama</a>.
    </p>

  </body>
</html>
```

Perhatikan bagaimana menu navigasi pada file `projects.html` menggunakan `href="index.html"` untuk kembali ke halaman depan, dan `href="index.html#kontak"` untuk melompat langsung ke section kontak di halaman utama. Ini membuktikan kekuatan lorong-lorong tautan relative path yang sangat efisien!

**[Lanjut: Mini Project →](/bab3/mini-project/)**
