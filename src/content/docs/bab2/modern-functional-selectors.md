---
title: "2.7 Modern Functional Selectors — :is(), :where(), :not(), & :has()"
description: "Mempelajari 4 selector fungsional modern CSS yang merevolusi cara penulisan CSS — mengeliminasi duplikasi, mengontrol spesifisitas, dan CSS Parent Selector :has()."
---

Dalam beberapa tahun terakhir, CSS mengalami revolusi besar dengan diperkenalkannya **Selector Fungsional** yang menerima daftar selector di dalam tanda kurungnya.

Empat fungsi terpenting yang wajib kamu kuasai adalah:
1. **`:is()`** — Menyingkat kombinasi selector panjang
2. **`:where()`** — Menyingkat selector dengan spesifisitas nol (0)
3. **`:not()`** — Pengecualian (*negation*)
4. **`:has()`** — **Sang Selector Induk (*The CSS Parent Selector*)**

---

## 1. `:is()` — Menyingkat Selector Bersarang

Dulu, ketika kamu ingin memberi style pada link di dalam berbagai elemen header/navigasi, kamu harus menulis pengulangan panjang:

```css
/* [SALAH] Cara Lama (Panjang & Berulang) */
header a,
nav a,
footer a,
aside a {
 color: #60a5fa;
}

/* [BENAR] Modern dengan :is() */
:is(header, nav, footer, aside) a {
 color: #60a5fa;
}
```

### Keunggulan Error Recovery `:is()`:
Pada selector list standar, jika salah satu selector tidak valid, seluruh baris gagal. Pada `:is(a, :invalid-pseudo, b)`, browser akan **mengabaikan selector yang tidak valid dan tetap menjalankan yang valid!**

### Aturan Spesifisitas `:is()`:
Bobot spesifisitas dari `:is()` dihitung berdasarkan **selector terkuat yang ada di dalam tanda kurungnya**.

---

## 2. `:where()` — Spesifisitas Nol (0) untuk CSS Reset

`:where()` bekerja **persis sama** dengan `:is()`, dengan SATU perbedaan revolusioner: 
**Spesifisitas dari `:where()` SELALU bernilai NOL (0)!**

```css
/* Styling default tombol dengan :where() */
:where(button, .btn, input[type="submit"]) {
 padding: 0.65rem 1.25rem;
 border-radius: 0.5rem;
 background: #19191e;
 color: #f0f0f3;
}
```

### Mengapa Ini Sangat Berharga?
Karena spesifisitasnya 0, kamu bisa menimpa (*override*) style di atas menggunakan satu class biasa sederhana di mana saja di file CSS lain tanpa pernah mengalami perang spesifisitas! Ini adalah alat utama pembuatan library UI dan CSS framework modern.

---

## 3. `:not()` — Logika Negasi (Pengecualian)

`:not()` memilih semua elemen yang **TIDAK** cocok dengan kriteria di dalam tanda kurungnya:

```css
/* Beri margin-bottom pada semua paragraf, KECUALI paragraf terakhir */
p:not(:last-child) {
 margin-bottom: 1.25rem;
}

/* Beri cursor pointer pada tombol yang TIDAK memiliki atribut disabled */
button:not([disabled]) {
 cursor: pointer;
}

/* Memilih input yang BUKAN bertipe checkbox atau radio */
input:not([type="checkbox"], [type="radio"]) {
 width: 100%;
 padding: 0.5rem;
}
```

---

## 4. `:has()` — Sang Selector Induk (The Parent Selector!)

Selama lebih dari 20 tahun sejarah web, CSS hanya bisa memilih ke arah bawah (anak/keturunan) atau ke samping (saudara). Kita tidak pernah bisa memilih **parent berdasarkan apa yang ada di dalamnya**.

Dulu, jika sebuah kartu memiliki gambar, kita harus menggunakan JavaScript untuk menambahkan class `.has-image` ke kartu tersebut.

Sekarang, dengan **`:has()`**, CSS bisa melakukannya sendiri!

```text
.card:has(img) → "Pilih .card HANYA JIKA di dalamnya terdapat tag <img>"
```

```css
/* 1. Ubah layout kartu menjadi 2 kolom jika di dalamnya ada gambar */
.card:has(img) {
 display: grid;
 grid-template-columns: 200px 1fr;
}

/* 2. Beri highlight merah pada form jika salah satu input di dalamnya tidak valid */
form:has(input:invalid) {
 border: 2px solid #ef4444;
}

/* 3. Dark mode switch sederhana: jika checkbox tema dicentang, ubah warna background */
body:has(#theme-toggle:checked) {
 background-color: #0c0c0e;
 color: #f0f0f3;
}
```

### Kombinasi Powerful `:has()` dengan Combinators:
```css
/* Memilih judul h2 yang tepat diikuti oleh tag p */
h2:has(+ p) {
 margin-bottom: 0.25rem;
}
```

---

## Matriks Perbandingan 4 Selector Fungsional

| Selector | Fungsi Logika | Bobot Spesifisitas | Kasus Penggunaan Khas |
|:---|:---|:---|:---|
| **`:is(...)`** | Logika OR (Salah satu cocok) | Mengikuti selector **terkuat** di dalamnya | Menyingkat selector panjang |
| **`:where(...)`** | Logika OR (Salah satu cocok) | **Selalu 0** (Mudah ditimpa) | CSS Reset, Design System default |
| **`:not(...)`** | Logika NOT (Kecuali) | Mengikuti selector di dalamnya | Pengecualian elemen terakhir / disabled |
| **`:has(...)`** | Logika Parent / Kondisional | Mengikuti target + argumen | Styling parent berdasarkan konten/state anak |