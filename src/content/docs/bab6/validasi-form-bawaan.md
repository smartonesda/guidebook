---
title: "Validasi Form Bawaan"
description: Memahami secara mendalam sistem validasi bawaan browser HTML5, semua atribut validasi, perbedaan client-side vs server-side validation, dan mengapa HTML validation bukan keamanan.
---

Sebelum kita membangun Contact Form untuk portfolio kita, ada satu konsep krusial yang harus dipahami dengan benar: **validasi form**.

Bayangkan kamu membuat form pendaftaran. Pengguna klik tombol submit dengan kotak nama yang kosong, atau menulis "bukan-email" di kotak email. Apa yang terjadi?

Tanpa validasi, form akan tetap dikirim dengan data yang tidak valid — dan server kamu menerima sampah.

HTML5 menyediakan sistem validasi bawaan yang berjalan di browser sebelum data dikirim. Ini yang akan kita pelajari di sini.

---

## 🛡️ Apa Itu Form Validation?

Validasi form adalah proses **memeriksa apakah data yang diisi pengguna sudah sesuai format dan aturan yang diinginkan** sebelum data tersebut dikirim ke server.

Ada dua jenis validasi yang perlu kamu pahami:

### Client-Side Validation (Validasi di Browser)
Validasi yang berjalan di komputer pengguna, di dalam browser, sebelum data dikirim ke server. Ini adalah yang kita bahas di halaman ini — validasi HTML5 bawaan browser.

**Tujuan:** Meningkatkan pengalaman pengguna (UX). Pengguna tahu langsung jika ada yang salah tanpa harus menunggu halaman di-reload dari server.

**Keterbatasan:** Bisa dimanipulasi atau dilewati oleh pengguna yang tahu cara menggunakan DevTools.

### Server-Side Validation (Validasi di Server)
Validasi yang berjalan di server, di dalam kode backend (PHP, Node.js, Python), setelah data diterima dari browser.

**Tujuan:** Keamanan sesungguhnya. Tidak bisa dimanipulasi oleh pengguna karena berjalan di server yang tidak bisa diakses pengguna.

**Aturan yang tidak boleh dilanggar:**
> **Client-side validation TIDAK PERNAH cukup untuk keamanan. Server-side validation adalah wajib.**

Kita akan kembali ke konsep ini setelah membahas cara kerja validasi HTML5.

---

## ✅ Atribut Validasi HTML5 yang Penting

### 1. `required` — Wajib Diisi

Atribut paling dasar. Browser menolak pengiriman form jika input ini masih kosong.

```html
<label for="nama">Nama Lengkap:</label>
<input type="text" id="nama" name="nama" required />

<label for="email">Email:</label>
<input type="email" id="email" name="email" required />

<label for="pesan">Pesan:</label>
<textarea id="pesan" name="pesan" required></textarea>
```

`required` adalah *boolean attribute* — bisa ditulis hanya sebagai `required`, atau `required="required"` (keduanya valid).

**Untuk `<select>`:**
```html
<select name="layanan" required>
  <option value="">-- Pilih Layanan --</option>  <!-- value="" = dianggap belum diisi -->
  <option value="web-dev">Web Development</option>
</select>
```

Ingat: opsi pertama harus memiliki `value=""` agar `required` berfungsi dengan benar.

**Untuk radio button:**
```html
<!-- Cukup satu radio dalam grup yang memiliki required -->
<input type="radio" name="setuju" value="ya" required />
<label>Ya, saya setuju</label>

<input type="radio" name="setuju" value="tidak" />
<label>Tidak</label>
```

---

### 2. `minlength` dan `maxlength` — Batas Panjang Teks

Membatasi jumlah karakter yang boleh diisi. `minlength` menentukan minimum, `maxlength` menentukan maksimum.

```html
<!-- Username: minimal 3, maksimal 20 karakter -->
<input type="text" name="username" minlength="3" maxlength="20" required />

<!-- Pesan: minimal 20 karakter -->
<textarea name="pesan" minlength="20" required></textarea>

<!-- Kode PIN: tepat 6 digit -->
<input type="text" name="pin" minlength="6" maxlength="6" pattern="[0-9]{6}" />
```

