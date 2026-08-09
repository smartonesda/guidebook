---
title: "colspan & rowspan"
description: Menggabungkan beberapa kolom dan baris sel tabel menggunakan atribut colspan dan rowspan di HTML.
---

Saat merancang tabel data yang rumit, terkadang kita perlu menggabungkan beberapa kotak sel menjadi satu — mirip seperti fitur *Merge Cells* di aplikasi *Microsoft Excel*.

HTML menyediakan dua atribut khusus untuk kebutuhan ini: **`colspan`** dan **`rowspan`**.

---

## ↔️ 1. Menggabungkan Kolom Mendatar: Atribut `colspan`

Atribut `colspan` (singkatan dari *column span*) digunakan untuk menggabungkan sel secara **mendatar ke kanan** melewati beberapa kolom.

- *Format*: `colspan="jumlah_kolom_yang_digabungkan"`

```text
  Tanpa Colspan:
  ┌───────────┬───────────┐
  │   Cell 1  │   Cell 2  │
  └───────────┴───────────┘
  
  Dengan Colspan="2":
  ┌───────────────────────┐
  │        Cell 1         │
  └───────────────────────┘
```

### Contoh Kode:
```html
<tr>
  <!-- Menggabungkan sel ini mendatar melewati 2 kolom -->
  <td colspan="2">Total Nilai Akhir</td>
  <td>95</td>
</tr>
```

---

## ↕️ 2. Menggabungkan Baris Menurun: Atribut `rowspan`

Atribut `rowspan` (singkatan dari *row span*) digunakan untuk menggabungkan sel secara **menurun ke bawah** melewati beberapa baris.

- *Format*: `rowspan="jumlah_baris_yang_digabungkan"`

```text
  Tanpa Rowspan:
  ┌───────────┐
  │   Cell 1  │
  ├───────────┤
  │   Cell 2  │
  └───────────┘
  
  Dengan Rowspan="2":
  ┌───────────┐
  │           │
  │  Cell 1   │
  │           │
  └───────────┘
```

### Contoh Kode:
```html
<tr>
  <!-- Sel ini akan memakan ruang menurun melewati 2 baris ke bawah -->
  <td rowspan="2">Rizki Pratama</td>
  <td>Ujian Utama</td>
  <td>95</td>
</tr>
<tr>
  <!-- Perhatikan: baris kedua ini tidak memerlukan td nama siswa lagi! -->
  <td>Ujian Susulan</td>
  <td>90</td>
</tr>
```

---

## ⚠️ Aturan Keseimbangan Sel (Cell Count Math)

Saat menggunakan `colspan` atau `rowspan`, kamu harus berhati-hati menghitung jumlah sel agar tabel tidak penyok atau melar ke luar garis.

**Rumus Keseimbangan**:
- Jika baris pertamamu memiliki **3 kolom**, maka setiap baris di bawahnya jumlah sel-nya (`<td>` + nilai `colspan`) harus bernilai **tepat 3**.
- Jika kamu memberikan `rowspan="2"` pada suatu sel, maka pada baris di bawahnya kamu harus **mengurangi satu buah tag `<td>`** karena ruang tersebut sudah diklaim oleh sel di atasnya.

Mari kita pelajari contoh studi kasus lengkap penerapan list dan tabel ke dalam proyek portfolio kita!

**[Lanjut: Studi Kasus →](/bab5/studi-kasus/)**
