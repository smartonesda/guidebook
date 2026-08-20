---
title: "1.1 Apa itu CSS? — Filosofi & Spektrum Kemampuan"
description: "Memahami definisi Cascading Style Sheets, makna tiap kata, spektrum kemampuan CSS modern, dan perbedaan paradigma deklaratif vs imperatif."
---

**CSS** adalah singkatan dari **Cascading Style Sheets**.

CSS adalah bahasa lembar gaya berbasis aturan (*rule-based declarative stylesheet language*) yang digunakan untuk mengatur tampilan visual, tata letak (*layout*), dan perilaku presentasi dari dokumen terstruktur seperti HTML.

---

## Membedah Makna: Cascading Style Sheets

Mari kita bedah tiga kata pembentuk nama CSS:

```text
CASCADING → Aliran bertingkat: aturan browser dalam menentukan style yang
 menang ketika ada banyak instruksi yang bertabrakan.

STYLE → Gaya visual: mengatur warna, font, jarak, ukuran, tata letak,
 latar belakang, dan animasi.

SHEETS → Lembaran: kumpulan aturan yang ditulis dalam dokumen terpisah
 atau terstruktur yang dapat dipakai ulang di banyak halaman.
```

---

## CSS Jauh Lebih Luas dari Sekadar Warna

Banyak pemula mengira CSS hanya digunakan untuk "mewarnai tombol" atau "mengganti jenis font". Padahal, CSS modern adalah bahasa yang sangat bertenaga dengan spektrum kemampuan yang luas:

```text
SPEKTRUM KEMAMPUAN CSS
 │
 ├── 1. Tipografi & Font (Ukuran fluid clamp, letter-spacing, font-feature)
 ├── 2. Warna & Gradients (Sistem HSL, OKLCH, color-mix, alpha channel)
 ├── 3. Spacing & Model Kotak (Margin, padding, border, box-sizing)
 ├── 4. Tata Letak 1D & 2D (Flexbox untuk baris/kolom, CSS Grid untuk grid 2 dimensi)
 ├── 5. Desain Responsif (Container Queries, Range Media Queries, fluid sizing)
 ├── 6. State & Interaksi (:hover, :focus-visible, :active, :checked)
 ├── 7. Gerakan & Animasi (Transisi GPU-accelerated 60fps, @keyframes)
 └── 8. Desain Arsitektural (CSS Custom Properties / Variables, @layer)
```

---

## Paradigma: Deklaratif vs Imperatif

CSS adalah bahasa **Deklaratif**. Artinya:

> Kamu memberi tahu browser **APA hasil akhir yang kamu inginkan**, dan browser yang akan mencari tahu **BAGAIMANA cara menghitung dan menggambarnya di layar**.

Bandingkan dengan JavaScript yang bersifat **Imperatif**:

```javascript
// Contoh Imperatif (JavaScript): Memberi instruksi langkah demi langkah
const button = document.getElementById('my-btn');
button.style.backgroundColor = 'red';
button.style.padding = '10px 20px';
button.style.borderRadius = '8px';
```

```css
/* Contoh Deklaratif (CSS): Menyatakan kondisi hasil akhir yang diinginkan */
.my-btn {
 background-color: #e8392b;
 padding: 0.625rem 1.25rem;
 border-radius: 0.5rem;
}
```

Dalam CSS, browser secara otomatis menangani perataan teks, rendering font, perhitungan batas piksel sub-piksel (*anti-aliasing*), dan penyesuaian skala layar tanpa kamu perlu memprogram algoritma grafisnya dari nol.
