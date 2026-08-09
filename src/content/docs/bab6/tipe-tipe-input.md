---
title: "Tipe-Tipe Input"
description: Membahas berbagai jenis tipe input HTML5 modern, penanganannya, dan perbedaan checkbox vs radio.
---

HTML5 menyediakan berbagai jenis tipe input melalui atribut **`type`**. Memilih tipe input yang tepat sangat penting karena menentukan jenis keyboard yang muncul di HP pengunjung (misal keyboard angka untuk input nomor) dan memicu validasi format otomatis di browser.

---

## 📋 Tipe Input Umum

### 1. Teks, Email, dan Kata Sandi
- **`type="text"`**: Kotak teks standar satu baris.
- **`type="email"`**: Memeriksa otomatis apakah isian mengandung simbol `@` dan domain.
- **`type="password"`**: Menyembunyikan karakter yang diketik (ditampilkan sebagai bulatan hitam).

```html
<input type="text" name="nama" />
<input type="email" name="surel" />
<input type="password" name="sandi" />
```

---

### 2. Angka, Telepon, dan URL
- **`type="number"`**: Hanya menerima angka (dilengkapi tombol panah atas-bawah).
- **`type="tel"`**: Memunculkan keyboard panggil angka khusus di perangkat seluler (HP).
- **`type="url"`**: Memvalidasi apakah isian merupakan alamat link web yang valid.

---

### 3. Tanggal, Waktu, Warna, dan Berkas
- **`type="date"`** / **`type="time"`**: Menampilkan kalender atau pemilih jam bawaan browser.
- **`type="color"`**: Memunculkan jendela pemilih warna (*color picker*).
- **`type="file"`**: Memicu jendela pemilihan file dari komputermu untuk diunggah.

---

## ⚖️ Checkbox vs Radio Button (Pilihan Ganda)

Dua tipe input ini sering membingungkan pemula. Berikut aturan pembeda penggunaannya:

### A. Radio Button (`type="radio"`) — Pilih Satu dari Banyak
Digunakan jika pengguna **hanya boleh memilih tepat satu** dari beberapa pilihan yang disediakan (pilihan saling meniadakan).

- **Aturan Emas**: Semua pilihan di bawah kategori yang sama **wajib memiliki atribut `name` yang sama** agar browser mengelompokkannya secara seragam.

```html
<p>Pilih Tipe Pertanyaan:</p>
<input type="radio" id="inq-proyek" name="tipe_inquiry" value="proyek" />
<label for="inq-proyek">Tanya Proyek</label>

<input type="radio" id="inq-halo" name="tipe_inquiry" value="halo" />
<label for="inq-halo">Say Hello</label>
```

---

### B. Checkbox (`type="checkbox"`) — Pilih Banyak / Ya-Tidak
Digunakan jika pengguna **boleh memilih lebih dari satu** pilihan, atau untuk pilihan persetujuan tunggal (Ya/Tidak).

- **Aturan**: Setiap checkbox boleh memiliki nama yang berbeda.

```html
<input type="checkbox" id="syarat" name="setuju_syarat" value="ya" />
<label for="syarat">Saya menyetujui seluruh ketentuan layanan.</label>
```

Mari kita pelajari cara membuat pilihan menu drop-down dan isian teks paragraf yang panjang di halaman berikutnya.

**[Lanjut: Pilihan Dropdown & Textarea →](/bab6/pilihan-dropdown-textarea/)**
