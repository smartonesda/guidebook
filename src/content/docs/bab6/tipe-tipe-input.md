---
title: "Tipe-Tipe Input"
description: Membahas secara mendalam berbagai jenis tipe input HTML5, kapan menggunakannya, perbedaan checkbox vs radio, dan kesalahan umum pemilihan tipe.
---

Di halaman sebelumnya, kita sudah memahami bahwa atribut `type` adalah yang paling mengubah perilaku sebuah `<input>`. Sekarang, mari kita bedah satu per satu semua tipe yang penting.

Memilih `type` yang tepat bukan hanya soal fungsionalitas — ia juga memengaruhi pengalaman pengguna, terutama di perangkat mobile. Browser pintar yang mendeteksi `type="email"` akan langsung memunculkan keyboard dengan tombol `@` dan `.com`. Browser yang melihat `type="number"` akan memunculkan keyboard angka. Ini adalah sesuatu yang tidak akan kamu dapatkan jika kamu hanya menggunakan `type="text"` untuk semua input.

---

## 📝 Grup 1: Input Teks Dasar

### `type="text"` — Teks Satu Baris
Input paling dasar. Menerima teks bebas dalam satu baris. Gunakan ini sebagai pilihan *default* ketika tidak ada tipe yang lebih spesifik.

```html
<label for="nama">Nama Lengkap:</label>
<input type="text" id="nama" name="nama_lengkap" placeholder="Budi Santoso" required />
```

**Kapan digunakan:** Nama, kota, alamat singkat, judul, kata kunci — semua yang berupa teks bebas satu baris.

**Kesalahan umum:** Menggunakan `type="text"` untuk email, URL, atau nomor — padahal tipe khusus ada dan memberikan validasi otomatis.

---

### `type="email"` — Alamat Email
Browser akan memvalidasi secara otomatis bahwa isian mengandung simbol `@` dan setidaknya satu titik setelahnya. Di perangkat mobile, keyboard akan muncul dengan `@` dan `.com` yang mudah diakses.

```html
<label for="email">Alamat Email:</label>
<input type="email" id="email" name="email_pengguna" placeholder="nama@domain.com" required />
```

**Kapan digunakan:** Selalu gunakan untuk input email — jangan gunakan `type="text"`.

**Catatan:** Validasi browser hanya memastikan *format* email, bukan apakah email *benar-benar ada*. Untuk verifikasi email nyata, kita butuh konfirmasi via email di backend.

---

### `type="password"` — Kata Sandi
Karakter yang diketik akan ditampilkan sebagai bulatan hitam (●●●●) atau bintang (*). Ini mencegah kata sandi terlihat oleh orang di sekitar.

```html
<label for="sandi">Kata Sandi:</label>
<input type="password" id="sandi" name="password" minlength="8" required />
```

**Kapan digunakan:** Selalu untuk input kata sandi — jangan pernah menggunakan `type="text"` untuk kata sandi.

**Penting:** Meskipun karakter tersembunyi di layar, data password tetap dikirim dalam bentuk teks biasa jika website tidak menggunakan HTTPS. Itulah mengapa HTTPS sangat penting untuk keamanan.

---

### `type="search"` — Kotak Pencarian
Secara visual mirip `type="text"`, tapi browser memberi tanda khusus (biasanya ada tombol × untuk menghapus) dan secara semantik menandai input ini sebagai pencarian.

```html
<label for="cari">Cari Artikel:</label>
<input type="search" id="cari" name="q" placeholder="Ketik kata kunci..." />
```

**Kapan digunakan:** Form pencarian. Biasanya dipasangkan dengan `method="GET"` agar hasil pencarian bisa di-bookmark.

---

## 📱 Grup 2: Input Data Terstruktur

### `type="number"` — Angka
Hanya menerima angka. Dilengkapi tombol panah atas-bawah untuk menambah/mengurangi nilai. Di mobile, memunculkan keyboard angka.

```html
<label for="jumlah">Jumlah Tiket:</label>
<input type="number" id="jumlah" name="jumlah_tiket" min="1" max="10" step="1" value="1" />
```

**Kapan digunakan:** Kuantitas, usia, harga, skor — semua yang berupa angka.

**Kesalahan umum:** Menggunakan `type="number"` untuk nomor telepon. Nomor telepon BUKAN angka yang bisa dihitung — kamu tidak akan pernah menjumlahkan dua nomor HP. Gunakan `type="tel"` untuk nomor HP.

