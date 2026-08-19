---
title: "Bagaimana Browser Bekerja"
description: Memahami proses rendering browser — dari URL yang diketik hingga halaman yang tampil.
---

Seperti yang sudah kita bahas, browser bertindak sebagai penerjemah kode. Proses menerjemahkan teks kode menjadi halaman web visual disebut **Rendering**.

---

## 🏗️ Alur Singkat Rendering Halaman Web

Ketika server mengirimkan file website ke browsermu, browser akan memprosesnya menggunakan langkah-langkah berikut:

```text
1. Browser menerima file teks index.html
       ↓
2. Browser membaca kode dari atas ke bawah, karakter demi karakter
       ↓
3. Browser membangun struktur halaman (DOM)
       ↓
4. Browser menerapkan gaya desain (CSS)
       ↓
5. Browser menggambar piksel warna di layarmu (Paint)
```

Karena browser membaca dari **atas ke bawah**, urutan penulisan kodemu sangat menentukan apa yang tampil terlebih dahulu di layar.

---

## 🛠️ Browser Engine: Mesin di Balik Layar

Masing-masing browser memiliki mesin rendering (*Browser Engine*) sendiri yang bertugas melakukan pekerjaan berat ini:

- **Blink**: Digunakan oleh Google Chrome, Microsoft Edge, Opera, dan Brave.
- **Gecko**: Digunakan oleh Mozilla Firefox.
- **WebKit**: Digunakan oleh Apple Safari (di iPhone, iPad, dan Mac).

Meskipun mesinnya berbeda, mereka semua mengikuti kesepakatan standar internasional yang sama agar kode HTML yang kamu tulis tampil seragam di browser mana pun. Standar ini diawasi oleh organisasi bernama **W3C (World Wide Web Consortium)**.

---

## 🖥️ Mengenal Google Chrome DevTools

Karena kita akan belajar menggunakan Google Chrome (atau browser berbasis Blink lainnya), kita memiliki senjata rahasia bernama **Chrome DevTools (Developer Tools)**.

DevTools memungkinkan kita mengintip kode HTML halaman mana pun langsung di browser kita.

Kita bisa membukanya dengan cara:
- **Windows/Linux**: Tekan tombol `F12` atau `Ctrl + Shift + I`
- **macOS**: Tekan tombol `Cmd + Option + I`
- **Klik Kanan**: Klik kanan di bagian halaman mana saja, lalu pilih **Inspect (Periksa)**.

Kita akan menggunakan alat luar biasa ini secara langsung nanti setelah kita membuat file HTML pertama kita!

**[Lanjut: HTML, CSS, JavaScript →](/bab0/html-css-javascript/)**
