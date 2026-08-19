---
title: "Mini Project"
description: Tantangan mandiri membuat versi Contact & Project Inquiry Form yang lebih lengkap untuk portfolio pribadi — dengan fieldset, validasi, pilihan inquiry, dan consent.
---

Saatnya kamu membangun sendiri!

Di Studi Kasus, kita sudah bersama-sama membangun form untuk portfolio fiktif milik Rizki Pratama. Sekarang, giliran kamu membangun form versi kamu sendiri untuk **portfolio pribadimu** — dengan pengembangan yang lebih kaya.

---

## 🎯 Deskripsi Mini Project

**Portfolio v0.6 — Contact & Inquiry Form**

Buka file `index.html` portfoliomu (yang sudah dikembangkan sejak BAB 1), lalu ubah atau tambahkan bagian Kontak menjadi formulir interaktif yang lengkap.

Ini bukan sekadar memindahkan kode dari Studi Kasus. Kamu harus **menyesuaikan dengan identitas portfoliomu sendiri** — nama, pilihan layanan, kategori inquiry, dan sebagainya.

---

## 📋 Requirements Wajib

### A. Struktur Form (30 poin)

- [ ] Seluruh form dibungkus tag `<form>` dengan `method="POST"` dan `action` yang masuk akal (contoh: `/proses-kontak.php` atau `#`).
- [ ] Input dikelompokkan dalam minimal **dua `<fieldset>`**: satu untuk identitas pengirim, satu untuk detail pesan.
- [ ] Setiap `<fieldset>` memiliki `<legend>` yang deskriptif.
- [ ] Grup radio button dibungkus dalam `<fieldset>` + `<legend>` tersendiri.

### B. Elemen Input yang Dibutuhkan (40 poin)

- [ ] **`type="text"`** — Nama lengkap (wajib, `minlength="3"`).
- [ ] **`type="email"`** — Alamat email (wajib).
- [ ] **`type="tel"`** — Nomor WhatsApp/HP (opsional, gunakan `pattern` untuk format Indonesia).
- [ ] **`<select>`** — Kategori inquiry (wajib, minimal 4 pilihan termasuk pilihan kosong pertama).
- [ ] **`type="radio"`** — Minimal dua opsi dalam satu grup (contoh: metode kontak pilihan, atau skala proyek).
- [ ] **`type="checkbox"`** (minimal 2) — Pilihan keahlian yang relevan ATAU persetujuan + opsi langganan newsletter.
- [ ] **`<textarea>`** — Pesan detail (wajib, `minlength="20"`).
- [ ] **`type="checkbox"`** — Persetujuan privasi data (wajib, required).

### C. Validasi & Kualitas (30 poin)

- [ ] Semua field yang wajib diisi memiliki `required`.
- [ ] Semua `<label>` terhubung dengan `<input>` via `for`↔`id`.
- [ ] Semua `<input>` memiliki `name` yang deskriptif dan konsisten (gunakan `_` sebagai pemisah kata, contoh: `nama_lengkap`).
- [ ] Tombol submit menggunakan `<button type="submit">`.
- [ ] Tidak ada field yang menggunakan `placeholder` sebagai pengganti `<label>`.
- [ ] HTML lolos W3C Validator tanpa error.

---

## 💡 Ide Pengembangan (Poin Bonus)

Kamu bisa menambahkan elemen berikut untuk pengembangan ekstra:

```
+ Tambahkan input budget proyek menggunakan type="range" atau type="number"
+ Tambahkan input tanggal deadline yang diinginkan menggunakan type="date"
+ Gunakan <datalist> untuk input kota pengirim
+ Tambahkan input upload file brief/referensi menggunakan type="file" + enctype
+ Gunakan <optgroup> di dalam <select> untuk mengelompokkan kategori inquiry
```

---

## 🚫 Larangan yang Harus Dihindari

```
✗ Jangan hapus konten portfolio yang sudah ada dari BAB 1-5
✗ Jangan gunakan placeholder sebagai pengganti label
✗ Jangan buat input tanpa atribut name
✗ Jangan buat grup radio dengan name yang berbeda-beda
✗ Jangan gunakan <button> tanpa atribut type di dalam form
✗ Jangan copy-paste persis dari studi kasus — sesuaikan dengan dirimu
```

---

## ✅ Checklist Pengujian Mandiri

Buka `index.html` di browser (via Live Server), lalu lakukan pengujian berikut:

```
☐ Klik tulisan label "Nama Lengkap" → kursor berpindah ke kotak input
☐ Klik tulisan label "Balas via Email" → radio button terpilih
☐ Pilih satu radio button → radio lain dalam grup otomatis tidak terpilih
☐ Coba submit form dengan nama kosong → browser menampilkan pesan error
☐ Coba submit form dengan email format salah → browser menampilkan pesan error
☐ Coba submit tanpa memilih kategori inquiry → browser menampilkan pesan error
☐ Coba submit tanpa mencentang checkbox persetujuan → browser memblokir
☐ Coba isi nomor HP dengan huruf → browser menolak (karena type="tel" + pattern)
☐ Periksa di DevTools: setiap input punya name yang benar
☐ Buka validator.w3.org → hasilnya hijau tanpa error
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin |
|---|---|---|
| **Struktur Form** | Fieldset terpisah, legend deskriptif, radio dalam fieldset | 30 |
| **Kelengkapan Input** | Semua tipe input yang diminta hadir dan berfungsi | 40 |
| **Validasi & Kualitas** | Required, name, label↔id, tombol, W3C valid | 30 |
| **Bonus** | Elemen tambahan yang tepat guna | +10 |
| **Total** | | **100 (+10)** |

---

**[Lanjut: Challenge →](/bab6/challenge/)**
