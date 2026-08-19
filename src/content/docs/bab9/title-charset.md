---
title: "Elemen title & charset"
description: Memahami secara mendalam fungsi elemen title dan meta charset — dua elemen paling fundamental dalam head HTML yang memengaruhi encoding teks dan identitas halaman.
---

## 📋 Elemen `<title>`

### Apa itu `<title>`?

`<title>` adalah elemen yang mendefinisikan **judul dokumen HTML**. Ia ditulis di dalam `<head>` dan tidak pernah ditampilkan langsung di dalam area konten halaman.

```html
<head>
  <title>Rizki Pratama — Junior Web Developer</title>
</head>
```

### Di Mana `<title>` Terlihat?

`<title>` muncul di banyak tempat yang sering tidak disadari:

**1. Tab Browser**
```
[  Rizki Pratama — Junior Web Developer  ] [  Gmail  ] [  GitHub  ]
```

**2. Hasil Pencarian Google**
```
Rizki Pratama — Junior Web Developer
https://rizkipratama.com
Portfolio junior web developer dari Jakarta yang...
```

**3. Bookmark**
Ketika pengguna mem-bookmark halamanmu, browser menggunakan `<title>` sebagai nama default bookmark.

**4. Judul Jendela Browser**
Di browser desktop, `<title>` ditampilkan di title bar jendela ketika tab tersebut aktif.

**5. History Browser**
Ketika pengguna menekan tombol Back dan melihat daftar riwayat, halaman ditampilkan dengan judul dari `<title>`.

### `<title>` vs `<h1>` — Perbedaan yang Wajib Dipahami

Ini adalah kebingungan paling umum pemula. Banyak yang mengira `<title>` dan `<h1>` harus sama persis atau bisa saling menggantikan.

**Mereka berbeda secara fundamental:**

| | `<title>` | `<h1>` |
|---|---|---|
| **Ada di mana?** | `<head>` (tidak ditampilkan) | `<body>` (ditampilkan) |
| **Terlihat oleh siapa?** | Browser tab, Google, bookmark | Pengunjung halaman |
| **Tujuan** | Mengidentifikasi dokumen | Heading utama konten |
| **Boleh lebih dari satu?** | Tidak (hanya satu per halaman) | Hanya satu per halaman (best practice) |
| **Panjang optimal** | 50–60 karakter | Bebas |

```html
<!-- Ini adalah dua hal yang berbeda -->
<head>
  <title>Cara Membuat Form HTML yang Aksesibel — Blog Rizki</title>
  <!--   ↑ untuk Google, tab, bookmark -->
</head>
<body>
  <h1>Cara Membuat Form HTML yang Aksesibel</h1>
  <!--  ↑ untuk pengunjung yang membaca halaman -->
</body>
```

`<title>` biasanya lebih panjang dan informatif karena harus mendeskripsikan halaman bahkan ketika pengguna belum membukanya (di hasil pencarian). `<h1>` lebih ringkas karena pengguna sudah berada di halaman.

### Menulis `<title>` yang Baik

**Format yang umum digunakan:**
```
[Judul Halaman] — [Nama Website/Brand]
[Judul Halaman] | [Nama Website/Brand]
```

**Contoh untuk portfolio:**
```html
<!-- ✅ Informatif dan spesifik -->
<title>Rizki Pratama — Junior Web Developer · Jakarta</title>

<!-- ✅ Untuk halaman detail proyek -->
<title>Website SMK Nusantara — Proyek Rizki Pratama</title>

<!-- ❌ Terlalu generik -->
<title>Home</title>
<title>Portfolio</title>
<title>Halaman 1</title>

<!-- ❌ Terlalu panjang (dipotong di hasil pencarian) -->
<title>Ini adalah halaman portfolio saya yang berisi semua proyek web development yang pernah saya kerjakan selama menjadi siswa SMK RPL di Jakarta</title>
```

**Panjang optimal:** 50–60 karakter. Lebih dari itu, Google akan memotong dan menambahkan "..." di hasil pencarian.

