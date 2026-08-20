---
title: "2.11 Challenge Lab — 5 Lab Teka-Teki Selector"
description: "Uji ketajaman intuisimu dalam menargetkan elemen HTML dengan 5 skenario lab teka-teki — dari selector combinator hingga trik :has() dan :nth-child()."
---

Selamat datang di **Selector Challenge Lab**! Di lab ini, tugasmu adalah menemukan **selector CSS yang paling presisi dan efisien** untuk setiap tantangan skenario di bawah ini.

---

## Lab 1: Selector Silsilah Navigasi (Combinator Challenge)

Diberikan struktur HTML navigasi berikut:

```html
<nav class="main-nav">
 <a href="/" class="active">Beranda</a>
 <div class="dropdown">
 <a href="/products">Produk</a>
 <div class="dropdown-menu">
 <a href="/products/app">Aplikasi</a>
 <a href="/products/web">Web</a>
 </div>
 </div>
 <a href="/about">Tentang Kami</a>
</nav>
```

**Tantangan:**
Tulis **satu selector** yang HANYA memilih link utama tingkat atas ("Beranda", "Produk", "Tentang Kami"), dan **TIDAK** memilih link di dalam `.dropdown-menu`!

<details>
<summary> Lihat Solusi Lab 1</summary>

```css
/* Menggunakan Child Combinator > dan :is() */
.main-nav > a,
.main-nav > .dropdown > a {
 font-weight: 700;
}

/* Atau lebih ringkas dengan :is(): */
.main-nav > :is(a, .dropdown > a) {
 font-weight: 700;
}
```
</details>

---

## Lab 2: Pola Tabel Data Belang-Belang (Nth-Child Mastery)

Diberikan tabel dengan 10 baris:

```html
<table class="data-table">
 <tbody>
 <tr><td>Baris 1</td></tr>
 <tr><td>Baris 2</td></tr>
 <tr><td>Baris 3</td></tr>
 <tr><td>Baris 4</td></tr>
 <tr><td>Baris 5</td></tr>
 <tr><td>Baris 6</td></tr>
 <tr><td>Baris 7</td></tr>
 <tr><td>Baris 8</td></tr>
 <tr><td>Baris 9</td></tr>
 <tr><td>Baris 10</td></tr>
 </tbody>
</table>
```

**Tantangan:**
1. Beri warna latar belakang pada setiap **baris genap** (2, 4, 6, 8, 10).
2. Beri teks tebal warna merah pada **3 baris pertama saja** (1, 2, 3).
3. Beri border tebal hanya pada **baris ke-5 dan ke-10** (kelipatan 5).

<details>
<summary> Lihat Solusi Lab 2</summary>

```css
/* 1. Baris genap */
.data-table tbody tr:nth-child(even) {
 background-color: #19191e;
}

/* 2. Tiga baris pertama */
.data-table tbody tr:nth-child(-n + 3) {
 color: #e8392b;
 font-weight: 700;
}

/* 3. Kelipatan 5 (5 dan 10) */
.data-table tbody tr:nth-child(5n) {
 border-left: 4px solid #34d399;
}
```
</details>

---

## Lab 3: Filter Otomatis Jenis File (Attribute Selector Hunt)

Diberikan daftar unduhan:

```html
<ul class="file-list">
 <li><a href="document.pdf">Laporan Tahunan</a></li>
 <li><a href="https://example.com/slide.pdf">Slide Presentasi (Web)</a></li>
 <li><a href="dataset.csv">Data Penjualan</a></li>
 <li><a href="archive.zip">File Backup</a></li>
 <li><a href="photo.PNG">Foto Dokumentasi</a></li>
</ul>
```

**Tantangan:**
1. Targetkan semua file PDF (baik huruf `.pdf` kecil maupun `.PNG` besar tanpa peduli case).
2. Targetkan link yang mengarah ke website luar (`https://`).

<details>
<summary> Lihat Solusi Lab 3</summary>

```css
/* 1. PDF case-insensitive */
a[href$=".pdf" i] {
 color: #ef4444;
}

/* 2. Link eksternal HTTPS */
a[href^="https://"] {
 font-weight: 700;
}
```
</details>

---

## Lab 4: Validasi Form Tanpa JavaScript (The `:has()` Power)

Diberikan struktur formulir pendaftaran:

```html
<form class="register-form">
 <div class="field-group">
 <label for="username">Username</label>
 <input type="text" id="username" required minlength="4" />
 </div>

 <div class="field-group">
 <label for="email">Email</label>
 <input type="email" id="email" required />
 </div>

 <button type="submit" class="submit-btn">Daftar Sekarang</button>
</form>
```

**Tantangan:**
Gunakan `:has()` untuk:
1. Mengubah border `.field-group` menjadi hijau jika input di dalamnya valid dan sudah terisi teks (`:valid:not(:placeholder-shown)`).
2. Menonaktifkan / meredupkan tombol submit jika formulir masih memiliki input yang tidak valid!

<details>
<summary> Lihat Solusi Lab 4</summary>

```css
/* 1. Highlight field group yang valid */
.field-group:has(input:valid:not(:placeholder-shown)) {
 border-color: #22c55e;
}

/* 2. Tombol submit redup jika ada input yang invalid */
.register-form:has(input:invalid) .submit-btn {
 opacity: 0.5;
 pointer-events: none;
 filter: grayscale(1);
}
```
</details>

---

## Lab 5: The Selector Golf Challenge

**Aturan Main:** Tulis selector sesingkat dan seefisien mungkin untuk menargetkan elemen `<p>` yang memiliki class `.lead`, berada di dalam `<article>`, dan BUKAN elemen pertama!

```html
<article class="post">
 <p class="lead">Paragraf 1 (Pertama)</p>
 <p class="lead">Paragraf 2 (Targetmu!)</p>
 <p>Paragraf 3</p>
</article>
```

<details>
<summary> Lihat Solusi Lab 5</summary>

```css
/* Jawaban Juara Selector Golf (Paling Presisi) */
.post p.lead:not(:first-child) {
 color: #e8392b;
}

/* Atau jika letaknya tepat setelah paragraf pertama: */
p.lead + p.lead {
 color: #e8392b;
}
```
</details>