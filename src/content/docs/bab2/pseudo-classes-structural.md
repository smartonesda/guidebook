---
title: "2.5 Pseudo-Classes: Struktural & Posisi DOM"
description: "Memilih elemen berdasarkan urutan nomor, posisi indeks di dalam parent, formula matematika :nth-child(), dan perbedaan penting dengan :nth-of-type()."
---

Seringkali kita ingin memberi warna belang-belang pada baris tabel, memberi jarak berbeda pada elemen pertama/terakhir, atau menyorot 3 kartu teratas di leaderboard.

**Structural Pseudo-Classes** memungkinkan kita memilih elemen berdasarkan **posisinya di dalam struktur hierarki DOM** tanpa perlu menambahkan class secara manual ke setiap elemen.

---

## 1. Anak Pertama, Terakhir, & Tunggal

```html
<ul class="nav-links">
 <li>Beranda</li>
 <li>Materi</li>
 <li>Tentang</li>
</ul>
```

### A. `:first-child` & `:last-child`
```css
/* Menghapus margin-top pada elemen pertama */
.nav-links li:first-child {
 font-weight: 700;
}

/* Menghapus border pemisah pada elemen terakhir */
.nav-links li:last-child {
 border-bottom: none;
}
```

### B. `:only-child`
Hanya aktif jika elemen tersebut adalah **satu-satunya anak** di dalam parent-nya:

```css
/* Jika alert hanya berisi 1 paragraf, tengahkan teksnya */
.alert p:only-child {
 margin: 0;
 text-align: center;
}
```

---

## 2. Jebakan Terbesar Pemula: `:nth-child()` vs `:nth-of-type()`

Ini adalah salah satu konsep yang paling sering membingungkan developer. Perhatikan struktur HTML berikut:

```html
<div class="container">
 <h1>Judul Halaman</h1> <!-- Anak ke-1 (tipe h1) -->
 <p>Paragraf Satu</p> <!-- Anak ke-2 (tipe p pertama) -->
 <p>Paragraf Dua</p> <!-- Anak ke-3 (tipe p kedua) -->
</div>
```

Mari kita uji kedua selector:

```css
/* Uji 1: p:first-child */
p:first-child { color: red; }
/* [SALAH] HASIL: TIDAK ADA YANG TERPILIH!
 Mengapa? Karena anak ke-1 adalah <h1>, bukan <p>. */

/* Uji 2: p:first-of-type */
p:first-of-type { color: red; }
/* [BENAR] HASIL: "Paragraf Satu" TERPILIH!
 Mengapa? Karena ia adalah tag <p> pertama di dalam parent. */
```

### [TIPS] Rumus Perbedaannya:
- **`:nth-child(n)`**: Menghitung **seluruh anak apa pun jenis tag-nya**. Elemen harus berada di urutan ke-`n` DAN harus cocok dengan tag-nya.
- **`:nth-of-type(n)`**: Hanya menghitung anak yang memiliki **nama tag yang sama**.

---

## 3. Formula Ajaib `:nth-child(An + B)`

Di dalam tanda kurung `:nth-child()`, kamu bisa memasukkan angka pasti, kata kunci, atau formula aljabar linier `An + B`:

```text
:nth-child(An + B)
 │ │ │
 │ │ └── B: Titik awal pergeseran (offset)
 │ └── A: Siklus pengulangan (langkah kelipatan)
 └── n: Integer mulai dari 0, 1, 2, 3, ...
```

### Pola-Pola Praktis yang Wajib Kamu Ketahui:

| Pola Formula | Hasil Seleksi | Kasus Penggunaan Nyata |
|:---|:---|:---|
| `:nth-child(odd)` / `(2n + 1)` | Elemen ke: 1, 3, 5, 7, ... | Baris ganjil tabel belang-belang |
| `:nth-child(even)` / `(2n)` | Elemen ke: 2, 4, 6, 8, ... | Baris genap tabel belang-belang |
| `:nth-child(3)` | Hanya elemen ke-3 | Menyorot juara ke-3 di podium |
| `:nth-child(3n)` | Elemen ke: 3, 6, 9, 12, ... | Setiap elemen ke-3 dalam grid 3-kolom |
| `:nth-child(-n + 3)` | 3 elemen pertama (1, 2, 3) | Menyorot Top 3 item di leaderboard |
| `:nth-child(n + 4)` | Semua elemen mulai dari urutan 4 | Menyembunyikan item daftar yang panjang |

### Cara Kerja Matematika `-n + 3` (Top 3):
- $n = 0 \rightarrow -(0) + 3 = \mathbf{3}$ (Elemen ke-3 terpilih)
- $n = 1 \rightarrow -(1) + 3 = \mathbf{2}$ (Elemen ke-2 terpilih)
- $n = 2 \rightarrow -(2) + 3 = \mathbf{1}$ (Elemen ke-1 terpilih)
- $n = 3 \rightarrow -(3) + 3 = 0$ (Tidak ada elemen ke-0, berhenti)

---

## 4. Menghitung dari Belakang: `:nth-last-child()`

Jika kamu ingin menghitung urutan dari **bawah ke atas / kanan ke kiri**:

```css
/* Menargetkan 2 elemen terakhir di dalam container */
.item:nth-last-child(-n + 2) {
 border-bottom: none;
}
```

---

## 5. `:empty` — Mendeteksi Kontainer Kosong

Selector `:empty` memilih elemen yang **tidak memiliki anak sama sekali** (termasuk tidak ada teks spasi di dalamnya):

```css
/* Sembunyikan box notifikasi jika belum ada pesan di dalamnya */
.notification-box:empty {
 display: none;
}
```

---

## 6. `:root` — Akar Dokumen

`:root` menargetkan elemen paling atas dari pohon dokumen (di HTML, ini sama dengan tag `<html>`, tetapi memiliki spesifisitas yang lebih tinggi). Ini adalah tempat standar industri untuk mendeklarasikan **CSS Custom Properties (Design Tokens / Variables)**:

```css
:root {
 --c-accent: #e8392b;
 --c-bg: #0c0c0e;
 --r-card: 1rem;
}
```

---

## Ringkasan Structural Pseudo-Classes

| Pseudo-Class | Arti Seleksi |
|:---|:---|
| `:first-child` | Anak pertama dari parent-nya |
| `:last-child` | Anak terakhir dari parent-nya |
| `:only-child` | Satu-satunya anak di dalam parent-nya |
| `:first-of-type` | Elemen pertama dari tipe tag yang sama |
| `:last-of-type` | Elemen terakhir dari tipe tag yang sama |
| `:nth-child(n)` | Anak ke-`n` dari seluruh jenis anak |
| `:nth-of-type(n)` | Anak ke-`n` dari tipe tag yang sama |
| `:empty` | Elemen yang benar-benar kosong |
| `:root` | Elemen akar dokumen (`<html>`) |