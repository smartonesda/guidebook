---
title: "Error Corner"
description: Kesalahan paling umum dalam penulisan metadata HTML — dari urutan yang salah hingga keyword stuffing, URL relatif di Open Graph, dan mitos SEO yang menyesatkan.
---

---

## ❌ Kesalahan 1: `<meta charset>` Bukan yang Pertama

```html
<!-- ❌ SALAH: charset datang setelah title -->
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio — Rizki Pratama</title>  <!-- karakter mungkin salah dibaca -->
  <meta charset="UTF-8" />  <!-- terlambat! -->
</head>
```

```html
<!-- ✅ BENAR: charset selalu pertama -->
<head>
  <meta charset="UTF-8" />  <!-- browser tahu encoding sebelum baca apapun -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Portfolio — Rizki Pratama</title>
</head>
```

**Mengapa berbahaya:** Browser mem-parse HTML dari atas. Jika charset baru ditemukan setelah karakter diproses, karakter non-ASCII (seperti huruf beraksara atau emoji di `<title>`) bisa sudah salah dibaca.

---

## ❌ Kesalahan 2: `<title>` Terlalu Generik

```html
<!-- ❌ Tidak informatif sama sekali -->
<title>Home</title>
<title>Portfolio</title>
<title>Halaman Utama</title>
<title>Untitled</title>
```

```html
<!-- ✅ Spesifik, menyebut nama dan peran -->
<title>Rizki Pratama — Junior Web Developer · Jakarta</title>
<title>Proyek Website SMK — Rizki Pratama Portfolio</title>
```

**Mengapa penting:** "Home" di tab browser tidak membantu pengguna yang punya 20 tab terbuka mengidentifikasi website kamu. Di hasil pencarian Google, "Home" tidak memberi alasan apapun untuk diklik.

---

## ❌ Kesalahan 3: Keyword Stuffing di Meta Description

```html
<!-- ❌ SALAH: memenuhi description dengan keyword -->
<meta 
  name="description" 
  content="web developer web design HTML CSS JavaScript React portfolio Jakarta web developer murah profesional terpercaya jasa website" 
/>
```

```html
<!-- ✅ BENAR: deskripsi yang natural dan relevan -->
<meta 
  name="description" 
  content="Portfolio Rizki Pratama, junior web developer dari Jakarta. Proyek HTML, CSS, dan JavaScript yang dibangun dari nol selama belajar di SMK RPL." 
/>
```

**Mengapa salah:** Google tidak menggunakan meta description untuk ranking — jadi mengisi keyword tidak ada gunanya untuk SEO. Yang ada justru deskripsi terlihat spam dan mengurangi keinginan pengguna untuk mengklik.

---

## ❌ Kesalahan 4: Menggunakan `name="og:..."` untuk Open Graph

```html
<!-- ❌ SALAH: Open Graph menggunakan property, bukan name -->
<meta name="og:title" content="Portfolio Rizki" />
<meta name="og:description" content="Junior web developer" />
<meta name="og:image" content="https://example.com/og.png" />
```

```html
<!-- ✅ BENAR: Open Graph menggunakan property -->
<meta property="og:title" content="Portfolio Rizki" />
<meta property="og:description" content="Junior web developer" />
<meta property="og:image" content="https://example.com/og.png" />
```

**Mengapa berbahaya:** Platform media sosial membaca `property="og:..."` — bukan `name="og:..."`. Tag yang salah atributnya akan diabaikan sepenuhnya, dan preview link tidak akan muncul.

---

## ❌ Kesalahan 5: URL Relatif di Open Graph

```html
<!-- ❌ SALAH: URL relatif untuk og:image dan og:url -->
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="/index.html" />
<link rel="canonical" href="/index.html" />
```

```html
<!-- ✅ BENAR: selalu URL absolut -->
<meta property="og:image" content="https://rizkipratama.com/og-image.png" />
<meta property="og:url" content="https://rizkipratama.com/" />
<link rel="canonical" href="https://rizkipratama.com/" />
```

