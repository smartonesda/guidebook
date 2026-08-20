---
title: "Cara Membaca Dokumentasi CSS"
description: "Panduan menavigasi MDN Web Docs, memahami notasi sintaks formal CSS, dan mencari solusi secara mandiri."
---

Seorang developer profesional tidak menghafal 500+ properti CSS di luar kepala. Mereka memiliki keahlian yang jauh lebih penting: **tahu cara mencari informasi yang tepat di dokumentasi resmi.**

Dokumentasi resmi dan paling tepercaya untuk teknologi web di seluruh dunia adalah **MDN Web Docs** (*Mozilla Developer Network*) yang dikelola bersama oleh Mozilla, Google, Microsoft, dan komunitas web dunia.

---

## Cara Mencari Dokumentasi di Google

Ketika kamu lupa bagaimana cara membuat bayangan kotak atau mengatur tata letak flexbox, gunakan pola pencarian ini di Google:

```text
mdn css [nama_konsep_atau_properti]
```

**Contoh Pencarian Efektif**:
- `mdn css border-radius`
- `mdn css flexbox`
- `mdn css clamp`
- `mdn css backdrop-filter`

Hasil pencarian pertama dari domain `developer.mozilla.org` adalah halaman referensi resmi yang paling akurat.

---

## Anatomi Halaman Dokumentasi MDN

Ketika kamu membuka halaman properti di MDN (misal: halaman `border-radius`), kamu akan menemukan struktur yang selalu konsisten:

```text
1. Interactive Demo → Kotak interaktif untuk mencoba nilai secara langsung di browser
2. Syntax → Format penulisan formal dan tipe nilai yang diterima
3. Formal Syntax → Notasi teknis W3C
4. Examples → Contoh kode nyata dalam berbagai skenario
5. Specifications → Standar resmi dari W3C
6. Browser Support → Tabel kompatibilitas browser (Chrome, Firefox, Safari, Edge)
```

---

## Memahami Notasi Sintaks Formal CSS

Di bagian **Syntax** MDN, kamu sering melihat simbol-simbol khusus seperti tanda pipa (`|`), kurung siku (`[]`), atau tanda tanya (`?`). Ini disebut *Formal Syntax Value Definition*.

Berikut adalah panduan membaca simbol-simbol tersebut:

| Simbol | Arti | Contoh di MDN | Penjelasan Praktis |
| :--- | :--- | :--- | :--- |
| `|` | Pilih salah satu (Exclusive OR) | `left | center | right` | Kamu harus memilih salah satu dari `left`, `center`, atau `right`. |
| `||` | Kombinasi (Boleh satu atau lebih) | `<color> || <length>` | Kamu bisa menulis warna saja, ukuran saja, atau keduanya sekaligus. |
| `[ ]` | Pengelompokan (Grouping) | `[ <length> | <percentage> ]` | Mengelompokkan pilihan menjadi satu unit. |
| `?` | Opsional (Boleh ada, boleh tidak) | `<color>?` | Nilai warna bersifat opsional. |
| `*` | 0 atau lebih kali | `<length>*` | Boleh tidak ada, boleh ditulis berkali-kali. |
| `+` | 1 atau lebih kali | `<length>+` | Wajib ada minimal satu, boleh lebih. |
| `{1,4}` | Rentang jumlah nilai (1 sampai 4) | `<length>{1,4}` | Properti bisa menerima 1 nilai (semua sisi), 2 nilai, 3 nilai, atau 4 nilai (atas, kanan, bawah, kiri). |

### Contoh Nyata Membaca Notasi:
Pada properti `padding`:
```text
padding: <length-percentage>{1,4}
```
Artinya: kamu boleh memberikan 1 hingga 4 nilai ukuran (seperti `padding: 10px;` atau `padding: 10px 20px 5px 15px;`).

---

## Sumber Belajar & Referensi Tepercaya Lainnya

Selain MDN, simpan daftar referensi tepercaya ini di bookmark browsermu:

1. **[MDN Web Docs](https://developer.mozilla.org/)**: Ensiklopedia resmi web standar.
2. **[Can I use... (caniuse.com)](https://caniuse.com/)**: Memeriksa apakah fitur CSS baru sudah didukung oleh semua browser pengguna.
3. **[CSS-Tricks (css-tricks.com)](https://css-tricks.com/)**: Panduan visual lengkap (misal: *A Complete Guide to Flexbox* dan *A Complete Guide to Grid*).
4. **[W3C CSS Specifications](https://www.w3.org/Style/CSS/)**: Dokumen spesifikasi teknis resmi dari konsorsium pembuat standar CSS.

Sekarang kita sudah tahu cara membaca dokumentasi. Di halaman selanjutnya, kita akan membuka senjata terhebat setiap frontend engineer: **Browser DevTools**!

**[Lanjut: Mengenal Browser DevTools →](/bab0/mengenal-devtools/)**
