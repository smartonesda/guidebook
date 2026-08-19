---
title: "Struktur Dokumen HTML"
description: Memahami setiap bagian dari dokumen HTML — DOCTYPE, html, head, body — beserta alasan keberadaannya dan cara menulisnya dengan benar.
---

Setiap file HTML yang kamu buat harus mengikuti struktur tertentu. Bukan karena aturan yang sewenang-wenang, tapi karena setiap bagian memiliki **tujuan yang jelas** dan memengaruhi cara browser memproses halamanmu.

---

## 🎯 Tujuan Pembelajaran

- Menulis struktur dokumen HTML yang lengkap dan benar dari memori
- Memahami fungsi setiap bagian dokumen: DOCTYPE, `<html>`, `<head>`, `<body>`
- Menjelaskan perbedaan `<head>` (metadata) vs `<body>` (konten)
- Menulis semua elemen `<head>` yang penting beserta alasannya
- Memahami mengapa urutan elemen di `<head>` itu penting

---

## 🧠 Teori: Anatomi Dokumen HTML

Dokumen HTML lengkap terdiri dari empat lapisan utama:

```
Lapisan 1: DOCTYPE — "Saya adalah HTML5"
Lapisan 2: <html>  — Wadah seluruh dokumen
Lapisan 3: <head>  — Informasi tentang dokumen (tidak terlihat)
Lapisan 4: <body>  — Konten yang dilihat pengguna
```

---

## 🌍 Analogi: Buku Teks

| Bagian Buku | Analogi HTML |
|---|---|
| **Sampul** (ISBN, penerbit, tahun terbit) | `<!DOCTYPE html>` + `<html lang="id">` |
| **Halaman balik sampul** (judul, hak cipta, kata kunci) | `<head>` dengan meta tags |
| **Isi buku** (semua yang pembaca baca) | `<body>` |
| **Daftar isi** | Navigasi dalam `<body>` |

Pembaca tidak perlu melihat ISBN untuk menikmati isi buku — tapi perpustakaan dan penerbit membutuhkannya. Begitu pula `<head>` — tidak terlihat pengguna, tapi penting untuk browser dan mesin pencari.

---

## 🖥 Diagram: Peta Dokumen HTML Lengkap

```
<!DOCTYPE html>
├── [Deklarasi type: ini adalah dokumen HTML5]
│
<html lang="id">
├── [Root element: wadah seluruh dokumen]
├── [lang="id": bahasa konten adalah Indonesia]
│
├── <head>
│   ├── [Semua informasi TENTANG halaman — tidak terlihat pengguna]
│   │
│   ├── <meta charset="UTF-8" />
│   │   └── [Wajib pertama: encoding karakter]
│   │
│   ├── <meta name="viewport" content="width=device-width, initial-scale=1.0" />
│   │   └── [Wajib kedua: tampilan di mobile]
│   │
│   ├── <title>Judul Halaman</title>
│   │   └── [Tampil di tab browser, bookmark, hasil Google]
│   │
│   ├── <meta name="description" content="Deskripsi 150-160 karakter." />
│   │   └── [Tampil di bawah judul di hasil Google]
│   │
│   ├── <link rel="icon" href="favicon.ico" />
│   │   └── [Ikon kecil di tab browser]
│   │
│   └── <link rel="stylesheet" href="style.css" />
│       └── [CSS diunduh dan diproses]
│
└── <body>
    ├── [Semua konten yang DILIHAT pengguna]
    │
    ├── <header>...</header>
    ├── <main>...</main>
    ├── <footer>...</footer>
    │
    └── <script src="app.js" defer></script>
        └── [JS di akhir body, atau dengan defer]
```

---

## 💻 Bagian 1: `<!DOCTYPE html>`

```html
<!DOCTYPE html>
```

### Apa yang terjadi tanpa DOCTYPE?

