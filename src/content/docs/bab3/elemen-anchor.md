---
title: "Elemen Anchor"
description: Memahami dasar penggunaan tag a untuk membuat tautan, anatominya, dan perbedaan link vs button.
---

Sebuah halaman web tidak akan menjadi bagian dari "World Wide Web" jika tidak memiliki tautan. Tautan atau **Hyperlink** adalah jembatan yang menghubungkan satu dokumen HTML dengan dokumen lainnya di internet.

Di dalam HTML, kita membuat hyperlink menggunakan elemen jangkar (**Anchor Element**), yang diwakili oleh tag **`<a>`**.

---

## 🏗️ Anatomi Tag Jangkar (`<a>`)

Tag `<a>` tidak akan berfungsi tanpa atribut **`href`** (singkatan dari *hypertext reference*). Atribut `href` bertugas menentukan **destinasi / tujuan** ke mana browser harus mengarahkan pengguna saat tautan tersebut diklik.

Mari bedah struktur anatomi dari elemen jangkar di bawah ini:

```text
       ┌─── Elemen Tautan Lengkap ─────────────────────────────┐
       │                                                       │
       │    <a href="/about.html">Tentang Saya</a>              │
       │    │    │        │            │             │         │
       │    │    │        │            │             └─ Tag penutup
       │    │    │        │            └─ Konten (Teks Tautan) │
       │    │    │        └─ Nilai Atribut (Destinasi)         │
       │    │    └─ Nama Atribut href                          │
       │    └─ Tag Pembuka                                     │
       └───────────────────────────────────────────────────────┘
```

Browser menerjemahkan elemen di atas menjadi teks berwarna biru dan bergaris bawah secara default. Saat pengguna mengkliknya, browser akan memuat file `/about.html`.

---

## ⚖️ Aturan Penting: Link (`<a>`) vs Tombol (`<button>`)

Banyak pemula (bahkan beberapa developer profesional) sering bingung membedakan kapan harus menggunakan tag jangkar `<a>` dan kapan harus menggunakan tag tombol `<button>`. 

Meskipun secara visual keduanya bisa dihias agar terlihat sama menggunakan CSS, secara semantik dan perilaku bawaan mereka memiliki kegunaan yang **sangat berbeda**:

| Elemen | Fungsi Semantik | Contoh Kasus | Perilaku Default |
|---|---|---|---|
| **`<a>` (Link)** | **Navigasi**: Mengarahkan pengguna ke **resource baru** (halaman lain, bagian lain, atau file lain). | Berpindah ke halaman profil, melompat ke bagian kontak. | Bisa di-klik kanan untuk dibuka di tab baru, memiliki alamat tujuan (`href`). |
| **`<button>`** | **Aksi**: Memicu **tindakan atau interaksi** di halaman yang sama (menyimpan data, membuka modal pop-up, memutar audio). | Kirim formulir, tombol *close* pada pop-up, tombol *play* video. | Tidak memiliki atribut `href`, tidak bisa dibuka di tab baru, biasanya dihubungkan dengan JavaScript atau form. |

```html
<!-- ✅ BENAR: Menggunakan link untuk berpindah halaman -->
<a href="/profil.html">Lihat Profil Saya</a>

<!-- ✅ BENAR: Menggunakan button untuk memicu aksi interaksi -->
<button type="button" onclick="bukaModal()">Hubungi Saya</button>
```

---

## ✨ Best Practice Menulis Teks Tautan

1. **Jadilah Deskriptif**: Hindari menulis teks tautan yang hanya bertuliskan *"Klik di Sini"* atau *"Link"*. Teks tautan harus menggambarkan dengan jelas ke mana pengguna akan pergi.
   - *Buruk*: `<a href="/tutorial.html">Klik di sini</a> untuk membaca tutorial.`
   - *Baik*: `Silakan baca <a href="/tutorial.html">tutorial belajar HTML dasar</a> kami.`
2. **Ramah Aksesibilitas**: Pengguna tunanetra yang menggunakan pembaca layar sering melompati teks biasa dan hanya mendengarkan daftar tautan. Teks *"Klik di Sini"* tidak akan memberikan informasi apa pun bagi mereka.

Mari kita pelajari perbedaan menulis alamat destinasi menggunakan alamat absolut dan relatif pada halaman berikutnya.

**[Lanjut: URL Relatif vs Absolut →](/bab3/url-relatif-absolut/)**
