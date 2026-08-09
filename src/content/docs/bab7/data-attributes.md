---
title: "Custom data-* Attributes"
description: Memahami cara kerja custom data-* attributes untuk menyimpan informasi kustom di HTML yang bisa dibaca JavaScript tanpa mengotori kode dengan attribute non-standar.
---

Sering kali dalam membangun website, kita perlu menyimpan informasi tambahan di sebuah element HTML yang tidak termasuk ke dalam attribute standar mana pun.

Misalnya: ID produk, ID pengguna, status item, koordinat, atau data konfigurasi apapun yang perlu dibaca oleh JavaScript.

Dulu, orang-orang melakukan ini dengan cara yang tidak baik:

```html
<!-- ❌ Cara lama yang salah: menggunakan class atau attribute non-standar -->
<div class="card card--proyek-42">...</div>
<div produk-id="42" harga="150000">...</div>  <!-- attribute tidak valid! -->
```

HTML5 memperkenalkan solusi yang benar: **`data-*` attributes**.

---

## 📦 Apa Itu `data-*` Attributes?

`data-*` adalah attribute kustom yang bisa kita buat sendiri untuk menyimpan informasi tambahan di sebuah element HTML. Format penulisannya:

```
data-[nama-kustom]="nilai"
```

Bagian setelah `data-` adalah nama yang kita tentukan sendiri — bisa apa saja, selama mengikuti aturan penamaan.

```html
<!-- Menyimpan ID produk -->
<div class="card-produk" data-id="42" data-harga="150000" data-kategori="elektronik">
  <h3>Laptop Asus</h3>
  <p>Rp 8.500.000</p>
  <button class="btn-beli">Tambah ke Keranjang</button>
</div>
```

---

## 📏 Aturan Penamaan `data-*`

```html
<!-- ✅ BENAR: gunakan huruf kecil dan tanda hubung -->
<div data-user-id="101"></div>
<div data-proyek-status="aktif"></div>
<div data-max-upload="5mb"></div>

<!-- ❌ SALAH: tidak boleh huruf besar (XML naming rules) -->
<div data-userId="101"></div>   <!-- tidak valid -->

<!-- ❌ SALAH: tidak boleh dimulai dengan angka -->
<div data-1user="101"></div>    <!-- tidak valid -->
```

Aturannya:
- Setelah `data-`, tulis nama dalam huruf kecil.
- Gunakan tanda hubung (`-`) untuk memisahkan kata.
- Tidak boleh ada `xml` di awal nama (`data-xml-...` tidak valid).

---

## 📖 Membaca `data-*` via JavaScript

Inilah kekuatan sesungguhnya dari `data-*` — JavaScript bisa membaca nilainya dengan mudah menggunakan `dataset`.

```html
<button 
  class="btn-detail" 
  data-proyek-id="7" 
  data-proyek-nama="Website Sekolah"
  data-proyek-status="selesai"
>
  Lihat Detail
</button>
```

```javascript
const tombol = document.querySelector('.btn-detail');

// Akses via dataset — tanda hubung dikonversi ke camelCase
console.log(tombol.dataset.proyekId);     // "7"
console.log(tombol.dataset.proyekNama);   // "Website Sekolah"
console.log(tombol.dataset.proyekStatus); // "selesai"
```

Perhatikan konversi nama:
- HTML: `data-proyek-id` → JavaScript: `dataset.proyekId` (camelCase)
- HTML: `data-user-name` → JavaScript: `dataset.userName`
- HTML: `data-max-size` → JavaScript: `dataset.maxSize`

**Menetapkan dan menghapus nilai via JavaScript:**

```javascript
// Set nilai baru
tombol.dataset.proyekId = "10";

// Hapus attribute
delete tombol.dataset.proyekStatus;

// Cek keberadaan
'proyekId' in tombol.dataset;  // true / false
```

---

## 💡 Kasus Penggunaan Nyata

### 1. Tombol yang Membawa Data ID

