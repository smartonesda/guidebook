---
title: "Subscript & Superscript"
description: Memahami penggunaan sub untuk teks bawah dan sup untuk teks atas di HTML.
---

Dalam penulisan konten web, terkadang kita perlu menulis rumus matematika, rumus kimia, atau simbol khusus yang diletakkan setengah karakter di atas atau di bawah baris teks biasa. 

HTML menyediakan dua tag sederhana untuk kebutuhan ini.

---

## 🧪 Teks Bawah: Tag `<sub>` (Subscript)

Tag `<sub>` digunakan untuk memformat teks agar berukuran lebih kecil dan bergeser ke **bawah** garis baris teks utama.

- *Konteks Penggunaan*: Paling sering digunakan untuk rumus kimia atau indeks angka.

```html
<p>Rumus kimia air adalah H<sub>2</sub>O, sedangkan rumus untuk asam sulfat adalah H<sub>2</sub>SO<sub>4</sub>.</p>
```

Tampilan di browser akan merendernya dengan angka `2` dan `4` menggantung di bawah huruf H, S, dan O.

---

## 📐 Teks Atas: Tag `<sup>` (Superscript)

Tag `<sup>` digunakan untuk memformat teks agar berukuran lebih kecil dan bergeser ke **atas** garis baris teks utama.

- *Konteks Penggunaan*: Paling sering digunakan untuk pangkat matematika, tanggal ke- (ordinal suffix dalam bahasa Inggris seperti 1st, 2nd), atau catatan kaki (*footnote*).

```html
<p>Luas tanah milik kakek adalah 1.500 m<sup>2</sup>.</p>
<p>Teorema Pythagoras dituliskan sebagai <var>a</var><sup>2</sup> + <var>b</var><sup>2</sup> = <var>c</var><sup>2</sup>.</p>
<p>Dia menjadi pemenang ke-1<sup>st</sup> di kompetisi coding tingkat provinsi.</p>
```

Browser akan merendernya dengan angka `2` menggantung di atas huruf m, a, b, dan c, serta `st` menggantung di atas angka 1.

Kedua elemen ini bersifat **inline element**, sehingga bisa disisipkan langsung di tengah-tengah kalimat paragraf tanpa mengganggu aliran baris tulisan.

Di halaman berikutnya, kita akan masuk ke studi kasus untuk melatih semua tag teks yang baru kita pelajari ke dalam proyek portfolio kita!

**[Lanjut: Studi Kasus →](/bab2/studi-kasus/)**
