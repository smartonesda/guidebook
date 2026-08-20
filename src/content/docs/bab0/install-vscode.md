---
title: "Setup VS Code untuk CSS"
description: "Panduan konfigurasi editor VS Code, pemasangan ekstensi esensial, dan shortcut produktivitas untuk CSS."
---

Menulis CSS dengan konfigurasi editor yang tepat akan menghemat 50% waktumu dan melindungimu dari kesalahan ketik (*typo*) yang sepele. Mari kita lakukan setup singkat bersama-sama.

---

## Langkah 1: Memasang Ekstensi Wajib

Buka VS Code, klik ikon **Extensions** di bilah sisi kiri (`Ctrl + Shift + X` di Windows/Linux atau `Cmd + Shift + X` di Mac), lalu cari dan pasang ekstensi berikut:

1. **Live Server** (oleh *Ritwick Dey*)
 - Klik tombol **Install**.
 - Ekstensi ini menambahkan tombol **"Go Live"** di pojok kanan bawah jendela VS Code.
2. **Prettier - Code Formatter** (oleh *Prettier*)
 - Memformat indentasi dan spasi file CSS-mu secara otomatis agar rapi dan konsisten setiap kali disimpan.
3. **CSS Peek** (oleh *Pranay Kothari*)
 - Memungkinkanmu mengintip (*hover*) aturan CSS dari nama class di dalam file HTML secara langsung tanpa harus membuka file CSS.

---

## Langkah 2: Mengaktifkan Format on Save

Agar kodemu otomatis dirapikan setiap kali kamu menekan `Ctrl + S`:
1. Buka Settings dengan menekan `Ctrl + ,` (Windows/Linux) atau `Cmd + ,` (Mac).
2. Di kotak pencarian atas, ketik: `format on save`.
3. Centang opsi **Editor: Format On Save**.
4. Di kotak pencarian, ketik: `default formatter`, lalu pilih **Prettier - Code Formatter**.

---

## Langkah 3: Membuat Struktur Folder Project Pertama

Buat sebuah folder baru di komputermu, misalnya bernama `belajar-css`, lalu buka folder tersebut di VS Code (`File > Open Folder...`).

Struktur standar sebuah proyek web pemula adalah sebagai berikut:

```text
belajar-css/
│
├── index.html → File halaman utama HTML
└── style.css → File stylesheet utama CSS
```

---

## ⌨️ Shortcut Produktivitas yang Berguna

| Aksi | Windows / Linux | Mac |
| :--- | :--- | :--- |
| **Komentar Satu Baris CSS** | `Ctrl + /` | `Cmd + /` |
| **Duplikasi Baris ke Bawah** | `Shift + Alt + Panah Bawah` | `Shift + Option + Panah Bawah` |
| **Pindahkan Baris ke Atas/Bawah** | `Alt + Panah Atas/Bawah` | `Option + Panah Atas/Bawah` |
| **Buka File Cepat** | `Ctrl + P` | `Cmd + P` |

Sekarang peralatan dan editor kodemu sudah siap 100%! Mari kita pelajari 3 cara memasang CSS ke dalam dokumen HTML di halaman berikutnya.

**[Lanjut: Tiga Cara Memasang CSS →](/bab0/file-pertama/)**
