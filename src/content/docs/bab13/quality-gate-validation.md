---
title: "Quality Gate & Validasi"
description: Prosedur pengujian Quality Gate resmi — W3C Validator, Audit Aksesibilitas Keyboard, dan Uji Responsif sebelum proyek dinyatakan selesai.
---

Sebelum mempublikasikan Final Project-mu, websitemu harus melewati **Quality Gate** — yaitu serangkaian pengujian kualitas otomatis dan manual.

---

## 🚦 3 Tahap Quality Gate

```
[ 1. UJI VALIDATOR W3C ] ──► [ 2. UJI AKSESIBILITAS KEYBOARD ] ──► [ 3. UJI MOBILE VIEWPORT ]
```

---

## 🟢 Tahap 1: Uji W3C HTML Validator

1. Buka `https://validator.w3.org/`.
2. Upload file HTML utama proyekmu.
3. Pastikan mendapatkan status **Document checking completed. No errors or warnings to show.**

```
❌ JIKA ADA ERROR:
- Periksa baris kode yang ditunjukkan validator.
- Periksa tag yang lupa ditutup atau atribut duplikat.
- Perbaiki hingga status berubah menjadi HIJAU.
```

---

## 🟢 Tahap 2: Uji Aksesibilitas Keyboard (Tanpa Mouse)

1. Lepaskan mouse dari jangkauan tanganmu.
2. Buka berkas HTML proyekmu di browser.
3. Tekan **`Tab`**: Pastikan Skip Navigation Link muncul di paling atas.
4. Tekan **`Enter`**: Pastikan fokus melompat langsung ke elemen `<main>`.
5. Tekan **`Tab`** berulang kali: Pastikan seluruh link navigasi, tombol, dan form input dapat dijangkau.
6. Periksa visual: Pastikan **garis outline fokus (:focus-visible)** terlihat jelas di setiap elemen interaktif.

---

## 🟢 Tahap 3: Uji Tampilan Mobile Viewport

1. Buka Chrome DevTools (`F12` / `Ctrl + Shift + I`).
2. Klik ikon **Toggle Device Toolbar** (`Ctrl + Shift + M`).
3. Pilih perangkat mobile (contoh: iPhone 14 atau Pixel 7).
4. Pastikan teks tidak terlalu kecil, tidak ada scroll horizontal yang rusak, dan seluruh konten terbaca dengan nyaman.

---

**[Lanjut: Panduan Presentasi Karya →](/bab13/presentation-guide/)**
