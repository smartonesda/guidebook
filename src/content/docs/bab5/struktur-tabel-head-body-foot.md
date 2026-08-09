---
title: "Struktur Tabel head body foot"
description: Membagi wilayah tabel secara semantik menggunakan tag thead, tbody, dan tfoot di HTML5.
---

Saat bekerja dengan data tabel yang panjang, menuliskan baris `<tr>` bertumpuk secara acak di dalam tag `<table>` membuat kode kita sulit dipelihara. 

HTML5 memperkenalkan tiga elemen pembagian wilayah (*semantic grouping*) untuk merapikan struktur tabel: **`<thead>`**, **`<tbody>`**, dan **`<tfoot>`**.

---

## 🏗️ Tiga Bagian Semantik Tabel

```text
  <table>
    ├── <thead>  ─── Bagian Kepala (Judul Kolom)
    ├── <tbody>  ─── Bagian Badan  (Baris Data Konten)
    └── <tfoot>  ─── Bagian Kaki   (Ringkasan / Total)
```

### 1. `<thead>` (Table Head)
Membungkus baris-baris judul kolom utama. Bagian ini hanya boleh diisi dengan tag `<tr>` yang menampung elemen judul `<th>`.

### 2. `<tbody>` (Table Body)
Membungkus data utama isi tabel. Di sinilah seluruh baris data siswa atau transaksi diletakkan.

### 3. `<tfoot>` (Table Footer)
Membungkus baris ringkasan di bagian bawah (misalnya baris total nilai, rata-rata, atau catatan kaki tabel).

---

## 💻 Contoh Penerapan Kode Struktur Lengkap

Mari kita rapikan tabel nilai ujian sebelumnya menggunakan pembagian wilayah semantik:

```html
<table>
  <caption>Rata-rata Nilai Ujian HTML</caption>
  
  <thead>
    <tr>
      <th>Nama Siswa</th>
      <th>Nilai Teori</th>
      <th>Nilai Praktik</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>Rizki Pratama</td>
      <td>90</td>
      <td>95</td>
    </tr>
    <tr>
      <td>Budi Santoso</td>
      <td>85</td>
      <td>88</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td>Rata-rata Kelas</td>
      <td>87.5</td>
      <td>91.5</td>
    </tr>
  </tfoot>
</table>
```

---

## 💡 Mengapa Pembagian Struktur Ini Sangat Penting?

1. **Aksesibilitas Tinggi**: Software pembaca layar (*screen reader*) bisa membaca tabel secara lebih cerdas karena tahu persis bagian mana yang bertindak sebagai judul, isi data, dan ringkasan footer saat dibacakan kepada tunanetra.
2. **Kemudahan Cetak Dokumen (Print)**: Jika tabel data sangat panjang hingga beberapa halaman kertas saat dicetak, browser secara cerdas akan otomatis mencetak ulang bagian `<thead>` di setiap bagian atas kertas halaman baru agar pembaca tidak bingung.
3. **Pemberian Gaya yang Mudah**: Kita bisa memberikan warna latar belakang yang berbeda untuk seluruh bagian kepala, badan, dan kaki tabel secara sekaligus menggunakan CSS nanti.

Selanjutnya, kita akan mempelajari cara menggabungkan beberapa kolom dan baris sel tabel menggunakan atribut colspan dan rowspan.

**[Lanjut: colspan & rowspan →](/bab5/colspan-rowspan/)**
