---
title: "Elemen Form"
description: Memahami dasar elemen form, atribut action dan method, serta perbedaan metode pengiriman data GET vs POST.
---

Formulir (Form) di dalam website adalah sarana interaksi dua arah antara pengunjung dengan pemilik website. Tanpa form, kita tidak akan pernah bisa melakukan pencarian di Google, masuk ke akun Instagram, atau berbelanja di e-commerce.

Tugas utama form dalam HTML adalah **mengumpulkan data input pengguna, lalu mengirimkannya ke server backend untuk diproses**.

---

## 🏗️ Elemen Utama Pembungkus: Tag `<form>`

Semua kotak isian dan tombol input wajib dibungkus di dalam tag **`<form>`** agar browser tahu bahwa data-data tersebut berada di bawah satu formulir yang sama.

```html
<form action="/proses-inquiry.php" method="POST">
  <!-- Semua kotak input ditulis di sini -->
</form>
```

Tag `<form>` memiliki dua atribut wajib untuk mengirimkan data:

### 1. Atribut `action` (Tujuan)
Atribut `action` menentukan alamat URL server (backend script) ke mana data formulir harus dikirim setelah tombol submit diklik.
- Jika dikosongkan (`action=""`), data akan dikirim kembali ke halaman itu sendiri.

### 2. Atribut `method` (Metode Pengiriman)
Atribut `method` menentukan cara browser mengirimkan data tersebut ke server. HTML mendukung dua metode utama: **GET** dan **POST**.

---

## ⚖️ Perbedaan Metode Pengiriman: GET vs POST

Memahami perbedaan metode ini sangat penting bagi keamanan data website-mu:

### A. Metode GET
Mengirim data dengan cara menempelkannya langsung di ujung alamat URL browser (*Query String*).
- **Contoh URL**: `http://example.com/cari?keyword=html`
- **Karakteristik**:
  - Data terlihat jelas di kolom alamat browser (tidak aman untuk kata sandi).
  - Jumlah data terbatas (karena URL memiliki batas panjang karakter).
  - Bisa disimpan di bookmark browser (sangat cocok untuk fitur pencarian / search).

### B. Metode POST
Mengirim data secara tersembunyi di dalam badan permintaan browser (*Request Body*).
- **Contoh URL**: `http://example.com/proses-login` (alamat URL tetap bersih).
- **Karakteristik**:
  - Data tersembunyi dari penglihatan langsung (wajib digunakan untuk kata sandi, formulir registrasi, dan data sensitif).
  - Ukuran data tidak terbatas (bisa digunakan untuk mengirim berkas file besar).
  - Tidak bisa di-bookmark oleh browser.

---

## 🚧 Batasan HTML Form Tanpa Backend

Satu hal yang wajib dipahami pemula: **HTML hanya bertugas mengumpulkan data di sisi browser (client-side)**. 

HTML tidak bisa menyimpan data tersebut ke database sendiri. Untuk menyimpan pesan kontak atau memproses data login, kita memerlukan bahasa pemrograman sisi server (*server-side* seperti PHP, Node.js, atau Python) dan database. Di bab ini, kita akan fokus menyusun kerangka pengumpul datanya terlebih dahulu menggunakan HTML.

Mari kita pelajari cara menyusun kotak isian dasar menggunakan Label dan Input.

**[Lanjut: Label & Input →](/bab6/label-input/)**
