---
title: "2.9 Studi Kasus — Refactoring Selector E-Commerce Card"
description: "Studi kasus dunia nyata membedah stylesheet rapuh pada komponen e-commerce, mengidentifikasi kelemahan penargetan, dan merefaktornya menjadi selector presisi dan efisien."
---

Mari kita bedah skenario nyata yang sering dihadapi frontend engineer saat memelihara (*maintenance*) website e-commerce.

Kamu menerima kode komponen **Product Showcase Card** dari developer sebelumnya yang sering mengalami bug tampilan saat struktur HTML diperbarui.

---

## Kode Asal (Before Refactoring)

### Struktur HTML:
```html
<div class="product-item promo out-of-stock" data-category="laptop" id="prod-102">
 <div class="header">
 <span class="badge">Diskon 20%</span>
 <img src="/laptop.png" alt="Laptop Gaming" />
 </div>
 <div class="details">
 <h3 class="name"><a href="/product/102">Laptop Gaming Pro 15</a></h3>
 <p class="specs">RAM 16GB • SSD 512GB • RTX 4060</p>
 <div class="price-box">
 <span class="old-price">Rp 18.000.000</span>
 <span class="current-price">Rp 14.400.000</span>
 </div>
 </div>
 <div class="action-footer">
 <button class="btn btn-cart" disabled>Habis Terjual</button>
 <a href="/specs.pdf" class="download-link">Unduh Brosur Spesifikasi</a>
 </div>
</div>
```

### CSS Asal yang Bermasalah:
```css
/* [SALAH] Masalah 1: ID selector dengan bobot spesifisitas terlalu tinggi */
#prod-102 {
 border: 1px solid #383840;
}

/* [SALAH] Masalah 2: Over-qualified tag + fragile deep nesting */
div.product-item div.details h3.name a {
 color: #f0f0f3;
 text-decoration: none;
}

/* [SALAH] Masalah 3: Selector tidak membedakan hover link vs hover kartu */
div.product-item a:hover {
 color: #e8392b;
}

/* [SALAH] Masalah 4: Menargetkan tombol disabled secara manual dengan class duplikat */
.product-item .btn-cart[disabled] {
 background-color: #383840;
 cursor: not-allowed;
}

/* [SALAH] Masalah 5: Manual icon link tanpa memanfaatkan attribute selector */
.product-item .download-link {
 color: #60a5fa;
}
```

---

## Analisis Masalah & Rencana Refactoring

1. **Ganti `#prod-102` dengan `.product-card`:** Komponen harus reusable untuk semua produk, bukan hanya ID 102.
2. **Sederhanakan rantai `div.product-item div.details h3.name a`:** Cukup gunakan `.product-card__title a` atau `.product-card a`.
3. **Gunakan Substring Attribute Selector `[href$=".pdf"]`:** Otomatis mendeteksi file brosur PDF tanpa perlu class `.download-link` manual.
4. **Gunakan `:has()` untuk State Kartu:** Ubah opacity seluruh kartu secara otomatis jika tombol di dalamnya `:disabled`!

---

## Hasil Refactoring (After)

```css
/* 1. Base Component Card */
.product-card {
 background-color: #18181d;
 border: 1px solid rgba(255, 255, 255, 0.08);
 border-radius: 1rem;
 padding: 1.25rem;
 display: flex;
 flex-direction: column;
 gap: 1rem;
 transition: transform 0.2s ease, border-color 0.2s ease;
}

/* 2. State Out of Stock Otomatis via :has() */
.product-card:has(button:disabled) {
 opacity: 0.75;
 filter: grayscale(0.2);
}

/* 3. Compound Selector untuk Promo Badge */
.product-card.promo {
 border-color: rgba(232, 57, 43, 0.4);
}

/* 4. Selector Judul yang Datar & Tahan Banting */
.product-card__title a {
 color: #f0f0f3;
 text-decoration: none;
 font-weight: 700;
}
.product-card__title a:hover {
 color: #e8392b;
 text-decoration: underline;
}

/* 5. Otomatis Menandai Link PDF dengan Attribute Selector */
.product-card a[href$=".pdf"]::before {
 content: " ";
 font-size: 0.9em;
}

/* 6. State Tombol Cart via Pseudo-classes */
.product-card button:not(:disabled):hover {
 background-color: #e8392b;
 transform: translateY(-2px);
}

.product-card button:disabled {
 background-color: #232328;
 color: #636370;
 cursor: not-allowed;
}
```

---

## Pelajaran Kunci dari Studi Kasus:
- Kode berkurang dari 40 baris menjadi 25 baris yang jauh lebih bersih.
- Komponen kebal dari perubahan struktur `<div>` pembungkus di dalam HTML.
- Logika kartu habis terjual berjalan otomatis dengan bantuan `:has()` tanpa memerlukan baris JavaScript tambahan.