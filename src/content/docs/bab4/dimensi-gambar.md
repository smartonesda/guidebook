---
title: "Dimensi Gambar"
description: Memahami fungsi atribut width dan height pada tag img untuk mencegah Cumulative Layout Shift (CLS).
---

Saat menampilkan gambar di halaman web, browser memerlukan informasi mengenai ukuran gambar tersebut agar bisa menyiapkan ruang kosong di halaman sebelum gambarnya selesai terunduh.

Untuk itulah kita wajib menyertakan atribut **`width`** (lebar) dan **`height`** (tinggi) di dalam tag `<img>`.

---

## 📏 Intrinsic Dimensions vs Rendered Dimensions

- **Intrinsic Dimensions**: Ukuran asli file gambar saat dibuat (misalnya foto hasil jepretan kamera berukuran asli 1920 piksel × 1080 piksel).
- **Rendered Dimensions**: Ukuran gambar saat ditampilkan di layar browser setelah diatur oleh atribut HTML atau stylesheet CSS.

```html
<!-- Mengatur gambar berukuran asli besar agar tampil berukuran 300px x 200px -->
<img src="foto.jpg" alt="Ilustrasi" width="300" height="200" />
```

*Catatan: Nilai pada atribut `width` dan `height` di HTML5 ditulis berupa angka saja tanpa satuan (otomatis dihitung sebagai piksel oleh browser).*

---

## ⚡ Mencegah Pergeseran Tampilan: Cumulative Layout Shift (CLS)

Pernahkah kamu membuka sebuah website di HP, lalu saat kamu ingin mengklik sebuah tombol, tiba-tiba tombol tersebut bergeser ke bawah karena ada gambar di atasnya yang baru selesai dimuat? Hal ini sangat menjengkelkan bagi pengguna.

Masalah pergeseran tata letak halaman ini disebut **Cumulative Layout Shift (CLS)**.

```text
Browser memuat teks
      ↓
(Tanpa dimensi gambar: browser tidak tahu ukuran gambar)
      ↓
Browser menggambar tombol tepat di bawah teks
      ↓
Gambar selesai terunduh
      ↓
Browser terpaksa mendorong tombol ke bawah secara mendadak! (Layout Shift)
```

Jika kamu menuliskan atribut `width` dan `height` secara benar, browser akan langsung **menahan area kosong** sesuai ukuran tersebut saat halaman pertama kali dibuka, sehingga tombol di bawahnya tidak akan bergeser saat gambarnya selesai dimuat.

---

## 💡 Best Practice Pengaturan Dimensi Gambar

1. **Selalu Tuliskan Ukuran Asli**: Tuliskan rasio ukuran asli gambar di atribut `width` dan `height` HTML-mu.
2. **Ubah Ukuran Menggunakan CSS**: Jika ingin membuat gambar tersebut responsif (menyesuaikan lebar layar HP), gunakan CSS di stylesheet luar. Atribut HTML-mu akan tetap bertindak sebagai penahan rasio (*aspect-ratio*) awal agar halaman stabil.
3. **Hindari Distorsi**: Jangan memasukkan nilai lebar dan tinggi yang tidak proporsional (misalnya gambar persegi panjang dipaksa menjadi kotak dengan memanipulasi tinggi/lebar secara acak), karena akan membuat gambarmu terlihat gepeng atau melar.

Mari kita lanjutkan pembahasan mengenai cara mengelompokkan gambar dan memberikan teks keterangan secara semantik.

**[Lanjut: figure & figcaption →](/bab4/figure-figcaption/)**
