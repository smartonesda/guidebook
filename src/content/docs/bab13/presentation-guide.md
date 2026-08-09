---
title: "Panduan Presentasi Karya"
description: Panduan mempresentasikan dan mempertanggungjawabkan arsitektur HTML Final Project-mu di hadapan guru, penguji, atau calon klien.
---

Seorang developer profesional tidak hanya bisa membuat kode — mereka juga mampu **mempresentasikan dan mempertanggungjawabkan keputusan teknis di balik kode tersebut**.

---

## 🎤 Struktur Presentasi Final Project (5 Menit)

Gunakan alur 5-menit ini saat mempresentasikan karya proyekmu:

### 1. Perkenalan & Brief (1 Menit)
- Sebutkan nama, pilihan brief proyek yang diambil, dan target pengguna website.
- Jelaskan masalah utama yang ingin diselesaikan oleh website ini.

### 2. Arsitektur Informasi & Semantik (1.5 Menit)
- Tunjukkan struktur navigasi `<nav>` dan alasan pembagian seksi `<section>`.
- Jelaskan alasan pemilihan elemen semantik khusus (misal: mengapa menggunakan `<article>` untuk katalog produk, atau mengapa menggunakan `<table>` untuk daftar jadwal).

### 3. Formulir Interaktif & Aksesibilitas (1.5 Menit)
- Demokan fitur navigasi keyboard menggunakan tombol `Tab` dan **Skip Navigation Link**.
- Tunjukkan formulir kontak/pendaftaran yang kamu buat beserta atribut validasinya (`required`, `pattern`, `<label for="...">`).

### 4. Validasi & Kesimpulan (1 Menit)
- Tunjukkan bukti hasil validasi **0 Error W3C Validator**.
- Sampaikan hal paling berharga yang kamu pelajari selama mengeksekusi proyek ini.

---

## 💬 Contoh Pertanyaan Penguji & Cara Menjawabnya

**Penguji**: *"Mengapa kamu menggunakan elemen `<article>` untuk bagian kartu produk ini?"*  
**Jawaban**: *"Karena setiap kartu produk ini berisi informasi lengkap yang berdiri sendiri (gambar, judul, harga, dan deskripsi). Jika kartu produk ini dipindahkan ke halaman lain atau dikirim via RSS feed, informasinya tetap bermakna secara utuh."*

**Penguji**: *"Mengapa tag `<main>` milikmu memiliki atribut `tabindex="-1"`?"*  
**Jawaban**: *"Atribut tersebut dipasang agar Skip Navigation Link di awal halaman dapat memindahkan fokus keyboard secara konsisten ke elemen `<main>` di seluruh peramban web."*

---

**[Lanjut: Rubrik Penilaian →](/bab13/rubrik-penilaian/)**
