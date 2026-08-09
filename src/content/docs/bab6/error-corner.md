---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat membuat HTML Forms — dari yang fatal hingga yang halus tapi berbahaya.
---

Form adalah bagian HTML yang paling banyak mengandung jebakan. Banyak kesalahan tidak menyebabkan error yang tampak di browser — form tetap terlihat normal, tapi tidak berfungsi dengan benar.

Halaman ini mengumpulkan kesalahan-kesalahan yang paling sering ditemukan dari kode form pemula.

---

## ❌ Kesalahan 1: Lupa Atribut `name` pada Input

Ini adalah kesalahan nomor satu yang paling sering terjadi dan paling tidak disadari.

```html
<!-- ❌ SALAH: Input tanpa name -->
<label for="nama">Nama:</label>
<input type="text" id="nama" placeholder="Nama kamu..." required />

<!-- Akibat: Data dari kotak ini TIDAK dikirim ke server saat form di-submit -->
```

```html
<!-- ✅ BENAR: Selalu sertakan name -->
<label for="nama">Nama:</label>
<input type="text" id="nama" name="nama_lengkap" placeholder="Nama kamu..." required />
```

**Mengapa berbahaya:** Browser mengirim data berdasarkan pasangan `name=value`. Tanpa `name`, browser mengabaikan input tersebut sepenuhnya. Form terlihat berfungsi (tidak ada error), tapi server menerima data yang tidak lengkap. Bug ini sangat sulit dideteksi karena tidak ada pesan error.

---

## ❌ Kesalahan 2: `for` pada Label Menunjuk ke `name`, Bukan `id`

```html
<!-- ❌ SALAH: for menunjuk ke name, bukan id -->
<label for="nama_pengguna">Nama:</label>
<input type="text" id="nama-field" name="nama_pengguna" />

<!-- Klik label tidak akan memindahkan fokus ke input -->
```

```html
<!-- ✅ BENAR: for harus sama dengan id -->
<label for="nama-field">Nama:</label>
<input type="text" id="nama-field" name="nama_pengguna" />
```

**Mengapa berbahaya:** Label yang tidak terhubung berarti:
1. Klik pada teks label tidak memindahkan fokus ke input — pengguna HP kesulitan karena area klik kecil.
2. Screen reader tidak bisa mengaitkan label dengan input — pengguna tunanetra kebingungan.

Ingat: `for` ↔ `id`. Bukan `for` ↔ `name`.

---

## ❌ Kesalahan 3: Semua Radio Button dalam Grup Punya `name` Berbeda

```html
<!-- ❌ SALAH: Setiap radio punya name berbeda -->
<input type="radio" name="pilih_email" value="email" /> Email
<input type="radio" name="pilih_wa" value="whatsapp" /> WhatsApp
<input type="radio" name="pilih_telp" value="telepon" /> Telepon

<!-- Pengguna BISA memilih ketiganya sekaligus — radio button tidak berfungsi! -->
```

```html
<!-- ✅ BENAR: Semua radio dalam satu grup berbagi name yang sama -->
<input type="radio" name="metode_kontak" value="email" /> Email
<input type="radio" name="metode_kontak" value="whatsapp" /> WhatsApp
<input type="radio" name="metode_kontak" value="telepon" /> Telepon

<!-- Memilih satu otomatis membatalkan pilihan lain -->
```

**Mengapa berbahaya:** Browser mengelompokkan radio button berdasarkan `name` yang sama. Jika `name` berbeda, setiap radio dianggap pertanyaan terpisah — pengguna bisa memilih semuanya, dan server menerima data yang ambigu.

---

## ❌ Kesalahan 4: Menggunakan `placeholder` Sebagai Pengganti `<label>`

```html
<!-- ❌ SALAH: Tidak ada label, hanya placeholder -->
<input type="text" name="nama" placeholder="Nama Lengkap" />
<input type="email" name="email" placeholder="Alamat Email" />
```