**Mengapa salah:** Bot media sosial (Facebook, WhatsApp) mengunjungi URL dari server mereka — bukan dari browser pengguna. URL relatif seperti `/og-image.png` tidak memberikan informasi lokasi server yang diperlukan untuk mengunduh gambar.

---

## ❌ Kesalahan 6: `user-scalable=no` di Viewport

```html
<!-- ❌ Melanggar aksesibilitas -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
```

```html
<!-- ✅ Biarkan pengguna bisa zoom -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

**Mengapa berbahaya:** Pengguna dengan gangguan penglihatan perlu bisa memperbesar teks. Menonaktifkan zoom adalah pelanggaran WCAG 1.4.4. Browser modern (Chrome, Safari) bahkan mengabaikan nilai ini untuk melindungi pengguna.

---

## ❌ Kesalahan 7: Mengira Banyak Meta Tag = SEO yang Baik

```html
<!-- ❌ Meta tag yang tidak ada gunanya atau sudah usang -->
<meta name="keywords" content="HTML, CSS, web, developer, portfolio" />
<meta name="generator" content="VS Code" />
<meta name="rating" content="general" />
<meta name="revisit-after" content="7 days" />
<meta name="language" content="Indonesian" />
```

```html
<!-- ✅ Hanya meta yang benar-benar digunakan -->
<meta name="description" content="..." />
<meta name="author" content="..." />
<meta name="robots" content="index, follow" />
```

**Penjelasan:**
- `keywords` — diabaikan oleh Google sejak 2009, dimanfaatkan untuk spam
- `generator` — tidak berguna untuk SEO
- `revisit-after` — tidak digunakan oleh crawler modern
- `language` — gunakan `lang` pada `<html>` sebagai gantinya

---

## ❌ Kesalahan 8: Title dan Description Tidak Konsisten dengan Konten

```html
<!-- ❌ Title dan description menjanjikan sesuatu yang tidak ada di halaman -->
<title>10 Tips Belajar JavaScript yang Wajib Diketahui Pemula</title>
<meta name="description" content="Panduan lengkap belajar JavaScript dari nol..." />
```

Tapi isi halaman hanya berisi:
```html
<body>
  <h1>Portfolio Saya</h1>
  <p>Halo, saya Rizki. Ini adalah portfolio saya.</p>
</body>
```

**Mengapa berbahaya:** Ini disebut *clickbait*. Pengguna merasa tertipu, langsung meninggalkan halaman (*bounce*). Google mencatat *bounce rate* yang tinggi dan bisa menurunkan ranking halaman tersebut. Lebih buruk lagi, ini merusak kepercayaan pengunjung terhadap kamu.

**Prinsip emas:** Title, description, dan konten halaman harus **konsisten dan saling mendukung**.

---

## ❌ Kesalahan 9: Semua Halaman Punya Title dan Description yang Sama

```html
<!-- Semua halaman punya head yang identik -->
<title>Portfolio Rizki Pratama</title>
<meta name="description" content="Portfolio Rizki Pratama, web developer." />
```

```html
<!-- ✅ Setiap halaman harus unik -->
<!-- Beranda -->
<title>Rizki Pratama — Junior Web Developer · Jakarta</title>
<meta name="description" content="Portfolio junior web developer dari Jakarta..." />

<!-- Halaman Proyek -->
<title>Proyek Web Development — Rizki Pratama Portfolio</title>
<meta name="description" content="Koleksi proyek web development Rizki Pratama: website sekolah, aplikasi absensi..." />

<!-- Halaman Detail Proyek -->
<title>Website SMK Nusantara — Proyek Rizki Pratama</title>
<meta name="description" content="Website profil SMK Nusantara yang responsif, dibangun dengan HTML5 dan CSS3..." />
```

---

**[Lanjut: Ringkasan →](/bab9/ringkasan/)**
