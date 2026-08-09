---
title: "Anatomi Attribute"
description: Memahami secara mendalam apa itu HTML attribute, perbedaannya dengan element dan content, cara browser membacanya, serta aturan penulisan yang benar.
---

Sebelum kita membahas atribut-atribut spesifik, kita perlu memastikan satu hal: kamu harus bisa **membaca sebuah baris HTML dan tahu persis bagian mana yang disebut apa**.

Banyak pemula yang mencampur adukkan istilah "tag", "attribute", "value", dan "content" — padahal keempatnya adalah hal yang berbeda sama sekali.

---

## 🔬 Bedah Satu Baris HTML

Perhatikan baris ini:

```html
<a href="/tentang" class="nav-link" target="_blank">Tentang Saya</a>
```

Mari kita bedah setiap bagiannya:

| Bagian | Nilai | Nama Istilah |
|---|---|---|
| `a` | — | **Element / Tag** |
| `href` | — | **Attribute** |
| `"/tentang"` | — | **Attribute Value** |
| `class` | — | **Attribute** |
| `"nav-link"` | — | **Attribute Value** |
| `target` | — | **Attribute** |
| `"_blank"` | — | **Attribute Value** |
| `Tentang Saya` | — | **Content / Text** |

Jadi di satu baris itu ada: **1 element**, **3 attribute**, **3 attribute value**, dan **1 content**.

---

## 📖 Definisi: Apa Itu Attribute?

**Attribute** adalah informasi tambahan atau konfigurasi yang diberikan kepada sebuah element HTML. Attribute ditulis **di dalam tag pembuka**, setelah nama element.

Kalau element HTML adalah "benda", maka attribute adalah "sifat" atau "pengaturan" benda tersebut.

**Analogi untuk siswa SMK:**

Bayangkan kamu mengisi formulir data produk di aplikasi kasir:

```
Produk    : [Laptop]          ← element: objek yang ada
Merek     : [Asus]            ← attribute: informasi tambahan
Harga     : [8.500.000]       ← attribute: informasi tambahan
Stok      : [12]              ← attribute: informasi tambahan
Tersedia  : [✓]               ← attribute: tanpa nilai (cukup "ya/tidak")
```

Tag HTML bekerja serupa:
```html
<input type="number" name="stok" min="0" value="12" required>
<!--   ↑              ↑            ↑       ↑          ↑        -->
<!--   attribute      attribute    att.    att.       boolean att. -->
```

---

## 🏗️ Anatomi Lengkap: `<tag attribute="value">`

```
<input type="email" id="email-user" name="email" placeholder="nama@domain.com" required>
│      │             │               │             │                             │
│      │             │               │             │                             └── Boolean attribute (tanpa nilai)
│      │             │               │             └── Attribute + Value
│      │             │               └── Attribute + Value
│      │             └── Attribute + Value
│      └── Attribute + Value
└── Element/Tag name
```

Setiap **attribute** terdiri dari:
1. **Nama attribute** — ditulis dalam huruf kecil (`type`, `id`, `class`, `href`)
2. **Tanda `=`** — pemisah antara nama dan nilai
3. **Attribute value** — nilai yang diberikan, ditulis di antara tanda kutip (`"email"`, `"nav-link"`)

---

## 🔑 Empat Hal yang Berbeda

Ini adalah konsep paling krusial di BAB 7. Pastikan kamu benar-benar memahami perbedaan keempat hal ini:

```html
<h1 id="hero-title" class="heading primary">Selamat Datang</h1>
```

**1. Element:** `h1`
Elemen HTML — menentukan jenis konten (heading level 1). Browser tahu bahwa ini adalah judul terpenting di halaman.

**2. Attribute:** `id`, `class`
Konfigurasi tambahan untuk element tersebut. Attribute sendiri tidak berisi teks yang ditampilkan ke pengguna.

**3. Attribute Value:** `"hero-title"`, `"heading primary"`
Nilai yang diberikan ke masing-masing attribute. Satu attribute memiliki tepat satu value (meskipun value itu bisa mengandung beberapa kata, seperti `"heading primary"` yang berisi dua class).

**4. Content:** `Selamat Datang`
Teks atau konten yang ditampilkan di antara tag pembuka dan penutup. Inilah yang pengguna lihat di halaman.

---

## 🔄 Apa yang Berubah Ketika Ada/Tidak Ada Attribute?

Perhatikan perbedaan ini:

```html
<!-- Tanpa attribute -->
<p>Halo, saya Rizki.</p>

<!-- Dengan attribute -->
<p class="intro" id="paragraf-pertama" lang="id">Halo, saya Rizki.</p>
```

