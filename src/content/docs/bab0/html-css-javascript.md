---
title: "HTML vs CSS vs JavaScript"
description: "Membedah peran, batasan, dan kolaborasi trio teknologi pembangun web modern."
---

Di setiap halaman website modern di dunia—mulai dari Wikipedia, YouTube, hingga aplikasi SaaS kelas dunia—ada tiga bahasa inti yang bekerja bersama di dalam browser client. Ketiganya dikenal sebagai **Trio Web Frontend**:

```text
┌─────────────────────────────────────────────────────────────┐
│ 1. HTML → Struktur & Semantik (Apa yang ada di layar) │
│ 2. CSS → Presentasi & Tata Letak (Bagaimana rupanya) │
│ 3. JavaScript → Perilaku & Interaktivitas (Apa yang terjadi)│
└─────────────────────────────────────────────────────────────┘
```

Mari kita bedah peran masing-masing dengan analogi dan contoh kode nyata.

---

## Analogi Praktis: Membangun Mobil

Bayangkan kamu sedang membuat sebuah mobil:

| Teknologi | Analogi Mobil | Peran di Website |
| :--- | :--- | :--- |
| **HTML** | Rangka besi, roda, stir, kaca, pintu, jok mobil. | Membuat paragraf, heading, gambar, tombol, dan form input. |
| **CSS** | Warna cat merah metalik, jok kulit halus, aerodinamika body, lampu LED. | Memberi warna tombol, tata letak kolom, jarak spasi, animasi transisi hover. |
| **JavaScript** | Mesin mobil, pedal gas, sistem rem ABS, GPS dashboard. | Memvalidasi formulir saat dikirim, memuat data baru tanpa refresh, membuka modal pop-up. |

---

## Contoh Nyata: Komponen Tombol (Button)

Mari kita lihat bagaimana ketiga bahasa ini bekerja pada satu elemen tombol sederhana:

### 1. HTML Saja (Struktur Mentah)
```html
<button id="like-btn">Suka (0)</button>
```
*Tampilan*: Tombol abu-abu standar browser yang terlihat kaku dan polos.

### 2. Ditambahkan CSS (Visual & Sentuhan Desain)
```css
#like-btn {
 background-color: #e8392b;
 color: #ffffff;
 border: none;
 padding: 10px 20px;
 border-radius: 6px;
 font-weight: 600;
 cursor: pointer;
 transition: transform 0.2s ease, background-color 0.2s ease;
}

#like-btn:hover {
 background-color: #c62828;
 transform: translateY(-2px);
}
```
*Tampilan*: Tombol merah elegan dengan sudut membulat, font tegas, dan efek animasi halus saat mouse melayang (*hover*).

### 3. Ditambahkan JavaScript (Aksi Nyata)
```javascript
let count = 0;
const button = document.getElementById("like-btn");

button.addEventListener("click", () => {
 count++;
 button.textContent = `Suka (${count})`;
});
```
*Hasil*: Setiap kali tombol diklik, angka di dalam tombol bertambah secara dinamis tanpa perlu memuat ulang halaman.

---

## [PERHATIAN] Batasan & Jangan Salah Tempat!

Salah satu kesalahan paling umum di kalangan pemula adalah **memaksa satu bahasa melakukan pekerjaan bahasa lain**:

1. **Jangan gunakan HTML untuk styling**: Hindari menggunakan tag `<br><br><br>` hanya untuk memberi jarak ke bawah. Gunakan properti CSS `margin` atau `padding`.
2. **Jangan gunakan JavaScript untuk layout**: Hindari menghitung posisi elemen menggunakan kode matematika JS jika kamu bisa menyelesaikannya dengan **Flexbox** atau **CSS Grid**.
3. **Manfaatkan kapabilitas CSS Modern**: CSS modern saat ini sudah mampu membuat animasi halus, transisi state hover/focus, dark mode theme toggle, hingga layout yang sepenuhnya responsif tanpa membutuhkan satu baris kode JavaScript pun.

Sekarang kita sudah paham bagaimana CSS berkolaborasi dengan HTML dan JS. Mari kita bahas secara spesifik: **apa saja kemampuan teknis yang sebenarnya bisa dilakukan oleh CSS?**

**[Lanjut: Apa yang Sebenarnya Dilakukan CSS? →](/bab0/mengapa-belajar-html/)**
