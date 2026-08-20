---
title: "Tiga Cara Memasang CSS"
description: Membedah Inline CSS, Internal CSS, dan External CSS — kelebihan, kelemahan, dan standar industri.
---

Agar browser tahu bagaimana cara menghias dokumen HTML, kita harus memberitahukan aturan CSS tersebut. Ada **3 cara berbeda** untuk menyisipkan CSS ke dalam dokumen HTML:

```text
1. Inline CSS   → Ditulis langsung di dalam atribut elemen HTML
2. Internal CSS → Ditulis di dalam tag <style> di bagian <head>
3. External CSS → Ditulis di file terpisah (.css) lalu dihubungkan dengan tag <link>
```

Mari kita pelajari satu per satu secara mendalam.

---

## 1. Inline CSS (Gaya Baris)

Inline CSS ditulis langsung pada tag HTML menggunakan atribut `style=""`:

```html title="index.html"
<h1 style="color: #e8392b; font-size: 24px;">Judul Merah</h1>
<p style="color: #555555; line-height: 1.6;">Ini adalah paragraf dengan inline style.</p>
```

### Karakteristik:
- **Kelebihan**: Cepat untuk pengujian kilat 1 baris kode (*quick dirty testing*) atau saat mengirim email HTML (*HTML email newsletter*).
- **Kelemahan Fatal**:
  - Kode HTML menjadi sangat kotor dan sulit dibaca.
  - Aturan tidak bisa digunakan ulang (*no reusability*). Jika kamu punya 10 tombol, kamu harus menyalin kode style yang sama 10 kali.
  - Memiliki prioritas spesifisitas yang terlalu tinggi sehingga sangat sulit diubah atau di-override di kemudian hari.
- **Rekomendasi**: **Hindari penggunaan Inline CSS untuk proyek website nyata.**

---

## 2. Internal CSS (Embedded Stylesheet)

Internal CSS diletakkan di dalam tag `<style>` yang ditempatkan di dalam bagian `<head>` dokumen HTML:

```html title="index.html"
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Contoh Internal CSS</title>
  
  <style>
    body {
      background-color: #f8f9fa;
      font-family: Arial, sans-serif;
    }

    h1 {
      color: #e8392b;
    }

    .kartu {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <div class="kartu">
    <h1>Selamat Datang</h1>
    <p>Ini menggunakan internal CSS di bagian head.</p>
  </div>
</body>
</html>
```

### Karakteristik:
- **Kelebihan**: Seluruh styling untuk halaman tersebut terkumpul rapi di satu tempat di bagian atas. Cocok untuk halaman tunggal (*single page*) seperti *landing page promo* atau saat membuat demo tugas kecil.
- **Kelemahan**: Aturan styling tersebut **hanya berlaku untuk file HTML itu saja**. Jika websitemu memiliki halaman `tentang.html` atau `kontak.html`, halaman-halaman tersebut tidak bisa memakai style ini kecuali kamu menyalin seluruh blok `<style>`.

---

## 3. External CSS (Standar Industri) ⭐

External CSS memisahkan kode styling ke dalam file tersendiri dengan ekstensi `.css` (misal: `style.css`), lalu dihubungkan ke file HTML menggunakan tag `<link>` di dalam `<head>`:

```html title="index.html"
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Keren</title>
  
  <!-- Menghubungkan ke file CSS eksternal -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Judul Halaman</h1>
  <p>Teks halaman utama yang bersih dan terpisah dari CSS.</p>
</body>
</html>
```

```css title="style.css"
/* File ini murni hanya berisi aturan CSS */
body {
  background-color: #0c0c0e;
  color: #f0f0f3;
  font-family: system-ui, sans-serif;
  margin: 0;
  padding: 2rem;
}

h1 {
  color: #e8392b;
}
```

### Karakteristik:
- **Kelebihan Luar Biasa**:
  - **Pemisahan Sempurna**: File HTML murni berisi struktur, file CSS murni berisi desain.
  - **Dapat Digunakan Bersama (Shared Stylesheet)**: 1 file `style.css` bisa dihubungkan ke 100 halaman HTML sekaligus. Mengubah warna di `style.css` otomatis mengubah 100 halaman tersebut secara serentak.
  - **Kecepatan Browser Cache**: Browser hanya perlu mengunduh file `style.css` satu kali di kunjungan pertama. Untuk halaman berikutnya, browser membaca dari memori lokal (*cache*), membuat website memuat jauh lebih cepat.
- **Rekomendasi**: **Ini adalah metode standar profesional yang wajib kamu gunakan 99% dari seluruh waktu kerjamu.**

---

## 📊 Tabel Perbandingan 3 Metode

| Fitur | Inline CSS | Internal CSS | External CSS |
| :--- | :--- | :--- | :--- |
| **Lokasi Kode** | Atribut `style=""` di tag | Tag `<style>` di `<head>` | File terpisah `.css` |
| **Bisa Dipakai Ulang?** | Tidak sama sekali | Hanya di 1 file HTML | **Bisa di semua halaman** |
| **Kerapian Kode HTML** | Sangat Buruk | Sedang | **Sangat Bersih** |
| **Kecepatan Cache** | Tidak Ada | Tidak Ada | **Sangat Cepat (Cached)** |
| **Standar Industri** | Hindari | Khusus Demo Singkat | **Wajib (Recommended)** |

Sekarang setelah kita tahu cara memasang stylesheet eksternal, bagaimana cara kita mencari tahu sintaks properti CSS yang belum kita ketahui? Mari belajar membaca dokumentasi resmi di halaman berikutnya!

**[Lanjut: Cara Membaca Dokumentasi CSS →](/bab0/membuka-di-browser/)**
