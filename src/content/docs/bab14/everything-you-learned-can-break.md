---
title: "Everything Can Break"
description: Matriks pemetaan bug HTML per bab (BAB 1–13) dan kesadaran bahwa setiap fitur HTML bisa rusak jika tidak dipahami dengan benar.
---

Selamat atas pencapaianmu menuntaskan *The Ultimate Boss Challenge*!

Pelajaran berharga dari seluruh Lab di BAB 14 ini adalah: **Setiap fitur HTML yang kamu pelajari dari BAB 1 hingga BAB 13 dapat mengalami bug jika ditulis tanpa pemahaman.**

---

## 🗺️ Matriks Pemetaan Bug HTML per Bab

```
BAB 1  (Fundamentals)  ──► Missing <!DOCTYPE html>, tag menggantung, unclosed tags.
BAB 2  (Typography)    ──► Loncat tingkatan heading (h1 -> h4), tag <p> membungkus block elements.
BAB 3  (Navigation)    ──► Mismatch fragment anchor (#id), link mati, target="_blank" tanpa rel.
BAB 4  (Multimedia)    ──► Lupa atribut alt, hilang width/height (pemicu CLS), loading="eager" salah tempat.
BAB 5  (Lists & Tables) ──► Tabel data tanpa <th> scope, <table> di dalam <p>.
BAB 6  (Forms)         ──► Lupa atribut name (data hilang), radio group beda name, missing submit button.
BAB 7  (Attributes)    ──► Duplicate ID, mitos boolean attribute (required="false").
BAB 8  (Semantics)     ──► Wabah Div-Soup, <section> tanpa heading, <article> salah tempat.
BAB 9  (Metadata/SEO)  ──► Charset tidak di awal <head>, URL relatif di Open Graph, title generik.
BAB 10 (Accessibility) ──► Menghapus outline focus (*:focus{outline:none}), icon button buta tanpa aria-label.
BAB 11 (Best Practices)──► Indentasi hancur, file/class huruf besar dan spasi, anti-pattern.
BAB 12 (Mini Projects) ──► Tidak mampu menerjemahkan brief menjadi pohon hirarki dokumen.
BAB 13 (Final Project) ──► Kegagalan integrasi sistemik seluruh aspek dokumen.
```

---

## 💡 Pergeseran Mindset: Dari Student ke Debugger

```
 PEMULA (STUDENT)                     DEVELOPER (DEBUGGER)
┌─────────────────────────┐          ┌─────────────────────────┐
│ "Kodenya tidak jalan,   │          │ "Mengapa perilakunya    │
│  saya copy kode baru    │ ───────► │  berbeda dari ekspektasi│
│  dari internet."        │          │  spesifikasi HTML5?"    │
└─────────────────────────┘          └─────────────────────────┘
```

Seorang developer profesional tidak pernah panik saat menemukan bug. Mereka mengisolasi masalah, memeriksa spesifikasi resmi, dan melakukan perbaikan terkecil yang presisi.

---

**[Lanjut: Error Corner →](/bab14/error-corner/)**
