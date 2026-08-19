---
title: "main & article"
description: Memahami elemen main sebagai wadah konten utama yang unik per halaman, dan article sebagai konten yang berdiri sendiri — serta cara memilih antara keduanya.
---

## 📦 Elemen `<main>`

### Apa itu `<main>`?

`<main>` mewakili **konten utama dari sebuah dokumen** — konten yang langsung berkaitan dengan tujuan utama halaman, bukan konten yang berulang seperti header, nav, atau footer.

```html
<body>
  <header>...</header>  <!-- berulang di setiap halaman -->
  <nav>...</nav>        <!-- berulang di setiap halaman -->

  <main>
    <!-- ← ini yang unik di setiap halaman -->
    <h1>Tentang Saya</h1>
    <p>Halo, saya Rizki Pratama...</p>
  </main>

  <footer>...</footer>  <!-- berulang di setiap halaman -->
</body>
```

### Aturan Penting `<main>`

**Hanya boleh satu `<main>` per halaman yang terlihat.**

`<main>` mendefinisikan konten yang menjadi "inti" dokumen. Mempunyai dua `<main>` yang sama-sama terlihat tidak masuk akal — seperti punya dua "isi utama" dalam satu artikel.

```html
<!-- ❌ SALAH: dua main sekaligus terlihat -->
<main>Konten halaman A</main>
<main>Konten halaman B</main>

<!-- ✅ BENAR: satu main -->
<main>
  <h1>Halaman Utama</h1>
  ...
</main>
```

**Pengecualian:** Boleh ada lebih dari satu `<main>` jika yang lain disembunyikan dengan attribute `hidden` (berguna untuk aplikasi single-page yang mengelola tampilan via JavaScript).

### Apa yang seharusnya ADA di dalam `<main>`?

- Heading utama halaman (`<h1>` atau `<h2>`)
- Konten yang menjadi alasan pengguna mengunjungi halaman ini
- Section-section konten utama
- Form utama (seperti form kontak atau form daftar)
- Galeri proyek

### Apa yang seharusnya TIDAK ada di dalam `<main>`?

- Navigasi yang berulang di setiap halaman (itu di `<header>`)
- Sidebar dengan iklan atau widget (itu di `<aside>`)
- Footer informasi copyright (itu di `<footer>`)

### `<main>` dan Screen Reader

Screen reader memberikan pintasan keyboard untuk langsung loncat ke `<main>`. Ini adalah fitur **"skip to main content"** yang sangat membantu pengguna keyboard — mereka tidak perlu Tab melewati semua link navigasi setiap kali halaman dimuat.

---

## 📰 Elemen `<article>`

### Apa itu `<article>`?

`<article>` mewakili **konten yang berdiri sendiri dan bisa didistribusikan atau disindikasi secara mandiri** — artinya jika diangkat keluar dari konteks halaman, konten ini masih bermakna dan lengkap.

### Uji "Berdiri Sendiri"

Cara terbaik menentukan apakah konten layak jadi `<article>`:

> *"Jika konten ini diambil dan diposting di website lain atau dikirim via email, apakah ia masih bermakna tanpa konteks halaman aslinya?"*

Jika ya → `<article>` tepat.

**Contoh yang cocok untuk `<article>`:**
- Sebuah posting blog
- Sebuah artikel berita
- Sebuah kartu proyek dalam portfolio (karena proyek bisa dijelaskan secara mandiri)
- Ulasan produk
- Komentar pengguna (setiap komentar adalah `<article>` tersendiri)
- Posting di forum

**Contoh yang TIDAK cocok untuk `<article>`:**
- Sebuah paragraf biasa di halaman "Tentang"
- Sebuah item dalam daftar keahlian
- Sebuah tombol atau elemen UI

### `<article>` dalam Portfolio

Halaman proyek kita sangat cocok menggunakan `<article>` untuk setiap proyek:

```html
<section id="proyek" aria-labelledby="judul-proyek">
  <h2 id="judul-proyek">Proyek Saya</h2>

  <article class="project-card" id="proyek-website-sekolah">
    <header>
      <h3>Website Sekolah SMK Nusantara</h3>
      <p>
        <time datetime="2025-06">Juni 2025</time> — 
        <span class="project-status">Selesai</span>
      </p>
    </header>
    
    <p>
      Website profil sekolah yang responsif dengan halaman beranda, 
      profil, dan kontak. Dibuat menggunakan HTML dan CSS murni.
    </p>
    
    <ul class="project-tech">
      <li>HTML5</li>
      <li>CSS3</li>
    </ul>
    
    <footer>
      <a href="https://demo-sekolah.example.com" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Lihat demo Website Sekolah (tab baru)">
        Demo
      </a>
      <a href="https://github.com/rizki/website-sekolah"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Lihat kode sumber di GitHub (tab baru)">
        GitHub
      </a>
    </footer>
  </article>

  <article class="project-card" id="proyek-absensi">
    <header>
      <h3>Aplikasi Absensi Kelas</h3>
      <p>
        <time datetime="2025-09">September 2025</time> — 
        <span class="project-status">Dalam Pengembangan</span>
      </p>
    </header>
    <p>Sistem absensi berbasis web untuk kelas RPL...</p>
  </article>

</section>
```

Perhatikan bahwa setiap `<article>` proyek juga punya `<header>` dan `<footer>` sendiri — ini valid dan direkomendasikan.

### `<article>` Bersarang

`<article>` boleh ada di dalam `<article>` lain — misalnya komentar di dalam artikel blog:

```html
<article>
  <h2>Cara Membuat Navigasi Responsif</h2>
  <p>Ini adalah artikel utama...</p>
  
  <section id="komentar">
    <h3>Komentar (2)</h3>
    
    <article class="komentar">
      <header>
        <cite>Budi Santoso</cite>
        <time datetime="2025-10-15">15 Oktober 2025</time>
      </header>
      <p>Artikel yang sangat membantu!</p>
    </article>
    
    <article class="komentar">
      <header>
        <cite>Siti Rahayu</cite>
        <time datetime="2025-10-16">16 Oktober 2025</time>
      </header>
      <p>Terima kasih, langsung saya coba.</p>
    </article>
  </section>
</article>
```

---

## ⚖️ Kapan `<main>` dan Kapan `<article>`?

| | `<main>` | `<article>` |
|---|---|---|
| **Berapa kali per halaman?** | Satu (yang terlihat) | Boleh banyak |
| **Isi** | Seluruh konten utama halaman | Satu unit konten mandiri |
| **Bisa berdiri sendiri?** | Tidak harus | Ya, harus |
| **Contoh** | Seluruh isi halaman "Tentang Saya" | Satu proyek dalam galeri proyek |

---

**[Lanjut: section & aside →](/bab8/section-aside/)**
