---
title: "Label & Input"
description: Memahami hubungan penting antara label dan input, penggunaan for dan id, serta perbedaan name, id, dan value.
---

Sebuah kotak isian tanpa keterangan bagaikan formulir kosong tanpa judul kolom. Pengunjung tidak akan tahu apa yang harus diisi. 

Untuk membuat isian yang jelas dan aksesibel, kita selalu memasangkan dua elemen utama: **`<label>`** dan **`<input>`**.

---

## 🤝 Hubungan Erat `<label>` dan `<input>`

HTML mengharuskan kita menghubungkan tag keterangan `<label>` dengan kotak isian `<input>` secara mutlak menggunakan atribut **`for`** (pada label) dan **`id`** (pada input).

Aturan wajib: **Nilai atribut `for` pada label harus sama persis dengan nilai atribut `id` pada input pasangan.**

```html
<!-- ✅ BENAR: Terhubung secara aksesibel -->
<label for="nama-lengkap">Nama Lengkap:</label>
<input type="text" id="nama-lengkap" />
```

### ♿ Mengapa Hubungan Ini Sangat Penting?
1. **Mempermudah Klik (Focus)**: Saat pengguna mengklik teks *Nama Lengkap* pada label, browsermu akan otomatis mengaktifkan kursor (*focus*) langsung ke dalam kotak input terkait. Ini sangat membantu pengguna di HP yang layarnya kecil.
2. **Aksesibilitas (Screen Reader)**: Pengguna tunanetra terbantu karena alat pembaca layar akan otomatis membacakan label tersebut saat kursor berpindah ke kotak input terkait.

---

## 🔍 Perbedaan Tiga Atribut Utama: `name` vs `id` vs `value`

Seringkali pemula bingung membedakan kegunaan atribut `name` dan `id` pada input. Berikut adalah model mental pembedanya:

### 1. Atribut `name` (Kunci Data Server)
Atribut `name` adalah **identitas data saat dikirim ke server**. Tanpa `name`, browsermu tidak akan mengirimkan data di kotak tersebut ke server!
- *Analogi*: `name` bertindak sebagai nama kolom di database server.

### 2. Atribut `id` (Identitas Lokal Halaman)
Atribut `id` adalah **identitas unik lokal di dalam halaman web**. Digunakan untuk menghubungkan label (`for`), styling CSS, atau lokasi lompatan internal.
- *Aturan*: Nilai `id` wajib unik (tidak boleh ada yang sama di satu halaman).

### 3. Atribut `value` (Nilai Awal)
Atribut `value` menentukan **isi teks awal** di dalam kotak input sebelum pengunjung mengetikkan apa pun.

```html
<label for="input-email">Surel:</label>
<!-- name dikirim ke server, id untuk label, value adalah teks awal -->
<input 
  type="email" 
  id="input-email" 
  name="email_pengunjung" 
  value="nama@example.com" 
/>
```

Ketika tombol kirim diklik, server akan menerima pasangan data: `email_pengunjung = "nama@example.com"`.

Mari kita pelajari berbagai tipe input yang disediakan oleh HTML5 modern di halaman berikutnya.

**[Lanjut: Tipe-Tipe Input →](/bab6/tipe-tipe-input/)**
