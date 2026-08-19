---
title: "Boolean Attributes"
description: Memahami apa itu boolean attribute, cara kerjanya, mengapa required='false' adalah kesalahan, dan daftar boolean attribute penting di HTML.
---

Di HTML, ada dua jenis attribute berdasarkan cara penulisannya:

1. **Attribute dengan nilai** — harus ditulis `attribute="value"`.
   Contoh: `type="email"`, `href="/tentang"`, `class="nav-link"`.

2. **Boolean attribute** — cukup ditulis nama attribute-nya saja, **tanpa nilai**.
   Contoh: `required`, `disabled`, `checked`, `hidden`, `readonly`.

Di halaman ini, kita membahas kategori kedua: **boolean attribute**.

---

## 🔘 Apa Itu Boolean Attribute?

Boolean attribute adalah attribute yang **keberadaannya saja sudah cukup bermakna**. Tidak perlu diberi nilai — jika attribute itu ada, maknanya "aktif" atau "benar". Jika tidak ada, maknanya "tidak aktif" atau "tidak ada".

Ini mirip dengan pertanyaan ya/tidak:

```
Apakah field ini wajib diisi?
Jika ada "required" → Ya
Jika tidak ada "required" → Tidak
```

Analoginya seperti **saklar lampu**: tidak perlu bilang "saklar ini bernilai nyala" — cukup posisi saklar yang menentukan. Jika saklar ada dan dinyalakan, lampu nyala. Jika tidak ada sakelar, lampu padam.

---

## ✍️ Cara Menulis Boolean Attribute

Ada tiga cara penulisan yang **semuanya valid secara HTML**:

```html
<!-- Cara 1: Hanya nama attribute (paling umum dan direkomendasikan) -->
<input type="text" required />

<!-- Cara 2: Nama attribute = nama attribute (nilai sama dengan nama) -->
<input type="text" required="required" />

<!-- Cara 3: Nama attribute = string kosong -->
<input type="text" required="" />
```

Ketiganya memiliki efek yang identik. Cara 1 adalah yang paling umum dan paling bersih.

---

## ❌ Kesalahan Paling Umum: `required="false"`

Ini adalah kesalahan yang **sangat sering dilakukan pemula** dan harus dipahami dengan baik:

```html
<!-- ❌ SALAH: required="false" TIDAK menonaktifkan required! -->
<input type="text" required="false" />

<!-- ❌ Ini juga SALAH — sama saja! -->
<input type="text" required="0" />
<input type="text" required="no" />
```

**Mengapa ini salah?**

Karena untuk boolean attribute, yang diperiksa browser adalah **apakah attribute itu ADA atau TIDAK ADA** — bukan apa nilainya. Browser tidak membaca nilai `"false"` atau `"0"` sebagai "matikan attribute ini".

Ketika browser menemukan `required="false"`, ia melihat: "ada attribute `required`" → artinya field ini wajib diisi. Nilai `"false"` diabaikan sepenuhnya.

```html
<!-- ✅ BENAR: untuk menonaktifkan, hapus attribute-nya sama sekali -->
<input type="text" />                  <!-- tidak required -->
<input type="text" required />         <!-- required -->
```

Jika kamu perlu mengontrol boolean attribute via JavaScript:

```javascript
// Aktifkan required
input.setAttribute('required', '');

// Nonaktifkan required
input.removeAttribute('required');

// Cek apakah required aktif
input.hasAttribute('required');  // true / false
```

---

## 📋 Daftar Boolean Attribute Penting

### `required` — Wajib Diisi
```html
<input type="email" name="email" required />
<textarea name="pesan" required></textarea>
<select name="kategori" required>
  <option value="">-- Pilih --</option>
  <option value="a">Opsi A</option>
</select>
```
Field tidak boleh kosong saat form di-submit. Browser menolak pengiriman dan menampilkan pesan error.

---

### `disabled` — Dinonaktifkan Total
```html
<input type="text" value="Tidak bisa diedit" disabled />
<button type="submit" disabled>Kirim (Nonaktif)</button>
<select disabled>...</select>
```
Element tidak bisa diinteraksi sama sekali. Tampilannya abu-abu redup. Data dari input yang `disabled` **tidak dikirim ke server**.

---

