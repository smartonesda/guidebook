---
title: "Mini Project"
description: Tambahkan foto profil, tangkapan layar proyek, pemutar video demo, dan peta lokasi ke dalam website portfoliomu.
---

Saatnya melanjutkan pengembangan proyek portfolio pribadimu! Di bab ini, kita akan memperkaya tampilan visual halaman `index.html` dan `projects.html` dengan memasukkan aset gambar profil, ilustrasi screenshot proyek, menyematkan video demonstrasi koding, dan peta lokasi sekolahmu.

Proyek ini adalah **versi pembaruan (v0.4)** dari halaman portofolio pribadimu.

---

## 🎯 Deskripsi Project

Kamu akan melengkapi struktur folder proyekmu dengan laci folder aset media, lalu memodifikasi kode HTML untuk:
1. **Membuat Folder Aset**: Buat susunan folder `assets/images/` dan `assets/videos/` di dalam folder proyekmu.
2. **Foto Diri**: Taruh foto wajahmu di folder images, tampilkan di bagian atas `index.html` menggunakan tag `<figure>` dan `<figcaption>`.
3. **Tangkapan Layar**: Ambil screenshot halaman portfoliomu versi sebelumnya, simpan sebagai file gambar, dan tampilkan sebagai ilustrasi di halaman `projects.html`.
4. **Video Demo**: Buat rekaman video singkat (atau cari file video mp4 bebas/dummy berukuran kecil), taruh di folder video, lalu tampilkan pemutar video bawaan di halaman `projects.html`.
5. **Google Maps**: Cari koordinat sekolah atau rumahmu di Google Maps, lalu sematkan peta lokasinya menggunakan tag `<iframe>` di halaman `index.html`.

---

## 📋 Requirements Wajib

### A. Susunan Folder & Gambar (40 poin)

- [ ] Folder proyekmu wajib tertata rapi mengikuti struktur berikut:
  ```text
  belajar-html/
  ├── index.html
  ├── projects.html
  ├── dokumen/
  │   └── resume.pdf
  └── assets/
      ├── images/
      │   ├── foto-kamu.jpg      (Foto wajah kamu)
      │   ├── screenshot-1.png   (Tangkapan layar proyek 1)
      │   └── screenshot-2.png   (Tangkapan layar proyek 2)
      └── videos/
          └── demo-koding.mp4    (File video pendek/tiruan)
  ```
- [ ] Tampilkan foto wajahmu di halaman `index.html` dibungkus tag `<figure>` dan diberi teks keterangan nama lengkapmu menggunakan `<figcaption>`.
- [ ] Berikan atribut **`src`** and **`alt`** yang valid dan deskriptif pada setiap tag `<img>` (hindari nama file mentah di deskripsi alt).
- [ ] Wajib menuliskan atribut **`width`** and **`height`** sesuai ukuran gambar asli untuk menghindari pergeseran tata letak halaman (*Cumulative Layout Shift*).

### B. Pemutar Video & Iframe Peta (40 poin)

- [ ] **Video**: Sematkan pemutar video lokal di halaman `projects.html` menggunakan tag `<video>` yang memiliki atribut **`controls`** agar bisa diputar pengunjung.
- [ ] Sediakan tag `<source>` di dalam tag `<video>` lengkap dengan atribut `type="video/mp4"` yang menunjuk ke file videomu.
- [ ] Sediakan teks cadangan (*fallback content*) di dalam tag video jika browser pengunjung tidak mendukung pemutar HTML5.
- [ ] **Peta**: Sematkan peta Google Maps di halaman `index.html` menggunakan tag `<iframe>` dengan lebar penuh (`width="100%"`).
- [ ] Wajib menyertakan atribut **`title`** yang deskriptif pada tag `<iframe>` demi standar aksesibilitas pembaca layar.
- [ ] Tambahkan atribut **`loading="lazy"`** pada tag `<iframe>` untuk optimasi kecepatan pemuatan halaman.

### C. Validasi & Kualitas Kode (20 poin)

- [ ] Semua penamaan file media (gambar dan video) wajib menggunakan **huruf kecil semua** dan **tidak boleh mengandung spasi kosong** (gunakan tanda strip `-` sebagai pemisah kata).
- [ ] **0 Error** di W3C Validator (`validator.w3.org`) untuk kedua file HTML-mu.

---

## 📝 Contoh Referensi Kode Pembantu

Gunakan ini sebagai acuan menuliskan tag media baru di dalam dokumenmu:

### Contoh Penulisan Foto Profil (`index.html`)
```html
<figure>
  <img 
    src="assets/images/foto-kamu.jpg" 
    alt="Foto potret diri [Nama Kamu] menggunakan seragam sekolah" 
    width="150" 
    height="150" 
  />
  <figcaption>[Nama Lengkap Kamu] — Calon Web Developer</figcaption>
</figure>
```

### Contoh Penulisan Iframe Peta (`index.html`)
```html
<h2>Lokasi Sekolah Saya</h2>
<iframe 
  src="https://www.google.com/maps/embed?..." 
  width="100%" 
  height="300" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy" 
  title="Peta interaktif lokasi SMK [Nama Sekolah] [Kota]"
></iframe>
```

### Contoh Penulisan Video Demo (`projects.html`)
```html
<h2>Video Demonstrasi Belajar</h2>
<video width="640" height="360" controls>
  <source src="assets/videos/demo-koding.mp4" type="video/mp4" />
  <p>Browsermu tidak mendukung pemutar video HTML5. Silakan unduh berkas videonya langsung.</p>
</video>
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin Maksimal |
|---|---|---|
| **Penyusunan Folder & Gambar** | Aset media diletakkan di folder assets, tag img memiliki src, alt deskriptif, width, dan height stabil. | 40 |
| **Integrasi Video & Peta** | Video controls terpasang valid, iframe Maps memiliki title aksesibel dan loading lazy. | 40 |
| **Standardisasi File & Uji W3C** | Nama berkas huruf kecil tanpa spasi, bebas dari error di validator resmi. | 20 |
| **Total** | | **100** |

---

## ✅ Checklist Sebelum Mengumpulkan

Buka file `index.html` dan `projects.html` di browsermu lewat Live Server, lalu pastikan:
```
☐ Foto dirimu muncul di halaman beranda dengan teks keterangan di bawahnya.
☐ Tangkapan layar proyek muncul dengan ukuran proporsional (tidak gepeng atau melar).
☐ Video demo koding bisa dimainkan, dijeda, dan diatur suaranya melalui tombol kontrol.
☐ Peta Google Maps termuat secara interaktif dan memiliki judul deskripsi yang tepat.
☐ Tidak ada error 404 pada panel Console DevTools (tidak ada aset yang hilang).
☐ Kedua file HTML lolos uji validasi di validator.w3.org dengan warna hijau.
```

Portfolio pribadimu sekarang sudah terlihat sangat menarik dan profesional! Pada bab selanjutnya, kita akan belajar mengelompokkan informasi ke dalam bentuk daftar terurut dan tidak terurut, serta membuat tabel data.

**[Lanjut: Challenge →](/bab4/challenge/)**
