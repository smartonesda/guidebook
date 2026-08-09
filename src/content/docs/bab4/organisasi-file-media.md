---
title: "Organisasi File Media"
description: Menyusun tata letak folder dan file media dalam proyek web agar terstruktur rapi dan maintainable.
---

Seiring berkembangnya proyek websitemu, jumlah berkas gambar, audio, dan video akan semakin bertambah banyak. Jika semua file tersebut diletakkan menumpuk secara acak di folder root (folder utama proyek), folder kerjamu akan menjadi sangat berantakan dan sulit dikelola.

Di sinilah kita wajib membiasakan diri merancang **Organisasi File Media** yang bersih sejak awal.

---

## 📂 Struktur Folder Standar Industri

Di industri web development profesional, kita biasanya memisahkan file kode HTML dengan aset media ke dalam folder bernama **`assets`** (atau `media`).

Berikut adalah contoh susunan folder proyek portfolio kita yang ideal:

```text
portfolio-proyek/
├── index.html            (File HTML Utama)
├── projects.html         (File HTML Proyek)
├── dokumen/
│   └── resume.pdf        (File PDF Unduhan)
└── assets/               (Folder Aset Media)
    ├── images/
    │   ├── profile.jpg   (Foto profil kamu)
    │   └── project-1.png (Screenshot proyek pertama)
    └── videos/
        └── demo.mp4      (Video demo aplikasi)
```

Dengan susunan ini, file halaman HTML-mu tetap berada di depan secara bersih, sementara semua media tersimpan rapi di dalam laci foldernya masing-masing.

---

## 🗺️ Cara Menulis Jalur Relatif yang Baru

Karena posisi gambar sekarang berada di dalam sub-folder `assets/images/`, mari kita sesuaikan penulisan rute relative path-nya di dalam file HTML kita:

### Kasus A: Memanggil foto dari dalam file `index.html` (berada di tingkat folder utama)
```html
<!-- Masuk ke folder assets, lalu masuk ke folder images, baru ambil file -->
<img src="assets/images/profile.jpg" alt="Foto profil" width="150" height="150" />
```

### Kasus B: Memanggil video demo dari dalam file `projects.html` (berada di tingkat folder utama)
```html
<video controls width="640">
  <source src="assets/videos/demo.mp4" type="video/mp4" />
</video>
```

---

## ✨ Aturan Penamaan File Media yang Baik

Agar tautan alamat tidak rusak saat websitemu diunggah ke server internet, patuhi 3 aturan emas penamaan file media berikut:

1. **Gunakan Huruf Kecil Semua**: Beri nama `foto-profil.jpg`, bukan `Foto-Profil.JPG` atau `fotoProfil.jpg`.
2. **Hindari Spasi Kosong**: Gunakan tanda hubung strip (`-`) untuk memisahkan kata. Jangan gunakan spasi kosong karena spasi akan diterjemahkan menjadi `%20` di URL dan rentan rusak. Gunakan `screenshot-proyek.png`, bukan `screenshot proyek.png`.
3. **Gunakan Nama yang Deskriptif**: Hindari nama bawaan kamera yang membingungkan. Gunakan `foto-rizki.jpg`, bukan `IMG_98234_2026.jpg`.

Mari kita terapkan semua konsep pemuatan gambar dan media ini ke dalam proyek portfolio kita melalui studi kasus halaman nyata.

**[Lanjut: Studi Kasus →](/bab4/studi-kasus/)**
