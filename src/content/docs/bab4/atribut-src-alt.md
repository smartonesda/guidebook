---
title: "Atribut src & alt"
description: Memahami penggunaan atribut src dan alt secara mendalam untuk gambar yang accessible dan SEO-friendly.
---

Dua atribut yang melekat erat pada tag `<img>` adalah **`src`** dan **`alt`**. Menuliskan keduanya secara benar adalah tanda bahwa kamu menulis kode web berstandar profesional.

---

## 📍 1. Atribut `src` (Source)

Atribut `src` menentukan lokasi file gambar yang ingin ditampilkan. Seperti tautan navigasi, rutenya bisa ditulis menggunakan alamat relatif atau absolut:

### Rute Relatif (Relative Path)
Menunjuk ke file gambar di dalam folder proyekmu sendiri.
```html
<!-- Mencari gambar di sub-folder 'images' -->
<img src="images/foto.jpg" alt="...">
```

### Rute Absolut (Absolute Path)
Menunjuk ke file gambar yang di-hosting di server website lain di internet.
```html
<!-- Mengambil gambar dari domain luar -->
<img src="https://images.unsplash.com/photo-12345" alt="...">
```

---

## ♿ 2. Atribut `alt` (Alternative Text)

Atribut `alt` digunakan untuk menuliskan **teks deskripsi alternatif** jika gambar gagal dimuat, atau untuk dibacakan oleh mesin pembantu.

Penggunaan `alt` sangat wajib karena dua alasan krusial:

1. **Aksesibilitas (Accessibility)**: Pengguna tunanetra menggunakan software *screen reader* untuk membaca isi halaman web. Saat software menemukan gambar, ia akan membacakan isi tulisan atribut `alt` tersebut. Tanpa `alt`, pengguna difabel tidak akan tahu gambar apa yang ada di sana.
2. **SEO (Search Engine Optimization)**: Robot mesin pencari Google tidak bisa "melihat" isi gambar seperti manusia. Google membaca teks `alt` untuk memahami relevansi gambar dengan artikelmu.

---

## 💡 Panduan Menulis `alt` Text yang Baik

Menulis deskripsi gambar memerlukan kejelasan informasi, bukan kata kunci promosi.

| Gambar | Penulisan Buruk ❌ | Penulisan Baik ✅ |
|---|---|---|
| Foto kamu di meja belajar | `alt="foto.jpg"` (Nama file tidak berguna) | `alt="Foto profil Rizki sedang belajar coding di meja"` |
| Logo sekolah | `alt="Logo"` (Terlalu umum) | `alt="Logo resmi SMK Negeri 1 Jakarta"` |
| Tombol pencarian (kaca pembesar) | `alt="kaca pembesar"` (Membingungkan fungsinya) | `alt="Cari artikel"` (Menjelaskan aksi tombol) |

### Gambar Dekoratif: Menggunakan Alt Kosong (`alt=""`)
Jika gambar di halamanmu hanya berfungsi sebagai hiasan visual (misalnya garis pemisah berornamen atau lingkaran latar belakang) dan tidak memiliki informasi penting bagi pembaca, **jangan hapus atribut `alt`**. 

Tuliskan atribut `alt` dengan nilai kosong:

```html
<!-- ✅ BENAR: Screen reader akan melompati gambar dekoratif ini secara aman -->
<img src="hiasan-bunga.png" alt="" />
```
Jika kamu menghapus atribut `alt` sepenuhnya dari kode, beberapa screen reader akan membacakan nama file gambar tersebut (misalnya: *"hiasan-bunga-dot-pi-en-ji"*), yang akan sangat mengganggu kenyamanan pendengaran pengguna difabel.

Mari kita pelajari pentingnya menentukan dimensi gambar untuk kestabilan halaman web.

**[Lanjut: Dimensi Gambar →](/bab4/dimensi-gambar/)**
