---
title: "HTML5 — Standar Modern"
description: Memahami HTML5 secara menyeluruh — fitur baru, elemen semantik, API browser, dan mengapa HTML5 mengubah cara kita membangun web.
---

HTML5 bukan hanya "HTML versi 5". Ia adalah **revolusi** dalam cara web dibangun dan dipahami — dan hingga hari ini, HTML5 adalah standar yang kamu gunakan setiap kali menulis HTML.

---

## 🎯 Tujuan Pembelajaran

- Memahami apa yang baru di HTML5 dibandingkan versi sebelumnya
- Mengenal elemen semantik HTML5 dan fungsinya
- Memahami fitur multimedia baru: `<video>`, `<audio>`, `<canvas>`
- Mengetahui fitur form HTML5 yang mempermudah validasi
- Mengerti mengapa `<!DOCTYPE html>` HTML5 sangat sederhana

---

## 🧠 Teori: Mengapa HTML5 Diciptakan?

Pada pertengahan 2000-an, web menghadapi krisis identitas.

**Masalah 1: Web semakin interaktif, HTML tidak mampu**

Website bukan lagi sekadar dokumen statis. Gmail, Google Maps, YouTube — semuanya membutuhkan kemampuan yang jauh melampaui HTML 4. Developer terpaksa menggunakan Flash atau Java Applet untuk video, audio, dan grafik interaktif.

**Masalah 2: Tidak ada elemen yang bermakna**

Semua struktur halaman dibuat dari `<div>`:

```html
<!-- Web sebelum HTML5 — lautan div -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="main">...</div>
<div id="sidebar">...</div>
<div id="footer">...</div>
```

Mesin pencari, screen reader, dan developer baru tidak tahu mana header, mana konten utama, mana sidebar — semuanya terlihat sama.

**Masalah 3: Form yang primitif**

Untuk validasi form (memastikan email berformat benar, angka dalam rentang tertentu), developer harus menulis JavaScript yang panjang.

HTML5 hadir untuk menyelesaikan semua masalah ini.

---

## 🌍 Analogi: Renovasi Gedung Tua

Bayangkan HTML 4 sebagai gedung perkantoran yang dibangun tahun 1990:
- Tidak ada wifi
- Tidak ada colokan di meja-meja
- Semua ruangan disebut "ruangan" — tidak ada tanda yang menunjukkan mana resepsi, mana ruang meeting, mana pantry

HTML5 adalah **renovasi total** gedung itu:
- Wifi dipasang di mana-mana (API browser baru)
- Setiap ruangan diberi papan nama yang jelas (elemen semantik)
- Sistem audio-video terpasang di gedung (video/audio native)
- Formulir digital menggantikan formulir kertas (form input types baru)

---

## 🖥 Diagram: Pilar HTML5

```
╔═══════════════════════════════════════════════════════════╗
║                    HTML5 — 5 PILAR UTAMA                  ║
╠═══════════════╦═══════════════╦══════════╦════════════════╣
║  SEMANTIK     ║  MULTIMEDIA   ║  FORM    ║    API BARU    ║
╠═══════════════╬═══════════════╬══════════╬════════════════╣
║ <header>      ║ <video>       ║ email    ║ Geolocation    ║
║ <nav>         ║ <audio>       ║ date     ║ Local Storage  ║
║ <main>        ║ <canvas>      ║ number   ║ Web Workers    ║
║ <article>     ║ <svg>         ║ range    ║ WebSocket      ║
║ <section>     ║ <figure>      ║ search   ║ Canvas 2D/3D   ║
║ <aside>       ║               ║ tel      ║ Drag & Drop    ║
║ <footer>      ║               ║ color    ║ History API    ║
╚═══════════════╩═══════════════╩══════════╩════════════════╝
```

---

## 💻 Pilar 1: Elemen Semantik HTML5

### Apa itu "Semantik"?

Semantik artinya **bermakna**. Elemen semantik HTML5 adalah tag yang namanya langsung mendeskripsikan fungsinya — bukan hanya "kotak" generik.

