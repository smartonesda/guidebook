---
title: "Label & Input"
description: Memahami secara mendalam anatomi elemen input, hubungan label dengan input, perbedaan name vs id vs value, dan semua atribut penting input HTML.
---

Sekarang kita masuk ke jantung dari sebuah form: elemen **`<input>`**.

Kalau `<form>` adalah amplop, maka `<input>` adalah kotak-kotak isian di dalam formulirnya. Dan `<label>` adalah tulisan yang menjelaskan setiap kotak itu.

Kelihatannya sederhana. Tapi di sinilah banyak pemula membuat kesalahan yang tidak mereka sadari — kesalahan yang tidak membuat browser error, tapi membuat form mereka tidak berfungsi dengan benar.

---

## 🏷️ Apa Itu `<label>`?

`<label>` adalah teks keterangan yang menjelaskan kepada pengguna apa yang harus diisi di kotak input tertentu. Dalam konteks formulir kertas, ini seperti tulisan cetak di sebelah kiri kotak isian: *"Nama Lengkap:"*, *"Alamat Email:"*, dan sebagainya.

Tapi `<label>` di HTML bukan sekadar teks dekoratif. Ia punya fungsi teknis yang sangat penting.

### Kenapa `<label>` Bukan Hanya Teks Biasa?

Coba kamu perhatikan perbedaan ini:

```html
<!-- Pendekatan SALAH: menggunakan paragraf biasa -->
<p>Nama Lengkap:</p>
<input type="text" name="nama" />

<!-- Pendekatan BENAR: menggunakan label yang terhubung -->
<label for="nama-lengkap">Nama Lengkap:</label>
<input type="text" id="nama-lengkap" name="nama" />
```

Secara visual, keduanya mungkin terlihat sama. Tapi secara teknis, keduanya sangat berbeda.

**Dengan `<label>` yang terhubung benar:**

1. **Klik pada teks label = klik pada input.** Ketika pengguna mengklik tulisan "Nama Lengkap:", kursor akan langsung berpindah ke kotak inputnya. Ini sangat membantu di layar HP yang kecil — area klik jadi jauh lebih besar.

2. **Screen reader membaca dengan benar.** Pengguna yang menggunakan alat bantu baca layar (*screen reader*) — misalnya orang dengan gangguan penglihatan — akan mendengar: *"Nama Lengkap, edit text"* ketika kursor mereka berpindah ke kotak tersebut. Tanpa label yang terhubung, mereka hanya mendengar: *"edit text"* — tanpa konteks sama sekali.

3. **Browser tahu konteks input.** Browser bisa memberikan saran autofill yang lebih akurat karena memahami maksud dari setiap input.

---

## 🔗 Cara Menghubungkan `<label>` dengan `<input>`

Ada satu aturan yang harus dihafal:

> **Nilai atribut `for` pada `<label>` harus sama persis dengan nilai atribut `id` pada `<input>` pasangannya.**

```html
<label for="email-pengguna">Alamat Email:</label>
<input type="email" id="email-pengguna" name="email" />
```

Perhatikan:
- `<label for="email-pengguna">` — label ini mencari input dengan `id="email-pengguna"`.
- `<input id="email-pengguna">` — input ini adalah targetnya.

Keduanya diikat oleh nilai yang sama: `"email-pengguna"`.

### Dua Cara Menulis Label yang Valid

**Cara 1: Label Terpisah (Paling Umum)**
```html
<label for="kota">Kota Asal:</label>
<input type="text" id="kota" name="kota_asal" />
```

**Cara 2: Label Membungkus Input**
```html
<label>
  Kota Asal:
  <input type="text" name="kota_asal" />
</label>
```

Pada Cara 2, karena input sudah ada *di dalam* label, kita tidak perlu atribut `for` dan `id` karena koneksinya sudah implisit. Tapi Cara 1 lebih umum digunakan karena lebih fleksibel untuk styling CSS.

---

## 🔍 Anatomi Lengkap Elemen `<input>`

Tag `<input>` adalah elemen yang paling serbaguna dalam HTML. Ia adalah *void element* — tidak punya tag penutup. Satu tag `<input>` bisa menjadi kotak teks, tombol radio, checkbox, kalender, pengunduh file, dan masih banyak lagi — semuanya hanya dengan mengubah nilai atribut `type`.

Mari kita bedah anatomi `<input>` secara menyeluruh:

```html
<input
  type="text"
  id="nama-lengkap"
  name="full_name"
  value=""
  placeholder="Contoh: Budi Santoso"
  required
  minlength="3"
  maxlength="100"
  autocomplete="name"
/>
```

Setiap bagian dari tag ini punya peran yang berbeda. Mari kita pelajari satu per satu.

---

## 📦 Pengelompokan Atribut `<input>`

Supaya tidak bingung, kita kelompokkan atribut-atribut `<input>` berdasarkan fungsinya:

### Kelompok 1: Jenis & Identitas

#### `type` — Jenis Input
Menentukan jenis kotak isian. Ini atribut paling penting karena mengubah seluruh perilaku input.

