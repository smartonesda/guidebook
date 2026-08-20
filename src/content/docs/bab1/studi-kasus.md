---
title: "1.9 Studi Kasus — Membedah & Merefaktor Stylesheet Berantakan"
description: "Studi kasus praktis menganalisis file stylesheet peninggalan lama yang penuh duplikasi dan kesalahan sintaks, lalu merefaktornya menjadi kode bersih dan efisien."
---

Mari kita pelajari studi kasus dunia nyata. Kamu menerima file stylesheet peninggalan yang memiliki banyak masalah performa dan penulisan:

---

## 1. Kode Asal (Before Refactoring)

```css
/* [SALAH] Stylesheet Asal Penuh Masalah */
h1 {
 font-family: Arial, sans-serif;
 color: red
 margin-top: 10px;
 margin-right: 20px;
 margin-bottom: 10px;
 margin-left: 20px;
}

h2 {
 font-family: Arial, sans-serif;
 color: #333333;
}

h3 {
 font-family: Arial, sans-serif;
 color: #333333;
}

.profile-card {
 background-color: #ffffff;
 border-width: 1px;
 border-style: solid;
 border-color: #dddddd;
 padding-top: 15px;
 padding-right: 15px;
 padding-bottom: 15px;
 padding-left: 15px;
}
```

---

## 2. Diagnosis Masalah:
1. **Lupa Semicolon:** Pada `h1`, baris `color: red` tidak memiliki titik koma di ujungnya! Ini membuat browser menggabungkan `color: red margin-top: 10px` menjadi deklarasi rusak yang diabaikan.
2. **Duplikasi Font:** `font-family` dideklarasikan ulang secara manual di `h1`, `h2`, dan `h3`.
3. **Longhand Berlebih:** `margin` dan `padding` 4 baris serta `border` 3 baris membuat ukuran file membengkak tidak perlu.

---

## 3. Kode Setelah Refactoring (After)

```css
/* [BENAR] Hasil Refactoring Bersih, Ringkas, & Valid */

/* 1. Selector Grouping untuk Tipografi Bersama */
h1, h2, h3 {
 font-family: "Inter", system-ui, sans-serif;
}

h1 {
 color: #e8392b;
 margin: 10px 20px; /* Shorthand 2 nilai: Top/Bottom 10px, Left/Right 20px */
}

h2, h3 {
 color: #f0f0f3;
}

/* 2. Komponen Card dengan Shorthand Rapi */
.profile-card {
 background-color: #18181d;
 border: 1px solid rgba(255, 255, 255, 0.1);
 padding: 15px; /* Shorthand 1 nilai: 15px di semua 4 sisi */
 border-radius: 8px;
}
```

### Hasil Perbaikan:
- Kode berkurang dari 27 baris menjadi 14 baris (50% lebih ringkas).
- Syntax error titik koma teratasi.
- Maintainability meningkat berkat Selector Grouping.
