---
title: "Challenge"
description: Tantangan mandiri untuk membuktikan pemahaman mendalam tentang Lists & Tables HTML5 — dari analisis data modeling hingga perancangan tabel bersilang.
---

Tantangan mandiri ini akan menguji pemahamanmu mengenai bagaimana memodelkan data mentah menjadi bentuk list dan tabel yang valid sesuai standar web.

Ada 5 tantangan berjenjang. Selesaikan semuanya!

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan rangkaian tantangan ini, kamu akan mampu:
- Menganalisis dan menentukan struktur HTML yang paling merepresentasikan data mentah (*Data Modeling Mindset*).
- Menuliskan struktur nested list yang valid secara aturan LIFO.
- Merancang tabel dengan penggabungan baris (`rowspan`) dan kolom (`colspan`) secara seimbang.
- Menghindari penggunaan tabel sebagai alat bantu tata letak (*layout*) halaman.

---

## ⭐ Challenge 1: Data Modeling Selector (Mudah)

Diberikan 4 buah jenis data mentah di bawah ini. Tentukan struktur elemen HTML yang paling tepat untuk merepresentasikannya (apakah `<ul>`, `<ol>`, `<dl>`, atau `<table>`), dan berikan alasan singkat keputusanmu:

1. **Data A**: Panduan langkah demi langkah menyalakan mesin laptop.
2. **Data B**: Daftar belanjaan kebutuhan dapur bulanan.
3. **Data C**: Glosarium berisi singkatan-singkatan jaringan komputer beserta penjelasannya (misal: LAN, WAN, MAN).
4. **Data D**: Jadwal piket kelas X RPL berisi nama hari, nama siswa bertugas, dan area kebersihan.

*Tuliskan jawaban analisismu di dalam tag komentar HTML di file latihanmu.*

---

## ⭐⭐ Challenge 2: Detektif Nested List (Menengah)

Temukan **minimal 4 kesalahan** pada struktur penulisan nested list di bawah ini. Jelaskan mengapa salah dan tuliskan perbaikannya:

```html
<ul>
  <li>
    Materi Dasar HTML
  <li>Tag dan Elemen</li>
  <ul>
    <li>Void Element</li>
  </ul>
  </li>
  <li>Materi Teks HTML
    <ol>
      <li>Heading</li>
      <li>Paragraf</li>
    </ol>
  </li>
</ul>
```

---

## ⭐⭐ Challenge 3: Menyusun Jadwal Pelajaran Sekolah (Menengah)

Buatlah sebuah dokumen HTML valid yang menampilkan tabel jadwal pelajaran harian kelasmu (misalnya dari hari Senin sampai Rabu).

**Ketentuan:**
- Wajib menggunakan struktur tabel semantik (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`).
- Kolom tabel harus memuat: Jam/Waktu, Nama Pelajaran, Guru Pengampu, dan Ruang Kelas.
- Gunakan tag `<th>` untuk menandai judul kolom di bagian kepala tabel.
- Lolos validasi 100% di W3C Validator.

---

## ⭐⭐⭐ Challenge 4: Tabel Rekapitulasi Nilai Bersilang (Menengah-Sulit)

Buatlah tabel data rekap nilai siswa yang memiliki penggabungan sel baris (`rowspan`) dan kolom (`colspan`).

**Ketentuan:**
- **Rowspan**: Gabungkan baris nama siswa jika siswa tersebut memiliki rincian nilai tugas 1 dan tugas 2 (lihat contoh di bawah).
- **Colspan**: Gabungkan kolom di bagian kaki tabel untuk menampilkan tulisan "Rata-rata Nilai Kelas".
- Struktur Tabel:

```text
  ┌──────────────┬──────────────┬──────────────┐
  │ Nama Siswa   │ Jenis Tugas  │ Nilai        │
  ├──────────────┼──────────────┼──────────────┤
  │              │ Tugas 1      │ 90           │
  │ Rizki        ├──────────────┼──────────────┤
  │              │ Tugas 2      │ 85           │
  ├──────────────┴──────────────┼──────────────┤
  │ Rata-rata                   │ 87.5         │
  └─────────────────────────────┴──────────────┘
```

*Tuliskan kode HTML-nya secara valid di file latihanmu.*

---

## ⭐⭐⭐ Challenge 5: Pertanyaan Konseptual Analitis (Sulit)

Jawablah pertanyaan-pertanyaan di bawah ini dengan menyisipkan penjelasan singkat (2-3 kalimat) menggunakan komentar HTML di bagian bawah dokumen latihanmu:

1. **Pertanyaan 1**: Dahulu kala di era web jadul (sekitar tahun 2000-an), para pengembang web sering menggunakan tag `<table>` untuk mengatur tata letak layout kolom kiri dan kanan halaman website. Mengapa praktik ini sekarang dilarang keras di era web modern? Apa dampaknya bagi aksesibilitas difabel?
2. **Pertanyaan 2**: Mengapa kita wajib menuliskan tag `<th>` di dalam `<thead>` alih-alih hanya menggunakan tag `<td>` biasa yang diberi efek tebal (`<strong>`)? Jelaskan hubungan perbedaan ini dengan aspek semantik HTML.

---

## 📊 Cara Penilaian

| Challenge | Poin Maksimal | Kriteria Keberhasilan |
|---|---|---|
| 1: Data Modeling | 20 | Menentukan tipe daftar/tabel yang tepat untuk 4 skenario data beserta alasannya. |
| 2: Detektif List | 20 | Menemukan 4 kesalahan nesting tag li/ul dan membetulkannya secara valid. |
| 3: Jadwal Pelajaran | 20 | Menyusun tabel jadwal dengan thead, tbody, tfoot secara valid. |
| 4: Tabel Bersilang | 20 | Merancang tabel dengan kombinasi rowspan dan colspan yang proporsional dan seimbang. |
| 5: Pertanyaan Konsep | 20 | Memberikan jawaban analitis mengenai larangan layout table dan semantik th. |
| **Total** | **100** | |

---

## ➡ Pelajaran Berikutnya

Tantangan di atas menguji kejelianmu dalam memodelkan data. Sekarang, mari kita lihat kompilasi kesalahan umum list dan tabel pada halaman berikutnya sebelum melangkah ke ringkasan bab.

**[Lanjut: Error Corner →](/bab5/error-corner/)**
