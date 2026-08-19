---
title: "Atribut List & Nested List"
description: Menggunakan atribut start, reversed, type pada ordered list dan merancang struktur daftar bersarang (nested list).
---

Untuk daftar terurut (`<ol>`), kita sering membutuhkan kustomisasi penomoran — misalnya memulai hitungan dari angka tertentu, menghitung mundur, atau mengganti angka menjadi huruf Romawi. 

HTML menyediakan atribut khusus untuk kebutuhan tersebut.

---

## 🛠️ Atribut pada Ordered List (`<ol>`)

### 1. Atribut `start`
Menentukan dari angka berapakah daftar hitungan dimulai.
```html
<!-- Memulai hitungan dari angka 5 -->
<ol start="5">
  <li>Buka VS Code</li> <!-- Tampil sebagai angka 5 -->
  <li>Ketik kode</li>     <!-- Tampil sebagai angka 6 -->
</ol>
```

### 2. Atribut `reversed` (Boolean)
Membalikkan urutan hitungan menjadi hitung mundur.
```html
<!-- Menghitung mundur dari jumlah item (3, 2, 1) -->
<ol reversed>
  <li>Juara 1</li> <!-- Angka 3 -->
  <li>Juara 2</li> <!-- Angka 2 -->
  <li>Juara 3</li> <!-- Angka 1 -->
</ol>
```

### 3. Atribut `type`
Mengubah gaya penomoran menjadi huruf besar/kecil atau angka Romawi.
- `type="A"`: Huruf besar (A, B, C...)
- `type="a"`: Huruf kecil (a, b, c...)
- `type="I"`: Romawi besar (I, II, III, IV...)
- `type="i"`: Romawi kecil (i, ii, iii, iv...)

```html
<!-- Penomoran menggunakan huruf Romawi besar -->
<ol type="I">
  <li>Dasar HTML</li>
  <li>Tipografi HTML</li>
</ol>
```

---

## 🪆 Daftar Bersarang: Nested List

**Nested List** adalah kondisi di mana ada sebuah daftar di dalam daftar lainnya (anak dari tag `<li>` adalah tag `<ul>` atau `<ol>` baru).

Aturan penulisan nesting yang benar sangatlah krusial: **Tag daftar anak harus diletakkan di dalam tag `<li>` induk, sebelum tag `</li>` ditutup.**

```html
<!-- ✅ BENAR: Struktur daftar bersarang yang valid -->
<ul>
  <li>
    Front-End Development
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
    </ul>
  </li> <!-- Tag li induk ditutup di sini -->
  <li>Back-End Development</li>
</ul>
```

### ⚠️ Kesalahan Umum: Menutup `<li>` Terlalu Cepat
Pemula sering menutup tag `</li>` induk terlebih dahulu sebelum menulis daftar anaknya:

```html
<!-- ❌ SALAH: Tag ul anak berada di luar li, langsung di bawah ul induk -->
<ul>
  <li>Front-End Development</li>
  <ul> <!-- Tidak valid! ul tidak boleh menjadi anak langsung dari ul -->
    <li>HTML5</li>
  </ul>
</ul>
```

Merapikan posisi indentasi (menjorok masuk 2 spasi) saat menulis nested list sangat membantu mencegah kesalahan penutupan tag ini.

Mari kita bahas jenis daftar ketiga di HTML: Description List.

**[Lanjut: Description List dl →](/bab5/description-list-dl/)**
