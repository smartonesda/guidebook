---
title: "Heading h1–h6"
description: Memahami fungsi heading h1–h6 sebagai struktur dokumen, bukan sekadar ukuran font.
---

Saat membaca koran atau artikel berita online, hal pertama yang menarik perhatianmu pasti adalah judul utamanya yang besar. Di bawah judul utama, biasanya ada sub-judul yang ukurannya sedikit lebih kecil untuk membagi berita menjadi beberapa bagian.

Di dalam HTML, kita merepresentasikan judul-judul ini menggunakan tag **Heading** dari `<h1>` sampai `<h6>`.

---

## 🏗️ Heading Sebagai Struktur Dokumen, Bukan Ukuran!

Salah satu kesalahan terbesar pemula adalah memilih tag heading berdasarkan **ukuran hurufnya**.
- *"Saya pakai h3 saja ah, soalnya kalau h1 terlalu besar teksnya."* → **Ini adalah cara berpikir yang salah!**

Di dalam HTML, tag heading menunjukkan **tingkatan kepentingan struktural**, bukan ukuran visual. Ukuran besar-kecilnya huruf adalah tugas CSS. Browser memang memberikan ukuran default (h1 paling besar, h6 paling kecil), tetapi itu hanya tampilan bawaan.

Secara semantik, inilah arti dari tingkatan heading:

```text
<h1> ─── Judul Utama Halaman (Topik Utama)
  ├── <h2> ─── Sub-topik Utama (Bagian Besar)
  │     ├── <h3> ─── Anak Sub-topik (Detail Bagian)
  │     └── <h3> ─── Anak Sub-topik Lain
  └── <h2> ─── Sub-topik Utama Kedua
```

---

## ♿ Hubungan Heading dengan Aksesibilitas dan SEO

Mengapa kita harus tertib dalam menyusun heading?

### 1. Membantu Screen Reader (Aksesibilitas)
Pengguna tunanetra menggunakan alat pembaca layar (*screen reader*) untuk menjelajahi website. Alat ini akan membaca daftar heading terlebih dahulu agar pengguna mendapatkan gambaran besar isi halaman. Jika hierarki heading-mu melompat (misal h1 langsung ke h4), pengguna akan bingung dan mengira ada bagian konten yang hilang.

### 2. Membantu Google (SEO)
Robot mesin pencari seperti Google membaca heading untuk mengindeks halamanmu secara cerdas. Judul utama di tag `<h1>` memberikan sinyal terkuat mengenai isi website-mu kepada Google.

---

## 🚫 Kesalahan Umum: Melompat Tingkat

```html
<!-- ❌ SALAH: Melompat tingkat dari h1 ke h3 karena ukurannya pas -->
<h1>Kumpulan Resep Kue</h1>
<h3>Resep Nastar</h3>
<p>Bahan-bahan...</p>

<!-- ✅ BENAR: Berurutan tanpa melompat tingkat -->
<h1>Kumpulan Resep Kue</h1>
<h2>Resep Nastar</h2>
<p>Bahan-bahan...</p>
```

---

## 💡 Best Practice Penggunaan Heading

1. **Satu `<h1>` Per Halaman**: Gunakan hanya satu tag `<h1>` di setiap halaman web. Ini harus menjadi judul utama halaman tersebut.
2. **Berurutan**: Jangan pernah melompat dari `<h1>` langsung ke `<h3>`. Gunakan `<h2>` terlebih dahulu sebagai perantara.
3. **Jangan Gunakan Heading untuk Menebalkan Teks Biasa**: Jika kamu hanya ingin membuat teks paragraf menjadi tebal, gunakan tag pemformatan teks (seperti `<strong>` yang akan kita pelajari nanti), jangan gunakan tag heading.

Mari kita lanjutkan pembahasan ke elemen pengelompokan teks paragraf.

**[Lanjut: Paragraf →](/bab2/paragraf/)**
