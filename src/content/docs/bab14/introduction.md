---
title: "Introduction"
description: Pengantar BAB 14 — HTML Debugging Lab. Mengembangkan pola pikir analitis dalam membaca, mendiagnosis, dan memperbaiki bug HTML secara sistematis.
---

Selamat datang di **BAB 14 — Challenge Collection (HTML Debugging Lab)**! 🛠️

Di BAB 13, kamu telah membuktikan kemampuanmu dalam **MEMBANGUN** sebuah website dari sebuah *Project Brief*.

Sekarang di BAB 14, kamu akan diuji dengan kemampuan yang jauh lebih krusial bagi seorang developer profesional di dunia kerja nyata:

> **"Jika kamu diberikan berkas kode HTML orang lain yang rusak, bermasalah, atau berantakan — dapatkah kamu membaca kodenya, menemukan sumber masalahnya, dan memperbaikinya dengan tepat?"**

---

## 🛠️ Debugging Bukan Sekadar Mencari Typo

Menemukan kesalahan (*debugging*) bukan sekadar menembak acak atau mengubah kode sampai tampilannya "terlihat benar". Debugging adalah **proses penyelidikan ilmiah dan sistematis**:

```
OBSERVE ──► REPRODUCE ──► IDENTIFY ──► UNDERSTAND ──► FIX ──► VALIDATE
  ▲                                                             │
  └─────────────────────────────────────────────────────────────┘
```

1. **Observe**: Amati gejala masalah yang terjadi (tampilan meloncat, link tidak merespons, validator error).
2. **Reproduce**: Uji dan pastikan masalah dapat diulangi secara konsisten.
3. **Identify**: Cari lokasi pasti baris kode yang memicu masalah tersebut.
4. **Understand**: Pahami *alasan teknis* mengapa kode tersebut menghasilkan masalah.
5. **Fix**: Lakukan perubahan sekecil mungkin yang dapat menyelesaikan masalah tanpa merusak bagian lain.
6. **Validate**: Uji ulang menggunakan browser, keyboard, dan W3C Validator.

---

## ⚠️ ERROR vs BUG vs BAD PRACTICE

Seorang developer harus bisa membedakan tingkat keparahan masalah:

```
┌─────────────────────────────────────────────────────────┐
│ 🔴 ERROR (Kesalahan Teknis)                             │
│ Sintaks HTML tidak valid yang memicu kegagalan W3C /    │
│ tag tidak ditutup / id duplikat.                       │
├─────────────────────────────────────────────────────────┤
│ 🟡 BUG (Perilaku Tidak Sesuai Spesifikasi)             │
│ Kode mungkin berjalan, tetapi perilakunya salah — misal │
│ link #kontak melompat ke tempat yang salah.             │
├─────────────────────────────────────────────────────────┤
│ 🔵 BAD PRACTICE / ANTI-PATTERN (Masalah Kualitas)      │
│ Kode berjalan lancar, tetapi buruk untuk maintainability│
│ atau aksesibilitas (misal <div onclick="...">).         │
└─────────────────────────────────────────────────────────┘
```

---

## 🧠 Mindset Pertanyaan Seorang Debugger

Saat menghadapi kode yang rusak, **jangan langsung bertanya**: *"Apa kode yang benar?"*

Tanyakanlah 7 pertanyaan ini:
1. *Apa yang seharusnya terjadi secara spesifikasi?*
2. *Apa yang sebenarnya terjadi di peramban web?*
3. *Di bagian mana letak perbedaannya?*
4. *Elemen atau atribut apa yang bertanggung jawab atas perilaku ini?*
5. *Bagaimana cara membuktikan dugaan penyebabnya?*
6. *Apa perubahan paling minim yang bisa memperbaiki masalah tanpa efek samping?*
7. *Apakah perbaikan ini sudah membuat W3C Validator status 0 Error?*

---

## 🗺️ Format Tantangan di BAB 14

Setiap Lab tantangan di bab ini disajikan dalam format **Debugging Lab**:
- **Scenario**: Situasi kasus nyata di mana bug terjadi.
- **Expected Behavior**: Perilaku ideal yang diharapkan.
- **Broken Code**: Potongan kode yang sengaja disisipi bug.
- **Symptoms**: Gejala visual/sistem yang muncul.
- **Investigation & Hint**: Pertanyaan pengarah untuk melatih analisis.
- **Fix & Reasoning**: Jawaban solusi beserta penjelasan teknis mendalam.

Mari kita masuk ke **Lab 1: Syntax & Structural Bugs**!

**[Lanjut: Lab 1 — Syntax & Structure →](/bab14/lab-1-syntax-structure/)**
