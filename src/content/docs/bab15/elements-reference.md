---
title: "Kamus Elemen HTML"
description: Referensi ringkas seluruh elemen HTML5 per kategori — fungsi, contoh sintaks, atribut umum, dan kapan menggunakannya.
---

## 🏗️ 1. Structure & Sectioning Elements

### `<header>`
- **Fungsi**: Konten pengantar atau kelompok navigasi untuk situs atau seksi/artikel.
- **Penggunaan**: Header situs (logo + nav) atau header artikel (judul + meta rilis).
- **Contoh**: `<header><h1 class="logo">Web</h1><nav>...</nav></header>`

### `<nav>`
- **Fungsi**: Sekumpulan tautan navigasi utama yang signifikan.
- **Penggunaan**: Menu header, navigasi footer, breadcrumb, pagination.
- **Contoh**: `<nav aria-label="Navigasi utama"><a href="/">Home</a></nav>`

### `<main>`
- **Fungsi**: Membungkus konten utama dokumen (unik per halaman).
- **Aturan**: Hanya boleh 1 `<main>` yang terlihat per halaman.
- **Contoh**: `<main id="konten-utama" tabindex="-1">...</main>`

### `<section>`
- **Fungsi**: Pengelompokan tematik dari konten yang memiliki heading.
- **Aturan**: Wajib memiliki heading (`<h2>`–`<h6>`) di dalamnya.
- **Contoh**: `<section id="fitur" aria-labelledby="judul-fitur"><h2 id="judul-fitur">Fitur</h2></section>`

### `<article>`
- **Fungsi**: Konten mandiri yang bisa berdiri sendiri (dapat disindikasi).
- **Penggunaan**: Posting blog, kartu produk, ulasan, komentar, kartu proyek.
- **Contoh**: `<article class="post-card"><h3>Judul</h3><p>Isi...</p></article>`

### `<aside>`
- **Fungsi**: Konten pendukung/pelengkap yang berkaitan secara tidak langsung.
- **Penggunaan**: Sidebar, widget, catatan samping (*sidenotes*), iklan terkait.
- **Contoh**: `<aside aria-label="Artikel terkait"><h3>Terkait</h3>...</aside>`

### `<footer>`
- **Fungsi**: Catatan kaki/penutup situs atau seksi/artikel.
- **Penggunaan**: Info copyright, alamat `<address>`, navigasi sekunder.
- **Contoh**: `<footer><p>&copy; <time datetime="2026">2026</time></p></footer>`

---

## 📝 2. Text & Content Elements

| Tag | Fungsi Ringkas | Contoh Sintaks |
|---|---|---|
| `<h1>`–`<h6>` | Hirarki judul (h1 terbesar/utama) | `<h1>Judul Utama</h1>` |
| `<p>` | Paragraf teks biasa | `<p>Teks paragraf...</p>` |
| `<div>` | Generic block container (layout CSS) | `<div class="grid">...</div>` |
| `<span>` | Generic inline container (styling teks) | `<span class="highlight">teks</span>` |
| `<br>` | Break baris (*void element*) | `Teks baris 1<br />Teks baris 2` |
| `<hr>` | Pergeseran topik/thematic break | `<hr />` |
| `<pre>` | Teks format asli (mempertahankan spasi) | `<pre>Kode...</pre>` |
| `<blockquote>` | Blok kutipan panjang dari sumber eksternal | `<blockquote cite="URL"><p>Kutipan...</p></blockquote>` |
| `<cite>` | Merujuk nama karya/sumber kutipan | `<cite>Nama Buku/Penulis</cite>` |
| `<abbr>` | Singkatan/Akronim dengan tooltip | `<abbr title="Rekayasa Perangkat Lunak">RPL</abbr>` |
| `<time>` | Tanggal/Waktu bermakna mesin | `<time datetime="2026-08-10">10 Agt 2026</time>` |

---

## 📊 3. Lists & Tables

| Tag | Fungsi | Atribut Kunci |
|---|---|---|
| `<ul>` | List tidak terurut (bullet points) | — |
| `<ol>` | List terurut (nomor angka/huruf) | `type="1/a/A/i/I"`, `start="1"` |
| `<li>` | Item dalam list (`<ul>` atau `<ol>`) | — |
| `<dl>` | Description List (pasangan nama-nilai) | — |
| `<dt>` | Term / Nama dalam Description List | — |
| `<dd>` | Description / Nilai penjelas | — |
| `<table>` | Wadah tabel data terstruktur | — |
| `<caption>` | Judul/keterangan tabel data | — |
| `<thead>` | Baris kelompok header tabel | — |
| `<tbody>` | Baris kelompok isi data tabel | — |
| `<tfoot>` | Baris kelompok total/ringkasan tabel | — |
| `<tr>` | Baris tabel (Table Row) | — |
| `<th>` | Sel header tabel (Table Header) | `scope="col/row"`, `colspan`, `rowspan` |
| `<td>` | Sel data biasa (Table Data) | `colspan`, `rowspan` |

---

## 🖼️ 4. Multimedia & Embeds

| Tag | Fungsi | Atribut Wajib/Kunci |
|---|---|---|
| `<img>` | Gambar (*void element*) | `src`, `alt`, `width`, `height`, `loading="lazy/eager"` |
| `<figure>` | Container gambar/diagram ber-caption | — |
| `<figcaption>` | Keterangan judul gambar dalam figure | — |
| `<picture>` | Gambar responsif multi-sumber | Ditemani elemen `<source>` & `<img>` |
| `<video>` | Pemutar video HTML5 | `src`, `controls`, `width`, `height`, `poster` |
| `<audio>` | Pemutar suara HTML5 | `src`, `controls`, `autoplay`, `loop` |
| `<iframe>` | Menempelkan halaman/peta eksternal | `src`, `title`, `width`, `height`, `loading="lazy"` |

---

**[Lanjut: Kamus Atribut HTML →](/bab15/attributes-reference/)**