**Yang berubah:** Cara browser, CSS, dan JavaScript mengenali dan berinteraksi dengan paragraf ini.
**Yang tidak berubah:** Teks "Halo, saya Rizki." yang ditampilkan ke pengguna (secara default, tanpa CSS).

Element tanpa attribute tetap valid. Element dengan attribute mendapatkan informasi tambahan yang digunakan oleh:
- **Browser** — untuk perilaku tertentu (seperti `href` membuat link bisa diklik)
- **CSS** — untuk menarget element tertentu dengan styling
- **JavaScript** — untuk menemukan dan memanipulasi element
- **Screen reader** — untuk memahami maksud element

---

## ✍️ Aturan Penulisan Attribute

### 1. Attribute ditulis di dalam tag pembuka
```html
<!-- ✅ BENAR: attribute di dalam tag pembuka -->
<img src="foto.jpg" alt="Foto profil" />

<!-- ❌ SALAH: tidak ada tempat selain tag pembuka -->
<img />src="foto.jpg"
```

### 2. Urutan attribute (umumnya) tidak menentukan fungsi
```html
<!-- Keduanya identik secara fungsional -->
<input type="text" id="nama" name="nama_user" required />
<input required name="nama_user" id="nama" type="text" />
```

Browser tidak peduli urutan attribute. Tapi untuk keterbacaan kode (*readability*), ada konvensi yang umum: `type` dan identitas (`id`, `name`) di awal, lalu attribute tambahan, lalu boolean attribute di akhir.

### 3. Nama attribute menggunakan huruf kecil
```html
<!-- ✅ BENAR -->
<input type="text" maxlength="50" />

<!-- ❌ Tidak disarankan (meski browser masih mau memproses) -->
<input TYPE="text" MAXLENGTH="50" />
```

### 4. Attribute value menggunakan tanda kutip ganda
```html
<!-- ✅ Best practice: double quote -->
<a href="/tentang" class="nav-link">Tentang</a>

<!-- Juga valid: single quote -->
<a href='/tentang' class='nav-link'>Tentang</a>

<!-- Hindari mencampur keduanya dalam satu value -->
```

Gunakan double quote (`"`) secara konsisten — ini adalah konvensi yang paling umum di ekosistem HTML modern.

### 5. Kapan tanda kutip wajib?
Secara teknis, tanda kutip bisa dihilangkan jika value tidak mengandung spasi:

```html
<!-- Ini valid secara teknis (tapi JANGAN dilakukan) -->
<img src=foto.jpg alt=foto>

<!-- ❌ Ini akan error: value ada spasi, kutipan wajib -->
<img alt=foto profil>    <!-- browser baca "profil" sebagai attribute baru -->

<!-- ✅ BENAR: selalu gunakan tanda kutip -->
<img src="foto.jpg" alt="foto profil" />
```

**Praktik terbaik:** Selalu gunakan tanda kutip untuk semua attribute value, tanpa pengecualian.

---

## 📝 Attribute Bisa Lebih dari Satu

Satu element HTML bisa memiliki banyak attribute sekaligus:

```html
<!-- Input dengan banyak attribute — semua valid -->
<input
  type="email"
  id="email-pengirim"
  name="email"
  class="form-input"
  placeholder="nama@domain.com"
  autocomplete="email"
  required
/>
```

Ketika attribute banyak, konvensi modern adalah menuliskannya **satu per baris** untuk keterbacaan — terutama untuk element seperti `<input>`, `<img>`, `<video>`, dan `<form>`.

---

## 🧠 Bagaimana Browser Memproses Attribute?

Ketika browser membaca HTML, ia tidak hanya menampilkan konten — ia juga **membaca dan menginterpretasikan setiap attribute** untuk memutuskan:

1. **Perilaku apa yang harus diaktifkan?** (`href` membuat link bisa diklik, `required` membuat field wajib diisi)
2. **Bagaimana element ini dikategorikan?** (`type="email"` mengubah perilaku keyboard di mobile)
3. **Bagaimana CSS menarget element ini?** (`id` dan `class` digunakan sebagai selektor CSS)
4. **Bagaimana JavaScript menemukan element ini?** (`id` digunakan oleh `getElementById`, `class` oleh `getElementsByClassName`)
5. **Informasi apa yang harus dibagikan ke screen reader?** (`alt`, `aria-label`, `role`)

Jadi attribute bukan sekadar "teks tambahan". Attribute adalah **instruksi** yang memberi tahu browser, CSS, JavaScript, dan teknologi asistif bagaimana harus memperlakukan element tersebut.

---

Di halaman berikutnya, kita akan membahas **Global Attributes** — attribute-attribute yang bisa digunakan pada semua element HTML.

**[Lanjut: Global Attributes →](/bab7/global-attributes/)**
