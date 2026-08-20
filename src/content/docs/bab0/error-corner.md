---
title: "Error Corner: 5 Kesalahan Pemula"
description: "Mendiagnosis dan menyelesaikan lima masalah paling umum yang membuat CSS tidak bekerja."
---

Selamat datang di **Error Corner**! Di setiap bab, kita akan membedah kesalahan nyata yang paling sering membuat pusing para pemula.

Di CSS, browser tidak akan menampilkan layar merah berkedip bertuliskan *"FATAL ERROR"*. Sebaliknya, browser akan **mengabaikan baris yang salah secara diam-diam (*silent failure*)** dan melanjutkan membaca baris berikutnya. Hal ini sering membuat pemula bingung: *"Kenapa kodenya tidak berubah sama sekali?"*

Berikut adalah 5 biang kerok paling umum dan cara memperbaikinya:

---

## [SALAH] Kesalahan 1: Lupa Titik Koma (Missing Semicolon)

Di CSS, setiap deklarasi **wajib** diakhiri dengan tanda titik koma (`;`). Jika kamu lupa menulisnya, browser akan menganggap dua baris deklarasi tersebut sebagai satu baris yang rusak:

```css title="Contoh Rusak"
/* [SALAH] SALAH: Lupa titik koma di baris background */
.kartu {
 background: #ffffff
 color: #e8392b;
 padding: 16px;
}
```

```css title="Contoh Benar"
/* [BENAR] BENAR: Semua deklarasi diakhiri titik koma */
.kartu {
 background: #ffffff;
 color: #e8392b;
 padding: 16px;
}
```

:::tip[Cara Deteksi via DevTools]
Buka DevTools panel *Styles*. Aturan yang kehilangan titik koma akan diberi tanda seru kuning dengan teks dicoret (*invalid property value*).
:::

---

## [SALAH] Kesalahan 2: Path File Stylesheet Salah (404 Not Found)

Kamu sudah menulis CSS dengan sangat bagus di `style.css`, tetapi di browser tampilan tetap polos putih.

```html title="index.html"
<!-- [SALAH] SALAH: Nama file atau jalurnya tidak cocok -->
<link rel="stylesheet" href="styles.css"> <!-- padahal nama aslinya style.css -->
```

```html title="index.html"
<!-- [BENAR] BENAR: Pastikan nama file dan foldernya 100% presisi (case-sensitive) -->
<link rel="stylesheet" href="style.css">
```

:::tip[Cara Cek Cepat]
Buka DevTools, lalu klik tab **Network** atau tab **Console**. Jika file CSS tidak ditemukan, browser akan menampilkan pesan error merah: `GET http://.../styles.css net::ERR_FILE_NOT_FOUND (404)`.
:::

---

## [SALAH] Kesalahan 3: Lupa Satuan Ukuran (Missing Unit)

Di CSS, angka `0` boleh ditulis tanpa satuan (`margin: 0;`). Namun untuk angka selain 0, **kamu WAJIB menyertakan satuannya** (`px`, `rem`, `%`, `em`):

```css title="style.css"
/* [SALAH] SALAH: Browser tidak tahu 20 apa? 20 piksel? 20 meter? 20 persen? */
.kotak {
 width: 300;
 padding: 20;
}

/* [BENAR] BENAR: Selalu sertakan satuan */
.kotak {
 width: 300px;
 padding: 20px;
}
```

---

## [SALAH] Kesalahan 4: Salah Membedakan Class (`.`) dan ID (`#`)

- Di HTML: `class="tombol"` &rarr; Di CSS harus diawali titik: `.tombol`
- Di HTML: `id="header"` &rarr; Di CSS harus diawali pagar: `#header`

```html title="index.html"
<button class="btn-utama">Kirim</button>
```

```css title="style.css"
/* [SALAH] SALAH: Menulis tanpa titik menganggap btn-utama sebagai nama tag HTML */
btn-utama {
 background: red;
}

/* [BENAR] BENAR: Gunakan tanda titik untuk memilih class */
.btn-utama {
 background: red;
}
```

---

## [SALAH] Kesalahan 5: Browser Caching Menahan File Lama

Terkadang kamu sudah mengubah file CSS dan menyimpannya, tetapi browser tetap menampilkan versi lama karena browser menyimpan stylesheet di memori cache untuk menghemat kuota.

### Cara Mengatasinya:
- Lakukan **Hard Refresh**:
 - **Windows / Linux**: `Ctrl + F5` atau `Ctrl + Shift + R`
 - **Mac**: `Cmd + Shift + R`
- Atau centang opsi **"Disable cache"** di tab **Network** pada panel DevTools selama kamu sedang dalam sesi belajar.

---

## 🩺 Checklist 10 Detik Saat CSS-mu Tidak Bekerja

1. Apakah file HTML dan file CSS sudah disimpan (`Ctrl + S`)?
2. Apakah nama file di `<link href="...">` sudah cocok dengan nama file aslinya?
3. Apakah ada tanda titik koma (`;`) atau kurung kurawal (`}`) yang hilang?
4. Apakah ada tanda titik (`.`) di depan nama class selector?
5. Apakah kamu sudah memeriksa panel DevTools untuk melihat apakah baris tersebut dicoret atau diabaikan?

Sekarang mari kita rangkum seluruh pembelajaran BAB 0 ini dan membangun **Mini Project pertama kita!**

**[Lanjut: Ringkasan & Mini Project →](/bab0/ringkasan/)**
