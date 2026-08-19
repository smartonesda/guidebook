---
title: "Studi Kasus"
description: Menganalisis halaman web nyata dan membangun halaman profil developer dari nol — penerapan semua konsep BAB 1 dalam konteks yang realistis.
---

> *"Programmer yang baik tidak menulis kode dari imajinasi — mereka belajar dari kode yang ada, kemudian membuat yang lebih baik."*

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan studi kasus ini, kamu akan mampu:
- Menganalisis struktur HTML halaman web yang sudah ada.
- Mengidentifikasi masalah struktur dasar dan standar modern.
- Membangun kerangka halaman profil developer yang valid dari nol menggunakan elemen dasar.
- Menerapkan konsep heading, paragraph, komentar, dan indentation secara rapi.

---

## 🧠 Skenario: Audit Kode Pertama

Bayangkan kamu baru bergabung di sebuah tim proyek sekolah/magang sebagai junior web developer. Anggota tim memberikanmu sebuah file kode HTML halaman profil yang dibuat oleh pengembang sebelumnya. 

Tugas pertamamu adalah **melakukan audit** (memeriksa kesalahan) dan **membangun ulang** (*rebuild*) kerangka dasarnya agar valid sesuai standar W3C.

---

## 🔍 Bagian 1: Audit Kode yang Ada

### Kode yang Diberikan Tim

```html
<html>
<head>
<title>Profil Developer</title>
</head>
<body bgcolor="#f5f5f5">
<center>
<font face="Arial" size="6" color="#333">
<b>Rizki Pratama</b>
</font>
<br><br>
<font size="3">Junior Web Developer</font>
<br>
<font size="2" color="#888">Jakarta, Indonesia</font>
</center>

<hr>

<div id="about">
<font size="4"><b>Tentang Saya</b></font>
<br><br>
<p>Nama saya Rizki Pratama. Saya adalah seorang junior web developer yang passionate dalam membangun website yang indah dan fungsional. Saya memiliki pengalaman 1 tahun dalam web development.
<p>Saya sedang belajar HTML, CSS, dan JavaScript untuk meningkatkan kemampuan saya.
</div>

<div id="skills">
<font size="4"><b>Keahlian</b></font>
<br><br>
Keahlian saya adalah menulis kode HTML dasar, merapikan dokumen web, dan memeriksa keabsahan struktur tag.
</div>

<div id="contact">
<font size="4"><b>Kontak</b></font>
<br>
Email: rizki@example.com
<br>
GitHub: github.com/rizkipratama
</div>
</body>
</html>
```

---

## 🔍 Hasil Audit — Temukan Masalah Utama

Jika kode di atas dimasukkan ke dalam HTML Validator, ada banyak sekali aturan yang dilanggar:

1. **Tidak ada deklarasi `<!DOCTYPE html>`** di baris pertama. Ini membuat browser kebingungan dan memuat halaman dalam *Quirks Mode*.
2. **Tidak ada atribut `lang`** pada tag `<html>`.
3. **Tidak ada tag `<meta charset="UTF-8">`** di dalam `<head>` untuk memastikan pembacaan huruf dan simbol berjalan normal.
4. **Tidak ada tag `<meta name="viewport" ...>`** untuk mengatur responsivitas layar HP.
5. **Penggunaan atribut visual jadul** seperti `bgcolor` di tag `<body>`.
6. **Penggunaan tag yang sudah tidak diakui standar modern (deprecated)** seperti `<center>` dan `<font>` untuk mengatur tampilan. Layout dan warna seharusnya diatur oleh CSS nanti, bukan HTML.
7. **Penggunaan tag `<b>` untuk membuat judul**. Seharusnya gunakan tag heading (`<h1>`, `<h2>`) yang memiliki makna struktural.
8. **Tag paragraph `<p>` tidak ditutup** dengan penutupnya (`</p>`).

---

## 💻 Bagian 2: Rebuild — Membuat Kerangka Dasar yang Benar

Mari kita bangun ulang halaman di atas menggunakan **hanya tag dasar yang sudah dipelajari di BAB 1** (yaitu DOCTYPE, html, head, title, body, heading, paragraph, komentar, dan indentasi rapi):

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <!-- Metadata penting untuk browser -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
  </head>
  <body>

    <!-- ========== HEADER UTAMA ========== -->
    <!-- Di BAB 1, kita gunakan heading <h1> untuk judul halaman utama -->
    <h1>Rizki Pratama</h1>
    <p>Junior Web Developer | Jakarta, Indonesia</p>

    <!-- ========== KONTEN UTAMA ========== -->
    
    <!-- Tentang Saya -->
    <h2>Tentang Saya</h2>
    <p>
      Nama saya Rizki Pratama. Saya adalah seorang junior web developer yang 
      tertarik dalam merancang struktur halaman web secara rapi dan valid.
    </p>
    <p>
      Saat ini, saya sedang mempelajari dasar-dasar HTML Fundamentals 
      melalui HTML Guidebook untuk membangun pondasi karir magang saya.
    </p>

    <!-- Keahlian -->
    <h2>Keahlian Saya</h2>
    <p>
      Keahlian saya berfokus pada penyusunan kerangka dokumen web, 
      penerapan tag heading secara hierarkis, pemanfaatan komentar 
      untuk dokumentasi kode, dan validasi kode web berstandar W3C.
    </p>

    <!-- Kontak -->
    <h2>Kontak Saya</h2>
    <p>
      Kamu bisa menghubungi saya melalui surat elektronik di rizki@example.com 
      atau mengunjungi laman repositori saya di github.com/rizkipratama.
    </p>

    <!-- ========== FOOTER ========== -->
    <p>Dibuat oleh Rizki Pratama. Hak Cipta 2026.</p>

  </body>
</html>
```

---

## 🧠 Mengapa Struktur Rebuild di Atas Sangat Baik untuk BAB 1?

- **Valid 100%**: Kode di atas akan lolos uji W3C Validator dengan 0 error dan 0 warning.
- **Hierarki heading yang benar**: Halaman diawali `<h1>` sebagai judul utama, lalu diikuti `<h2>` untuk bagian sub-konten secara berurutan.
- **Pemisahan Konten**: Paragraf paragraf ditutup dengan benar menggunakan `</p>`.
- **Tidak mencuri materi bab selanjutnya**: Kita tidak menggunakan tag link (`<a>`), tag daftar (`<ul>`/`<li>`), atau tag semantik layout (`<header>`, `<main>`) karena materi-materi tersebut akan kita pelajari dan pasang secara bertahap pada bab berikutnya.

Kerangka portfolio di atas akan menjadi **bahan awal** kita. Di BAB 2, kita akan memperkaya isinya dengan format teks tebal, miring, dan tipografi menarik lainnya!

**[Lanjut: Mini Project →](/bab1/mini-project/)**
