---
title: "Project 1 — Personal Biodata"
description: Mini Project 1 — Membangun halaman biodata pribadi yang terstruktur, bermakna, dan aksesibel berdasarkan brief klien.
---

## 📄 1. Project Brief

- **Project**: Halaman Biodata Pribadi (*Personal Profile Sheet*)
- **Level**: Beginner
- **Estimasi Waktu**: 30–45 Menit

---

## 🎭 2. Scenario & Problem

Kamu diminta oleh seorang siswa RPL untuk membuatkan halaman biodata pribadi digital yang bisa dipasang di web sekolah. Saat ini biodatanya masih berupa catatan teks biasa tanpa struktur yang rapi, sehingga sulit dibaca oleh guru pembimbing magang.

---

## 🎯 3. Goal & Target User

- **Goal**: Menampilkan informasi profil, riwayat pendidikan, keahlian, dan kontak secara terstruktur dan mudah di-skimming.
- **Target User**: Guru SMK, calon pembimbing industri magang, dan teman sekelas.

---

## 📋 4. Requirements Wajib

### A. Dokumen & Identitas
- [ ] Dokumen HTML5 lengkap (`<!DOCTYPE html>`, `lang="id"`, `<meta charset="UTF-8">`, `<meta name="viewport">`).
- [ ] `<title>` yang informatif (contoh: `Biodata Budi Santoso — Siswa SMK RPL`).

### B. Konten & Struktur
- [ ] Profil singkat dengan foto diri dalam elemen `<figure>` dan `<figcaption>`.
- [ ] Riwayat Pendidikan menggunakan Description List (`<dl>`, `<dt>`, `<dd>`) atau Ordered List (`<ol>`).
- [ ] Keahlian Teknis menggunakan Unordered List (`<ul>`) bersarang.
- [ ] Hobi/Minat dalam list.
- [ ] Tautan kontak aktif (`mailto:` dan tautan media sosial eksternal).

---

## 🧠 5. Concepts Used (BAB 1–11)

- **BAB 1**: Dokumen HTML5 dasar & validasi tag.
- **BAB 2**: Heading hierarchy (`<h1>`–`<h3>`), `<p>`, `<strong>`, `<em>`.
- **BAB 3**: Tautan `<a>` dengan atribut `href`, `target="_blank"`, `rel="noopener noreferrer"`.
- **BAB 4**: Gambar `<img>` dengan `alt` text deskriptif, `<figure>`, dan `<figcaption>`.
- **BAB 5**: Lists (`<ul>`, `<ol>`, `<dl>`).

---

## 🏗️ 6. Suggested Page Structure

```
<!DOCTYPE html>
<html lang="id">
<head> ... </head>
<body>
  <header>
    <figure> (Foto & Nama) </figure>
  </header>

  <main>
    <section id="tentang"> ... </section>
    <section id="pendidikan"> ... </section>
    <section id="keahlian"> ... </section>
    <section id="hobi"> ... </section>
  </main>

  <footer> (Kontak & Copyright) </footer>
</body>
</html>
```

---

## ✍️ 7. Starter Content (Bahan Teks)

```text
Nama: Andi Wijaya
Jurusan: Rekayasa Perangkat Lunak (RPL)
Sekolah: SMK Negeri 1 Jakarta
Email: andi.wijaya@example.com
Deskripsi: Saya adalah siswa SMK RPL kelas XI yang tertarik dalam pengembangan aplikasi web dan pembuatan antarmuka yang bersih.

Pendidikan:
- 2024 - Sekarang: SMKN 1 Jakarta (RPL)
- 2021 - 2024: SMPN 10 Jakarta

Keahlian:
- HTML5 (Struktur & Semantik)
- CSS DASAR (Layouting)
- Bahasa Inggris (Pasif)
```

---

## 🛠️ 8. Implementation Tasks (Langkah Pengerjaan)

1. Buat berkas `index.html` baru di editor VS Code-mu.
2. Susun kerangka `<!DOCTYPE html>` dan elemen `<head>`.
3. Tuliskan elemen `<header>` yang membungkus nama dan foto profil.
4. Gunakan elemen `<main>` dan bagi menjadi 4 bagian `<section>` dengan `aria-labelledby`.
5. Terapkan `<dl>` untuk data diri dan `<ol>`/`<ul>` untuk pendidikan dan keahlian.
6. Tambahkan tautan email dan GitHub di bagian `<footer>`.

---

## ✅ 9. Quality & Accessibility Checklist

```
[ ] HTML lolos 0 Error di validator.w3.org.
[ ] Foto profil memiliki atribut alt yang deskriptif.
[ ] Semua link eksternal memiliki rel="noopener noreferrer".
[ ] Indentasi 2 spasi secara disiplin.
[ ] Tidak ada atribut ID yang dipakai berulang kali.
```

---

## 🚀 10. Challenge Tambahan (Opsional)

- Tambahkan badge status ketersediaan magang (contoh: `<span data-status="tersedia">Siap Magang</span>`).
- Tambahkan tautan resume PDF yang dapat diunduh menggunakan atribut `download`.

---

## 🤔 11. Reflection (Refleksi Mandiri)

- *Mengapa data diri seperti Domisili dan Jurusan lebih tepat menggunakan `<dl>` daripada `<ul>`?*
- *Mengapa nama utama siswa harus menggunakan tag `<h1>` bukan `<h3>`?*

---

**[Lanjut: Project 2 — School Profile →](/bab12/project-2-school-profile/)**
