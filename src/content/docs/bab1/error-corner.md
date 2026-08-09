---
title: "Error Corner"
description: Kesalahan umum yang sering dilakukan pemula saat menulis HTML Fundamentals.
---

Belajar mengenali pola kesalahan akan membantumu menulis kode secara lebih percaya diri. Berikut adalah rangkuman kesalahan struktural yang paling sering dilakukan pemula saat mulai menulis HTML Fundamentals beserta cara menyelesaikannya.

---

## ❌ 1. Menulis Kode HTML dengan Huruf Kapital

**Penyebab Error**:
```html
<!-- ❌ SALAH: Sulit dibaca dan tidak sesuai standar modern -->
<H1>Halo Dunia</H1>
<P>Belajar HTML Fundamentals.</P>
```

**Mengapa Bermasalah**: Meskipun browser tetap bisa merendernya (karena HTML bersifat *case-insensitive* untuk tag), industri web modern telah sepakat menggunakan huruf kecil (*lowercase*) untuk semua penulisan tag dan atribut. Menulis dengan huruf besar membuat kodemu terlihat amatir dan sulit dibaca rekan tim.

**Cara Memperbaiki**: Selalu gunakan huruf kecil untuk semua tag:
```html
<!-- ✅ BENAR: Rapi dan standar industri -->
<h1>Halo Dunia</h1>
<p>Belajar HTML Fundamentals.</p>
```

---

## ❌ 2. Pelanggaran Aturan Nesting LIFO (Tumpang Tindih Tag)

**Penyebab Error**:
```html
<!-- ❌ SALAH: Tag <strong> ditutup setelah <p> ditutup -->
<p>Saya belajar <strong>sintaks HTML.</p></strong>
```

**Mengapa Bermasalah**: Ini melanggar prinsip *Last In, First Out* (LIFO). Elemen yang dibuka paling akhir harus ditutup paling awal. Tumpang tindih seperti ini membuat struktur halaman webmu tidak valid (invalid) dan bisa mengacaukan pembacaan browser.

**Cara Memperbaiki**: Pastikan tag yang berada di dalam diselesaikan terlebih dahulu sebelum tag luar ditutup:
```html
<!-- ✅ BENAR: Tag <strong> ditutup sebelum tag <p> ditutup -->
<p>Saya belajar <strong>sintaks HTML.</strong></p>
```

---

## ❌ 3. Menulis Lebih dari Satu Tag `<h1>` per Halaman

**Penyebab Error**: Menggunakan tag `<h1>` berkali-kali di satu file hanya untuk memperbesar tulisan.
```html
<!-- ❌ SALAH: Struktur konten menjadi membingungkan -->
<h1>Profil Rizki</h1>
<h1>Tentang Saya</h1>
<h1>Kontak</h1>
```

**Mengapa Bermasalah**: Tag `<h1>` adalah penanda judul utama halaman web. Bagi mesin pencari (seperti Google) dan pembaca layar (screen reader), mendeteksi lebih dari satu `<h1>` di satu halaman akan membuat mereka bingung menentukan topik utama dari website tersebut.

**Cara Memperbaiki**: Gunakan satu `<h1>` saja sebagai judul utama di bagian paling atas. Untuk sub-bagian di bawahnya, gunakan `<h2>`, lalu `<h3>` secara bertahap:
```html
<!-- ✅ BENAR: Hierarki heading terstruktur rapi -->
<h1>Profil Rizki</h1>
<h2>Tentang Saya</h2>
<h2>Kontak</h2>
```

---

## ❌ 4. Meletakkan Deklarasi DOCTYPE di Posisi yang Salah

**Penyebab Error**: Menulis teks lain atau tag HTML sebelum deklarasi DOCTYPE.
```html
<!-- ❌ SALAH: Browser akan masuk ke Quirks Mode -->
<html>
<!DOCTYPE html>
...
```

**Mengapa Bermasalah**: Deklarasi `<!DOCTYPE html>` bertindak sebagai instruksi awal bagi browser. Browser harus membaca instruksi ini di baris pertama, karakter pertama. Jika ada teks atau tag lain sebelum DOCTYPE, browser akan mengabaikannya dan masuk ke *Quirks Mode* (mode kompatibilitas jadul yang merusak tampilan CSS).

**Cara Memperbaiki**: Selalu letakkan `<!DOCTYPE html>` di baris paling pertama dokumen tanpa ada spasi atau baris kosong di depannya.

---

## ❌ 5. Menggunakan Tag Tampilan yang Deprecated (Usang)

**Penyebab Error**: Menggunakan tag seperti `<center>` atau `<font>` untuk menghias halaman.
```html
<!-- ❌ SALAH: Tag usang yang sudah dihapus dari standar HTML modern -->
<center>
  <font color="red">Selamat Datang</font>
</center>
```

**Mengapa Bermasalah**: HTML5 memisahkan tugas secara tegas: HTML bertugas mengatur **struktur konten**, sedangkan tampilan visual diatur oleh **CSS**. Menggunakan HTML untuk menghias halaman membuat file kodemu sangat kotor dan sulit dipelihara.

**Cara Memperbaiki**: Gunakan tag dasar untuk struktur, dan biarkan urusan warna atau perataan teks diatur oleh CSS di bab-bab berikutnya:
```html
<!-- ✅ BENAR: Struktur murni, visual akan diatur lewat file CSS -->
<p class="welcome-text">Selamat Datang</p>
```

Mari kita lanjut ke halaman ringkasan untuk merekap semua materi penting di bab ini!

**[Lanjut: Ringkasan →](/bab1/ringkasan/)**
