---
title: "Anatomi Elemen HTML"
description: Memahami tag, elemen, atribut, void element, block vs inline, dan hubungan parent-child — terminologi fundamental yang dipakai seumur karier developer.
---

Tiga istilah ini — **tag**, **elemen**, **atribut** — sering digunakan bergantian dalam percakapan sehari-hari, padahal artinya berbeda secara teknis. Memahami perbedaannya sejak awal akan membuatmu lebih presisi saat membaca dokumentasi dan mencari penyebab error (*debugging*).

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan halaman ini, kamu akan mampu:
- Membedakan definisi tag, elemen, dan atribut secara tepat.
- Mengidentifikasi setiap komponen penyusun baris kode HTML.
- Menuliskan void elements (tag mandiri) dengan benar.
- Menjelaskan perbedaan sifat block elements dan inline elements.
- Menerapkan hubungan kekeluargaan tag (parent-child, sibling, dan nesting) sesuai aturan LIFO.

---

## 🧠 Teori: Tiga Konsep Fundamental

### 1. Tag (Penanda)
**Tag** adalah teks perintah pembuka atau penutup yang ditulis di antara kurung siku `<` dan `>`. Tag bertugas sebagai **sinyal** bagi browser untuk mengetahui di mana sebuah konten dimulai dan berakhir.

- **Tag Pembuka (Opening Tag)**: `<p>`
- **Tag Penutup (Closing Tag)**: `</p>` (selalu ditandai dengan garis miring `/` sebelum nama tag).
- **Tag Mandiri (Self-Closing Tag)**: `<br>` atau `<hr>` (void elements yang tidak memiliki tag penutup khusus).

---

### 2. Elemen (Utuh)
**Elemen** adalah gabungan utuh dari **tag pembuka + konten + tag penutup**.

Mari bedah gambaran struktur elemen di bawah ini:

```text
┌─── Elemen Judul Utama (Elemen Lengkap) ───────────────────┐
│                                                            │
│     <h1>    Halo Dunia!    </h1>                           │
│      │          │            │                             │
│      │          │            └─ Tag Penutup (Closing tag)  │
│      │          └─ Konten Teks (Text Content)              │
│      └─ Tag Pembuka (Opening tag)                          │
└────────────────────────────────────────────────────────────┘
```

Sebuah elemen bisa berisi:
- Konten teks biasa (seperti contoh di atas).
- Elemen HTML lain di dalamnya (bersarang / *nested*).
- Kosong tanpa isi (seperti tag pembatas `<hr>`).

---

### 3. Atribut (Kata Sifat)
**Atribut** adalah informasi atau pengaturan tambahan yang disisipkan di dalam tag pembuka. Atribut selalu ditulis dalam format: `nama_atribut="nilai_atribut"`.

Perhatikan contoh penulisan atribut di bawah ini:

```text
  <p class="deskripsi" id="paragraf-satu">Belajar HTML...</p>
   │   │        │        │        │
   │   │        │        │        └─ Nilai atribut id ("paragraf-satu")
   │   │        │        └─ Nama atribut id
   │   │        └─ Nilai atribut class ("deskripsi")
   │   └─ Nama atribut class
   └─ Tag Pembuka
```

---

## 🌍 Analogi Sederhana: Kalimat Bahasa Indonesia

Untuk memudahkan ingatanmu, mari gunakan analogi tata bahasa:

- **Tag** bagaikan **Kata Benda** (entitas utama, misalnya: *Mobil*).
- **Atribut** bagaikan **Kata Sifat** (keterangan tambahan yang memodifikasi kata benda, misalnya: *Warna merah*, *Merek Toyota*).
- **Konten** bagaikan **Penumpang** yang berada di dalam mobil tersebut.

Di dalam kode HTML:
```html
<p class="penting">Perhatian!</p>
```
*Mobil*-nya adalah tag paragraf `<p>`, *kata sifat*-nya adalah ia memiliki kelas `"penting"`, dan *penumpang*-nya adalah teks *"Perhatian!"*.

---

## 💻 Aturan Penulisan Atribut (Sintaks)

Saat menulis atribut di dalam tag pembuka, patuhi aturan standar berikut:

### 1. Gunakan Tanda Kutip Ganda
Selalu bungkus nilai atribut menggunakan tanda kutip ganda (`"..."`). Ini adalah standar industri yang paling aman dan rapi.

```html
<!-- ✅ BENAR: Standar industri -->
<p class="intro">Halo</p>

<!-- ❌ SALAH: Tidak menggunakan kutip (bisa memicu error jika ada spasi) -->
<p class=intro>Halo</p>
```

### 2. Penulisan Nama Atribut yang Konsisten
Tulis nama atribut menggunakan huruf kecil (*lowercase*). Jika terdiri dari dua kata, gunakan tanda hubung strip (kebab-case) untuk penamaan nilai pengenal:

