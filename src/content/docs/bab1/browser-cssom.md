---
title: "1.7 Pipeline Browser: Parsing, CSSOM, & Computed Style"
description: "Memahami bagaimana browser mengubah teks kode CSS menjadi CSS Object Model (CSSOM), Render Tree, dan menghitung Computed Style akhir."
---

Untuk menjadi developer yang memahami CSS secara mendalam, kamu perlu mengetahui **alur kerja rendering browser (*Critical Rendering Path*)**.

---

## 1. Enam Langkah Pipeline Rendering Browser

```text
1. HTML Parsing → Membaca HTML menjadi pohon DOM (Document Object Model)
2. CSS Parsing → Membaca CSS menjadi pohon CSSOM (CSS Object Model)
3. Render Tree → Menggabungkan DOM + CSSOM (hanya elemen yang tampak di layar)
4. Layout/Reflow → Menghitung posisi koordinat geometris & ukuran presisi tiap kotak
5. Paint → Menggambar warna piksel, border, bayangan, dan teks ke layar
6. Composite → Menggabungkan lapisan layer GPU menjadi tampilan final di monitor
```

---

## 2. Apa itu CSSOM (CSS Object Model)?

Sama seperti HTML yang diubah browser menjadi struktur pohon **DOM**, seluruh aturan CSS di dalam dokumen diubah menjadi pohon objek bernama **CSSOM**:

```text
CSSOM Tree
 └── body (font-family: Inter)
 ├── h1 (color: white; font-size: 2rem)
 └── div.card (background: #18181d)
 └── p (color: #9898a6)
```

---

## 3. Empat Tahap Nilai Properti: Dari Kode Menuju Layar

Nilai CSS yang kamu tulis di file `.css` mengalami 4 tahap transformasi sebelum menjadi piksel di monitor:

1. **Declared Value:** Nilai yang kamu tulis langsung di stylesheet (contoh: `font-size: 2rem;`).
2. **Cascaded Value:** Nilai pemenang setelah memperhitungkan konflik Cascade dan spesifisitas.
3. **Computed Value:** Nilai yang telah dihitung secara matematis oleh browser (contoh: `2rem` dikonversi menjadi `32px` berdasarkan ukuran root).
4. **Actual Value:** Nilai riil yang digambar di monitor setelah pembulatan piksel perangkat (*device pixel ratio*).

> [TIPS] **Kunci Pemahaman:** 
> Pada akhirnya, semua unit relatif (`rem`, `em`, `%`, `vh`, `vw`) akan dihitung dan dikonversi browser menjadi unit piksel absolut (`px`) pada tab **Computed** di DevTools!
