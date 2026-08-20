---
title: "1.5 Shorthand vs Longhand Properties"
description: "Memahami konsep properti ringkas (shorthand) versus properti terpisah (longhand), arah jarum jam TRBL, dan jebakan reset bawaan."
---

Di CSS, banyak properti visual memiliki dua cara penulisan:
1. **Longhand:** Menentukan nilai satu aspek tertentu secara terpisah dan spesifik.
2. **Shorthand:** Menentukan beberapa nilai terkait sekaligus dalam satu baris deklarasi yang ringkas.

---

## 1. Aturan Arah Jarum Jam: TRBL (Top, Right, Bottom, Left)

Untuk properti 4 sisi seperti `margin` dan `padding`, urutan nilai shorthand selalu mengikuti arah putaran jarum jam:

```text
Aturan 4 Sisi (TRBL):
 TOP (Atas)
 ▲
 │
 LEFT ◀──────┼──────▶ RIGHT
(Kiri) │ (Kanan)
 ▼
 BOTTOM (Bawah)
```

### Variasi Jumlah Nilai Shorthand `margin` / `padding`:

```css
/* 1 Nilai: Berlaku untuk SEMUA 4 sisi (Top, Right, Bottom, Left = 16px) */
margin: 16px;

/* 2 Nilai: [Top & Bottom] [Left & Right] */
margin: 16px 24px;

/* 3 Nilai: [Top] [Left & Right] [Bottom] */
margin: 16px 24px 32px;

/* 4 Nilai: [Top] [Right] [Bottom] [Left] (Searah jarum jam) */
margin: 10px 20px 30px 40px;
```

---

## 2. Studi Kasus: Shorthand `border` & `background`

### Properti `border`
```css
/* Longhand (3 baris terpisah) */
border-width: 2px;
border-style: solid;
border-color: #e8392b;

/* Shorthand (1 baris ringkas) */
border: 2px solid #e8392b;
```

### Properti `background`
```css
/* Longhand */
background-color: #18181d;
background-image: url('pattern.png');
background-repeat: no-repeat;
background-position: center top;

/* Shorthand */
background: #18181d url('pattern.png') no-repeat center top;
```

---

## 3. [PERHATIAN] Jebakan Bahaya Shorthand: Reset Nilai Tak Disengaja!

Ketika kamu menggunakan shorthand, setiap properti longhand yang **tidak kamu sebutkan akan otomatis di-reset ke nilai default-nya**!

```css
/* Aturan awal */
.card {
 background-color: #e8392b;
 background-image: url('texture.png');
}

/* Modifikasi kemudian */
.card.featured {
 /* [PERHATIAN] BAHAYA: Shorthand ini me-reset background-image menjadi 'none' bawaan! */
 background: #18181d;
}

/* [BENAR] Solusi: Jika hanya ingin mengubah warna, gunakan longhand spesifik: */
.card.featured {
 background-color: #18181d;
}
```
