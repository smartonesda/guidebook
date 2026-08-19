---
title: "Challenge"
description: Tantangan mandiri untuk membuktikan pemahaman mendalam tentang HTML Fundamentals — dari detektif kode hingga aturan LIFO.
---

Challenge ini dirancang untuk melatih kemampuan analisis, pemecahan masalah (*debugging*), dan pemahaman model mental dasar HTML milikmu. 

Kerjakan seluruh tantangan ini menggunakan **hanya tag dasar yang sudah dipelajari di BAB 1**.

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan rangkaian tantangan ini, kamu akan mampu:
- Menemukan dan memperbaiki kesalahan sintaks dasar HTML secara mandiri.
- Memahami dampak nyata dari ketiadaan deklarasi DOCTYPE di browser.
- Menerapkan aturan nesting LIFO (Last In, First Out) secara presisi.
- Menganalisis dan menyusun tingkat hierarki heading yang logis.

---

## ⭐ Challenge 1: Detektif Kode (Mudah)

Temukan **minimal 8 kesalahan** pada penulisan kode HTML di bawah ini. Jelaskan bagian mana yang salah, mengapa itu salah, dan bagaimana memperbaikinya:

```html
<HTML>
<Head>
<meta charset=UTF-8>
<title>Halaman Latihanku<title>
<meta name=viewport content="width=device-width">
</head>
<Body>
<H1>Profil Siswa RPL
<H3>Selamat Datang di Halaman Saya</H3>
<p>Nama saya <strong>Rudi Hermawan.<p></strong>
<p>Saya sedang belajar struktur dasar HTML.
</Body>
</HTML>
```

---

## ⭐⭐ Challenge 2: Eksperimen Quirks Mode (Menengah)

Lakukan eksperimen mandiri ini di browsermu untuk melihat perbedaan penafsiran browser terhadap halaman web yang tidak memiliki deklarasi DOCTYPE:

1. Buat file bernama `quirks-test.html` di VS Code.
2. Salin kode di bawah ini (sengaja tanpa `<!DOCTYPE html>` di baris pertama):

```html
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Uji Coba Quirks Mode</title>
  <style>
    .box {
      width: 300px;
      padding: 20px;
      border: 5px solid #ff5533;
    }
  </style>
</head>
<body>
  <div class="box">
    Berapakah lebar aktual kotak ini di browser?
  </div>
</body>
</html>
```

3. Jalankan file di browser menggunakan Live Server.
4. Buka **DevTools** (`F12`), masuk ke tab **Console**, lalu ketik perintah ini dan tekan Enter:
   ```javascript
   document.compatMode
   ```
   *Catatan: Catat nilai yang muncul di Console.*
5. Sekarang, tambahkan tag `<!DOCTYPE html>` di baris paling pertama file `quirks-test.html` milikmu. Simpan file.
6. Perhatikan Console kembali, lalu jalankan perintah `document.compatMode` sekali lagi.
7. **Jawablah pertanyaan ini**:
   - Apa perbedaan nilai yang dikembalikan oleh `document.compatMode` sebelum dan setelah dipasang DOCTYPE? Apa arti dari masing-masing nilai tersebut?
   - Mengapa meletakkan deklarasi DOCTYPE di baris pertama sangat wajib bagi seorang web developer profesional?

---

## ⭐⭐ Challenge 3: Analisis Struktur Web Asli (Menengah)

Pilihlah salah satu situs besar (misalnya: `wikipedia.org`, `google.com`, atau `github.com`). Buka situs tersebut di browsermu, lalu lakukan penyelidikan berikut:

1. Tampilkan kode sumbernya (Klik kanan → **View Page Source** atau tekan `Ctrl + U`).
2. Periksa baris paling pertama: Apakah mereka menggunakan deklarasi DOCTYPE? Tuliskan bagaimana mereka menulisnya.
3. Carilah tag `<html>`: Apakah mereka menyertakan atribut `lang`? Apa nilai bahasa yang mereka gunakan?
4. Carilah tag `<title>`: Apa judul halaman yang mereka gunakan?
5. Carilah tag `<meta charset>`: Jenis karakter set apa yang mereka gunakan?

Tuliskan temuanmu dalam bentuk laporan teks sederhana menggunakan komentar HTML (`<!-- -->`) di dalam file latihanmu.

---

## ⭐⭐⭐ Challenge 4: Menyusun Hierarki Heading Sekolah (Menengah-Sulit)

Buatlah sebuah kerangka dokumen HTML untuk menggambarkan struktur kepemimpinan dan organisasi di sekolahmu.

**Ketentuan:**
- Wajib menggunakan `<!DOCTYPE html>` dan struktur dasar lengkap yang valid.
- Gunakan tag heading `<h1>` hingga `<h6>` untuk menunjukkan tingkatan hierarki organisasi secara logis (tidak boleh melompat tingkat, misalnya dari `<h1>` langsung lompat ke `<h4>`).
- Tambahkan deskripsi singkat di bawah masing-masing tingkatan menggunakan tag paragraph (`<p>`).

*Contoh struktur:*
- Judul Utama Halaman (Struktur Sekolah)
  - Kepala Sekolah
    - Wakil Kepala Sekolah Bidang Kurikulum
      - Ketua Jurusan RPL
        - Wali Kelas X RPL
        - Wali Kelas XI RPL
    - Wakil Kepala Sekolah Bidang Kesiswaan

---

## ⭐⭐⭐ Challenge 5: Detektif Aturan LIFO (Sulit)

Aturan LIFO (*Last In, First Out*) sangat penting dalam nesting tag HTML. Periksa apakah penulisan penutupan tag pada contoh-contoh di bawah ini sudah benar atau salah. Jika salah, tuliskan bagaimana perbaikan kode yang benarnya:

- **Kasus A**:
  ```html
  <p>Hari ini saya belajar <strong>HTML dasar dan <em>anatomi tag</strong></em>.</p>
  ```
- **Kasus B**:
  ```html
  <p>Gunakan komentar untuk <strong>menandai bagian kode yang penting</strong>.</p>
  ```
- **Kasus C**:
  ```html
  <p>Penting untuk selalu <em>memvalidasi kode kita di <strong>HTML Validator</em></strong>.</p>
  ```

---

## 📊 Cara Penilaian

| Challenge | Kriteria Keberhasilan | Poin Maksimal |
|---|---|---|
| 1: Detektif Kode | Berhasil menemukan dan menjelaskan minimal 8 kesalahan. | 20 |
| 2: Quirks Mode | Berhasil menjawab pertanyaan eksperimen dengan analisis yang benar. | 25 |
| 3: Analisis Web | Menyajikan laporan temuan struktur web asli dengan lengkap. | 15 |
| 4: Hierarki Heading | Menyusun struktur organisasi sekolah dengan hierarki heading h1–h6 yang logis dan runtut. | 20 |
| 5: Detektif LIFO | Mengidentifikasi kesalahan nesting dan menulis perbaikannya dengan benar. | 20 |
| **Total** | | **100** |

---

## ➡ Pelajaran Berikutnya

Tantangan di atas menguji pemahamanmu secara menyeluruh. Sekarang, mari kita lihat kompilasi ringkasan dan checklist penutup dari seluruh rangkaian pembelajaran di BAB 1.

**[Lanjut: Ringkasan →](/bab1/ringkasan/)**
