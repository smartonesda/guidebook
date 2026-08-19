---
title: "Ringkasan"
description: Rekap semua konsep penting yang dipelajari di BAB 3 — Hyperlinks & Navigation.
---

Selamat! Kamu telah menyelesaikan seluruh materi di **BAB 3 — Tautan & Navigasi**.

---

## 📝 Rekap Konsep Utama

Berikut adalah ringkasan konsep navigasi dan tautan yang wajib kamu pahami:

- **Hyperlink & Anchor (`<a>`)**: Hyperlink adalah lorong penghubung antar-dokumen di web. Elemen jangkar `<a>` bertugas membuat hyperlink tersebut dengan bantuan atribut destinasi `href`.
- **Absolute vs Relative URL**: 
  - **Absolute URL** digunakan untuk tautan eksternal ke website lain (menggunakan protokol lengkap `https://domain.com`).
  - **Relative URL** digunakan untuk tautan internal di dalam proyek website sendiri (menggunakan rute relative path).
- **Rute Path (`.` dan `..`)**: Satu titik (`.`) berarti cari file di folder aktif yang sama, sedangkan dua titik (`..`) berarti naik/keluar satu tingkat ke folder induk.
- **Browsing Context (`target`)**: Atribut `target="_blank"` membuka tautan di tab baru. Wajib menyertakan atribut keamanan `rel="noopener noreferrer"` untuk menangkal celah keamanan *Reverse Tabnabbing*.
- **Anchor Internal (Fragment)**: Menggunakan tanda pagar `#` diikuti id target untuk melompat langsung ke bagian spesifik pada halaman yang sama.
- **Tautan Khusus**: Menggunakan protokol `mailto:` untuk surel, `tel:` untuk panggilan telepon seluler, dan atribut `download` untuk memicu unduhan berkas.
- **Link (`<a>`) vs Tombol (`<button>`)**: Link digunakan untuk **navigasi** ke halaman atau file baru, sedangkan tombol digunakan untuk memicu **aksi/tindakan** di halaman yang sama.

---

## 📊 Tabel Kamus Parameter Tautan BAB 3

| Parameter / Atribut | Contoh Penggunaan | Fungsi Utama | Sifat Perilaku |
|---|---|---|---|
| `href` | `href="tentang.html"` | Menentukan tujuan/destinasi tautan. | Wajib di tag `<a>` |
| `target="_self"` | `target="_self"` | Membuka halaman tujuan di tab aktif. | Default browser |
| `target="_blank"` | `target="_blank"` | Membuka halaman tujuan di tab baru. | Membuka tab baru |
| `rel="noopener"` | `rel="noopener"` | Memutus akses tab baru ke tab asal. | Faktor Keamanan |
| `mailto:` | `href="mailto:a@b.com"` | Membuka aplikasi surel bawaan. | Kirim Email |
| `tel:` | `href="tel:+6281"` | Membuka panggil telepon HP. | Panggilan |
| `download` | `download="cv-baru"` | Mengunduh file, opsional ganti nama. | Pemicu Unduhan |
| `#id` | `href="#kontak"` | Melompat ke koordinat id elemen. | Tautan Internal |

---

## ➡ Handoff ke BAB 4 — Gambar & Media

Di BAB 3 ini, kamu telah berhasil **mengubah portfolio pribadimu menjadi website multi-halaman (index.html dan projects.html)** yang saling terhubung menggunakan menu navigasi dan tautan aktif pada Mini Project.

Namun, halaman websitemu saat ini masih dipenuhi oleh teks tipografi saja dan belum memiliki gambar ilustrasi atau konten media visual lainnya.

Di **BAB 4 — Gambar & Media**, kita akan mempelajari cara menampilkan media visual di halaman webmu menggunakan tag **`<img>`** (gambar responsif), serta tag multimedia modern seperti **`<video>`** (pemutar video bawaan) dan **`<audio>`** (pemutar suara musik). Kita akan menambahkan foto profilmu ke halaman utama dan memajang ilustrasi proyek di halaman proyek portfolio!

Mari bersiap melangkah ke bab berikutnya!

**[Lanjut ke BAB 4 — Gambar & Media →](/bab4/introduction/)**
