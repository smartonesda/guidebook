---
title: "Project 4 — Product Showcase"
description: Mini Project 4 — Merancang halaman katalog produk e-commerce dengan kartu produk, tabel perbandingan spesifikasi, dan badge status stok.
---

## 📄 1. Project Brief

- **Project**: Katalog & Perbandingan Produk (*Product Showcase & Comparison*)
- **Level**: Intermediate
- **Estimasi Waktu**: 45–60 Menit

---

## 🎭 2. Scenario & Problem

Sebuah unit usaha sekolah (*Teaching Factory RPL*) ingin menampilkan produk-produk buatan siswa (seperti template web, jasa pembuatan aplikasi, dan buku panduan) ke dalam sebuah halaman katalog produk digital yang bisa dibandingkan spesifikasi teknisnya.

---

## 🎯 3. Goal & Target User

- **Goal**: Menampilkan grid produk dengan informasi harga, spesifikasi, badge status stok, serta tabel perbandingan paket layanan.
- **Target User**: Calon pembeli, klien UMKM, dan penguji karya sekolah.

---

## 📋 4. Requirements Wajib

### A. Grid Kartu Produk (`<article>`)
- [ ] Setiap produk dibungkus oleh elemen `<article class="product-card">`.
- [ ] Gambar produk menggunakan `<figure>` & `<figcaption>` dengan `loading="lazy"`.
- [ ] Menyediakan badge status produk menggunakan kustom atribut `data-status="tersedia"` atau `data-status="habis"`.
- [ ] Harga produk disajikan jelas dengan format Rupiah.

### B. Tabel Perbandingan Paket (`<table>`)
- [ ] Tabel perbandingan fitur paket layanan (Basic, Pro, Enterprise).
- [ ] Struktur tabel semantik lengkap (`<caption>`, `<thead>`, `<tbody>`, `<tfoot>`).
- [ ] Menggunakan atribut `scope="col"` pada elemen `<th>` header kolom.
- [ ] Menggunakan `colspan` atau `rowspan` untuk bagian fitur yang mencakup beberapa kolom/baris.

---

## 🧠 5. Concepts Used (BAB 1–11)

- **BAB 5**: Tabel data lengkap (`<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `colspan`, `scope`).
- **BAB 7**: Custom attributes `data-status="..."`, `data-harga="..."`.
- **BAB 8**: Kartu produk semantik (`<article>`).

---

## 🏗️ 6. Suggested Page Structure

```html
<main>
  <section id="katalog-produk">
    <h2>Katalog Produk & Jasa</h2>

    <div class="product-grid">
      <article class="product-card" data-status="tersedia" data-harga="150000">
        <figure>
          <img src="assets/images/template-web.jpg" alt="Preview Template Web Portfolio" width="300" height="200" loading="lazy" />
        </figure>
        <h3>Template Web Portfolio</h3>
        <p class="price">Rp 150.000</p>
        <button type="button">Beli Sekarang</button>
      </article>
    </div>
  </section>

  <section id="perbandingan-paket">
    <h2>Tabel Perbandingan Paket</h2>
    <table>
      <caption>Perbandingan Fitur Layanan Web RPL</caption>
      <thead>
        <tr>
          <th scope="col">Fitur</th>
          <th scope="col">Paket Basic</th>
          <th scope="col">Paket Pro</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Jumlah Halaman</th>
          <td>1 Halaman</td>
          <td>5 Halaman</td>
        </tr>
      </tbody>
    </table>
  </section>
</main>
```

---

## 🛠️ 7. Implementation Tasks

1. Buat file `product-showcase.html`.
2. Susun seksi katalog produk menggunakan elemen `<article>` untuk setiap barang/jasa.
3. Tambahkan kustom atribut `data-status="tersedia"` pada tag artikel produk.
4. Buat seksi tabel perbandingan paket layanan menggunakan `<table>`, `<thead>`, `<tbody>`, dan `<caption>`.
5. Pastikan semua elemen `<th>` memiliki atribut `scope="col"` atau `scope="row"`.

---

## ✅ 8. Quality & Accessibility Checklist

```
[ ] Gambar produk menyertakan atribut width, height, dan loading="lazy".
[ ] Tabel perbandingan menyertakan elemen <caption>.
[ ] Semua th memiliki atribut scope yang jelas.
[ ] Lolos uji 0 Error di validator.w3.org.
```

---

**[Lanjut: Project 5 — Event Registration →](/bab12/project-5-event-registration/)**
