---
title: "figure & figcaption"
description: Mengelompokkan gambar dan memberikan teks keterangan secara semantik menggunakan tag figure dan figcaption.
---

Menulis gambar di dalam paragraf teks biasa terkadang membuat struktur dokumen kurang rapi. Jika gambar tersebut merupakan unit konten tersendiri yang dilengkapi dengan teks keterangan (caption), HTML5 menyediakan elemen pembungkus semantik khusus.

Elemen tersebut adalah **`<figure>`** dan **`<figcaption>`**.

---

## 🏗️ Mengelompokkan Media: Elemen `<figure>`

Elemen `<figure>` digunakan untuk membungkus konten media (seperti gambar, diagram, atau ilustrasi kode) yang berdiri sendiri sebagai satu kesatuan. Konten di dalam `<figure>` bersifat independen — artinya jika kamu memindahkan posisinya ke bagian bawah halaman, isi makna artikel utamamu tidak akan rusak.

```html
<figure>
  <img src="images/skema.png" alt="Skema alur request-response browser ke server" width="500" height="300" />
</figure>
```

---

## 🏷️ Menambahkan Keterangan: Elemen `<figcaption>`

Untuk memberikan teks keterangan atau judul pada gambar di dalam `<figure>`, kita menggunakan tag **`<figcaption>`** (singkatan dari *figure caption*).

Tag `<figcaption>` harus diletakkan sebagai anak langsung dari `<figure>` (bisa di bagian paling atas sebelum gambar, atau di bagian paling bawah setelah gambar).

```html
<figure>
  <img src="images/server.jpg" alt="Foto barisan rak komputer web server di pusat data" width="600" height="400" />
  <figcaption>Gambar 1.2: Rak komputer server yang menyimpan data-data website.</figcaption>
</figure>
```

### Karakteristik & Perilaku Browser:
- Browser akan memberikan **jarak indentasi menjorok masuk** pada sisi kiri dan kanan elemen `<figure>` secara default.
- Teks di dalam `<figcaption>` akan diikat bersama gambarnya, membantu mesin pembaca layar (*screen reader*) memahami bahwa teks tersebut adalah penjelasan langsung dari media di atasnya.

:::tip[Mengapa tidak gunakan p biasa?]
Menggunakan tag paragraf biasa `<p>` di bawah gambar tidak memberikan hubungan relasi apa pun. Dengan `<figure>` dan `<figcaption>`, browser dan mesin pencari tahu secara mutlak bahwa teks tersebut terhubung langsung dengan gambar yang bersangkutan.
:::

Mari kita pelajari konsep gambar responsif untuk optimasi kecepatan pemuatan gambar di berbagai ukuran layar.

**[Lanjut: Gambar Responsif →](/bab4/gambar-responsif/)**
