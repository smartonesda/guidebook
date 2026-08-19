---
title: "Ringkasan"
description: Rangkuman lengkap materi BAB 10 — Web Accessibility, prinsip POUR, checklist penulisan HTML aksesibel, dan transisi menuju HTML Best Practices.
---

Selamat! Kamu telah menyelesaikan **BAB 10 — Accessibility** 🎉

Di bab ini, kamu telah belajar bahwa membangun website bukan sekadar tentang membuat tampilan yang indah atau kode yang valid, melainkan memastikan bahwa **siapa pun dapat mengakses, memahami, dan menggunakan karya yang kamu buat**.

---

## 🧠 Konsep Utama BAB 10

### 1. Web Accessibility (A11y)
Aksesibilitas web berarti memastikan website dapat digunakan oleh orang dengan berbagai kemampuan fisik, kognitif, perangkat, dan kondisi lingkungan (permanen, sementara, maupun situasional).

### 2. Prinsip Native HTML First
> **Jangan gunakan ARIA atau custom JavaScript jika elemen HTML native sudah menyediakan fungsi dan semantik yang kamu butuhkan.**

Gunakan `<button>` untuk tombol, `<a>` untuk link, `<label>` untuk input, `<select>` untuk dropdown, dan elemen semantic (`<nav>`, `<main>`, `<article>`) untuk struktur halaman.

### 3. Empat Prinsip POUR (WCAG)
- **Perceivable (Dapat Dirasakan):** Sediakan teks alternatif (`alt`) untuk gambar, transkrip untuk audio/video, dan kontras warna yang cukup.
- **Operable (Dapat Dioperasikan):** Pastikan semua fitur dapat dijangkau dan dioperasikan menggunakan **keyboard** (`Tab`, `Enter`, `Space`).
- **Understandable (Dapat Dipahami):** Gunakan bahasa dokumen (`lang="id"`), label form yang terhubung (`for`↔`id`), dan navigasi yang konsisten.
- **Robust (Tahan Lama):** Tulis HTML yang valid, tidak ada `id` duplikat, dan ikuti spesifikasi standar.

---

## 📋 Checklist HTML Aksesibel

Gunakan checklist ini setiap kali kamu menulis kode HTML:

```
[ ] Struktur & Semantik
    [ ] Terdapat tepat satu elemen <main> per halaman.
    [ ] Struktur heading (h1, h2, h3) berurutan secara logis.
    [ ] Navigasi dibungkus <nav aria-label="...">.
    [ ] Tag <html> memiliki atribut lang="id".

[ ] Gambar & Media
    [ ] Semua <img> memiliki atribut alt.
    [ ] Gambar informatif memiliki alt yang menjelaskan MAKNA/pesan gambar.
    [ ] Gambar hiasan/dekoratif menggunakan alt="".
    [ ] Alt text tidak dimulai dengan kata "Foto dari..." atau "Gambar...".

[ ] Navigasi Keyboard & Fokus
    [ ] Terdapat "Skip to content" link di awal <body>.
    [ ] Indikator fokus (:focus / :focus-visible) TIDAK dihapus dengan CSS.
    [ ] Semua tombol dan link dapat dijangkau dengan tombol Tab.
    [ ] Tidak ada atribut tabindex positif (1, 2, 3...).

[ ] Formulir
    [ ] Setiap <input> memiliki <label> yang terhubung via atribut for dan id.
    [ ] Tanda bidang wajib (*) diberi penjelasan (abbr title="Wajib diisi").
    [ ] Atribut required dan aria-required="true" dipasang pada input wajib.
    [ ] Link eksternal (target="_blank") menginformasikan bahwa ia membuka tab baru via aria-label.
```

---

## ➡ Handoff ke BAB 11 — HTML Best Practices

Sekarang kamu telah belajar cara membuat HTML yang:
- Terstruktur dengan baik (BAB 1–5)
- Memiliki formulir interaktif (BAB 6)
- Kaya atribut (BAB 7)
- Memiliki struktur semantik (BAB 8)
- Memiliki metadata & SEO (BAB 9)
- Dapat diakses oleh semua orang (BAB 10)

Pertanyaan berikutnya: **Bagaimana cara memastikan kode HTML yang kita tulis tetap bersih, konsisten, mudah dipelihara, dan profesional ketika proyek semakin besar?**

Di **BAB 11 — HTML Best Practices**, kita akan mempelajari:
- Aturan penulisan kode HTML yang bersih (Clean HTML)
- Standar indentasi dan penamaan class/id
- Cara mengelola struktur file dan aset proyek
- Menggunakan HTML Validator & Linter
- Mengidentifikasi dan menghindari *HTML Anti-Patterns*
- Checklist profesional sebelum melakukan deploy website

**[Lanjut ke BAB 11 — HTML Best Practices →](/bab11/introduction/)**
