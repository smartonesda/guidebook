---
title: "Introduction"
description: Pengantar BAB 11 — mengubah pola pikir dari sekadar menulis HTML yang berjalan (working code) menjadi menulis HTML berkualitas profesional yang rapi, konsisten, dan mudah dirawat.
---

Selamat datang di **BAB 11 — HTML Best Practices**!

Kamu sudah mempelajari dasar-dasar HTML dari BAB 1 hingga BAB 10:
- Fondasi & Teks (BAB 1–2)
- Navigasi & Media (BAB 3–4)
- Tabel & Form (BAB 5–6)
- Atribut & Semantic HTML (BAB 7–8)
- Metadata & Aksesibilitas (BAB 9–10)

Sekarang saatnya mengubah pola pikir (*mindset*) kita.

---

## 💡 Mindset Shift: Working vs Good vs Maintainable

Banyak pemula merasa puas begitu kode HTML mereka berhasil dibuka di browser dan tampilannya terlihat "jadi". Tapi ada perbedaan besar antara tiga tingkat kualitas kode ini:

```
1. WORKING HTML
   "Kode bisa dirender browser tanpa crash."
   (Tetapi berantakan, tag loncat-loncat, tanpa indentasi)

2. GOOD HTML
   "Kode menggunakan elemen semantic, valid W3C, dan accessible."
   (Struktur jelas dan mudah dibaca)

3. MAINTAINABLE HTML
   "Kode rapi, konsisten, modular, dan siap dikembangkan oleh tim."
   (Pengembang lain bisa langsung paham tanpa perlu penjelasan)
```

Browser dirancang untuk sangat toleran terhadap kesalahan HTML (*error tolerant*). Browser tetap akan mencoba menampilkan halaman meskipun kamu lupa menutup tag atau salah menulis struktur. Tapi **kode yang bekerja belum tentu kode yang baik**.

---

## 🎯 Tujuan Pembelajaran BAB 11

Setelah menyelesaikan bab ini, kamu akan mampu:
- Menulis kode HTML yang rapi dengan standar indentasi dan format yang konsisten.
- Mengatur penataan file dan aset proyek secara profesional.
- Melakukan validasi HTML menggunakan W3C Validator dan Linter.
- Mengenali dan merefactor *HTML Anti-Patterns* (pola buruk yang sering diulang pemula).
- Memahami dasar optimasi performa HTML (preloading, lazy loading, resource hints).
- Melakukan *Code Review* sederhana terhadap kode HTML diri sendiri atau rekan tim.
- Membawa seluruh ilmu dari BAB 1–10 ke dalam standar proyek profesional.

---

## 🗺️ Peta Pelajaran BAB 11

- **11.2 Clean HTML & Indentasi** — Aturan format, indentation (2 spasi), dan keterbacaan kode.
- **11.3 Penamaan & Struktur File** — Konvensi penamaan file, folder, id, dan class (BEM/kebab-case).
- **11.4 Validasi W3C & Linting** — Menggunakan validator resmi dan alat otomatisasi kualitas.
- **11.5 HTML Anti-Patterns** — Membedah 10 pola buruk yang paling sering dilakukan pemula dan solusinya.
- **11.6 Performa Dasar HTML** — Teknik optimasi pemuatan resource, gambar, dan script.
- **11.7 Studi Kasus** — Audit dan refactor menyeluruh dari kode "Working" menjadi "Maintainable".
- **11.8 Mini Project** — Praktik refactor dan pembersihan kode secara mandiri.
- **11.9 Challenge** — Tantangan menemukan bug, merefactor, dan melakukan code review.
- **11.10 Error Corner** — Kesalahan fatal pemeliharaan kode HTML yang wajib dihindari.
- **11.11 Ringkasan** — Rangkuman standar kualitas HTML profesional.

Mari kita mulai dengan prinsip utama menulis **Clean HTML**!

**[Lanjut: Clean HTML & Indentasi →](/bab11/clean-html/)**
