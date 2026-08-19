---
title: "URL Relatif vs Absolut"
description: Memahami perbedaan penulisan alamat absolut dan relatif serta navigasi folder menggunakan file path.
---

Saat menentukan destinasi tautan di atribut `href`, kita harus menuliskan alamat **URL (Uniform Resource Locator)** secara tepat. HTML mendukung dua jenis penulisan URL: **Absolute URL** dan **Relative URL**.

---

## 🌐 1. Absolute URL (Tautan Global)

**Absolute URL** adalah alamat lengkap yang menunjuk ke suatu halaman web di internet. Alamat ini menyertakan protokol (`https://`) dan nama domain server tujuan.

- **Kapan Digunakan**: Saat kita ingin membuat tautan ke website eksternal (situs milik orang lain).

```html
<!-- Mengarah ke website eksternal W3C -->
<a href="https://validator.w3.org">Uji Validasi HTML</a>
```

Jika kamu lupa menuliskan `https://` di depan domain (misalnya hanya menulis `href="validator.w3.org"`), browser akan mengira itu adalah nama file lokal di komputermu dan tautannya akan rusak (broken link).

---

## 📁 2. Relative URL (Tautan Lokal)

**Relative URL** adalah alamat yang menunjuk ke file lain di dalam proyek website-mu sendiri. Penulisan alamat ini tidak memerlukan protokol maupun domain, melainkan didasarkan pada **posisi file tujuan terhadap file saat ini**.

- **Kapan Digunakan**: Untuk menghubungkan halaman-halaman internal di dalam website-mu sendiri (misalnya menghubungkan halaman Home ke halaman About).

```html
<!-- Mengarah ke file index.html yang berada di folder yang sama -->
<a href="index.html">Kembali ke Beranda</a>
```

---

## 🗂️ Navigasi Folder Menggunakan File Path

Saat bekerja dengan banyak file, kita sering meletakkan file di dalam sub-folder tertentu. Untuk menulis relative path secara benar, kita menggunakan simbol navigasi berikut:

### Simbol 1 — Satu Titik (`.`)
Menandakan **direktori/folder saat ini**.
- *Contoh*: `href="./tentang.html"` artinya cari file `tentang.html` di dalam folder yang sama dengan file yang sedang aktif.

### Simbol 2 — Dua Titik (`..`)
Menandakan **naik satu tingkat ke folder induk (parent directory)**.
- *Contoh*: `href="../index.html"` artinya keluar dari folder saat ini terlebih dahulu, lalu cari file `index.html` di luar.

---

## 🗺️ Ilustrasi Struktur Folder Proyek

Perhatikan struktur folder di bawah ini:

```text
proyek-web/
├── index.html            (Halaman Beranda)
├── tentang.html          (Halaman Tentang)
└── artikel/
    ├── berita-satu.html  (Halaman Artikel 1)
    └── berita-dua.html   (Halaman Artikel 2)
```

Mari kita buat tautan relative path berdasarkan struktur di atas:

### Kasus A: Dari `index.html` ingin membuka `tentang.html` (folder yang sama)
```html
<a href="./tentang.html">Tentang Kami</a>
<!-- Atau langsung tanpa titik: -->
<a href="tentang.html">Tentang Kami</a>
```

### Kasus B: Dari `index.html` ingin membuka `berita-satu.html` (masuk ke dalam folder `artikel`)
```html
<a href="./artikel/berita-satu.html">Baca Berita 1</a>
```

### Kasus C: Dari `berita-satu.html` ingin kembali ke `index.html` (keluar dari folder `artikel` ke folder induk `proyek-web`)
```html
<!-- Naik satu tingkat (keluar dari folder artikel), lalu cari index.html -->
<a href="../index.html">Kembali ke Beranda</a>
```

Memahami cara kerja relative path (`.` dan `..`) adalah kemampuan wajib yang akan terus kamu gunakan di semua proyek pembuatan website modern!

**[Lanjut: Atribut target →](/bab3/atribut-target/)**
