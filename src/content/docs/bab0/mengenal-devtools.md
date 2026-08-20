---
title: "Mengenal Browser DevTools"
description: "Menguasai panel Elements, Styles, Computed, dan teknik live-editing CSS langsung di browser."
---

Jika ada satu alat yang paling sering digunakan oleh frontend engineer setiap hari, alat itu adalah **Browser Developer Tools (DevTools)**.

DevTools sudah terpasang langsung di dalam browser (Chrome, Firefox, Edge, Safari) tanpa perlu menginstal plugin tambahan apa pun. Dengan DevTools, kamu bisa mengintip kode di balik website mana pun di internet, mengubah warna secara langsung, dan menguji layout sebelum menulisnya secara permanen di VS Code.

---

## ⌨️ Cara Membuka DevTools

Ada 3 cara mudah membuka DevTools di komputermu:

1. **Klik Kanan Elemen > Inspect**: Klik kanan pada tombol atau teks apa pun di halaman web, lalu pilih **Inspect** (*Periksa Elemen*).
2. **Shortcut Universal**:
 - **Windows / Linux**: Tekan `F12` atau `Ctrl + Shift + I`
 - **Mac**: Tekan `Cmd + Option + I`
3. **Shortcut Langsung ke Selector Elemen**:
 - **Windows / Linux**: `Ctrl + Shift + C`
 - **Mac**: `Cmd + Shift + C`

---

## ️ Dua Panel Utama DevTools untuk CSS

Ketika DevTools terbuka, kamu akan melihat dua area kerja utama:

```text
┌──────────────────────────────────────┬──────────────────────────────────────┐
│ PANEL KIRI: ELEMENTS (Pohon DOM) │ PANEL KANAN: STYLES & COMPUTED │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ <div class="kartu"> │ .kartu { │
│ <h1>Selamat Datang</h1> │ background: #19191e; │
│ <p>Teks artikel...</p> │ padding: 24px; │
│ </div> │ border-radius: 12px; │
│ │ } │
│ [Sorot elemen untuk melihat ukuran] │ [Ubah nilai secara langsung di sini] │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

### 1. Panel Elements (Kiri)
Menampilkan struktur pohon DOM HTML yang sedang aktif saat ini.
- Ketika kamu mengarahkan kursor mouse ke suatu baris tag HTML di panel ini, browser akan memberi sorotan (*highlight*) visual pada elemen tersebut di layar:
 - Warna **Kuning/Oranye**: Menunjukkan area **Margin** (jarak luar).
 - Warna **Hijau**: Menunjukkan area **Padding** (jarak dalam).
 - Warna **Biru**: Menunjukkan area **Content** (isi teks/gambar).

### 2. Panel Styles (Kanan)
Menampilkan semua aturan CSS yang sedang mempengaruhi elemen yang kamu pilih:
- Diurutkan berdasarkan prioritas spesifisitas dari atas ke bawah.
- Aturan yang dicoret (*strikethrough*) menandakan bahwa aturan tersebut ditimpa (*overridden*) oleh aturan lain yang lebih spesifik atau ditulis lebih baru.

---

## Trik Live-Editing: Bereksperimen Tanpa Takut

Di panel **Styles**, kamu bisa melakukan hal-hal luar biasa berikut:

1. **Mengubah Nilai Secara Instan**: Klik dua kali pada angka atau warna (misal: `16px`), lalu ketik angka baru (misal: `32px`). Layar akan berubah saat itu juga!
2. **Menggeser Angka dengan Tombol Panah**: Tempatkan kursor di angka, lalu tekan tombol **Panah Atas / Bawah** di keyboard untuk menambah/mengurangi nilai per 1 piksel (`Shift + Panah` untuk kelipatan 10px).
3. **Mematikan/Menyalakan Aturan**: Arahkan kursor ke deklarasi CSS, lalu hilangkan centang pada kotak centang (*checkbox*) di sebelah kiri untuk melihat bagaimana tampilan jika aturan itu dimatikan.
4. **Memilih Warna dengan Color Picker Visual**: Klik kotak kecil warna di sebelah nilai kode hex untuk membuka jendela pemilih warna (*eyedropper & color picker*).

:::caution[Ingat: Perubahan di DevTools Bersifat Sementara!]
Semua perubahan yang kamu lakukan di DevTools hanya terjadi di memori sementara browser. Jika kamu memuat ulang halaman (*refresh*), halaman akan kembali ke kode asli. Setelah kamu menemukan nilai CSS yang pas di DevTools, **jangan lupa menyalin nilai tersebut ke file `style.css` di VS Code!**
:::

---

## Tab Computed: Nilai Akhir yang Dihitung Browser

Di sebelah tab **Styles**, ada tab bernama **Computed**:
- Menampilkan nilai akhir absolut dalam satuan piksel (`px`) setelah semua perhitungan matematika, pewarisan (*inheritance*), dan unit relatif (`rem`, `%`, `vw`) selesai dihitung oleh browser.
- Menampilkan diagram kotak interaktif **Box Model** yang memperlihatkan angka pasti dari content, padding, border, dan margin.

Sekarang kamu sudah memiliki alat investigasi terbaik. Mari kita pelajari apa saja kesalahan paling umum yang sering dialami pemula di halaman **Error Corner** berikutnya!

**[Lanjut: Error Corner (5 Kesalahan Pemula) →](/bab0/error-corner/)**
