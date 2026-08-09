---
title: "Mini Project"
description: Proyek refactor mandiri — membersihkan dan menstrukturkan ulang file HTML berantakan agar memenuhi standar Clean HTML, W3C Valid, dan Maintainable.
---

Saatnya menguji keterampilan refactor-mu!

Di Studi Kasus, kita sudah melihat bagaimana file HTML yang berantakan dibersihkan menjadi kode berstandar industri. Sekarang giliranmu melakukan audit dan refactor mandiri.

---

## 🎯 Deskripsi Mini Project

**HTML Code Cleanup & Refactor**

Kamu diberikan sebuah berkas HTML yang memiliki fungsionalitas dasar tetapi ditulis dengan sangat buruk (banyak kesalahan penulisan, tanpa indentasi, tag tidak ditutup, dan anti-pattern).

Tugasmu: **Ubah kode berantakan tersebut menjadi Clean, Valid W3C, Accessible, dan Maintainable HTML.**

---

## 📋 Requirements Wajib

### 1. Format & Indentasi (30 poin)
- [ ] Indentasi 2 spasi secara konsisten di seluruh dokumen.
- [ ] Semua tag dan atribut menggunakan huruf kecil (*lowercase*).
- [ ] Semua nilai atribut dibungkus dengan tanda kutip ganda (`"..."`).
- [ ] Seluruh tag pasangan memiliki tag penutup yang sah.

### 2. Semantik & Aksesibilitas (40 poin)
- [ ] Ganti `<div>` berlebihan dengan elemen semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- [ ] Urutan heading berurutan (`<h1>` → `<h2>` → `<h3>`), tanpa melompati tingkatan.
- [ ] Semua gambar (`<img>`) memiliki atribut `alt` yang sesuai.
- [ ] Setiap input formulir memiliki `<label>` yang terhubung via `for`↔`id`.
- [ ] Tombol form memiliki atribut `type` yang eksplisit.
- [ ] Link `target="_blank"` memiliki `rel="noopener noreferrer"`.

### 3. Performa & Validasi (30 poin)
- [ ] Tag `<img>` memiliki atribut `width`, `height`, dan `loading="lazy"` (kecuali gambar utama).
- [ ] Script JavaScript menggunakan atribut `defer` atau diletakkan di akhir `<body>`.
- [ ] **0 Error & 0 Warning** di W3C Validator (`validator.w3.org`).

---

## 💻 Kode Berantakan yang Harus Di-refactor

Salin kode di bawah ini ke editor VS Code-mu, lalu bersihkan:

```html
<!DOCTYPE HTML>
<HTML><HEAD><TITLE>Proyek Toko Buku</TITLE></HEAD>
<BODY>
<DIV CLASS="TOP">
<H1>Toko Buku Nusantara</H1>
<DIV><A HREF="#">Home</A> | <A HREF="#katalog">Katalog</A></DIV>
</DIV>
<HR>
<H4>Buku Populer</H4>
<DIV CLASS="BOX">
<IMG SRC="buku1.jpg">
<H3>Belajar HTML5</H3>
<P>Harga: Rp 75.000</P>
<A HREF="buy.html" TARGET="_blank">Beli</A>
</DIV>
<HR>
<H3 ID="katalog">Pesan Buku</H3>
<FORM ACTION="pesan.php">
<INPUT TYPE="text" PLACEHOLDER="Nama">
<INPUT TYPE="text" PLACEHOLDER="Judul Buku">
<BUTTON ONCLICK="kirim()">Kirim</BUTTON>
</FORM>
</BODY></HTML>
```

---

## 📊 Rubrik Penilaian

| Kriteria | Indikator Keberhasilan | Poin |
|---|---|---|
| **Clean Format** | Lowercase, 2 spasi indentasi, double quotes, tag ditutup. | 30 |
| **Semantik & A11y** | Header, nav, main, section, label form, alt text, rel external link. | 40 |
| **Validasi & Performa** | 0 Error W3C Validator, width/height img, defer script. | 30 |
| **Total** | | **100** |

---

**[Lanjut: Challenge →](/bab11/challenge/)**