```html
<input type="text" />   <!-- kotak teks standar -->
<input type="email" />  <!-- kotak email dengan validasi format @ -->
<input type="password" /> <!-- kotak teks yang menyembunyikan karakter -->
```

Kita akan membahas semua nilai `type` secara lengkap di halaman berikutnya.

---

#### `id` — Identitas Lokal Halaman
Atribut `id` adalah pengenal unik sebuah elemen *di dalam halaman*. Tidak boleh ada dua elemen dengan `id` yang sama dalam satu halaman.

Fungsi `id` pada `<input>`:
- Menghubungkan dengan `<label for="...">`.
- Menjadi target lompatan URL (`#nama-id`).
- Digunakan oleh JavaScript untuk menemukan elemen (`document.getElementById`).
- Digunakan oleh CSS untuk styling spesifik.

```html
<input id="nama-lengkap" type="text" name="nama" />
<!--          ↑ nilai ini harus unik di seluruh halaman -->
```

> **Penting:** `id` adalah untuk keperluan *front-end* (halaman). `id` **tidak dikirim ke server** saat form di-submit.

---

#### `name` — Kunci Data untuk Server
Atribut `name` adalah pengenal data yang akan dikirim ke server. Inilah yang paling penting dari perspektif pengiriman form.

Ketika form di-submit, browser membuat paket data berisi pasangan `name=value` untuk setiap input. Jika sebuah input tidak punya atribut `name`, **data dari input tersebut tidak akan dikirim ke server sama sekali**.

```html
<!-- Form ini punya input tanpa name: -->
<form action="/proses" method="POST">
  <input type="text" id="nama" />          <!-- ← TIDAK dikirim: tidak ada name -->
  <input type="email" name="email_user" /> <!-- ← dikirim: email_user=... -->
  <button type="submit">Kirim</button>
</form>

<!-- Server hanya menerima: email_user=nilai_yang_diketik -->
<!-- Data dari kotak nama HILANG -->
```

**`id` vs `name`: Perbedaan yang Harus Dipahami**

| | `id` | `name` |
|---|---|---|
| **Siapa yang menggunakannya?** | Browser front-end (CSS, JS, label) | Server backend |
| **Apakah dikirim ke server?** | Tidak | Ya |
| **Harus unik?** | Ya, per halaman | Tidak harus (radio button sengaja berbagi nama) |
| **Boleh sama di beberapa input?** | Tidak boleh | Boleh (misal: grup radio) |

---

### Kelompok 2: Nilai (Value)

#### `value` — Nilai Awal / Nilai Default
Atribut `value` menentukan isi awal kotak input sebelum pengguna mengetikkan apa pun.

```html
<!-- Kotak teks dengan teks awal -->
<input type="text" name="kota" value="Jakarta" />
<!-- Tampil: [Jakarta] — pengguna bisa mengubahnya -->
```

Tapi hati-hati: **`value` sebagai atribut HTML** berbeda dengan **nilai yang sedang diketik pengguna**.

- `value` dalam HTML = nilai default yang ditentukan developer saat menulis kode.
- Nilai yang sedang di-input pengguna = nilai dinamis yang berubah sesuai ketikan.

Saat form di-submit, yang dikirim ke server adalah **nilai terkini yang ada di kotak saat submit**, bukan `value` awal yang kita tulis — kecuali pengguna tidak mengubahnya.

Untuk input `type="radio"` dan `type="checkbox"`, atribut `value` punya makna berbeda: ia adalah nilai yang dikirim ke server *jika pilihan tersebut dipilih*. Kita akan bahas ini di halaman Tipe-Tipe Input.

---

#### `placeholder` — Teks Petunjuk Sementara
Atribut `placeholder` menampilkan teks abu-abu yang muncul di dalam kotak input saat kotak masih kosong. Teks ini hilang begitu pengguna mulai mengetik.

```html
<input 
  type="text" 
  name="nama" 
  placeholder="Contoh: Andi Pratama" 
/>
```

**Kapan menggunakan `placeholder`?**
Placeholder berguna untuk memberikan contoh format yang diharapkan. Misalnya, untuk input nomor telepon, `placeholder="08xx-xxxx-xxxx"` membantu pengguna tahu format yang diinginkan.

**Placeholder BUKAN pengganti label.** Ini kesalahan yang sangat umum. Masalahnya:
- Ketika pengguna mulai mengetik, placeholder hilang. Pengguna bisa lupa apa yang sedang mereka isi.
- Screen reader tidak selalu membaca placeholder sebagai instruksi input.
- Kontras warna placeholder sering terlalu rendah untuk aksesibilitas.

---

### Kelompok 3: Kontrol & Pembatasan

#### `required` — Wajib Diisi
Menandai input sebagai wajib diisi. Browser akan menolak pengiriman form jika input ini kosong, dan akan menampilkan pesan error otomatis.

```html
<input type="text" name="nama" required />
```

`required` adalah *boolean attribute* — hanya perlu ditulis tanpa nilai, atau bisa juga `required="required"`.