Browser masuk ke **Quirks Mode** — mode kompatibilitas warisan tahun 1990-an yang meniru bug browser lama. Dalam Quirks Mode:
- Box model berbeda (padding dihitung berbeda)
- Beberapa properti CSS tidak bekerja seperti yang diharapkan
- Layout bisa terlihat berbeda antar browser

### Cara memverifikasi mode browser:

```javascript
// Buka Console DevTools, ketik:
document.compatMode
// "CSS1Compat" = Standards Mode ✅
// "BackCompat"  = Quirks Mode  ❌
```

### Aturan DOCTYPE:
- ✅ Harus di baris **paling pertama** file — tidak ada spasi atau karakter sebelumnya
- ✅ Tidak punya tag penutup
- ✅ Tidak case-sensitive: `<!DOCTYPE html>`, `<!doctype html>`, `<!Doctype Html>` semua valid
- ✅ Konvensi: tulis persis `<!DOCTYPE html>`

---

## 💻 Bagian 2: `<html lang="...">`

```html
<html lang="id">
```

`<html>` adalah **root element** — elemen induk dari seluruh dokumen. Tidak ada HTML yang valid di luar tag ini.

### Atribut `lang` — Wajib Ada!

Atribut `lang` memberitahu browser (dan software lain) dalam bahasa apa konten halaman ditulis.

**Dampak `lang` yang benar:**

```
1. AKSESIBILITAS
   Screen reader (VoiceOver, NVDA, JAWS) menggunakan lang
   untuk menentukan cara pelafalan kata.
   
   Tanpa lang="id":
   Screen reader mungkin membaca "selamat" dengan aksen Inggris
   → pengguna tunanetra tidak bisa memahami konten

2. SEO
   Google menggunakan lang untuk:
   - Menentukan bahasa halaman
   - Menampilkan hasil di pencarian berbahasa Indonesia
   - Mendukung hreflang untuk situs multibahasa

3. SPELL CHECK
   Browser menggunakan lang untuk menentukan kamus
   spell-check yang digunakan di form input

4. AUTO-TRANSLATE
   Browser seperti Chrome menggunakan lang untuk
   mendeteksi kapan harus menawarkan terjemahan
```

### Kode Bahasa Valid

| Bahasa | Kode | Contoh Penggunaan |
|---|---|---|
| Indonesia | `id` | `<html lang="id">` |
| Inggris | `en` | `<html lang="en">` |
| Inggris (Amerika) | `en-US` | `<html lang="en-US">` |
| Inggris (Britania) | `en-GB` | `<html lang="en-GB">` |
| Jepang | `ja` | `<html lang="ja">` |
| Arab | `ar` | `<html lang="ar">` |
| Mandarin (Simplified) | `zh-Hans` | `<html lang="zh-Hans">` |

### Mengubah Bahasa untuk Bagian Tertentu

```html
<html lang="id">
  <body>
    <p>Ini teks dalam bahasa Indonesia.</p>
    
    <!-- Kutipan dalam bahasa lain -->
    <blockquote lang="en">
      <p>"The only way to learn a new programming language is
          by writing programs in it."</p>
      <cite>— Dennis Ritchie</cite>
    </blockquote>
    
    <p>Kembali ke Bahasa Indonesia.</p>
  </body>
</html>
```

---

## 💻 Bagian 3: `<head>` — Kepala Dokumen

`<head>` adalah wadah metadata — informasi **tentang** halaman, bukan **isi** halaman.

### Urutan Elemen di `<head>` Itu Penting!

```html
<head>
  <!-- 1. CHARSET — HARUS PALING PERTAMA -->
  <meta charset="UTF-8" />
  
  <!-- 2. VIEWPORT — segera setelah charset -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- 3. TITLE — setelah dua meta di atas -->
  <title>Judul Halaman yang Deskriptif — Nama Situs</title>
  
  <!-- 4. META SEO -->
  <meta name="description" content="Deskripsi 150-160 karakter." />
  
  <!-- 5. FAVICON -->
  <link rel="icon" type="image/png" href="favicon.png" />
  
  <!-- 6. CSS — sebelum body agar tidak ada FOUC -->
  <link rel="stylesheet" href="style.css" />
  
  <!-- 7. SCRIPT dengan defer — opsional di head -->
  <!-- <script src="app.js" defer></script> -->
</head>
```

