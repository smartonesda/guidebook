---
title: "Studi Kasus"
description: Melengkapi head portfolio dengan metadata lengkap — menganalisis kondisi awal yang kurang, menyusun strategi, dan membangun head yang benar untuk portfolio v0.9.
---

> *"Struktur HTML yang semantic sudah kita miliki. Sekarang kita beri halaman itu identitas yang bisa dikenali oleh mesin, search engine, dan platform media sosial."*

---

## 🎯 Tujuan Studi Kasus

Di studi kasus ini kita akan:
- Mengaudit `<head>` portfolio yang sudah ada dari BAB 8.
- Mengidentifikasi metadata yang hilang atau tidak lengkap.
- Menambahkan metadata yang tepat secara bertahap.
- Memahami **mengapa** setiap metadata ditambahkan, bukan sekadar menambahkannya.

---

## 🔍 Kondisi `<head>` Portfolio v0.8 (Sebelum)

Di akhir BAB 8, `<head>` portfolio kita masih sangat minimal:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rizki Pratama — Junior Web Developer</title>
  <meta name="description" 
        content="Portfolio Rizki Pratama, siswa SMK RPL yang membangun karir di web development." />
</head>
```

**Yang sudah ada:** charset ✓, viewport ✓, title ✓, description ✓  
**Yang kurang:** author, robots, canonical, favicon, Open Graph, Twitter Card, theme-color

---

## 🔍 Analisis: Apa yang Terjadi Tanpa Metadata Lengkap?

**Tanpa canonical:** Jika portfolio diakses via `rizkipratama.com`, `www.rizkipratama.com`, dan `rizkipratama.com/?ref=twitter` — search engine menganggap tiga halaman berbeda.

**Tanpa favicon:** Tab browser hanya menampilkan ikon generik browser. Saat pengguna punya banyak tab terbuka, portfolio kamu tidak mudah ditemukan kembali.

**Tanpa Open Graph:** Saat kamu membagikan link portfoliomu di WhatsApp grup atau LinkedIn — yang muncul hanya URL polos. Tidak ada preview, tidak ada gambar, tidak ada deskripsi. Kemungkinan diklik jauh lebih rendah.

**Tanpa Twitter Card:** Saat di-share di Twitter/X, tampil sebagai teks kecil tanpa gambar.

---

## ✨ Portfolio v0.9 — `<head>` yang Lengkap

```html
<!DOCTYPE html>
<html lang="id">
<head>

  <!-- ===================== FUNDAMENTAL ===================== -->
  <!-- Selalu pertama: charset sebelum apapun -->
  <meta charset="UTF-8" />
  
  <!-- Viewport: atur lebar sesuai layar perangkat -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />


  <!-- ===================== IDENTITAS HALAMAN ===================== -->
  <!-- Title: muncul di tab browser, bookmark, dan hasil pencarian -->
  <!-- Format: [Halaman Spesifik] — [Brand/Nama] -->
  <title>Rizki Pratama — Junior Web Developer · Jakarta</title>
  
  <!-- Description: snippet yang muncul di hasil pencarian Google -->
  <!-- Target: 120-160 karakter, relevan dengan isi halaman -->
  <meta 
    name="description" 
    content="Portfolio Rizki Pratama, junior web developer dari Jakarta. Temukan proyek HTML, CSS, form interaktif, dan semantic HTML dari siswa SMK RPL yang sedang membangun karier." 
  />
  
  <!-- Author: pembuat dokumen ini -->
  <meta name="author" content="Rizki Pratama" />
  
  <!-- Robots: izinkan Google mengindeks dan mengikuti link -->
  <meta name="robots" content="index, follow" />


  <!-- ===================== CANONICAL ===================== -->
  <!-- Beritahu Google: ini adalah URL resmi halaman ini -->
  <link rel="canonical" href="https://rizkipratama.com/" />


  <!-- ===================== FAVICON ===================== -->
  <!-- ICO: fallback untuk browser lama -->
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <!-- SVG: format modern yang scale sempurna -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <!-- Apple Touch Icon: saat website di-save ke homescreen iOS -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
  <!-- Theme color: warna toolbar Chrome di Android -->
  <meta name="theme-color" content="#0ea5e9" />


  <!-- ===================== OPEN GRAPH ===================== -->
  <!-- Untuk preview link di Facebook, WhatsApp, Telegram, LinkedIn -->
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Portfolio Rizki Pratama" />
  <meta property="og:locale" content="id_ID" />
  <meta property="og:url" content="https://rizkipratama.com/" />
  <meta 
    property="og:title" 
    content="Rizki Pratama — Junior Web Developer" 
  />
  <meta 
    property="og:description" 
    content="Portfolio junior web developer dari Jakarta. Proyek HTML, CSS, dan JavaScript dibangun dari nol oleh siswa SMK RPL." 
  />
  <!-- Gambar preview: ukuran ideal 1200×630 piksel -->
  <meta property="og:image" content="https://rizkipratama.com/og-image.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:alt" content="Halaman portfolio Rizki Pratama, Junior Web Developer" />


  <!-- ===================== TWITTER CARD ===================== -->
  <!-- Untuk preview link di Twitter/X -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta 
    name="twitter:title" 
    content="Rizki Pratama — Junior Web Developer" 
  />
  <meta 
    name="twitter:description" 
    content="Portfolio junior web developer dari Jakarta. Proyek HTML, CSS, dan JavaScript dari siswa SMK RPL." 
  />
  <meta name="twitter:image" content="https://rizkipratama.com/og-image.png" />
  <meta name="twitter:image:alt" content="Portfolio Rizki Pratama" />

