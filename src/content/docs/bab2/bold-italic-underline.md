---
title: "Bold, Italic, Underline"
description: Memahami tag fisik dasar b, i, dan u dalam memformat tampilan teks di HTML.
---

Sejak awal perkembangan web, HTML sudah memiliki tag-tag dasar untuk memformat tampilan teks agar tebal, miring, atau bergaris bawah. Tag-tag ini sering disebut **Physical Tags** karena mereka hanya berfokus pada **tampilan luar** (*visual appearance*).

---

## ✍️ Tiga Tag Pemformatan Klasik

| Tag | Nama | Tampilan | Contoh Kode |
|---|---|---|---|
| **`<b>`** | Bold | **Tebal** | `<b>Teks Tebal</b>` |
| **`<i>`** | Italic | *Miring* | `<i>Teks Miring</i>` |
| **`<u>`** | Underline | <u>Garis Bawah</u> | `<u>Teks Bergaris Bawah</u>` |

---

## 🚫 Perubahan Makna di HTML5 Modern

Di era HTML5 saat ini, penggunaan ketiga tag di atas mulai **dibatasi** atau diberi makna baru karena kita ingin memisahkan urusan dekorasi (CSS) dengan makna konten (HTML).

Inilah arti baru mereka di HTML5:

### 1. Tag `<b>` (Bold)
Hanya digunakan untuk menarik perhatian pembaca secara visual tanpa memberikan arti bahwa kata tersebut sangat penting. 
- *Contoh penggunaan*: Menuliskan nama produk atau kata kunci di dalam instruksi manual.

### 2. Tag `<i>` (Italic)
Digunakan untuk menandai teks yang memiliki nada suara berbeda dari teks sekitarnya.
- *Contoh penggunaan*: Istilah asing, nama taksonomi ilmiah (misal: *Homo sapiens*), atau pikiran batin tokoh.

### 3. Tag `<u>` (Underline / Unarticulated)
Digunakan untuk menandai kata yang memiliki ejaan tidak umum atau tidak diucapkan secara verbal.
- *Penting*: Hindari penggunaan `<u>` pada teks biasa karena pengunjung sering mengiranya sebagai **link/tautan** yang bisa diklik.

Di halaman selanjutnya, kita akan belajar mengenai alternatif tag semantik modern yang jauh lebih disukai oleh industri web saat ini!

**[Lanjut: Teks Semantik →](/bab2/teks-semantik/)**
