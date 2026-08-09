---
title: "id vs class vs name vs value"
description: Memahami perbedaan mendasar antara id, class, name, dan value — empat attribute yang paling sering tertukar penggunaannya oleh pemula.
---

Ini adalah halaman yang paling penting di BAB 7.

Empat kata ini — `id`, `class`, `name`, `value` — adalah attribute yang paling sering digunakan di seluruh HTML, tapi juga yang paling sering **tertukar** oleh pemula. Bahkan developer yang sudah beberapa tahun coding pun kadang masih bingung.

Mari kita bedah keempatnya secara tuntas.

---

## 🆔 `id` — Identitas Tunggal

`id` adalah nama pengenal yang **unik secara mutlak** di seluruh halaman.

Analoginya seperti **Nomor Induk Siswa (NIS)**. Di satu sekolah, tidak ada dua siswa yang boleh punya NIS yang sama. NIS bukan nama — satu nama bisa dimiliki banyak orang, tapi NIS hanya satu.

```html
<section id="tentang">...</section>
<section id="proyek">...</section>
<section id="kontak">...</section>
```

**Aturan `id`:**
- ✅ Unik per halaman — tidak boleh duplikat.
- ✅ Tidak boleh mengandung spasi.
- ✅ Digunakan untuk: anchor link (`#tentang`), CSS (`#tentang`), JavaScript (`getElementById`), koneksi label-input (`for`↔`id`).
- ❌ Jangan gunakan satu `id` untuk lebih dari satu element.

**Siapa yang "memanggil" `id`?**
```html
<!-- CSS: target dengan # -->
<style>
  #kontak { background-color: #f5f5f5; }
</style>

<!-- HTML anchor: navigasi ke bagian halaman -->
<a href="#kontak">Hubungi Saya</a>

<!-- Label form: hubungkan dengan input -->
<label for="nama-input">Nama:</label>
<input id="nama-input" type="text" />

<!-- JavaScript: cari elemen tertentu -->
<script>
  const section = document.getElementById("tentang");
</script>
```

---

## 🏷️ `class` — Label Kategori (Bisa Banyak)

`class` adalah label kategori yang bisa **digunakan oleh banyak element** dan **satu element bisa punya banyak class**.

Analoginya seperti **tag/label pada produk di toko**. Satu produk bisa punya banyak label: "Elektronik", "Laptop", "Promo", "Best Seller". Dan banyak produk bisa punya label yang sama.

```html
<!-- Banyak element dengan class yang sama -->
<article class="card">...</article>
<article class="card">...</article>
<article class="card featured">...</article>  <!-- punya 2 class -->

<!-- Satu element dengan banyak class -->
<button class="btn btn-primary btn-large rounded shadow">Kirim</button>
```

**Karakteristik `class`:**
- ✅ Tidak harus unik — banyak element boleh berbagi class yang sama.
- ✅ Satu element boleh punya banyak class (dipisahkan spasi).
- ✅ Digunakan utamanya untuk: CSS styling, JavaScript querying.
- ❌ Tidak digunakan untuk pengiriman data form (itu tugas `name`).
- ❌ Tidak digunakan untuk anchor link (itu tugas `id`).

**Bagaimana class dibaca CSS?**
```html
<button class="btn btn-primary">Kirim</button>
```
```css
.btn { padding: 8px 16px; border-radius: 4px; }
.btn-primary { background: blue; color: white; }
```

---

## 📛 `name` — Kunci Data untuk Server

`name` adalah pengenal yang digunakan **khusus untuk pengiriman data form ke server**. Kita sudah mempelajari ini di BAB 6.

Analoginya seperti **nama kolom di spreadsheet**. Ketika kamu punya spreadsheet absensi, kolom "Nama Siswa" dan "Kelas" adalah nama kolom yang menentukan data apa yang ada di bawahnya.

```html
<form method="POST" action="/daftar">
  <input type="text" name="nama_lengkap" id="input-nama" />
  <input type="email" name="email_user" id="input-email" />
  <select name="jurusan" id="pilih-jurusan">
    <option value="rpl">RPL</option>
  </select>
  <button type="submit">Daftar</button>
</form>
```

Ketika form ini di-submit, server menerima data seperti:
```
nama_lengkap = "Rizki Pratama"
email_user = "rizki@example.com"
jurusan = "rpl"
```

**Karakteristik `name`:**
- ✅ Digunakan oleh server backend untuk membaca data form.
- ✅ Bisa sama di banyak input (untuk grup radio button).
- ✅ Tanpa `name`, data input tidak dikirim ke server.
- ❌ Tidak digunakan oleh CSS.
- ❌ Tidak sama dengan `id` — keduanya punya peran berbeda.

---

## 💾 `value` — Nilai yang Dibawa

