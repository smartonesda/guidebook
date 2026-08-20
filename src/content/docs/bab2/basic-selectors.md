---
title: "2.1 Basic Selectors — Universal, Type, Class, & ID"
description: "Mempelajari 4 selector fundamental dalam CSS, perbedaan perannya, konsep compound selector, selector list, dan aturan penamaan standar industri."
---

Sebelum kita melangkah ke penargetan yang kompleks, kamu harus menguasai 4 pilar selector dasar yang menjadi blok bangunan dari hampir 90% kode CSS di dunia nyata:

1. **Universal Selector (`*`)**
2. **Type / Element Selector (`h1`, `p`, `button`)**
3. **Class Selector (`.card`, `.btn-primary`)**
4. **ID Selector (`#header`, `#app`)**

Mari kita bedah masing-masing secara mendalam.

---

## 1. Universal Selector (`*`)

**Universal Selector** ditandai dengan simbol bintang (`*`). Selector ini akan mencocokkan **setiap elemen tunggal** yang ada di dalam dokumen HTML atau di dalam scope tertentu.

```css
/* Menargetkan SEMUA elemen tanpa kecuali di seluruh halaman */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
```

### Kapan Menggunakan Universal Selector?
- **CSS Reset / Normalization:** Mengatur `box-sizing: border-box` secara global agar perhitungan ukuran elemen konsisten di seluruh browser.
- **Scoping Global di dalam Komponen:**
 ```css
 /* Mengatur border-box untuk semua anak di dalam komponen card */
 .card * {
 box-sizing: border-box;
 }
 ```

### [PERHATIAN] Kapan Menghindari Universal Selector?
Jangan menggunakan `*` untuk menerapkan properti visual berat seperti `border: 1px solid red;` atau `transition: all 0.3s;` secara global, karena browser harus menghitung ulang style untuk setiap elemen, yang dapat menurunkan performa rendering pada halaman dengan ribuan elemen.

---

## 2. Type / Element Selector

**Type Selector** (sering disebut *Tag Selector*) menargetkan elemen HTML berdasarkan **nama tag-nya**.

```css
/* Mengatur font seluruh heading tingkat 1 */
h1 {
 font-size: 2.25rem;
 line-height: 1.2;
}

/* Mengatur warna dasar seluruh paragraf */
p {
 color: #383840;
 line-height: 1.6;
}

/* Mengatur reset tombol */
button {
 cursor: pointer;
 font-family: inherit;
}
```

### Kapan Menggunakan Type Selector?
- **Base Typography & Document Resets:** Mengatur styling default untuk tag semantik seperti `body`, `h1–h6`, `p`, `blockquote`, `code`, dan `table`.
- **Aturan Global Tipografi:** Menetapkan ritme dasar dokumen sebelum class spesifik diterapkan.

---

## 3. Class Selector (`.`) — Sang Raja Reusability

**Class Selector** ditandai dengan tanda titik (`.`) yang diikuti oleh nama class. Selector ini memilih elemen apa pun yang memiliki atribut `class` yang cocok di HTML.

```html
<!-- HTML -->
<button class="btn btn-primary">Simpan Perubahan</button>
<a href="/login" class="btn btn-secondary">Masuk</a>
```

```css
/* CSS */
.btn {
 padding: 0.65rem 1.25rem;
 border-radius: 0.5rem;
 font-weight: 600;
 display: inline-flex;
}

.btn-primary {
 background-color: #e8392b;
 color: #ffffff;
}

.btn-secondary {
 background-color: #19191e;
 color: #f0f0f3;
}
```

### Keunggulan Utama Class Selector:
1. **Dapat Digunakan Berulang Kali (*Reusable*):** Satu class dapat dipasang pada ratusan elemen di halaman yang sama.
2. **Fleksibel Antar Tag:** Class `.badge` bisa dipasang pada `<span>`, `<div>`, `<a>`, atau `<p>`.
3. **Mudah Dirawat (*Maintainable*):** Bobot spesifisitasnya ideal—tidak terlalu kuat dan tidak terlalu lemah.

---

## 4. ID Selector (`#`)

**ID Selector** ditandai dengan tanda pagar (`#`) yang diikuti oleh nama ID. Selector ini mencocokkan elemen yang memiliki atribut `id` yang unik.

```html
<!-- HTML -->
<header id="main-header">
 <div id="user-profile">...</div>
</header>
```

