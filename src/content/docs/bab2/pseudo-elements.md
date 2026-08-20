---
title: "2.6 Pseudo-Elements — Elemen Virtual & Sub-Struktur"
description: "Memahami cara kerja pseudo-element dengan double colon (::), membuat elemen virtual dengan ::before dan ::after, serta styling sub-elemen seperti ::selection dan ::placeholder."
---

Jika **Pseudo-Class (`:`)** memilih elemen yang *sudah ada* berdasarkan statusnya, maka **Pseudo-Element (`::`)** memungkinkan kita membuat **elemen virtual baru** atau memilih **bagian sub-spesifik** dari sebuah elemen yang tidak memiliki tag HTML tersendiri.

Standar modern CSS3 menggunakan **tanda titik dua ganda (`::`)** untuk membedakan pseudo-element dari pseudo-class.

---

## 1. Sang Bintang Utama: `::before` & `::after`

`::before` dan `::after` menyisipkan elemen virtual **di dalam elemen target**—masing-masing tepat sebelum dan tepat setelah konten teks elemen tersebut.

```text
<button class="btn">
 [::before disisipkan di sini]
 Kirim Pesan
 [::after disisipkan di sini]
</button>
```

### [PERHATIAN] Hukum Wajib: Properti `content`!
Tanpa mendeklarasikan properti `content`, pseudo-element `::before` dan `::after` **tidak akan pernah dirender oleh browser**, meskipun string-nya kosong (`content: ""`):

```css
/* [BENAR] Contoh 1: Menambahkan icon panah setelah teks tombol */
.btn-next::after {
 content: " →";
 font-weight: bold;
}

/* [BENAR] Contoh 2: Membuat garis aksen dekoratif di bawah judul */
.section-title {
 position: relative;
 padding-bottom: 0.5rem;
}

.section-title::after {
 content: "";
 position: absolute;
 bottom: 0;
 left: 0;
 width: 48px;
 height: 3px;
 background: #e8392b;
 border-radius: 999px;
}
```

### Keuntungan `::before` & `::after`:
- **HTML Bersih:** Menghindari penambahan tag kosong seperti `<span class="icon-arrow"></span>` atau `<div class="underline"></div>` yang mengotori struktur HTML.
- **Sempurna untuk Efek Visual:** Badge notifikasi, overlay gelap pada gambar, tooltip, dan micro-interaction.

---

## 2. Tipografi Editorial: `::first-letter` & `::first-line`

### A. `::first-letter` (Drop Cap Majalah)
Memilih huruf pertama dari blok teks paragraf:

```css
/* Membuat huruf pertama besar seperti koran/majalah */
.article-lead p:first-of-type::first-letter {
 font-size: 3rem;
 font-weight: 800;
 float: left;
 line-height: 1;
 margin-right: 0.5rem;
 color: #e8392b;
}
```

### B. `::first-line`
Memilih seluruh baris pertama teks (panjang baris ini akan menyesuaikan secara dinamis saat ukuran layar membesar/mengecil!):

```css
.article p::first-line {
 font-weight: 600;
 color: #f0f0f3;
}
```

---

## 3. Interaksi Teks: `::selection`

Mengatur warna latar belakang dan teks ketika pengguna **memblok / menyorot teks** di layar menggunakan kursor mouse:

```css
/* Custom warna highlight teks sesuai tema website */
::selection {
 background-color: #e8392b;
 color: #ffffff;
}
```

---

## 4. Elemen Bawaan Form & List

### A. `::placeholder`
Mengatur warna dan format teks placeholder di dalam input form:

```css
input::placeholder {
 color: #636370;
 font-style: italic;
 opacity: 1;
}
```

### B. `::marker`
Mengubah warna dan bentuk bullet/angka bawaan pada tag `<li>` atau `<summary>`:

```css
li::marker {
 color: #e8392b;
 font-size: 1.1em;
}
```

### C. `::file-selector-button`
Memberi style kustom pada tombol unggah file bawaan browser (`<input type="file">`):

```css
input[type="file"]::file-selector-button {
 background-color: #19191e;
 color: #f0f0f3;
 border: 1px solid rgba(255, 255, 255, 0.1);
 padding: 0.4rem 0.8rem;
 border-radius: 0.375rem;
 cursor: pointer;
 margin-right: 0.75rem;
}
```

---

## Ringkasan Pseudo-Element vs Pseudo-Class

| Fitur | Simbol | Fungsi | Contoh |
|:---|:---:|:---|:---|
| **Pseudo-Class** | `:` | Memilih elemen berdasarkan **status/kondisi** | `:hover`, `:checked`, `:first-child` |
| **Pseudo-Element** | `::` | Membuat elemen **virtual** atau memilih **sub-bagian** | `::before`, `::after`, `::selection` |