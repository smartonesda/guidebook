---
title: "Paragraf"
description: Memahami elemen paragraf p dan pengelompokan teks inline menggunakan span.
---

Konten teks terpanjang dalam sebuah website biasanya ditulis dalam bentuk paragraf. HTML menyediakan elemen khusus untuk mengelompokkan teks ke dalam paragraf yang rapi.

---

## 📝 Elemen Paragraf (`<p>`)

Untuk membuat paragraf, kita membungkus teks menggunakan tag `<p>` dan `</p>`.

```html
<p>Ini adalah paragraf pertama yang berisi penjelasan tentang HTML.</p>
<p>Ini adalah paragraf kedua yang menjelaskan tentang CSS.</p>
```

### Karakteristik Elemen `<p>` (Block Element)
Elemen paragraf adalah **Block Element**. Artinya:
- Browser akan otomatis menempatkan paragraf baru di baris yang baru.
- Browser memberikan jarak kosong (*margin*) secara otomatis di atas dan di bawah paragraf untuk memisahkannya dari paragraf lain.
- Lebarnya akan memenuhi seluruh area baris yang tersedia.

---

## 🏷️ Pengelompokan Inline: Tag `<span>`

Terkadang, kita tidak ingin memisahkan teks ke baris baru, melainkan hanya ingin menandai *sebagian kata* di dalam sebuah paragraf agar bisa diberi warna atau efek gaya tertentu nantinya. Di sinilah kita menggunakan tag `<span>`.

```html
<p>Saya belajar HTML di kelas <span class="highlight">RPL</span> hari ini.</p>
```

### Karakteristik Elemen `<span>` (Inline Element)
Berbeda dengan `<p>`, tag `<span>` adalah **Inline Element**. Artinya:
- Ia **tidak** membuat baris baru.
- Teks yang dibungkus tetap mengalir bersama teks di sekitarnya.
- Lebarnya hanya sejauh konten teks di dalamnya saja.
- Tag `<span>` tidak memiliki makna semantik bawaan (ia netral), murni digunakan untuk membungkus teks demi kebutuhan styling CSS atau manipulasi JavaScript nanti.

---

## ⚠️ Kesalahan Umum: Menumpuk Paragraf di dalam Paragraf

Sesuai aturan standar HTML, sebuah paragraf tidak boleh membungkus elemen bertipe block lainnya, termasuk paragraf lain:

```html
<!-- ❌ SALAH: Paragraf di dalam paragraf -->
<p>Saya suka pemrograman web. <p>Jurusan saya RPL.</p></p>

<!-- ✅ BENAR: Paragraf terpisah secara berurutan -->
<p>Saya suka pemrograman web.</p>
<p>Jurusan saya RPL.</p>
```

Mari kita pelajari bagaimana cara membuat jeda baris dan garis pembatas halaman.

**[Lanjut: Line Break & HR →](/bab2/line-break-hr/)**
