---
title: "Mini Project"
description: Buat dan lengkapi Contact & Project Inquiry Form interaktif dengan validasi input bawaan di halaman utama portfolio.
---

Saatnya melanjutkan pengembangan proyek portfolio pribadimu! Di bab ini, kita akan mengubah bagian Kontak di file `index.html` menjadi formulir interaktif (**Contact & Project Inquiry Form**) yang lengkap dengan pengelompokan dan validasi bawaan.

Proyek ini adalah **versi pembaruan (v0.6)** dari halaman portofolio pribadimu.

---

## 🎯 Deskripsi Project

Buka kembali file `index.html` di editor VS Code-mu, lalu modifikasi bagian Kontak agar:
- Seluruh isian dibungkus oleh tag `<form>` dengan metode `POST`.
- Isian dikelompokkan rapi menggunakan tag `<fieldset>` dan `<legend>`.
- Menyediakan isian **Nama Lengkap** (input text), **Alamat Email** (input email), **Pilihan Inquiry** (dropdown select), **Pesan Utama** (textarea), dan **Checkbox Persetujuan** (checkbox).
- Memiliki tombol pengiriman (`<button type="submit">`).
- Menerapkan atribut validasi `required` dan batasan panjang karakter `minlength`.

---

## 📋 Requirements Wajib

### A. Struktur Formulir & Hubungan Label (40 poin)

- [ ] Seluruh kolom input wajib dibungkus di dalam tag `<form>` dengan atribut `method="POST"` dan `action="/proses-kontak.html"`.
- [ ] Kelompokkan isian menggunakan tag `<fieldset>` yang memiliki judul kelompok `<legend>Hubungi Saya</legend>`.
- [ ] Setiap isian wajib memiliki tag `<label>` yang terhubung secara aksesibel dengan tag inputnya masing-masing menggunakan atribut **`for`** (pada label) dan **`id`** (pada input) dengan nilai yang sama persis.
- [ ] Setiap input dan pilihan wajib menyertakan atribut **`name`** sebagai kunci pengiriman data ke server.

### B. Variasi Elemen Input & Validasi HTML5 (40 poin)

- [ ] **Nama Lengkap**: Gunakan `<input type="text">` yang memiliki atribut `required` dan `minlength="3"`.
- [ ] **Alamat Email**: Gunakan `<input type="email">` dengan atribut `required`.
- [ ] **Kategori Kepentingan**: Gunakan tag `<select>` yang memiliki minimal 3 pilihan `<option>` bertema kolaborasi (misal: tanya proyek, tawaran magang, say hello) dengan opsi pertama kosong. Atribut `required` harus terpasang di tag select.
- [ ] **Pesan Detail**: Gunakan tag `<textarea>` yang memiliki atribut `required` dan `minlength="10"`.
- [ ] **Persetujuan**: Gunakan `<input type="checkbox">` di bagian bawah dengan atribut `required` sebagai persetujuan pengiriman data.
- [ ] **Tombol Kirim**: Gunakan tag `<button type="submit">` untuk memicu pengiriman formulir.

### C. Kualitas Kode & Validasi (20 poin)

- [ ] Gunakan penulisan atribut menggunakan huruf kecil (*lowercase*) dan gunakan tanda kutip ganda secara konsisten.
- [ ] Gunakan indentasi 2 spasi secara disiplin untuk merapikan tingkatan tag anak di dalam `<fieldset>`.
- [ ] **0 Error** di W3C Validator (`validator.w3.org`) untuk file `index.html` milikmu.

---

## 📝 Contoh Referensi Kode Pembantu

Gunakan potongan kode ini sebagai referensi penempatan struktur form di dalam file `index.html` milikmu:

```html
<h2 id="kontak">Hubungi Saya</h2>
<form action="/proses.html" method="POST">
  <fieldset>
    <legend>Kirim Pesan</legend>
    
    <p>
      <label for="id-nama">Nama Lengkap:</label><br />
      <input type="text" id="id-nama" name="user_name" minlength="3" required />
    </p>
    
    <p>
      <label for="id-email">Email:</label><br />
      <input type="email" id="id-email" name="user_email" required />
    </p>
    
    <p>
      <label for="id-layanan">Layanan:</label><br />
      <select id="id-layanan" name="user_service" required>
        <option value="">-- Pilih --</option>
        <option value="dev">Development</option>
      </select>
    </p>
    
    <p>
      <label for="id-pesan">Pesan:</label><br />
      <textarea id="id-pesan" name="user_message" rows="4" minlength="10" required></textarea>
    </p>
    
    <p>
      <input type="checkbox" id="id-setuju" name="user_consent" value="setuju" required />
      <label for="id-setuju">Saya setuju data ini dikirim.</label>
    </p>
    
    <p>
      <button type="submit">Kirim</button>
    </p>
  </fieldset>
</form>
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin Maksimal |
|---|---|---|
| **Struktur & Aksesibilitas** | Tag form, fieldset, legend terpasang valid, for-id pada label terhubung secara presisi. | 40 |
| **Pilihan Input & Validasi** | Menyediakan input text, email, select dropdown, textarea, dan checkbox persetujuan dengan atribut required & minlength. | 40 |
| **Tombol & Kualitas W3C** | Tombol submit terpasang benar, dokumentasi kode lolos uji validator resmi. | 20 |
| **Total** | | **100** |

---

## ✅ Checklist Sebelum Mengumpulkan

Buka file `index.html` di browsermu lewat Live Server, lalu pastikan:
```
☐ Mengetik di dalam kotak isian teks menyembunyikan input kata sandi (jika ada).
☐ Mengklik tulisan teks label (seperti label nama) otomatis memindahkan kursor ke dalam kotak input terkait.
☐ Mengosongkan kolom penting lalu mengklik tombol Kirim memicu pesan peringatan "Harap isi kolom ini" dari browser.
☐ Formulir kontak dibungkus rapi oleh garis bingkai fieldset.
☐ File HTML lolos uji validasi di validator.w3.org dengan warna hijau.
```

Portfolio pribadimu sekarang sudah interaktif dan siap menerima pesan dari pengunjung! Pada bab selanjutnya, kita akan membedah konsep **HTML Attributes** secara mendalam.

**[Lanjut: Challenge →](/bab6/challenge/)**
