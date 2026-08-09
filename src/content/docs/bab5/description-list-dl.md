---
title: "Description List dl"
description: Memahami penggunaan description list dl beserta tag dt dan dd untuk pasangan istilah dan penjelasan.
---

Jika `<ul>` dan `<ol>` menyusun baris-baris poin biasa, HTML menyediakan jenis daftar ketiga yang khusus untuk menyusun **pasangan nama dan nilai (key-value pairs)**. 

Daftar ini disebut **Description List**, yang diwakili oleh tag **`<dl>`**.

---

## 🏗️ Struktur Description List

Description List dibangun menggunakan kombinasi tiga tag utama:

- **`<dl>` (Description List)**: Tag pembungkus utama seluruh daftar.
- **`<dt>` (Description Term)**: Menandai istilah, nama, atau kunci (*key*).
- **`<dd>` (Description Details/Description)**: Menandai penjelasan, makna, atau nilai (*value*) dari istilah terkait.

```html
<dl>
  <dt>HTML</dt>
  <dd>Bahasa markup standar untuk menyusun struktur halaman web.</dd>
  
  <dt>CSS</dt>
  <dd>Kumpulan kode untuk menghias dan mengatur tata letak halaman web.</dd>
</dl>
```

### Karakteristik & Perilaku Browser:
- Browser secara otomatis menampilkan teks di dalam tag `<dd>` **menjorok masuk ke kanan** (seperti paragraf indentasi) di bawah `<dt>`.
- Satu istilah `<dt>` bisa memiliki lebih dari satu penjelasan `<dd>`, dan sebaliknya.

---

## 🤝 Hubungan Relasi `<dt>` dan `<dd>`

Description list sangat tepat digunakan untuk konten-konten berikut:
- **Kamus istilah / Glosarium**: Seperti contoh penjelasan HTML dan CSS di atas.
- **Metadata dokumen**: Misalnya menuliskan data penulis dan tanggal terbit.
- **Daftar spesifikasi barang**: Misalnya spesifikasi laptop:
  ```html
  <dl>
    <dt>RAM</dt>
    <dd>8 GB DDR4</dd>
    <dt>Penyimpanan</dt>
    <dd>512 GB SSD</dd>
  </dl>
  ```

### ⚠️ Aturan Nesting Wajib
Tag `<dl>` hanya boleh membungkus tag `<dt>`, `<dd>`, dan elemen pembungkus kelompok `<div>` (sejak HTML5). Ia **tidak boleh** langsung membungkus tag paragraf `<p>` atau tag lainnya.

Sekarang kita sudah menguasai seluruh jenis daftar. Mari kita beralih ke pembahasan yang lebih kompleks: menyajikan data berelasi baris-kolom menggunakan Tabel.

**[Lanjut: Elemen Tabel th td →](/bab5/elemen-tabel-th-td/)**
