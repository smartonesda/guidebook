---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat mulai belajar HTML.
---

Membuat kesalahan saat belajar coding adalah hal yang sangat wajar. Kunci menjadi developer hebat bukanlah tidak pernah melakukan kesalahan, melainkan tahu bagaimana cara memperbaikinya.

Berikut adalah daftar kesalahan umum yang sering dialami pemula di awal belajar HTML dan cara mengatasinya.

---

## ❌ 1. Menggunakan Huruf Kapital pada Nama File

**Penyebab Error**: Memberi nama file dengan huruf besar, seperti `Index.html` atau `index.HTML`.

**Mengapa Bermasalah**: Server komputer internet (seperti server Linux) bersifat **case-sensitive** (membedakan huruf besar-kecil secara ketat). Bagi server, `index.html` dan `Index.html` adalah dua file yang berbeda. Jika nama filemu salah huruf kapital, server tidak akan bisa memuat website-mu.

**Cara Memperbaiki**: Selalu gunakan **huruf kecil semua** untuk nama file dan folder proyek web. Gunakan `index.html`, bukan `Index.html`.

---

## ❌ 2. Ekstensi File Double atau Salah (.html.txt)

**Penyebab Error**: File tersimpan dengan nama `index.html.txt` atau hanya `index` tanpa ekstensi. Hal ini sering terjadi karena Windows menyembunyikan ekstensi file asli secara default.

**Mengapa Bermasalah**: Browser mengenali jenis file berdasarkan ekstensi belakangnya. Jika ekstensinya `.txt`, browser akan membacanya sebagai dokumen teks biasa dan tidak akan menerjemahkan tag-tag HTML-mu.

**Cara Memperbaiki**: 
- Di VS Code, pastikan nama file yang tertera di tab adalah `index.html` dengan ikon kurung siku kecil di depannya.
- Di Windows Explorer, aktifkan fitur **"File name extensions"** di menu *View* untuk memastikan tidak ada akhiran `.txt` yang tersembunyi.

---

## ❌ 3. Live Server Tidak Otomatis Refresh

**Penyebab Error**: Kamu mengubah kode di VS Code, tetapi halaman di browser tidak berubah otomatis.

**Mengapa Bermasalah**: Biasanya karena kamu lupa menyimpan file atau tidak menggunakan server lokal.

**Cara Memperbaiki**:
1. Pastikan fitur **Auto Save** di VS Code sudah menyala (lihat kembali bagian Setup VS Code).
2. Pastikan browsermu dibuka melalui Live Server (alamatnya `http://127.0.0.1:5500/...`), bukan dibuka langsung dari folder (`file:///C:/...`).

---

## ❌ 4. Salah Menulis Kurung Siku atau Lupa Menutup Tag

**Penyebab Error**: Mengetik kode seperti `<p>Teks penjelasan` tanpa ditutup dengan `</p>`, atau mengetik tag pembuka salah seperti `(p>`.

**Mengapa Bermasalah**: Browser akan bingung menentukan batas akhir dari elemen tersebut, membuat tampilan elemen di bawahnya menjadi rusak atau berantakan.

**Cara Memperbaiki**: Selalu biasakan berhati-hati saat mengetik tag. Pastikan setiap tag pembuka memiliki tag penutup yang lengkap dengan garis miring (`/`).

Mari kita rekap semua yang sudah kita pelajari sebelum kamu melangkah masuk ke pembelajaran HTML utama di BAB 1!

**[Lanjut: Ringkasan →](/bab0/ringkasan/)**
