---
title: "Apa itu Metadata?"
description: Memahami metadata sebagai informasi tentang dokumen, perbedaan antara content dan metadata, serta anatomi lengkap elemen head dalam dokumen HTML.
---

Sebelum masuk ke tag-tag spesifik, kita perlu memahami satu konsep yang menjadi fondasi seluruh bab ini: **apa itu metadata?**

---

## 📚 Metadata = Informasi tentang Informasi

"Meta" dalam bahasa Yunani berarti "tentang" atau "di atas". Jadi **metadata** secara harfiah berarti **data tentang data** — informasi yang mendeskripsikan sebuah konten, bukan konten itu sendiri.

**Analogi: Sebuah Buku**

Bayangkan kamu memegang sebuah buku di toko buku:

| Informasi | Jenis | Di mana? |
|---|---|---|
| Isi cerita | **Content** | Di dalam halaman buku |
| Judul buku | **Metadata** | Sampul depan |
| Nama penulis | **Metadata** | Sampul depan |
| ISBN | **Metadata** | Punggung buku / barcode |
| Kategori (Fiksi, Non-fiksi) | **Metadata** | Label rak / katalog |
| Jumlah halaman | **Metadata** | Halaman copyright |
| Tahun terbit | **Metadata** | Halaman copyright |

Kamu bisa mengetahui banyak tentang sebuah buku **tanpa membaca isinya** — karena metadata sudah memberikan gambaran yang cukup.

HTML bekerja persis seperti itu.

---

## 🌐 Metadata dalam Konteks HTML

Sebuah halaman HTML punya dua lapisan informasi:

**1. Content — Apa yang dilihat pengguna**
```html
<body>
  <h1>Portfolio Rizki Pratama</h1>
  <p>Saya adalah junior web developer dari Jakarta.</p>
</body>
```

**2. Metadata — Apa yang mendeskripsikan halaman kepada mesin**
```html
<head>
  <title>Rizki Pratama — Junior Web Developer</title>
  <meta charset="UTF-8" />
  <meta name="description" content="Portfolio Rizki Pratama, siswa SMK RPL yang membangun karier di web development." />
  <meta name="author" content="Rizki Pratama" />
</head>
```

Content adalah untuk pengguna. Metadata adalah untuk **browser, search engine, social media, dan teknologi lain** yang perlu memahami halaman sebelum atau tanpa menampilkannya kepada pengguna.

---

## 🏗️ Anatomi `<head>` vs `<body>`

```html
<!DOCTYPE html>
<html lang="id">

  <head>
    <!-- Zona metadata: tidak ditampilkan sebagai konten -->
    <!-- Informasi TENTANG dokumen ini -->
    
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rizki Pratama — Junior Web Developer</title>
    <meta name="description" content="Portfolio junior web developer..." />
    <link rel="icon" href="/favicon.ico" />
  </head>

  <body>
    <!-- Zona konten: ditampilkan kepada pengguna -->
    <!-- Informasi yang ADA DI halaman ini -->
    
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  </body>

</html>
```

**`<head>` adalah:**
- Tempat browser mendapatkan konfigurasi halaman
- Tempat search engine mendapatkan deskripsi halaman
- Tempat media sosial mendapatkan preview link
- Tempat stylesheet dan script dimuat
- **Bukan** tempat menyimpan konten yang ingin disembunyikan dari pengguna

**`<body>` adalah:**
- Konten yang ditampilkan kepada pengguna
- Struktur visual halaman

> **Penting:** `<head>` bukan "kotak tersembunyi" untuk menyimpan konten. Metadata yang ada di `<head>` memang tidak ditampilkan sebagai konten, tapi ia bisa *tetap terlihat* oleh mesin dan developer yang membuka DevTools.

---

## 👀 Siapa yang Membaca Metadata?

Metadata di `<head>` dibaca oleh berbagai "konsumen":

| Konsumen | Apa yang dibaca | Untuk apa |
|---|---|---|
| **Browser** | charset, viewport, title | Menampilkan halaman dengan benar |
| **Google/Bing** | title, description, canonical | Menentukan judul & snippet di hasil pencarian |
| **WhatsApp/Facebook** | Open Graph tags | Preview judul, gambar, deskripsi saat link dibagikan |
| **Twitter/X** | Twitter Card tags | Preview di tweet |
| **Screen reader** | title, lang | Mengumumkan judul halaman dan bahasa |
| **Browser tab** | title | Teks di tab browser |
| **Bookmark** | title | Nama bookmark default |

---

## 📋 Apa Saja yang Ada di `<head>`?

Secara umum, elemen-elemen yang bisa ada di `<head>`:

```html
<head>
  <!-- 1. Encoding karakter — SELALU yang pertama -->
  <meta charset="UTF-8" />

  <!-- 2. Viewport — konfigurasi tampilan mobile -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- 3. Judul halaman — terlihat di tab dan hasil pencarian -->
  <title>Rizki Pratama — Junior Web Developer</title>

  <!-- 4. Deskripsi — snippet di hasil pencarian -->
  <meta name="description" content="Portfolio web developer..." />

  <!-- 5. Kontrol crawler search engine -->
  <meta name="robots" content="index, follow" />

  <!-- 6. Favicon — ikon di tab browser -->
  <link rel="icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- 7. Canonical URL — URL resmi halaman ini -->
  <link rel="canonical" href="https://rizkipratama.com/" />

  <!-- 8. Stylesheet eksternal -->
  <link rel="stylesheet" href="/style.css" />

  <!-- 9. Open Graph — untuk social media preview -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Rizki Pratama — Junior Web Developer" />
  <meta property="og:description" content="Portfolio web developer..." />
  <meta property="og:image" content="https://rizkipratama.com/og-image.png" />
  <meta property="og:url" content="https://rizkipratama.com/" />

  <!-- 10. Preload resource penting -->
  <link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin />
</head>
```

Semua ini akan kita bahas satu per satu di halaman-halaman berikutnya.

---

## 🤔 Refleksi Awal

Sebelum melanjutkan, renungkan:

*"Jika pengguna hanya melihat `<body>`, mengapa kita perlu mempelajari `<head>`?"*

Karena pengguna bukan satu-satunya yang mengunjungi website kamu. **Google, bot media sosial, screen reader, dan browser itu sendiri** adalah "konsumen" yang membaca `<head>` untuk memahami halamanmu. Pengalaman pengguna dimulai jauh sebelum mereka membuka websitemu — dimulai dari saat mereka melihat website kamu di hasil pencarian Google.

---

**[Lanjut: Elemen title & charset →](/bab9/title-charset/)**
