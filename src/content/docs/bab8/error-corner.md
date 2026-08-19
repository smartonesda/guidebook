---
title: "Error Corner"
description: Kesalahan paling umum dalam penggunaan Semantic HTML — dari article yang salah tempat hingga section tanpa heading dan nav yang berlebihan.
---

Semantic HTML adalah area yang penuh dengan "kesalahan baik-baik" — kode yang tidak menyebabkan error di browser, tapi tidak menyampaikan makna yang benar.

---

## ❌ Kesalahan 1: `<section>` Tanpa Heading

```html
<!-- ❌ SALAH: section tanpa heading -->
<section class="intro-wrapper">
  <p>Halo, saya Rizki. Saya senang belajar HTML.</p>
  <p>Saya berasal dari Jakarta.</p>
</section>
```

```html
<!-- ✅ BENAR: section harus punya heading yang mendefinisikan topiknya -->
<section id="tentang" aria-labelledby="tentang-heading">
  <h2 id="tentang-heading">Tentang Saya</h2>
  <p>Halo, saya Rizki. Saya senang belajar HTML.</p>
  <p>Saya berasal dari Jakarta.</p>
</section>
```

**Mengapa penting:** `<section>` tanpa heading adalah "grup tanpa nama" — screen reader tidak tahu apa topik dari section ini. Jika konten tidak punya heading yang jelas, pertimbangkan menggunakan `<div>` biasa.

---

## ❌ Kesalahan 2: Menggunakan `<article>` untuk Komponen UI

```html
<!-- ❌ SALAH: tombol dan badge bukan "konten mandiri" -->
<article class="skill-badge">HTML5</article>
<article class="btn-submit">Kirim</article>
<article class="tag">Web Development</article>
```

```html
<!-- ✅ BENAR: gunakan span atau li untuk komponen UI kecil -->
<li class="skill-badge" data-level="mahir">HTML5</li>
<button type="submit" class="btn btn-primary">Kirim</button>
<span class="tag">Web Development</span>
```

**Aturan article:** Hanya gunakan jika konten bisa diambil keluar dari konteks halaman dan masih bermakna secara mandiri — posting blog, artikel berita, ulasan, komentar, kartu proyek.

---

## ❌ Kesalahan 3: `<nav>` untuk Semua Kelompok Link

```html
<!-- ❌ SALAH: tidak semua kumpulan link adalah navigasi -->
<nav class="social-media">
  <a href="https://github.com/rizki">GitHub</a>
  <a href="https://instagram.com/rizki">Instagram</a>
</nav>

<nav class="referensi">
  <a href="https://developer.mozilla.org">MDN Web Docs</a>
  <a href="https://www.w3schools.com">W3Schools</a>
</nav>
```

```html
<!-- ✅ BENAR: nav untuk navigasi utama/signifikan -->
<ul class="social-links">
  <li><a href="https://github.com/rizki" target="_blank" rel="noopener noreferrer"
         aria-label="Profil GitHub Rizki (tab baru)">GitHub</a></li>
  <li><a href="https://instagram.com/rizki" target="_blank" rel="noopener noreferrer"
         aria-label="Instagram Rizki (tab baru)">Instagram</a></li>
</ul>

<p>Referensi: 
  <a href="https://developer.mozilla.org">MDN Web Docs</a>, 
  <a href="https://www.w3schools.com">W3Schools</a>
</p>
```

**Panduan nav:** Gunakan `<nav>` untuk navigasi utama website, navigasi footer, breadcrumb, pagination, dan table of contents artikel panjang. Bukan untuk sembarang kumpulan link.

---

## ❌ Kesalahan 4: Lebih dari Satu `<main>` yang Terlihat

```html
<!-- ❌ SALAH: dua main sekaligus terlihat -->
<main id="konten-a">
  <h1>Halaman Beranda</h1>
</main>

<main id="konten-b">
  <h1>Versi Alternatif</h1>
</main>
```

```html
<!-- ✅ BENAR: satu main, atau yang lain disembunyikan -->
<main id="konten-a">
  <h1>Halaman Beranda</h1>
</main>

<main id="konten-b" hidden>
  <!-- Disembunyikan, tidak relevan sekarang -->
</main>
```

`<main>` adalah "inti dokumen" — tidak bisa ada dua inti secara bersamaan.

---

## ❌ Kesalahan 5: `<aside>` untuk Konten yang Tidak Berkaitan

```html
<!-- ❌ SALAH: aside untuk iklan yang tidak berkaitan sama sekali -->
<main>
  <article>
    <h1>Tips Belajar HTML</h1>
    <aside>
      <!-- Iklan sabun mandi — tidak ada hubungannya dengan artikel HTML -->
      <img src="iklan-sabun.jpg" alt="Beli sabun terbaik!" />
    </aside>
  </article>
</main>
```