```html
<!-- ✅ BENAR: Label eksplisit + placeholder sebagai pelengkap -->
<label for="nama">Nama Lengkap:</label>
<input type="text" id="nama" name="nama" placeholder="Contoh: Budi Santoso" />
```

**Masalah dengan placeholder-only:**
1. Saat pengguna mulai mengetik, placeholder menghilang — mereka lupa kolom apa yang sedang diisi.
2. Warna placeholder biasanya abu-abu terang — kontras rendah, sulit dibaca.
3. Screen reader tidak membaca placeholder secara konsisten.
4. Pengguna yang mengisi sebagian form lalu berhenti tidak bisa memeriksa kembali kolom mana yang belum diisi.

Placeholder boleh digunakan, tapi **hanya sebagai pelengkap contoh format** — tidak pernah sebagai pengganti label.

---

## ❌ Kesalahan 5: Tombol `<button>` Tanpa Atribut `type` di dalam Form

```html
<!-- ❌ SALAH: Tombol tanpa type di dalam form -->
<form>
  <button>Lihat Preview</button>   <!-- Ini dianggap submit! -->
  <button>Tampilkan FAQ</button>   <!-- Ini juga dianggap submit! -->
  <button type="submit">Kirim</button>
</form>

<!-- Klik "Lihat Preview" akan langsung mengirim form — tidak terduga! -->
```

```html
<!-- ✅ BENAR: Nyatakan type secara eksplisit -->
<form>
  <button type="button">Lihat Preview</button>
  <button type="button">Tampilkan FAQ</button>
  <button type="submit">Kirim</button>
</form>
```

**Aturan browser:** Di dalam elemen `<form>`, setiap `<button>` yang tidak punya atribut `type` secara default dianggap `type="submit"`. Ini menyebabkan form terkirim secara tidak sengaja.

---

## ❌ Kesalahan 6: Menggunakan `type="text"` untuk Semua Input

```html
<!-- ❌ SALAH: type="text" untuk semua jenis data -->
<input type="text" name="email" placeholder="Email..." />
<input type="text" name="password" placeholder="Password..." />
<input type="text" name="tanggal" placeholder="Tanggal lahir..." />
<input type="text" name="nomor_hp" placeholder="Nomor HP..." />
```

```html
<!-- ✅ BENAR: Pilih type yang tepat -->
<input type="email" name="email" />           <!-- validasi format @ -->
<input type="password" name="password" />    <!-- karakter tersembunyi -->
<input type="date" name="tanggal" />         <!-- date picker -->
<input type="tel" name="nomor_hp" />         <!-- keyboard numerik di mobile -->
```

**Akibat memilih tipe yang salah:**
- `type="text"` untuk email: tidak ada validasi format, keyboard mobile tidak optimal.
- `type="text"` untuk password: kata sandi terlihat jelas di layar.
- `type="text"` untuk tanggal: pengguna harus mengetik format tanggal secara manual, rentan error format.

---

## ❌ Kesalahan 7: Lupa `enctype` pada Form yang Ada Upload File

```html
<!-- ❌ SALAH: Form upload file tanpa enctype -->
<form action="/upload" method="POST">
  <input type="file" name="foto_profil" />
  <button type="submit">Upload</button>
</form>

<!-- File tidak akan terkirim ke server! -->
```

```html
<!-- ✅ BENAR: Tambahkan enctype untuk form dengan file -->
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="file" name="foto_profil" />
  <button type="submit">Upload</button>
</form>
```

**Mengapa penting:** Secara default, form HTML mengirim data dalam format `application/x-www-form-urlencoded` — format yang tidak bisa membawa file biner. `enctype="multipart/form-data"` mengubah cara browser mengemas data sehingga file bisa ikut terkirim.

---

## ❌ Kesalahan 8: Menggunakan GET untuk Data Sensitif

```html
<!-- ❌ SALAH: Form login dengan method GET -->
<form action="/login" method="GET">
  <input type="email" name="email" />
  <input type="password" name="password" />
  <button type="submit">Masuk</button>
</form>

<!-- URL setelah submit: /login?email=budi@example.com&password=rahasia123 -->
<!-- Kata sandi terlihat jelas di URL! -->
```