---

### `type="tel"` — Nomor Telepon
Di perangkat mobile, memunculkan keyboard numerik dengan karakter `+`, `*`, `#`. Tidak memvalidasi format secara otomatis (karena format nomor telepon berbeda di setiap negara), jadi kombinasikan dengan atribut `pattern`.

```html
<label for="hp">Nomor WhatsApp:</label>
<input 
  type="tel" 
  id="hp" 
  name="nomor_hp" 
  placeholder="08xx-xxxx-xxxx"
  pattern="[0-9]{10,13}"
  title="Masukkan nomor HP 10-13 digit tanpa spasi"
/>
```

**Kapan digunakan:** Semua input nomor telepon.

---

### `type="url"` — Alamat Website
Browser akan memvalidasi bahwa isian dimulai dengan `http://` atau `https://`. Di mobile, keyboard dimunculkan dengan karakter `/` dan `.com` yang mudah diakses.

```html
<label for="website">Website Portfolio:</label>
<input type="url" id="website" name="url_portfolio" placeholder="https://portfolioku.com" />
```

**Kapan digunakan:** Input alamat website atau URL apa pun.

---

## 📅 Grup 3: Input Tanggal & Waktu

### `type="date"` — Tanggal
Menampilkan kalender *date picker* bawaan browser. Format nilai yang dikirim ke server adalah `YYYY-MM-DD`.

```html
<label for="tgl-lahir">Tanggal Lahir:</label>
<input type="date" id="tgl-lahir" name="tgl_lahir" min="1990-01-01" max="2010-12-31" />
```

**Kapan digunakan:** Tanggal lahir, tanggal booking, deadline, dan lainnya.

---

### `type="time"` — Waktu
Menampilkan *time picker*. Format nilai: `HH:MM`.

```html
<label for="jam-meeting">Jam Meeting:</label>
<input type="time" id="jam-meeting" name="jam_meeting" min="09:00" max="17:00" />
```

---

### `type="datetime-local"` — Tanggal & Waktu
Kombinasi kalender dan jam. Format nilai: `YYYY-MM-DDTHH:MM`.

```html
<label for="jadwal">Jadwal Demo:</label>
<input type="datetime-local" id="jadwal" name="jadwal_demo" />
```

---

### `type="month"` dan `type="week"` — Bulan dan Minggu
Untuk memilih bulan atau minggu tertentu dalam tahun.

```html
<input type="month" name="bulan_laporan" />   <!-- contoh nilai: 2025-06 -->
<input type="week" name="minggu_kerja" />    <!-- contoh nilai: 2025-W24 -->
```

---

## 🎨 Grup 4: Input Khusus

### `type="color"` — Pemilih Warna
Membuka jendela *color picker* bawaan sistem operasi. Nilai yang dikirim adalah kode HEX warna.

```html
<label for="warna-tema">Warna Tema Website:</label>
<input type="color" id="warna-tema" name="warna_tema" value="#3b82f6" />
```

---

### `type="range"` — Slider
Menampilkan *slider* (geser kanan-kiri) untuk memilih nilai dalam rentang tertentu. Cocok untuk input intensitas atau persentase.

```html
<label for="budget">Budget (juta Rupiah): <span id="tampil-budget">5</span></label>
<input type="range" id="budget" name="budget_juta" min="1" max="100" step="1" value="5" />
```

Untuk menampilkan nilai yang sedang dipilih, kita butuh sedikit JavaScript — tapi ini contoh yang bagus untuk menunjukkan potensinya.

---

### `type="file"` — Unggah Berkas
Memunculkan dialog pemilihan file dari komputer pengguna.

```html
<label for="cv">Upload CV (PDF):</label>
<input type="file" id="cv" name="file_cv" accept=".pdf,.doc,.docx" />
```

Atribut `accept` membatasi jenis file yang bisa dipilih:
- `accept="image/*"` — semua jenis gambar
- `accept=".pdf"` — hanya PDF
- `accept=".jpg,.png,.gif"` — gambar JPG, PNG, GIF

**Perhatian:** Untuk form yang mengandung `type="file"`, tag `<form>` WAJIB memiliki atribut `enctype="multipart/form-data"`. Tanpa ini, file tidak akan terkirim.

