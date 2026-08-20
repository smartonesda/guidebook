---
title: "1.4 Komentar, Whitespace, & Semicolon"
description: "Menguasai aturan penulisan komentar CSS, bagaimana browser memperlakukan spasi dan newline, serta peran krusial titik koma."
---

## 1. Komentar di CSS (`/* ... */`)

CSS hanya mengenal satu jenis format komentar resmi: diawali dengan `/*` dan diakhiri dengan `*/`.

```css
/* Ini adalah komentar satu baris */

/* 
 * Ini adalah komentar multi-baris
 * Sangat berguna untuk dokumentasi arsitektur
 */

.card {
 /* color: red; -- baris ini dinonaktifkan sementara */
 color: #f0f0f3;
}
```

> [PERHATIAN] **Jebakan Fatal:** 
> Di CSS murni (Vanilla CSS), format komentar dua garis miring `//` **TIDAK VALID**! Menggunakan `//` akan membuat browser bingung dan mengabaikan seluruh baris atau ruleset di bawahnya!

---

## 2. Bagaimana Browser Memperlakukan Whitespace?

**Whitespace** mencakup: spasi (*space*), tab, dan baris baru (*newline*).

Browser **mengabaikan jumlah whitespace berlebih** di dalam CSS. Dua kode berikut diproses dengan hasil yang 100% identik oleh browser:

```css
/* Format Rapi (Mudah Dibaca Manusia) */
.card {
 color: #ffffff;
 background: #000000;
}

/* Format Satu Baris (Minified) */
.card{color:#ffffff;background:#000000;}
```

---

## 3. Case Sensitivity (Huruf Besar vs Kecil)

- **Nama Properti & Nilai Standar:** Case-insensitive, tetapi standar konvensi internasional **selalu menggunakan huruf kecil (*kebab-case*)**.
- **Nama Class & ID:** Bergantung pada dokumen HTML. Di HTML5 standar, nama class `.myCard` dan `.mycard` dianggap **dua class yang berbeda**! Selalu gunakan huruf kecil dipisah strip (`kebab-case`) untuk nama class: `.user-profile`, `.btn-primary`.

---

## 4. Fungsi Krusial Semicolon (`;`)

Titik koma adalah pembatas antar deklarasi. Jika kamu lupa menulis titik koma:

```css
/* [SALAH] SALAH: Lupa titik koma pada baris color */
.card {
 color: red
 background-color: white;
}
```

Browser akan membaca deklarasi di atas sebagai satu kesatuan yang rusak: 
`color: red background-color: white;` &rarr; Nilai ini tidak valid, sehingga **kedua properti (color dan background) akan diabaikan sekaligus oleh browser!**
