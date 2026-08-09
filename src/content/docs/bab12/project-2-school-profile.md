---
title: "Project 2 — School Profile"
description: Mini Project 2 — Merancang halaman profil sekolah interaktif dengan navigasi multi-seksi, informasi program keahlian, dan peta lokasi.
---

## 📄 1. Project Brief

- **Project**: Halaman Profil Resmi Sekolah (*School Profile Page*)
- **Level**: Beginner → Intermediate
- **Estimasi Waktu**: 45–60 Menit

---

## 🎭 2. Scenario & Problem

SMK Nusantara membutuhkan sebuah halaman profil web satu halaman (*one-page profile*) untuk memperkenalkan sekolah kepada calon siswa baru dan mitra industri magang. Saat ini sekolah belum memiliki halaman web yang terstruktur dengan navigasi yang mudah.

---

## 🎯 3. Goal & Target User

- **Goal**: Menyajikan profil sekolah lengkap dengan navigasi melompat (*anchor links*), daftar jurusan, fasilitas, dan lokasi sekolah.
- **Target User**: Calon siswa baru, orang tua siswa, dan perusahaan mitra tempat magang.

---

## 📋 4. Requirements Wajib

### A. Navigasi & Struktur
- [ ] Header situs dengan nama sekolah dan navigasi utama (`<nav>`).
- [ ] Anchor links navigasi yang menghubungkan ke seksi: `#sambutan`, `#visi-misi`, `#jurusan`, `#fasilitas`, dan `#kontak`.
- [ ] Tombol *Skip to content* untuk aksesibilitas keyboard.

### B. Konten Halaman
- [ ] **Sambutan Kepala Sekolah**: Teks sambutan dengan foto kepala sekolah (`<figure>` & `<figcaption>`).
- [ ] **Visi & Misi**: Menggunakan heading dan list terurut (`<ol>`).
- [ ] **Program Keahlian**: Minimal 3 jurusan sekolah menggunakan `<article>` atau list terstruktur.
- [ ] **Fasilitas**: Unordered list (`<ul>`) fasilitas unggulan.
- [ ] **Peta Lokasi & Kontak**: Peta lokasi tersemat (`<iframe>`) dan alamat resmi menggunakan `<address>`.

---

## 🧠 5. Concepts Used (BAB 1–11)

- **BAB 3**: Anchor links internal (`href="#id"`).
- **BAB 4**: Gambar `<img>`, `<iframe>` peta Google Maps, `<figure>`.
- **BAB 8**: Semantic layout (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<address>`, `<footer>`).
- **BAB 10**: Aksesibilitas keyboard dan Skip Link.

---

## 🏗️ 6. Suggested Page Structure

```
<!DOCTYPE html>
<html lang="id">
<head> ... </head>
<body>
  <a href="#konten-utama" class="skip-link">Lompati ke konten utama</a>

  <header>
    <p class="brand">SMK Nusantara</p>
    <nav aria-label="Navigasi utama">
      <a href="#sambutan">Sambutan</a>
      <a href="#visi-misi">Visi & Misi</a>
      <a href="#jurusan">Jurusan</a>
      <a href="#fasilitas">Fasilitas</a>
      <a href="#kontak">Kontak</a>
    </nav>
  </header>

  <main id="konten-utama" tabindex="-1">
    <section id="sambutan"> ... </section>
    <section id="visi-misi"> ... </section>
    <section id="jurusan"> ... </section>
    <section id="fasilitas"> ... </section>
    <section id="kontak"> ... </section>
  </main>

  <footer> ... </footer>
</body>
</html>
```

---

## 🛠️ 7. Implementation Tasks

1. Buat file `school-profile.html`.
2. Susun navigasi `<nav>` dengan tautan `#id` ke setiap seksi halaman.
3. Buat seksi `#sambutan` dengan elemen `<figure>` membungkus foto Kepala Sekolah.
4. Gunakan elemen `<ol>` untuk Misi sekolah agar nomor urut tampil rapi.
5. Gunakan elemen `<address>` di bagian footer untuk menampung alamat fisik sekolah dan email resmi.
6. Sematkan `<iframe>` Google Maps pada seksi `#kontak`.

---

## ✅ 8. Quality & Accessibility Checklist

```
[ ] Semua tautan navigasi internal (#id) berfungsi dan melompat ke seksi yang benar.
[ ] iframe peta memiliki atribut title yang menjelaskan fungsinya.
[ ] Alamat resmi menggunakan tag semantik <address>.
[ ] Lolos uji 0 Error di validator.w3.org.
```

---

## 🚀 9. Challenge Tambahan

- Tambahkan seksi pengumuman terbaru (`<aside>`) di samping seksi sambutan.
- Tambahkan atribut `loading="lazy"` pada elemen `<iframe>`.

---

**[Lanjut: Project 3 — Blog Article →](/bab12/project-3-blog-article/)**
