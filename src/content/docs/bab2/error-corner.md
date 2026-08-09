---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat menulis Text & Typography.
---

Berikut adalah daftar kesalahan paling sering dilakukan pemula saat memformat teks dan tipografi di HTML5, beserta cara memperbaikinya.

---

## ❌ 1. Mengetik Tanda Kutip Manual di dalam Tag `<q>`

**Penyebab Error**:
```html
<!-- ❌ SALAH: Menghasilkan tanda kutip ganda bertumpuk di browser -->
<p>Kakek berkata, <q>"Tetaplah rendah hati."</q></p>
```

**Mengapa Bermasalah**: Browser secara otomatis menambahkan tanda kutip pembuka dan penutup (`" ... "`) pada elemen `<q>`. Mengetiknya secara manual akan menghasilkan tampilan: *Kakek berkata, ""Tetaplah rendah hati.""* (kutipan ganda bertumpuk).

**Cara Memperbaiki**: Tuliskan kalimat kutipan secara bersih di dalam tag `<q>` tanpa menuliskan tanda kutip manual:
```html
<!-- ✅ BENAR: Rapi dan valid -->
<p>Kakek berkata, <q>Tetaplah rendah hati.</q></p>
```

---

## ❌ 2. Menggunakan Tag `<u>` untuk Penekanan Biasa

**Penyebab Error**: Menggarisbawahi teks penting menggunakan tag `<u>` agar menarik perhatian.
```html
<!-- ❌ SALAH: Pengunjung mengira ini adalah link yang bisa diklik -->
<p>Silakan <u>buka dokumen ini</u> untuk informasi lebih lanjut.</p>
```

**Mengapa Bermasalah**: Dalam konvensi desain web global, teks yang digarisbawahi secara visual selalu ditafsirkan sebagai **tautan/hyperlink** aktif. Menggunakan `<u>` untuk teks biasa akan membuat pengunjung bingung dan kesal karena tautannya tidak bisa diklik.

**Cara Memperbaiki**: Gunakan tag `<strong>` untuk menebalkan, `<mark>` untuk mewarnai latar belakang, atau gunakan CSS untuk dekorasi visual yang tidak menyerupai link.

---

## ❌ 3. Menumpuk Tag `<br>` untuk Membuat Jarak Halaman

**Penyebab Error**:
```html
<!-- ❌ SALAH: Menyalahgunakan tag jeda baris untuk mengatur margin -->
<h3>Bagian 1</h3>
<p>Konten paragraf pertama.</p>
<br><br><br><br>
<h3>Bagian 2</h3>
```

**Mengapa Bermasalah**: Tag `<br>` secara semantik hanya digunakan untuk membuat baris baru di dalam konten paragraf (misal baris alamat atau puisi). Menggunakannya untuk mengatur jarak antar bagian adalah pelanggaran prinsip *Separation of Concerns*. Jarak renggang antar bagian harus diatur menggunakan properti margin di file CSS.

**Cara Memperbaiki**: Gunakan tag pembatas tematik `<hr>` jika ingin memberi sekat isi, dan atur jarak margin vertikalnya nanti menggunakan CSS.

---

## ❌ 4. Lupa Mengubah Karakter `<` dan `>` di dalam Tag `<code>`

**Penyebab Error**: Mengetik tag HTML langsung di dalam elemen code.
```html
<!-- ❌ SALAH: Browser akan membaca <h1> sebagai tag nyata, bukan teks contoh -->
<p>Gunakan tag <code><h1>Judul</h1></code> untuk membuat judul utama.</p>
```

**Mengapa Bermasalah**: Browser memproses tanda kurang-dari (`<`) sebagai instruksi awal tag HTML nyata. Akibatnya, browser akan merender kata tersebut sebagai heading H1 nyata di halaman, bukan menampilkannya sebagai teks contoh.

**Cara Memperbaiki**: Ubah karakter `<` menjadi entitas khusus `&lt;` (less-than) dan `>` menjadi `&gt;` (greater-than) agar browser membacanya sebagai karakter teks biasa:
```html
<!-- ✅ BENAR: Rapi dan tampil sebagai teks contoh -->
<p>Gunakan tag <code>&lt;h1&gt;Judul&lt;/h1&gt;</code> untuk membuat judul utama.</p>
```

Mari kita lanjut ke halaman ringkasan untuk merekap seluruh pembelajaran di BAB 2!

**[Lanjut: Ringkasan →](/bab2/ringkasan/)**
