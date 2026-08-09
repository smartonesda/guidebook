---
title: "Elemen Form"
description: Memahami secara mendalam apa itu form, bagaimana browser memprosesnya, atribut action dan method, konsep GET vs POST, dan batasan HTML form tanpa backend.
---

Sebelum kita mulai mengetik satu pun tag form, kita perlu menjawab satu pertanyaan mendasar: **mengapa form itu ada?**

Kalau kamu perhatikan, semua yang kita pelajari dari BAB 1 hingga BAB 5 adalah HTML yang *menampilkan* sesuatu — teks, gambar, video, daftar, tabel. Semuanya satu arah: dari server ke pengguna.

Form adalah titik balik pertama. Di sinilah HTML mulai bisa *menerima* sesuatu — dari pengguna ke server.

---

## 🤔 Apa Itu Form?

Bayangkan kamu pergi ke kantor kelurahan untuk mengurus surat keterangan. Di sana, kamu diberi selembar kertas formulir. Kamu diminta mengisi nama, NIK, alamat, dan keperluan. Lalu kamu menyerahkan kertas itu ke petugas. Petugas membaca datamu, memproses, dan memberikan hasil.

HTML Form bekerja persis seperti itu:

1. Browser menampilkan "kertas formulir" berupa kotak-kotak isian.
2. Pengguna mengisi data — nama, email, pesan, dan sebagainya.
3. Pengguna menekan tombol kirim (*submit*).
4. Browser mengumpulkan semua data isian, lalu mengirimkannya ke server.
5. Server memproses data dan memberikan respons.

**Tanpa form, website hanya bisa berbicara. Dengan form, website mulai bisa mendengar.**

Itulah mengapa form ada di mana-mana:
- Kotak pencarian Google → form.
- Halaman login Instagram → form.
- Formulir pembelian tiket kereta → form.
- Kolom komentar di blog → form.
- Formulir pendaftaran siswa baru → form.

---

## 🏗️ Cara Browser Mengenali Form

Browser tidak memproses kotak isian secara sendiri-sendiri. Browser mengenali bahwa sekumpulan input adalah bagian dari satu formulir jika dan hanya jika semua input tersebut **berada di dalam tag `<form>`**.

Tag `<form>` adalah "wadah kontrak" yang memberitahu browser:

> *"Hei browser, semua elemen input di dalam tag ini adalah satu kesatuan. Kumpulkan semua datanya, dan ketika tombol submit ditekan, kirimkan semuanya sesuai instruksi yang ada di atributku."*

Tanpa tag `<form>`, browser memang masih bisa menampilkan kotak input — pengguna bisa mengetik di dalamnya. Tapi saat tombol ditekan, **tidak ada yang terjadi**. Data tidak akan dikirim ke mana pun karena tidak ada "kontrak pengiriman" yang mendefinisikan tujuan dan cara pengirimannya.

---

## ✍️ Struktur Dasar Tag `<form>`

```html
<form action="/kirim-pesan.php" method="POST">
  <!-- Semua elemen input ada di sini -->
</form>
```

Tag `<form>` adalah *block element* — ia menempati satu baris penuh. Semua konten formulir: label, input, tombol, teks keterangan — semuanya diletakkan di dalam tag ini.

Tag `<form>` memiliki dua atribut paling penting yang **menentukan bagaimana dan ke mana data dikirim**:

---

## 📍 Atribut `action` — Ke Mana Data Dikirim?

Atribut `action` berisi **alamat URL tujuan pengiriman data**. Ini adalah alamat program di server yang akan menerima dan memproses data dari form kita.

```html
<form action="/proses-kontak.php" method="POST">
```

Dalam contoh di atas, ketika tombol submit ditekan, browser akan mengirimkan semua data form ke halaman `/proses-kontak.php` yang ada di server.

**Beberapa variasi nilai `action` yang umum:**

