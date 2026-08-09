---
title: "Pilihan Dropdown & Textarea"
description: Memahami penggunaan tag select untuk menu pilihan jatuh-turun dan textarea untuk isian pesan paragraf panjang.
---

Tidak semua masukan pengguna muat ditulis di dalam satu baris input kecil. Untuk pilihan menu yang sangat banyak (dropdown) atau isian pesan paragraf yang panjang, HTML menyediakan tag khusus di luar elemen `<input>`.

---

## 🔽 1. Menu Pilihan Dropdown: Tag `<select>` & `<option>`

Tag `<select>` digunakan untuk membuat daftar pilihan jatuh-turun (*dropdown*). Item pilihan di dalamnya dibungkus oleh tag `<option>`.

```html
<label for="pilih-layanan">Layanan yang Dicari:</label>
<select id="pilih-layanan" name="jenis_layanan">
  <option value="">-- Pilih Layanan --</option>
  <option value="web-dev">Web Development</option>
  <option value="web-design">Web Design</option>
  <option value="maintenance">Perawatan Web</option>
</select>
```

- **Atribut `value` pada `<option>`**: Nilai inilah yang akan dikirim ke server backend saat tombol submit ditekan.
- **Nilai kosong pada pilihan pertama**: Praktik terbaik untuk memaksa pengguna memilih salah satu opsi terlebih dahulu.

---

## 📝 Isian Teks Paragraf Panjang: Tag `<textarea>`

Tag `<textarea>` digunakan untuk membuat kotak isian teks multi-baris (misalnya kotak pesan, saran, atau alamat lengkap).

Aturan penulisan: **Tag `<textarea>` memiliki tag penutup khusus (`</textarea>`) dan tidak ditulis sebagai tag tunggal.**

```html
<label for="pesan-inquiry">Detail Pesan:</label>
<textarea id="pesan-inquiry" name="pesan_user" rows="5" cols="40" placeholder="Tulis pesanmu di sini..."></textarea>
```

- **Atribut `rows`**: Mengatur tinggi default kotak berdasarkan jumlah baris teks.
- **Atribut `cols`**: Mengatur lebar default kotak berdasarkan lebar karakter.
- **Teks awal**: Ditulis di antara tag pembuka dan penutup: `<textarea>Teks awal...</textarea>`.

---

## 🗃️ Mengelompokkan Formulir: Tag `<fieldset>` & `<legend>`

Jika formulirmu memiliki banyak sekali pertanyaan, kelompokkan pertanyaan yang sejenis menggunakan tag **`<fieldset>`** (sebagai kotak bingkai pelindung) dan beri judul bingkai menggunakan tag **`<legend>`**.

```html
<fieldset>
  <legend>Detail Hubungi</legend>
  
  <label for="nama">Nama:</label>
  <input type="text" id="nama" name="user_name" />
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="user_email" />
</fieldset>
```

Ini adalah praktik terbaik yang sangat membantu aksesibilitas screen reader dalam memahami kelompok pertanyaan.

Mari kita bahas bagaimana cara membatasi isian formulir agar tidak kosong atau salah ketik menggunakan Validasi Bawaan Browser.

**[Lanjut: Validasi Form Bawaan →](/bab6/validasi-form-bawaan/)**
