---
title: "Mini Project"
description: Mengaudit dan memperkaya portfolio pribadi dengan attribute yang tepat, konsisten, dan aksesibel — dari global attributes hingga data-* dan ARIA dasar.
---

Saatnya mengaudit dan memperkaya portfolio pribadimu!

Di Studi Kasus, kita sudah melihat bagaimana portfolio fiktif Rizki Pratama diaudit dan diperkaya dengan attribute yang tepat. Sekarang giliran kamu melakukan hal yang sama pada portfolio pribadimu — file `index.html` dan `projects.html` yang sudah kamu bangun dari BAB 1 hingga BAB 6.

---

## 🎯 Deskripsi Mini Project

**Portfolio v0.7 — Attribute Audit & Enhancement**

Lakukan audit menyeluruh pada semua file portfolio milikmu, lalu tambahkan, perbaiki, atau lengkapi attribute yang ada. Tujuannya bukan mengubah tampilan — melainkan membuat HTML-mu lebih bermakna, lebih aksesibel, dan lebih maintainable.

---

## 📋 Requirements Wajib

### A. Global Attributes (25 poin)

- [ ] Setiap `<section>` utama memiliki `id` yang deskriptif dan unik.
- [ ] Setiap `<section>` memiliki `aria-labelledby` yang menunjuk ke heading di dalamnya.
- [ ] Tag `<html>` memiliki `lang="id"`.
- [ ] Semua elemen dengan fungsi berbeda memiliki `class` yang konsisten dan deskriptif.
- [ ] Tidak ada duplikasi `id` di seluruh halaman.
- [ ] Tabel data memiliki `scope="col"` atau `scope="row"` pada setiap `<th>`.

### B. Attribute Gambar & Media (20 poin)

- [ ] Semua `<img>` memiliki `alt` yang deskriptif (bukan generik seperti `alt="gambar"`).
- [ ] Gambar di atas lipatan halaman (*above the fold*) menggunakan `loading="eager"`.
- [ ] Gambar di bawah lipatan menggunakan `loading="lazy"`.
- [ ] `<video>` (jika ada) memiliki `controls` dan `title` yang deskriptif.

### C. Link & Navigasi (20 poin)

- [ ] `<nav>` memiliki `aria-label` yang deskriptif.
- [ ] Link yang aktif memiliki `aria-current="page"`.
- [ ] Semua link eksternal memiliki `target="_blank"` DAN `rel="noopener noreferrer"`.
- [ ] Link eksternal memiliki `aria-label` yang menginformasikan bahwa link terbuka di tab baru.

### D. Form Attributes (20 poin)

- [ ] `<form>` memiliki `aria-labelledby` yang menunjuk ke heading form.
- [ ] Semua tombol dalam form memiliki `type` yang eksplisit.
- [ ] `autocomplete` yang tepat ditambahkan pada input email dan nama.
- [ ] Tanda wajib (`*`) menggunakan `<abbr title="Wajib diisi">` yang aksesibel.

### E. data-* dan ARIA Dasar (15 poin)

- [ ] Minimal **3 element** menggunakan `data-*` attribute yang bermakna (contoh: `data-level`, `data-status`, `data-id`).
- [ ] Icon-only button atau link memiliki `aria-label` yang deskriptif.
- [ ] Ikon dekoratif (emoji atau simbol) menggunakan `aria-hidden="true"`.

---

## 💡 Contoh Audit yang Bisa Dilakukan

**Navigasi:**
```html
<!-- Sebelum -->
<p><a href="/">Beranda</a> | <a href="/proyek">Proyek</a></p>

<!-- Sesudah -->
<nav aria-label="Navigasi utama">
  <a href="/" class="nav-link nav-link--active" aria-current="page">Beranda</a>
  <a href="/proyek" class="nav-link">Proyek</a>
</nav>
```

**Daftar keahlian:**
```html
<!-- Sebelum -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>

<!-- Sesudah -->
<ul id="skills-list" class="skills-grid" aria-label="Keahlian teknis">
  <li class="skill-badge" data-level="mahir" data-tahun-mulai="2024">HTML</li>
  <li class="skill-badge" data-level="menengah" data-tahun-mulai="2025">CSS</li>
</ul>
```

**Link eksternal:**
```html
<!-- Sebelum -->
<a href="https://github.com/userku">GitHub</a>

<!-- Sesudah -->
<a 
  href="https://github.com/userku" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Profil GitHub saya (terbuka di tab baru)"
  class="social-link"
>
  GitHub
</a>
```

---

## 🚫 Larangan

```
✗ Jangan ubah konten atau tampilan halaman — hanya tambah/perbaiki attribute
✗ Jangan duplikasi id
✗ Jangan gunakan required="false" atau disabled="false"
✗ Jangan gunakan data-* untuk menggantikan attribute standar (seperti data-href)
✗ Jangan tambahkan style inline berlebihan
✗ Jangan gunakan tabindex positif tanpa alasan yang sangat jelas
```

---

## ✅ Checklist Pengujian Mandiri

```
☐ Buka DevTools → Elements → periksa setiap section punya id dan aria-labelledby
☐ Hover pada link dengan title → tooltip muncul
☐ Klik link navigasi internal (#id) → halaman scroll ke bagian yang benar
☐ Inspeksi tabel → setiap th punya scope
☐ Inspeksi form → ada aria-labelledby, semua button punya type
☐ Cari di seluruh file: tidak ada id yang muncul lebih dari sekali
☐ Cari required="false" atau disabled="false" — tidak boleh ada
☐ HTML lolos W3C Validator tanpa error
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin |
|---|---|---|
| **Global Attributes** | id unik, aria-labelledby, lang, class konsisten | 25 |
| **Gambar & Media** | alt deskriptif, loading tepat | 20 |
| **Link & Navigasi** | nav label, aria-current, rel external links | 20 |
| **Form** | aria-labelledby, type button, autocomplete, abbr | 20 |
| **data-* & ARIA** | Minimal 3 data-*, aria-label pada icon | 15 |
| **Total** | | **100** |

---

**[Lanjut: Challenge →](/bab7/challenge/)**
