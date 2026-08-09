---
title: "Error Corner"
description: Kesalahan fatal yang sering menggagalkan Final Project dan cara memperbaikinya sebelum penilaian.
---

---

## ❌ 1. Mengabaikan Skip Navigation Link
Menganggap Skip Navigation Link hanya "elemen hiasan" sehingga tidak dipasang.
- **Akibat**: Pengguna keyboard harus menekan `Tab` puluhan kali di setiap halaman baru untuk melompati navigasi header. Nilai aksesibilitas akan langsung dipotong.
- **Solusi**: Selalu pasang `<a href="#konten-utama" class="skip-link">Lompati ke konten utama</a>` di baris pertama `<body>`.

---

## ❌ 2. Menggunakan URL Relatif pada Tag Open Graph (`og:image`)
Menuliskan `<meta property="og:image" content="/images/og.png">`.
- **Akibat**: Bot WhatsApp, Facebook, dan LinkedIn tidak bisa mengunduh gambar preview saat link websitemu dibagikan.
- **Solusi**: Gunakan selalu URL absolut lengkap yang diawali dengan `https://` (contoh: `content="https://domainmu.com/images/og.png"`).

---

## ❌ 3. Tag Heading Loncat-Loncat (`<h1>` -> `<h4>`)
Menggunakan `<h4>` langsung di bawah `<h1>` hanya karena ingin ukuran teks tulisan lebih kecil.
- **Akibat**: Merusak struktur *Table of Contents* otomatis bagi pengguna screen reader.
- **Solusi**: Selalu gunakan hierarki berurutan (`<h1>` -> `<h2>` -> `<h3>`). Ubah ukuran visual tulisan menggunakan CSS.

---

## ❌ 4. Lupa Menguji Hasil Validasi W3C Sebelum Ditunjukkan ke Penguji
Menyerahkan proyek tanpa mengujinya di `validator.w3.org`.
- **Akibat**: Banyak error sepele (tag lupa ditutup, id duplikat) yang mengurangi nilai profesionalisme kodenya.
- **Solusi**: Wajibkan diri sendiri melakukan uji W3C Validator hingga muncul status **Hijau (0 Error)** sebelum melakukan presentasi.

---

**[Lanjut: Ringkasan →](/bab13/ringkasan/)**
