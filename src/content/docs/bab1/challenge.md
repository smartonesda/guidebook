---
title: "1.11 Challenge Lab — 5 Lab Praktik CSS Fundamentals"
description: "Uji ketajaman pemahaman sintaks dan kemampuan debugging-mu melalui 5 tantangan teka-teki kode CSS Fundamentals."
---

Selamat datang di **Fundamentals Challenge Lab**! Uji intuisimu dalam menemukan kesalahan dan menulis ruleset yang sempurna.

---

## Lab 1: Temukan 3 Kesalahan Sintaks Tersembunyi

Diberikan kode berikut:

```css
.hero-banner {
 background-color: #121216
 padding: 20px 40px
 color: #ffffff;
 font-size 1.5rem;
}
```

<details>
<summary> Lihat Solusi Lab 1</summary>

**3 Kesalahan yang Ada:**
1. Lupa titik koma `;` setelah `#121216`.
2. Lupa titik koma `;` setelah `40px`.
3. Lupa titik dua `:` antara properti `font-size` dan nilainya `1.5rem`.

```css
/* [BENAR] Kode yang Benar */
.hero-banner {
 background-color: #121216;
 padding: 20px 40px;
 color: #ffffff;
 font-size: 1.5rem;
}
```
</details>

---

## Lab 2: Refactor 8 Baris Longhand Menjadi Shorthand

Diberikan kode berikut:

```css
.box {
 margin-top: 10px;
 margin-right: 20px;
 margin-bottom: 30px;
 margin-left: 20px;
 border-width: 2px;
 border-style: dashed;
 border-color: #e8392b;
}
```

<details>
<summary> Lihat Solusi Lab 2</summary>

```css
/* [BENAR] Cukup 2 baris ringkas */
.box {
 margin: 10px 20px 30px; /* 3 nilai: Top, Left/Right, Bottom */
 border: 2px dashed #e8392b;
}
```
</details>

---

## Lab 3: Prediksi Nilai Computed Style

Jika root dokumen memiliki font default `16px`, berapakah nilai dalam satuan `px` di tab **Computed** untuk:

```css
h1 {
 font-size: 2.5rem;
 padding: 1.5rem 2rem;
}
```

<details>
<summary> Lihat Solusi Lab 3</summary>

- `font-size`: $2.5 	imes 16	ext{px} = \mathbf{40	ext{px}}$
- `padding-top` & `padding-bottom`: $1.5 	imes 16	ext{px} = \mathbf{24	ext{px}}$
- `padding-left` & `padding-right`: $2 	imes 16	ext{px} = \mathbf{32	ext{px}}$
</details>

---

## Lab 4: Mencegah Jebakan Shorthand Background

Diberikan kartu yang memiliki gambar latar:

```css
.card {
 background-color: #333333;
 background-image: url('banner.jpg');
}
```

Jika pada saat di-hover kamu hanya ingin mengubah warna background menjadi merah tanpa menghilangkan gambar `banner.jpg`, baris manakah yang benar?

- Opsi A: `.card:hover { background: red; }`
- Opsi B: `.card:hover { background-color: red; }`

<details>
<summary> Lihat Solusi Lab 4</summary>

**Jawaban: Opsi B!** 
Opsi A menggunakan shorthand `background` yang akan me-reset `background-image` menjadi `none` bawaan. Opsi B menggunakan longhand `background-color` yang aman.
</details>
