---
title: "Lab 1 — Syntax & Structure"
description: Lab Debugging 1 — Menemukan dan memperbaiki kesalahan sintaksis, tag tidak ditutup, nesting ilegal, dan deklarasi doctype yang rusak.
---

## 🔬 CHALLENGE 1.1 — Tag Menggantung & Nesting Ilegal

### Scenario
Seorang siswa kelas X membuat halaman berita sederhana. Saat dibuka di browser, paragraf kedua secara misterius masuk ke dalam tabel dan warna teks menjadi tidak konsisten.

### Expected Behavior
Tabel data siswa tampil rapi terpisah, dan paragraf penjelas berada di luar tabel sebagai bagian dari teks artikel utama.

### Broken Code
```html
<article>
  <h2>Data Prestasi Siswa</h2>
  <p>Berikut adalah tabel daftar siswa berprestasi:
  <table>
    <tr><th>Nama</th><th>Kelas</th></tr>
    <tr><td>Budi</td><td>RPL 1</td></tr>
  </table>
  </p>
</article>
```

### Symptoms
W3C Validator melaporkan error: `Stray start tag table` dan `Cannot recover after last error`.

---

### 🕵️ Investigation & Hints
1. *Apakah elemen `<p>` diizinkan membungkus elemen block-level seperti `<table>`?*
2. *Perhatikan di mana tag `<p>` dibuka dan di mana ia ditutup.*

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<article>
  <h2>Data Prestasi Siswa</h2>
  <p>Berikut adalah tabel daftar siswa berprestasi:</p>
  
  <table>
    <thead>
      <tr>
        <th scope="col">Nama</th>
        <th scope="col">Kelas</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Budi</td>
        <td>RPL 1</td>
      </tr>
    </tbody>
  </table>
</article>
```

**Alasan Teknis**:
Dalam spesifikasi HTML5, elemen `<p>` (Paragraf) hanya boleh menampung konten *phrasing/inline content*. Elemen `<table>` adalah *block-level element*. Ketika browser menemukan tag `<table>` di dalam `<p>`, browser secara otomatis menutup `<p>` secara paksa, sehingga penutup `</p>` di bawah tabel menjadi *stray tag* (tag menggantung) yang memicu error validasi.

---

## 🔬 CHALLENGE 1.2 — Quirks Mode akibat Missing Doctype

### Scenario
Sebuah halaman web tampil dengan ukuran font yang aneh dan jarak margin/padding yang tidak sesuai dengan aturan CSS modern.

### Broken Code
```html
<html lang="id">
<head>
  <title>Halaman Profil</title>
</head>
<body>
  <h1>Selamat Datang</h1>
</body>
</html>
```

### Symptoms
Di Chrome DevTools Console muncul peringatan: `Document is rendered in Quirks Mode`.

---

### 💡 Fix & Technical Reasoning

```html
<!-- ✅ SOLUTION -->
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Halaman Profil</title>
</head>
<body>
  <h1>Selamat Datang</h1>
</body>
</html>
```

**Alasan Teknis**:
Tanpa deklarasi `<!DOCTYPE html>` di baris paling pertama, browser menganggap dokumen tersebut adalah dokumen HTML jadul dari era 1990-an dan mengaktifkan **Quirks Mode**. Di mode ini, browser mengabaikan standar CSS modern demi mendukung ketiadaan spesifikasi lama.

---

**[Lanjut: Lab 2 — Navigation & Links →](/bab14/lab-2-text-links/)**