</head>
<body>
  <!-- isi halaman di sini -->
</body>
</html>
```

---

## 🔍 Analisis: Mengapa Setiap Bagian Ada?

### Mengapa `<meta charset>` harus pertama?

Browser mem-parse HTML secara berurutan dari atas ke bawah. Jika charset ditemukan setelah karakter non-ASCII (misalnya di dalam `<title>`), browser mungkin sudah salah menginterpretasikan karakter tersebut. Meletakkan charset pertama memastikan encoding diketahui sebelum satu karakter pun dibaca.

### Mengapa `og:url` harus sama dengan canonical?

Keduanya menyatakan URL "resmi" halaman — untuk konteks yang berbeda. `canonical` untuk search engine, `og:url` untuk platform media sosial. Mereka harus konsisten.

### Mengapa gambar OG harus URL absolut?

Bot media sosial (Facebook, WhatsApp) mengunjungi URL dari server mereka sendiri — bukan dari browser pengguna. URL relatif seperti `/og-image.png` tidak memberikan informasi cukup untuk bot mengunduh gambar tersebut. URL absolut dengan `https://` selalu bekerja.

### Mengapa ada dua tag untuk title (og:title dan twitter:title)?

Meskipun Twitter bisa membaca og:title sebagai fallback, beberapa platform mengutamakan tag spesifiknya sendiri. Menulis keduanya memastikan tampilan yang optimal di semua platform.

---

## ✅ Checklist Verifikasi

```
☐ charset ada dan merupakan yang pertama di <head>
☐ viewport ada dengan nilai yang benar
☐ title informatif (50-60 karakter), bukan "Home" atau "Portfolio"
☐ description relevan dengan isi halaman (120-160 karakter)
☐ canonical menggunakan URL absolut dengan https://
☐ Favicon ada (minimal .ico)
☐ Semua og: tags menggunakan property="...", bukan name="..."
☐ og:image menggunakan URL absolut
☐ Semua URL di Open Graph menggunakan https://
☐ Cek preview di metatags.io atau opengraph.xyz
```

---

**[Lanjut: Mini Project →](/bab9/mini-project/)**
