---
title: "Mini Project"
description: Audit dan perbaikan aksesibilitas mandiri pada portfolio pribadi — dari Skip Navigation hingga alt text, label form, keyboard navigation, dan W3C validation.
---

Saatnya melakukan audit aksesibilitas pada portfolio pribadimu!

Di Studi Kasus, kita melihat bagaimana portfolio Rizki Pratama diaudit dan ditingkatkan aksesibilitasnya menjadi **v1.0 — Accessible Edition**. Sekarang giliran kamu melakukan hal yang sama pada portfolio pribadimu — file `index.html` yang sudah kamu bangun dari BAB 1 hingga BAB 9.

---

## 🎯 Deskripsi Mini Project

**Portfolio v1.0 — Accessible Edition**

Lakukan audit aksesibilitas mandiri pada seluruh file HTML portfoliomu. Kamu tidak perlu mengubah desain visualnya — fokus pada **kemampuan halaman untuk dijangkau dan digunakan oleh semua orang**, terutama pengguna keyboard dan assistive technology.

---

## 📋 Requirements Wajib

### A. Navigasi & Keyboard (30 poin)

- [ ] Memiliki **Skip Navigation Link** sebagai elemen pertama di dalam `<body>`.
- [ ] Skip link tersembunyi secara visual, tapi muncul di pojok atas saat ditekan tombol `Tab` pertama kali.
- [ ] Klik/Enter pada skip link memindahkan fokus langsung ke `<main id="konten-utama" tabindex="-1">`.
- [ ] Seluruh link, button, dan input dalam halaman dapat dijangkau menggunakan tombol `Tab`.
- [ ] Indikator fokus (`outline`) **tidak dihapus** dari CSS (`*:focus { outline: none }` dilarang keras).
- [ ] `:focus-visible` digunakan jika ingin custom styling outline fokus.

### B. Gambar & Media (25 poin)

- [ ] Semua `<img>` informatif memiliki `alt` text yang menjelaskan makna/informasinya (bukan "foto" atau "gambar").
- [ ] Foto profil memiliki `alt` text yang menyebutkan nama dan peranmu.
- [ ] Screenshot proyek memiliki `alt` text yang menjelaskan apa yang tampak pada screenshot.
- [ ] Gambar dekoratif (jika ada) menggunakan `alt=""`.
- [ ] Tidak ada `alt` text yang dimulai dengan "Foto dari..." atau "Gambar...".

### C. Form Accessibility (25 poin)

- [ ] Setiap `<input>`, `<select>`, dan `<textarea>` memiliki `<label>` yang terhubung secara presisi via atribut `for`↔`id`.
- [ ] Tanda wajib diisi (`*`) dibungkus `<abbr title="Wajib diisi" aria-label="wajib diisi">*</abbr>`.
- [ ] Semua input wajib memiliki atribut `required` dan `aria-required="true"`.
- [ ] Textarea memiliki petunjuk yang terhubung via `aria-describedby`.
- [ ] Area status form memiliki `aria-live="polite"` untuk pengumuman dinamis.

### D. Link & ARIA (20 poin)

- [ ] Semua link eksternal (`target="_blank"`) memiliki `rel="noopener noreferrer"`.
- [ ] Semua link eksternal memiliki `aria-label` yang menginformasikan bahwa link "(terbuka di tab baru)".
- [ ] Tidak ada ARIA redundan (seperti `<button role="button">` atau `<nav role="navigation">`).
- [ ] HTML lolos uji W3C Validator tanpa error.

---

## 🧪 Checklist Pengujian Mandiri

Sebelum mengumpulkan, lakukan 5 pengujian mandiri ini:

```
[1. Uji Keyboard]
☐ Lepaskan mouse → buka halaman di browser
☐ Tekan Tab → skip link "Lompati ke konten utama" muncul di pojok atas
☐ Tekan Enter → kursor berpindah ke konten utama
☐ Tekan Tab terus → garis fokus bergerak berurutan di setiap link, button, input
☐ Tekan Enter pada setiap link → navigasi bekerja dengan benar
☐ Isi form kontak hanya dengan keyboard → pesan berhasil dikirim

[2. Uji Gambar]
☐ Buka DevTools → cari semua tag <img>
☐ Pastikan tidak ada <img> tanpa atribut alt
☐ Pastikan tidak ada alt yang berisi nama file (contoh: alt="IMG_123.jpg")

[3. Uji Form]
☐ Klik pada teks label "Nama Lengkap" → kursor berpindah ke kotak inputnya
☐ Klik pada teks label "Email" → kursor berpindah ke kotak inputnya

[4. Uji Link Eksternal]
☐ Periksa semua link GitHub/demo: ada target="_blank", rel="noopener noreferrer", dan aria-label

[5. Uji W3C]
☐ Buka validator.w3.org → upload file index.html → hasilnya hijau tanpa error
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin |
|---|---|---|
| **Navigasi Keyboard** | Skip link ada dan berfungsi, focus outline terjaga, tabindex benar | 30 |
| **Gambar & Alt Text** | Semua img punya alt bermakna, dekoratif alt="", tidak redundan | 25 |
| **Form Accessibility** | for↔id terhubung, abbr, aria-required, aria-describedby, aria-live | 25 |
| **Link & ARIA** | target+rel, aria-label tab baru, tidak ada ARIA redundan, W3C valid | 20 |
| **Total** | | **100** |

---

**[Lanjut: Challenge →](/bab10/challenge/)**
