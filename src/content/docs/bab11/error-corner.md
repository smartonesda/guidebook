---
title: "Error Corner"
description: Kesalahan fatal dalam pemeliharaan dan kualitas kode HTML — dari kode berantakan hingga mengabaikan validator dan mengotori tag dengan inline style.
---

Berikut adalah daftar kesalahan umum yang sering merusak kualitas dan maintainability kode HTML:

---

## ❌ 1. Mengabaikan Hasil Validasi W3C
Membiarkan peringatan atau error dari W3C Validator karena menganggap "tampilan di browser baik-baik saja".
- **Dampak**: Pemicu bug tersembunyi di browser tertentu, merusak SEO, dan buruk untuk screen reader.
- **Solusi**: Pastikan selalu mencapai **0 Error** di W3C Validator.

---

## ❌ 2. Menggabungkan Spasi dan Huruf Besar pada Nama File
Menamai file seperti `Foto Profil Saya.JPG` atau `Proyek-Baru/TentangKami.HTML`.
- **Dampak**: Broken link saat di-deploy ke web server Linux (case-sensitive) dan URL terlihat kotor (`%20`).
- **Solusi**: Gunakan selalu format **`kebab-case.html`** (huruf kecil dipisahkan tanda hubung).

---

## ❌ 3. Menghapus Indikator Fokus Tanpa Pengganti
Menghapus garis outline fokus di CSS (`*:focus { outline: none; }`) tanpa memberikan alternatif visual.
- **Dampak**: Merusak aksesibilitas keyboard — pengguna tidak tahu posisi kursor.
- **Solusi**: Gunakan pseudo-class `:focus-visible` untuk merancang garis fokus yang cantik.

---

## ❌ 4. Mencampur Aksi JavaScript pada Tag Link Kosong (`href="#"`)
Menggunakan `<a href="#" onclick="...">` untuk memicu aksi modal atau menu.
- **Dampak**: Halaman akan melompat ke paling atas saat diklik, merusak histori navigasi.
- **Solusi**: Gunakan `<button type="button">` untuk aksi JavaScript yang bukan navigasi URL.

---

## ❌ 5. Menuliskan Seluruh CSS dan JS di dalam Berkas HTML
Menumpuk ratusan baris `<style>` dan `<script>` di dalam file `index.html`.
- **Dampak**: File HTML menjadi sangat berat, lambat dibaca, dan tidak bisa di-reuse di halaman lain.
- **Solusi**: Pisahkan ke dalam berkas eksternal `.css` dan `.js`.

---

**[Lanjut: Ringkasan →](/bab11/ringkasan/)**
