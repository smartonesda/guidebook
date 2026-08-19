---
title: "Navigasi Website"
description: Memahami cara membuat menu navigasi antardokumen dan mengelola kesalahan rute path yang rusak.
---

Sebuah website modern biasanya terdiri dari beberapa halaman yang saling terhubung (multi-page). Agar pengunjung dapat dengan mudah berpindah antar halaman tersebut, kita perlu merancang **Menu Navigasi** yang konsisten.

---

## 🧭 Konsep Navigasi Dasar

Navigasi hanyalah sebuah kumpulan tautan `<a>` yang diletakkan secara teratur di bagian atas halaman (biasanya di area header). 

Mari kita lihat contoh menu navigasi sederhana untuk website portfolio:

```html
<!-- Bagian atas halaman web (Header Navigasi) -->
<nav>
  <a href="index.html">Beranda</a> |
  <a href="tentang.html">Tentang Saya</a> |
  <a href="proyek.html">Proyek</a> |
  <a href="kontak.html">Kontak</a>
</nav>
```

*Catatan: Tag `<nav>` adalah elemen semantik pembungkus navigasi yang akan kita pelajari secara khusus di BAB 8 nanti.*

---

## 🚫 Mengatasi Link Rusak (*Broken Link*) & Error Path

Masalah yang paling sering terjadi saat menghubungkan halaman-halaman web adalah munculnya halaman kosong bertuliskan **"404 Not Found"** di browser. Hal ini menandakan browser tidak dapat menemukan file tujuan yang kamu tulis di atribut `href`.

Berikut adalah daftar penyebab utama broken link dan cara mengatasinya:

### 1. Salah Mengetik Nama File atau Ekstensi
- **Salah**: `<a href="tentang.htm">` (kurang huruf `l` di belakang).
- **Salah**: `<a href="Tentang.html">` (huruf kapital `T` tidak sesuai dengan nama file aslinya yang menggunakan huruf kecil `tentang.html`). Server web sangat sensitif terhadap perbedaan huruf kapital (*case-sensitive*).
- **Solusi**: Selalu periksa kembali penulisan nama file di panel Explorer VS Code-mu.

### 2. Salah Menghitung Struktur Direktori
- **Salah**: `<a href="tentang.html">` dari dalam sub-folder `artikel/` untuk memanggil file `tentang.html` yang berada di luar. Browser akan mencari `artikel/tentang.html` yang sebenarnya tidak ada.
- **Solusi**: Gunakan `../` untuk naik ke folder induk terlebih dahulu: `<a href="../tentang.html">`.

### 3. Menggunakan Slash `/` di Depan Alamat Relatif
- **Masalah**: Menulis `href="/tentang.html"` saat membuka halaman lokal di komputermu.
- **Mengapa Bermasalah**: Tanda slash `/` di awal alamat relative path memberitahu browser untuk mencari file tersebut dari **akar drive lokal komputermu** (misalnya dari drive `C:\` di Windows), bukan dari folder proyekmu. Ini akan menyebabkan link rusak saat dijalankan secara lokal.
- **Solusi**: Selalu gunakan `./tentang.html` atau cukup `tentang.html` untuk rute relatif lokal di dalam folder proyek.

Mari kita terapkan konsep tautan dan rute path ini ke dalam proyek portfolio kita melalui studi kasus halaman nyata.

**[Lanjut: Studi Kasus →](/bab3/studi-kasus/)**