**Perbedaan `minlength` vs `min`:**
- `minlength` → untuk *panjang teks* (berapa karakter)
- `min` → untuk *nilai angka* (nilai numeriknya berapa)

---

### 3. `min`, `max`, `step` — Batas Nilai Angka dan Tanggal

Digunakan untuk input `type="number"`, `type="date"`, `type="time"`, `type="range"`, dan sejenisnya.

```html
<!-- Angka: 1 sampai 100, kelipatan 1 -->
<input type="number" name="jumlah" min="1" max="100" step="1" />

<!-- Harga dalam ribuan: kelipatan 500.000 -->
<input type="number" name="harga" min="500000" max="50000000" step="500000" />

<!-- Tanggal: hanya boleh tanggal mulai hari ini ke depan -->
<input type="date" name="deadline" min="2025-01-01" />

<!-- Waktu: hanya antara 09:00 - 17:00 -->
<input type="time" name="jam_meeting" min="09:00" max="17:00" step="1800" />
<!-- step="1800" = kelipatan 30 menit (dalam detik) -->
```

---

### 4. `pattern` — Pola Format Kustom (Regular Expression)

Atribut `pattern` memvalidasi isian menggunakan **Regular Expression (Regex)** — sebuah bahasa pola untuk mendeskripsikan format teks tertentu.

Jangan khawatir jika kamu belum familiar dengan Regex — kita cukup menggunakan pola yang sudah ada.

```html
<!-- Hanya angka, 10-13 digit (format nomor HP Indonesia) -->
<input 
  type="tel" 
  name="nomor_hp" 
  pattern="[0-9]{10,13}" 
  title="Masukkan nomor HP 10-13 digit (tanpa spasi atau tanda hubung)"
/>
```

```html
<!-- Hanya huruf besar dan kecil, minimal 8 karakter (password sederhana) -->
<input 
  type="password" 
  name="sandi" 
  pattern="[a-zA-Z0-9]{8,}"
  title="Kata sandi minimal 8 karakter, hanya huruf dan angka"
/>
```

```html
<!-- Kode pos Indonesia: 5 digit angka -->
<input 
  type="text" 
  name="kode_pos" 
  pattern="[0-9]{5}"
  title="Kode pos harus berupa 5 digit angka"
  placeholder="Contoh: 40123"
/>
```

**Atribut `title` pada `pattern`:**
Selalu sertakan `title` ketika menggunakan `pattern`. Teks di `title` akan muncul sebagai tooltip pesan kesalahan yang menjelaskan kepada pengguna format yang diinginkan. Tanpa `title`, pesan error browser hanya menampilkan "Silakan sesuaikan dengan format yang diminta" — tidak membantu sama sekali.

---

### 5. `type` sebagai Validasi Implisit

Jangan lupa bahwa beberapa atribut `type` sudah memberikan validasi secara otomatis:

```html
<!-- Otomatis validasi: harus mengandung @ dan domain -->
<input type="email" name="email" />

<!-- Otomatis validasi: harus dimulai dengan http:// atau https:// -->
<input type="url" name="website" />

<!-- Hanya menerima angka -->
<input type="number" name="usia" />
```

Ini adalah validasi level pertama yang tidak perlu `pattern` sama sekali.

---

## 🔍 Cara Kerja Validasi Browser

Ketika pengguna menekan tombol submit, browser melakukan proses berikut secara berurutan:

1. **Browser menemukan form yang di-submit.**
2. **Browser memeriksa setiap input satu per satu** dari atas ke bawah.
3. **Untuk setiap input, browser memeriksa:**
   - Apakah ada `required` dan input masih kosong?
   - Apakah `type="email"` dan format tidak valid?
   - Apakah ada `minlength` dan teks terlalu pendek?
   - Apakah ada `pattern` dan teks tidak cocok pola?
   - Dan seterusnya...
4. **Jika ada input yang tidak lolos:**
   - Form TIDAK dikirim.
   - Browser secara otomatis menampilkan pesan error di bawah input yang bermasalah.
   - Browser melakukan *scroll* ke input pertama yang bermasalah dan memberikan *focus* padanya.
5. **Jika semua input lolos:** Form dikirim ke `action`.

---

## 🎨 Pseudo-class CSS untuk Validasi

