---
title: "Cara Browser Membaca HTML + CSS"
description: Memahami alur kerja rendering browser, DOM, CSSOM, Render Tree, Layout / Reflow, dan Painting.
---

Ketika kamu mengetikkan alamat website di browser dan menekan tombol Enter, browser menerima teks mentah berupa kode HTML dan file CSS dari server. Namun, bagaimana caranya kode teks tersebut berubah menjadi piksel visual berwarna-warni di layarmu?

Proses ini disebut **Critical Rendering Path** (Alur Render Kritis). Memahami alur ini adalah rahasia terbesar mengapa developer senior bisa mendiagnosis bug layout dengan sangat cepat.

---

## ⚙️ 5 Tahapan Alur Kerja Browser

Berikut adalah peta jalan lengkap proses rendering di dalam browser:

```text
┌──────────────┐         ┌──────────────┐
│  HTML File   │         │   CSS File   │
└──────┬───────┘         └──────┬───────┘
       │                        │
       ▼                        ▼
┌──────────────┐         ┌──────────────┐
│     DOM      │         │    CSSOM     │
│(Document OM) │         │ (CSS Object) │
└──────┬───────┘         └──────┬───────┘
       │                        │
       └───────────┬────────────┘
                   ▼
         ┌───────────────────┐
         │    RENDER TREE    │
         │ (DOM + CSSOM gab) │
         └─────────┬─────────┘
                   ▼
         ┌───────────────────┐
         │  LAYOUT / REFLOW  │
         │ (Hitung Ukuran &  │
         │  Posisi Koordinat)│
         └─────────┬─────────┘
                   ▼
         ┌───────────────────┐
         │     PAINTING      │
         │ (Gambar Piksel ke │
         │   Layar Monitor)  │
         └───────────────────┘
```

---

## 🔍 Membedah Setiap Tahapan

### 1. Pembentukan DOM (Document Object Model)
Browser membaca tag-tag HTML baris demi baris dan mengubahnya menjadi struktur pohon hierarkis (*tree structure*).
- Setiap tag seperti `<html>`, `<body>`, `<div>`, `<p>` menjadi sebuah simpul (*node*) di dalam pohon DOM.
- Hubungan induk-anak (*parent-child*) dicatat dengan presisi.

### 2. Pembentukan CSSOM (CSS Object Model)
Di saat yang bersamaan, ketika browser menemukan tag `<link rel="stylesheet">` atau tag `<style>`, browser akan mengunduh dan membaca semua aturan CSS.
- Browser membuat pohon CSSOM yang berisi informasi styling untuk setiap selector.
- CSSOM menghitung nilai akhir dari aturan yang bentrok berdasarkan aturan spesifisitas dan pewarisan (*cascade & inheritance*).

### 3. Penggabungan Menjadi Render Tree
Browser menggabungkan DOM dan CSSOM untuk menentukan **elemen mana saja yang benar-benar akan digambar di layar**.

:::note[Fakta Penting Render Tree]
Elemen yang disembunyikan menggunakan `display: none;` **TIDAK AKAN** masuk ke dalam Render Tree. Namun elemen yang disembunyikan dengan `visibility: hidden;` atau `opacity: 0;` **TETAP** masuk ke dalam Render Tree karena elemen tersebut masih memakan ruang fisik di layar.
:::

### 4. Layout (Juga Disebut Reflow)
Setelah browser tahu elemen apa saja yang harus digambar dan style apa yang dimilikinya, browser menghitung **geometri fisik** dari setiap elemen:
- Berapa lebar dan tinggi kotak dalam satuan piksel?
- Di koordinat layar mana elemen ini harus ditempatkan (koordinat X dan Y)?
- Bagaimana elemen di sebelah kiri mendorong elemen di sebelah kanan?

### 5. Painting (Penggambaran Piksel)
Di tahap akhir, browser mengubah instruksi geometri dan warna menjadi piksel nyata di layar perangkatmu (mengisi teks, garis batas, bayangan, dan gambar latar).

---

## 🧠 Mengapa Mental Model Ini Penting?

Ketika kamu mengubah nilai CSS di VS Code:
1. Kamu sedang mengubah instruksi di dalam **CSSOM**.
2. Browser menghitung ulang **Render Tree**.
3. Jika kamu mengubah ukuran margin/lebar (*layout property*), browser harus menjalankan ulang tahap **Layout** lalu **Paint**.
4. Jika kamu hanya mengubah warna latar (*paint-only property*), browser bisa langsung melompat ke tahap **Paint** tanpa harus menghitung ulang posisi tata letak.

Di bab-bab selanjutnya saat kita membahas animasi dan performa CSS, pemahaman tentang tahapan ini akan menjadi senjata utamamu untuk membuat website yang sangat mulus tanpa lag (*60 frames per second*).

Sekarang, mari kita letakkan CSS dalam konteks yang lebih luas bersama dua saudaranya: HTML dan JavaScript.

**[Lanjut: HTML vs CSS vs JavaScript →](/bab0/html-css-javascript/)**
