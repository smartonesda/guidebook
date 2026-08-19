---
title: "Mini Project"
description: Refactor portfolio pribadi menjadi semantic HTML yang lengkap — dari div-first menjadi struktur yang bermakna dengan header, nav, main, section, article, aside, dan footer.
---

Saatnya melakukan refactor pada portfolio pribadimu!

Di Studi Kasus, kita sudah melihat bagaimana portfolio fiktif Rizki diubah menjadi semantic. Sekarang giliran kamu melakukan hal yang sama pada portfolio pribadimu — file `index.html` yang sudah dibangun dari BAB 1 hingga BAB 7.

---

## 🎯 Deskripsi Mini Project

**Portfolio v0.8 — Semantic HTML Refactor**

Kamu tidak perlu membuat file baru. Buka `index.html` dan `projects.html` yang sudah ada, lalu lakukan refactor untuk memastikan seluruh struktur menggunakan semantic HTML yang tepat.

Tujuannya bukan mengubah tampilan — melainkan **membuat struktur yang bermakna** bagi browser, screen reader, dan search engine.

---

## 📋 Requirements Wajib

### A. Struktur Halaman Utama (40 poin)

- [ ] Ada satu `<header>` sebagai site header yang berisi brand/logo dan `<nav>` utama.
- [ ] `<nav>` utama memiliki `aria-label="Navigasi utama"` dan `aria-current="page"` pada link aktif.
- [ ] Ada satu `<main>` yang membungkus seluruh konten utama.
- [ ] Setiap bagian konten utama (Tentang, Keahlian, Proyek, Kontak) berada dalam `<section>` tersendiri dengan `id` dan `aria-labelledby`.
- [ ] Ada satu `<footer>` site yang berisi `<nav>` footer, `<address>`, dan info copyright dengan `<time>`.
- [ ] `<hr>` tidak digunakan sebagai visual separator — separator lewat CSS.

### B. Konten Semantik (35 poin)

- [ ] Foto profil ada di dalam `<figure>` + `<figcaption>` yang deskriptif.
- [ ] Setiap proyek yang ditampilkan di homepage menggunakan `<article>` dengan `<header>`, deskripsi, dan `<footer>` (link demo/github).
- [ ] Tanggal proyek menggunakan `<time datetime="YYYY-MM">`.
- [ ] Nama badge teknologi menggunakan `<span>` dengan class yang tepat (bukan div).
- [ ] Informasi kontak di footer menggunakan `<address>`.
- [ ] Singkatan seperti RPL menggunakan `<abbr title="...">`.

### C. Aksesibilitas Semantic (25 poin)

- [ ] Semua `<section>` memiliki heading yang dapat direferensikan via `aria-labelledby`.
- [ ] Link eksternal (GitHub, demo) memiliki `target="_blank"`, `rel="noopener noreferrer"`, dan `aria-label` yang menjelaskan tujuan + "(tab baru)".
- [ ] Form kontak ada di dalam `<section>` yang tepat, bukan melayang bebas di `<main>`.
- [ ] HTML lolos W3C Validator tanpa error.

---

## 💡 Panduan Refactor Langkah demi Langkah

**Langkah 1:** Periksa struktur top-level
```
✓ body → header + main + footer
✗ body → div + div + div
```

**Langkah 2:** Periksa navigasi
```
✓ <nav aria-label="...">
✗ <p> dengan pemisah |
✗ <ul> tanpa pembungkus nav
```

**Langkah 3:** Periksa konten di dalam main
```
✓ section#tentang > h2 + konten
✓ section#keahlian > h2 + konten
✓ section#proyek > h2 + div.project-grid > article × n
✓ section#kontak > h2 + form
✗ h2 langsung di dalam main tanpa section
```

**Langkah 4:** Periksa setiap proyek
```
✓ article.project-card > header + p + footer
✗ div.project-card > h3 + p + a
```

**Langkah 5:** Periksa footer
```
✓ footer > nav + address + p (copyright)
✗ footer > p (semua dalam satu paragraf)
```

---

## 🚫 Larangan

```
✗ Jangan ubah konten teks yang ditampilkan ke pengguna
✗ Jangan tambahkan section hanya karena ingin "lebih semantic" — hanya jika ada kelompok tematik yang jelas
✗ Jangan gunakan article untuk komponen UI yang bukan konten mandiri (tombol, badge, dll.)
✗ Jangan masukkan <nav> di dalam <address>
✗ Jangan punya lebih dari satu <main> yang terlihat
✗ Jangan gunakan <section> tanpa heading
```

---

## ✅ Checklist Pengujian

Setelah refactor, lakukan pengujian berikut:

```
☐ Buka di browser → tampilan tidak berubah secara signifikan dari versi sebelumnya
☐ Buka DevTools Elements → periksa hirarki: body > header + main + footer
☐ Buka DevTools Elements → di dalam main, ada section-section bertema
☐ Klik anchor link (#tentang, #kontak) → halaman scroll ke section yang benar
☐ Periksa setiap section memiliki aria-labelledby yang valid
☐ Periksa tidak ada id yang duplikat (DevTools → console: cari id yang sama)
☐ Buka validator.w3.org → upload/paste file → pastikan hijau
☐ Gunakan screen reader (NVDA atau TalkBack) → navigasi ke setiap landmark → terdengar "navigation", "main", "contentinfo"
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin |
|---|---|---|
| **Struktur Top-Level** | header, main, footer dengan nav yang benar | 40 |
| **Konten Semantik** | article, figure, time, address, abbr | 35 |
| **Aksesibilitas** | aria-labelledby, aria-label, rel, W3C valid | 25 |
| **Total** | | **100** |

---

## 🤔 Pertanyaan Refleksi

Setelah menyelesaikan refactor, renungkan:

1. Sebelum belajar Semantic HTML, kamu memilih tag berdasarkan apa? Tampilan? Kebiasaan?
2. Setelah refactor, apakah ada bagian yang lebih mudah kamu pahami hanya dengan melihat structure-nya?
3. Jika dua element terlihat sama di browser, apakah mereka selalu memiliki makna yang sama?

---

**[Lanjut: Challenge →](/bab8/challenge/)**
