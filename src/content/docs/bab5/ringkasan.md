---
title: "Ringkasan"
description: Rekap semua konsep penting yang dipelajari di BAB 5 — Lists & Tables.
---

Selamat! Kamu telah menyelesaikan seluruh rangkaian materi di **BAB 5 — Lists & Tables**.

---

## 📝 Rekap Konsep Utama

Berikut adalah ringkasan konsep penyusunan daftar dan tabel yang wajib kamu kuasai:

- **Data Modeling Mindset**: Selalu analisis bentuk data sebelum memilih tag HTML. 
  - Kumpulan item acak → Unordered List (`<ul>`).
  - Langkah-langkah / Penomoran peringkat → Ordered List (`<ol>`).
  - Pasangan istilah dan deskripsi → Description List (`<dl>`).
  - Relasi baris dan kolom → Tabel Data (`<table>`).
- **Nesting List**: Tag sub-daftar wajib ditulis di dalam tag `<li>` induk sebelum `</li>` ditutup, dengan indentasi 2 spasi secara disiplin.
- **Tabel Semantik**: Tabel data modern wajib dibagi secara semantik menggunakan tag `<thead>` (kepala kolom), `<tbody>` (konten data), dan `<tfoot>` (footer rekap).
- **Penggabungan Sel**: Atribut `colspan` menggabungkan kolom secara mendatar ke kanan, sedangkan `rowspan` menggabungkan baris secara menurun ke bawah.
- **Table Bukan Untuk Layout**: Tabel dilarang keras digunakan untuk menyusun posisi tata letak halaman website (layout) karena merusak aksesibilitas pembaca layar bagi difabel.

---

## 📊 Tabel Kamus Tag Daftar & Tabel BAB 5

| Tag HTML | Atribut Utama | Fungsi Utama | Sifat Element |
|---|---|---|---|
| **`<ul>`** | (none) | Membungkus daftar tidak terurut (poin bulat). | Block |
| **`<ol>`** | `start`, `reversed`, `type` | Membungkus daftar terurut (penomoran). | Block |
| **`<li>`** | (none) | Menampung item di dalam tag ul atau ol. | Block |
| **`<dl>`** | (none) | Membungkus daftar deskripsi istilah. | Block |
| **`<dt>`** | (none) | Menuliskan istilah (key) di dalam dl. | Block |
| **`<dd>`** | (none) | Menuliskan penjelasan (value) di dalam dl. | Block |
| **`<table>`** | (none) | Membungkus seluruh struktur tabel. | Block |
| **`<caption>`** | (none) | Menuliskan judul keterangan di atas tabel. | Block |
| **`<thead>`** | (none) | Membungkus baris judul kolom (header). | Block |
| **`<tbody>`** | (none) | Membungkus seluruh baris data utama (body). | Block |
| **`<tfoot>`** | (none) | Membungkus baris ringkasan (footer). | Block |
| **`<tr>`** | (none) | Membuat baris tabel baru. | Block |
| **`<th>`** | `colspan`, `rowspan` | Membuat sel judul kolom/baris (tebal). | Block / Cell |
| **`<td>`** | `colspan`, `rowspan` | Membuat sel isi data biasa. | Block / Cell |

---

## ➡ Handoff ke BAB 6 — Forms

Di BAB 5 ini, kamu telah berhasil **memperkaya portfolio pribadimu dengan mengelompokkan keahlian ke dalam nested list dan merangkum evaluasi proyek koding dalam bentuk tabel semantik** pada Mini Project.

Namun, bagian Hubungi Saya (*contact*) di portfoliomu masih berupa tautan surel biasa. Pengunjung belum bisa mengetik pesan masukan langsung di websitemu.

Di **BAB 6 — Forms**, kita akan mempelajari cara merancang **Formulir Interaktif** menggunakan tag **`<form>`**, elemen input (**`<input>`** dengan berbagai tipe teks, email, sandi), area tulisan panjang (**`<textarea>`**), pilihan menu (**`<select>`**), serta tombol kirim (**`<button type="submit">`**). Kita akan menyulap bagian kontak di portfoliomu menjadi formulir kontak aktif yang bisa diisi pesan langsung oleh pengunjung!

Mari bersiap melangkah ke bab berikutnya!

**[Lanjut ke BAB 6 — Forms →](/bab6/introduction/)**