```html
<!-- ✅ BENAR: aside untuk konten yang berkaitan -->
<article>
  <h1>Tips Belajar HTML</h1>
  <p>Belajar HTML dimulai dari memahami struktur...</p>
  <aside aria-label="Sumber belajar tambahan">
    <h2>Ingin Belajar Lebih?</h2>
    <ul>
      <li><a href="https://developer.mozilla.org">MDN Web Docs</a></li>
      <li><a href="https://html.spec.whatwg.org">Spesifikasi HTML</a></li>
    </ul>
  </aside>
</article>
```

---

## ❌ Kesalahan 6: Membungkus `<header>` di Dalam `<header>`

```html
<!-- ❌ SALAH: header di dalam header -->
<header class="site-header">
  <header class="brand-section">
    <h1>Portfolio Rizki</h1>
  </header>
  <nav>...</nav>
</header>
```

```html
<!-- ✅ BENAR: gunakan div untuk sub-grouping di dalam header -->
<header class="site-header">
  <div class="brand-section">
    <h1>Portfolio Rizki</h1>
    <p class="tagline">Junior Web Developer</p>
  </div>
  <nav>...</nav>
</header>
```

`<header>` tidak boleh berada di dalam `<header>` lain, `<footer>`, atau `<address>`.

---

## ❌ Kesalahan 7: Menggunakan `<address>` untuk Alamat Fisik Sembarang

```html
<!-- ❌ SALAH: address untuk alamat lokasi yang bukan kontak penulis -->
<p>Kami berlokasi di:</p>
<address>Jl. Sudirman No. 1, Jakarta Pusat, DKI Jakarta 10220</address>

<!-- address seharusnya untuk informasi kontak penulis/pemilik konten -->
```

```html
<!-- ✅ BENAR: address untuk kontak penulis/pemilik -->
<footer>
  <address>
    <p>Hubungi saya: <a href="mailto:rizki@example.com">rizki@example.com</a></p>
  </address>
</footer>

<!-- Untuk alamat fisik lokasi bisnis, gunakan teks biasa -->
<p>Kami berlokasi di: Jl. Sudirman No. 1, Jakarta Pusat</p>
```

---

## ❌ Kesalahan 8: `<hr>` sebagai Visual Divider

```html
<!-- ❌ Penggunaan yang tidak tepat: hr hanya untuk visual -->
<section id="tentang">...</section>
<hr />
<section id="keahlian">...</section>
<hr />
<section id="proyek">...</section>
```

```html
<!-- ✅ BENAR: gunakan CSS untuk visual separator -->
<section id="tentang">...</section>
<section id="keahlian">...</section>  <!-- CSS: border-top atau margin -->
<section id="proyek">...</section>

<!-- <hr> memiliki makna semantik: perpindahan topik dalam satu aliran -->
<!-- Gunakan hanya ketika ada perpindahan topik yang signifikan dalam aliran konten -->
```

---

## ❌ Kesalahan 9: Mengabaikan Hierarki Heading

```html
<!-- ❌ SALAH: loncat dari h1 langsung ke h4 -->
<main>
  <h1>Portfolio Rizki</h1>
  
  <section>
    <h4>Tentang Saya</h4>  <!-- mestinya h2 -->
    <p>...</p>
    
    <h6>Pendidikan</h6>    <!-- mestinya h3 -->
  </section>
</main>
```

```html
<!-- ✅ BENAR: hierarki heading harus berurutan -->
<main>
  <h1>Portfolio Rizki</h1>
  
  <section>
    <h2>Tentang Saya</h2>
    <p>...</p>
    
    <section>
      <h3>Pendidikan</h3>
    </section>
  </section>
</main>
```

Hierarki heading yang benar (h1 → h2 → h3) sangat penting untuk screen reader yang menggunakannya sebagai "daftar isi" halaman untuk navigasi cepat.

---

## ❌ Kesalahan 10: Semantic Element "Kelihatan Bagus" tapi Salah Makna

```html
<!-- ❌ Terlihat "lebih semantic" tapi salah -->
<!-- Menggunakan <aside> untuk sidebar yang sebenarnya adalah konten utama kedua -->
<main>
  <section id="artikel">
    <h2>Tips HTML</h2>
    <p>Konten utama artikel...</p>
  </section>
</main>
<aside>
  <section id="artikel-terbaru">
    <h2>Artikel Terbaru</h2>
    <!-- ini sebenarnya konten penting, bukan hanya pendukung -->
  </section>
</aside>
```

```html
<!-- ✅ Jika "Artikel Terbaru" adalah konten penting sekunder, tetap di dalam <main> -->
<main>
  <section id="artikel">
    <h2>Tips HTML</h2>
    <p>Konten utama artikel...</p>
  </section>
  <section id="artikel-terkait" aria-labelledby="related-heading">
    <h2 id="related-heading">Artikel Terkait</h2>
    ...
  </section>
</main>
```

---

**[Lanjut: Ringkasan →](/bab8/ringkasan/)**
