---
title: "Challenge"
description: Tantangan mandiri untuk membuktikan pemahaman mendalam tentang Forms HTML5 — dari debugging hingga analisis keamanan validasi.
---

Selamat sudah sampai di bagian Challenge BAB 6!

Challenge ini bukan sekadar "tulis ulang contoh dari studi kasus." Tantangan di sini dirancang untuk **menguji apakah kamu benar-benar memahami konsep**, bukan sekadar bisa menghafal syntax.

Ada 5 tantangan berjenjang dari mudah ke kompleks.

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan semua tantangan ini, kamu akan mampu:
- Mendiagnosis dan memperbaiki form HTML yang rusak.
- Merancang form yang aksesibel dan semantik dari nol.
- Memilih tipe input dan metode pengiriman yang tepat berdasarkan konteks.
- Menjelaskan batasan keamanan client-side validation secara konkret.

---

## 🔴 Challenge 1: Debugging Form yang Rusak (20 poin)

Di bawah ini adalah kode form dari seorang pemula. Ada **7 kesalahan** di dalamnya — temukan semuanya dan tulis versi yang benar!

```html
<!-- Form dengan 7 kesalahan — temukan semuanya! -->
<form action="/daftar" method="get">

  <p>Nama: <input type="text" id="nama" placeholder="Nama lengkap" /></p>
  
  <label for="email-field">Email:</label>
  <input type="teks" id="email-field" name="email" />

  <p>Kata Sandi:</p>
  <input type="text" name="password" required />
  
  <p>Pilih Jurusan:</p>
  <input type="radio" name="jurusan-rpl" value="rpl" /> RPL
  <input type="radio" name="jurusan-tkj" value="tkj" /> TKJ
  
  <input type="checkbox" id="cb-setuju" value="setuju" required />
  <label for="cb-setuju">Saya setuju dengan syarat dan ketentuan</label>

  <button>Daftar Sekarang</button>

</form>
```

**Petunjuk:** Kesalahan berkaitan dengan `method`, `name`, `type`, `label`, dan `button`.

**Tulis:** Daftar 7 kesalahan yang kamu temukan beserta alasannya, lalu tulis versi kode yang sudah diperbaiki.

---

## 🟡 Challenge 2: Membuat Form Aksesibel (20 poin)

Buat sebuah form **Ubah Kata Sandi** yang aksesibel untuk halaman pengaturan akun. Form ini harus memiliki:

- Input kata sandi lama (`type="password"`, wajib).
- Input kata sandi baru (`type="password"`, wajib, `minlength="8"`).
- Input konfirmasi kata sandi baru (`type="password"`, wajib).
- Checkbox "Tampilkan kata sandi" (tidak wajib, hanya sebagai UI — tidak perlu JavaScript fungsional).
- Tombol simpan dan tombol batal.

**Syarat aksesibilitas:**
- Semua input punya label yang terhubung via `for`↔`id`.
- Gunakan `<fieldset>` dan `<legend>` untuk membungkus form.
- Tombol batal menggunakan `type="button"` (bukan submit).
- `autocomplete` yang tepat untuk setiap input password.

---

## 🟠 Challenge 3: Form Pendaftaran Siswa Baru (20 poin)

Buat form **Pendaftaran Siswa Baru SMK** yang lengkap dengan data berikut:

**Bagian 1 — Data Diri (dalam satu fieldset):**
- Nama lengkap (text, wajib)
- Nomor NISN (text, pattern 10 digit angka, wajib)
- Tanggal lahir (date, wajib)
- Jenis kelamin (2 radio button: Laki-laki / Perempuan, wajib)
- Nomor HP orang tua (tel, opsional)

**Bagian 2 — Pilihan Sekolah (dalam fieldset terpisah):**
- Jurusan pilihan pertama (select dengan optgroup: Teknologi Informasi, Bisnis & Manajemen, min 3 jurusan per group)
- Jurusan pilihan kedua (select yang sama)
- Pilihan kelas (radio: Pagi / Siang, wajib)

**Bagian 3 — Berkas (dalam fieldset terpisah):**
- Upload foto (file, accept: image/*)
- Upload KK (file, accept: PDF, image)
- Checkbox persetujuan kebenaran data (required)

**Tombol:** Submit dan Reset.

---

## 🔵 Challenge 4: Form Inquiry Jasa Freelance (20 poin)

Buat form **Project Inquiry** untuk website jasa freelance dengan spesifikasi berikut:

**Identitas Klien:**
- Nama (text, wajib)
- Email (email, wajib)
- Nama perusahaan (text, opsional)
- Kota (text + datalist dengan 10 kota besar Indonesia)

**Detail Proyek:**
- Jenis layanan (select dengan optgroup: Web Development, Desain, Marketing)
- Skala proyek (radio: Personal / Startup / Enterprise)
- Estimasi budget (select: < 1 juta / 1-5 juta / 5-15 juta / > 15 juta)
- Deadline yang diinginkan (date, min: hari ini)
- Fitur yang diinginkan (minimal 4 checkbox: Responsif, CMS, SEO, E-commerce, dsb.)
- Deskripsi proyek (textarea, wajib, minlength 30)
- Upload brief/referensi (file, opsional, PDF/gambar)

**Syarat tambahan:**
- Form menggunakan `enctype="multipart/form-data"` (karena ada file upload).
- Semua field wajib punya `required`.
- Checkbox fitur menggunakan `name="fitur[]"`.
- Semua radio dalam `<fieldset>` + `<legend>`.

---

## ⚫ Challenge 5: Analisis Keamanan (20 poin)

Jawab pertanyaan-pertanyaan berikut dalam bentuk tulisan analitis:

**Pertanyaan 1:**
Seseorang membuat form login dengan `required` pada semua input dan `minlength="8"` pada input password. Ia mengklaim website-nya sudah aman karena pengguna tidak bisa mengirimkan kata sandi kosong atau pendek.

Apakah klaim ini benar? Tunjukkan langkah-langkah konkret bagaimana seseorang bisa melewati validasi ini menggunakan Chrome DevTools. Apa yang seharusnya developer lakukan?

**Pertanyaan 2:**
Mengapa kita tidak boleh menggunakan `method="GET"` untuk form yang berisi kata sandi? Sebutkan minimal 3 risiko konkret yang bisa terjadi jika kata sandi masuk ke URL.

**Pertanyaan 3:**
Jelaskan perbedaan antara atribut `disabled` dan `readonly` pada elemen input. Dalam situasi apa kamu akan memilih `readonly` daripada `disabled`? Berikan contoh kasus nyata.

**Pertanyaan 4:**
Kamu memiliki form yang memiliki 20+ input. Bagaimana `<fieldset>` dan `<legend>` membantu pengalaman pengguna (UX) dan aksesibilitas (a11y)? Mengapa tidak cukup hanya menggunakan `<div>` dengan class tertentu?

---

## 📊 Rubrik Penilaian

| Challenge | Poin | Kriteria |
|---|---|---|
| 1: Debugging | 20 | Menemukan semua 7 kesalahan + penjelasan + kode yang benar |
| 2: Form Ubah Password | 20 | Aksesibel, semantic, label terhubung, button type benar |
| 3: Pendaftaran Siswa | 20 | Semua elemen hadir, optgroup, radio dalam fieldset, file upload |
| 4: Inquiry Freelance | 20 | enctype, datalist, checkbox array, select group, date min |
| 5: Analisis Keamanan | 20 | Jawaban analitis mendalam, tidak hanya definisi |
| **Total** | **100** | |

---

**[Lanjut: Error Corner →](/bab6/error-corner/)**
