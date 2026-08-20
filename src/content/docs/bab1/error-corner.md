---
title: "1.12 Error Corner — 7 Kesalahan Fatal Sintaks Pemula"
description: "Mendiagnosis dan memperbaiki 7 kesalahan sintaks paling umum yang sering membingungkan pemula saat belajar dasar CSS."
---

## [SALAH] Error 1: Lupa Titik Koma `;` yang Menggabungkan 2 Baris

```css
/* [SALAH] Salah */
.box {
 color: red
 background: white;
}

/* [BENAR] Benar */
.box {
 color: red;
 background: white;
}
```

---

## [SALAH] Error 2: Menggunakan Komentar JavaScript `//` di CSS

```css
/* [SALAH] Salah di Vanilla CSS */
// Atur warna teks judul
h1 { color: white; }

/* [BENAR] Benar: Selalu gunakan blok /* ... */ */
/* Atur warna teks judul */
h1 { color: white; }
```

---

## [SALAH] Error 3: Lupa Titik `.` pada Class Selector

```css
/* [SALAH] Salah: Browser mengira 'card' adalah nama tag HTML <card> */
card {
 background: black;
}

/* [BENAR] Benar */
.card {
 background: black;
}
```

---

## [SALAH] Error 4: Nilai Angka Tanpa Unit Satuan

```css
/* [SALAH] Salah: Kecuali angka 0, semua ukuran wajib memiliki unit (px, rem, %, dll) */
.box {
 margin: 20;
 padding: 10;
}

/* [BENAR] Benar */
.box {
 margin: 20px;
 padding: 10px;
}
```

---

## [SALAH] Error 5: Urutan Shorthand TRBL yang Terbalik

```css
/* [SALAH] Maksud developer: Top/Bottom 20px, Left/Right 10px, tapi ditulis terbalik */
.box {
 padding: 10px 20px;
}
```

---

## [SALAH] Error 6: Menggunakan Huruf Besar/Kecil Berantakan pada Class

```html
<!-- HTML -->
<div class="userCard"></div>
```
```css
/* [SALAH] CSS tidak cocok karena beda case */
.usercard { ... }

/* [BENAR] Best Practice: Selalu gunakan kebab-case di HTML dan CSS */
/* HTML: class="user-card" */
.user-card { ... }
```

---

## [SALAH] Error 7: Salah Meletakkan Tanda Titik Dua `:`

```css
/* [SALAH] Salah: Kolon diletakkan setelah selector atau value */
.card: {
 color :red;
}

/* [BENAR] Benar */
.card {
 color: red;
}
```
