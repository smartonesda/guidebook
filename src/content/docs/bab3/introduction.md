---
title: "3.0 Introduction — The Cascade & Specificity"
description: "Memahami algoritma inti browser dalam menyelesaikan konflik style — Cascade Origin, Specificity, Source Order, dan Inheritance."
---

Pernahkah kamu menulis aturan CSS, tetapi warna atau ukurannya sama sekali tidak berubah di layar?

```css
p { color: blue; }
.text-danger { color: red; }
#main p { color: green; }
```

Ketika ada 3 aturan berbeda yang memilih elemen `<p>` yang sama, siapa yang menang? Warna apa yang akhirnya muncul di layar?

Jawabannya diatur oleh The Cascade (Algoritma Aliran Bertingkat) dan Specificity (Bobot Spesifisitas). Di BAB 3 ini, kamu akan memahami algoritma internal browser sehingga kamu tidak perlu lagi menebak-nebak atau asal menambahkan !important.