```html
<!-- ✅ BENAR: Menggunakan huruf kecil dan tanda strip -->
<p id="deskripsi-profil">Isi teks...</p>
```

---

## ↕️ Sifat Elemen: Block vs Inline

Browser mengelompokkan elemen HTML ke dalam dua tipe perilaku tampilan di layar:

### 1. Block Elements (Elemen Blok)
Elemen block adalah elemen yang **selalu memulai baris baru** di browser dan lebarnya secara otomatis memenuhi 100% lebar halaman.
- *Contoh yang sudah dipelajari*: Tag `<h1>` sampai `<h6>` dan `<p>`.
- *Browser behavior*: Jika kamu menulis dua paragraf `<p>`, mereka otomatis tampil menumpuk ke bawah, bukan sejajar ke samping.

### 2. Inline Elements (Elemen Baris)
Elemen inline adalah elemen yang **tidak membuat baris baru** dan lebarnya hanya selebar konten yang ada di dalamnya. Mereka mengalir bersama teks di sekitarnya.
- *Contoh*: Tag penekanan teks (seperti yang akan kita pelajari di bab berikutnya).

---

## 🌳 Hubungan Bersarang: Parent, Child, dan Sibling

Ketika kita memasukkan sebuah elemen ke dalam elemen lain (*nesting*), kita menciptakan hubungan silsilah keluarga antar tag:

```html
<body>
  <h1>Judul Profil</h1>
  <p>Nama saya Budi.</p>
</body>
```

Berdasarkan struktur di atas:
- **`<body>`** bertindak sebagai **Parent** (orang tua) karena ia membungkus tag `<h1>` dan `<p>`.
- **`<h1>`** dan **`<p>`** bertindak sebagai **Child** (anak) dari tag `<body>`.
- **`<h1>`** dan **`<p>`** memiliki hubungan sebagai **Sibling** (saudara kandung) karena mereka berada di tingkat yang sama di bawah parent yang sama.

### Aturan Emas Nesting: LIFO (Last In, First Out)
Tag yang dibuka terakhir harus ditutup terlebih dahulu sebelum tag luar ditutup. Jangan menulis tag saling tumpang tindih!

```html
<!-- ❌ SALAH: Tag <strong> ditutup setelah tag <p> ditutup (tumpang tindih) -->
<p>Saya belajar <strong>HTML.</p></strong>

<!-- ✅ BENAR: LIFO dipatuhi secara tertib -->
<p>Saya belajar <strong>HTML.</strong></p>
```

---

## 🎯 Mini Challenge

**Tugas 1 (Detektif Kode)**: Periksa kode di bawah ini dan temukan 2 kesalahan aturan nesting/sintaks yang membuatnya tidak valid:

```html
<p>Halo siswa kelas <h2>RPL</h2></p>
<p id="paragraf-satu" id="paragraf-dua">Belajar dasar HTML</p>
```

**Tugas 2**: Buatlah satu contoh struktur kode HTML minimalis yang memuat:
- Satu judul utama `<h1>`.
- Satu paragraf pembuka `<p>`.
- Satu komentar HTML penanda isi.
- Terapkan indentasi 2 spasi yang rapi untuk semua tag di dalam `<body>`.

---

## 🧪 Quiz

**1.** Gabungan antara tag pembuka, isi konten, dan tag penutup disebut...
- A. Tag
- B. Elemen ✅
- C. Atribut
- D. Deklarasi

**2.** Di bagian manakah atribut harus selalu ditulis?
- A. Di dalam tag pembuka ✅
- B. Di dalam tag penutup
- C. Di tengah-tengah konten teks
- D. Di baris DOCTYPE

**3.** Tag mana di bawah ini yang merupakan contoh Block Element?
- A. Tag `<span>`
- B. Tag `<strong>`
- C. Tag `<p>` ✅
- D. Tag `<img>`

**4.** Mana penulisan nesting yang BENAR sesuai aturan LIFO?
- A. `<h1><p>Teks</p></h1>` (Paragraf di dalam heading tidak valid secara semantik)
- B. `<p>Belajar <strong>HTML</p></strong>`
- C. `<p>Belajar <strong>HTML</strong></p>` ✅
- D. `<p>Belajar <strong>HTML`

---

## 📚 Ringkasan

- **Tag**: Penanda berupa `<tag>`.
- **Elemen**: Tag + isi konten + tag penutup.
- **Atribut**: Properti tambahan di tag pembuka (misal: `class="nama"`).
- **Block**: Elemen yang otomatis turun ke baris baru (seperti `<h1>` dan `<p>`).
- **Inline**: Elemen yang mengalir sejajar dengan teks.
- **LIFO**: Tag terakhir masuk harus keluar/ditutup pertama kali.

**[Lanjut: Komentar HTML →](/bab1/komentar-html/)**
