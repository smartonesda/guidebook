---
title: "2.12 Error Corner — 7 Kesalahan Fatal Seputar Selector"
description: "Diagnosis mendalam 7 kesalahan paling umum seputar CSS selectors yang sering membuat developer pemula bingung dan frustrasi, lengkap dengan solusinya."
---

Mengetahui kesalahan umum sebelum kamu mengalaminya adalah cara tercepat menjadi developer yang handal. Berikut adalah 7 jebakan klasik seputar selector CSS:

---

## [SALAH] Error 1: Tertukar Antara Spasi (Descendant) dan Tanpa Spasi (Compound)

```css
/* [SALAH] Maksud developer: Memilih elemen dengan 2 class (.btn DAN .danger) */
.btn .danger {
 background: red;
}
/* KENAPA SALAH?
 Karena ada spasi, browser mencari elemen .danger yang berada DI DALAM elemen .btn! */

/* [BENAR] Solusi: Tempelkan tanpa spasi */
.btn.danger {
 background: red;
}
```

---

## [SALAH] Error 2: Bingung Antara `:nth-child` dan `:nth-of-type` Saat Ada Tag Campuran

```html
<div class="list">
 <h3>Header</h3>
 <p>Paragraf Pertama</p>
</div>
```

```css
/* [SALAH] Maksud developer: Memilih paragraf pertama */
.list p:first-child {
 color: red;
}
/* KENAPA TIDAK BEKERJA?
 Karena anak ke-1 adalah <h3>, bukan <p>. Aturan p:first-child gagal total! */

/* [BENAR] Solusi: Gunakan :first-of-type */
.list p:first-of-type {
 color: red;
}
```

---

## [SALAH] Error 3: Lupa Mendeklarasikan `content: ""` pada `::before` / `::after`

```css
/* [SALAH] Tidak akan pernah muncul di layar */
.badge::before {
 width: 10px;
 height: 10px;
 background: #e8392b;
 display: inline-block;
}

/* [BENAR] Solusi: Wajib tambahkan properti content */
.badge::before {
 content: "";
 width: 10px;
 height: 10px;
 background: #e8392b;
 display: inline-block;
}
```

---

## [SALAH] Error 4: Menggunakan ID Selector untuk Reusable Component Styles

```css
/* [SALAH] Buruk: Spesifisitas terlalu tinggi & tidak bisa dipakai ulang */
#product-card {
 border-radius: 8px;
 padding: 16px;
}

/* [BENAR] Solusi: Selalu gunakan Class Selector untuk styling komponen */
.product-card {
 border-radius: 8px;
 padding: 16px;
}
```

---

## [SALAH] Error 5: Urutan LVHA Terbalik pada Tautan Link

```css
/* [SALAH] Efek hover tidak akan muncul pada link yang sudah pernah dikunjungi! */
a:hover {
 color: red;
}
a:visited {
 color: purple;
}

/* [BENAR] Solusi: Taati urutan LVHA (Link, Visited, Hover, Active) */
a:link { color: blue; }
a:visited { color: purple; }
a:hover { color: red; }
a:active { color: orange; }
```

---

## [SALAH] Error 6: Rantai Selector Terlalu Dalam & Rapuh (*Over-Nesting*)

```css
/* [SALAH] Sangat rapuh jika HTML diubah sedikit saja */
header.top-nav > div.container > ul.menu-items > li.item > a.nav-link {
 font-weight: 700;
}

/* [BENAR] Solusi: Targetkan langsung class yang bermakna */
.nav-link {
 font-weight: 700;
}
```

---

## [SALAH] Error 7: Salah Menggunakan Titik Dua Ganda `::` untuk Pseudo-Class

```css
/* [SALAH] Salah: :hover adalah pseudo-class (state), bukan pseudo-element */
button::hover {
 opacity: 0.8;
}

/* [BENAR] Benar */
button:hover {
 opacity: 0.8;
}

/* [TIPS] Aturan Ingat Cepat:
 - Status / Kondisi = Titik dua SATU (:) → :hover, :focus, :checked
 - Elemen Virtual / Sub-Bagian = Titik dua DUA (::) → ::before, ::after, ::selection */
```