### Mengapa `charset` Harus Pertama?

Browser perlu tahu encoding **sebelum** ia mulai membaca karakter apapun — termasuk karakter di dalam `<title>`. Jika `<title>` berisi karakter non-ASCII (huruf beraksent, karakter Asia) dan charset belum dideklarasikan, browser bisa salah menginterpretasi karakter tersebut.

:::danger
**Jangan lakukan ini:**
```html
<head>
  <title>Selamat Datang — Café Nusantara</title>  <!-- dibaca dulu! -->
  <meta charset="UTF-8" />  <!-- terlambat — karakter "é" sudah salah dibaca -->
</head>
```

**Lakukan ini:**
```html
<head>
  <meta charset="UTF-8" />  <!-- dibaca pertama -->
  <title>Selamat Datang — Café Nusantara</title>  <!-- aman -->
</head>
```
:::

### Penjelasan Setiap Elemen `<head>`

#### `<meta charset="UTF-8">`

```html
<meta charset="UTF-8" />
```

| Properti | Nilai |
|---|---|
| **Fungsi** | Mendefinisikan encoding karakter dokumen |
| **UTF-8** | Universal encoding yang mendukung semua bahasa + emoji |
| **Alternatif** | ISO-8859-1 (Latin), ASCII (hanya 128 karakter) |
| **Wajib?** | Ya — selalu sertakan |
| **Posisi** | Harus paling pertama di `<head>` |

#### `<meta name="viewport">`

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

| Nilai Atribut | Penjelasan |
|---|---|
| `width=device-width` | Gunakan lebar layar perangkat sebagai lebar viewport |
| `initial-scale=1.0` | Jangan zoom in/out saat pertama load |

Tanpa viewport meta: browser mobile akan mengira halaman selebar 980px dan memperkecilnya agar muat di layar → teks sangat kecil, tidak bisa dibaca.

#### `<title>`

```html
<title>HTML Guidebook — BAB 1: HTML Fundamentals</title>
```

`<title>` tampil di:
1. Tab browser (pengguna bisa identifikasi tab yang tepat)
2. Hasil pencarian Google (judul biru yang bisa diklik)
3. Bookmark/favorit
4. Saat dibagikan di media sosial (jika tidak ada Open Graph)

**Tips menulis `<title>` yang baik:**

| ✅ Contoh Baik | ❌ Contoh Buruk |
|---|---|
| `HTML Guidebook — BAB 1: Fundamentals` | `Untitled Document` |
| `Cara Buat Nasi Goreng — Blog Masak` | `Page 1` |
| `Profil — Budi Santoso Developer` | `HTML` |
| Panjang 50–60 karakter | > 70 karakter (terpotong di Google) |
| Unik per halaman | Sama di semua halaman |

#### `<meta name="description">`

```html
<meta
  name="description"
  content="Panduan lengkap HTML dari nol untuk siswa SMK RPL. Mudah dipahami, contoh nyata, latihan interaktif."
/>
```

- Tampil di bawah judul di hasil pencarian Google
- Panjang ideal: **150–160 karakter**
- Harus mendeskripsikan isi halaman secara akurat
- Tidak langsung mempengaruhi ranking, tapi mempengaruhi **click-through rate**

---

## 💻 Bagian 4: `<body>` — Tubuh Dokumen

`<body>` adalah wadah untuk **semua konten yang dilihat dan diinteraksi pengguna**.

### Apa yang Boleh Ada di `<body>`?