```html
<!-- Kirim ke file PHP di server yang sama -->
<form action="/kontak/proses.php">

<!-- Kirim ke URL absolut (server lain) -->
<form action="https://api.example.com/contact">

<!-- Kirim kembali ke halaman yang sama -->
<form action="">
<form action="#">
```

> **Catatan untuk sekarang:** Di BAB 6 ini, kita belum punya server backend. Jadi nilainya bisa kita biarkan `action="#"` dulu, yang artinya form dikirim kembali ke halaman yang sama. Data tidak akan benar-benar diproses, tapi form kita sudah valid secara HTML.

---

## 🚦 Atribut `method` — Bagaimana Data Dikirim?

Atribut `method` menentukan **cara browser mengirimkan data** form ke server. Ada dua pilihan metode: **GET** dan **POST**.

Ini bukan sekadar preferensi — pemilihan metode yang salah bisa menjadi masalah serius, terutama menyangkut keamanan data pengguna.

---

## ⚖️ GET vs POST — Perbedaan Mendasar

### Metode GET

Ketika kamu menggunakan `method="GET"`, browser mengirim data dengan cara **menempelkan data langsung di ujung URL**.

```html
<form action="/cari" method="GET">
  <input type="text" name="keyword" />
  <button type="submit">Cari</button>
</form>
```

Ketika pengguna mengetik "html belajar" lalu menekan tombol Cari, URL di browser akan berubah menjadi:

```
https://example.com/cari?keyword=html+belajar
```

Bagian setelah tanda `?` disebut **Query String**. Formatnya adalah `nama=nilai`, dipisahkan `&` jika ada lebih dari satu:

```
?keyword=html+belajar&halaman=1&kategori=tutorial
```

**Karakteristik GET:**
- ✅ Data terlihat jelas di URL — cocok untuk pencarian yang bisa di-*bookmark* atau dibagikan.
- ✅ Pengguna bisa menekan tombol *back* browser dan data tetap ada di URL.
- ❌ Data terbatas panjangnya (URL ada batas maksimal karakter, umumnya 2048 karakter).
- ❌ Data **terlihat oleh siapapun** yang melihat layar — **sangat berbahaya untuk kata sandi, nomor kartu kredit, atau data pribadi sensitif**.
- ❌ Data tersimpan di *browser history* dan log server.

**Kapan menggunakan GET?**
- Fitur pencarian (Google menggunakan GET untuk pencarian).
- Filter halaman (sortir produk, kategori artikel).
- URL yang bisa di-bookmark dan dibagikan.

---

### Metode POST

Ketika menggunakan `method="POST"`, browser mengirim data secara **tersembunyi di dalam badan permintaan HTTP (*Request Body*)**.

```html
<form action="/kirim-pesan" method="POST">
  <input type="text" name="nama" />
  <input type="email" name="email" />
  <input type="password" name="sandi" />
  <button type="submit">Masuk</button>
</form>
```

Saat form ini dikirim, URL di browser **tidak berubah** — tetap `https://example.com/kirim-pesan`. Data dikirim di "belakang layar" melalui badan permintaan HTTP yang tidak terlihat di kolom alamat browser.

**Karakteristik POST:**
- ✅ Data **tidak terlihat** di URL — aman untuk data sensitif.
- ✅ Tidak ada batasan ukuran data — cocok untuk unggah file besar.
- ✅ Data tidak tersimpan di browser history dalam bentuk yang mudah dibaca.
- ❌ URL tidak bisa di-*bookmark* (karena data tidak ada di URL).
- ❌ Menekan tombol *back* browser bisa memunculkan dialog "konfirmasi pengiriman ulang".

**Kapan menggunakan POST?**
- Form login (kata sandi tidak boleh muncul di URL).
- Form pendaftaran akun.
- Form pengiriman pesan / kontak.
- Unggah berkas.
- Pembelian produk / checkout.
- Semua form yang mengandung data pribadi atau sensitif.

