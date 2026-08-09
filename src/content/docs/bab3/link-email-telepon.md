---
title: "Link Email & Telepon"
description: Memahami cara membuat tautan khusus untuk mengirim email, panggilan telepon, dan unduhan file di HTML.
---

Tautan tidak hanya digunakan untuk berpindah halaman. HTML mendukung protokol khusus di atribut `href` yang dapat memicu aplikasi bawaan di HP atau laptop pengunjung, seperti aplikasi email, aplikasi telepon, atau memicu proses download file.

---

## ✉️ Tautan Surel: Protokol `mailto:`

Untuk membuat tautan yang langsung membuka aplikasi email pengunjung (seperti *Outlook*, *Gmail*, atau *Apple Mail*) dengan alamat penerima yang sudah terisi otomatis, gunakan protokol **`mailto:`** diikuti alamat email tujuan.

```html
<!-- Mengirim email langsung -->
<a href="mailto:surel@example.com">Kirim Surel ke Saya</a>
```

### Tips Tambahan: Mengisi Judul dan Isi Email Otomatis
Kamu juga bisa mengatur judul (*subject*) dan draf isi pesan (*body*) menggunakan query parameter:

```html
<a href="mailto:surel@example.com?subject=Tanya%20Materi&body=Halo%20Mentor...">
  Tanya Materi HTML
</a>
```
*(Catatan: `%20` digunakan untuk merepresentasikan spasi kosong di dalam URL).*

---

## 📞 Tautan Telepon: Protokol `tel:`

Untuk membuat tautan yang langsung memicu aplikasi telepon (*dialer*) di HP pengunjung untuk melakukan panggilan, gunakan protokol **`tel:`** diikuti nomor telepon tujuan.

- **Sangat Penting**: Tuliskan nomor telepon lengkap dengan kode negara (misalnya `+62` untuk Indonesia) dan hindari spasi atau tanda strip di dalam nilainya agar bisa dideteksi oleh semua provider telepon.

```html
<!-- Memicu panggilan telepon -->
<a href="tel:+628123456789">Hubungi via Telepon</a>
```

Ketika diklik di perangkat HP, browsermu akan langsung membuka aplikasi telepon dan menyalin nomor tersebut ke papan panggil.

---

## 💾 Tautan Unduhan Berkas: Atribut `download`

Jika kamu ingin tautan tersebut mengunduh file (*download*) alih-alih membukanya di browser (seperti file PDF, gambar, atau dokumen ZIP), gunakan atribut boolean **`download`** di dalam tag jangkar.

```html
<!-- Memicu download file PDF -->
<a href="./berkas/cv-siswa.pdf" download>Unduh Resume (PDF)</a>
```

- **`download`**: Tanpa nilai, memberitahu browser untuk langsung menyimpannya ke folder *Downloads* di komputer pengunjung.
- **`download="nama-baru.pdf"`**: Menyimpan file sekaligus mengganti namanya secara otomatis saat terunduh.

Mari kita bahas bagaimana menyusun menu navigasi website yang rapi untuk menghubungkan beberapa halaman sekaligus.

**[Lanjut: Navigasi Website →](/bab3/navigasi-website/)**