### `readonly` — Hanya Baca
```html
<input type="text" value="BKG-2025-001" readonly />
```
Element bisa dilihat dan difokus, tapi tidak bisa diubah pengguna. Berbeda dari `disabled`, data dari input `readonly` **tetap dikirim ke server**.

---

### `checked` — Terpilih secara Default
```html
<!-- Checkbox yang sudah dicentang dari awal -->
<input type="checkbox" name="newsletter" value="ya" checked />

<!-- Radio button yang sudah terpilih dari awal -->
<input type="radio" name="metode" value="email" checked />
<input type="radio" name="metode" value="telepon" />
```
Menentukan pilihan default saat halaman pertama kali dimuat.

---

### `selected` — Opsi Dropdown yang Terpilih Default
```html
<select name="negara">
  <option value="id" selected>Indonesia</option>
  <option value="my">Malaysia</option>
</select>
```
Menentukan pilihan yang terlihat di dropdown saat halaman pertama dimuat.

---

### `multiple` — Pilih Banyak
```html
<!-- Select: bisa pilih lebih dari satu dengan Ctrl+klik -->
<select name="keahlian[]" multiple>
  <option value="html">HTML</option>
  <option value="css">CSS</option>
  <option value="js">JavaScript</option>
</select>

<!-- Input file: bisa pilih banyak file sekaligus -->
<input type="file" name="foto[]" multiple />
```

---

### `hidden` — Tersembunyi
```html
<div hidden>Tidak tampak di halaman.</div>
<input type="hidden" name="csrf_token" value="abc123" />
```
Untuk div/section: menyembunyikan konten dari tampilan dan screen reader.
Untuk input: `type="hidden"` sudah spesifik — ini berbeda dari attribute `hidden`.

---

### `open` — Terbuka (pada `<details>`)
```html
<!-- Tanpa open: terlipat secara default -->
<details>
  <summary>Klik untuk membuka</summary>
  <p>Konten yang tersembunyi</p>
</details>

<!-- Dengan open: terbuka secara default -->
<details open>
  <summary>Konten ini sudah terbuka</summary>
  <p>Langsung terlihat saat halaman dimuat</p>
</details>
```

---

### `autoplay`, `loop`, `muted`, `controls` — Untuk Media
```html
<video src="demo.mp4" controls autoplay muted loop>
  Browser tidak mendukung video.
</video>
```
- `controls` — tampilkan tombol play/pause/volume bawaan browser.
- `autoplay` — putar otomatis saat halaman dimuat (sering diblokir browser jika tidak disertai `muted`).
- `muted` — mulai tanpa suara.
- `loop` — putar ulang dari awal setelah selesai.

---

### `novalidate` — Nonaktifkan Validasi Form
```html
<form novalidate action="/proses">
  <!-- Validasi browser dinonaktifkan — validasi via JavaScript -->
</form>
```

---

### `defer` dan `async` — Untuk `<script>`
```html
<!-- defer: tunggu HTML selesai dimuat, baru jalankan script -->
<script src="app.js" defer></script>

<!-- async: muat dan jalankan script secara paralel dengan HTML -->
<script src="analytics.js" async></script>
```

---

## 📊 Tabel Ringkasan Boolean Attribute

| Attribute | Berlaku untuk | Fungsi |
|---|---|---|
| `required` | Input, select, textarea | Wajib diisi sebelum submit |
| `disabled` | Input, button, select, dsb. | Nonaktifkan total (tidak dikirim) |
| `readonly` | Input, textarea | Hanya baca (tetap dikirim) |
| `checked` | radio, checkbox | Terpilih secara default |
| `selected` | `<option>` | Pilihan dropdown default |
| `multiple` | select, file input | Izinkan pilih banyak |
| `hidden` | Semua element | Sembunyikan dari tampilan |
| `open` | `<details>` | Terbuka secara default |
| `controls` | video, audio | Tampilkan kontrol media |
| `autoplay` | video, audio | Putar otomatis |
| `muted` | video | Mulai tanpa suara |
| `loop` | video, audio | Putar berulang |
| `novalidate` | `<form>` | Nonaktifkan validasi browser |
| `defer` | `<script>` | Tunda eksekusi hingga HTML selesai |
| `async` | `<script>` | Muat paralel, jalankan segera |

---

**[Lanjut: Custom data-* Attributes →](/bab7/data-attributes/)**
