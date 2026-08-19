---
title: "Line Break & HR"
description: Memahami penggunaan br untuk jeda baris dan hr untuk pembatas tema.
---

Saat menulis dokumen HTML, menekan tombol Enter berkali-kali di editor kode tidak akan membuat baris baru di halaman browsermu. Mengapa? Karena browser mengabaikan spasi dan enter berlebih (konsep *whitespace collapse* yang akan kita bahas nanti).

Untuk membuat jeda baris dan pembatas halaman secara manual, HTML menyediakan tag khusus.

---

## ↩️ Jeda Baris: Tag `<br />`

Tag `<br>` (singkatan dari *break*) digunakan untuk memaksa teks setelahnya turun ke baris baru di bawahnya tanpa membuat paragraf baru.

```html
<p>
  Alamat Sekolah:<br>
  Jl. Raya Kebon Jeruk No. 10,<br>
  Jakarta Barat, Indonesia.
</p>
```

### Karakteristik Tag `<br>`:
- Ia adalah **Void Element** (elemen kosong). Artinya ia tidak memiliki konten teks di dalamnya dan **tidak membutuhkan tag penutup** (`</br>`).
- Dalam standar penulisan XHTML atau beberapa standar lama, ia ditulis sebagai `<br />` (self-closing). Di HTML5 modern, menulis `<br>` atau `<br />` keduanya valid dan diterima.

---

## ➖ Garis Pembatas Tematik: Tag `<hr />`

Tag `<hr>` (singkatan dari *horizontal rule*) digunakan untuk membuat garis horizontal pembatas. Di HTML5, `<hr>` memiliki makna semantik sebagai **perubahan tema** (*thematic break*) antar-konten.

```html
<h2>Materi Pagi</h2>
<p>Belajar dasar HTML dan anatomi tag.</p>

<hr>

<h2>Materi Siang</h2>
<p>Belajar membuat file pertama dan membukanya di browser.</p>
```

### Karakteristik Tag `<hr>`:
- Sama seperti `<br>`, ia adalah **Void Element** yang tidak memerlukan tag penutup.
- Menampilkan garis pembatas horizontal tipis di sepanjang baris halaman web secara default.

---

## ⚠️ Peringatan Penting: Jangan Gunakan `<br>` untuk Spasi Jarak!

Seringkali pemula menulis `<br><br><br><br>` bertumpuk-tumpuk hanya untuk membuat jarak kosong yang lebar di antara dua elemen halaman. **Hindari kebiasaan buruk ini!**
- Mengatur jarak renggang (*spacing* atau *margin*) adalah tanggung jawab penuh **CSS**.
- Gunakan `<br>` hanya jika secara konten teks memang membutuhkan baris baru (misalnya penulisan alamat, baris puisi, atau bait lirik lagu).

Mari kita lanjutkan pembahasan ke cara membuat dekorasi tulisan tebal, miring, dan garis bawah.

**[Lanjut: Bold, Italic, Underline →](/bab2/bold-italic-underline/)**
