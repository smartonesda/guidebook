---
title: "Teks Semantik"
description: Memahami pentingnya tag semantik teks di HTML5 untuk memberikan makna mendalam pada konten.
---

Jika tag `<b>` dan `<i>` hanya memberi tahu browser *"Tebalkan atau miringkan teks ini"*, maka tag **Teks Semantik** memberi tahu browser (dan alat pembaca layar) *"Teks ini memiliki kepentingan yang mendalam dan harus diberi penekanan khusus"*.

Ini adalah perbedaan krusial antara **Visual Appearance (Tampilan)** dan **Semantic Meaning (Makna)**.

---

## ⚖️ Perbandingan Tag Pemformatan

### 1. `<b>` vs `<strong>`

- **`<b>` (Bold)**: Hanya menebalkan teks secara kosmetik/visual.
- **`<strong>` (Strong Importance)**: Menyatakan bahwa teks tersebut **sangat penting, serius, atau mendesak**. Screen reader akan membaca teks ini dengan penekanan intonasi suara yang lebih tegas.

```html
<p><strong>Peringatan!</strong> Jangan menyentuh kabel listrik ini.</p>
```

---

### 2. `<i>` vs `<em>`

- **`<i>` (Italic)**: Hanya memiringkan teks secara visual (misal untuk istilah asing).
- **`<em>` (Emphasis)**: Memberikan **penekanan makna** pada suatu kata yang bisa mengubah arti kalimat jika penekanannya dipindah.

Perhatikan bagaimana penekanan `<em>` mengubah arti kalimat ini:
- *"Saya <em>sangat</em> menyukaimu."* (Menekankan tingkat kesukaan).
- *"<em>Saya</em> sangat menyukaimu."* (Menekankan bahwa akulah orangnya, bukan orang lain).

---

## 🎨 Tag Penandaan Lainnya

### 1. Tag `<mark>` (Highlight)
Digunakan untuk menandai teks yang relevan dengan aktivitas pengguna saat itu (seperti menyapukan stabilo kuning).

```html
<p>Hasil pencarian untuk kata <mark>HTML</mark> ditemukan di halaman 5.</p>
```

### 2. Tag `<small>` (Side Comments)
Bukan berarti "perkecil teks ini", melainkan untuk menyatakan informasi hukum, hak cipta, atau catatan kaki bermakna sekunder.

```html
<p><small>Hak Cipta Dilindungi Undang-Undang.</small></p>
```

---

## ✏️ Koreksi Konten: `<del>` dan `<ins>`

Ketika kita melakukan revisi atau pengeditan tulisan di halaman web:

- **`<del>` (Deleted)**: Menandai teks yang telah dihapus (tampilan default dicoret).
- **`<ins>` (Inserted)**: Menandai teks baru yang ditambahkan sebagai pengganti teks yang dihapus (tampilan default digaris bawah).
- **`<s>` (Strikethrough)**: Menunjukkan teks yang sudah tidak lagi akurat atau relevan, tetapi tidak dihapus secara resmi.

```html
<p>Harga tiket masuk adalah <del>Rp 50.000</del> <ins>Rp 35.000</ins> per orang.</p>
```

---

## 🕰️ Informasi Tambahan: `<abbr>` dan `<time>`

### 1. Tag `<abbr>` (Abbreviation)
Digunakan untuk menulis singkatan atau akronim. Kita menyertakan atribut `title` di dalamnya untuk menjabarkan kepanjangannya saat disorot kursor.

```html
<p>Sekolah kami memiliki jurusan <abbr title="Rekayasa Perangkat Lunak">RPL</abbr>.</p>
```

### 2. Tag `<time>` (Date & Time)
Membantu mesin pencari dan program kalender membaca waktu secara terstandardisasi melalui atribut `datetime`.

```html
<p>Pertemuan akan diadakan pada <time datetime="2026-08-15">15 Agustus 2026</time>.</p>
```

Semua tag di atas membuktikan satu hal: **HTML5 sangat peduli pada arti dari setiap kata yang kamu tulis!**

**[Lanjut: Blockquote & Kutipan →](/bab2/blockquote/)**
