---
title: "2.3 Attribute Selectors — Menargetkan Berdasarkan Data HTML"
description: "Menguasai teknik memilih elemen berdasarkan keberadaan atribut, nilai persis, pencocokan substring (prefix, suffix, contains), dan data-attributes."
---

HTML kaya akan **atribut**: `type`, `href`, `src`, `disabled`, `target`, `required`, hingga atribut kustom seperti `data-theme` dan `data-status`.

**Attribute Selector** memungkinkan kita memberi style langsung berdasarkan **keberadaan** atau **nilai spesifik** dari atribut-atribut tersebut tanpa perlu menambahkan class baru secara manual.

---

## 1. Keberadaan Atribut Sederhana (`[attribute]`)

Bentuk paling dasar memeriksa apakah suatu elemen memiliki atribut tertentu, tanpa peduli apa isinya:

```css
/* Menargetkan tombol apa pun yang memiliki atribut disabled */
button[disabled] {
 opacity: 0.5;
 cursor: not-allowed;
}

/* Menargetkan input yang wajib diisi */
input[required] {
 border-left: 3px solid #e8392b;
}

/* Menargetkan link yang membuka tab baru */
a[target] {
 text-decoration-style: dashed;
}
```

---

## 2. Nilai Atribut Persis (`[attribute="value"]`)

Mencocokkan elemen yang memiliki nilai atribut **persis sama (exact match)**:

```css
/* Menargetkan input teks biasa */
input[type="text"] {
 background-color: #19191e;
 color: #f0f0f3;
}

/* Menargetkan input password */
input[type="password"] {
 letter-spacing: 0.25em;
}

/* Menargetkan link eksternal yang membuka tab baru */
a[target="_blank"] {
 font-weight: 600;
}
```

---

## 3. Kekuatan Pencocokan Substring (*Substring Matching*)

Inilah salah satu fitur paling powerful di CSS modern: kamu bisa mencari potongan teks di dalam atribut menggunakan karakter regex sederhana (`^=`, `$=`, `*=`):

```text
[attr^="val"] → Diawali dengan (Prefix / Starts with)
[attr$="val"] → Diakhiri dengan (Suffix / Ends with)
[attr*="val"] → Mengandung kata (Contains anywhere)
[attr~="val"] → Mengandung kata utuh yang dipisah spasi
[attr|="val"] → Mengandung kata utuh yang dipisah strip hyphen
```

### A. Prefix: Diawali dengan (`^=`)
Sangat berguna untuk mengenali protokol URL link:

```css
/* Menargetkan semua link yang mengarah ke website aman HTTPS */
a[href^="https://"] {
 color: #60a5fa;
}

/* Menargetkan link nomor telepon */
a[href^="tel:"] {
 color: #34d399;
}

/* Menargetkan link surel email */
a[href^="mailto:"] {
 color: #fbbf24;
}
```

### B. Suffix: Diakhiri dengan (`$=`)
Sangat populer untuk memberi icon/warna khusus berdasarkan format file unduhan:

```css
/* Memberi tanda link yang mengarah ke file dokumen PDF */
a[href$=".pdf"] {
 padding-right: 20px;
 background: url('/icons/pdf-icon.svg') no-repeat right center;
}

/* Memberi tanda link file arsip ZIP */
a[href$=".zip"] {
 color: #a78bfa;
}
```

### C. Contains: Mengandung teks di mana saja (`*=`)
Mencari substring di posisi mana pun:

```css
/* Menargetkan semua class yang mengandung kata 'btn-' */
[class*="btn-"] {
 transition: transform 0.2s ease;
}

/* Menargetkan link yang mengarah ke YouTube */
a[href*="youtube.com"] {
 color: #ff0000;
}
```

---

## 4. Studi Kasus Modern: Styling Custom `data-*` Attributes

Di era framework web modern (React, Vue, Astro, Tailwind), developer sering menggunakan atribut `data-*` untuk menyimpan state komponen. Kamu bisa menargetkannya langsung dengan CSS tanpa JavaScript tambahan:

```html
<!-- HTML Komponen Status Pesanan -->
<div class="order-badge" data-status="pending">Menunggu Pembayaran</div>
<div class="order-badge" data-status="shipped">Sedang Dikirim</div>
<div class="order-badge" data-status="delivered">Selesai</div>
```

```css
/* Base badge */
.order-badge {
 padding: 0.35rem 0.75rem;
 border-radius: 999px;
 font-size: 0.75rem;
 font-weight: 600;
}

/* State dinamis via Attribute Selector */
.order-badge[data-status="pending"] {
 background-color: rgba(251, 191, 36, 0.12);
 color: #fbbf24;
 border: 1px solid rgba(251, 191, 36, 0.3);
}

.order-badge[data-status="shipped"] {
 background-color: rgba(96, 165, 250, 0.12);
 color: #60a5fa;
 border: 1px solid rgba(96, 165, 250, 0.3);
}

.order-badge[data-status="delivered"] {
 background-color: rgba(52, 211, 153, 0.12);
 color: #34d399;
 border: 1px solid rgba(52, 211, 153, 0.3);
}
```

---

## 5. Case-Sensitivity Flag (`i` dan `s`)

Secara default, pencocokan atribut di HTML case-insensitive untuk elemen standar, tetapi bisa sensitif pada nilai khusus. Kamu bisa menambahkan flag `i` (case-insensitive) di akhir kurung siku:

```css
/* Mencocokkan link file .PDF, .pdf, .Pdf, maupun .pDf */
a[href$=".pdf" i] {
 color: #e8392b;
}
```

---

## Ringkasan Sintaks Attribute Selector

| Sintaks | Kriteria Kecocokan | Contoh Kasus Nyata |
|:---|:---|:---|
| `[attr]` | Memiliki atribut `attr` | `input[required]` |
| `[attr="val"]` | Nilai persis sama dengan `"val"` | `input[type="checkbox"]` |
| `[attr^="val"]` | Nilai diawali dengan `"val"` | `a[href^="https://"]` |
| `[attr$="val"]` | Nilai diakhiri dengan `"val"` | `a[href$=".png"]` |
| `[attr*="val"]` | Nilai mengandung `"val"` | `a[href*="github.com"]` |
| `[attr~="val"]` | Mengandung kata utuh dipisah spasi | `[data-tags~="css"]` |
| `[attr="val" i]` | Pencocokan tanpa memedulikan huruf besar/kecil | `[type="email" i]` |