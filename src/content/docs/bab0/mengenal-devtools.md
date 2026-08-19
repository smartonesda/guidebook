---
title: "Mengenal DevTools"
description: Pengenalan Developer Tools browser — alat wajib setiap web developer.
---

**DevTools (Developer Tools)** adalah alat bantu luar biasa yang sudah tertanam di dalam browsermu. Melalui DevTools, kamu bisa melihat dan memanipulasi struktur kode website apa pun di internet.

---

## 🛠️ Cara Membuka DevTools di Google Chrome

Buka halaman web pertamamu di browser, lalu buka DevTools menggunakan salah satu cara di bawah ini:

| Cara | Tombol Windows/Linux | Tombol macOS |
|---|---|---|
| Shortcut Utama | Tekan tombol **`F12`** | Tekan **`Cmd + Option + I`** |
| Shortcut Alternatif | Tekan **`Ctrl + Shift + I`** | Tekan **`Cmd + Shift + I`** |
| Melalui Menu Browser | Klik menu tiga titik (⋮) → **More Tools** → **Developer Tools** | |
| Inspect Langsung | Klik kanan pada teks halaman → pilih **Inspect (Periksa)** | |

---

## 🔍 Panel Utama yang Paling Sering Digunakan

Ketika panel DevTools terbuka (biasanya muncul di sisi kanan atau bawah halaman), kamu akan melihat beberapa tab menu. Berikut dua tab terpenting untuk belajar HTML:

### 1. Tab "Elements"
Tab ini menampilkan struktur HTML utuh dari halaman web yang sedang aktif. 
- Saat kamu mengarahkan kursor (*hover*) ke salah satu tag HTML di tab Elements, browser akan menyorot elemen tersebut di halaman dengan warna biru (menandakan area konten) dan oranye (menandakan margin luar).

### 2. Tab "Console"
Console bertindak sebagai terminal log dan error. Jika ada penulisan kode JavaScript yang salah, browsermu akan menampilkan pesan error berwarna merah di tab Console ini.

---

## 🧪 Eksperimen Menyenangkan: Mengubah Isi Web Orang Lain!

Mari lakukan latihan interaktif sederhana untuk membuktikan bahwa browser menerjemahkan kode HTML secara langsung:

1. Klik ikon kursor kecil di pojok kiri atas panel DevTools (ikon **Select Element**).
2. Arahkan kursor ke judul **"Halo, Dunia!"** di halaman webmu, lalu klik kiri. Kode tag `<h1>` yang bersangkutan akan otomatis tersorot di tab Elements.
3. Klik dua kali teks *"Halo, Dunia!"* yang ada di dalam panel Elements tersebut.
4. Ubah tulisannya menjadi kalimat sesukamu, lalu tekan Enter.
5. Perhatikan halaman webmu! Teks judulnya akan langsung berubah mengikuti ketikan barunya.

:::note[Catatan Penting]
Perubahan yang kamu lakukan di DevTools hanya bersifat sementara di memori browser laptopmu saja. File asli `index.html` di komputermu tidak akan berubah. Jika kamu me-refresh halaman web tersebut, tampilannya akan kembali seperti semula.
:::

Mari pelajari beberapa kesalahan umum yang sering dialami oleh pemula agar kita bisa menghindarinya.

**[Lanjut: Error Corner →](/bab0/error-corner/)**
