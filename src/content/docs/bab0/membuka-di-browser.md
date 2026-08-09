---
title: "Membuka di Browser"
description: Cara menjalankan file HTML di browser — dengan Live Server dan cara manual.
---

Setelah menulis kode di file `index.html`, sekarang saatnya kita melihat tampilannya di web browser.

---

## 🚀 Cara 1: Menggunakan "Live Server" (Sangat Direkomendasikan)

Karena kita sudah memasang ekstensi Live Server di VS Code, kita bisa memanfaatkan fitur refresh otomatis ini:

1. Buka file `index.html` di VS Code.
2. Klik tombol bertuliskan **"Go Live"** di pojok kanan bawah jendela VS Code (atau klik kanan pada file `index.html` di panel Explorer sebelah kiri, lalu pilih **Open with Live Server**).
3. Browser Google Chrome akan otomatis terbuka dan menampilkan halaman web pertamamu!

Jika berhasil, alamat di bagian atas browsermu akan bertuliskan:
`http://127.0.0.1:5500/index.html` (atau `http://localhost:5500/index.html`).

:::tip[Apa itu localhost (127.0.0.1)?]
Alamat **`127.0.0.1`** atau **`localhost`** adalah IP khusus yang merujuk ke komputermu sendiri. Live Server bertindak sebagai **Web Server lokal** kecil di dalam laptopmu, mensimulasikan seolah-olah halaman webmu sedang aktif di internet.
:::

---

## 📁 Cara 2: Membuka File Secara Manual

Jika kamu tidak menggunakan Live Server, kamu tetap bisa membuka halaman webmu dengan cara biasa:

1. Buka folder proyek **`belajar-html`** lewat File Explorer (Windows) atau Finder (Mac).
2. Temukan file **`index.html`** di dalam folder tersebut.
3. Klik dua kali file tersebut (atau klik kanan → *Open With* → pilih Google Chrome).

Browser akan menampilkan halaman webmu dengan alamat URL yang menunjuk langsung ke partisi harddisk laptopmu, seperti:
`file:///C:/Users/NamaKamu/Documents/belajar-html/index.html`.

*Catatan: Cara ini cukup untuk belajar dasar, tetapi beberapa fitur tingkat lanjut (seperti memuat data eksternal) tidak akan berfungsi menggunakan protokol `file://` ini. Oleh karena itu, biasakan selalu menggunakan Live Server.*

---

## 🧠 Memahami Apa yang Baru Saja Terjadi

Mari kita bedah secara sederhana bagaimana browser membaca kode yang kamu ketik tadi:

- **Teks judul tab browser**: Browser membaca tag `<title>Halaman Web Pertamaku</title>` di bagian atas kode, lalu menuliskannya sebagai judul tab browser.
- **Teks besar di halaman**: Browser membaca tag `<h1>Halo, Dunia!</h1>` dan menggambarkannya sebagai judul utama dengan ukuran teks yang tebal dan besar.
- **Paragraf teks**: Browser membaca tag `<p>...</p>` dan menggambarkannya sebagai baris paragraf teks biasa.

Sekarang, coba letakkan jendela VS Code di sisi kiri layar monitor dan browser di sisi kanan layar. Ubah tulisan "Halo, Dunia!" menjadi namamu di VS Code. 

Jika kamu menggunakan **Live Server**, kamu akan melihat tampilan di browser langsung berubah seketika saat kamu mengetik perubahan kode tersebut!

Mari kita pelajari cara mengintip isi kode halaman web buatan kita menggunakan DevTools.

**[Lanjut: Mengenal DevTools →](/bab0/mengenal-devtools/)**
