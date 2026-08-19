---
title: "Challenge"
description: Tantangan berjenjang untuk menguji pemahaman Web Accessibility — dari analisis kegagalan aksesibilitas hingga penulisan alt text, keyboard navigation, dan audit ARIA.
---

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan semua tantangan ini, kamu akan mampu:
- Menemukan dan memperbaiki hambatan aksesibilitas pada kode HTML.
- Menulis alt text yang tepat untuk berbagai konteks gambar.
- Membedakan antara komponen yang accessible dan yang merusak navigasi keyboard.
- Menjelaskan pentingnya "Native HTML First" dari perspektif aksesibilitas.

---

## 🔴 Challenge 1: Audit & Perbaikan Kode (20 poin)

Kode HTML di bawah ini mengandung **7 hambatan aksesibilitas**. Temukan semuanya, jelaskan mengapa itu menjadi hambatan, dan tuliskan versi perbaikannya.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Toko Online</title>
  <style>
    /* Menghapus outline fokus */
    *:focus { outline: none; }
  </style>
</head>
<body>

  <!-- Hambatan 1-7 ada di bawah ini: -->
  <div class="nav">
    <a href="/">Beranda</a>
    <a href="/produk">Produk</a>
    <a href="https://facebook.com/toko" target="_blank">Facebook</a>
  </div>

  <img src="banner-promo.jpg">

  <div class="card">
    <img src="laptop.jpg" alt="Foto dari produk laptop merk Asus warna hitam" />
    <h3>Laptop Asus Gaming</h3>
    <p>Rp 12.500.000</p>
    <div class="btn-beli" onclick="beli()">Beli Sekarang</div>
  </div>

  <form>
    <p>Masukkan Email Kamu:</p>
    <input type="text" name="email" placeholder="email@domain.com" />
    <button role="button">Langganan</button>
  </form>

</body>
</html>
```

---

## 🟡 Challenge 2: Menulis Alt Text yang Kontekstual (20 poin)

Tentukan atribut `alt` yang paling tepat untuk masing-masing situasi berikut:

1. **Situasi A:** Foto profil seorang developer di halaman "Tentang Saya" pada website portfolio.
2. **Situasi B:** Logo perusahaan berupa ikon rumah 🏠 yang ada di sebelah tulisan `<span>Beranda</span>` pada header.
3. **Situasi C:** Ikon pencarian 🔍 di dalam tombol pencarian yang tidak memiliki teks apapun.
4. **Situasi D:** Sebuah grafik batang yang menunjukkan persentase pengguna browser (Chrome 65%, Safari 18%, Firefox 7%).
5. **Situasi E:** Garis pembatas hiasan berwarna emas yang dipasang di antara dua bagian artikel.
6. **Situasi F:** Foto produk sepatu olahraga di website e-commerce yang diklik untuk melihat detail.

---

## 🟠 Challenge 3: Benar atau Salah? (20 poin)

Tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut dan berikan penjelasan singkat:

1. `alt=""` (alt kosong) sama artinya dengan tidak memasang atribut `alt` sama sekali.
2. Kebanyakan pengguna yang diuntungkan oleh web accessibility adalah orang tunanetra yang menggunakan screen reader.
3. Menghapus `outline: none` pada CSS `:focus` adalah praktik yang baik agar tampilan tombol terlihat lebih bersih.
4. Membuat tombol dari `<div role="button">` sudah cukup membuat tombol tersebut bisa dioperasikan oleh pengguna keyboard.
5. ARIA harus ditambahkan ke semua elemen HTML agar website dianggap fully accessible.
6. Skip Navigation link harus diletakkan sebagai elemen pertama di dalam `<body>`.
7. Atribut `placeholder` pada input dapat digunakan sebagai pengganti tag `<label>`.
8. Menambahkan `target="_blank"` pada link eksternal sebaiknya disertai informasi `aria-label` bahwa link terbuka di tab baru.

---

## 🔵 Challenge 4: Implementasi Accessible Modal Dialog (20 poin)

Buatlah markup HTML yang aksesibel untuk sebuah **Modal Dialog Konfirmasi** yang muncul ketika pengguna hendak menghapus suatu item.

**Persyaratan:**
- Gunakan `role="dialog"` dan `aria-modal="true"`.
- Hubungkan judul modal dengan `aria-labelledby`.
- Hubungkan pesan penjelasan dengan `aria-describedby`.
- Sediakan tombol "Ya, Hapus" (submit/action) dan tombol "Batal" (`type="button"`).
- Pastikan semua elemen tombol dapat difokus via keyboard.

```html
<!-- Tulis struktur HTML lengkap untuk modal ini -->
```

---

## ⚫ Challenge 5: Analisis Mendalam (20 poin)

Jawablah pertanyaan-pertanyaan berikut dalam bentuk tulisan analitis:

**Pertanyaan 1:**
Jelaskan filosofi **"Native HTML First"** dalam aksesibilitas web. Mengapa menggunakan `<button>` jauh lebih baik daripada `<div role="button" tabindex="0">` dari perspektif fungsionalitas, pemeliharaan kode, dan dukungan assistive technology?

**Pertanyaan 2:**
Seorang pengembang berkata: *"Website saya hanya untuk internal kantor dan semua karyawan di kantor kami tidak ada yang tunanetra, jadi kami tidak perlu memikirkan accessibility."*

Berdasarkan apa yang sudah kamu pelajari tentang hambatan sementara (*temporary*) dan situasional (*contextual*), berikan minimal 4 argumen mengapa alasan pengembang tersebut keliru.

**Pertanyaan 3:**
Jelaskan prinsip **POUR** (Perceivable, Operable, Understandable, Robust) dari WCAG dan berikan masing-masing 1 contoh konkret penerapan HTML-nya pada formulir kontak.

---

## 📊 Rubrik Penilaian

| Challenge | Poin | Kriteria |
|---|---|---|
| 1: Audit Kode | 20 | Menemukan 7 hambatan + penjelasan + perbaikan tepat |
| 2: Alt Text Kontekstual | 20 | Alt text tepat untuk 6 situasi |
| 3: Benar/Salah | 20 | Jawaban benar/salah tepat + penjelasan akurat |
| 4: Accessible Modal | 20 | Modal dialog dengan role, aria-labelledby, describedby, keyboard-friendly |
| 5: Analisis Mendalam | 20 | Jawaban analitis mendalam, logis, tidak sekadar definisi |
| **Total** | **100** | |

---

**[Lanjut: Error Corner →](/bab10/error-corner/)**
