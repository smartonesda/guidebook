---
title: "header & nav"
description: Memahami apa itu Semantic HTML, mengapa ia penting, serta cara menggunakan elemen header dan nav dengan benar — termasuk kapan boleh digunakan lebih dari sekali.
---

## 🧠 Apa Itu Semantic HTML?

Kata **semantic** berasal dari bahasa Yunani yang berarti *"bermakna"*. Dalam konteks HTML, semantic berarti **menggunakan element yang secara namanya sudah menjelaskan apa yang dikandungnya**.

Perhatikan analogi ini:

Bayangkan kamu mengorganisir rak buku. Ada dua cara:

**Cara A:** Beri label semua kotak dengan nama umum: "Kotak 1", "Kotak 2", "Kotak 3"  
**Cara B:** Beri label sesuai isinya: "Novel", "Buku Teks", "Majalah"

Cara B jelas lebih informatif — bukan hanya untuk kamu, tapi untuk siapa saja yang perlu mencari sesuatu di rak itu.

HTML semantic bekerja persis seperti itu. **Element yang kamu pilih memberitahu browser, search engine, dan screen reader tentang makna konten tersebut** — bukan hanya tampilannya.

---

## 🔄 Semantic vs Non-Semantic: Perbedaan Nyata

```html
<!-- Non-Semantic: semua pakai div -->
<div class="header">
  <div class="logo">Rizki Pratama</div>
  <div class="navigation">
    <div class="nav-link">Beranda</div>
    <div class="nav-link">Proyek</div>
    <div class="nav-link">Kontak</div>
  </div>
</div>

<!-- Semantic: pilih element yang bermakna -->
<header>
  <p class="logo">Rizki Pratama</p>
  <nav>
    <a href="/">Beranda</a>
    <a href="/proyek">Proyek</a>
    <a href="#kontak">Kontak</a>
  </nav>
</header>
```

Jika CSS diterapkan identik, keduanya **terlihat sama** di browser.

Tapi di balik layar:

| | Non-Semantic (`div`) | Semantic |
|---|---|---|
| **Browser tahu ini header?** | Tidak | Ya (`<header>`) |
| **Screen reader umumkan navigasi?** | Tidak | Ya (`<nav>`) |
| **Search engine prioritaskan nav link?** | Tidak | Ya |
| **Developer bisa baca struktur?** | Sulit | Mudah |

---

## 🌟 Mengapa Semantic HTML Penting?

### 1. Keterbacaan Developer

```html
<!-- Mana yang lebih mudah kamu baca sekilas? -->

<!-- Versi div -->
<div class="wrapper">
  <div class="top">
    <div class="brand">...</div>
    <div class="menu">...</div>
  </div>
  <div class="body">
    <div class="content">...</div>
    <div class="sidebar">...</div>
  </div>
  <div class="bottom">...</div>
</div>

<!-- Versi semantic -->
<body>
  <header>
    <h1>...</h1>
    <nav>...</nav>
  </header>
  <main>
    <section>...</section>
    <aside>...</aside>
  </main>
  <footer>...</footer>
</body>
```

Versi semantic langsung menjelaskan strukturnya — tanpa perlu membaca class.

### 2. Aksesibilitas

Screen reader seperti NVDA, JAWS, atau VoiceOver **memahami landmark** dari semantic element:
- `<header>` → "banner"
- `<nav>` → "navigation"
- `<main>` → "main"
- `<footer>` → "contentinfo"

Pengguna tunanetra bisa langsung loncat ke bagian tertentu dengan menekan tombol pintasan keyboard — tanpa harus mendengarkan semua konten dari awal.

### 3. SEO (Search Engine Optimization)

Search engine seperti Google membaca struktur HTML untuk memahami halaman:
- Konten di dalam `<main>` dianggap lebih relevan dari konten di `<aside>`.
- Link di dalam `<nav>` dikenali sebagai navigasi utama.
- Konten di `<article>` dianggap mandiri dan bisa diindeks tersendiri.

### 4. Maintainability

Ketika project berkembang dan developer lain bergabung, HTML yang semantic lebih mudah dipahami dan dimodifikasi tanpa perlu membaca seluruh kode atau dokumentasi tambahan.

---

## 🏠 Elemen `<header>`

### Apa itu `<header>`?

`<header>` adalah elemen yang mewakili **konten pengantar atau kelompok konten navigasi** untuk section terdekatnya. Ia bukan hanya "bagian atas halaman" — ia punya makna yang lebih fleksibel.

