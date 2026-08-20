---
title: "1.2 Anatomi Lengkap CSS Rule"
description: "Membedah struktur inti ruleset CSS — Selector, Declaration Block, Declaration, Property, Kolon, Value, dan Semicolon."
---

Inilah pusat dari seluruh pembelajaran di BAB 1.

Perhatikan satu blok aturan CSS berikut:

```css
.card {
 color: #f0f0f3;
 background-color: #18181d;
}
```

Mari kita bedah diagram anatominya secara visual:

```text
.card {
 color: #f0f0f3;
 background-color: #18181d;
}

┌─────────────────────────────────────────────────────────────┐
│ .card │ → SELECTOR (Siapa targetnya?)
├─────────────────────────────────────────────────────────────┤
│ { │ → AWAL DECLARATION BLOCK
│ color: #f0f0f3; │ → DECLARATION 1
│ │ │ │ │ │
│ │ │ │ └── VALUE (Nilai apa yang diberikan?) │
│ │ │ └── SEMICOLON (Tanda penutup pernyataan) │
│ │ └── KOLON (Pemisah property dan value) │
│ └── PROPERTY (Aspek apa yang ingin diubah?) │
│ │
│ background-color: #18181d; │ → DECLARATION 2
│ } │ → AKHIR DECLARATION BLOCK
└─────────────────────────────────────────────────────────────┘
 ▲
 └── SELURUH BLOK INI DISEBUT: RULE / RULESET
```

---

## Membedah Setiap Komponen

### 1. Selector (Pemilih Target)
Bagian yang memberi tahu browser elemen HTML mana yang akan dikenai aturan gaya.
- Contoh: `h1`, `.card`, `#hero`, `button`

### 2. Declaration Block (Blok Deklarasi)
Area yang diapit oleh kurung kurawal pembuka `{` dan penutup `}`. Blok ini membungkus satu atau lebih deklarasi gaya.

### 3. Declaration (Deklarasi / Pernyataan)
Satu baris instruksi lengkap yang terdiri dari **Property + Kolon + Value + Semicolon**.
- Contoh: `color: #f0f0f3;`

### 4. Property (Properti)
Nama fitur visual spesifik yang ingin kamu ubah. Ditulis dalam format *kebab-case* (huruf kecil dipisah tanda strip).
- Contoh: `font-size`, `background-color`, `line-height`, `margin-top`

### 5. Kolon (`:`)
Tanda pemisah antara nama properti dan nilainya. Selalu diletakkan tepat setelah nama properti.

### 6. Value (Nilai)
Data atau instruksi spesifik yang diberikan kepada properti. Tipe nilai bisa berupa kata kunci (`block`, `none`), unit ukuran (`16px`, `1.5rem`), warna (`#e8392b`, `rgb(255,0,0)`), atau fungsi (`calc()`, `clamp()`).

### 7. Semicolon (`;` — Titik Koma)
Tanda penutup yang menyatakan bahwa satu deklarasi telah selesai. **Titik koma ini wajib ditulis** agar browser dapat membedakan awal deklarasi berikutnya!

---

## Membaca CSS Seperti Kalimat Bahasa Manusia

Untuk melatih intuisimu, biasakan menerjemahkan ruleset CSS ke dalam kalimat:

```css
button.primary {
 background-color: #e8392b;
 border-radius: 8px;
}
```

> *"Wahai browser, carikan semua elemen tag `<button>` yang memiliki class `primary` (Selector). Lalu di dalam bloknya (Declaration Block), ubah warna latar belakangnya menjadi merah (Declaration 1) dan bulatkan sudutnya sebesar 8 piksel (Declaration 2)."*