```html
<form action="/unggah" method="POST" enctype="multipart/form-data">
  <input type="file" name="foto_profil" accept="image/*" />
</form>
```

---

### `type="hidden"` — Input Tersembunyi
Input yang tidak terlihat oleh pengguna tapi datanya tetap dikirim ke server.

```html
<input type="hidden" name="halaman_asal" value="kontak" />
<input type="hidden" name="csrf_token" value="abc123xyz" />
```

**Kapan digunakan:**
- Menyimpan ID atau data konteks yang perlu dikirim ke server tanpa ditampilkan ke pengguna.
- Token keamanan CSRF (*Cross-Site Request Forgery* protection).

**Catatan penting:** Data di `type="hidden"` BUKAN data yang benar-benar tersembunyi secara aman. Pengguna bisa melihat nilainya melalui DevTools browser. Jangan menyimpan data rahasia atau sensitif di sini.

---

## ☑️ Grup 5: Pilihan — Checkbox dan Radio

Ini adalah dua tipe yang paling sering membingungkan pemula. Mari kita bedah dengan teliti.

---

### `type="radio"` — Pilih Satu dari Banyak

Radio button digunakan ketika pengguna **hanya boleh memilih tepat satu pilihan** dari beberapa opsi yang disediakan.

Nama "radio" berasal dari tombol radio jadul — ketika kamu menekan satu tombol saluran, tombol yang sebelumnya aktif otomatis terlepas. Inilah persis cara kerja radio button HTML.

```html
<p>Pilih Tipe Inquiry:</p>

<input type="radio" id="inq-proyek" name="tipe_inquiry" value="proyek" />
<label for="inq-proyek">Proyek Baru</label>

<input type="radio" id="inq-konsultasi" name="tipe_inquiry" value="konsultasi" />
<label for="inq-konsultasi">Konsultasi</label>

<input type="radio" id="inq-halo" name="tipe_inquiry" value="halo" />
<label for="inq-halo">Sekadar Halo</label>
```

**Aturan Wajib Radio Button:**

> **Semua radio button dalam satu grup pilihan HARUS memiliki nilai atribut `name` yang sama persis.**

Ini adalah bagaimana browser "mengelompokkan" radio button. Ketika dua radio button punya `name` yang sama, browser tahu bahwa mereka adalah bagian dari pertanyaan yang sama — dan memilih satu akan membatalkan pilihan lainnya.

Jika `name` berbeda, browser menganggap mereka pertanyaan berbeda, dan pengguna bisa memilih keduanya secara bersamaan (merusak fungsi radio button).

```html
<!-- ❌ SALAH: name berbeda = browser anggap dua pertanyaan terpisah -->
<input type="radio" name="pilihan_rpl" value="rpl" /> RPL
<input type="radio" name="pilihan_tkj" value="tkj" /> TKJ

<!-- ✅ BENAR: name sama = satu kelompok pilihan -->
<input type="radio" name="jurusan" value="rpl" /> RPL
<input type="radio" name="jurusan" value="tkj" /> TKJ
```

**Apa yang dikirim ke server?**
Hanya satu nilai — yaitu atribut `value` dari pilihan yang dipilih. Jika pengguna memilih "Proyek Baru", server menerima: `tipe_inquiry=proyek`.

**Untuk menetapkan pilihan default:**
```html
<input type="radio" name="tipe_inquiry" value="proyek" checked />
```

Atribut `checked` membuat pilihan ini terpilih secara default saat halaman dimuat.

---

### `type="checkbox"` — Pilih Banyak / Ya-Tidak

Checkbox digunakan dalam dua situasi:

**Situasi 1: Satu pernyataan Ya/Tidak**
```html
<input type="checkbox" id="setuju" name="persetujuan" value="setuju" required />
<label for="setuju">Saya menyetujui syarat dan ketentuan</label>
```

Jika checkbox dicentang dan form di-submit, server menerima: `persetujuan=setuju`.
Jika checkbox TIDAK dicentang, **data tidak dikirim sama sekali** (bukan dikirim sebagai "tidak").

**Situasi 2: Pilih banyak dari beberapa opsi**
```html
<p>Pilih Keahlian (boleh lebih dari satu):</p>

<input type="checkbox" id="skill-html" name="keahlian[]" value="html" />
<label for="skill-html">HTML</label>

<input type="checkbox" id="skill-css" name="keahlian[]" value="css" />
<label for="skill-css">CSS</label>

<input type="checkbox" id="skill-js" name="keahlian[]" value="javascript" />
<label for="skill-js">JavaScript</label>
```

