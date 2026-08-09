---
title: "div vs Semantic"
description: Memahami kapan menggunakan div dan span yang sah, kapan semantic element lebih tepat, dan bagaimana berpikir berdasarkan makna bukan tampilan.
---

Satu pertanyaan yang sering muncul setelah belajar semantic HTML:

> *"Berarti `<div>` itu buruk dan harus dihindari?"*

**Jawabannya: Tidak.** `<div>` bukan buruk — ia bukan tidak boleh dipakai. Yang menjadi masalah adalah **menggunakan `<div>` untuk semua hal padahal ada element yang lebih tepat**.

Di halaman ini, kita akan membahas kapan `<div>` tepat, kapan tidak, dan bagaimana cara memutuskannya.

---

## 🔲 Apa Itu `<div>` dan `<span>`?

`<div>` dan `<span>` adalah **generic container** — wadah tanpa makna semantik bawaan. Mereka murni alat struktural untuk keperluan CSS dan JavaScript.

- `<div>` → block-level container (menempati satu baris penuh)
- `<span>` → inline container (berada dalam alur teks)

```html
<!-- div: container block-level -->
<div class="card">
  <h3>Judul Card</h3>
  <p>Isi card...</p>
</div>

<!-- span: container inline -->
<p>
  Teks dengan <span class="highlight">kata yang disorot</span> di dalamnya.
</p>
```

Browser tidak memberikan makna apapun kepada `<div>` dan `<span>`. Screen reader mengabaikannya. Search engine tidak memberi bobot khusus.

---

## ✅ Kapan `<div>` TEPAT Digunakan

### 1. Wrapper untuk Layout CSS

Ketika kamu perlu membungkus beberapa element untuk keperluan CSS (flexbox, grid, positioning) dan tidak ada semantic element yang cocok:

```html
<main>
  <section id="proyek">
    <h2>Proyek Saya</h2>
    
    <!-- div sebagai grid container — tidak ada semantic element untuk ini -->
    <div class="project-grid">
      <article class="project-card">...</article>
      <article class="project-card">...</article>
      <article class="project-card">...</article>
    </div>
  </section>
</main>
```

`<div class="project-grid">` di sini murni sebagai "wadah CSS" untuk membuat layout grid. Tidak ada semantic element yang lebih tepat untuk peran ini.

### 2. Grouping untuk JavaScript

```html
<div id="modal-overlay" class="modal" hidden>
  <div class="modal-dialog" role="dialog" aria-labelledby="modal-title">
    <h2 id="modal-title">Konfirmasi</h2>
    <p>Apakah kamu yakin?</p>
    <div class="modal-actions">
      <button type="button" class="btn-confirm">Ya</button>
      <button type="button" class="btn-cancel">Batal</button>
    </div>
  </div>
</div>
```

`<div class="modal-dialog">` dan `<div class="modal-actions">` adalah wrapper yang dibutuhkan untuk layout dan JavaScript — tidak ada semantic element yang lebih tepat.

### 3. Tidak Ada Semantic Element yang Lebih Tepat

```html
<!-- Kotak notifikasi kustom — tidak ada semantic element khusus untuk ini -->
<div class="toast-notification" role="alert" aria-live="assertive">
  <span class="toast-icon" aria-hidden="true">✓</span>
  <p class="toast-message">Pesan berhasil dikirim!</p>
</div>
```

---

## ✅ Kapan `<span>` TEPAT Digunakan

### 1. Styling Sebagian Teks

```html
<p>
  Nama saya <span class="name-highlight">Rizki Pratama</span>, 
  seorang junior web developer dari <span class="city">Jakarta</span>.
</p>
```

### 2. Ikon atau Badge Inline

```html
<button class="btn btn-primary">
  <span class="btn-icon" aria-hidden="true">📧</span>
  Kirim Email
</button>
```

### 3. Elemen yang Perlu Ditarget JavaScript

```html
<p>Total: <span id="total-harga">Rp 0</span></p>
```

---

## ❌ Kapan `<div>` TIDAK Tepat

