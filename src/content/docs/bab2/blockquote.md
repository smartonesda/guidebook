---
title: "Blockquote & Kutipan"
description: Memahami penggunaan blockquote, q, dan cite untuk menyusun kutipan dan sumber rujukan di HTML.
---

Saat menulis artikel, biografi, atau portfolio, kita sering menyertakan kutipan ucapan seseorang atau referensi dari dokumen lain. HTML menyediakan elemen khusus untuk membedakan kutipan panjang, kutipan pendek, dan nama sumber rujukannya.

---

## 🏛️ Kutipan Panjang: Tag `<blockquote>`

Tag `<blockquote>` digunakan untuk menulis kutipan yang panjang (biasanya lebih dari satu kalimat) yang diambil dari sumber lain.

```html
<blockquote>
  Tujuan utama dari pendidikan adalah mengubah kegelapan menjadi cahaya, 
  dan di era digital ini, baris-baris HTML adalah lilin pertama yang kita nyalakan.
</blockquote>
```

### Karakteristik `<blockquote>` (Block Element):
- Browser secara otomatis memberikan **jarak indentasi masuk ke kanan** pada sisi kiri dan kanan kutipan.
- Ia memotong baris dan berdiri sendiri sebagai satu blok terpisah.

---

## 💬 Kutipan Pendek: Tag `<q>`

Tag `<q>` (singkatan dari *quote*) digunakan untuk menulis kutipan pendek yang disisipkan langsung di dalam kalimat paragraf (inline).

```html
<p>Kakek saya selalu menasihati, <q>Jadilah seperti pohon padi, semakin berisi semakin merunduk</q> di setiap kesempatan.</p>
```

### Karakteristik Tag `<q>` (Inline Element):
- Browser akan **otomatis menambahkan tanda kutip ganda** (`" ... "`) di awal dan di akhir teks yang dibungkus tag `<q>`. 
- Jadi, kamu **tidak perlu** mengetik tanda kutip secara manual di dalam kodemu!

---

## 🏷️ Sumber Rujukan: Tag `<cite>`

Tag `<cite>` digunakan untuk menandai **judul karya, nama buku, situs web, atau nama tokoh** yang menjadi sumber dari kutipan tersebut.

```html
<p>Kutipan di atas diambil dari pidato pembukaan di <cite>Simposium Web Modern 2026</cite>.</p>
```

### Karakteristik Tag `<cite>`:
- Tampilan default di browser akan miring (*italic*).
- Secara semantik, ia memberi tahu mesin pencari bahwa bagian tersebut adalah identitas sumber rujukan resmi.

Mari kita lihat contoh penggabungan ketiganya secara rapi:

```html
<blockquote cite="https://example.com/pidato">
  <p>Jangan bertanya apa yang negara berikan kepadamu, tapi bertanyalah apa yang bisa kamu berikan untuk negaramu.</p>
</blockquote>
<p>— <cite>John F. Kennedy</cite></p>
```

Selanjutnya, kita akan mempelajari cara menampilkan teks kode komputer secara presisi.

**[Lanjut: Pre & Code →](/bab2/pre-code/)**