CSS menyediakan *pseudo-class* yang berubah berdasarkan status validasi input:

```css
/* Input yang valid (sesuai semua aturan validasi) */
input:valid {
  border-color: green;
}

/* Input yang tidak valid */
input:invalid {
  border-color: red;
}

/* Input yang memiliki required dan sudah diisi */
input:required:valid {
  background-color: #f0fff4;
}
```

Ini berguna untuk memberikan *visual feedback* secara real-time kepada pengguna.

---

## ⚠️ Menonaktifkan Validasi Browser: `novalidate`

Terkadang kita ingin menangani validasi secara manual menggunakan JavaScript — misalnya untuk pesan error yang lebih kustom. Dalam kasus ini, kita bisa menonaktifkan validasi bawaan browser:

```html
<form action="/proses" method="POST" novalidate>
  <!-- Validasi akan dilakukan oleh JavaScript, bukan browser -->
</form>
```

Atau kita bisa menonaktifkan hanya untuk tombol tertentu:
```html
<button type="submit" formnovalidate>Simpan sebagai Draft</button>
```

---

## 🚨 Konsep Terpenting: Mengapa HTML Validation Bukan Keamanan

Ini adalah konsep yang **wajib ditanamkan** sejak awal, karena banyak developer pemula yang membuat kesalahan fatal ini.

### Simulasi: Melewati Validasi HTML dalam 30 Detik

Bayangkan kamu membuat form login dengan `required` pada semua input:

```html
<form action="/login" method="POST">
  <input type="email" name="email" required />
  <input type="password" name="sandi" minlength="8" required />
  <button type="submit">Masuk</button>
</form>
```

Kamu berpikir: *"Aman! Pengguna tidak bisa submit form kosong."*

Tapi seseorang yang iseng membuka DevTools (F12) → Elements, lalu menemukan tag `<input>` dan menghapus atribut `required`... dan klik submit.

Form terkirim dengan email dan password kosong.

### Mengapa Ini Bisa Terjadi?

Karena HTML adalah teks yang berjalan di komputer **pengguna**. Pengguna memiliki kendali penuh atas HTML yang ditampilkan di browsernya — mereka bisa mengubahnya sesuka hati menggunakan DevTools.

Ketika validasi HTML berkata "tidak boleh", itu hanya pesan dari HTML ke browser. Pengguna bisa menghapus pesan itu kapanpun.

### Analogi yang Tepat

Client-side validation adalah seperti **petugas keamanan di pintu masuk** yang memeriksa kartu undangan. Berguna untuk mencegah tamu yang masuk secara tidak sengaja tanpa undangan. Tapi jika tamu memaksa masuk dan mengabaikan petugas, tidak ada yang bisa mencegah.

Server-side validation adalah seperti **sistem kunci di dalam gedung**. Tidak peduli bagaimana tamu masuk, mereka tetap butuh kunci yang benar untuk membuka pintu.

**Kesimpulan:**

| | Client-Side Validation | Server-Side Validation |
|---|---|---|
| **Berjalan di mana?** | Browser pengguna | Server kamu |
| **Bisa dimanipulasi?** | Ya (sangat mudah) | Tidak |
| **Tujuan utama** | Kenyamanan pengguna (UX) | Keamanan data |
| **Wajib ada?** | Sangat direkomendasikan | **WAJIB** |

---

## 📋 Checkpoint Pemahaman

Sebelum melanjutkan, pastikan kamu bisa menjawab pertanyaan-pertanyaan ini:

1. Apa perbedaan antara `minlength` dan `min`?
2. Mengapa opsi pertama `<select>` sebaiknya memiliki `value=""`?
3. Apa fungsi atribut `title` ketika digunakan bersama `pattern`?
4. Jika seorang pengguna menghapus atribut `required` via DevTools dan submit form — apakah kamu bisa mencegahnya dari sisi HTML?
5. Mengapa validasi server-side wajib meski validasi browser sudah ada?

Jika kamu bisa menjawab semua pertanyaan di atas dengan yakin, kamu siap melangkah ke Studi Kasus!

---

Mari kita terapkan semua yang telah dipelajari ke dalam project portfolio kita.

**[Lanjut: Studi Kasus →](/bab6/studi-kasus/)**