```html
<body>
  <!-- ✅ Elemen struktural HTML5 -->
  <header>
    <h1>Judul Website</h1>
    <nav>...</nav>
  </header>
  
  <main>
    <!-- ✅ Heading hierarchy -->
    <h1>Judul Utama</h1>    <!-- hanya 1 per halaman -->
    <h2>Sub-judul</h2>
    <h3>Sub-sub-judul</h3>
    
    <!-- ✅ Konten -->
    <p>Teks paragraf.</p>
    <img src="gambar.jpg" alt="Deskripsi gambar" />
    <a href="/halaman-lain">Tautan</a>
    
    <!-- ✅ Daftar -->
    <ul><li>Item</li></ul>
    <ol><li>Item berurutan</li></ol>
    
    <!-- ✅ Tabel -->
    <table>...</table>
    
    <!-- ✅ Form -->
    <form>...</form>
  </main>
  
  <footer>
    <p>&copy; 2026 HTML Guidebook</p>
  </footer>
  
  <!-- ✅ Script di akhir body untuk performa terbaik -->
  <script src="app.js"></script>
</body>
```

### Yang TIDAK Boleh di `<body>`

```html
<!-- ❌ SALAH: meta tags di body -->
<body>
  <meta charset="UTF-8" />    <!-- ini harusnya di <head> -->
  <title>Halaman</title>      <!-- ini harusnya di <head> -->
</body>
```

### Mengapa Script di Akhir `<body>`?

```
Browser membaca HTML dari atas ke bawah:

<head>
  <script src="app.js"></script>  ← Browser berhenti di sini!
                                     Download + eksekusi app.js
                                     Baru lanjut baca <body>
                                     Pengguna melihat halaman kosong

<body>
  <h1>Ini baru ditampilkan setelah script selesai</h1>
</body>
```

```
Solusi: script di akhir body

<body>
  <h1>Ini tampil segera</h1>       ← Tampil duluan
  <p>Konten ini juga tampil</p>    ← Tampil duluan
  
  <script src="app.js"></script>   ← Baru dieksekusi setelah
                                     semua konten tampil
</body>
```

---

## 💻 Template Starter Lengkap

Simpan ini sebagai template untuk setiap project baru:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Judul Halaman — Nama Situs</title>
    <meta
      name="description"
      content="Deskripsi halaman 150-160 karakter yang menjelaskan isi konten secara akurat."
    />
    <link rel="icon" type="image/png" href="favicon.png" />
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>

    <header>
      <nav>
        <a href="/">Beranda</a>
        <a href="/tentang">Tentang</a>
        <a href="/kontak">Kontak</a>
      </nav>
    </header>

    <main>
      <h1>Judul Utama Halaman</h1>
      <p>Konten halaman di sini.</p>
    </main>

    <footer>
      <p>&copy; 2026 Nama Situs. Semua hak dilindungi.</p>
    </footer>

    <script src="app.js"></script>
  </body>
</html>
```

---

## ⚠ Kesalahan Umum

### 1. DOCTYPE Tidak di Baris Pertama

```html
<!-- ❌ SALAH: ada spasi/baris kosong sebelum DOCTYPE -->

<!DOCTYPE html>
<html>
```

```html
<!-- ✅ BENAR: DOCTYPE benar-benar di baris pertama -->
<!DOCTYPE html>
<html lang="id">
```

### 2. Tidak Ada `lang` pada `<html>`

```html
<!-- ❌ KURANG BAIK: tanpa lang -->
<html>

<!-- ✅ BENAR: selalu sertakan lang -->
<html lang="id">
```

### 3. `charset` Bukan yang Pertama di `<head>`

```html
<!-- ❌ SALAH -->
<head>
  <title>Café Jawa</title>         <!-- dibaca dulu! -->
  <meta charset="UTF-8" />        <!-- terlambat -->
</head>

<!-- ✅ BENAR -->
<head>
  <meta charset="UTF-8" />        <!-- selalu pertama -->
  <title>Café Jawa</title>        <!-- aman -->
</head>
```

### 4. `<title>` yang Tidak Deskriptif

```html
<!-- ❌ SALAH: title generik -->
<title>Halaman 1</title>
<title>Untitled</title>

