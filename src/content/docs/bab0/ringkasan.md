---
title: "Ringkasan & Mini Project"
description: "Rangkuman komprehensif BAB 0, proyek mandiri First Styled Page, pertanyaan refleksi, dan jembatan menuju BAB 1."
---

Selamat! Kamu telah menyelesaikan seluruh fondasi mental di **BAB 0: Getting Started**. 

Mari kita rangkum poin-poin paling penting sebelum kamu membangun proyek pertamamu.

---

## Ringkasan Poin Kunci BAB 0

1. **CSS adalah Sistem, Bukan Hafalan**: CSS bertugas mengatur presentasi dan tata letak visual, terpisah dari struktur konten (HTML) dan perilaku logika (JavaScript).
2. **Pohon Render Browser**: Browser mengubah HTML menjadi **DOM**, CSS menjadi **CSSOM**, menggabungkannya menjadi **Render Tree**, menghitung geometri fisik (**Layout**), lalu menggambar piksel ke layar (**Paint**).
3. **Standar Industri adalah External CSS**: Selalu gunakan file `.css` terpisah yang dihubungkan melalui tag `<link rel="stylesheet" href="style.css">`.
4. **DevTools Adalah Sahabat Terbaik**: Gunakan panel *Elements* dan *Styles* untuk menginspeksi elemen, mengubah nilai secara live, dan men-debug aturan yang bentrok.
5. **Dokumentasi Resmi**: Cari referensi akurat di **MDN Web Docs** (`mdn css [nama_fitur]`).
6. **Kebiasaan Debugging**: Periksa titik koma, pastikan path file benar, sertakan satuan ukuran (`px`, `rem`), dan gunakan tanda titik (`.`) untuk class.

---

## Mini Project: "My First Styled Page"

Sekarang saatnya membuktikan pemahamanmu dengan membuat halaman profil web pertamamu dari nol!

### Spesifikasi Proyek:
1. Buat folder baru di komputermu bernama `proyek-bab0`.
2. Buat dua file: `index.html` dan `style.css`.
3. Hubungkan kedua file menggunakan tag `<link>`.
4. Terapkan styling minimal:
 - Warna latar belakang halaman (*background-color*).
 - Sebuah wadah kartu (*card container*) dengan warna putih/gelap, padding, border-radius membulat, dan bayangan (*box-shadow*).
 - Judul nama dengan warna aksen merah.
 - Paragraf deskripsi singkat dengan font yang mudah dibaca.
 - Sebuah tombol aksi dengan efek hover.

---

### Kode Solusi Referensi

Jika kamu ingin melihat contoh struktur kodenya:

```html title="index.html"
<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Profil Saya — CSS Guidebook</title>
 <link rel="stylesheet" href="style.css">
</head>
<body>

 <main class="card">
 <span class="badge">Siswa SMK RPL</span>
 <h1 class="name">Budi Pratama</h1>
 <p class="bio">
 Halo! Saya sedang belajar CSS dari nol menggunakan CSS Guidebook. 
 Saya ingin menjadi frontend engineer profesional.
 </p>
 <a href="https://github.com" class="btn">Lihat Portofolio</a>
 </main>

</body>
</html>
```

```css title="style.css"
/* Reset margin dasar browser */
* {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}

body {
 background-color: #0c0c0e;
 color: #f0f0f3;
 font-family: system-ui, -apple-system, sans-serif;
 min-height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 20px;
}

.card {
 background-color: #19191e;
 border: 1px solid rgba(255, 255, 255, 0.1);
 border-radius: 16px;
 padding: 32px;
 max-width: 400px;
 width: 100%;
 box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
 text-align: center;
}

.badge {
 display: inline-block;
 background-color: rgba(232, 57, 43, 0.15);
 color: #e8392b;
 border: 1px solid rgba(232, 57, 43, 0.3);
 border-radius: 99px;
 padding: 4px 12px;
 font-size: 12px;
 font-weight: 700;
 text-transform: uppercase;
 margin-bottom: 16px;
}

.name {
 font-size: 24px;
 font-weight: 800;
 margin-bottom: 12px;
 color: #ffffff;
}

.bio {
 font-size: 14px;
 color: #9898a6;
 line-height: 1.6;
 margin-bottom: 24px;
}

.btn {
 display: inline-block;
 background-color: #e8392b;
 color: #ffffff;
 text-decoration: none;
 font-size: 14px;
 font-weight: 600;
 padding: 12px 24px;
 border-radius: 8px;
 transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn:hover {
 background-color: #ff6b5b;
 transform: translateY(-2px);
}
```

---

## 🪞 Pertanyaan Refleksi (Metacognition)

Sebelum melangkah ke bab berikutnya, jawablah 4 pertanyaan ini dalam hati:

1. **Apa yang berubah di layar ketika kamu menambahkan file CSS ke file HTML?**
2. **Jika sebuah warna tidak muncul di browser, apa hal pertama yang akan kamu lakukan di panel DevTools?**
3. **Mengapa para profesional lebih memilih External CSS dibanding Inline CSS?**
4. **Di mana kamu akan mencari penjelasan jika kamu menemukan nama properti CSS yang belum pernah kamu lihat?**

---

## Jembatan Menuju BAB 1: CSS Fundamentals

Fondasi mental dan peralatan kerjamu kini sudah sangat kokoh. Di bab selanjutnya (**BAB 1: CSS Fundamentals**), kita akan mulai membedah anatomi mendalam sintaks CSS:
- Bagaimana aturan *Cascade* bekerja saat dua aturan bertabrakan?
- Apa itu *Inheritance* dan properti apa saja yang diwariskan ke elemen anak?
- Bagaimana browser menghitung prioritas *Specificity* dari tag, class, hingga ID?

Sampai jumpa di BAB 1!

**[Lanjut ke BAB 1: CSS Fundamentals →](/bab1/introduction/)**
