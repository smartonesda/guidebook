---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat memformat Lists & Tables.
---

Berikut adalah daftar kesalahan paling sering dilakukan pemula saat menyusun daftar (*lists*) dan tabel (*tables*) di HTML5, beserta cara mengatasinya.

---

## ❌ 1. Menulis Teks Langsung di dalam Tag `<ul>` atau `<ol>`

**Penyebab Error**:
```html
<!-- ❌ SALAH: Teks menyimpang tanpa dibungkus li -->
<ul>
  Daftar Keahlian:
  <li>HTML5</li>
  <li>CSS3</li>
</ul>
```

**Mengapa Bermasalah**: Sesuai spesifikasi resmi W3C, satu-satunya tag anak yang boleh diletakkan langsung di bawah tag `<ul>` atau `<ol>` adalah tag **`<li>`** (atau tag template). Meletakkan teks biasa secara langsung akan memicu error di HTML Validator dan mengacaukan pembacaan screen reader.

**Cara Memperbaiki**: Letakkan teks penjelasan di luar tag `<ul>`, atau bungkus di dalam tag `<li>`:
```html
<!-- ✅ BENAR: Struktur rapi dan valid -->
<p>Daftar Keahlian:</p>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
</ul>
```

---

## ❌ 2. Kesalahan Letak Penutup Tag `</li>` pada Nested List

**Penyebab Error**:
```html
<!-- ❌ SALAH: Tag li induk ditutup sebelum ul anak dimulai -->
<ul>
  <li>Belajar HTML</li>
  <ul>
    <li>Fundamentals</li>
  </ul>
</ul>
```

**Mengapa Bermasalah**: Tag `<ul>` anak (nested) menjadi sejajar dengan tag `<li>` induk di bawah tag `<ul>` terluar. Hal ini tidak valid karena tag `<ul>` induk hanya boleh membungkus `<li>`.

**Cara Memperbaiki**: Bungkus tag `<ul>` anak di dalam tag `<li>` induk sebelum tag `</li>` ditutup:
```html
<!-- ✅ BENAR: Nested list yang valid -->
<ul>
  <li>
    Belajar HTML
    <ul>
      <li>Fundamentals</li>
    </ul>
  </li>
</ul>
```

---

## ❌ 3. Sel Tabel `<td>` atau `<th>` di Luar Baris `<tr>`

**Penyebab Error**:
```html
<!-- ❌ SALAH: Sel melayang tanpa baris wrapper -->
<table>
  <th>Nama</th>
  <th>Nilai</th>
  <tr>
    <td>Rizki</td>
    <td>90</td>
  </tr>
</table>
```

**Mengapa Bermasalah**: Elemen sel (`<th>` dan `<td>`) tidak boleh berdiri sendiri di dalam `<table>` atau `<tbody>`. Mereka wajib diletakkan di dalam baris pembungkus **`<tr>`** (Table Row).

**Cara Memperbaiki**: Bungkus setiap kelompok sel mendatar dengan tag `<tr>`:
```html
<!-- ✅ BENAR: Struktur tabel berbaris rapi -->
<table>
  <tr>
    <th>Nama</th>
    <th>Nilai</th>
  </tr>
  <tr>
    <td>Rizki</td>
    <td>90</td>
  </tr>
</table>
```

---

## ❌ 4. Ketidakseimbangan Jumlah Kolom (Cell Count Mismatch)

**Penyebab Error**:
```html
<!-- ❌ SALAH: Baris kedua kekurangan sel (tabel terlihat buntung) -->
<table>
  <tr>
    <th>Nama</th>
    <th>Teori</th>
    <th>Praktik</th> <!-- Ada 3 kolom -->
  </tr>
  <tr>
    <td>Rizki</td>
    <td>90</td> <!-- Hanya ada 2 kolom! -->
  </tr>
</table>
```

**Mengapa Bermasalah**: Jumlah sel di setiap baris harus konsisten secara matematis. Jika tidak seimbang, tampilan kanan tabel akan terlihat kosong/buntung.

**Cara Memperbaiki**: Pastikan setiap baris memiliki jumlah sel yang sama (atau digabungkan memakai `colspan`):
```html
<!-- ✅ BENAR: Rapi dan seimbang -->
<table>
  <tr>
    <th>Nama</th>
    <th>Teori</th>
    <th>Praktik</th>
  </tr>
  <tr>
    <td>Rizki</td>
    <td>90</td>
    <td>-</td>
  </tr>
</table>
```

Mari kita lanjut ke halaman ringkasan untuk merekap seluruh pembelajaran di BAB 5!

**[Lanjut: Ringkasan →](/bab5/ringkasan/)**
