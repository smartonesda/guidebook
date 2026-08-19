---
title: "Gambar Responsif"
description: Memahami konsep gambar responsif menggunakan tag picture, source, srcset, dan sizes di HTML5.
---

Pengunjung website-mu akan menggunakan berbagai perangkat yang berbeda — mulai dari layar laptop yang lebar hingga layar HP yang sempit.

Jika kamu menyajikan gambar berukuran besar (misalnya 2000 piksel) untuk pengguna HP, hal ini akan membuang-buang kuota internet mereka dan memperlambat kecepatan pemuatan halaman web di ponsel.

Di sinilah kita membutuhkan konsep **Gambar Responsif** (*Responsive Images*) untuk mengirimkan berkas gambar dengan ukuran yang pas sesuai layar perangkat pengguna.

---

## ⚡ 1. Atribut `srcset` dan `sizes` pada `<img>`

Cara termudah membuat gambar responsif adalah memberikan pilihan beberapa resolusi gambar kepada browser menggunakan atribut **`srcset`**. Browser akan memilih gambar yang paling cocok secara otomatis.

```html
<img 
  src="foto-small.jpg" 
  srcset="foto-small.jpg 480w, foto-medium.jpg 800w, foto-large.jpg 1200w"
  sizes="(max-width: 600px) 480px, 800px"
  alt="Foto profil Rizki Pratama"
  width="800"
  height="600"
/>
```

- **`srcset`**: Memberikan daftar file gambar beserta lebarnya masing-masing menggunakan satuan `w` (misalnya `480w` artinya lebar gambar asli file tersebut adalah 480 piksel).
- **`sizes`**: Memberitahu browser berapa lebar ruang gambar yang akan ditampilkan pada kondisi lebar layar tertentu.

Browser akan menghitung lebar layar pengguna saat itu, lalu memilih file gambar terkecil yang mencukupi kebutuhan layar agar loading halaman super cepat!

---

## 🖼️ 2. Seni Mengubah Gambar: Elemen `<picture>`

Terkadang kita tidak hanya ingin merubah resolusi gambar, melainkan ingin menampilkan **gambar yang berbeda secara total** saat dibuka di HP dan laptop. Skenario ini disebut *Art Direction*.

Untuk kebutuhan ini, HTML5 menyediakan tag **`<picture>`** yang membungkus tag **`<source>`** dan tag **`<img>`** utama.

```html
<picture>
  <!-- Jika layar HP (lebar maks 600px), tampilkan gambar versi vertikal/crop -->
  <source media="(max-width: 600px)" srcset="foto-portrait.jpg" />
  
  <!-- Jika layar lebar (desktop), tampilkan gambar versi landscape lebar -->
  <source media="(min-width: 601px)" srcset="foto-landscape.jpg" />
  
  <!-- Tag img wajib ada sebagai cadangan (fallback) jika browser lama tidak mendukung -->
  <img src="foto-default.jpg" alt="Foto pemandangan gunung" />
</picture>
```

- **`<source>`**: Tag tanpa penutup yang menampung kondisi media query (`media`) dan alamat gambar (`srcset`).
- **`<img>` (Fallback)**: Browser akan membaca source dari atas ke bawah. Jika tidak ada kondisi yang terpenuhi, browser akan menggunakan tag `<img>` paling bawah. Tag `<img>` ini sangat wajib ada agar gambarnya bisa digambar di halaman!

Mari kita pelajari cara menampilkan media pemutar suara (audio) dan pemutar video secara bawaan di browser.

**[Lanjut: Elemen audio & video →](/bab4/elemen-audio-video/)**