<!-- ✅ BENAR: title yang spesifik dan informatif -->
<title>Cara Membuat Nasi Goreng Spesial — Blog Masak Nusantara</title>
```

### 5. Duplikat `<head>` atau `<body>`

```html
<!-- ❌ SALAH: tidak boleh ada dua head atau dua body -->
<html>
  <head>...</head>
  <head>...</head>  <!-- tidak valid! -->
  <body>...</body>
</html>
```

---

## ✨ Best Practice

- ✅ Selalu mulai dengan `<!DOCTYPE html>` di baris pertama
- ✅ Selalu sertakan `lang` pada `<html>` dengan kode yang tepat
- ✅ Urutan di `<head>`: charset → viewport → title → meta lain → CSS
- ✅ `<title>` yang unik, deskriptif, 50-60 karakter
- ✅ `<meta name="description">` 150-160 karakter untuk setiap halaman
- ✅ Script di akhir `<body>` atau dengan atribut `defer`
- ❌ Jangan letakkan konten yang terlihat di dalam `<head>`
- ❌ Jangan duplikasi `<html>`, `<head>`, atau `<body>`

---

## 🎯 Mini Challenge

Tulis dokumen HTML lengkap dari memori (tanpa melihat referensi) dengan spesifikasi:
- Halaman untuk restoran bernama "Warung Makan Sederhana"
- Bahasa: Indonesia
- Title: "Menu — Warung Makan Sederhana"
- Description: Deskripsi singkat yang informatif
- Header dengan nama restoran sebagai `<h1>`
- Main dengan tiga section: Menu, Lokasi, Jam Buka
- Footer dengan copyright

Setelah selesai, validasi di `validator.w3.org`.

---

## 🧪 Quiz

**1.** Di mana `<meta charset="UTF-8">` harus ditempatkan?
- A. Di awal `<body>`
- B. Di mana saja di dalam `<head>`
- C. Sebagai elemen pertama di dalam `<head>`, sebelum `<title>` ✅
- D. Di akhir `<head>`

**2.** Fungsi utama `<meta name="viewport">` adalah...
- A. Membuat halaman bisa di-zoom
- B. Memastikan halaman tampil dengan benar di perangkat mobile ✅
- C. Mengatur ukuran gambar
- D. Mempercepat loading halaman

**3.** Mengapa script sebaiknya diletakkan di akhir `<body>`?
- A. Agar script bisa mengakses DOM yang sudah selesai dibangun ✅ (salah satu alasan)
- B. Karena ini satu-satunya tempat script bisa bekerja
- C. Agar konten HTML tampil lebih dulu sebelum script dieksekusi ✅ (alasan lain)
- D. A dan C benar ✅

**4.** Mana yang BENAR tentang `<head>`?
- A. Konten di `<head>` tampil di bagian atas halaman
- B. `<head>` berisi metadata yang tidak terlihat pengguna ✅
- C. `<head>` adalah opsional di HTML5
- D. `<head>` hanya boleh berisi `<title>`

---

## 📚 Ringkasan

| Elemen | Fungsi | Wajib? |
|---|---|---|
| `<!DOCTYPE html>` | Standards Mode | Ya |
| `<html lang="id">` | Root element + bahasa | Ya |
| `<meta charset="UTF-8">` | Encoding karakter | Ya |
| `<meta name="viewport">` | Tampilan mobile | Sangat dianjurkan |
| `<title>` | Judul di tab + Google | Ya |
| `<meta name="description">` | Deskripsi di Google | Dianjurkan |
| `<link rel="stylesheet">` | Menghubungkan CSS | Sesuai kebutuhan |
| `<body>` | Wadah konten terlihat | Ya |
| Script di akhir `<body>` | Performa JS | Best practice |

---

## ➡ Pelajaran Berikutnya

Kamu sudah memahami struktur dokumen HTML secara keseluruhan. Sekarang kita akan masuk ke level yang lebih detail: **anatomi dari setiap elemen HTML** — apa itu tag, elemen, atribut, dan semua terminologi yang harus kamu kuasai.

**[Lanjut: Anatomi Elemen HTML →](/bab1/anatomy-element/)**
