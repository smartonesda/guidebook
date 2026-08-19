---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat menulis Hyperlinks & Navigation.
---

Berikut adalah daftar kesalahan paling sering dilakukan pemula saat mengelola tautan dan rute path di HTML5, beserta cara mengatasinya.

---

## ❌ 1. Menghilangkan Protokol pada Absolute URL (Link Eksternal)

**Penyebab Error**:
```html
<!-- ❌ SALAH: Browser akan mengira ini adalah file lokal di komputermu -->
<a href="google.com">Cari di Google</a>
```

**Mengapa Bermasalah**: Jika kamu menulis domain tujuan tanpa diawali protokol `https://` atau `http://`, browser akan menafsirkannya sebagai **Relative URL**. Browser akan mencari file bernama `google.com` di folder proyekmu saat tautan diklik, yang tentunya akan berujung pada error *404 Not Found*.

**Cara Memperbaiki**: Selalu sertakan protokol lengkap untuk semua tautan eksternal:
```html
<!-- ✅ BENAR: Mengarah langsung ke server Google -->
<a href="https://google.com">Cari di Google</a>
```

---

## ❌ 2. Menggunakan Slash `/` di Depan Relative Path Lokal

**Penyebab Error**:
```html
<!-- ❌ SALAH: Link rusak saat dibuka secara lokal offline -->
<a href="/tentang.html">Tentang Saya</a>
```

**Mengapa Bermasalah**: Tanda slash `/` di awal alamat relative path memberitahu browser untuk mencari file dari **akar drive lokal komputermu** (misalnya dari drive `C:\` di Windows), bukan dari folder tempat proyek webmu berada. Ini akan menyebabkan link rusak saat kamu membukanya dari folder komputer secara luring.

**Cara Memperbaiki**: Selalu gunakan titik `./` atau langsung nama filenya untuk folder lokal yang sama:
```html
<!-- ✅ BENAR: Mengarah relatif dalam folder proyek -->
<a href="./tentang.html">Tentang Saya</a>
```

---

## ❌ 3. Lupa Naik Tingkat Menggunakan `..` Saat Keluar Folder

**Penyebab Error**:
```html
<!-- Asumsi: Kamu sedang berada di dalam file 'artikel/berita.html' 
     dan ingin membuka 'index.html' yang berada di luar folder artikel -->
<!-- ❌ SALAH: Browser mencari file 'artikel/index.html' -->
<a href="index.html">Kembali ke Beranda</a>
```

**Mengapa Bermasalah**: Browser akan mencari file `index.html` di dalam sub-folder `artikel/` yang sedang aktif saat itu. Browser tidak tahu bahwa ia harus keluar dari folder tersebut kecuali kamu memberitahu perintah navigasinya.

**Cara Memperbaiki**: Gunakan simbol titik ganda `../` untuk naik/keluar satu tingkat folder induk:
```html
<!-- ✅ BENAR: Keluar dari folder artikel, lalu mencari index.html -->
<a href="../index.html">Kembali ke Beranda</a>
```

---

## ❌ 4. Membiarkan Atribut `href` Kosong atau Berisi Tanda Pagar Saja

**Penyebab Error**:
```html
<!-- ❌ SALAH: Memicu reload halaman atau lompatan ke atas halaman secara tidak sengaja -->
<a href="#">Klik Saya</a>
<a href="">Klik Saya</a>
```

**Mengapa Bermasalah**: Atribut `href` yang kosong (`href=""`) akan membuat halaman web memuat ulang dirinya sendiri (*reload*) secara terus-menerus saat diklik, membuang kuota internet dan mengganggu pengguna. Sedangkan `href="#"` akan menggulung layar secara otomatis ke bagian paling atas halaman.

**Cara Memperbaiki**: Jika tautan belum memiliki tujuan pasti, gunakan tag tombol (`<button>`) atau pastikan isi atribut `href` sudah dihubungkan ke id section yang benar.

---

## ❌ 5. Membuka Tab Baru tanpa Pengaman (`noopener`)

**Penyebab Error**:
```html
<!-- ❌ SALAH: Celah keamanan Reverse Tabnabbing terbuka -->
<a href="https://example.com" target="_blank">Kunjungi</a>
```

**Mengapa Bermasalah**: Tab baru memiliki kendali kembali ke tab asal melalui perintah JavaScript. Situs jahat bisa mengalihkan tab asalamu ke halaman palsu tanpa kamu sadari.

**Cara Memperbaiki**: Selalu pasang `rel="noopener noreferrer"` saat menggunakan `target="_blank"`:
```html
<!-- ✅ BENAR: Aman dan terlindungi -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Kunjungi</a>
```

Mari kita lanjut ke halaman ringkasan untuk merekap seluruh pembelajaran di BAB 3!

**[Lanjut: Ringkasan →](/bab3/ringkasan/)**
