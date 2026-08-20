---
title: "1.8 Memeriksa CSS dengan Browser DevTools"
description: "Panduan praktis menggunakan Browser Developer Tools untuk menginspeksi elemen, membaca tab Styles vs Computed, dan live-editing CSS."
---

**Browser DevTools** adalah alat paling penting yang digunakan setiap frontend engineer setiap hari.

Untuk membuka DevTools:
- Tekan tombol **F12** di keyboard, atau
- Klik kanan elemen mana saja di halaman web &rarr; pilih **Inspect (Periksa Elemen)**.

---

## 1. Panel Elements & Tab Styles

Di tab **Styles**, kamu dapat melihat seluruh ruleset yang menargetkan elemen yang sedang kamu pilih:

```text
Styles Pane:
 .btn-primary {
 background-color: #e8392b; ← Aturan yang aktif
 color: #ffffff;
 }
 
 button {
 background-color: grey; ← Dicoret (karena kalah spesifisitas dari .btn-primary)
 font-size: 16px;
 }
```

### Arti Simbol di Tab Styles:
- **Teks biasa:** Aturan aktif yang saat ini sedang berlaku.
- **Teks dicoret (*strikethrough*):** Aturan yang ditimpa oleh aturan lain yang lebih spesifik atau ditulis lebih bawah.
- **Tanda seru kuning:** Aturan memiliki kesalahan penulisan (*invalid property/value*).

---

## 2. Tab Computed: Melihat Nilai Riil Akhir

Tab **Computed** menampilkan nilai akhir absolut (dalam satuan `px` dan warna hex/rgb) yang benar-benar digunakan browser untuk menggambar elemen tersebut di layar:

- Jika kamu menulis `font-size: 1.5rem`, tab Computed akan menunjukkan `24px`.
- Jika kamu menulis `width: 50%`, tab Computed akan menunjukkan lebar pastinya, misal `450px`.

---

## 3. Fitur Live-Editing (Ubah & Lihat Hasil Seketika)

Kamu bisa mengklik nilai properti apa saja di tab Styles untuk mengubahnya langsung di layar secara real-time!
- Klik kotak warna untuk membuka color-picker bawaan browser.
- Gunakan tombol panah Atas/Bawah di keyboard untuk menaikkan/menurunkan angka ukuran piksel secara bertahap.
- Centang / hapus centang kotak di samping properti untuk mengaktifkan / menonaktifkan aturan sementara.