```html
<!-- header untuk seluruh website (site header) -->
<header>
  <h1>Rizki Pratama</h1>
  <p>Junior Web Developer</p>
  <nav>
    <a href="/">Beranda</a>
    <a href="/proyek">Proyek</a>
  </nav>
</header>
```

### Apakah `<header>` hanya boleh satu kali?

**Tidak.** `<header>` boleh muncul lebih dari sekali di satu halaman — asalkan setiap `<header>` merupakan pengantar untuk section atau artikel yang berbeda.

```html
<!-- header untuk seluruh website -->
<header>
  <h1>Portfolio Rizki</h1>
  <nav>...</nav>
</header>

<main>
  <!-- header untuk sebuah article -->
  <article>
    <header>
      <h2>Proyek: Website Toko Roti</h2>
      <p>Diterbitkan: <time datetime="2025-06">Juni 2025</time></p>
    </header>
    <p>Deskripsi proyek...</p>
  </article>
</main>
```

### Apa yang biasanya ada di dalam `<header>`?

- Logo atau nama brand/website
- Heading utama (`<h1>`) untuk site header
- Navigasi (`<nav>`)
- Tagline atau deskripsi singkat
- Tombol CTA (call-to-action) utama
- Form pencarian

### Kapan jangan menggunakan `<header>`?

- Jangan masukkan `<header>` di dalam `<footer>`, `<address>`, atau `<header>` lain.
- Jangan gunakan `<header>` hanya karena konten secara visual ada "di atas".

---

## 🧭 Elemen `<nav>`

### Apa itu `<nav>`?

`<nav>` mewakili **sekumpulan link navigasi** — tautan yang menghubungkan pengguna ke halaman atau bagian lain.

```html
<!-- Navigasi utama -->
<nav aria-label="Navigasi utama">
  <a href="/">Beranda</a>
  <a href="/proyek">Proyek</a>
  <a href="/blog">Blog</a>
  <a href="#kontak">Hubungi Saya</a>
</nav>
```

### Apakah `<nav>` hanya boleh satu kali?

**Tidak.** Boleh lebih dari satu — asalkan setiap `<nav>` mewakili kelompok navigasi yang berbeda. Gunakan `aria-label` untuk membedakannya:

```html
<header>
  <nav aria-label="Navigasi utama">
    <a href="/">Beranda</a>
    <a href="/proyek">Proyek</a>
  </nav>
</header>

<footer>
  <nav aria-label="Navigasi footer">
    <a href="/privasi">Kebijakan Privasi</a>
    <a href="/kontak">Kontak</a>
  </nav>
</footer>
```

### Kapan menggunakan `<nav>`?

- Navigasi utama website (menu header).
- Navigasi footer.
- Daftar isi / table of contents artikel panjang.
- Breadcrumb navigation.
- Pagination (halaman 1, 2, 3...).

### Kapan TIDAK menggunakan `<nav>`?

- Sekumpulan link di dalam artikel yang bukan navigasi — misalnya daftar referensi atau link sosial media (lebih tepat di `<footer>` atau `<ul>`).
- Tidak semua kelompok link perlu `<nav>`. Hanya yang merupakan navigasi utama dan signifikan.

```html
<!-- ❌ Tidak perlu nav untuk daftar link biasa -->
<nav>
  <a href="https://twitter.com/rizki">Twitter</a>
  <a href="https://github.com/rizki">GitHub</a>
</nav>

<!-- ✅ Lebih tepat -->
<ul class="social-links">
  <li><a href="https://twitter.com/rizki">Twitter</a></li>
  <li><a href="https://github.com/rizki">GitHub</a></li>
</ul>
```

---

## 🏗️ `<header>` + `<nav>` dalam Portfolio

Berikut adalah versi `<header>` + `<nav>` yang benar dan kaya attribute untuk portfolio kita:

```html
<header id="site-header" class="site-header">
  <div class="header-brand">
    <h1 class="site-title">Rizki Pratama</h1>
    <p class="site-tagline">Junior Web Developer · SMK RPL Jakarta</p>
  </div>

  <nav id="nav-utama" class="main-nav" aria-label="Navigasi utama">
    <a href="/" class="nav-link nav-link--active" aria-current="page">Beranda</a>
    <a href="/proyek" class="nav-link">Proyek</a>
    <a href="#kontak" class="nav-link">Hubungi Saya</a>
  </nav>
</header>
```

Perhatikan:
- `<header>` membungkus brand + navigasi — ini adalah "kelompok pengantar" halaman.
- `<nav>` dengan `aria-label` agar screen reader mengumumkan "Navigasi utama" sebelum membacakan link.
- `aria-current="page"` menandai halaman aktif.

---

**[Lanjut: main & article →](/bab8/main-article/)**
