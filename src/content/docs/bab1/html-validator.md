---
title: "HTML Validator"
description: Memvalidasi HTML dengan benar — menggunakan W3C Markup Validation Service, memahami error, dan membangun kebiasaan menulis HTML yang valid.
---

Menulis HTML yang "berjalan di browser" ≠ menulis HTML yang **valid**. Browser modern sangat toleran terhadap kesalahan — tapi ketergantungan pada toleransi ini adalah jebakan bagi developer.

HTML Validator adalah alat yang mengecek apakah HTML-mu sesuai dengan standar resmi W3C/WHATWG.

---

## 🎯 Tujuan Pembelajaran

- Menggunakan W3C Markup Validation Service dengan efektif
- Membaca dan memahami pesan error validator
- Mengidentifikasi dan memperbaiki 12 error HTML paling umum
- Membangun kebiasaan validasi sebagai bagian dari workflow

---

## 🧠 Teori: Mengapa Validasi Penting?

### Browser vs Validator: Dua Standar Berbeda

Browser dirancang untuk **tidak pernah crash** — bahkan dengan HTML yang rusak sekalipun. Algoritma error recovery browser akan mencoba "memperbaiki" HTML yang salah.

Masalahnya: browser yang berbeda mungkin "memperbaiki" dengan cara yang berbeda.

```
HTML yang salah:
<p>Paragraf <strong>penting</p></strong>

Chrome mungkin menghasilkan DOM:
<p>Paragraf <strong>penting</strong></p>

Firefox mungkin menghasilkan DOM:
<p>Paragraf </p><strong>penting</strong>

Safari mungkin menghasilkan DOM yang berbeda lagi...
```

Validator memastikan HTML-mu menghasilkan **DOM yang sama** di semua browser.

---

## 🌍 Analogi: Dokter vs Pasien yang Terlihat Sehat

Browser seperti dokter yang berkata: "Kamu terlihat sehat, tidak ada gejala yang terlihat."

Validator seperti pemeriksaan kesehatan lengkap dengan tes darah, X-ray, dan MRI — ia mencari masalah yang belum menunjukkan gejala tapi akan menjadi serius di kemudian hari.

---

## 💻 Cara Menggunakan W3C Validator

