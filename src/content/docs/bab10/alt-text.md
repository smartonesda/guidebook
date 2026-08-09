---
title: "Alt Text yang Baik"
description: Memahami atribut alt pada elemen gambar — mengapa alt text penting, perbedaan gambar informatif vs dekoratif, dan panduan menulis alt text yang benar-benar membantu.
---

Atribut `alt` (alternative text) pada elemen `<img>` adalah salah satu fitur aksesibilitas yang paling sering dibahas, tetapi juga yang **paling sering ditulis dengan salah**.

Banyak pemula mengira asal memasang `alt="gambar"` atau `alt="foto"` itu sudah cukup. Padahal alt text yang buruk kadang lebih membingungkan daripada tidak ada alt text sama sekali.

Di halaman ini, kita akan mempelajari cara menulis alt text yang benar-benar bermakna.

---

## 🎯 Mengapa Alt Text Penting?

Alt text melayani tiga kelompok pengguna:

1. **Pengguna Screen Reader** — screen reader membacakan alt text ketika menemukan gambar. Tanpa alt text, screen reader hanya membaca "image" atau membacakan nama file yang aneh seperti "IMG_20260810_123456.jpg".
2. **Pengguna dengan Koneksi Lambat** — jika gambar gagal dimuat, browser menampilkan alt text di tempat gambar tersebut seharusnya berada.
3. **Search Engine (Google)** — bot search engine tidak bisa "melihat" gambar; mereka membaca alt text untuk memahami konten gambar tersebut untuk indexing.

---

## 🧭 Pertanyaan Pertama: Gambar Informatif atau Dekoratif?

Sebelum menulis alt text, tanyakan satu pertanyaan ini:

> *"Apakah gambar ini menyampaikan informasi yang penting bagi pengguna, atau hanya sekadar hiasan visual?"*

### A. Gambar Informatif
Gambar yang membawa informasi yang jika dihilangkan, pengguna akan kehilangan makna dari konten tersebut.

**Aturan:** Wajib memiliki alt text yang mendeskripsikan **makna/informasi** gambar tersebut.

```html
<!-- ✅ Gambar informatif: alt menjelaskan informasinya -->
<img 
  src="grafik-penjualan.png" 
  alt="Grafik menunjukkan peningkatan penjualan sebesar 35% dari Januari hingga Juni 2025" 
/>
```

### B. Gambar Dekoratif
Gambar yang hanya berfungsi sebagai pemanis visual (garis hiasan, background abstrak, ikon yang sudah didampingi teks) yang jika dihilangkan, tidak ada informasi yang hilang.

**Aturan:** Gunakan `alt=""` (alt kosong) agar screen reader mengabaikan gambar tersebut sepenuhnya.

```html
<!-- ✅ Gambar dekoratif: gunakan alt="" agar diabaikan screen reader -->
<img src="garis-hiasan.png" alt="" />

<!-- ✅ Ikon yang sudah ada teksnya: gunakan alt="" pada ikon -->
<button>
  <img src="icon-email.svg" alt="" />
  Kirim Email
</button>
<!-- Screen reader hanya membaca "Kirim Email, button" — ikon tidak perlu dibacakan -->
```

> **Perhatian:** `alt=""` (alt kosong) BEDA dengan tidak ada attribute `alt` sama sekali.
> - `alt=""` → "Sengaja diabaikan, ini gambar dekoratif"
> - Tanpa `alt` → "Developer lupa, screen reader akan membacakan nama file"

---

## ✍️ Panduan Menulis Alt Text yang Baik

### 1. Fokus pada MAKNA, bukan sekadar deskripsi visual

```html
<!-- ❌ Buruk: hanya mendeskripsikan apa yang terlihat -->
<img src="foto-rizki.jpg" alt="Seorang pria mengenakan kemeja biru duduk di depan laptop" />

<!-- ✅ Baik: menjelaskan konteks dan maknanya di halaman portfolio -->
<img src="foto-rizki.jpg" alt="Foto potret Rizki Pratama, Junior Web Developer" />
```

### 2. Jangan mulai dengan "Foto dari..." atau "Gambar..."

Screen reader sudah mengumumkan kepada pengguna bahwa elemen ini adalah gambar (misalnya: "graphic, Foto potret Rizki Pratama"). Menulis "Foto dari..." membuat screen reader membacakan: *"graphic, foto dari Rizki Pratama"* — redundan.

```html
<!-- ❌ Redundan -->
<alt="Gambar foto profil Rizki Pratama">

<!-- ✅ Langsung pada intinya -->
<alt="Foto profil Rizki Pratama, Junior Web Developer">
```

Exception: jika jenis gambar memang informasi yang relevan (misalnya "Lukisan cat air...", "Diagram arsitektur..."), sebutkan jenisnya secara spesifik.

### 3. Singkat dan Padat

Alt text yang baik biasanya terdiri dari **1–2 kalimat singkat** (jarang lebih dari 125 karakter). Jika gambar membutuhkan penjelasan yang sangat panjang (seperti diagram kompleks), gunakan penjelasan di teks paragraf utama dan buat alt text merujuk ke paragraf tersebut.

```html
<!-- Gambar kompleks: buat alt singkat dan jelaskan di teks -->
<figure>
  <img src="diagram-arsitektur.png" alt="Diagram arsitektur sistem. Penjelasan detail ada di teks di bawah." />
  <figcaption>
    Diagram menunjukkan tiga layer: Client (Browser), API Gateway, dan Backend Database.
  </figcaption>
</figure>
```

### 4. Sesuaikan dengan Konteks

Gambar yang sama bisa membutuhkan alt text yang berbeda tergantung halaman tempat ia berada.

**Contoh: Foto Gedung Sekolah**

- Di halaman sejarah sekolah: `alt="Gedung SMK Nusantara yang dibangun tahun 1985"`
- Di halaman kontak/lokasi: `alt="Gedung SMK Nusantara lima lantai berwarna biru di Jalan Sudirman"`
- Di artikel tentang renovasi: `alt="Kondisi tampak depan gedung sekolah setelah renovasi tahun 2024"`

---

## 📊 Matriks Pilihan Alt Text

| Jenis Gambar | Contoh | `alt` yang Tepat |
|---|---|---|
| **Foto profil** | Foto diri di portfolio | `alt="Foto potret Rizki Pratama, Junior Web Developer"` |
| **Screenshot proyek** | Tampilan website yang pernah dibuat | `alt="Screenshot halaman utama Website SMK Nusantara yang responsif"` |
| **Ikon dengan teks** | Ikon email di sebelah tulisan "Email" | `alt=""` (dekoratif karena teks sudah ada) |
| **Ikon tanpa teks** | Tombol sampah 🗑️ tanpa teks | `alt="Hapus item ini"` (atau gunakan `aria-label` di tombol) |
| **Diagram/Grafik** | Grafik statistik | `alt="Grafik peningkatan pengguna dari 100 menjadi 500 dalam 6 bulan"` |
| **Garis/Bunga hiasan** | Divider dekoratif | `alt=""` |

---

## 🔍 Cara Menguji Alt Text

1. Matikan gambar di browsermu (via extension atau settings).
2. Baca halaman dari atas ke bawah.
3. Apakah semua informasi penting masih bisa dipahami tanpa gambar?
4. Apakah ada teks aneh seperti "IMG_123.jpg" yang muncul?

Jika informasi tetap lengkap dan tidak ada nama file aneh, alt text-mu sudah sukses.

---

**[Lanjut: ARIA Roles →](/bab10/aria-roles/)**