```html
<!-- Sebelum HTML5: semua "kotak" tidak bermakna -->
<div id="header">
  <div id="logo">...</div>
  <div id="nav">...</div>
</div>
<div id="hero">...</div>
<div id="content">
  <div class="main-article">
    <div class="article-content">...</div>
    <div class="related">...</div>
  </div>
  <div id="sidebar">...</div>
</div>
<div id="footer">...</div>
```

```html
<!-- HTML5: setiap elemen mendeskripsikan dirinya sendiri -->
<header>
  <img src="logo.png" alt="Logo Perusahaan" />
  <nav>...</nav>
</header>
<main>
  <section class="hero">...</section>
  <article>
    <section>...</section>
    <aside>...</aside>
  </article>
</main>
<footer>...</footer>
```

### Peta Elemen Semantik HTML5

```
┌─────────────────────────────────────────────────────────┐
│                      <header>                           │
│  Logo, nama situs, navigasi utama                       │
│  ┌─────────────────────────────────────────────────┐   │
│  │                    <nav>                        │   │
│  │  Tautan navigasi utama                          │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                       <main>                            │
│  Konten utama halaman (hanya 1 per halaman)             │
│  ┌─────────────────────────────┐ ┌───────────────────┐  │
│  │         <article>           │ │      <aside>      │  │
│  │  Konten mandiri/utama       │ │  Konten pendukung │  │
│  │  ┌─────────────────────┐   │ │  Sidebar, tips,   │  │
│  │  │      <section>      │   │ │  iklan, bio       │  │
│  │  │  Bagian dari artikel│   │ └───────────────────┘  │
│  │  └─────────────────────┘   │                        │
│  └─────────────────────────────┘                        │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│                      <footer>                           │
│  Copyright, link tambahan, kontak                       │
└─────────────────────────────────────────────────────────┘
```

### Fungsi Setiap Elemen Semantik

| Elemen | Fungsi | Boleh Ada Berapa? |
|---|---|---|
| `<header>` | Header untuk halaman atau section (logo, nav, judul) | Bisa banyak (satu per section) |
| `<nav>` | Blok navigasi utama | Bisa banyak |
| `<main>` | Konten utama halaman | **Hanya 1** per halaman |
| `<article>` | Konten mandiri yang bisa berdiri sendiri (post, berita) | Bisa banyak |
| `<section>` | Bagian tematik dari konten | Bisa banyak |
| `<aside>` | Konten terkait tapi bukan konten utama (sidebar) | Bisa banyak |
| `<footer>` | Footer untuk halaman atau section | Bisa banyak |
| `<figure>` | Media dengan caption (gambar, diagram, kode) | Bisa banyak |
| `<figcaption>` | Caption untuk `<figure>` | 1 per `<figure>` |
| `<time>` | Tanggal/waktu yang machine-readable | Bisa banyak |
| `<mark>` | Teks yang di-highlight/ditandai | Bisa banyak |
| `<details>` | Konten yang bisa di-expand/collapse | Bisa banyak |
| `<summary>` | Judul dari `<details>` | 1 per `<details>` |

---

## 💻 Pilar 2: Multimedia Native

### Sebelum HTML5: Flash

```html
<!-- Cara lama: butuh plugin Flash yang terpisah -->
<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        width="640" height="480">
  <param name="movie" value="video.swf" />
  Kamu perlu Flash Player untuk menonton video ini.
</object>
```

### HTML5: Native tanpa Plugin

```html
<!-- HTML5: video bawaan browser, tanpa plugin -->
<video width="640" height="480" controls>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <p>Browser kamu tidak mendukung tag video. 
     <a href="video.mp4">Download video</a></p>
</video>

<!-- Audio -->
<audio controls>
  <source src="lagu.mp3" type="audio/mpeg" />
  <source src="lagu.ogg" type="audio/ogg" />
  <p>Browser kamu tidak mendukung tag audio.</p>
</audio>
```

### Atribut Penting `<video>`

