---
title: "Mini Project"
description: Susun daftar keahlian, riwayat pendidikan, dan tabel perbandingan proyek di halaman portfolio pribadimu.
---

Saatnya melanjutkan pengembangan proyek portfolio pribadimu! Di bab ini, kita akan merapikan data portfolio `index.html` dan `projects.html` dengan mengelompokkan informasi ke dalam bentuk daftar terurut/tidak terurut (*lists*) dan merancang tabel data perbandingan (*table*) yang rapi.

Proyek ini adalah **versi pembaruan (v0.5)** dari halaman portofolio pribadimu.

---

## 🎯 Deskripsi Project

Buka kembali file `index.html` dan `projects.html` di editor VS Code-mu, lalu modifikasi kode HTML-nya agar:
1. **Daftar Keahlian Utama** (di `index.html`): Disusun rapi menggunakan **Nested Unordered List** (`<ul>` di dalam `<li>`).
2. **Keterangan Profil** (di `index.html`): Disusun menggunakan **Description List** (`<dl>`, `<dt>`, `<dd>`) untuk menampilkan pasangan nama dan domisili/jurusan.
3. **Tabel Ringkasan Proyek** (di `projects.html`): Menyusun data evaluasi teknis proyek yang pernah kamu buat dalam bentuk **Tabel Semantik** lengkap (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`).
4. **Penggabungan Sel**: Menggunakan atribut `colspan` di bagian baris footer tabel untuk menampilkan total kalkulasi waktu pengerjaan.

---

## 📋 Requirements Wajib

### A. Penyusunan Daftar (Lists) (40 poin)

- [ ] Di dalam halaman `index.html`, ubah paragraf teks keahlian menjadi **Nested Unordered List** (`<ul>` bersarang). Bagi minimal ke dalam 2 sub-kategori utama (misalnya: *Keahlian Utama* dan *Alat Pendukung*).
- [ ] Di dalam halaman `index.html`, gunakan **Description List** (`<dl>`) untuk merapikan informasi data diri di bagian atas halaman (menyandingkan istilah *Domisili*, *Sekolah*, atau *Jurusan* dengan isian datanya masing-masing).
- [ ] Di dalam menu navigasi, pertahankan struktur link navigasi yang sudah ada.

### B. Penyusunan Tabel Data (Tabular Data) (45 poin)

- [ ] Di bagian bawah halaman `projects.html`, buatlah sebuah tabel data menggunakan tag `<table>` yang merangkum rincian proyek kodingmu dari BAB 1 hingga BAB 4.
- [ ] Wajib menyertakan tag `<caption>` untuk memberikan judul keterangan tabel yang jelas.
- [ ] Wajib membagi wilayah tabel secara semantik menggunakan tag **`<thead>`** (berisi judul kolom `<th>`), **`<tbody>`** (berisi data baris `<td>`), dan **`<tfoot>`** (berisi total rekap data).
- [ ] Gunakan atribut **`colspan`** di bagian `<tfoot>` untuk menggabungkan sel kolom teks judul total agar sejajar dengan sel nilai totalnya.
- [ ] **Data Table vs Layout Table**: Tabel hanya digunakan untuk data teknis ini. Jangan gunakan tabel untuk menyusun posisi layout navigasi atau tata letak halaman.

### C. Kualitas Kode & Validasi (15 poin)

- [ ] Gunakan indentasi 2 spasi secara disiplin pada nested list dan baris tabel (`<tr>` → `<td>`).
- [ ] **0 Error** di W3C Validator (`validator.w3.org`) untuk kedua file HTML-mu.

---

## 📝 Contoh Referensi Kode Pembantu

Gunakan potongan kode ini sebagai referensi penulisan tag baru di dalam dokumenmu:

### Contoh Struktur Nested List (`index.html`)
```html
<ul>
  <li>
    Keahlian Teknis
    <ul>
      <li>HTML5 (Struktur)</li>
      <li>CSS3 (Gaya Tampilan)</li>
    </ul>
  </li>
  <li>
    Peralatan Kerja
    <ul>
      <li>VS Code</li>
      <li>Chrome DevTools</li>
    </ul>
  </li>
</ul>
```

### Contoh Struktur Tabel Semantik (`projects.html`)
```html
<table>
  <caption>Daftar Evaluasi Waktu Pengerjaan Proyek</caption>
  <thead>
    <tr>
      <th>Versi</th>
      <th>Topik Proyek</th>
      <th>Waktu Kerja</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>v0.1</td>
      <td>Fundamentals (BAB 1)</td>
      <td>3 Jam</td>
    </tr>
    <tr>
      <td>v0.2</td>
      <td>Typography (BAB 2)</td>
      <td>2 Jam</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total Waktu</td>
      <td>5 Jam</td>
    </tr>
  </tfoot>
</table>
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin Maksimal |
|---|---|---|
| **Daftar Semantik** | Nested list ul terstruktur rapi, dl dt dd digunakan secara pas sesuai pasangan nilai-kunci. | 40 |
| **Anatomi & Struktur Tabel** | table, caption, thead, tbody, tfoot, th, tr, dan td terpasang valid secara semantik. | 40 |
| **Colspan & Validasi W3C** | colspan digunakan secara seimbang sesuai rumus kolom, dokumen lolos uji validator. | 20 |
| **Total** | | **100** |

---

## ✅ Checklist Sebelum Mengumpulkan

Buka file `index.html` dan `projects.html` di browsermu lewat Live Server, lalu pastikan:
```
☐ Daftar keahlian menampilkan poin peluru bersarang yang menjorok rapi.
☐ Informasi data diri di bawah foto profil tampil dengan struktur dl.
☐ Tabel data proyek tampil dengan judul keterangan di atasnya.
☐ Baris total di bagian bawah tabel tergabung rapi menggunakan colspan.
☐ Kedua file HTML lolos uji validasi di validator.w3.org dengan warna hijau.
```

Portfolio pribadimu sekarang sudah memiliki konten data yang terstruktur rapi dan mudah dibandingkan! Pada bab selanjutnya, kita akan belajar membuat formulir input (*forms*) agar website portfolio-mu bisa menerima data pesan dan surel langsung dari pengunjung.

**[Lanjut: Challenge →](/bab5/challenge/)**