---

## 🔤 Elemen `<meta charset>`

### Apa itu Character Encoding?

Komputer menyimpan semua data sebagai angka biner (0 dan 1). Teks tidak terkecuali — setiap karakter direpresentasikan sebagai angka. **Character encoding** adalah sistem yang menentukan angka mana yang merepresentasikan karakter apa.

Bayangkan character encoding seperti **kunci sandi morse**: tanpa mengetahui kunci yang sama antara pengirim dan penerima, pesan tidak bisa diartikan dengan benar.

### Mengapa UTF-8?

```html
<meta charset="UTF-8" />
```

**UTF-8** (Unicode Transformation Format 8-bit) adalah encoding yang:
- Bisa merepresentasikan **semua karakter dari semua bahasa di dunia** (lebih dari 140.000 karakter)
- Kompatibel ke belakang dengan ASCII (standar lama)
- Digunakan oleh lebih dari **98% website** di internet
- Mendukung: Latin, Arab, Jepang, Korea, China, emoji, simbol matematika, dan segalanya

```html
<!-- Dengan UTF-8: teks Indonesia tampil dengan benar -->
<meta charset="UTF-8" />
<!-- Browser bisa menampilkan: ñ, é, ü, こんにちは, 你好, مرحبا, 🎉 -->
```

### Apa yang Terjadi Tanpa `<meta charset>`?

```html
<!-- ❌ Tanpa charset declaration -->
<!DOCTYPE html>
<html lang="id">
<head>
  <title>Portfolio Rizki</title>
  <!-- tidak ada charset -->
</head>
<body>
  <p>Selamat datang di portfolio saya!</p>
  <!-- Karakter seperti é, ñ, atau karakter non-ASCII lain
       bisa ditampilkan sebagai karakter aneh: Ã©, Ã±, dll. -->
</body>
</html>
```

Browser yang tidak tahu encoding halaman akan menebak — dan tebakannya bisa salah, terutama untuk karakter non-ASCII.

### Posisi `<meta charset>` — Mengapa Harus di Awal?

```html
<head>
  <meta charset="UTF-8" />  ← HARUS yang pertama atau paling awal
  <meta name="viewport" content="..." />
  <title>...</title>
  ...
</head>
```

`<meta charset>` harus muncul **dalam 1024 byte pertama** dari file HTML — itulah mengapa ia selalu ditempatkan paling awal di `<head>`. Browser perlu mengetahui encoding sebelum mulai mem-parse sisa dokumen, termasuk karakter-karakter di dalam `<title>` itu sendiri.

### Nilai-nilai Charset yang Ada

Meski ada banyak nilai charset yang valid, **selalu gunakan UTF-8**:

```html
<!-- ✅ Selalu ini -->
<meta charset="UTF-8" />

<!-- Cara lama (HTML4) — masih valid tapi tidak disarankan -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!-- ❌ Jangan gunakan encoding lama -->
<meta charset="ISO-8859-1" />   <!-- tidak support emoji & banyak karakter -->
<meta charset="windows-1252" /> <!-- encoding lama Windows -->
```

---

## 🔗 `<title>` dan `<meta charset>` dalam Portfolio

Berikut adalah bagian paling awal `<head>` yang benar untuk portfolio kita:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <!-- 1. Charset — PERTAMA sebelum apapun -->
  <meta charset="UTF-8" />

  <!-- 2. Title — informatif dan spesifik -->
  <title>Rizki Pratama — Junior Web Developer · SMK RPL Jakarta</title>

</head>
```

Dua baris ini saja sudah memberikan browser informasi dasar yang sangat penting:
- "Dokumen ini menggunakan encoding UTF-8" → bisa menampilkan semua karakter dengan benar
- "Dokumen ini berjudul 'Rizki Pratama — Junior Web Developer'" → ditampilkan di tab, bookmark, dan Google

---

**[Lanjut: Viewport & Responsive →](/bab9/viewport/)**