| Atribut | Fungsi |
|---|---|
| `controls` | Tampilkan kontrol play/pause/volume |
| `autoplay` | Putar otomatis (perlu `muted` agar berfungsi) |
| `muted` | Mulai tanpa suara |
| `loop` | Putar berulang |
| `poster` | Gambar thumbnail sebelum video diputar |
| `preload` | `none`, `metadata`, atau `auto` |

---

## 💻 Pilar 3: Form Input Types Baru

HTML5 menambahkan banyak tipe input yang secara otomatis melakukan validasi dan menampilkan UI yang sesuai (terutama di mobile):

```html
<form>
  <!-- Email: validasi format otomatis -->
  <input type="email" placeholder="email@contoh.com" />
  
  <!-- URL: validasi format URL otomatis -->
  <input type="url" placeholder="https://website.com" />
  
  <!-- Nomor telepon: keyboard numerik di mobile -->
  <input type="tel" placeholder="+62 812 3456 7890" />
  
  <!-- Angka dengan min/max/step -->
  <input type="number" min="1" max="100" step="1" value="50" />
  
  <!-- Slider -->
  <input type="range" min="0" max="100" value="50" />
  
  <!-- Date picker bawaan browser -->
  <input type="date" />
  <input type="time" />
  <input type="datetime-local" />
  
  <!-- Color picker -->
  <input type="color" value="#ff5533" />
  
  <!-- Search (dengan tombol hapus bawaan) -->
  <input type="search" placeholder="Cari..." />
</form>
```

### Atribut Validasi HTML5

```html
<!-- required: wajib diisi -->
<input type="text" required />

<!-- minlength/maxlength: panjang teks -->
<input type="text" minlength="3" maxlength="50" />

<!-- pattern: regex untuk validasi format -->
<input type="text" pattern="[A-Za-z]{3,}" />

<!-- min/max: rentang nilai -->
<input type="number" min="18" max="65" />
```

---

## 💻 Pilar 4: Canvas dan SVG

```html
<!-- Canvas: grafik berbasis piksel via JavaScript -->
<canvas id="myCanvas" width="400" height="300">
  Browser kamu tidak mendukung canvas.
</canvas>

<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  
  // Gambar persegi panjang merah
  ctx.fillStyle = '#ff5533';
  ctx.fillRect(50, 50, 200, 150);
  
  // Gambar teks
  ctx.fillStyle = 'white';
  ctx.font = '24px Arial';
  ctx.fillText('HTML5 Canvas!', 80, 130);
</script>
```

---

## 🔍 DOCTYPE HTML5 — Mengapa Sangat Pendek?

Ini adalah pertanyaan yang sering muncul:

```html
<!-- DOCTYPE HTML 4.01 — panjang dan membingungkan -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">

<!-- DOCTYPE XHTML 1.0 — bahkan lebih panjang -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<!-- DOCTYPE HTML5 — sesederhana ini -->
<!DOCTYPE html>
```

**Mengapa HTML5 DOCTYPE sangat pendek?**

DOCTYPE lama mereferensikan Document Type Definition (DTD) — file eksternal yang mendefinisikan aturan bahasa. HTML5 **tidak menggunakan DTD** karena spesifikasinya terlalu kompleks untuk didefinisikan dalam DTD.

DOCTYPE HTML5 bukan lagi "deklarasi tipe dokumen" yang sebenarnya — ia hanya sebuah **mantra warisan** yang memberitahu browser untuk masuk ke *Standards Mode*, bukan *Quirks Mode*.

Tim HTML5 membuatnya sepanjang `<!DOCTYPE html>` — minimum yang diperlukan agar browser masuk ke Standards Mode, dan mudah diingat.

---

## ⚠ Kesalahan Umum

### Kesalahan 1: Menggunakan `<section>` sebagai pengganti `<div>` generik

```html
<!-- ❌ SALAH: section tanpa heading — bukan section yang tepat -->
<section class="wrapper">
  <div class="card">...</div>
  <div class="card">...</div>
</section>

<!-- ✅ BENAR: section harus punya heading dan konten tematik -->
<section>
  <h2>Produk Terbaru</h2>
  <div class="card">...</div>
  <div class="card">...</div>
</section>

<!-- ✅ BENAR: div untuk container tanpa makna semantik -->
<div class="wrapper">
  <div class="card">...</div>
  <div class="card">...</div>
</div>
```

