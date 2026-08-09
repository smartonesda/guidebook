---
title: "Validasi Form Bawaan"
description: Memahami sistem validasi bawaan browser (HTML5 validation) serta batasan keamanan di sisi klien.
---

Sebelum data dikirim ke server, kita harus memastikan bahwa pengguna tidak mengosongkan kolom penting (seperti email atau pesan) atau mengetik format data yang salah (misalnya menulis angka di kolom email).

HTML5 menyediakan sistem validasi otomatis yang berjalan langsung di browser tanpa bantuan JavaScript (*Client-side validation*).

---

## 🛠️ Atribut Validasi HTML5 yang Umum

Kita cukup memasangkan atribut-atribut berikut di dalam tag input untuk membatasi masukan pengguna:

### 1. Atribut `required` (Wajib Diisi)
Mencegah formulir dikirim jika kotak input bersangkutan masih kosong.
```html
<input type="text" name="nama" required />
```

### 2. Atribut `minlength` dan `maxlength`
Membatasi panjang minimal dan maksimal karakter teks yang boleh diketik.
```html
<!-- Pesan minimal harus berisi 10 karakter -->
<textarea name="pesan" minlength="10" required></textarea>
```

### 3. Atribut `min` dan `max` (Khusus Angka/Tanggal)
Membatasi nilai angka terkecil dan terbesar yang boleh dimasukkan.
```html
<input type="number" name="jumlah_tiket" min="1" max="10" />
```

### 4. Atribut `pattern` (Pola Khusus)
Membatasi masukan menggunakan aturan ekspresi reguler (*Regular Expressions*).
```html
<!-- Hanya menerima huruf besar/kecil dan angka, minimal 8 karakter -->
<input type="text" name="username" pattern="[a-zA-Z0-9]{8,}" title="Username minimal harus 8 karakter alfanumerik" />
```

---

## 🚦 Batasan Validasi HTML (Client-Side vs Server-Side)

Satu konsep keamanan web yang **wajib ditanamkan**: *Client-side validation* (validasi HTML di browser) bukan merupakan pengaman keamanan data sesungguhnya.

### Mengapa?
- Validasi HTML berjalan di komputer pengguna. 
- Pengguna yang nakal (hacker) bisa dengan mudah menonaktifkan validasi HTML di DevTools (misalnya menghapus atribut `required` di panel Elements) lalu mengirimkan data kosong atau kode jahat ke servermu.

### Solusi:
Validasi HTML5 murni digunakan untuk **meningkatkan pengalaman pengguna (User Experience - UX)** agar mereka tahu lebih cepat jika ada salah ketik tanpa harus menunggu reload server. 

Untuk keamanan sistem yang sesungguhnya, tim developer wajib memasang **Validasi Sisi Server (Server-side validation)** di kode backend (PHP, Node.js) yang tidak bisa diotak-atik oleh pengguna biasa.

Mari kita terapkan konsep form ini ke dalam proyek portfolio kita melalui studi kasus.

**[Lanjut: Studi Kasus →](/bab6/studi-kasus/)**
