---
title: "Elemen Gambar img"
description: Memahami konsep dasar elemen gambar img dan bagaimana browser memproses file gambar.
---

Banyak pemula mengira bahwa file gambar disisipkan dan disimpan secara langsung di dalam file dokumen HTML. **Ini adalah pemahaman yang salah.**

File dokumen HTML (`.html`) adalah file teks murni. HTML tidak bisa memuat piksel warna gambar di dalamnya.

---

## 🧠 Mental Model: HTML Sebagai Penunjuk Jalan

Tugas tag **`<img>`** di dalam HTML hanyalah memberikan instruksi kepada browser:
- *"Ambil berkas gambar di alamat ini, lalu gambar dan tampilkan di posisi ini."*

Mari kita lihat alur kerja browser saat memuat halaman web yang memiliki gambar:

```text
Browser meminta index.html
       ↓
Browser menerima file HTML & membacanya dari atas ke bawah
       ↓
Browser menemukan tag <img src="images/foto.jpg">
       ↓
Browser mengirim PERMINTAAN KEDUA (Request) untuk mengunduh file foto.jpg
       ↓
Server mengirim file gambar foto.jpg
       ↓
Browser menggambar gambar di layar
```

Artinya, dokumen HTML dan file gambar adalah **sumber daya (resources) yang terpisah**. Pengunjung website-mu harus mengunduh keduanya agar gambar dapat tampil.

---

## 🏗️ Anatomi Tag Gambar (`<img>`)

Tag `<img>` memiliki beberapa keunikan dibanding tag-tag teks yang sudah kita pelajari:
1. Ia adalah **Void Element** (elemen kosong). Ia tidak memiliki konten teks di dalamnya, sehingga **tidak membutuhkan tag penutup** (`</img>`).
2. Ia wajib memiliki minimal dua atribut utama: **`src`** (destinasi file) dan **`alt`** (deskripsi alternatif).

```text
    ┌─── Elemen Gambar Lengkap ─────────────────────────────┐
    │                                                       │
    │    <img src="assets/profile.jpg" alt="Foto profil">   │
    │     │   │                       │                    │
    │     │   │                       └─ Atribut alt       │
    │     │   └─ Atribut src (Alamat sumber gambar)        │
    │     └─ Tag Pembuka img                                │
    └───────────────────────────────────────────────────────┘
```

Jika kamu lupa menuliskan atribut `src`, browser tidak akan tahu gambar mana yang harus diambil, dan akan menampilkan ikon gambar pecah (*broken image*).

Mari kita pelajari lebih dalam mengenai kedua atribut wajib ini di halaman berikutnya.

**[Lanjut: Atribut src & alt →](/bab4/atribut-src-alt/)**
