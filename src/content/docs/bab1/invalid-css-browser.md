---
title: "1.6 Error Handling: Invalid Declaration & Nilai Tidak Valid"
description: "Memahami filosofi Forgiving Error Recovery browser, mengapa CSS tidak melempar crash error di console, dan cara mendeteksinya."
---

Pernahkah kamu bertanya-tanya: **mengapa CSS tidak pernah membuat halaman web crash atau melempar error merah besar di layar seperti JavaScript?**

Jawabannya adalah: **Filosofi Toleransi Kesalahan Browser (*Forgiving Error Recovery*)**.

---

## 1. Bagaimana Browser Menangani Kode CSS yang Salah?

Ketika parser browser membaca file CSS dan menemukan baris yang tidak ia pahami (misalnya typo atau fitur baru yang belum didukung), aturan standarnya adalah:

> **"Abaikan deklarasi yang tidak valid ini secara diam-diam, lewati, lalu lanjutkan memproses baris berikutnya seperti biasa."**

```css
.card {
 color: #f0f0f3;
 colr: red; /* [SALAH] Typo nama properti → Diabaikan browser */
 background-color: 50px; /* [SALAH] Nilai tidak valid untuk warna → Diabaikan browser */
 padding: 1rem; /* [BENAR] Valid → Tetap dijalankan! */
}
```

Pada contoh di atas:
- Teks `.card` tetap berwarna putih abu (`color: #f0f0f3`).
- Padding `1rem` tetap diterapkan dengan sempurna.
- Browser tidak berhenti bekerja!

---

## 2. Mengapa Filosofi Ini Diciptakan? (Backward Compatibility)

Filosofi ini dirancang sengaja oleh konsorsium web W3C agar web memiliki sifat **Forward & Backward Compatibility**:

1. Fitur CSS baru yang dirilis tahun 2026 tidak akan merusak browser lama tahun 2018 (browser lama hanya mengabaikan properti baru tersebut).
2. Developer dapat menulis kode *progressive enhancement* tanpa takut halaman web menjadi rusak total.

---

## 3. Cara Mendeteksi Invalid CSS Melalui DevTools

Karena browser tidak melempar pesan error ke layar, cara utama developer mendiagnosis kesalahan CSS adalah dengan membuka **Browser DevTools (F12)**:

Di tab **Styles**:
- Deklarasi yang salah akan diberi **garis coret (*strikethrough*)**.
- Di sebelahnya akan muncul **ikon tanda seru kuning / abu-abu** yang menjelaskan mengapa nilai tersebut tidak dikenali oleh browser.
