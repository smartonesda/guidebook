---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat membuat HTML Forms.
---

Formulir adalah bagian HTML yang paling rentan terhadap kesalahan penulisan atribut. Berikut adalah daftar kesalahan fatal yang paling sering dilakukan pemula saat menyusun form beserta solusinya.

---

## ❌ 1. Menggunakan Nilai `name` yang Berbeda pada Grup Radio Button

**Penyebab Error**:
```html
<!-- ❌ SALAH: Pengikut bisa mencentang KEDUA pilihan sekaligus! -->
<input type="radio" name="pilih_rpl" value="rpl" /> RPL
<input type="radio" name="pilih_tkj" value="tkj" /> TKJ
```

**Mengapa Bermasalah**: Browser mengenali bahwa sekumpulan pilihan radio button berada di dalam kelompok yang sama jika dan hanya jika mereka **memiliki atribut `name` yang sama**. Jika namanya berbeda, browser menganggap mereka adalah dua pertanyaan terpisah, sehingga pengguna bisa memilih keduanya secara bersamaan (merusak fungsi radio button).

**Cara Memperbaiki**: Samakan nilai atribut `name` untuk semua opsi di dalam grup pilihan yang sama:
```html
<!-- ✅ BENAR: Pengguna hanya bisa memilih salah satu opsi secara bergantian -->
<input type="radio" name="pilihan_jurusan" value="rpl" /> RPL
<input type="radio" name="pilihan_jurusan" value="tkj" /> TKJ
```

---

## ❌ 2. Mengabaikan Atribut `name` pada Elemen Input

**Penyebab Error**: Lupa menuliskan atribut `name` pada tag input.
```html
<!-- ❌ SALAH: Data kotak ini tidak akan pernah sampai ke server -->
<input type="text" id="nama" placeholder="Ketik nama..." />
```

**Mengapa Bermasalah**: Saat tombol kirim diklik, browser membaca data berdasarkan pasangan `nama_atribut_name=nilai_input`. Jika atribut `name` tidak ada, browser akan mengabaikan kotak input tersebut dan datanya hilang tidak terkirim ke backend.

**Cara Memperbaiki**: Selalu sertakan atribut `name` pada setiap input:
```html
<!-- ✅ BENAR: Data terkirim sebagai nama_lengkap=isi_input -->
<input type="text" id="nama" name="nama_lengkap" placeholder="Ketik nama..." />
```

---

## ❌ 3. Menghubungkan `for` pada Label dengan `name` Input (Bukan `id`)

**Penyebab Error**:
```html
<!-- ❌ SALAH: Miskoneksi label dan input -->
<label for="nama_pengirim">Nama:</label>
<input type="text" id="nama-id" name="nama_pengirim" />
```

**Mengapa Bermasalah**: Atribut `for` pada tag `<label>` mendeteksi sasaran inputnya **melalui atribut `id`**, bukan `name`. Miskoneksi ini membuat label tidak responsif saat diklik oleh pengguna.

**Cara Memperbaiki**: Pastikan nilai `for` sama persis dengan `id` input pasangannya:
```html
<!-- ✅ BENAR: Hubungan terikat secara aksesibel -->
<label for="nama-id">Nama:</label>
<input type="text" id="nama-id" name="nama_pengirim" />
```

---

## ❌ 4. Menggunakan `placeholder` sebagai Pengganti `<label>`

**Penyebab Error**: Menghapus tag `<label>` hanya demi menghemat ruang tata letak visual halaman web.
```html
<!-- ❌ SALAH: Merusak aksesibilitas bagi tunanetra -->
<input type="text" name="nama" placeholder="Nama Lengkap" />
```

**Mengapa Bermasalah**:
- Ketika pengguna mengklik kotak input dan mulai mengetik, teks placeholder akan hilang. Pengguna bisa lupa kolom apa yang sedang mereka isi.
- Alat pembaca layar (*screen reader*) tidak bisa membaca placeholder secara andal, membuat pengguna difabel kebingungan.

**Cara Memperbaiki**: Selalu tuliskan tag `<label>` secara eksplisit untuk menjelaskan input terkait.

---

## ❌ 5. Menggunakan Tombol `<button>` Tanpa Menentukan Atribut `type`

**Penyebab Error**:
```html
<!-- ❌ SALAH: Berpotensi memicu submit form secara tidak sengaja -->
<button>Buka Panduan</button>
```

**Mengapa Bermasalah**: Di dalam elemen `<form>`, browser memperlakukan setiap tag `<button>` yang tidak ditentukan tipenya sebagai **`type="submit"`** secara default. Mengklik tombol biasa ini akan langsung memicu pengiriman formulir dan me-refresh halaman secara tidak sengaja.

**Cara Memperbaiki**: Selalu nyatakan tipe tombol secara tegas:
- Gunakan `<button type="submit">` untuk tombol kirim data formulir.
- Gunakan `<button type="button">` untuk tombol biasa yang dihubungkan dengan aksi JavaScript.

Mari kita lanjut ke halaman ringkasan untuk merekap seluruh pembelajaran di BAB 6!

**[Lanjut: Ringkasan →](/bab6/ringkasan/)**
