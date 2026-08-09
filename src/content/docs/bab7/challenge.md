---
title: "Challenge"
description: Tantangan berjenjang untuk menguji pemahaman mendalam tentang HTML Attributes — dari identifikasi hingga analisis, dari boolean hingga ARIA.
---

Challenge BAB 7 ini dirancang bukan untuk mengetes hafalanmu tentang nama-nama attribute — melainkan untuk menguji apakah kamu **benar-benar mengerti cara berpikir** tentang attribute HTML.

Ada 5 tantangan dari berbagai tingkat kesulitan.

---

## 🎯 Tujuan Challenge

Setelah menyelesaikan semua tantangan ini, kamu akan mampu:
- Membaca sebuah baris HTML dan mengidentifikasi setiap bagiannya secara tepat.
- Menemukan dan memperbaiki attribute yang salah, hilang, atau berlebihan.
- Menjelaskan mengapa sebuah attribute ada — bukan hanya apa attribute itu.
- Memilih attribute yang tepat berdasarkan konteks dan kebutuhan.

---

## 🔴 Challenge 1: Bedah HTML Baris per Baris (20 poin)

Untuk setiap baris HTML di bawah ini, identifikasi secara lengkap:
- Nama **element**
- Semua **attribute**
- Semua **attribute value** (pasangkan dengan attribute-nya)
- **Content** (jika ada)
- Tipe setiap attribute: apakah **attribute biasa** atau **boolean attribute**?

```html
<!-- Baris 1 -->
<a href="https://github.com/rizki" target="_blank" rel="noopener noreferrer" class="social-link">GitHub</a>

<!-- Baris 2 -->
<input type="number" id="jumlah-tiket" name="qty" min="1" max="10" value="1" required />

<!-- Baris 3 -->
<video src="demo-portfolio.mp4" width="640" height="360" controls muted loop></video>

<!-- Baris 4 -->
<img src="foto.jpg" alt="Foto proyek website sekolah" loading="lazy" class="project-image" />

<!-- Baris 5 -->
<button type="submit" class="btn btn-primary" data-form-id="kontak" aria-label="Kirim pesan kontak">
  🚀 Kirim
</button>
```

---

## 🟡 Challenge 2: Temukan Semua Kesalahan (20 poin)

Kode di bawah ini mengandung **8 kesalahan attribute**. Temukan semuanya dan tulis versi yang benar beserta penjelasannya.

```html
<!DOCTYPE html>
<html>  <!-- kesalahan? -->
<head>
  <meta charset="UTF-8">
  <title>Portfolio</title>
</head>
<body>

  <!-- Navigasi -->
  <div>
    <a href="/">Beranda</a>
    <a href="/proyek">Proyek</a>
    <a href="https://github.com/user" target="_blank">GitHub</a>  <!-- kesalahan? -->
  </div>

  <!-- Profil -->
  <img src="foto.jpg">  <!-- kesalahan? -->

  <!-- Form -->
  <form method="GET" action="/login">  <!-- kesalahan? -->
    <label>Email:</label>  <!-- kesalahan? -->
    <input type="email" id="email" placeholder="Email kamu" required="true">  <!-- kesalahan? -->
    
    <input type="checkbox" name="ingat" id="cb-ingat" value="ya">
    <label>Ingat saya</label>  <!-- kesalahan? -->
    
    <button>Masuk</button>  <!-- kesalahan? -->
  </form>

</body>
</html>
```

---

## 🟠 Challenge 3: Pilih Attribute yang Tepat (20 poin)

Untuk setiap situasi berikut, tulis kode HTML yang menggunakan attribute yang paling tepat:

**Situasi A:** Kamu punya tombol dengan ikon saja (tidak ada teks):
```html
<button>🗑️</button>
```
Tambahkan attribute yang diperlukan agar pengguna screen reader tahu fungsi tombol ini adalah "Hapus item".

**Situasi B:** Kamu punya daftar produk. Setiap item produk perlu menyimpan ID dan harga produk agar JavaScript bisa membacanya saat tombol "Beli" diklik. Tulis struktur yang benar.

**Situasi C:** Kamu punya link "Lihat PDF" yang membuka file PDF di tab baru. Tulis link yang lengkap dengan semua attribute yang tepat untuk keamanan dan aksesibilitas.

**Situasi D:** Kamu punya area section "Berita Terbaru" yang kontennya diperbarui via JavaScript secara berkala. Tambahkan attribute ARIA yang tepat agar screen reader mengumumkan perubahan konten secara otomatis.

**Situasi E:** Kamu ingin membuat input yang menampilkan nilai default "Indonesia" tapi masih bisa diubah pengguna. Tulis kode yang benar dengan semua attribute yang diperlukan termasuk label aksesibel.

---

## 🔵 Challenge 4: id vs class vs name — Kapan Mana? (20 poin)

Baca setiap pernyataan berikut dan tentukan: **Benar atau Salah?** Lalu jelaskan mengapa.

1. Dua element berbeda di satu halaman boleh memiliki `class` yang sama.
2. Dua element berbeda di satu halaman boleh memiliki `id` yang sama asalkan mereka berbeda jenis element (misalnya `<div id="nama">` dan `<p id="nama">`).
3. Attribute `name` dibutuhkan oleh CSS untuk menarget element.
4. Attribute `id` pada input form dikirim ke server bersama datanya saat form di-submit.
5. Satu `<input>` boleh tidak memiliki `id` selama ia punya `name`.
6. `class="btn active selected"` artinya element ini punya tiga class sekaligus.
7. Untuk membuat anchor link internal (`href="#bagian"`), element target harus memiliki `id`, bukan `class`.
8. `name` dan `id` pada sebuah input sebaiknya selalu memiliki nilai yang sama.

---

## ⚫ Challenge 5: Analisis Mendalam (20 poin)

Jawab pertanyaan berikut dalam bentuk tulisan analitis (bukan sekadar satu kalimat):

**Pertanyaan 1:**
Jelaskan perbedaan antara `aria-label` dan `aria-labelledby`. Kapan kamu akan memilih menggunakan `aria-label` dan kapan `aria-labelledby`? Berikan contoh kasus nyata untuk masing-masing.

**Pertanyaan 2:**
Seorang developer menulis kode berikut:
```html
<div 
  class="tombol-submit" 
  style="background: blue; color: white; padding: 10px 20px; cursor: pointer;"
  onclick="kirimForm()"
>
  Kirim
</div>
```
Analisis: Apa masalah dengan pendekatan ini dari perspektif (a) aksesibilitas, (b) maintainability, dan (c) semantic HTML? Tulis versi yang lebih baik.

**Pertanyaan 3:**
Kamu diberikan kode berikut:
```html
<input type="text" data-href="/profil" data-target="modal" data-src="foto.jpg" />
```
Apa yang salah dengan penggunaan `data-*` di sini? Tulis versi yang benar.

---

## 📊 Rubrik Penilaian

| Challenge | Poin | Kriteria |
|---|---|---|
| 1: Bedah HTML | 20 | Identifikasi tepat semua element, attribute, value, content, tipe attribute |
| 2: Temukan Kesalahan | 20 | Menemukan semua 8 kesalahan + penjelasan + perbaikan |
| 3: Pilih Attribute | 20 | Kode yang tepat + attribute yang relevan + penjelasan |
| 4: id vs class | 20 | Jawaban benar/salah + penjelasan yang akurat |
| 5: Analisis | 20 | Jawaban mendalam, tidak hanya definisi, disertai contoh |
| **Total** | **100** | |

---

**[Lanjut: Error Corner →](/bab7/error-corner/)**
