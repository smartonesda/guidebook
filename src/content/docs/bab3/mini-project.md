---
title: "Mini Project"
description: Kembangkan halaman portfoliomu menjadi website multi-halaman dengan menu navigasi, tautan eksternal, dan tautan unduhan.
---

Saatnya melanjutkan pengembangan proyek portfolio pribadimu! Di bab ini, kita akan merombak dokumen tunggal `portfolio.html` menjadi website multi-halaman (*multi-page*) yang terhubung satu sama lain menggunakan menu navigasi dan tautan aktif.

Proyek ini adalah **versi pembaruan (v0.3)** dari halaman portofolio pribadimu.

---

## 🎯 Deskripsi Project

Kamu akan merestrukturisasi folder proyekmu dan membagi halaman portfoliomu menjadi dua file halaman yang saling terhubung:
1. **Restrukturisasi Berkas**: Ubah nama file `portfolio.html` menjadi `index.html` (sebagai halaman depan). Buat file baru bernama `projects.html` di folder yang sama.
2. **Menu Navigasi**: Pasang menu navigasi timbal-balik di bagian paling atas kedua halaman.
3. **Pintasan Internal**: Buat tautan jangkar internal untuk melompat langsung ke bagian kontak.
4. **Tautan Aktif**: Aktifkan email surelmu menggunakan `mailto:`, dan aktifkan tautan media sosial/GitHub eksternal menggunakan `target="_blank"` yang aman.
5. **Download Berkas**: Sediakan berkas dummy PDF di dalam sub-folder dan tautkan agar bisa diunduh pengunjung.

---

## 📋 Requirements Wajib

### A. Folder & Menu Navigasi (30 poin)

- [ ] Folder proyekmu wajib memiliki struktur berkas berikut:
  ```text
  belajar-html/
  ├── index.html        (Ganti nama dari portfolio.html)
  ├── projects.html     (File baru)
  └── dokumen/
      └── resume.pdf    (File PDF tiruan/dummy untuk diunduh)
  ```
- [ ] Tambahkan menu navigasi di bagian atas `index.html` dan `projects.html` yang berisi tautan bertuliskan: **Beranda**, **Proyek Saya**, dan **Kontak**.

### B. Konteks Jalur Berkas / Path (40 poin)

- [ ] Tautan menu navigasi harus ditulis menggunakan **Relative URL** (path lokal) yang benar:
  - Tautan *Beranda* mengarah ke `index.html`.
  - Tautan *Proyek Saya* mengarah ke `projects.html`.
  - Tautan *Kontak* menggunakan fragment identifier `#kontak` untuk melompat ke bagian bawah halaman.
- [ ] Di dalam halaman `projects.html`, tautan navigasi *Kontak* harus mengarah ke `index.html#kontak` agar bisa keluar dan melompat dengan tepat.
- [ ] Tambahkan tautan untuk mengunduh berkas `dokumen/resume.pdf` dengan atribut `download` yang aktif di halaman beranda.

### C. Tautan Eksternal & Keamanan (30 poin)

- [ ] Hubungkan alamat emailmu di bagian kontak menggunakan protokol `mailto:`.
- [ ] Hubungkan akun media sosial atau GitHub milikmu di bagian kontak menggunakan **Absolute URL** (misal `https://github.com/username`).
- [ ] Tautan eksternal wajib dibuka di tab baru dengan memasang `target="_blank"`.
- [ ] Setiap tautan `target="_blank"` **wajib** menyertakan atribut keamanan `rel="noopener noreferrer"`.
- [ ] **0 Error** di W3C Validator (`validator.w3.org`) untuk kedua file HTML-mu.

---

## 📝 Contoh Referensi Penulisan Tautan

Gunakan contoh potongan kode ini sebagai referensi pelengkap dalam file proyekmu:

### Di Bagian Atas `index.html` (Navigasi Beranda)
```html
<p>
  <strong>Beranda</strong> | 
  <a href="projects.html">Proyek Saya</a> | 
  <a href="#kontak">Kontak</a>
</p>
```

### Di Bagian Atas `projects.html` (Navigasi Proyek)
```html
<p>
  <a href="index.html">Beranda</a> | 
  <strong>Proyek Saya</strong> | 
  <a href="index.html#kontak">Kontak</a>
</p>
```

### Di Bagian Kontak (`index.html`)
```html
<h2 id="kontak">Hubungi Saya</h2>
<p>
  Hubungi saya di <a href="mailto:emailmu@domain.com">emailmu@domain.com</a> atau 
  kunjungi profil <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub Saya</a>.
</p>
```

---

## 📊 Rubrik Penilaian

| Kategori | Kriteria | Poin Maksimal |
|---|---|---|
| **Struktur Multi-Halaman** | Folder terstruktur rapi, index.html dan projects.html terhubung secara timbal balik. | 30 |
| **Ketepatan Relative Path** | Rute path ke projects.html, index.html, dan berkas resume.pdf valid tanpa link rusak. | 30 |
| **Fragment & Tautan Khusus** | Fragment identifier #kontak dan mailto bekerja dengan benar. | 20 |
| **Keamanan & Validasi** | Tautan target eksternal aman dengan rel="noopener noreferrer", lolos uji W3C validator. | 20 |
| **Total** | | **100** |

---

## ✅ Checklist Sebelum Mengumpulkan

Buka file `index.html` di browsermu lewat Live Server, lalu pastikan:
```
☐ Klik menu "Proyek Saya" membuka halaman projects.html tanpa error 404.
☐ Klik menu "Beranda" di projects.html mengembalikanmu ke halaman utama.
☐ Klik menu "Kontak" menggulung layar secara otomatis ke bagian bawah.
☐ Klik tautan GitHub membuka tab baru di browsermu.
☐ Klik tautan "Unduh Resume" langsung memicu proses unduhan berkas resume.pdf.
☐ Kedua file HTML lolos uji validasi di validator.w3.org.
```

Proyek websitemu sekarang sudah menjadi website multi-halaman yang interaktif! Pada bab selanjutnya, kita akan belajar menampilkan aset multimedia berupa gambar, audio, dan video di halaman webmu.

**[Lanjut: Challenge →](/bab3/challenge/)**
