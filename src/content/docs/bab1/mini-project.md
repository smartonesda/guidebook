---
title: "Mini Project"
description: Bangun halaman profil developer pribadi yang lengkap, valid, dan semantic — proyek pertama yang benar-benar mencerminkan identitasmu.
---

Ini adalah proyek pertamamu yang sesungguhnya. Bukan sekadar contoh dari buku teks, melainkan **halaman HTML-mu sendiri** yang menceritakan tentang dirimu dan masa depanmu sebagai web developer.

Proyek ini akan menjadi **versi paling awal (v0.1)** dari portfolio pribadimu, yang akan terus kita kembangkan dan percantik sedikit demi sedikit hingga mencapai BAB 15 nanti!

---

## 🎯 Deskripsi Project

Buatlah satu file HTML bernama `portfolio.html` yang:
- Menceritakan profil pribadimu (nama, status/sekolah, domisili).
- Menjabarkan minat atau tujuan belajarmu di dunia pemrograman.
- Menyediakan informasi cara menghubungimu dalam bentuk teks paragraf yang rapi.
- Lolos validasi 100% di W3C Validator (0 error).
- Menggunakan **hanya elemen dasar** yang sudah dipelajari di BAB 1.

---

## 📋 Requirements Wajib

### A. Struktur Dokumen Dasar (40 poin)

- [ ] Baris pertama harus berisi deklarasi `<!DOCTYPE html>`.
- [ ] Tag pembuka `<html lang="id">` dengan kode bahasa Indonesia yang benar.
- [ ] Tag `<head>` berisi tag `<meta charset="UTF-8">` sebagai anak pertama.
- [ ] Tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">` terpasang lengkap.
- [ ] Tag `<title>` dengan format: `Nama Kamu — Calon Web Developer`.
- [ ] Tag `<body>` membungkus seluruh konten visual halaman.

### B. Konten & Struktur Teks (40 poin)

- [ ] **Judul Utama**: Satu tag `<h1>` yang berisi nama lengkapmu (hanya boleh ada satu `<h1>` di seluruh halaman).
- [ ] **Sub-informasi**: Satu paragraf `<p>` di bawah nama yang berisi statusmu (misalnya: *Siswa SMK RPL Kelas X, Jakarta*).
- [ ] **Section Konten**: Minimal memiliki 3 bagian yang ditandai dengan heading `<h2>` secara berurutan:
  - `<h2>Tentang Saya</h2>` diikuti minimal 2 paragraf penjelasan tentang dirimu.
  - `<h2>Minat Belajar</h2>` diikuti paragraf penjelasan tentang mengapa kamu ingin belajar web development.
  - `<h2>Kontak</h2>` diikuti paragraf teks cara menghubungimu (misalnya: *Email saya di nama@example.com*).
- [ ] **Footer**: Satu paragraf `<p>` di bagian paling bawah berisi copyright namamu.

### C. Kualitas Kode (20 poin)

- [ ] Gunakan indentasi 2 spasi yang konsisten untuk setiap elemen anak (nested elements).
- [ ] Tulis minimal dua komentar HTML (`<!-- komentar -->`) untuk menandai bagian header, isi, dan footer halaman agar mudah dibaca.
- [ ] Seluruh tag pembuka wajib ditutup dengan tag penutup yang pas.
- [ ] **Lolos 100% (0 Error)** saat file kodemu diuji di situs resmi W3C Validator (`validator.w3.org`).

---

## 📝 Starter Template

Ketik ulang kerangka awal ini di editor VS Code-mu, lalu lengkapi isinya:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>[Nama Lengkap Kamu] — Calon Web Developer</title>
  </head>
  <body>

    <!-- ========== BAGIAN HEADER PROFIL ========== -->
    <h1>[Nama Lengkap Kamu]</h1>
    <p>Siswa SMK RPL Kelas [X/XI] | [Kota Domisili], Indonesia</p>

    <!-- ========== BAGIAN KONTEN UTAMA ========== -->

    <!-- Tentang Saya -->
    <h2>Tentang Saya</h2>
    <p>
      [Tulis paragraf pertama di sini: Kenalkan dirimu, sekolahmu, 
      dan apa yang sedang kamu pelajari sekarang di jurusan RPL.]
    </p>
    <p>
      [Tulis paragraf kedua di sini: Jelaskan hobi, minat, atau aktivitas 
      harianmu yang berkaitan dengan teknologi komputer.]
    </p>

    <!-- Minat Belajar -->
    <h2>Minat Belajar Web</h2>
    <p>
      [Jelaskan mengapa kamu ingin belajar membuat website. Apa impian 
      atau target proyek yang ingin kamu bangun di masa depan nanti?]
    </p>

    <!-- Kontak -->
    <h2>Kontak Saya</h2>
    <p>
      [Tuliskan informasi kontakmu berupa teks paragraf biasa, misalnya 
      alamat email aktifmu dan username akun media sosial/github milikmu.]
    </p>

    <!-- ========== BAGIAN FOOTER ========== -->
    <p>Hak Cipta 2026. Dibuat oleh [Nama Kamu] — HTML Guidebook v0.1.</p>

  </body>
</html>
```

---

## 💡 Tips Penting untuk Proyek Pertama

- **Jangan gunakan tag link (`<a>`) dulu**: Kita baru akan mempelajari cara membuat link yang bisa diklik di BAB 3. Untuk sekarang, tulis alamat email atau tautan GitHub sebagai teks biasa saja di dalam paragraf.
- **Jangan gunakan tag daftar (`<ul>`/`<li>`) dulu**: Daftar keahlian atau kontak belum boleh menggunakan peluru/list. Tulis saja dalam bentuk kalimat paragraf yang mengalir.
- **Gunakan indentasi secara disiplin**: Setiap kali kamu menulis tag di dalam `<body>`, berikan jarak 2 spasi ke dalam. Hal ini akan menyelamatkanmu dari pusing saat memeriksa tag yang lupa ditutup.

---

## 📊 Rubrik Penilaian

| Kategori | Deskripsi | Poin Maksimal |
|---|---|---|
| **Struktur Dokumen** | Deklarasi DOCTYPE, html lang, head, body, meta charset, viewport, dan title lengkap dan benar. | 40 |
| **Kerapian Kode** | Indentasi 2 spasi konsisten, penggunaan komentar penanda, penutupan tag yang presisi. | 20 |
| **Konten Teks** | Heading H1 tunggal, minimal 3 heading H2 berurutan, paragraf deskriptif lengkap. | 20 |
| **Validasi W3C** | 0 Error dan 0 Warning saat diuji di validator resmi. | 20 |
| **Total** | | **100** |

---

## ✅ Checklist Sebelum Mengumpulkan

Buka file `portfolio.html` buatanmu di browser melalui Live Server, lalu centang checklist di bawah ini:

```
☐ Baris paling atas adalah <!DOCTYPE html>
☐ Tag <html> memiliki atribut lang="id"
☐ Judul tab browser menampilkan namamu dengan benar
☐ Teks nama lengkapmu muncul sebagai teks terbesar (H1)
☐ Semua paragraf ditutup menggunakan </p>
☐ Kode diuji di validator.w3.org dan menghasilkan warna hijau (0 error)
```

Proyek portfolio awal ini akan kita simpan. Pada bab berikutnya, kita akan belajar memformat isi teksnya agar memiliki dekorasi tebal, miring, garis pembatas, dan kutipan yang indah!

**[Lanjut: Challenge →](/bab1/challenge/)**
