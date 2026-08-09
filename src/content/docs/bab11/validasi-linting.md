---
title: "Validasi W3C & Linting"
description: Menggunakan W3C HTML Validator resmi dan linter otomatis (HTMLHint / Prettier) untuk memastikan standar kualitas dan keamanan sintaks HTML.
---

Seorang developer profesional tidak mengandalkan "tebakan" untuk memastikan kodenya benar. Mereka menggunakan **alat validasi resmi (W3C Validator)** dan **alat otomatisasi (Linter & Formatter)** untuk menjaga standar kualitas kode.

---

## 🌐 Mengapa W3C Validation Penting?

W3C (World Wide Web Consortium) adalah badan pengembang standar resmi HTML. Menguji kode HTML di W3C Validator (`validator.w3.org`) memastikan:

1. **Kompatibilitas Antar Browser**: Mencegah bug aneh yang hanya muncul di browser tertentu (Safari, Firefox, atau Chrome).
2. **Mencegah Error Tersembunyi**: Mendeteksi tag yang belum ditutup, id duplikat, atau atribut yang salah tempat.
3. **Mendukung SEO & Aksesibilitas**: Mesin pencari dan screen reader sangat menyukai struktur HTML yang 100% valid sesuai spesifikasi.

---

## 🛠️ Cara Menggunakan W3C HTML Validator

Ada 3 cara menguji file HTML di W3C Validator (`https://validator.w3.org`):

1. **Validate by URL**: Masukkan alamat URL website yang sudah tayang online.
2. **Validate by File Upload**: Upload file `.html` langsung dari komputermu.
3. **Validate by Direct Input**: Copy-paste seluruh kode HTML ke dalam kolom teks validator.

```
Hasil Uji Validator:
- 🟢 GREEN (Document checking completed. No errors or warnings to show.)
- 🟡 WARNING (Peringatan ringan — misal: kurang atribut lang)
- 🔴 ERROR (Kesalahan fatal — misal: tag <img> tanpa alt, id duplikat)
```

Target setiap developer profesional adalah **0 Error & 0 Warning (Warna Hijau)**.

---

## 🤖 Otomatisasi Kualitas: Formatting & Linting di VS Code

Daripada memperbaiki format spasi dan penulisan secara manual, gunakan ekstensi VS Code otomatis:

### 1. Prettier — Code Formatter
Ekstensi yang merapikan indentasi, spasi, dan tanda kutip secara otomatis setiap kali kamu menekan `Ctrl + S` (Save).

**Cara setup di VS Code:**
1. Install ekstensi **Prettier - Code formatter**.
2. Buka Settings (`Ctrl + ,`) → cari `Format On Save` → centang `[✓] Format On Save`.

### 2. HTMLHint — HTML Linter
Ekstensi yang memberikan garis bawah merah bergerigi secara real-time di VS Code saat kamu menulis HTML yang melanggar standar best practice.

**Aturan yang diperiksa HTMLHint secara otomatis:**
- Tag yang tidak ditutup.
- Atribut yang tidak diberi tanda kutip.
- Karakter khusus yang belum di-encode.
- Tag `<img>` yang tidak punya `alt`.
- `id` yang dipakai berulang kali dalam 1 file.

---

## 📋 Checklist Validasi Sebelum Deploy

Sebelum mempublikasikan proyek ke server nyata, jalankan checklist ini:

```
[ ] Buka validator.w3.org -> Upload semua file .html -> Pastikan hasil HIJAU (0 Error).
[ ] Jalankan Prettier di VS Code -> Semua file ter-indentasi 2 spasi secara rapi.
[ ] Periksa tidak ada garis bergerigi merah dari HTMLHint.
[ ] Uji di 2 browser berbeda (Chrome & Firefox).
```

---

**[Lanjut: HTML Anti-Patterns →](/bab11/html-anti-patterns/)**
