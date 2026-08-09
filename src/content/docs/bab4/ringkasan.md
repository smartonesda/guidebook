---
title: "Ringkasan"
description: Rekap semua konsep penting yang dipelajari di BAB 4 — Images & Multimedia.
---

Selamat! Kamu telah menyelesaikan seluruh rangkaian materi di **BAB 4 — Gambar & Multimedia**.

---

## 📝 Rekap Konsep Utama

Berikut adalah ringkasan konsep pengelolaan media yang wajib kamu pahami:

- **Dokumen vs Media**: HTML tidak menyimpan gambar di dalam tag. Tag HTML bertugas memberikan rute instruksi (*src*) bagi browser untuk mengunduh dan merender media secara terpisah.
- **Teks Alternatif (`alt`)**: Sangat wajib untuk aksesibilitas (screen reader) dan SEO Google. Tulis deskripsi informatif, atau biarkan kosong (`alt=""`) hanya jika gambar bersifat hiasan/dekoratif.
- **Dimensi Gambar (`width` & `height`)**: Wajib ditulis berupa nilai angka bulat tanpa satuan `px`. Berfungsi menahan area kosong sebelum gambar dimuat guna mencegah pergeseran tata letak halaman (*Cumulative Layout Shift*).
- **Semantik Media**: Gunakan tag `<figure>` untuk membungkus gambar secara mandiri dan `<figcaption>` untuk menyisipkan teks keterangan pendukung di bawahnya.
- **Gambar Responsif**: Menggunakan elemen `<picture>` dan `<source>` untuk menyajikan resolusi gambar berbeda sesuai lebar layar perangkat pengunjung (*Art Direction*).
- **Audio & Video**: Tag `<audio>` dan `<video>` memutar suara dan video secara asli tanpa plugin tambahan. Sediakan beberapa tag `<source>` di dalamnya sebagai cadangan format file (*codec fallback*).
- **Atribut Kontrol**: Atribut boolean `controls` menampilkan tombol kendali pemutar, sedangkan `autoplay` wajib dipasang bersama `muted` (bisu) agar berfungsi di browser modern.
- **Semat Konten (`<iframe>`)**: Digunakan untuk menyisipkan halaman luar (peta, video luar) secara aman menggunakan atribut `sandbox` dan aksesibel menggunakan `title`.

---

## 📊 Tabel Kamus Elemen Media BAB 4

| Tag HTML | Atribut Utama | Fungsi Utama | Sifat Element |
|---|---|---|---|
| **`<img>`** | `src`, `alt`, `width`, `height` | Menampilkan gambar visual. | Void / Inline |
| **`<figure>`** | (none) | Membungkus unit media mandiri. | Block |
| **`<figcaption>`** | (none) | Menulis keterangan gambar di dalam figure. | Block |
| **`<picture>`** | (none) | Wadah penyeleksi gambar responsif. | Block |
| **`<source>`** | `srcset`, `media`, `type` | Menyediakan pilihan file media/gambar. | Void |
| **`<audio>`** | `controls`, `loop`, `autoplay` | Memutar berkas suara musik. | Block |
| **`<video>`** | `controls`, `poster`, `muted` | Memutar berkas rekaman video. | Block |
| **`<iframe>`** | `src`, `title`, `loading`, `sandbox` | Menyematkan dokumen luar/interaktif. | Block |

---

## ➡ Handoff ke BAB 5 — Lists & Tables

Di BAB 4 ini, kamu telah berhasil **memperkaya tampilan portfolio pribadimu dengan menyisipkan foto diri, ilustrasi proyek koding, dan menyematkan peta interaktif** pada Mini Project.

Namun, daftar keahlian (*skills*) dan data pendidikan di portfoliomu masih ditulis dalam bentuk baris-baris paragraf biasa yang kurang terstruktur dan sulit dibandingkan.

Di **BAB 5 — Lists & Tables**, kita akan mempelajari cara mengelompokkan data secara rapi menggunakan tag **Daftar** (`<ul>`, `<ol>`, dan `<dl>`), serta menyusun data pembanding secara mendalam dalam bentuk kolom dan baris menggunakan tag **Tabel** (`<table>`). Kita akan menyulap baris teks keahlianmu menjadi daftar poin (*bullet points*) dan merapikan riwayat sekolahmu dalam tabel data terstruktur!

Mari melangkah ke bab berikutnya!

**[Lanjut ke BAB 5 — Lists & Tables →](/bab5/introduction/)**
