---
title: "Introduction"
description: Pengantar BAB 9 — memahami metadata HTML, bagaimana browser dan search engine mendapatkan informasi tentang sebuah halaman, dan mengapa elemen head jauh lebih penting dari yang terlihat.
---

Kita sudah melewati perjalanan yang luar biasa di BAB 8 — portfolio kita kini punya struktur yang bermakna menggunakan Semantic HTML yang tepat. Browser, screen reader, dan developer lain bisa memahami halaman kita hanya dari membaca strukturnya.

Tapi ada sesuatu yang belum kita bahas: **bagaimana browser tahu bahwa halaman ini berbahasa Indonesia? Bagaimana Google tahu apa yang ada di halaman kita sebelum pengguna membacanya? Bagaimana WhatsApp bisa menampilkan judul dan gambar preview saat kita berbagi link?**

Jawabannya ada di tempat yang sering diabaikan pemula: `<head>`.

---

## 🤔 Dua Pertanyaan Pemantik

**Pertanyaan 1:** Ketika seseorang mengetik namamu di Google dan website portfolio-mu muncul di hasil pencarian — dari mana Google tahu halaman itu tentang kamu? Tentang web development? Tentang portfolio?

Google tidak membaca halaman seperti pengguna membacanya. Google punya "bot" yang merayapi internet dan membaca kode HTML — terutama bagian yang kita tulis di `<head>`.

**Pertanyaan 2:** Kalau isi website belum terlihat oleh pengguna — karena halaman belum selesai dimuat — apakah browser tetap membutuhkan informasi tentang halaman?

Ya. Browser perlu tahu: "Encoding karakter apa yang digunakan halaman ini?" sebelum bisa menampilkan teks dengan benar. "Bagaimana ukuran layar harus diatur?" sebelum bisa merender layout. Ini semua dikonfigurasikan di `<head>` — bahkan sebelum satu piksel pun ditampilkan ke pengguna.

---

## 🎯 Tujuan Pembelajaran BAB 9

Setelah menyelesaikan bab ini, kamu akan mampu:
- Menjelaskan apa itu metadata dan mengapa ia berbeda dari content halaman.
- Memahami fungsi `<head>` vs `<body>` dalam dokumen HTML.
- Menggunakan `<title>`, `<meta charset>`, `<meta viewport>`, `<meta description>` dengan benar.
- Memahami `<link>` element dan kapan menggunakannya (favicon, stylesheet, canonical).
- Memahami Open Graph Protocol untuk tampilan link di media sosial.
- Menghindari praktik metadata yang menyesatkan atau berlebihan.
- Melengkapi `<head>` portfolio dengan metadata yang tepat, relevan, dan akurat.

---

## 🗺️ Peta Pelajaran BAB 9

- **9.2 Apa itu Metadata?** — Memahami metadata sebagai "informasi tentang informasi".
- **9.3 Elemen title & charset** — `<title>` dan `<meta charset>` secara mendalam.
- **9.4 Viewport & Responsive** — Mengapa viewport penting untuk tampilan mobile.
- **9.5 Meta Description & Robots** — Snippets di hasil pencarian dan kontrol crawler.
- **9.6 Elemen link & Favicon** — `<link>` untuk favicon, stylesheet, dan canonical URL.
- **9.7 Open Graph & Social** — Preview link yang cantik di WhatsApp, Facebook, Twitter.
- **9.8 Studi Kasus** — Melengkapi `<head>` portfolio dengan metadata lengkap.
- **9.9 Mini Project** — Implementasi metadata mandiri pada portfolio pribadimu.
- **9.10 Challenge** — Tantangan menganalisis, menulis, dan memperbaiki metadata.
- **9.11 Error Corner** — Kesalahan umum dalam penulisan dan pemahaman metadata.
- **9.12 Ringkasan** — Rekap seluruh konsep dan panduan `<head>` yang baik.

**[Lanjut: Apa itu Metadata? →](/bab9/apa-itu-metadata/)**
