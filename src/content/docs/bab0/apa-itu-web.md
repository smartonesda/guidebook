---
title: "Apa itu CSS?"
description: Memahami definisi, sejarah singkat, alasan pemisahan konten dan presentasi, serta peran fundamental CSS dalam web modern.
---

**CSS** adalah singkatan dari **Cascading Style Sheets**. 

CSS adalah bahasa desain berbentuk aturan (*rule-based stylesheet language*) yang digunakan untuk mengontrol bagaimana dokumen yang ditulis dalam bahasa markup (seperti HTML) ditampilkan kepada pengguna di layar monitor, kertas cetak, layar ponsel, atau media lainnya.

---

## 🏛️ Sejarah Singkat: Kenapa CSS Diciptakan?

Di awal era web (awal 1990-an), HTML awalnya hanya dirancang untuk berbagi dokumen teks ilmiah sederhana. Namun, seiring bertambahnya pengguna web, para pembuat website mulai ingin mengatur warna teks, latar belakang, jenis huruf, dan tata letak visual.

Saat itu, browser mulai menambahkan tag presentasi seperti `<font>`, `<center>`, dan atribut `bgcolor` langsung ke dalam HTML:

```html
<!-- Cara lama (TIDAK DIGUNAKAN LAGI): HTML bercampur aduk dengan styling -->
<body bgcolor="#ffffcc">
  <center>
    <h1><font color="red" face="Arial">Selamat Datang</font></h1>
  </center>
</body>
```

### Masalah Besar dari Cara Lama Ini:
1. **Sangat Melelahkan Diperbaiki**: Jika sebuah website memiliki 50 halaman dan kamu ingin mengubah warna judul dari merah menjadi biru, kamu harus membuka dan mengubah 50 file satu per satu secara manual.
2. **Kode Sangat Berantakan**: Dokumen HTML menjadi sangat panjang dan sulit dibaca karena struktur dokumen tercampur dengan styling visual.
3. **Aksesibilitas Rusak**: Pembaca layar (*screen reader*) untuk tunanetra menjadi kesulitan membedakan mana informasi penting dan mana instruksi visual semata.

Untuk menyelesaikan masalah ini, pada tahun **1996**, konsorsium web dunia (**W3C**) merilis standar **CSS Level 1** yang diusulkan oleh **Håkon Wium Lie** dan **Bert Bos**.

---

## 🎯 Prinsip Inti: Pemisahan Konten dan Presentasi (Separation of Concerns)

Filosofi terpenting dari pengembangan web modern adalah:

```text
┌───────────────────────────────────────┐
│ HTML bertanggung jawab atas KONTEN    │  → "Apa isi halaman ini?"
│ (Judul, Teks, Gambar, Tabel, Formulir)│
└───────────────────────────────────────┘
                   +
┌───────────────────────────────────────┐
│ CSS bertanggung jawab atas TAMPILAN   │  → "Bagaimana rupa & posisinya?"
│ (Warna, Font, Jarak, Grid, Animasi)   │
└───────────────────────────────────────┘
```

Dengan memisahkan kedua hal ini:
- Kamu bisa mengubah seluruh tema visual website ribuan halaman hanya dengan mengedit **satu file CSS** saja.
- File HTML tetap bersih, semantik, mudah dibaca manusia, dan ramah mesin pencari (SEO).
- Halaman web yang sama bisa diberikan style yang berbeda untuk layar komputer (*desktop*), layar sentuh (*mobile*), atau saat dokumen dicetak (*print stylesheet*).

---

## 🔬 Anatomi Dasar Aturan CSS (Rule Set)

Sebuah aturan CSS terdiri dari beberapa komponen utama:

```css title="Contoh Aturan CSS"
h1 {
  color: #e8392b;
  font-size: 2rem;
  margin-bottom: 1rem;
}
```

```text
┌────────────────────────────────────────────────────────┐
│  h1               → SELECTOR (Siapa yang ingin dihias?)│
│  {                                                     │
│    color:         → PROPERTY (Sifat apa yang diubah?)  │
│    #e8392b;       → VALUE    (Nilai apa yang dipakai?) │
│  }                                                     │
│                                                        │
│  "color: #e8392b;" = DECLARATION (Deklarasi)           │
│  Seluruh blok di atas = DECLARATION BLOCK / RULE SET   │
└────────────────────────────────────────────────────────┘
```

- **Selector**: Memilih elemen HTML target di halaman (misal: semua tag `<h1>`, class `.tombol`, atau id `#header`).
- **Property**: Aspek visual yang ingin dimodifikasi (misal: warna teks, ukuran huruf, jarak tepi).
- **Value**: Nilai atau instruksi baru untuk properti tersebut (misal: `#e8392b`, `2rem`, `center`).
- **Declaration**: Pasangan antara properti dan nilainya, dipisahkan oleh titik dua (`:`) dan diakhiri dengan titik koma (`;`).

Sekarang setelah kita memahami apa itu CSS dan mengapa ia dipisahkan dari HTML, bagaimana cara browser membaca dan memproses kedua file tersebut? Mari kita bedah alur kerja browser di halaman berikutnya!

**[Lanjut: Cara Browser Membaca HTML + CSS →](/bab0/bagaimana-browser-bekerja/)**
