---
title: "Error Corner"
description: Kesalahan fatal dalam proses debugging HTML — dari mengubah kode tanpa diagnosis hingga mengabaikan pesan error validator.
---

Berikut adalah daftar kesalahan cara berpikir (*debugging anti-pattern*) yang sering dilakukan pemula saat mencoba mempercantik atau memperbaiki kode HTML:

---

## ❌ 1. Direct-Fix Trap (Mengubah Kode Tanpa Diagnosis)
Langsung mengganti seluruh baris kode atau meng-copy kode baru dari internet begitu menemukan bug tampilan tanpa mencari tahu penyebab pastinya.
- **Dampak**: Bug lama mungkin hilang secara kebetulan, tetapi memicu 3 bug baru di bagian lain yang tidak kamu sadari.
- **Solusi**: Ikuti alur **Observe → Reproduce → Identify → Fix**.

---

## ❌ 2. Menganggap Semua Masalah Adalah "Typo Sintaks"
Mengira setiap bug disebabkan oleh salah ketik tag, padahal masalahnya terletak pada **desain semantik atau aksesibilitas** (misal: tombol dari `<div>` yang tidak bisa difokus keyboard).
- **Dampak**: Kamu menghabiskan waktu berjam-jam memeriksa tag penutup padahal kodenya sudah valid secara sintaks, hanya saja salah guna elemen.
- **Solusi**: Bedah masalah menjadi 3 kategori: *Error Sintaks*, *Bug Perilaku*, atau *Bad Practice*.

---

## ❌ 3. "Trial and Error" Atribut Tanpa Membaca Dokumentasi
Mencoba menempelkan atribut acak seperti `required="false"`, `disabled="no"`, atau `type="text"` hanya untuk coba-coba.
- **Dampak**: Menghasilkan *cargo cult HTML* — kode yang penuh dengan atribut yang tidak bekerja dan membingungkan developer lain.
- **Solusi**: Buka referensi resmi spesifikasi HTML (seperti MDN Web Docs atau HTML Handbook BAB 15).

---

## ❌ 4. Lupa Melakukan Re-Test Setelah Memperbaiki Kode
Merasa masalah sudah selesai setelah melakukan satu edit di editor tanpa mengujinya kembali di browser dan W3C Validator.
- **Dampak**: Kode yang diserahkan ke penguji atau rilis produksi ternyata masih membawa error fatal.
- **Solusi**: Selalu jalankan pengujian ulang di peramban web dan validator setelah setiap perubahan kode.

---

**[Lanjut: Ringkasan →](/bab14/ringkasan/)**
