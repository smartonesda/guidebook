---
title: "Challenge"
description: Tantangan mandiri untuk membuktikan pemahaman mendalam tentang Gambar & Multimedia HTML5 — dari analisis CLS hingga perancangan gambar responsif.
---

Tantangan mandiri ini akan menguji kemampuanmu dalam mengelola file media, menyusun aksesibilitas alt teks, dan menangani embedded content secara aman.

Ada 5 tantangan berjenjang. Selesaikan semuanya!

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan rangkaian tantangan ini, kamu akan mampu:
- Mendiagnosis penyebab error pemuatan gambar pecah (*broken image*) secara mandiri.
- Menerapkan nilai aspect-ratio melalui atribut dimensi untuk mencegah pergeseran layout.
- Menuliskan teks alternatif `alt` yang deskriptif dan ramah pembaca layar.
- Merancang struktur penyematan halaman luar (`<iframe>`) secara aman dan berstandar aksesibilitas.

---

## ⭐ Challenge 1: Detektif Broken Image (Mudah)

Seorang junior developer menuliskan kode untuk menampilkan logo tim di halaman webnya:

```html
<img src="/images/logo_sekolah.PNG" alt="logo" width="100px" height="100px">
```

Ketika dibuka secara lokal dari komputernya, gambar tersebut **tidak muncul** (menampilkan ikon pecah). Identifikasi **minimal 4 kesalahan** pada penulisan tag gambar di atas dan jelaskan bagaimana memperbaikinya.

*Tuliskan temuanmu di dalam tag komentar HTML di file latihanmu.*

---

## ⭐⭐ Challenge 2: Audit Teks Alternatif (Menengah)

Diberikan sebuah paragraf artikel tentang resep makanan yang memiliki beberapa gambar pendukung. Audit dan tulislah perbaikan teks alternatif (`alt`) untuk ketiga gambar di bawah ini agar ramah terhadap pengguna tunanetra (*screen reader*) dan mesin pencari:

1. **Gambar A**: Foto semangkuk soto ayam hangat bertabur bawang goreng di atas meja kayu.
   - *Kode Asal*: `<img src="soto.jpg" alt="soto">`
2. **Gambar B**: Tombol berbentuk ikon panah ke kiri untuk kembali ke halaman daftar resep.
   - *Kode Asal*: `<img src="panah.png" alt="panah">`
3. **Gambar C**: Gambar dekoratif berupa ilustrasi daun seledri kecil di pojok bawah artikel sebagai pemanis visual saja.
   - *Kode Asal*: `<img src="seledri.png">` (tanpa atribut alt)

*Tuliskan kode perbaikan tag <img> yang benarnya di file latihanmu.*

---

## ⭐⭐ Challenge 3: Mencegah Layout Shift (Menengah)

Buatlah sebuah dokumen HTML valid berisi satu artikel panjang.

**Ketentuan:**
- Taruh satu gambar berukuran besar di bagian atas artikel.
- Di bagian bawah gambar, tulis 3 paragraf teks panjang.
- **Tantangan**: Lakukan pembuktian secara visual di browsermu dengan cara:
  1. Hapus atribut `width` dan `height` dari tag gambar, lalu muat ulang halaman. Perhatikan apakah teks paragraf di bawahnya bergeser ke bawah setelah gambarnya selesai dimuat.
  2. Pasang kembali atribut `width="800" height="500"` (atau sesuaikan rasio gambarmu), lalu muat ulang. Perhatikan apakah browser menahan area kosong sebelum gambar muncul.
- Tuliskan kesimpulan analisismu menggunakan tag komentar HTML.

---

## ⭐⭐⭐ Challenge 4: Menyusun Pemutar Video dengan Cadangan Format (Menengah-Sulit)

Buatlah struktur kode HTML valid untuk menyisipkan video demo proyek sekolahmu di halaman web.

**Ketentuan:**
- Wajib memiliki tag pembungkus `<video>` yang menyertakan tombol kontrol pengguna dan gambar poster sampul awal.
- Sediakan 2 tag `<source>` di dalamnya dengan format file berbeda: `.mp4` (tipe `video/mp4`) dan `.webm` (tipe `video/webm`).
- Tambahkan pesan peringatan alternatif di bagian paling bawah jika browser lama tidak mendukung pemutar video HTML5.
- Atur agar video tersebut otomatis berputar tanpa bersuara saat halaman dibuka.

---

## ⭐⭐⭐ Challenge 5: Menyematkan Video YouTube Secara Aman (Sulit)

Cari satu video edukasi pemrograman di YouTube, lalu salin kode sematnya (*embed code*).

**Ketentuan:**
- Sisipkan kode iframe tersebut ke dalam halaman HTML latihanmu.
- Tambahkan atribut `title` yang menjelaskan secara singkat isi video tersebut demi standar aksesibilitas.
- Tambahkan atribut `loading="lazy"` agar performa muat halaman webmu tetap cepat.
- **Tantangan**: Tambahkan atribut `sandbox` untuk membatasi aksi JavaScript dari iframe tersebut agar aman. Sebutkan nilai parameter apa saja yang harus dimasukkan ke dalam `sandbox` agar tombol pemutar videonya tetap berfungsi (misal: `allow-scripts`, dll).

---

## 📊 Cara Penilaian

| Challenge | Poin Maksimal | Kriteria Keberhasilan |
|---|---|---|
| 1: Broken Image | 20 | Menemukan 4 kesalahan atribut/penulisan jalur gambar dan menulis perbaikannya. |
| 2: Audit Alt | 20 | Menuliskan 3 teks alternatif gambar sesuai standar aksesibilitas dan SEO. |
| 3: Mencegah CLS | 20 | Membuktikan penahanan area kosong menggunakan width dan height di browser. |
| 4: Pemutar Video | 20 | Menyusun struktur tag video + source cadangan + autoplay muted loop + poster. |
| 5: Iframe YouTube | 20 | Menyematkan iframe dengan parameter title, loading lazy, dan sandbox keamanan yang valid. |
| **Total** | **100** | |

---

## ➡ Pelajaran Berikutnya

Tantangan di atas menguji kejelianmu dalam mengelola media. Sekarang, mari kita lihat kompilasi kesalahan umum penataan media pada halaman berikutnya sebelum melangkah ke ringkasan bab.

**[Lanjut: Error Corner →](/bab4/error-corner/)**