`value` adalah nilai yang **dibawa oleh input** — bisa berupa nilai default, nilai yang dikirim ke server, atau nilai yang dipilih.

Ini adalah attribute yang paling banyak konteksnya — artinya `value` berperilaku berbeda tergantung element mana yang memakainya.

### `value` pada `<input type="text">` — Nilai Default
```html
<input type="text" name="kota" value="Jakarta" />
```
Kotak teks ini awalnya sudah berisi "Jakarta". Pengguna bisa mengubahnya.

### `value` pada `<input type="radio">` dan `<input type="checkbox">` — Nilai yang Dikirim
```html
<input type="radio" name="jurusan" value="rpl" /> RPL
<input type="radio" name="jurusan" value="tkj" /> TKJ
```
Jika pengguna memilih "RPL", server menerima: `jurusan=rpl`. Nilai `"rpl"` di sini adalah yang dikirim, bukan teks "RPL" yang terlihat di layar.

### `value` pada `<option>` — Nilai yang Dikirim dari Dropdown
```html
<select name="bulan">
  <option value="01">Januari</option>
  <option value="02">Februari</option>
</select>
```
Yang dilihat pengguna: "Januari". Yang dikirim ke server: `bulan=01`.

### `value` pada `<button type="submit">` — Nilai Tombol
```html
<button type="submit" name="aksi" value="simpan">Simpan</button>
<button type="submit" name="aksi" value="draft">Simpan sebagai Draft</button>
```
Ini memungkinkan satu form dengan dua tombol submit yang mengirim nilai berbeda.

---

## 🔀 Perbandingan Keempat Attribute

| | `id` | `class` | `name` | `value` |
|---|---|---|---|---|
| **Fungsi utama** | Identitas unik | Label kategori | Kunci data form | Nilai yang dibawa |
| **Boleh duplikat?** | ❌ Tidak | ✅ Ya | ✅ Ya (radio) | ✅ Ya |
| **Dikirim ke server?** | ❌ Tidak | ❌ Tidak | ✅ Ya | ✅ Ya (jika punya `name`) |
| **Digunakan CSS?** | ✅ Ya (`#id`) | ✅ Ya (`.class`) | ❌ Tidak | ❌ Tidak |
| **Digunakan JS?** | ✅ Ya | ✅ Ya | ✅ Ya | ✅ Ya |
| **Untuk anchor link?** | ✅ Ya | ❌ Tidak | ❌ Tidak | ❌ Tidak |
| **Boleh mengandung spasi?** | ❌ Tidak | ✅ Ya (pemisah class) | ❌ Tidak | ✅ Tergantung konteks |

---

## 🎯 Kapan Menggunakan Mana?

Gunakan panduan ini sebagai referensi cepat:

**Gunakan `id` ketika:**
- Kamu perlu membuat anchor link di halaman (`href="#bagian-ini"`).
- Kamu perlu menghubungkan `<label>` dengan `<input>` di form.
- Kamu perlu menarget satu element spesifik dari JavaScript.
- CSS perlu menarget satu element yang benar-benar unik.

**Gunakan `class` ketika:**
- Kamu ingin menerapkan styling CSS yang sama ke banyak element.
- Kamu membangun komponen UI yang berulang (card, button, badge).
- JavaScript perlu menemukan sekelompok element yang serupa.

**Gunakan `name` ketika:**
- Element berada di dalam `<form>` dan datanya perlu dikirim ke server.
- Tanpa `name`, data tidak akan terkirim.

**Gunakan `value` ketika:**
- Kamu ingin menentukan nilai default sebuah input.
- Kamu ingin menentukan nilai yang dikirim untuk radio/checkbox.
- Kamu ingin menentukan nilai yang dikirim dari `<option>` dropdown.

---

## 🔍 Contoh Nyata: Satu Input dengan Semua Empat

Perhatikan satu `<input>` ini:

```html
<label for="email-kontak">Alamat Email:</label>
<input
  id="email-kontak"
  class="form-input form-input--email"
  name="email_pengirim"
  value="pengguna@example.com"
  type="email"
  required
/>
```

Bedah:
- `id="email-kontak"` → dihubungkan dengan `<label for="email-kontak">`, bisa ditarget CSS `#email-kontak`, bisa ditemukan JS via `getElementById`.
- `class="form-input form-input--email"` → ditarget CSS untuk styling kotak input dan variasi styling khusus email.
- `name="email_pengirim"` → server menerima data dengan kunci `email_pengirim`.
- `value="pengguna@example.com"` → teks awal di dalam kotak (pengguna bisa mengubahnya).

Keempat attribute ini **bekerja secara independen** — masing-masing untuk tujuan yang berbeda. Tidak saling menggantikan.

---

**[Lanjut: Boolean Attributes →](/bab7/boolean-attributes/)**