**URL:** [validator.w3.org](https://validator.w3.org)

### Metode 1: Validate by URI (URL website)

```
1. Buka validator.w3.org
2. Tab "Validate by URI"
3. Masukkan URL website: https://situsmu.com
4. Klik "Check"
```

Cocok untuk: halaman yang sudah live di internet

### Metode 2: Validate by File Upload

```
1. Buka validator.w3.org
2. Tab "Validate by File Upload"
3. Klik "Choose File" → pilih file .html kamu
4. Klik "Check"
```

Cocok untuk: file yang belum di-deploy

### Metode 3: Validate by Direct Input (Paling Mudah untuk Belajar)

```
1. Buka validator.w3.org
2. Tab "Validate by Direct Input"
3. Copy-paste kode HTML kamu ke text area
4. Klik "Check"
```

Cocok untuk: testing cepat saat belajar

---

## 🖥 Memahami Hasil Validasi

### Hasil: Dokumen Valid ✅

```
Document checking completed. No errors or warnings to show.
```

Ini yang kamu inginkan. Artinya HTML-mu sesuai standar.

### Hasil: Ada Error ❌

```
Error: End tag "li" seen, but there were open elements.
At line 23, column 5.

Error: Unclosed element "ul".
At line 18, column 3.

Warning: Section lacks heading. Consider using h2-h6 elements.
At line 45, column 1.
```

Perhatikan:
- **Error** = Harus diperbaiki (melanggar standar HTML)
- **Warning** = Sebaiknya diperhatikan (bukan error teknis, tapi best practice)
- **Line/Column** = Di mana masalah terdeteksi

---

## 💻 Panduan Error yang Paling Umum

### Error 1: Tag Tidak Ditutup

```
Error: End tag for "p" omitted.
```

```html
<!-- ❌ SALAH -->
<p>Paragraf tanpa tag penutup

<!-- ✅ BENAR -->
<p>Paragraf dengan tag penutup.</p>
```

### Error 2: Urutan Penutup Tag Salah

```
Error: End tag "strong" violates nesting rules.
```

```html
<!-- ❌ SALAH: strong ditutup setelah p -->
<p>Teks <strong>penting</p></strong>

<!-- ✅ BENAR: LIFO -->
<p>Teks <strong>penting</strong></p>
```

### Error 3: Elemen `<img>` Tanpa `alt`

```
Error: An "img" element must have an "alt" attribute,
except under certain conditions.
```

```html
<!-- ❌ SALAH -->
<img src="foto.jpg" />

<!-- ✅ BENAR: gambar informatif -->
<img src="foto-tim.jpg" alt="Tim HTML Guidebook berfoto bersama" />

<!-- ✅ BENAR: gambar dekoratif — alt kosong (bukan dihilangkan!) -->
<img src="dekorasi.png" alt="" />
```

### Error 4: Nilai Atribut Tanpa Tanda Kutip

```
Error: Attribute value using " " not allowed here.
```

```html
<!-- ❌ SALAH -->
<img src=foto.jpg alt=Foto saya>

<!-- ✅ BENAR -->
<img src="foto.jpg" alt="Foto saya" />
```

### Error 5: Karakter Spesial Tanpa Entity

```
Error: ">" is not allowed in attribute values.
Warning: Using ">" in attribute value is not allowed.
```

```html
<!-- ❌ SALAH: & langsung di href -->
<a href="halaman.php?nama=Budi&usia=17">Link</a>

<!-- ✅ BENAR: gunakan &amp; untuk & -->
<a href="halaman.php?nama=Budi&amp;usia=17">Link</a>
```

### Error 6: Heading Melompat Level

```
Warning: Section lacks heading (h2-h6).
```

```html
<!-- ❌ KURANG BAIK: dari h1 langsung ke h4 -->
<h1>Judul Utama</h1>
<h4>Sub-judul</h4>

<!-- ✅ BENAR: hierarki berurutan -->
<h1>Judul Utama</h1>
  <h2>Sub-judul Level 2</h2>
    <h3>Sub-sub-judul Level 3</h3>
```

### Error 7: Lebih dari Satu `<h1>` per Halaman

```
Warning: Consider using the h1 element as a top-level heading only.
```

```html
<!-- ❌ KURANG BAIK untuk SEO: dua h1 -->
<h1>Judul Utama</h1>
<article>
  <h1>Judul Artikel</h1>  <!-- sebaiknya h2 -->
</article>

<!-- ✅ BENAR -->
<h1>Judul Utama Halaman</h1>
<article>
  <h2>Judul Artikel</h2>
</article>
```

### Error 8: `<p>` di Dalam `<ul>` atau `<ol>`

```
Error: Element "p" not allowed as child of element "ul".
```

```html
<!-- ❌ SALAH -->
<ul>
  <p>Item pertama</p>
  <li>Item kedua</li>
</ul>

<!-- ✅ BENAR -->
<ul>
  <li>Item pertama</li>
  <li>Item kedua</li>
</ul>
```

### Error 9: `<button>` di Dalam `<a>` (atau Sebaliknya)

```
Error: Element "button" must not appear as a descendant of "a".
```

```html
<!-- ❌ SALAH -->
<a href="/daftar">
  <button>Daftar Sekarang</button>
</a>

<!-- ✅ BENAR: gunakan salah satu -->
<a href="/daftar" class="btn">Daftar Sekarang</a>
<!-- atau -->
<button onclick="window.location='/daftar'">Daftar Sekarang</button>
```

### Error 10: Duplikat `id`

```
Error: Duplicate ID "header".
```

```html
<!-- ❌ SALAH -->
<header id="header">...</header>
<footer id="header">...</footer>  <!-- id duplikat! -->

<!-- ✅ BENAR -->
<header id="site-header">...</header>
<footer id="site-footer">...</footer>
```

### Error 11: Atribut yang Tidak Valid untuk Elemen Tersebut

```
Error: Attribute "href" not allowed on element "p" at this point.
```

```html
<!-- ❌ SALAH: p tidak punya atribut href -->
<p href="/halaman-lain">Teks ini seharusnya link</p>

<!-- ✅ BENAR: gunakan a untuk link -->
<a href="/halaman-lain">Teks ini adalah link</a>
```

### Error 12: Form Tanpa `action` (Warning)

```
Warning: The "action" attribute on the "form" element is obsolete.
```

```html
<!-- Form modern dengan JavaScript handler -->
<form>  <!-- valid jika dihandle via JS -->
  ...
</form>

<!-- Form tradisional yang mengirim ke server -->
<form action="/proses.php" method="post">
  ...
</form>
```

---

## 💻 Validasi Otomatis dengan VS Code Extensions

Kamu bisa mendapatkan feedback validasi langsung saat mengetik:

### 1. HTMLHint

```
Install: Cari "HTMLHint" di VS Code Extensions
Fungsi: Menampilkan ikon merah/kuning saat ada error
```

### 2. W3C Web Validator

```
Install: Cari "W3C Web Validator" di VS Code Extensions
Fungsi: Validasi via API W3C langsung dari VS Code
```

### 3. Error Lens

```
Install: Cari "Error Lens" di VS Code Extensions
Fungsi: Menampilkan pesan error langsung di baris kode
```

---

## 🛠 Checklist Validasi Sebelum Deploy

Gunakan checklist ini setiap kali selesai menulis HTML:

```
CHECKLIST VALIDASI HTML

Struktur Dasar:
☐ <!DOCTYPE html> di baris pertama
☐ <html lang="id"> dengan atribut lang
☐ <meta charset="UTF-8"> sebagai elemen pertama di <head>
☐ <meta name="viewport"> ada di <head>
☐ <title> ada, deskriptif, 50-60 karakter
☐ Tidak ada duplikat <html>, <head>, <body>

Elemen:
☐ Semua tag pembuka punya tag penutup (kecuali void elements)
☐ Urutan penutup tag benar (LIFO)
☐ Semua <img> punya atribut alt
☐ Tidak ada duplikat id di satu halaman
☐ Hierarki heading benar (h1 → h2 → h3, tidak melompat)

Atribut:
☐ Semua nilai atribut dalam tanda kutip ganda
☐ Karakter & dalam URL ditulis &amp;
☐ Tidak ada atribut yang tidak valid untuk elemen tersebut

Validasi Resmi:
☐ Tidak ada Error di validator.w3.org
☐ Warning sudah diperiksa dan ditangani
```

---

## ✨ Best Practice

- ✅ Validasi setiap file HTML sebelum di-publish
- ✅ Perbaiki semua **Error** tanpa terkecuali
- ✅ Review semua **Warning** — tidak semua harus diperbaiki, tapi harus dimengerti
- ✅ Install HTMLHint di VS Code untuk feedback real-time
- ✅ Validasi ulang setelah setiap perubahan besar
- ❌ Jangan andalkan browser untuk "memperbaiki" HTML yang salah
- ❌ Jangan skip validasi karena "tampak baik di Chrome"

---

## 🎯 Mini Challenge

Validasi kode HTML berikut menggunakan validator.w3.org. Identifikasi dan perbaiki **semua** error yang ditemukan:

```html
<html>
<head>
<title>Halaman Test</title>
</head>
<body>
<h1>Judul Halaman
<h3>Sub-judul</h3>
<p>Paragraf dengan <strong>penekanan</p></strong>
<img src="gambar.jpg">
<ul>
  <p>Item satu</p>
  <li>Item dua</li>
</ul>
<a href="halaman.php?a=1&b=2">Link</a>
<p>Teks dengan karakter > dan <</p>
<footer>
  Copyright 2026
</footer>
</body>
```

**Petunjuk:** Ada minimal 10 error/warning. Dapatkah kamu menemukan semuanya sebelum menjalankan validator?

---

## 🧪 Quiz

**1.** Apa perbedaan antara "Error" dan "Warning" di hasil validator?
- A. Tidak ada perbedaan
- B. Error melanggar standar HTML (harus diperbaiki); Warning adalah best practice (sebaiknya diperhatikan) ✅
- C. Error hanya untuk void elements
- D. Warning lebih serius dari Error

**2.** Mengapa browser yang "menerima" HTML yang salah bisa berbahaya?
- A. Browser bisa crash
- B. Browser berbeda bisa "memperbaiki" HTML yang salah dengan cara yang berbeda, menghasilkan tampilan yang tidak konsisten ✅
- C. HTML yang salah lebih lambat
- D. Pengguna bisa melihat kode sumber

**3.** Metode validasi mana yang paling cocok untuk file HTML yang belum di-deploy?
- A. Validate by URI
- B. Validate by File Upload ✅ (atau Direct Input)
- C. Hanya bisa validasi setelah live
- D. Validasi tidak diperlukan selama browser menampilkannya

**4.** Error "Element p not allowed as child of ul" berarti...
- A. `<p>` tidak valid di HTML5
- B. `<p>` tidak boleh langsung berada di dalam `<ul>` — harus menggunakan `<li>` ✅
- C. `<ul>` tidak mendukung konten teks
- D. Validator salah

---

## 📚 Ringkasan

| Aspek | Detail |
|---|---|
| **Alat utama** | validator.w3.org |
| **Tiga metode** | URI, File Upload, Direct Input |
| **Error** | Harus diperbaiki — melanggar standar |
| **Warning** | Sebaiknya diperhatikan — best practice |
| **Error paling umum** | Tag tidak ditutup, img tanpa alt, heading melompat |
| **Tools VS Code** | HTMLHint, W3C Web Validator, Error Lens |

---

## ➡ Pelajaran Berikutnya

Kamu sudah menguasai semua teori dan konsep dasar. Saatnya menerapkan semuanya dalam skenario nyata — menganalisis halaman web yang ada dan membangun halaman profil dari nol.

**[Lanjut: Studi Kasus →](/bab1/studi-kasus/)**
