---
title: "Challenge Collection"
description: Kumpulan tantangan pemecahan masalah (Problem-Based Challenge) Mini Project untuk menguji keahlian HTML dalam berbagai skenario kompleks.
---

Tantangan di BAB 12 ini tidak lagi menanyakan definisi tag, melainkan menguji **kemampuanmu menerjemahkan masalah bisnis menjadi struktur kode HTML yang tepat**.

---

## 🔴 Challenge 1: Debugging Dokumen Rusak (25 Poin)

Sebuah startup menyerahkan berkas HTML halaman produk yang tidak bisa diindeks oleh Google dan mengalami kerusakan tata letak di smartphone. Temukan **6 kesalahan fatal** pada kode di bawah ini:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Produk</title>
  <meta name="viewport" content="width=320, user-scalable=no">
</head>
<body>
  <div id="header">
    <div id="nav"><a href="/home">Home</a></div>
  </div>
  
  <div id="main">
    <h1>Katalog Sepatu</h1>
    <img src="sepatu.jpg">
    <p>Sepatu olahraga kualitas tinggi.</p>
    
    <div id="header"> <!-- Kesalahan ID? -->
      <h2>Ulasan Pembeli</h2>
    </div>
    
    <form action="buy.php">
      <input type="text" placeholder="Nama Anda">
      <button onclick="submit()">Beli Sekarang</button>
    </form>
  </div>
</body>
</html>
```

---

## 🟡 Challenge 2: Merancang Arsitektur HTML (25 Poin)

Sebuah restoran lokal ingin membuat halaman menu digital. Mereka memiliki kebutuhan:
1. Header situs dengan logo dan tombol "Pesan Sekarang".
2. Seksi promo khusus hari ini.
3. Seksi menu Makanan Utama dan Minuman (dilengkapi nama, foto, deskripsi singkat, harga, dan label "Pedas/Vegetarian").
4. Seksi jam operasional dan peta lokasi toko.

**Tugasmu:** Buatlah kerangka tag semantik HTML-nya saja (tanpa isi paragraf panjang) yang memenuhi kebutuhan restoran tersebut!

---

## 🟠 Challenge 3: Merancang Form Survey Multi-Seksi (25 Poin)

Buatlah formulir survei kepuasan pelanggan yang terdiri dari:
- Identitas responden (Nama & Email).
- Skala kepuasan layanan (Radio Button 1–5 dalam `<fieldset>`).
- Fitur favorit yang paling sering digunakan (Checkbox).
- Saran & Kritik (`<textarea>` minimal 20 karakter).
- Checkbox persetujuan kerahasiaan data (`required`).

---

## ⚫ Challenge 4: Refactor Halaman Berita Kompleks (25 Poin)

Ubah struktur berita di bawah ini agar memenuhi standar SEO dan Aksesibilitas tinggi (Gunakan `<article>`, `<header>`, `<time>`, `<figure>`, `<figcaption>`, dan `<address>`):

```html
<div>
  <h2>SMK Nusantara Juara LKS Web Technologies 2026</h2>
  <p>Diterbitkan tanggal 10 Agustus 2026 oleh Penulis Redaksi</p>
  <img src="juara.jpg">
  <p>Foto penyerahan piala LKS tingkat nasional.</p>
  <p>Tim siswa RPL SMK Nusantara berhasil meraih juara pertama...</p>
</div>
```

---

**[Lanjut: Error Corner →](/bab12/error-corner/)**
