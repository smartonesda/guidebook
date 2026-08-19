---
title: "Viewport & Responsive"
description: Memahami meta viewport — mengapa browser mobile perlu instruksi khusus, bagaimana width=device-width bekerja, dan konsep dasar responsive web design melalui metadata.
---

## 📱 Masalah yang Diselesaikan Viewport Meta Tag

Sebelum smartphone ada, website didesain hanya untuk layar komputer desktop — biasanya lebar 960px atau 1024px. Ketika iPhone pertama diluncurkan tahun 2007, Mobile Safari menghadapi masalah: bagaimana menampilkan website desktop di layar 320px?

Solusi yang dipilih Apple: **layar mobile pura-pura jadi layar lebar**. Mobile Safari secara default berpura-pura memiliki lebar 980px, lalu mengecilkan seluruh halaman agar muat di layar 320px. Ini membuat website desktop terlihat, tapi dengan teks yang sangat kecil dan pengguna harus zoom in untuk membaca.

Ini bukan pengalaman yang baik. Itulah mengapa viewport meta tag diciptakan.

---

## 🔍 Apa itu Viewport?

**Viewport** adalah area yang terlihat oleh pengguna di browser — "jendela" melalui mana konten web dilihat.

Di desktop: viewport = ukuran jendela browser (biasanya 1280px atau lebih)  
Di mobile: viewport = ukuran layar perangkat (320px hingga 414px untuk HP modern)

Tanpa instruksi apapun, browser mobile menggunakan "virtual viewport" yang lebih lebar dari layar fisiknya. Viewport meta tag memberi tahu browser: **"Gunakan lebar layar yang sesungguhnya, jangan pura-pura jadi layar desktop."**

---

## ✍️ Menulis Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Bedah setiap bagian:

| Bagian | Nilai | Artinya |
|---|---|---|
| `name="viewport"` | — | Ini adalah konfigurasi untuk viewport |
| `content="..."` | String konfigurasi | Nilai-nilai konfigurasi viewport |
| `width=device-width` | — | Atur lebar viewport = lebar layar fisik perangkat |
| `initial-scale=1.0` | — | Skala awal = 1 (tidak diperbesar/diperkecil) |

### `width=device-width`

Ini memberitahu browser: "Gunakan lebar layar sesungguhnya sebagai lebar viewport."

```
Layar HP 390px → viewport = 390px (bukan 980px virtual)
Layar tablet 768px → viewport = 768px
Layar desktop 1440px → viewport = 1440px
```

### `initial-scale=1.0`

Ini memastikan halaman dimuat dengan zoom level 1:1 — tidak diperbesar, tidak diperkecil.

- `initial-scale=1.0` → tampil normal
- `initial-scale=0.5` → diperkecil 50% (teks sangat kecil)
- `initial-scale=2.0` → diperbesar 200% (terlalu besar)

---

## ⚠️ Nilai yang Harus Dihindari

```html
<!-- ❌ JANGAN: menonaktifkan zoom pengguna -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
```

`user-scalable=no` dan `maximum-scale=1.0` mencegah pengguna memperbesar halaman. Ini **melanggar standar aksesibilitas** (WCAG 1.4.4) — pengguna dengan gangguan penglihatan perlu bisa memperbesar teks.

Browser modern (Chrome, Firefox, Safari) bahkan **mengabaikan** nilai ini untuk melindungi aksesibilitas pengguna.

**Selalu gunakan:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🔄 Hubungan Viewport dengan Responsive Design

Viewport meta tag adalah **prasyarat** untuk responsive web design, bukan solusinya. Ia hanya memberitahu browser untuk menggunakan lebar layar yang benar. Tampilan yang benar-benar responsif masih membutuhkan CSS (media queries, flexbox, grid).

```html
<!-- HTML: atur viewport agar browser pakai lebar layar yang benar -->
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<!-- CSS: gunakan media queries untuk layout yang adaptif -->
<style>
  /* Mobile first: layout satu kolom */
  .container { width: 100%; padding: 16px; }
  
  /* Tablet ke atas: layout dua kolom */
  @media (min-width: 768px) {
    .container { max-width: 768px; margin: 0 auto; }
  }
  
  /* Desktop: layout tiga kolom */
  @media (min-width: 1024px) {
    .container { max-width: 1200px; }
  }
</style>
```

Tanpa viewport meta tag: CSS media queries tidak akan bekerja dengan benar di mobile — browser mobile akan menggunakan viewport virtual 980px dan tidak pernah masuk ke kondisi `min-width: 768px` yang dimaksud.

---

## 📊 Perbandingan: Dengan dan Tanpa Viewport Meta Tag

| | Tanpa Viewport Meta | Dengan Viewport Meta |
|---|---|---|
| **Lebar viewport di HP** | 980px (virtual) | 390px (layar fisik) |
| **Tampilan teks** | Sangat kecil, perlu zoom | Ukuran normal, terbaca |
| **Media queries** | Tidak bekerja dengan benar | Bekerja sesuai rencana |
| **User experience** | Buruk di mobile | Optimal |

---

## 🏗️ Posisi dalam `<head>` Portfolio

```html
<head>
  <!-- 1. Charset — selalu pertama -->
  <meta charset="UTF-8" />

  <!-- 2. Viewport — segera setelah charset -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <!-- 3. Title — setelah konfigurasi dasar -->
  <title>Rizki Pratama — Junior Web Developer</title>

  <!-- ... meta lainnya ... -->
</head>
```

Urutan charset → viewport → title adalah konvensi yang paling umum dan direkomendasikan.

---

**[Lanjut: Meta Description & Robots →](/bab9/meta-description/)**