---

#### `disabled` — Dinonaktifkan
Membuat input tidak bisa diinteraksi. Input yang disabled tidak bisa diklik, diketik, atau difokus.

```html
<input type="text" name="kode_promo" value="DISKON50" disabled />
```

**Perhatian:** Data dari input yang `disabled` **tidak akan dikirim ke server** saat form di-submit.

---

#### `readonly` — Bisa Dibaca, Tidak Bisa Diubah
Membuat input yang bisa dibaca tapi tidak bisa diubah pengguna. Berbeda dari `disabled`, input `readonly` **tetap dikirim ke server** saat form di-submit.

```html
<input type="text" name="kode_booking" value="BKG-2025-001" readonly />
```

**`disabled` vs `readonly`:**
| | `disabled` | `readonly` |
|---|---|---|
| Bisa diklik? | Tidak | Tidak |
| Bisa difokus keyboard? | Tidak | Ya |
| Dikirim ke server? | **Tidak** | **Ya** |
| Tampilan visual | Abu-abu redup | Normal |

---

#### `autocomplete` — Saran Isian Otomatis
Mengizinkan atau melarang browser memberikan saran isian dari riwayat pengguna.

```html
<input type="email" name="email" autocomplete="email" />
<input type="new-password" name="sandi" autocomplete="new-password" />
```

Nilai yang umum: `"name"`, `"email"`, `"tel"`, `"off"` (untuk menonaktifkan).

---

#### `minlength` dan `maxlength` — Batas Panjang Teks
Membatasi jumlah karakter minimum dan maksimum untuk input teks.

```html
<!-- Username: minimal 3, maksimal 20 karakter -->
<input type="text" name="username" minlength="3" maxlength="20" required />
```

---

#### `min`, `max`, `step` — Batas Nilai Angka / Tanggal
Digunakan untuk input angka atau tanggal untuk membatasi rentang nilai yang valid.

```html
<!-- Usia: minimal 17, maksimal 60, kelipatan 1 -->
<input type="number" name="usia" min="17" max="60" step="1" />

<!-- Tanggal: tidak boleh sebelum hari ini -->
<input type="date" name="tgl_booking" min="2025-01-01" />

<!-- Harga: kelipatan 1000 -->
<input type="number" name="budget" min="0" step="1000" />
```

---

#### `pattern` — Pola Format Kustom
Memvalidasi input menggunakan *regular expression* (ekspresi pola). Browser akan menolak pengiriman jika nilai tidak sesuai pola.

```html
<!-- Hanya huruf besar, minimal 2 karakter -->
<input type="text" name="kode_kelas" pattern="[A-Z]{2,}" title="Masukkan kode kelas dengan huruf besar, minimal 2 karakter" />
```

Atribut `title` digunakan untuk menampilkan pesan keterangan di tooltip saat validasi gagal.

---

## 📊 Tabel Ringkasan Atribut `<input>`

| Atribut | Fungsi | Siapa yang Menggunakan |
|---|---|---|
| `type` | Jenis input | Browser (perilaku) |
| `id` | Identitas lokal halaman | CSS, JS, Label `for` |
| `name` | Kunci data pengiriman | Server backend |
| `value` | Nilai awal/default | Browser + Server |
| `placeholder` | Teks contoh sementara | Pengguna |
| `required` | Wajib diisi | Browser (validasi) |
| `disabled` | Nonaktif total | Browser |
| `readonly` | Hanya baca | Browser |
| `autocomplete` | Saran isian | Browser |
| `minlength/maxlength` | Batas panjang teks | Browser (validasi) |
| `min/max/step` | Batas nilai angka | Browser (validasi) |
| `pattern` | Pola format kustom | Browser (validasi) |

---

## ✅ Contoh Form Sederhana yang Benar

Berikut adalah contoh form dengan dua input yang ditulis dengan benar secara lengkap:

```html
<form action="/kontak" method="POST">
  
  <label for="nama-pengirim">Nama Lengkap:</label>
  <input 
    type="text" 
    id="nama-pengirim"
    name="nama"
    placeholder="Contoh: Budi Santoso"
    required
    minlength="3"
    maxlength="100"
    autocomplete="name"
  />

  <label for="email-pengirim">Alamat Email:</label>
  <input 
    type="email" 
    id="email-pengirim"
    name="email"
    placeholder="nama@domain.com"
    required
    autocomplete="email"
  />

  <button type="submit">Kirim Pesan</button>

</form>
```

Perhatikan pola yang konsisten:
- Setiap input punya `label` yang terhubung lewat `for`↔`id`.
- Setiap input punya `name` untuk pengiriman data ke server.
- Setiap input yang wajib diisi punya `required`.
- `id` dan `name` boleh berbeda nilainya — itu normal dan disengaja.

---

Mari kita pelajari berbagai jenis input berdasarkan atribut `type` di halaman berikutnya.

**[Lanjut: Tipe-Tipe Input →](/bab6/tipe-tipe-input/)**
