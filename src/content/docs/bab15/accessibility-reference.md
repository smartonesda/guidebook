---
title: "A11y & ARIA Reference"
description: Panduan referensi cepat Aksesibilitas Web (WCAG) dan ARIA Attributes — role, aria-label, aria-live, aria-expanded, dan checklist pengujian keyboard.
---

## 🦮 1. ARIA Attributes Quick Lookup

```html
<!-- Label teks tersembunyi untuk tombol ikon saja -->
<button aria-label="Tutup Dialog">✕</button>

<!-- Sembunyikan elemen dekoratif dari screen reader -->
<span aria-hidden="true">🎨</span>

<!-- Status komponen interaktif (Accordion / Dropdown) -->
<button aria-expanded="false" aria-controls="menu-id">Menu</button>

<!-- Hubungkan input dengan teks deskripsi petunjuk -->
<input aria-describedby="hint-id" />
<p id="hint-id">Minimal 8 karakter.</p>

<!-- Area pesan pengumuman dinamis dari JavaScript -->
<div aria-live="polite" id="notification-area"></div>
```

---

## 🎭 2. ARIA Landmark Roles (Gunakan Elemen Native Lebih Dulu)

| ARIA Role | Elemen Native Setara | Fungsi Landmark |
|---|---|---|
| `role="banner"` | `<header>` | Header utama situs |
| `role="navigation"` | `<nav>` | Area navigasi |
| `role="main"` | `<main>` | Konten utama dokumen |
| `role="contentinfo"` | `<footer>` | Footer situs |
| `role="search"` | `<form role="search">` | Form pencarian |
| `role="dialog"` | `<dialog>` / custom modal | Dialog pop-up / modal |
| `role="alert"` | — | Pesan peringatan darurat |

---

## ⌨️ 3. Keyboard Accessibility Cheat Sheet

- **`Tab`**: Bergerak maju antar elemen interaktif.
- **`Shift + Tab`**: Bergerak mundur ke elemen sebelumnya.
- **`Enter`**: Mengaktifkan link (`<a>`) atau menekan tombol (`<button>`).
- **`Space`**: Menekan tombol (`<button>`), mencentang/memilih checkbox.
- **`:focus-visible`**: Gunakan di CSS untuk indikator garis fokus keyboard yang jelas.

---

**[Lanjut: SEO & Metadata Reference →](/bab15/seo-metadata-reference/)**
