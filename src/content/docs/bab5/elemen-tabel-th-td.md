---
title: "Elemen Tabel th td"
description: Memahami dasar anatomi tabel menggunakan tag table, tr, th, td, dan caption di HTML.
---

Tabel digunakan untuk menyajikan **data tabular** — yaitu informasi yang memiliki hubungan keterkaitan erat antara baris (horizontal) dan kolom (vertikal).

Ingat aturan emas ini sejak awal: **Tabel hanya digunakan untuk menampilkan data. Jangan pernah menggunakan tabel untuk mengatur tata letak (layout) halaman website-mu.** (Layout adalah tugas CSS).

---

## 🏗️ Anatomi Dasar Tabel HTML

Untuk membangun tabel sederhana, kita menggunakan empat tag utama ini:

- **`<table>`**: Tag pembungkus utama seluruh tabel.
- **`<tr>` (Table Row)**: Membuat baris baru di dalam tabel.
- **`<th>` (Table Header)**: Membuat sel judul kolom/baris (tampilan default tebal & tengah).
- **`<td>` (Table Data)**: Membuat sel isi data biasa.
- **`<caption>`**: Menambahkan judul keterangan di atas tabel.

Mari kita lihat visualisasi struktur baris-kolom tabel:

```text
  tr (Baris 1) ──►  th (Judul Kolom 1)  │  th (Judul Kolom 2)
  tr (Baris 2) ──►  td (Data 1)         │  td (Data 2)
```

---

## 💻 Menulis Kode Tabel Pertama

Berikut adalah contoh penulisan tabel data nilai ujian siswa:

```html
<table>
  <caption>Daftar Nilai Ujian HTML Kelas X RPL</caption>
  
  <!-- Baris 1: Judul Kolom -->
  <tr>
    <th>Nama Siswa</th>
    <th>Nilai Teori</th>
    <th>Nilai Praktik</th>
  </tr>
  
  <!-- Baris 2: Data Siswa 1 -->
  <tr>
    <td>Rizki Pratama</td>
    <td>90</td>
    <td>95</td>
  </tr>
  
  <!-- Baris 3: Data Siswa 2 -->
  <tr>
    <td>Budi Santoso</td>
    <td>85</td>
    <td>88</td>
  </tr>
</table>
```

### Karakteristik & Perilaku Browser:
- Elemen **`<th>`** otomatis tebal (*bold*) dan berada di tengah (*center aligned*) untuk menegaskan bahwa ia adalah judul.
- Elemen **`<td>`** otomatis tampil normal dan rata kiri (*left aligned*).
- Secara default, browser modern tidak menampilkan garis pembatas (*border*) pada tabel kecuali kita mengaturnya nanti menggunakan CSS atau memasang atribut visual (tetapi CSS sangat direkomendasikan).

Di halaman berikutnya, kita akan belajar bagaimana membagi wilayah tabel secara semantik menggunakan bagian kepala, badan, dan kaki tabel.

**[Lanjut: Struktur Tabel head body foot →](/bab5/struktur-tabel-head-body-foot/)**
