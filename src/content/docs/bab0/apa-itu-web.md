---
title: "Apa itu Web?"
description: Memahami Internet, World Wide Web, URL, domain, dan bagaimana web bekerja secara konseptual.
---

Sebelum kita membuat website, kita harus tahu dulu **di mana website itu berada** dan **bagaimana cara kita mengaksesnya**.

---

## 🌐 Internet vs Web

Banyak orang mengira Internet dan Web adalah hal yang sama. Padahal keduanya berbeda secara konsep:

- **Internet** adalah **infrastruktur fisik** berupa jaringan kabel bawah laut, satelit, dan komputer di seluruh dunia yang saling terhubung. Analogi sederhananya, Internet adalah **jaringan jalan raya** global.
- **World Wide Web (Web)** adalah **sistem informasi** yang berjalan di atas Internet. Menggunakan analogi jalan raya di atas, Web adalah **kendaraan dan gedung-gedung** (website) yang berdiri di sepanjang jalan raya tersebut.

---

## 🏢 Browser dan Web Server

Dalam dunia web, ada dua aktor utama yang selalu bekerja sama:

1. **Browser (Client)**: Aplikasi di HP atau laptopmu yang kamu gunakan untuk menjelajah web (seperti Google Chrome, Firefox, Safari, atau Microsoft Edge). Browser bertindak sebagai **pemesan**.
2. **Web Server**: Komputer khusus berspesifikasi tinggi yang menyala 24 jam penuh di suatu tempat, bertugas menyimpan file-file website. Server bertindak sebagai **penyedia**.

---

## 🗺️ Bagaimana Website Bekerja?

Bayangkan kamu sedang pergi ke sebuah restoran. Kamu memesan makanan, koki memasaknya di dapur, lalu pelayan menyajikan makanan hangat di mejamu.

Proses serupa terjadi saat kamu mengetik alamat website (misalnya `https://google.com`) di browsermu:

```text
Laptop Kamu (Browser)
       │
   1. Minta File (Request via Internet)
       │
       ▼
Web Server (Menyimpan file website)
       │
   2. Kirim File HTML/CSS/JS (Response)
       │
       ▼
Laptop Kamu (Browser membaca kode & menggambar halaman)
```

Browser bertindak sebagai penerjemah. Ia menerima file teks mentah yang berisi kode-kode, lalu menerjemahkannya menjadi tampilan halaman visual yang indah di layarmu.

---

## 🏷️ Mengenal URL (Alamat Website)

Agar browsermu bisa menemukan server website yang tepat, ia membutuhkan alamat unik yang disebut **URL (Uniform Resource Locator)**.

Mari kita bedah alamat URL sederhana ini:

```text
https://  www.sekolahku.sch.id  /berita
  │               │                │
  │               │                └─ Path (Halaman spesifik yang dicari)
  │               └─ Domain (Nama alamat web server tujuan)
  └─ Protokol (Aturan berkomunikasi aman)
```

Dengan memahami domain dan path, browsermu tahu persis ke server mana ia harus meminta data dan halaman bagian apa yang perlu diambil.

Di halaman berikutnya, kita akan melihat lebih dekat bagaimana browser memproses file HTML yang dikirim oleh server!

**[Lanjut: Bagaimana Browser Bekerja →](/bab0/bagaimana-browser-bekerja/)**
