---
title: "Project 3 — Blog Article"
description: Mini Project 3 — Membangun halaman artikel blog teknis yang kaya fitur semantik, kutipan, blok kode, metadata artikel, dan sidebar artikel terkait.
---

## 📄 1. Project Brief

- **Project**: Halaman Artikel Blog Teknis (*Technical Blog Post*)
- **Level**: Intermediate
- **Estimasi Waktu**: 45–60 Menit

---

## 🎭 2. Scenario & Problem

Kamu sedang mengelola blog edukasi pemrograman sekolah. Kamu perlu menerbitkan sebuah artikel tutorial teknis berjudul *"Panduan Memahami HTML5 Semantic untuk Pemula"*. Artikel ini membutuhkan penataan teks yang rapi, penyorotan kode (*code snippet*), kutipan pakar, serta informasi penulis.

---

## 🎯 3. Goal & Target User

- **Goal**: Menampilkan artikel panjang yang nyaman dibaca, mudah ditelusuri (*skimmable*), dan ramah mesin pencari (SEO & Open Graph).
- **Target User**: Siswa pembaca blog, developer pemula, dan mesin pencari.

---

## 📋 4. Requirements Wajib

### A. Metadata & Open Graph Artikel
- [ ] Metadata `<title>` dan `<meta name="description">` khusus artikel.
- [ ] Tag Open Graph `<meta property="og:type" content="article">` lengkap dengan `og:title`, `og:image`, dan `og:description`.

### B. Struktur Artikel Semantik
- [ ] Artikel utama dibungkus oleh elemen `<article>`.
- [ ] Header artikel (`<article>` -> `<header>`) menampung Judul (`<h1>`), Nama Penulis (`<address>`/`<cite>`), dan Tanggal Publikasi (`<time datetime="...">`).
- [ ] Isi artikel menggunakan heading hierarkis (`<h2>`, `<h3>`).
- [ ] Blok Kode Menggunakan `<pre><code>`.
- [ ] Kutipan Penting Menggunakan `<blockquote>` dan `<cite>`.
- [ ] Sidebar (`<aside>`) berisi artikel terkait atau profil singkat penulis.

---

## 🧠 5. Concepts Used (BAB 1–11)

- **BAB 2**: Blok kode `<pre><code>`, kutipan `<blockquote>`, `<cite>`, `<mark>`.
- **BAB 8**: Semantik `<article>`, `<header>`, `<aside>`, `<footer>`, `<time>`.
- **BAB 9**: Metadata `og:type="article"`, `<time datetime="...">`.

---

## 🏗️ 6. Suggested Page Structure

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Panduan Memahami HTML5 Semantic — DevBlog</title>
  <meta property="og:type" content="article" />
  ...
</head>
<body>
  <header> (Site Header & Nav) </header>

  <main>
    <article>
      <header>
        <h1>Panduan Memahami HTML5 Semantic</h1>
        <p>Ditulis oleh <cite>Rizki Pratama</cite> pada <time datetime="2026-08-10">10 Agustus 2026</time></p>
      </header>

      <section> (Isi Artikel & Gambar) </section>
      <section> (Blok Kode <pre><code>) </section>
      <section> (Kutipan <blockquote>) </section>

      <footer> (Tag Artikel & Bio Penulis) </footer>
    </article>

    <aside aria-label="Artikel Terkait"> ... </aside>
  </main>

  <footer> (Site Footer) </footer>
</body>
</html>
```

---

## 🛠️ 7. Implementation Tasks

1. Buat file `blog-article.html`.
2. Pasang metadata Open Graph bertipe `article` di dalam `<head>`.
3. Bungkus seluruh tulisan di dalam tag `<article>`.
4. Tuliskan tanggal rilis menggunakan `<time datetime="2026-08-10">10 Agustus 2026</time>`.
5. Buat contoh potongan kode HTML menggunakan `<pre><code>&lt;header&gt;...&lt;/header&gt;</code></pre>`.
6. Tambahkan seksi `<aside>` di luar `<article>` untuk menampung daftar "Artikel Terkait".

---

## ✅ 8. Quality & Accessibility Checklist

```
[ ] Karakter khusus seperti < dan > di dalam kode di-encode menjadi &lt; dan &gt;.
[ ] Elemen <time> memiliki atribut datetime dengan format ISO 8601 (YYYY-MM-DD).
[ ] Og:type diisi dengan nilai "article".
[ ] Lolos uji 0 Error di validator.w3.org.
```

---

**[Lanjut: Project 4 — Product Showcase →](/bab12/project-4-product-showcase/)**
