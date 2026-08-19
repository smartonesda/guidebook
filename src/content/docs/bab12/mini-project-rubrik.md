---
title: "Rubrik & Self-Review"
description: Lembar evaluasi mandiri dan rubrik penilaian standar untuk menguji kualitas kode HTML proyekmu sebelum diserahkan ke penguji atau klien.
---

Seorang developer profesional selalu mengaudit dan mereview kodenya sendiri (*Self-Review*) sebelum menyerahkannya kepada tim atau mengunggahnya ke server produksi.

Gunakan rubrik penilaian standar ini untuk mengevaluasi Mini Project yang telah kamu buat.

---

## 📊 Rubrik Penilaian Proyek HTML (Skala 100)

### 1. Struktur Dokumen & Metadata (Skor Maksimal: 20)

| Kriteria | Poin |
|---|---|
| Memiliki `<!DOCTYPE html>`, `lang="id"`, dan `<meta charset="UTF-8">` di baris pertama. | 5 |
| Memiliki `<meta name="viewport" content="width=device-width, initial-scale=1.0">`. | 5 |
| `<title>` informatif, spesifik, dan tidak menggunakan nama generik. | 5 |
| Memiliki `<meta name="description">` dan favicon yang valid. | 5 |

---

### 2. Semantik & Hirarki Elemen (Skor Maksimal: 30)

| Kriteria | Poin |
|---|---|
| Menggunakan elemen semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`). | 10 |
| Hirarki heading berurutan (`<h1>` -> `<h2>` -> `<h3>`) tanpa melompati tingkatan. | 10 |
| Memilih elemen yang tepat berdasarkan makna (misal: `<time>`, `<figure>`, `<address>`), bukan `<div>`. | 10 |

---

### 3. Aksesibilitas & Form (Skor Maksimal: 30)

| Kriteria | Poin |
|---|---|
| Seluruh gambar (`<img>`) memiliki atribut `alt` yang sesuai konteks. | 10 |
| Seluruh input form memiliki tag `<label>` yang terhubung presisi via atribut `for`↔`id`. | 10 |
| Seluruh link eksternal (`target="_blank"`) memiliki `rel="noopener noreferrer"` dan `aria-label`. | 10 |

---

### 4. Format & Validasi W3C (Skor Maksimal: 20)

| Kriteria | Poin |
|---|---|
| Lolos **0 Error & 0 Warning** di W3C HTML Validator (`validator.w3.org`). | 10 |
| Indentasi 2 spasi konsisten, nama tag & atribut lowercase, serta nilai dibungkus `""`. | 10 |

---

## 📝 Lembar Checklist Self-Review

Salin tabel di bawah ini ke catatan proyekmu saat melakukan pengujian:

```
NAMA PROYEK : ____________________
TANGGAL     : ____________________

[ ] 1. Apakah file HTML saya lolos 0 Error di validator.w3.org?
[ ] 2. Apakah saya bisa menavigasi seluruh halaman hanya menggunakan tombol Tab keyboard?
[ ] 3. Apakah garis fokus keyboard terlihat jelas di setiap link/tombol?
[ ] 4. Apakah semua gambar yang menyampaikan informasi sudah diberi alt text yang bermakna?
[ ] 5. Apakah setiap kotak input di formulir bisa difokus saat label teksnya diklik?
[ ] 6. Apakah saya sudah menggunakan 2 spasi indentasi secara disiplin di seluruh kode?
[ ] 7. Apakah semua atribut class dan file dinamai dengan huruf kecil (kebab-case)?

NILAI MANDIRI : _____ / 100
```

---

**[Lanjut: Challenge Collection →](/bab12/challenge/)**