```css
/* CSS */
#main-header {
 position: sticky;
 top: 0;
 z-index: 100;
}
```

### [PERHATIAN] Bahaya Penggunaan ID Selector dalam CSS:
Dalam standar HTML, sebuah `id` **hanya boleh muncul satu kali per halaman**. Selain itu, ID selector memiliki **bobot spesifisitas yang sangat tinggi**. Jika kamu memberi style dengan `#main-header a`, akan sangat sulit untuk menimpa (*override*) aturan tersebut di bagian lain tanpa menggunakan `!important`.

> [TIPS] **Best Practice Industri:** 
> Gunakan atribut `id` untuk jangkar navigasi (*anchor links* `#section-id`) dan manipulasi JavaScript (`document.getElementById`). Untuk urusan styling CSS, **selalu prioritaskan Class Selector**.

---

## 5. Compound Selector & Chaining (Menggabungkan Selector)

Ketika kamu menempelkan dua selector **tanpa spasi**, kamu menciptakan **Compound Selector**. Artinya: elemen harus memenuhi **kedua kriteria secara bersamaan**.

```css
/* 1. Element + Class (Hanya tag button yang memiliki class .danger) */
button.danger {
 background-color: #dc2626;
 color: white;
}

/* 2. Chaining Multiple Classes (Elemen yang memiliki KEDUA class sekaligus) */
.card.featured {
 border: 2px solid #e8392b;
 box-shadow: 0 8px 24px rgba(232, 57, 43, 0.2);
}
```

Perhatikan perbedaannya dengan spasi:

```text
.card.featured → SATU elemen yang memiliki class 'card' DAN class 'featured'
.card .featured → Elemen '.featured' yang berada DI DALAM elemen '.card' (Descendant)
```

---

## 6. Selector List / Grouping (Pemisah Koma `,`)

Jika beberapa elemen membutuhkan aturan styling yang persis sama, jangan menulis ruleset berulang kali. Gabungkan mereka menggunakan tanda koma (`,`):

```css
/* [SALAH] Buruk (Duplikasi kode) */
h1 {
 font-family: "Inter", sans-serif;
 color: #f0f0f3;
}
h2 {
 font-family: "Inter", sans-serif;
 color: #f0f0f3;
}
h3 {
 font-family: "Inter", sans-serif;
 color: #f0f0f3;
}

/* [BENAR] Bersih & Efisien (Selector List) */
h1, h2, h3 {
 font-family: "Inter", sans-serif;
 color: #f0f0f3;
}
```

> [PERHATIAN] **Catatan Penting Error Recovery:** 
> Pada selector list standar, jika salah satu selector di dalam daftar tidak valid (misalnya typo vendor prefix), browser lama akan **mengabaikan seluruh baris aturan**. Di modul 2.7 kita akan mempelajari bagaimana pseudo-class modern `:is()` menyelesaikan masalah ini!

---

## Try-It Challenge: Tebak Elemen yang Terpilih!

Diberikan kode HTML berikut:

```html
<article class="post featured">
 <h2 class="title">Belajar CSS</h2>
 <p class="summary">Fondasi web modern.</p>
 <button class="btn primary">Baca Selengkapnya</button>
 <a class="btn primary">Bookmark</a>
</article>
```

Tentukan selector mana yang akan memilih:
1. Hanya tag `<button>` yang memiliki class `primary`? &rarr; `button.primary`
2. Elemen `<article>` yang memiliki class `post` dan `featured`? &rarr; `.post.featured` atau `article.post.featured`
3. Seluruh elemen judul `<h2>` dan paragraf `<p>` sekaligus? &rarr; `h2, p`

---

## Ringkasan Sintaks Dasar

| Selector | Sintaks | Contoh | Keterangan |
|:---|:---|:---|:---|
| **Universal** | `*` | `* { box-sizing: border-box; }` | Memilih semua elemen |
| **Type / Element** | `tag` | `p { line-height: 1.6; }` | Memilih berdasarkan tag HTML |
| **Class** | `.class` | `.card { border-radius: 8px; }` | Memilih berdasarkan class (bisa jamak) |
| **ID** | `#id` | `#app { min-height: 100vh; }` | Memilih elemen unik berdasarkan ID |
| **Compound** | `tag.class` | `button.primary { ... }` | Memilih elemen yang memenuhi kedua kriteria |
| **Grouping** | `a, b` | `h1, h2, h3 { ... }` | Menerapkan ruleset ke beberapa selector |