---
title: "Daftar ul & ol"
description: Memahami konsep dasar pembuatan daftar tidak terurut ul dan daftar terurut ol di HTML.
---

Sebelum kita mengetik tag, mari latih cara berpikir pengelompokan data (*Data Modeling Mindset*). 

Bayangkan kamu memiliki tiga buah data mentah:
- *HTML, CSS, JavaScript*
- *1. Unduh VS Code, 2. Buat berkas baru, 3. Buka di browser*

Kedua data tersebut adalah kumpulan item, tetapi sifat hubungannya sangat berbeda:
1. Kelompok pertama tidak memiliki urutan penting. Apakah kamu menulis HTML sebelum CSS atau sebaliknya, maknanya tetap sama.
2. Kelompok kedua wajib berurutan. Kamu tidak bisa membuka berkas di browser sebelum membuat berkasnya.

HTML menyediakan dua jenis elemen daftar untuk mengakomodasi perbedaan ini: **Unordered List** dan **Ordered List**.

---

## ⏺️ 1. Daftar Tidak Terurut: Tag `<ul>` (Unordered List)

Tag `<ul>` digunakan untuk membuat daftar poin di mana urutan itemnya tidak penting. Tampilan default di browser berupa simbol peluru bulat hitam (*bullet points*).

Aturan wajib: Tag `<ul>` hanya boleh membungkus tag **`<li>`** (List Item) sebagai anak langsungnya.

```html
<!-- ✅ BENAR: Semua item dibungkus dengan li -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

### ⚠️ Kesalahan Fatal Pemula: Menulis Teks Tanpa Tag `<li>`
Tag `<ul>` adalah wadah (*container*). Ia tidak boleh langsung diisi oleh teks biasa tanpa dibungkus tag `<li>` terlebih dahulu:

```html
<!-- ❌ SALAH: Teks tersesat di dalam ul -->
<ul>
  HTML dasar
  <li>CSS</li>
</ul>
```

---

## 🔢 2. Daftar Terurut: Tag `<ol>` (Ordered List)

Tag `<ol>` digunakan untuk membuat daftar yang memiliki urutan langkah-langkah atau peringkat yang penting. Tampilan default di browser berupa penomoran angka (`1`, `2`, `3`, dst).

Sama seperti `<ul>`, tag `<ol>` hanya boleh membungkus tag `<li>` sebagai anak kandungnya.

```html
<!-- ✅ BENAR: Urutan langkah koding terstruktur -->
<ol>
  <li>Unduh VS Code</li>
  <li>Buat berkas baru bernama index.html</li>
  <li>Buka di browser via Live Server</li>
</ol>
```

Setiap tag `<li>` di dalam `<ol>` akan diberi penomoran secara otomatis oleh browser. Jadi, kamu **tidak perlu** mengetik angka `"1."` atau `"2."` secara manual di dalam kodemu!

Mari kita pelajari atribut-atribut khusus untuk memodifikasi penomoran ini dan membuat daftar bersarang di halaman berikutnya.

**[Lanjut: Atribut List & Nested List →](/bab5/atribut-list-nested/)**
