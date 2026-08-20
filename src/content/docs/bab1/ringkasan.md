---
title: "1.13 Ringkasan & Kuis Evaluasi Pemahaman"
description: "Rangkuman 10 prinsip kunci BAB 1, cheatsheet anatomi ruleset, kuis pemahaman 10 soal, dan refleksi sebelum melangkah ke BAB 2 (Selectors)."
---

Selamat! Kamu telah menuntaskan **BAB 1 — CSS Fundamentals**. Sekarang kamu telah memahami struktur internal bagaimana aturan CSS disusun dan diproses browser.

---

## Cheatsheet Anatomi CSS Ruleset

```text
┌────────────────────────────────────────────────────────┐
│ .card │ → SELECTOR
├────────────────────────────────────────────────────────┤
│ { │
│ color: #e8392b; │ → DECLARATION
│ │ │ │ │ │
│ │ │ │ └── VALUE (Nilai) │
│ │ │ └── SEMICOLON (Wajib penutup) │
│ │ └── KOLON (Pemisah) │
│ └── PROPERTY (Aspek gaya) │
│ } │ → DECLARATION BLOCK
└────────────────────────────────────────────────────────┘
```

---

## 10 Prinsip Kunci CSS Fundamentals

1. **CSS adalah bahasa deklaratif berbasis aturan (*rule-based*).** Kamu menyatakan hasil akhir, browser yang menghitung renderingnya.
2. **Satu Ruleset terdiri dari Selector + Declaration Block `{ ... }`.**
3. **Satu Declaration terdiri dari Property + Kolon + Value + Semicolon `;`.**
4. **Semicolon `;` wajib ditulis** untuk membatasi akhir setiap deklarasi.
5. **Komentar CSS hanya valid menggunakan `/* ... */`**, bukan `//`.
6. **Class Selector (`.`) adalah standar utama** pembuatan komponen yang dapat dipakai ulang (*reusable*).
7. **Shorthand 4 sisi mengikuti arah jarum jam (TRBL):** Top, Right, Bottom, Left.
8. **Browser memiliki sifat *Forgiving Error Recovery*:** deklarasi yang tidak valid diabaikan tanpa membuat halaman web crash.
9. **Browser membangun DOM + CSSOM &rarr; Render Tree &rarr; Layout &rarr; Paint.**
10. **Seluruh unit relatif pada akhirnya dihitung menjadi piksel (`px`)** pada tab *Computed* di DevTools.

---

## Kuis Evaluasi BAB 1 (10 Soal)

<details>
<summary>1. Apa kepanjangan dari CSS?</summary>

**Jawaban:** Cascading Style Sheets.
</details>

<details>
<summary>2. Di dalam aturan <code>h1 { color: red; }</code>, manakah yang disebut properti?</summary>

**Jawaban:** `color` adalah properti, sedangkan `red` adalah nilai (*value*).
</details>

<details>
<summary>3. Mengapa format komentar <code>//</code> tidak boleh digunakan di CSS?</summary>

**Jawaban:** Karena `//` bukan standar sintaks Vanilla CSS. Browser akan gagal mengenali aturan di bawahnya dan mengabaikannya.
</details>

<details>
<summary>4. Berapakah nilai margin kiri (left) pada <code>margin: 10px 20px 30px;</code>?</summary>

**Jawaban:** 20px (pada shorthand 3 nilai: Top = 10px, Left/Right = 20px, Bottom = 30px).
</details>

<details>
<summary>5. Apa yang dilakukan browser jika menemukan properti salah ketik seperti <code>colr: red;</code>?</summary>

**Jawaban:** Browser mengabaikan baris tersebut secara diam-diam (*forgiving error recovery*) dan tetap melanjutkan membaca baris berikutnya.
</details>

---

## Jembatan Menuju BAB 2: CSS Selectors

Sekarang kamu sudah memahami anatomi ruleset. Pada **BAB 2 — CSS Selectors**, kita akan memperdalam bagaimana cara memilih elemen dengan presisi tinggi: Combinators, Attribute matching, Pseudo-Classes, Pseudo-Elements, hingga selector modern revolusioner `:has()`.
