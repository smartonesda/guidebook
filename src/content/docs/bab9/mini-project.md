---
title: "Mini Project"
description: Implementasi metadata lengkap pada portfolio pribadi — melengkapi head dengan charset, viewport, title, description, favicon, canonical, Open Graph, dan Twitter Card.
---

Saatnya melengkapi `<head>` portfolio pribadimu!

Di Studi Kasus, kita sudah melihat `<head>` portfolio Rizki Pratama yang lengkap. Sekarang kamu akan melakukan hal yang sama untuk portfolio **pribadimu** — dengan informasi yang benar-benar kamu miliki.

---

## 🎯 Deskripsi Mini Project

**Portfolio v0.9 — Metadata & SEO**

Buka `index.html` portfoliomu yang sudah ada, lalu lengkapi `<head>` dengan metadata yang tepat. Jangan copy-paste persis dari studi kasus — sesuaikan dengan nama, deskripsi, URL, dan proyek yang kamu miliki.

---

## 📋 Requirements Wajib

### A. Metadata Fundamental (20 poin)

- [ ] `<meta charset="UTF-8" />` ada sebagai elemen pertama di `<head>`.
- [ ] `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` ada.
- [ ] Tidak ada `user-scalable=no` atau `maximum-scale=1.0`.

### B. Identitas Halaman (25 poin)

- [ ] `<title>` informatif dan spesifik — menyebut nama kamu dan peranmu (bukan "Home" atau "Portfolio").
- [ ] `<title>` panjangnya 50–60 karakter.
- [ ] `<meta name="description">` ada, relevan dengan isi halaman, 120–160 karakter.
- [ ] `<meta name="author">` dengan namamu.
- [ ] `<meta name="robots" content="index, follow">`.

### C. Canonical & Favicon (20 poin)

- [ ] `<link rel="canonical">` dengan URL absolut halaman utama portfoliomu.
- [ ] Minimal ada satu `<link rel="icon">` (boleh `.ico` atau `.svg`).
- [ ] `<link rel="apple-touch-icon">` untuk iOS.

### D. Open Graph (35 poin)

- [ ] `og:type`, `og:title`, `og:description`, `og:image`, `og:url` semua ada.
- [ ] `og:image` menggunakan URL absolut (https://).
- [ ] `og:image:width` dan `og:image:height` ada (1200×630).
- [ ] `og:locale` ada (`id_ID` untuk konten berbahasa Indonesia).
- [ ] `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` ada.
- [ ] Semua nilai Open Graph konsisten dengan nilai `<title>` dan `<meta description>`.

---

## 💡 Tips Implementasi

**Untuk URL:** Jika portfolio belum di-deploy, gunakan URL target yang sudah direncanakan (misalnya `https://namamu.github.io/`). Kamu bisa memperbarui URL setelah deploy.

**Untuk og:image:** Jika belum punya gambar OG, buat placeholder di Canva dengan ukuran 1200×630, nama dan role kamu di atasnya. Simpan sebagai PNG. Untuk saat ini, bisa gunakan placeholder URL — yang penting strukturnya sudah benar.

**Untuk favicon:** Jika belum punya favicon, buat dari inisial namamu menggunakan favicon.io. Gratis dan mudah.

---

## 🚫 Larangan

```
✗ Jangan copy-paste title dan description dari studi kasus
✗ Jangan gunakan user-scalable=no
✗ Jangan gunakan URL relatif untuk og:image dan canonical
✗ Jangan isi description dengan kata kunci berulang (keyword stuffing)
✗ Jangan buat title lebih dari 70 karakter
✗ Jangan gunakan property="..." untuk meta description (pakai name="...")
✗ Jangan gunakan name="..." untuk Open Graph (pakai property="og:...")
```

---

## ✅ Checklist Pengujian

```
☐ Buka DevTools → Elements → <head> → periksa urutan elemen
☐ Cek charset adalah elemen pertama
☐ Salin title ke counter karakter — pastikan 50-60 karakter
☐ Salin description ke counter karakter — pastikan 120-160 karakter
☐ Cek og:image menggunakan URL yang dimulai dengan https://
☐ Buka metatags.io atau opengraph.xyz → masukkan URL → lihat preview
☐ Buka HTML di browser → lihat teks di tab browser (dari title)
☐ HTML lolos W3C Validator
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin |
|---|---|---|
| **Fundamental** | charset pertama, viewport benar | 20 |
| **Identitas** | title informatif, description relevan, author, robots | 25 |
| **Canonical & Favicon** | canonical absolut, favicon ada | 20 |
| **Open Graph** | semua tag wajib, URL absolut, konsisten | 35 |
| **Total** | | **100** |

---

**[Lanjut: Challenge →](/bab9/challenge/)**
