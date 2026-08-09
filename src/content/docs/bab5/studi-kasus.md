---
title: "Studi Kasus"
description: Mengintegrasikan list dan tabel untuk menyusun data keahlian dan riwayat proyek secara terstruktur pada portfolio.
---

> *"Data yang terstruktur dengan baik adalah jembatan bagi browser untuk menggambar informasi secara logis bagi pembaca."*

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Melanjutkan pengembangan berkas proyek portfolio dari BAB 4.
- Menerapkan tag daftar tidak terurut (`<ul>`) untuk menyusun data keahlian secara hierarkis.
- Menggunakan tag daftar deskripsi (`<dl>`) untuk pasangan data profil dan istilah.
- Menyusun riwayat perbandingan proyek dalam bentuk tabel data tabular (`<table>`) yang valid secara semantik.

---

## 🧠 Skenario: Menambahkan Informasi Terstruktur pada Portfolio

Di BAB 4 kemarin, kita sudah menambahkan aset media visual (foto profil, video demo, dan peta). 

Sekarang, kita ingin menambahkan informasi rincian teknis pada portfolio kita:
1. **Daftar Keahlian Utama** (pada `index.html`): Membagi keahlian pemrograman kita ke dalam sub-kategori (bahasa pemrograman, perkakas pendukung) menggunakan nested unordered list.
2. **Riwayat Pendidikan** (pada `index.html`): Menyusun rincian data sekolah menggunakan description list.
3. **Tabel Rangkuman Proyek** (pada `projects.html`): Menyusun perbandingan teknologi, durasi pengerjaan, dan status validitas proyek yang pernah dibuat menggunakan tabel data lengkap.

---

## 💻 Langkah 1: Memperbarui Berkas `index.html`

Perhatikan penggunaan tag `<dl>` untuk data diri dan nested `<ul>` untuk keahlian teknis:

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
      <img src="assets/images/foto-rizki.jpg" alt="Foto potret wajah Rizki Pratama tersenyum" width="150" height="150" />
      <figcaption>Rizki Pratama — Junior Web Developer</figcaption>
    </figure>
    
    <!-- Informasi data diri terstruktur menggunakan Description List -->
    <dl>
      <dt>Domisili</dt>
      <dd>Jakarta, Indonesia</dd>
      <dt>Jurusan</dt>
      <dd><abbr title="Rekayasa Perangkat Lunak">RPL</abbr></dd>
    </dl>
    
    <hr />

    <!-- ========== KONTEN UTAMA ========== -->
    
    <!-- Tentang Saya -->
    <h2>Tentang Saya</h2>
    <p>
      Nama saya <strong>Rizki Pratama</strong>. Saya adalah seorang <em>junior 
      web developer</em> yang tertarik dalam merancang struktur halaman web secara rapi.
    </p>
    <p>
      Saat ini, saya sedang mempelajari dasar-dasar HTML melalui guidebook 
      interaktif ini untuk membangun karir magang saya di bidang RPL.
    </p>

    <blockquote>
      <p>Menulis kode HTML yang terstruktur dengan baik adalah langkah pertama untuk menjadi web developer profesional yang andal.</p>
    </blockquote>
    <p>— <cite>Mentor Web Modern</cite></p>

    <hr />

    <!-- Keahlian Utama (Nested Unordered List) -->
    <h2>Keahlian Saya</h2>
    <ul>
      <li>
        Bahasa Pemrograman Web
        <ul>
          <li>HTML5 (Struktur &amp; Semantik)</li>
          <li>CSS3 (Gaya &amp; Tata Letak)</li>
        </ul>
      </li>
      <li>
        Peralatan Pendukung (Tools)
        <ul>
          <li>Visual Studio Code</li>
          <li>Google Chrome DevTools</li>
          <li>W3C HTML Validator</li>
        </ul>
      </li>
    </ul>

    <p>
      Untuk mengunduh curriculum vitae resmi saya, silakan klik 
      <a href="dokumen/resume.pdf" download>Unduh Resume (PDF)</a>.
    </p>

    <hr />

    <!-- Lokasi Sekolah -->
    <h2>Lokasi Sekolah Saya</h2>
    <iframe 
      src="https://www.google.com/maps/embed?..." 
      width="100%" 
      height="300" 
      style="border:0;" 
      allowfullscreen="" 
      loading="lazy" 
      title="Peta petunjuk lokasi sekolah"
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

Perhatikan penyusunan tabel di bagian bawah halaman proyek yang merangkum data durasi dan validasi proyek:

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
      <img src="assets/images/proyek-1.png" alt="Tangkapan layar halaman depan profil" width="400" height="250" />
      <figcaption>Tampilan Proyek Portfolio Versi 0.1</figcaption>
    </figure>
    
    <h2>2. Halaman Tipografi Menarik (BAB 2)</h2>
    <p>
      Menerapkan tag pemformatan teks semantik seperti tag penekanan penting, 
      blok kutipan referensi, serta penulisan entitas khusus dan waktu terstruktur.
    </p>
    <figure>
      <img src="assets/images/proyek-2.png" alt="Tangkapan layar halaman profil dengan sekat" width="400" height="250" />
      <figcaption>Tampilan Proyek Portfolio Versi 0.2</figcaption>
    </figure>

    <hr />

    <!-- ========== VIDEO DEMO KODING ========== -->
    <h2>Video Demonstrasi Koding</h2>
    <video width="640" height="360" controls poster="assets/images/proyek-2.png">
      <source src="assets/videos/demo-code.mp4" type="video/mp4" />
      <p>Browsermu tidak mendukung pemutar video bawaan HTML5.</p>
    </video>

    <hr />

    <!-- ========== TABEL RANGKUMAN PROYEK (Tabular Data) ========== -->
    <h2>Rangkuman Pengembangan Proyek</h2>
    <p>Berikut adalah tabel ringkasan evaluasi pengerjaan proyek koding saya:</p>
    
    <table>
      <caption>Data Teknis Proyek HTML Guidebook</caption>
      <thead>
        <tr>
          <th>Versi</th>
          <th>Topik Utama</th>
          <th>Waktu Pengerjaan</th>
          <th>Uji Validasi W3C</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>v0.1</td>
          <td>HTML Fundamentals (BAB 1)</td>
          <td>3 Jam</td>
          <td>0 Error (Valid)</td>
        </tr>
        <tr>
          <td>v0.2</td>
          <td>Text &amp; Typography (BAB 2)</td>
          <td>2 Jam</td>
          <td>0 Error (Valid)</td>
        </tr>
        <tr>
          <td>v0.3</td>
          <td>Hyperlinks &amp; Navigation (BAB 3)</td>
          <td>4 Jam</td>
          <td>0 Error (Valid)</td>
        </tr>
        <tr>
          <td>v0.4</td>
          <td>Images &amp; Multimedia (BAB 4)</td>
          <td>5 Jam</td>
          <td>0 Error (Valid)</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <!-- Menggabungkan 2 kolom untuk baris total -->
          <td colspan="2"><strong>Total Akumulasi</strong></td>
          <td>14 Jam</td>
          <td>Semua Valid</td>
        </tr>
      </tfoot>
    </table>

    <hr />

    <!-- ========== FOOTER ========== -->
    <p>
      Kembali ke halaman <a href="index.html">Beranda Utama</a>.
    </p>

  </body>
</html>
```

Melalui tabel di atas, pembaca bisa membandingkan parameter-parameter teknis proyekmu secara lebih cepat daripada membaca paragraf panjang yang berulang!

**[Lanjut: Mini Project →](/bab5/mini-project/)**
