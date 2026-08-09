---
title: "Atribut Kontrol & Autoplay"
description: Mengontrol pemutaran media audio dan video menggunakan atribut controls, autoplay, muted, loop, dan poster.
---

Untuk mengatur bagaimana audio atau video diputar dan berinteraksi dengan pengunjung, HTML5 menyediakan beberapa atribut boolean (cukup tulis nama atributnya saja tanpa nilai) dan atribut biasa.

---

## 🛠️ Atribut Kontrol Media

### 1. `controls`
Menampilkan tombol kendali standar bawaan browser (seperti tombol Play/Pause, pengatur volume suara, garis durasi, dan tombol layar penuh).
- **Aturan**: Selalu sertakan atribut ini kecuali jika kamu ingin membuat tombol kendali sendiri menggunakan JavaScript. Tanpa `controls`, videomu hanya akan tampil sebagai gambar diam yang tidak bisa diputar oleh pengguna.

### 2. `poster` (Khusus Video)
Menentukan gambar sampul (*thumbnail*) yang akan ditampilkan sebelum videomu diputar oleh pengguna.
```html
<video controls poster="images/sampul-video.jpg">
  <source src="demo.mp4" type="video/mp4" />
</video>
```

### 3. `loop`
Membuat media otomatis diputar kembali dari awal secara terus-menerus saat durasinya habis.

---

## 🚦 Aturan Autoplay Modern: Bisu itu Wajib!

### 4. `autoplay` & `muted`
Atribut `autoplay` memerintahkan browser untuk langsung memutar audio atau video seketika saat halaman web selesai dimuat.

Namun, ada aturan ketat yang wajib kamu ketahui:
- **Kebijakan Browser**: Sejak beberapa tahun lalu, semua browser modern (seperti Chrome, Edge, Safari) melarang pemutaran video bersuara secara otomatis karena sangat mengganggu kenyamanan pengguna.
- **Syarat Autoplay**: Agar atribut `autoplay` berfungsi pada video, kamu **wajib menyertakan atribut `muted`** (bisu) bersamanya.

```html
<!-- ✅ BENAR: Video otomatis berputar di latar belakang tanpa suara (seperti efek GIF) -->
<video autoplay muted loop playsinline width="400">
  <source src="background-motion.mp4" type="video/mp4" />
</video>
```
*(Catatan: `playsinline` ditambahkan agar video tidak otomatis membuka layar penuh saat diputar di perangkat iPhone).*

---

## 💡 Kapan Menggunakan Autoplay?

- **Gunakan jika**: Videomu bertindak sebagai dekorasi latar belakang halaman (*hero video*) yang tidak membutuhkan audio, atau bertindak sebagai animasi pengganti GIF yang efisien.
- **Jangan gunakan jika**: Videomu adalah konten utama (seperti tutorial atau film) yang bersuara keras, karena akan membuat pengunjung terkejut dan langsung menutup websitemu.

Selanjutnya, kita akan mempelajari cara menyematkan konten interaktif eksternal (seperti peta Google Maps atau video YouTube) menggunakan tag `<iframe>`.

**[Lanjut: Elemen iframe →](/bab4/elemen-iframe/)**