### Kesalahan 2: Menggunakan `<article>` untuk semua konten

```html
<!-- ❌ SALAH: article untuk konten yang tidak mandiri -->
<article class="nav-item">
  <a href="/tentang">Tentang Kami</a>
</article>

<!-- ✅ BENAR: article untuk konten yang bisa berdiri sendiri -->
<article>
  <h2>Cara Membuat Nasi Goreng</h2>
  <p>Resep ini bisa dibagikan langsung...</p>
</article>
```

### Kesalahan 3: Lebih dari satu `<main>` per halaman

```html
<!-- ❌ SALAH -->
<main>Konten 1</main>
<main>Konten 2</main>

<!-- ✅ BENAR: hanya satu main per halaman -->
<main>
  <section>Konten 1</section>
  <section>Konten 2</section>
</main>
```

---

## ✨ Best Practice

- ✅ Selalu gunakan `<!DOCTYPE html>` di baris pertama
- ✅ Gunakan elemen semantik HTML5 (`<header>`, `<nav>`, `<main>`, dll) — bukan `<div>` untuk segalanya
- ✅ Setiap `<section>` idealnya memiliki heading (`<h2>`, `<h3>`, dst)
- ✅ `<main>` hanya boleh ada satu per halaman
- ✅ Gunakan `<article>` hanya untuk konten yang bisa berdiri sendiri (bisa dibagikan langsung)
- ✅ Gunakan `<figure>` + `<figcaption>` untuk gambar yang memiliki caption
- ❌ Jangan gunakan `<section>` hanya sebagai pengganti `<div>` generik

---

## 🎯 Mini Challenge

Buat struktur HTML5 lengkap untuk halaman blog dengan kriteria:
- Header berisi logo dan navigasi
- Hero section
- Daftar 3 artikel terbaru (masing-masing dengan tanggal menggunakan `<time>`)
- Sidebar dengan "Artikel Terpopuler"
- Footer dengan copyright

Gunakan hanya elemen semantik HTML5 yang tepat.

---

## 🧪 Quiz

**1.** Elemen mana yang boleh ada LEBIH dari satu dalam satu halaman?
- A. `<main>`
- B. `<body>`
- C. `<header>` ✅
- D. `<html>`

**2.** Untuk menampilkan video tanpa plugin Flash di HTML5, elemen apa yang digunakan?
- A. `<embed>`
- B. `<object>`
- C. `<video>` ✅
- D. `<media>`

**3.** Mengapa DOCTYPE HTML5 sangat pendek dibanding versi sebelumnya?
- A. Untuk menghemat bandwidth
- B. Karena HTML5 tidak butuh DTD eksternal — hanya mantra agar browser masuk Standards Mode ✅
- C. Karena W3C terburu-buru
- D. Karena HTML5 lebih sederhana dari HTML 4

**4.** `<input type="email">` di HTML5 melakukan apa secara otomatis?
- A. Mengirim email langsung
- B. Memvalidasi format email sebelum form di-submit ✅
- C. Membuka aplikasi email
- D. Mengenkripsi data

---

## 📚 Ringkasan

| Pilar HTML5 | Contoh |
|---|---|
| **Semantik** | `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>` |
| **Multimedia** | `<video>`, `<audio>`, `<canvas>`, `<svg>` |
| **Form canggih** | `type="email"`, `type="date"`, `required`, `pattern` |
| **API browser** | Geolocation, Local Storage, Web Workers, WebSocket |
| **DOCTYPE** | `<!DOCTYPE html>` — singkat dan mudah diingat |

---

## ➡ Pelajaran Berikutnya

Kamu sudah tahu HTML5 dengan baik. Sekarang pertanyaan besar: **apa yang sebenarnya terjadi** ketika browser membaca file HTML kamu? Bagaimana teks yang kamu tulis berubah menjadi halaman visual yang bisa diklik?

**[Lanjut: Browser Rendering →](/bab1/browser-rendering/)**
