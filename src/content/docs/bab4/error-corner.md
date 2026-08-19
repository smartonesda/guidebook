---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat memuat Gambar & Multimedia.
---

Berikut adalah daftar kesalahan paling sering dilakukan pemula saat menyematkan gambar, audio, video, dan iframe di HTML5, beserta cara memperbaikinya.

---

## ❌ 1. Menulis Satuan "px" pada Atribut `width` dan `height` HTML

**Penyebab Error**:
```html
<!-- ❌ SALAH: Menuliskan satuan px langsung di atribut HTML -->
<img src="foto.jpg" alt="..." width="300px" height="200px" />
```

**Mengapa Bermasalah**: Di HTML5, atribut dimensi `width` dan `height` **hanya menerima angka bulat** saja (yang otomatis dihitung sebagai satuan piksel oleh browser). Menuliskan huruf `px` di dalamnya adalah kesalahan aturan sintaks yang akan memicu error di HTML Validator.

**Cara Memperbaiki**: Tuliskan nilainya berupa angka saja tanpa satuan:
```html
<!-- ✅ BENAR: Valid sesuai standar W3C -->
<img src="foto.jpg" alt="..." width="300" height="200" />
```

---

## ❌ 2. Menulis Teks Alternatif `alt` yang Tidak Berguna

**Penyebab Error**: Menuliskan kata deskripsi yang terlalu umum atau redundan.
```html
<!-- ❌ SALAH: Deskripsi tidak memberikan informasi bermanfaat -->
<img src="avatar.png" alt="gambar" />
<img src="profil.jpg" alt="foto profil rizki.jpg" />
```

**Mengapa Bermasalah**: Pembaca layar (*screen reader*) sudah tahu bahwa elemen tersebut adalah gambar. Menuliskan `alt="gambar"` membuat alat pembaca bersuara: *"Gambar, gambar."* (sangat mengganggu). Menuliskan ekstensi file `.jpg` juga tidak berguna bagi manusia.

**Cara Memperbaiki**: Tulis deskripsi yang menggambarkan informasi nyata di dalam gambar secara padat:
```html
<!-- ✅ BENAR: Informatif dan aksesibel -->
<img src="avatar.png" alt="Ikon avatar pengguna berwarna abu-abu" />
<img src="profil.jpg" alt="Foto potret wajah Rizki Pratama" />
```

---

## ❌ 3. Video Autoplay yang Tidak Berputar karena Lupa `muted`

**Penyebab Error**: Mengharap video berputar sendiri di layar tanpa membisukan suaranya.
```html
<!-- ❌ SALAH: Kebanyakan browser akan memblokir video ini secara paksa -->
<video autoplay controls>
  <source src="demo.mp4" type="video/mp4" />
</video>
```

**Mengapa Bermasalah**: Demi kenyamanan pengguna internet dari suara berisik yang mendadak, browser modern melarang video untuk autoplay kecuali jika suaranya dibisukan sejak awal.

**Cara Memperbaiki**: Pasang atribut **`muted`** jika ingin menggunakan `autoplay`:
```html
<!-- ✅ BENAR: Otomatis berputar secara halus di latar belakang -->
<video autoplay muted controls>
  <source src="demo.mp4" type="video/mp4" />
</video>
```

---

## ❌ 4. Menyematkan `<iframe>` Tanpa Menyediakan Atribut `title`

**Penyebab Error**:
```html
<!-- ❌ SALAH: Menyulitkan pengguna screen reader memahami isi frame -->
<iframe src="https://www.google.com/maps/embed..."></iframe>
```

**Mengapa Bermasalah**: Saat menemukan iframe, screen reader akan membacakan judul bingkai tersebut. Jika atribut `title` tidak ada, pengguna tunanetra tidak akan tahu apakah iframe tersebut berisi peta lokasi, video iklan, atau formulir penting.

**Cara Memperbaiki**: Selalu berikan atribut `title` yang ringkas dan deskriptif:
```html
<!-- ✅ BENAR: Ramah aksesibilitas -->
<iframe src="https://www.google.com/maps/embed..." title="Peta petunjuk arah lokasi sekolah"></iframe>
```

Mari kita lanjut ke halaman ringkasan untuk merekap seluruh pembelajaran di BAB 4!

**[Lanjut: Ringkasan →](/bab4/ringkasan/)**