### Menggantikan Element Semantik yang Ada

```html
<!-- ❌ Ada nav yang lebih tepat -->
<div class="navigation">
  <a href="/">Beranda</a>
  <a href="/proyek">Proyek</a>
</div>

<!-- ✅ Gunakan nav -->
<nav>
  <a href="/">Beranda</a>
  <a href="/proyek">Proyek</a>
</nav>
```

```html
<!-- ❌ Ada header yang lebih tepat -->
<div class="header">
  <h1>Portfolio Rizki</h1>
  <nav>...</nav>
</div>

<!-- ✅ Gunakan header -->
<header>
  <h1>Portfolio Rizki</h1>
  <nav>...</nav>
</header>
```

```html
<!-- ❌ Ada footer yang lebih tepat -->
<div class="footer">
  <p>&copy; 2026 Rizki</p>
</div>

<!-- ✅ Gunakan footer -->
<footer>
  <p>&copy; 2026 Rizki</p>
</footer>
```

```html
<!-- ❌ Ini proyek mandiri — ada article yang lebih tepat -->
<div class="project-card">
  <h3>Website Sekolah</h3>
  <p>Deskripsi proyek...</p>
</div>

<!-- ✅ Gunakan article -->
<article class="project-card">
  <h3>Website Sekolah</h3>
  <p>Deskripsi proyek...</p>
</article>
```

---

## 🧠 Cara Berpikir: Makna → Element

Gunakan alur berpikir ini sebelum memilih element:

```
1. Apa makna konten ini?

   ↓ Apakah ini pengantar halaman/section?
     → <header>
   
   ↓ Apakah ini kumpulan link navigasi?
     → <nav>
   
   ↓ Apakah ini konten utama halaman?
     → <main>
   
   ↓ Apakah ini konten mandiri yang bisa berdiri sendiri?
     → <article>
   
   ↓ Apakah ini kelompok konten bertema dengan heading?
     → <section>
   
   ↓ Apakah ini konten pendukung/pelengkap?
     → <aside>
   
   ↓ Apakah ini penutup halaman/section?
     → <footer>
   
   ↓ Apakah ini gambar/diagram dengan keterangan?
     → <figure> + <figcaption>
   
   ↓ Apakah ini tanggal/waktu?
     → <time>
   
   ↓ Apakah ini informasi kontak penulis?
     → <address>
   
   ↓ Tidak ada semantic element yang cocok?
     → <div> (block) atau <span> (inline)
```

---

## 📝 Prinsip Utama

**MAKNA → ELEMENT**  
Pilih element berdasarkan makna konten, bukan tampilannya.

**PRESENTATION → CSS**  
Semua yang berkaitan dengan tampilan visual adalah tanggung jawab CSS.

**REUSABILITY → CLASS**  
Gunakan `class` sebagai jembatan antara HTML dan CSS/JavaScript.

```html
<!-- Prinsip ini dalam praktek: -->
<article class="project-card">
<!-- ↑ makna  ↑ presentation hook -->

<section id="tentang" class="section section--about" aria-labelledby="judul-tentang">
<!-- ↑ makna  ↑ id untuk anchor  ↑ class untuk CSS  ↑ aria untuk screen reader -->
```

---

## 📊 Tabel Perbandingan Cepat

| Situasi | Element Tepat |
|---|---|
| Pengantar website (logo + nav) | `<header>` |
| Daftar link navigasi | `<nav>` |
| Seluruh konten utama halaman | `<main>` |
| Konten yang bisa berdiri sendiri | `<article>` |
| Konten bertema dengan heading | `<section>` |
| Konten pendukung/sidebar | `<aside>` |
| Penutup website | `<footer>` |
| Gambar + keterangan | `<figure>` + `<figcaption>` |
| Tanggal/waktu | `<time>` |
| Wrapper layout CSS murni | `<div>` |
| Styling sebagian teks | `<span>` |

---

**[Lanjut: Struktur Halaman Nyata →](/bab8/struktur-halaman-nyata/)**
