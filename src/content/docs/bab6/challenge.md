---
title: "Challenge"
description: Tantangan mandiri untuk membuktikan pemahaman mendalam tentang Forms HTML5 — dari analisis debugging hingga pembuatan form pendaftaran.
---

Tantangan mandiri ini akan menguji pemahamanmu mengenai bagaimana merancang formulir yang valid, aman, dan aksesibel.

Ada 5 tantangan berjenjang. Selesaikan semuanya!

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan rangkaian tantangan ini, kamu akan mampu:
- Mendiagnosis dan memperbaiki kesalahan sintaks dan atribut pada formulir HTML.
- Menghubungkan label dan input secara aksesibel sesuai standar pembaca layar.
- Mengatur atribut grup yang benar pada tipe radio button dan checkbox.
- Membedakan kapan harus menggunakan metode GET vs POST secara konseptual.

---

## ⭐ Challenge 1: Debugging Kode Form (Mudah)

Temukan **minimal 6 kesalahan** pada penulisan tag dan atribut formulir di bawah ini. Jelaskan mengapa itu salah, dan tuliskan perbaikannya:

```html
<form action="/proses" method="get">
  <label for="nama">Nama Lengkap:</label>
  <input type="text" name="nama" />

  <p>Pilih Jurusan:</p>
  <input type="radio" id="rpl" name="jurusan_rpl" value="rpl" />
  <label for="rpl">RPL</label>
  
  <input type="radio" id="tkj" name="jurusan_tkj" value="tkj" />
  <label for="tkj">TKJ</label>
  
  <p>
    <label for="pesan">Pesan:</label>
    <textarea id="pesan_detail" required></textarea>
  </p>
  
  <button>Kirim Data</button>
</form>
```

---

## ⭐⭐ Challenge 2: Menghubungkan Aksesibilitas Label (Menengah)

Diberikan 3 buah isian input tanpa label di bawah ini. Ubahlah kode berikut dengan memasangkan tag `<label>` yang tepat secara aksesibel (ketika label diklik, kursor otomatis berpindah fokus ke dalam input):

1. **Input A**: Kotak isian untuk Kata Sandi (Password).
   - *Kode Asal*: `<input type="password" name="user_pass" />`
2. **Input B**: Pilihan persetujuan berlangganan buletin berita (Checkbox).
   - *Kode Asal*: `<input type="checkbox" name="subscribe" value="yes" />`
3. **Input C**: Kotak isian untuk mengunggah Berkas CV (File).
   - *Kode Asal*: `<input type="file" name="user_cv" />`

*Tuliskan kode perbaikannya secara lengkap di file latihanmu.*

---

## ⭐⭐ Challenge 3: Merancang Formulir Registrasi Siswa Baru (Menengah)

Buatlah sebuah dokumen HTML valid yang menampilkan formulir pendaftaran siswa baru SMK.

**Ketentuan:**
- Menggunakan metode `POST` untuk keamanan pengiriman data.
- Kelompokkan isian menggunakan `<fieldset>` dan `<legend>`.
- Wajib memiliki isian: Nama (text), Email (email), Tanggal Lahir (date), Nomor HP (tel), Jenis Kelamin (radio button grup), dan Asal Sekolah (text).
- Semua kolom wajib diisi (`required`).
- Tombol kirim harus memiliki tipe yang jelas (`type="submit"`).

---

## ⭐⭐⭐ Challenge 4: Formulir Penawaran Jasa Proyek Lengkap (Menengah-Sulit)

Buatlah struktur formulir inquiry proyek lanjutan untuk halaman portfolio.

**Ketentuan:**
- **Pilihan Paket**: Gunakan menu dropdown `<select>` berisi pilihan paket: *Pembuatan Landing Page*, *Website Sekolah*, atau *Aplikasi Sistem Informasi*.
- **Estimasi Anggaran (Budget)**: Gunakan sekelompok radio button (minimal 3 opsi, misalnya: *< Rp 5 Juta*, *Rp 5 - 10 Juta*, *> Rp 10 Juta*) dengan atribut `name` yang sama agar terkelompok secara seragam.
- **Validasi Pola**: Tambahkan input teks untuk Nomor Whatsapp Pengirim yang wajib diawali dengan angka `08` dan minimal memiliki 10 karakter menggunakan atribut `pattern` dan `minlength`.

---

## ⭐⭐⭐ Challenge 5: Uji Coba Keamanan Validasi HTML (Sulit)

Jawablah pertanyaan-pertanyaan di bawah ini menggunakan komentar HTML di bagian bawah dokumen latihanmu:

1. **Pertanyaan 1**: Seseorang membuat formulir login dengan memasang atribut `required` di input password. Ia mengklaim bahwa website-nya sudah 100% aman karena pengunjung tidak akan bisa mengirimkan kata sandi kosong ke server. Apakah klaim ini benar? Mengapa? Jelaskan cara membobol validasi tersebut menggunakan Chrome DevTools!
2. **Pertanyaan 2**: Mengapa kita dilarang menggunakan metode `method="GET"` saat merancang formulir pengisian kata sandi (*password*) atau data kartu kredit? Apa bahaya konkretnya bagi keamanan data pengguna?

---

## 📊 Cara Penilaian

| Challenge | Poin Maksimal | Kriteria Keberhasilan |
|---|---|---|
| 1: Debugging | 20 | Menemukan 6 kesalahan tag/atribut form dan menuliskan perbaikannya. |
| 2: Aksesibilitas | 20 | Menghubungkan label-input untuk password, checkbox, dan file secara tepat. |
| 3: Form Registrasi | 20 | Merancang form registrasi lengkap bertema sekolah menggunakan tag form semantik. |
| 4: Inquiry Jasa | 20 | Menggabungkan select, radio button grup, dan validation pattern dengan benar. |
| 5: Keamanan Validasi | 20 | Memberikan jawaban analitis yang mendalam mengenai batas client-side validation & GET method. |
| **Total** | **100** | |

---

## ➡ Pelajaran Berikutnya

Tantangan di atas menguji pemahaman logismu tentang form. Sekarang, mari kita lihat kompilasi kesalahan umum penataan form pada halaman berikutnya sebelum melangkah ke ringkasan bab.

**[Lanjut: Error Corner →](/bab6/error-corner/)**