```html
<!-- List proyek — setiap tombol bawa ID proyeknya -->
<ul>
  <li>
    Website Toko Roti
    <button class="btn-edit" data-id="1" data-nama="Website Toko Roti">Edit</button>
    <button class="btn-hapus" data-id="1">Hapus</button>
  </li>
  <li>
    Aplikasi Absensi
    <button class="btn-edit" data-id="2" data-nama="Aplikasi Absensi">Edit</button>
    <button class="btn-hapus" data-id="2">Hapus</button>
  </li>
</ul>
```

```javascript
// Satu event listener untuk semua tombol edit
document.querySelectorAll('.btn-edit').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    const nama = btn.dataset.nama;
    alert(`Edit proyek #${id}: ${nama}`);
  });
});
```

### 2. Filter dan Sorting

```html
<section class="galeri">
  <div class="foto-item" data-kategori="alam" data-tahun="2024">
    <img src="gunung.jpg" alt="Gunung" />
  </div>
  <div class="foto-item" data-kategori="kota" data-tahun="2025">
    <img src="jakarta.jpg" alt="Jakarta" />
  </div>
  <div class="foto-item" data-kategori="alam" data-tahun="2025">
    <img src="pantai.jpg" alt="Pantai" />
  </div>
</section>
```

JavaScript bisa menggunakan nilai `data-kategori` untuk filter tampilan tanpa reload halaman.

### 3. Konfigurasi Komponen UI

```html
<!-- Komponen slideshow yang dikonfigurasi via data-* -->
<div 
  class="slideshow"
  data-autoplay="true"
  data-interval="3000"
  data-transition="fade"
>
  <img src="slide1.jpg" alt="Slide 1" />
  <img src="slide2.jpg" alt="Slide 2" />
</div>
```

### 4. Menyimpan URL atau Path

```html
<button 
  class="btn-lihat" 
  data-url="/api/proyek/7/detail"
  data-modal="proyek-detail"
>
  Lihat Detail
</button>
```

---

## 🔍 Membaca `data-*` via CSS juga Bisa

CSS bisa mengakses `data-*` melalui atribut selektor:

```css
/* Menarget element berdasarkan nilai data attribute */
[data-status="aktif"] {
  border-left: 4px solid green;
}

[data-status="nonaktif"] {
  border-left: 4px solid red;
  opacity: 0.5;
}
```

Dan bahkan menampilkan nilainya menggunakan `content` + `attr()`:

```css
.badge::after {
  content: attr(data-count);
  background: red;
  color: white;
}
```

---

## ⚠️ Kapan TIDAK Menggunakan `data-*`

`data-*` adalah untuk menyimpan informasi yang **dibutuhkan oleh JavaScript atau CSS** — bukan sebagai pengganti attribute standar yang sudah ada.

```html
<!-- ❌ SALAH: gunakan attribute standar yang sudah ada -->
<a data-href="/tentang">Tentang</a>     <!-- gunakan href -->
<img data-src="foto.jpg" />             <!-- gunakan src -->
<input data-type="email" />             <!-- gunakan type -->

<!-- ✅ BENAR: data-* untuk informasi kustom yang tidak ada attribute standarnya -->
<a href="/tentang" data-section="nav">Tentang</a>
<img src="foto.jpg" alt="Foto" data-original="foto-hd.jpg" />
```

Juga jangan menyimpan informasi sensitif di `data-*` — nilainya bisa dilihat siapa saja di DevTools browser.

---

## 📊 Ringkasan `data-*`

| Aspek | Detail |
|---|---|
| **Format** | `data-nama-kustom="nilai"` |
| **Nama** | Huruf kecil, tanda hubung pemisah kata |
| **Nilai** | String apapun |
| **Akses JS** | `element.dataset.namaKustom` |
| **Akses CSS** | `[data-nama]` atau `attr(data-nama)` |
| **Kegunaan** | Data kustom yang dibutuhkan JS/CSS |
| **Jangan gunakan untuk** | Informasi sensitif, pengganti attribute standar |

---

**[Lanjut: ARIA Attributes →](/bab7/aria-attributes/)**
