---
title: "Ringkasan"
description: Rekap semua konsep penting yang dipelajari di BAB 6 — Forms.
---

Selamat! Kamu telah menyelesaikan seluruh rangkaian materi tentang formulir interaktif di **BAB 6 — Forms**.

---

## 📝 Rekap Konsep Utama

Berikut adalah ringkasan konsep dasarnya yang wajib kamu pahami:

- **Mekanisme Form**: HTML Form digunakan untuk mengumpulkan input data dari pengguna di browser (client-side) untuk dikirimkan ke server backend.
- **GET vs POST**:
  - **GET**: Data dikirim secara terbuka melalui kolom alamat URL (sangat cocok untuk fitur pencarian, tidak aman untuk kata sandi).
  - **POST**: Data dikirim secara tersembunyi melalui request body browser (wajib untuk kata sandi dan form inquiry sensitif).
- **Aksesibilitas Label**: Atribut `for` pada tag `<label>` harus memiliki nilai yang sama persis dengan atribut `id` pada tag `<input>` agar terhubung secara aksesibel.
- **name vs id**: Atribut `name` bertindak sebagai kunci data yang dikirim ke server, sedangkan `id` bertindak sebagai identitas lokal unik di dalam halaman web.
- **Grup Radio Button**: Semua pilihan bulat (radio) dalam satu pertanyaan wajib memiliki nama atribut `name` yang sama agar pengguna hanya bisa memilih satu opsi.
- **Validasi HTML5**: Penggunaan atribut `required`, `minlength`, dan `pattern` membantu membatasi input pengguna langsung di browser demi meningkatkan kenyamanan pengguna (UX). Namun, keamanan data yang sesungguhnya tetap harus divalidasi di sisi server (backend).

---

## 📊 Tabel Kamus Elemen Formulir BAB 6

| Tag HTML | Atribut Umum | Fungsi Utama | Sifat Element |
|---|---|---|---|
| **`<form>`** | `action`, `method` | Wadah utama pembungkus seluruh isian formulir. | Block |
| **`<fieldset>`** | (none) | Mengelompokkan isian formulir yang sejenis. | Block |
| **`<legend>`** | (none) | Memberikan judul label pada kelompok fieldset. | Block |
| **`<label>`** | `for` | Memberikan teks keterangan pada input terkait. | Inline |
| **`<input>`** | `type`, `name`, `id`, `value` | Elemen isian tunggal serbaguna (teks, email, dll). | Void / Inline |
| **`<select>`** | `name`, `id`, `required` | Membuat menu pilihan jatuh-turun (*dropdown*). | Inline |
| **`<option>`** | `value` | Menampung item pilihan di dalam tag select. | Block |
| **`<textarea>`** | `name`, `rows`, `cols` | Membuat kotak isian teks paragraf multi-baris. | Inline |
| **`<button>`** | `type` (`submit`/`button`) | Membuat tombol pemicu aksi kirim formulir. | Inline |

---

## ➡ Handoff ke BAB 7 — HTML Attributes

Di BAB 6 ini, kamu telah berhasil **menyusun Contact & Project Inquiry Form yang valid dan interaktif di bagian bawah halaman portfolio pribadimu** pada Mini Project.

Sepanjang perjalanan belajar dari BAB 1 hingga BAB 6, kita telah banyak menggunakan berbagai macam atribut pembantu seperti `charset`, `viewport`, `href`, `target`, `rel`, `src`, `alt`, `width`, `height`, `colspan`, `rowspan`, `action`, `method`, `for`, `id`, `name`, dan `required`.

Di **BAB 7 — HTML Attributes**, kita akan mengupas tuntas rahasia **Atribut HTML** secara universal. Kita akan mempelajari pengelompokan atribut global (*global attributes* seperti `class`, `id`, `style`, `title`, `dir`, `tabindex`), atribut data kustom (`data-*` untuk bertukar informasi dengan JavaScript), dan bagaimana atribut-atribut ini memberikan kekuatan penuh pada tag HTML biasa!

Mari melangkah ke bab berikutnya!

**[Lanjut ke BAB 7 — HTML Attributes →](/bab7/introduction/)**
