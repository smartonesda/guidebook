---
title: "Error Corner"
description: Kesalahan fatal yang paling sering terjadi saat mengeksekusi Mini Project dan cara menghindari jebakannya.
---

Saat mengerjakan proyek web mini secara mandiri, ada beberapa jebakan umum yang sering memicu error atau mengurangi nilai kualitas proyekmu.

---

## ❌ 1. Terjebak "Tutorial Paralysis"
Selalu merasa ragu untuk mengetik tag awal sebelum melihat contoh kode lengkap dari orang lain.
- **Penyebab**: Takut salah struktur saat memulai proyek.
- **Solusi**: Mulai dari merancang **sketsa blok kotak di kertas** (Header -> Nav -> Main -> Footer), baru menerjemahkannya ke tag HTML.

---

## ❌ 2. Mencampur Aksen Visual (CSS) ke dalam Kode HTML
Menggunakan elemen HTML jadul seperti `<font>`, `<center>`, atau atribut `bgcolor` untuk mengatur visual halaman.
- **Penyebab**: Ingin membuat tampilan menarik dengan cepat tanpa file CSS terpisah.
- **Solusi**: Biarkan HTML murni menangani **makna dan struktur data**. Serahkan seluruh estetika tampilan ke file CSS eksternal.

---

## ❌ 3. Mengabaikan Pengujian di Perangkat Ponsel (Mobile Viewport)
Hanya menguji proyek di layar laptop besar tanpa memeriksa tampilannya di layar ponsel.
- **Penyebab**: Lupa memasang tag `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
- **Solusi**: Selalu pasang meta viewport di baris pertama `<head>` dan uji halaman menggunakan **Toggle Device Toolbar** di Chrome DevTools (`Ctrl + Shift + I` -> `Ctrl + Shift + M`).

---

## ❌ 4. Lupa Menguji Aksesibilitas Keyboard
Menganggap proyek selesai hanya karena semua tombol dan tautan bisa diklik dengan mouse.
- **Penyebab**: Tidak pernah mencoba menavigasi halaman menggunakan tombol `Tab`.
- **Solusi**: Biasakan melakukan "Uji Bebas Mouse" selama 1 menit pada setiap proyek yang selesai kamu buat.

---

**[Lanjut: Ringkasan →](/bab12/ringkasan/)**