Perhatikan `name="keahlian[]"` — tanda `[]` adalah konvensi untuk memberitahu server bahwa ini adalah array (larik data), bukan satu nilai tunggal.

---

### ⚖️ Perbandingan Radio vs Checkbox

| | Radio Button | Checkbox |
|---|---|---|
| **Boleh pilih berapa?** | Tepat satu | Satu, banyak, atau nol |
| **`name` harus sama dalam grup?** | Ya (wajib) | Tidak harus |
| **Nilai yang dikirim** | Nilai dari pilihan yang dipilih | Semua pilihan yang dicentang |
| **Jika tidak dipilih/dicentang?** | Server tidak menerima data | Server tidak menerima data |
| **Analogi** | Soal pilihan ganda ujian | Daftar periksa (*checklist*) |

---

## 🔘 Tombol di dalam Form

### `type="submit"` — Kirim Form
Memicu pengiriman form. Ini adalah fungsi utama yang kita butuhkan.

```html
<button type="submit">Kirim Pesan</button>
```

### `type="reset"` — Reset Form
Mengembalikan semua nilai input ke kondisi awalnya saat halaman dimuat.

```html
<button type="reset">Hapus Isian</button>
```

Gunakan dengan hati-hati — pengguna yang tidak sengaja klik tombol reset bisa kehilangan semua yang sudah mereka ketik.

### `type="button"` — Tombol Biasa
Tombol yang tidak melakukan apa-apa secara default. Harus diprogram dengan JavaScript untuk memberikan aksi.

```html
<button type="button" onclick="validasiKustom()">Periksa Dulu</button>
```

**Aturan penting:** Di dalam `<form>`, **setiap `<button>` yang tidak punya atribut `type` akan dianggap sebagai `type="submit"` secara default**. Ini menyebabkan form terkirim secara tidak sengaja ketika tombol yang tidak berhubungan diklik.

```html
<!-- ❌ Tombol ini akan submit form secara tidak sengaja! -->
<form>
  <button>Lihat Preview</button>   <!-- tidak ada type = dianggap submit -->
  <button type="submit">Kirim</button>
</form>

<!-- ✅ Benar: nyatakan type secara eksplisit -->
<form>
  <button type="button">Lihat Preview</button>
  <button type="submit">Kirim</button>
</form>
```

---

## 🗺️ Tabel Ringkasan Semua Tipe Input

| Type | Fungsi | Keyboard Mobile | Validasi Otomatis |
|---|---|---|---|
| `text` | Teks bebas satu baris | Standar | Tidak ada |
| `email` | Alamat email | Ada `@` dan `.com` | Format email |
| `password` | Kata sandi (tersembunyi) | Standar | Tidak ada |
| `search` | Kotak pencarian | Standar | Tidak ada |
| `number` | Angka | Numerik + tanda | Min/max/step |
| `tel` | Nomor telepon | Numerik + `+#*` | Tidak ada |
| `url` | Alamat website | Ada `.` dan `/` | Harus `http(s)://` |
| `date` | Tanggal | Date picker | Format tanggal |
| `time` | Waktu | Time picker | Format waktu |
| `datetime-local` | Tanggal + waktu | Date+time picker | Format keduanya |
| `month` | Bulan & tahun | Date picker | Format bulan |
| `week` | Minggu & tahun | Date picker | Format minggu |
| `color` | Warna (hex) | Color picker | Format hex |
| `range` | Slider nilai | - | Min/max |
| `file` | Unggah file | File browser | Tipe file (`accept`) |
| `hidden` | Data tersembunyi | - | Tidak ada |
| `radio` | Pilih satu | - | `required` pada grup |
| `checkbox` | Pilih banyak/ya-tidak | - | `required` |
| `submit` | Tombol kirim | - | - |
| `reset` | Tombol reset | - | - |
| `button` | Tombol netral | - | - |

---

Mari kita lanjut ke elemen input lain yang belum kita bahas: `<select>`, `<textarea>`, `<fieldset>`, dan `<datalist>`.

**[Lanjut: Pilihan Dropdown & Textarea →](/bab6/pilihan-dropdown-textarea/)**