---

## 🧠 Visualisasi: Bedanya GET vs POST

Mari kita visualisasikan dengan analogi:

**GET** seperti mengirim surat lewat kartu pos terbuka. Semua orang yang memegangnya bisa membaca isinya.

**POST** seperti mengirim surat dalam amplop tertutup. Hanya penerima yang seharusnya tahu isinya.

Ingat: **POST tetap bukan enkripsi**. Data POST masih bisa dibaca jika seseorang bisa "mengintersep" lalu lintas jaringan. Untuk keamanan penuh, kita butuh HTTPS (protokol komunikasi terenkripsi) — tapi itu sudah di luar cakupan HTML.

---

## 🚧 Batasan Penting: HTML Form Tanpa Backend

Ini adalah salah satu konsep yang paling penting untuk dipahami sejak awal:

> **HTML hanya bertugas mengumpulkan data di sisi browser (client-side). HTML tidak bisa menyimpan, memproses, atau mengirim email dari data form.**

Ketika kita membuat form HTML saat ini:

```html
<form action="/kirim-pesan.php" method="POST">
  <input type="text" name="nama" />
  <button type="submit">Kirim</button>
</form>
```

Form ini secara visual bekerja dengan baik — kotak bisa diketik, tombol bisa ditekan. Tapi jika tidak ada file `kirim-pesan.php` yang nyata di server, data tidak akan pergi ke mana-mana.

**Untuk membuat form yang benar-benar fungsional, kita membutuhkan:**
- Bahasa pemrograman sisi server: PHP, Node.js, Python, Ruby, dll.
- Database untuk menyimpan data: MySQL, PostgreSQL, MongoDB.
- Atau layanan pihak ketiga seperti Formspree, Netlify Forms, Web3Forms.

Di BAB 6 ini, kita fokus pada **fondasi HTML-nya**: membangun form yang terstruktur benar, aksesibel, dan siap diintegrasikan dengan backend kapanpun dibutuhkan.

---

## 🔖 Atribut Tambahan pada `<form>` yang Perlu Diketahui

Selain `action` dan `method`, ada beberapa atribut lain yang berguna:

```html
<form 
  action="/unggah-berkas"
  method="POST"
  enctype="multipart/form-data"
  autocomplete="on"
  novalidate
>
```

| Atribut | Fungsi |
|---|---|
| `enctype="multipart/form-data"` | **Wajib** dipakai jika form mengandung input upload file (`type="file"`). Tanpa ini, file tidak akan terkirim. |
| `autocomplete="on"` | Mengizinkan browser untuk menawarkan saran isian otomatis berdasarkan histori pengguna. |
| `novalidate` | Menonaktifkan validasi bawaan browser (berguna saat kita ingin validasi kustom via JavaScript). |

---

## 📌 Ringkasan Singkat: Cara Browser Memproses Form

Ketika pengguna menekan tombol submit, inilah yang terjadi secara berurutan:

1. Browser menemukan tag `<form>` yang membungkus tombol tersebut.
2. Browser mengumpulkan semua elemen input di dalamnya yang memiliki atribut `name`.
3. Browser melakukan validasi bawaan (jika ada atribut `required`, `type`, dll).
4. Jika lolos validasi, browser membuat **paket data** berisi pasangan `name=value` untuk setiap input.
5. Browser mengirimkan paket data tersebut ke URL yang ada di atribut `action`, menggunakan metode yang ada di atribut `method`.

Langkah ke-2 mengandung kata kunci penting: **"yang memiliki atribut `name`"**. Ini berarti input yang tidak punya atribut `name` akan diabaikan sepenuhnya oleh browser saat pengiriman. Kita akan bahas ini lebih dalam di halaman berikutnya.

---

Mari kita pelajari elemen paling krusial dalam form: hubungan antara `<label>` dan `<input>`.

**[Lanjut: Label & Input →](/bab6/label-input/)**
