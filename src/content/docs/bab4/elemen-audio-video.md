---
title: "Elemen audio & video"
description: Memahami cara memutar media suara dan video menggunakan tag audio dan video bawaan HTML5.
---

Sebelum era HTML5, memutar lagu atau video di halaman web sangatlah rumit. Developer harus memasang plugin eksternal seperti *Adobe Flash Player* yang seringkali lambat dan memiliki celah keamanan berbahaya.

Kini, HTML5 menyediakan pemutar media bawaan yang sangat ringan dan aman menggunakan tag **`<audio>`** dan **`<video>`**.

---

## 🔊 1. Pemutar Suara: Tag `<audio>`

Untuk menyisipkan musik atau suara di halaman web, kita menggunakan tag `<audio>`.

```html
<audio controls>
  <source src="media/musik-latar.mp3" type="audio/mpeg" />
  <source src="media/musik-latar.ogg" type="audio/ogg" />
  <p>Browsermu tidak mendukung pemutar suara bawaan.</p>
</audio>
```

---

## 🎬 2. Pemutar Video: Tag `<video>`

Untuk menyisipkan file video di halaman web, kita menggunakan tag `<video>`.

```html
<video width="640" height="360" controls>
  <source src="media/demo-aplikasi.mp4" type="video/mp4" />
  <source src="media/demo-aplikasi.webm" type="video/webm" />
  <p>Browsermu tidak mendukung pemutar video bawaan.</p>
</video>
```

---

## 🧩 Memahami Cara Kerja Tag Pendukung

### 1. Tag `<source>` (Banyak Pilihan Format)
Setiap browser memiliki lisensi pemutaran audio/video yang berbeda. Agar mediamu bisa diputar di semua browser, kita menyediakan beberapa pilihan format file di dalam tag `<source>`.
- Browser akan membaca daftar `<source>` dari atas ke bawah, lalu memutar format pertama yang didukung oleh sistemnya.
- Atribut **`type`** membantu browser mengetahui jenis file sebelum mengunduhnya (misalnya: `type="video/mp4"`).

### 2. Teks Cadangan (Fallback Content)
Jika ada pengunjung yang menggunakan browser sangat kuno yang belum mendukung HTML5, teks paragraf di dalam tag `<audio>` atau `<video>` (seperti *"Browsermu tidak mendukung..."*) akan ditampilkan sebagai pesan peringatan pengganti. Pada browser modern, teks ini otomatis disembunyikan.

Mari kita pelajari atribut-atribut penting untuk mengontrol pemutaran media secara otomatis, berulang, atau bisu.

**[Lanjut: Atribut Kontrol & Autoplay →](/bab4/atribut-kontrol-autoplay/)**
