---
title: "Challenge"
description: Tantangan berjenjang untuk menguji pemahaman Semantic HTML — dari identifikasi element hingga refactor penuh dan analisis mendalam.
---

Challenge BAB 8 dirancang untuk menguji apakah kamu sudah bisa **berpikir berdasarkan makna** sebelum memilih element — bukan sekadar menghafal daftar tag semantic.

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan semua tantangan, kamu akan mampu:
- Membaca HTML dan langsung mengidentifikasi element mana yang salah pilih.
- Memilih antara `<section>` dan `<article>` berdasarkan makna konten.
- Membangun struktur semantic untuk berbagai jenis halaman.
- Menjelaskan mengapa dua kode yang terlihat sama di browser tidak selalu setara.

---

## 🔴 Challenge 1: Identifikasi Element (20 poin)

Untuk setiap blok HTML di bawah, tentukan: **apakah pilihan element sudah tepat atau tidak?** Jika tidak tepat, tuliskan element yang lebih tepat dan alasannya.

```html
<!-- Blok A -->
<div class="navigasi-utama">
  <a href="/">Beranda</a>
  <a href="/proyek">Proyek</a>
  <a href="#kontak">Kontak</a>
</div>

<!-- Blok B -->
<article class="skills-section">
  <h2>Keahlian Teknis</h2>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
  </ul>
</article>

<!-- Blok C -->
<section class="blog-post">
  <h2>Cara Membuat Form HTML yang Aksesibel</h2>
  <p>Ditulis oleh Rizki · <time datetime="2025-10-01">1 Oktober 2025</time></p>
  <p>Form HTML yang baik bukan hanya soal fungsi...</p>
</section>

<!-- Blok D -->
<section class="copyright-info">
  <p>&copy; 2026 Rizki Pratama</p>
</section>

<!-- Blok E -->
<div>
  <img src="foto-proyek.jpg" alt="Screenshot proyek" />
  <p>Tampilan halaman utama Website SMK Nusantara</p>
</div>
```

---

## 🟡 Challenge 2: Refactor Halaman Blog (20 poin)

Di bawah ini adalah HTML halaman blog yang masih menggunakan div-first. Tulis ulang seluruhnya menggunakan semantic element yang tepat:

```html
<div class="header">
  <div class="logo">Dev Blog</div>
  <div class="menu">
    <div class="menu-item"><a href="/">Beranda</a></div>
    <div class="menu-item"><a href="/artikel">Artikel</a></div>
    <div class="menu-item"><a href="/tentang">Tentang</a></div>
  </div>
</div>

<div class="main-area">
  <div class="content">
    <div class="post">
      <div class="post-title">Belajar HTML dari Nol</div>
      <div class="post-date">15 November 2025</div>
      <div class="post-content">
        <p>HTML adalah pondasi dari semua website...</p>
        <div class="code-example">
          <img src="kode.png" alt="Contoh kode HTML" />
          <div class="caption">Struktur dasar dokumen HTML</div>
        </div>
      </div>
      <div class="post-author">
        <div class="author-name">Rizki Pratama</div>
        <div class="author-email">rizki@example.com</div>
      </div>
    </div>

    <div class="post">
      <div class="post-title">CSS untuk Pemula</div>
      <div class="post-date">20 November 2025</div>
      <div class="post-content">
        <p>CSS mengubah HTML yang polos menjadi halaman yang indah...</p>
      </div>
    </div>
  </div>

  <div class="sidebar">
    <div class="widget">
      <div class="widget-title">Artikel Terkait</div>
      <div class="widget-item"><a href="#">JavaScript Dasar</a></div>
      <div class="widget-item"><a href="#">CSS Flexbox</a></div>
    </div>
  </div>
</div>

<div class="footer">
  <div class="footer-copy">&copy; 2026 Dev Blog</div>
  <div class="footer-nav">
    <a href="/privasi">Privasi</a>
    <a href="/kontak">Kontak</a>
  </div>
</div>
```

