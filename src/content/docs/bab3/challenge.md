---
title: "Challenge"
description: Tantangan mandiri untuk membuktikan pemahaman mendalam tentang Tautan & Navigasi HTML5 — dari merancang peta folder hingga menyelesaikan error path.
---

Tantangan mandiri ini akan menguji kemampuanmu dalam menavigasi folder proyek dan mengelola berbagai jenis tautan.

Ada 5 tantangan berjenjang. Selesaikan semuanya!

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan rangkaian tantangan ini, kamu akan mampu:
- Mendiagnosis dan memperbaiki kesalahan relative path (*broken links*) dengan cepat.
- Melakukan navigasi folder bertingkat menggunakan `.` dan `..`.
- Menerapkan parameter target dan rel pengaman pada tautan eksternal secara tepat.
- Menentukan kapan harus menggunakan elemen tautan (`<a>`) vs tombol (`<button>`).

---

## ⭐ Challenge 1: Peta Folder & Jalur Relatif (Mudah)

Diberikan sebuah struktur proyek website sekolah sebagai berikut:

```text
sekolah-rpl/
├── index.html            (Halaman Utama)
├── profil/
│   └── visi-misi.html    (Halaman Visi Misi)
└── galeri/
    ├── foto.html         (Halaman Galeri Foto)
    └── dokumen/
        └── brosur.pdf    (Brosur Pendaftaran)
```

Tuliskan nilai atribut `href` yang benar untuk skenario pemanggilan di bawah ini:
1. Dari file `index.html` ingin membuka file `visi-misi.html`.
2. Dari file `visi-misi.html` ingin kembali ke file `index.html`.
3. Dari file `foto.html` ingin membuka file `visi-misi.html`.
4. Dari file `visi-misi.html` menyediakan tautan untuk mengunduh file `brosur.pdf`.

*Tuliskan jawabanmu di dalam tag komentar HTML di file latihanmu.*

---

## ⭐⭐ Challenge 2: Detektif Link Rusak (Menengah)

Temukan **minimal 5 kesalahan** penulisan atribut atau rute path pada kode tautan di bawah ini. Jelaskan mengapa salah dan tuliskan kode perbaikannya:

```html
<!-- Asumsi: berkas profil.html berada di folder yang sama, 
     dan situs luar adalah W3Schools -->
<p>
  Baca selengkapnya tentang saya di <a href="Profil.html">laman profil</a>.<br>
  Kunjungi juga situs belajar di <a href="www.w3schools.com" target="_blank">W3Schools</a>.<br>
  Kirim pesan darurat ke saya melalui <a href="callto:08123456">Telepon</a>.<br>
  Unduh berkas CV saya di <a href="/dokumen/cv.pdf" download="my-cv">Unduh CV</a>.
</p>
```

---

## ⭐⭐ Challenge 3: Papan Navigasi Bertingkat (Menengah)

Buatlah sebuah dokumen HTML valid yang mensimulasikan menu navigasi bertingkat. 

**Ketentuan:**
- Buat folder proyek dengan sub-folder bebas minimal 2 tingkat.
- Buat minimal 3 file HTML tersebar di folder-folder tersebut.
- Pasang menu navigasi yang sama di setiap file yang memungkinkan pengguna berpindah ke semua halaman secara timbal balik tanpa ada tautan rusak.
- Buktikan bahwa semua link bekerja dengan membukanya di browser menggunakan Live Server.

---

## ⭐⭐⭐ Challenge 4: Link vs Button Selector (Menengah-Sulit)

Tinjau skenario interaksi halaman web di bawah ini. Untuk setiap skenario, tentukan apakah elemen yang paling tepat digunakan adalah **Anchor Link (`<a>`)** atau **Tombol (`<button>`)**, dan berikan penjelasan singkat alasannya:

1. Pengguna mengklik teks untuk beralih ke halaman keranjang belanja.
2. Pengguna mengklik ikon tanda silang (x) untuk menutup kotak informasi promosi di pojok layar.
3. Pengguna mengklik teks *"Kembali ke Beranda"* di bagian bawah artikel.
4. Pengguna mengklik tombol *"Kirim"* untuk mengirimkan data formulir pendaftaran sekolah.
5. Pengguna mengklik tombol berbentuk ikon roda gigi untuk memunculkan menu pengaturan akun (tanpa pindah halaman).

---

## ⭐⭐⭐ Challenge 5: Audit Keamanan Tautan Eksternal (Sulit)

Buatlah sebuah halaman web yang menampilkan daftar website referensi belajar pemrograman eksternal (minimal 3 link, contoh: mdweb, w3c, github).

**Ketentuan:**
- Wajib menggunakan `target="_blank"` pada setiap link luar.
- Setiap link luar harus dilengkapi dengan parameter pengaman `rel` yang lengkap.
- **Tantangan**: Tuliskan penjelasan singkat (2-3 kalimat) menggunakan komentar HTML di bagian bawah kodemu mengenai apa dampak buruknya bagi performa memori browser pengunjung jika kita lupa menyertakan atribut `rel="noopener"` saat memuat link eksternal di tab baru.

---

## 📊 Cara Penilaian

| Challenge | Poin Maksimal | Kriteria Keberhasilan |
|---|---|---|
| 1: Peta Folder | 20 | Menjawab 4 skenario relative path dengan benar. |
| 2: Detektif Link | 20 | Menemukan 5 kesalahan path/protokol dan menuliskan perbaikannya. |
| 3: Navigasi Bertingkat | 20 | Sukses menghubungkan 3 halaman di folder bertingkat tanpa link rusak. |
| 4: Link vs Button | 20 | Menentukan elemen yang tepat untuk 5 skenario beserta penjelasan logis. |
| 5: Audit Keamanan | 20 | Menulis tautan eksternal yang aman dan menjelaskan resiko window.opener. |
| **Total** | **100** | |

---

## ➡ Pelajaran Berikutnya

Tantangan di atas menguji kejelianmu dalam menavigasi file path. Sekarang, mari kita lihat kompilasi kesalahan umum rute path pada halaman berikutnya sebelum melangkah ke ringkasan bab.

**[Lanjut: Error Corner →](/bab3/error-corner/)**
