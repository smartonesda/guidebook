---
title: "2.4 Pseudo-Classes: State & Form Interaction"
description: "Mempelajari cara mengubah tampilan elemen secara dinamis berdasarkan interaksi pengguna dan status formulir — :hover, :focus, :focus-visible, :active, :checked, :focus-within."
---

Elemen HTML tidaklah statis. Ketika pengguna mengarahkan mouse, menekan tombol keyboard Tab, mencentang checkbox, atau mengetik di kolom input, elemen tersebut berpindah **keadaan (*state*)**.

**Pseudo-class** (ditandai dengan titik dua tunggal `:`) adalah kata kunci yang ditambahkan ke selector untuk menentukan style elemen ketika berada dalam **kondisi atau status tertentu**.

---

## 1. User Action Pseudo-Classes (Interaksi Pengguna)

### A. `:hover` — Kursor Mengambang di Atas Elemen
Aktif ketika pointer mouse berada di atas elemen:

```css
.btn-primary {
 background-color: #e8392b;
 transition: transform 0.2s ease, background-color 0.2s ease;
}

.btn-primary:hover {
 background-color: #c62828;
 transform: translateY(-2px);
}
```

### B. `:focus` vs `:focus-visible` — Aksesibilitas Keyboard
- `:focus`: Aktif setiap kali elemen menerima fokus (baik via klik mouse maupun tombol keyboard Tab).
- `:focus-visible`: **Standar Aksesibilitas Modern!** Hanya aktif ketika pengguna bernavigasi menggunakan **keyboard (Tab)** atau teknologi asistif, sehingga tidak memunculkan garis outline yang mengganggu saat diklik mouse biasa.

```css
/* Menghilangkan outline jelek saat diklik mouse, tapi menjaga aksesibilitas keyboard */
button:focus {
 outline: none;
}

button:focus-visible {
 outline: 2px solid #e8392b;
 outline-offset: 2px;
}
```

### C. `:active` — Saat Tombol Diklik & Ditekan
Aktif pada momen sepersekian detik ketika tombol mouse sedang ditekan (*mouse down*) sebelum dilepas:

```css
.btn:active {
 transform: scale(0.98);
 box-shadow: none;
}
```

---

## 2. Aturan Emas Urutan LVHA untuk Tautan Link!

Ketika kamu memberi style pada link `<a>`, kamu **WAJIB** menulis pseudo-class dalam urutan **LVHA**:

```text
1. :link (L) → Link yang belum pernah dikunjungi
2. :visited (V) → Link yang sudah pernah dikunjungi
3. :hover (H) → Kursor berada di atas link
4. :active (A) → Link sedang diklik/ditekan
```

```css
/* [BENAR] Urutan yang BENAR */
a:link { color: #60a5fa; }
a:visited { color: #a78bfa; }
a:hover { color: #e8392b; text-decoration: underline; }
a:active { color: #fbbf24; }
```

> [PERHATIAN] **Kenapa Urutan LVHA Penting?** 
> Mengikuti hukum Cascade (urutan kode). Jika kamu menulis `:hover` sebelum `:visited`, maka ketika link sudah pernah dikunjungi, warna `:visited` akan menimpa warna `:hover` sehingga efek hover tidak akan pernah terlihat!

---

## 3. Form & Input State Pseudo-Classes

Formulir HTML memiliki banyak state alami yang bisa langsung kita percantik:

### A. `:checked`, `:disabled`, `:enabled`
```css
/* Mengubah border kartu ketika radio button di dalamnya terpilih */
input[type="radio"]:checked + label {
 border-color: #e8392b;
 background-color: rgba(232, 57, 43, 0.08);
}

/* Styling kolom yang dinonaktifkan */
input:disabled {
 background-color: #19191e;
 cursor: not-allowed;
 opacity: 0.6;
}
```

### B. `:required` & `:optional`
```css
/* Menandai input yang wajib diisi */
input:required {
 border-left: 3px solid #e8392b;
}
```

### C. `:valid` & `:invalid` (Validasi Form Realtime)
```css
/* Tanda merah otomatis jika format email salah */
input[type="email"]:not(:placeholder-shown):invalid {
 border-color: #ef4444;
 color: #ef4444;
}

/* Tanda hijau jika input valid */
input[type="email"]:not(:placeholder-shown):valid {
 border-color: #22c55e;
}
```

---

## 4. Dua Fitur Canggih: `:focus-within` & `:placeholder-shown`

### A. `:focus-within` — Deteksi Fokus pada Anak Elemen
Memberi style pada **elemen pembungkus (parent)** ketika salah satu anak di dalamnya menerima fokus keyboard/input!

```css
/* Memberi efek glow pada seluruh box pencarian ketika input di dalamnya diklik */
.search-bar-container:focus-within {
 border-color: #e8392b;
 box-shadow: 0 0 0 3px rgba(232, 57, 43, 0.2);
}
```

### B. `:placeholder-shown` — Pola Floating Label Modern
Mendeteksi apakah kolom input sedang kosong (placeholder terlihat) atau sudah terisi teks:

```css
/* Trik Floating Label tanpa JavaScript */
.form-group input:not(:placeholder-shown) + label {
 transform: translateY(-24px) scale(0.85);
 color: #e8392b;
}
```

---

## 5. URL Target State: `:target`

Pseudo-class `:target` aktif pada elemen yang memiliki `id` yang cocok dengan fragmen `#hash` di URL browser saat ini:

```html
<!-- URL: https://mysite.com/#faq-1 -->
<div id="faq-1" class="faq-item">
 <h3>Bagaimana cara belajarnya?</h3>
 <p>Ikuti kurikulum step-by-step.</p>
</div>
```

```css
/* Sorot FAQ item yang dituju dari URL */
.faq-item:target {
 border: 2px solid #e8392b;
 background-color: rgba(232, 57, 43, 0.05);
}
```

---

## Ringkasan State Pseudo-Classes

| Pseudo-Class | Kondisi Aktif | Penggunaan Utama |
|:---|:---|:---|
| `:hover` | Kursor pointer berada di atas elemen | Tombol, Card, Link |
| `:focus` | Elemen menerima fokus input/klik | Input form |
| `:focus-visible` | Elemen menerima fokus via navigasi keyboard | Aksesibilitas keyboard |
| `:active` | Elemen sedang ditekan/diklik | Tombol tactile feedback |
| `:checked` | Checkbox atau radio button dicentang | Kustom radio/checkbox |
| `:disabled` | Elemen memiliki atribut `disabled` | Form submission lock |
| `:focus-within` | Elemen atau anak di dalamnya menerima fokus | Search bar, Input group |
| `:placeholder-shown` | Placeholder input sedang terlihat (belum ada teks) | Floating label UI |
| `:target` | `id` elemen cocok dengan `#hash` URL | Modal, Tab, Accordion |