```html
<!-- ✅ BENAR: Selalu POST untuk data sensitif -->
<form action="/login" method="POST">
  <input type="email" name="email" />
  <input type="password" name="password" />
  <button type="submit">Masuk</button>
</form>
```

Data yang pernah muncul di URL:
- Tersimpan di browser history.
- Tersimpan di log server.
- Terlihat oleh siapa saja yang bisa melihat layar.
- Bisa dikopikan dan dibagikan secara tidak sengaja.

**Aturan sederhana:** Jika data tidak boleh dilihat orang lain → gunakan POST.

---

## ❌ Kesalahan 9: Menganggap HTML Validation Sebagai Keamanan

```html
<!-- Form dengan "keamanan" hanya dari required -->
<form action="/daftar" method="POST">
  <input type="text" name="username" required />
  <input type="password" name="password" minlength="8" required />
  <button type="submit">Daftar</button>
</form>
```

Developer mengira: *"Aman! Tidak bisa submit kalau tidak ada username atau password."*

**Kenyataan:**
1. Buka DevTools (F12) → Elements.
2. Klik kanan pada input → Edit as HTML.
3. Hapus atribut `required` dan `minlength`.
4. Submit form dengan data kosong atau data jahat.

Form berhasil dikirim.

Validasi HTML hanya ada di browser pengguna. Pengguna memiliki kendali penuh atas HTML yang berjalan di komputernya.

**Solusi wajib:** Selalu lakukan validasi ulang di server (PHP, Node.js, Python). Jangan pernah mempercayai data yang datang dari browser begitu saja.

---

## ❌ Kesalahan 10: Grup Radio Button Tanpa `<fieldset>` dan `<legend>`

```html
<!-- ❌ SALAH: Radio tanpa fieldset/legend -->
<p>Pilih Metode Pembayaran:</p>
<input type="radio" name="bayar" value="transfer" id="r1" />
<label for="r1">Transfer Bank</label>
<input type="radio" name="bayar" value="qris" id="r2" />
<label for="r2">QRIS</label>
```

```html
<!-- ✅ BENAR: Radio dalam fieldset + legend -->
<fieldset>
  <legend>Pilih Metode Pembayaran:</legend>
  <input type="radio" name="bayar" value="transfer" id="r1" />
  <label for="r1">Transfer Bank</label>
  <input type="radio" name="bayar" value="qris" id="r2" />
  <label for="r2">QRIS</label>
</fieldset>
```

**Mengapa penting:** Screen reader perlu tahu bahwa beberapa pilihan radio adalah bagian dari satu pertanyaan yang sama. `<legend>` memberikan konteks pertanyaan itu. Tanpa `<fieldset>` dan `<legend>`, screen reader hanya membaca "Transfer Bank, radio button" — tanpa tahu pertanyaannya apa.

---

## ❌ Kesalahan 11: Menggunakan `<div>` untuk Elemen yang Sudah Ada Tag Semantiknya

```html
<!-- ❌ SALAH: Menggunakan div untuk meniru fieldset -->
<div class="form-group">
  <div class="form-title">Informasi Pribadi</div>
  <div class="radio-wrapper">
    <div class="radio-item">
      <input type="radio" name="jk" value="l" />
      <span>Laki-laki</span>
    </div>
  </div>
</div>
```

```html
<!-- ✅ BENAR: Gunakan elemen semantik yang tersedia -->
<fieldset>
  <legend>Informasi Pribadi</legend>
  <input type="radio" id="jk-l" name="jenis_kelamin" value="l" />
  <label for="jk-l">Laki-laki</label>
</fieldset>
```

HTML menyediakan elemen semantik yang tepat untuk setiap kebutuhan form. Menggantinya dengan `<div>` berarti kehilangan aksesibilitas bawaan yang sudah disediakan oleh browser secara gratis.

---

**[Lanjut: Ringkasan →](/bab6/ringkasan/)**