**Syarat:**
- Gunakan minimal: `header`, `nav`, `main`, `article` (×2), `aside`, `figure`, `figcaption`, `time`, `address`, `footer`.
- Semua `<section>` harus punya heading.
- Semua `<article>` harus punya `<header>`.

---

## 🟠 Challenge 3: section vs article — Pilih yang Tepat (20 poin)

Untuk setiap situasi di bawah, tentukan: `<section>` atau `<article>`? Jelaskan alasanmu.

1. Halaman "Tentang Saya" yang berisi paragraf perkenalan diri.
2. Sebuah posting berita di halaman beranda media online.
3. Bagian "Pendidikan" dalam halaman CV/portfolio.
4. Setiap ulasan produk di halaman e-commerce.
5. Bagian "Layanan Kami" di website perusahaan dengan daftar layanan.
6. Setiap komentar di kolom komentar artikel blog.
7. Bagian "Keahlian" dalam portfolio dengan daftar skill.
8. Setiap kartu proyek di galeri portfolio.

---

## 🔵 Challenge 4: Bangun Halaman Profil Siswa (20 poin)

Buat halaman profil siswa baru yang semantic dari nol dengan spesifikasi:

**Konten yang harus ada:**
- Site header dengan nama sekolah dan navigasi
- Bagian hero dengan foto profil (dalam `<figure>`) dan perkenalan singkat
- Bagian "Data Diri" (nama, kelas, jurusan, NIS — gunakan `<dl>`)
- Bagian "Prestasi" berisi minimal 3 artikel prestasi mandiri masing-masing dengan tanggal (`<time>`)
- Bagian "Ekstrakulikuler" berisi daftar kegiatan
- Sidebar berisi "Informasi Sekolah"
- Site footer dengan info hak cipta

**Syarat:**
- Semua section harus memiliki heading dan `aria-labelledby`.
- Prestasi menggunakan `<article>` karena bisa berdiri sendiri.
- Ekstrakulikuler menggunakan `<section>` karena bagian dari profil, bukan mandiri.
- Foto profil dalam `<figure>` + `<figcaption>`.

---

## ⚫ Challenge 5: Analisis Mendalam (20 poin)

Jawab pertanyaan berikut dalam bentuk tulisan analitis:

**Pertanyaan 1:**
Dua developer mendebat apakah galeri foto harus menggunakan `<section>` atau kumpulan `<figure>`. Developer A berkata: "Gunakan `<section>` karena itu sekelompok konten." Developer B berkata: "Gunakan sekumpulan `<figure>` langsung karena setiap foto sudah punya semantiknya sendiri."

Menurut kamu, siapa yang benar? Atau ada pendekatan ketiga? Jelaskan.

**Pertanyaan 2:**
Seorang developer membuat kartu produk di e-commerce menggunakan `<article>`. Developer lain mengomentari: "Itu bukan artikel! Gunakan `<div>`." Siapa yang lebih tepat? Apa parameter yang seharusnya digunakan untuk memutuskan?

**Pertanyaan 3:**
Jelaskan mengapa "Semantic HTML yang baik" dan "Aksesibilitas yang baik" sangat berkaitan tapi bukan hal yang sama. Berikan contoh situasi di mana HTML yang semantic tapi masih perlu tambahan ARIA untuk benar-benar aksesibel.

---

## 📊 Rubrik Penilaian

| Challenge | Poin | Kriteria |
|---|---|---|
| 1: Identifikasi Element | 20 | Tepat mengidentifikasi + alasan yang benar |
| 2: Refactor Blog | 20 | Semua syarat dipenuhi, struktur valid |
| 3: section vs article | 20 | Jawaban tepat + penjelasan berdasarkan makna |
| 4: Halaman Profil | 20 | Semua elemen hadir, valid, accessible |
| 5: Analisis | 20 | Jawaban mendalam, bukan sekadar definisi |
| **Total** | **100** | |

---

**[Lanjut: Error Corner →](/bab8/error-corner/)**
