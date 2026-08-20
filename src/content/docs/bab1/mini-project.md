---
title: "1.10 Mini Project — Membangun Profile Card Pertama"
description: "Proyek mandiri mempraktikkan seluruh konsep BAB 1 — membangun komponen Kartu Profil Pengembang dengan ruleset CSS bersih, terstruktur, dan valid."
---

Saatnya mempraktikkan seluruh pemahaman yang telah kamu bangun di BAB 1! Di proyek ini, kamu akan membuat sebuah komponen **Developer Profile Card** mandiri dari nol.

---

## Spesifikasi Proyek

Komponen harus memenuhi kriteria berikut:
1. Menggunakan **Universal Selector reset `*`** dengan `box-sizing: border-box`.
2. Menggunakan **Class Selector** yang deskriptif dan terstruktur (`.profile-card`, `.profile-avatar`, `.profile-name`, `.profile-role`, `.profile-bio`, `.btn-contact`).
3. Memanfaatkan **Shorthand properties** untuk `padding`, `margin`, dan `border`.
4. Menggunakan **Komentar CSS yang rapi** untuk memisahkan bagian reset, komponen card, dan tombol.

---

## Langkah 1: Struktur HTML

Buat file `index.html`:

```html
<!DOCTYPE html>
<html lang="id">
<head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <title>Developer Profile Card</title>
 <link rel="stylesheet" href="style.css" />
</head>
<body>

 <main class="page-wrapper">
 <article class="profile-card">
 <div class="avatar-placeholder">DEV</div>
 <h1 class="profile-name">Alex Pratama</h1>
 <span class="profile-role">Frontend Web Developer</span>
 <p class="profile-bio">
 Siswa SMK RPL yang sedang mendalami CSS modern, spesifisitas, dan arsitektur desain antarmuka web.
 </p>
 <div class="card-actions">
 <a href="#contact" class="btn btn-primary">Hubungi Saya</a>
 </div>
 </article>
 </main>

</body>
</html>
```

---

## Langkah 2: Menulis Stylesheet Bersih

Buat file `style.css`:

```css
/* ========================================================
 1. GLOBAL RESET & BASE TYPOGRAPHY
 ======================================================== */
* {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}

body {
 font-family: "Inter", system-ui, sans-serif;
 background-color: #0c0c0e;
 color: #f0f0f3;
 line-height: 1.6;
 min-height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 1.5rem;
}

/* ========================================================
 2. PROFILE CARD COMPONENT
 ======================================================== */
.profile-card {
 background-color: #18181d;
 border: 1px solid rgba(255, 255, 255, 0.08);
 border-radius: 1rem;
 padding: 2rem;
 max-width: 24rem;
 text-align: center;
 box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
}

.avatar-placeholder {
 width: 4.5rem;
 height: 4.5rem;
 background: linear-gradient(135deg, #c62828, #e8392b);
 color: #ffffff;
 font-weight: 800;
 font-size: 1.25rem;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin: 0 auto 1.25rem auto; /* Shorthand margin tengah */
}

.profile-name {
 font-size: 1.35rem;
 font-weight: 700;
 color: #f0f0f3;
 line-height: 1.2;
}

.profile-role {
 display: inline-block;
 font-size: 0.75rem;
 font-weight: 600;
 color: #ff6b5b;
 text-transform: uppercase;
 letter-spacing: 0.06em;
 margin-top: 0.25rem;
 margin-bottom: 1rem;
}

.profile-bio {
 font-size: 0.875rem;
 color: #9898a6;
 margin-bottom: 1.5rem;
}

/* ========================================================
 3. BUTTON COMPONENT
 ======================================================== */
.btn {
 display: inline-block;
 padding: 0.65rem 1.5rem; /* Shorthand padding: 0.65rem top/bottom, 1.5rem left/right */
 border-radius: 0.5rem;
 font-size: 0.875rem;
 font-weight: 600;
 text-decoration: none;
 cursor: pointer;
 transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn-primary {
 background: linear-gradient(135deg, #c62828, #e8392b);
 color: #ffffff;
}

.btn-primary:hover {
 transform: translateY(-2px);
 box-shadow: 0 6px 20px rgba(232, 57, 43, 0.4);
}
```

---

## Rubrik Penilaian Mandiri

- [ ] Seluruh deklarasi diakhiri titik koma `;`.
- [ ] Penamaan class menggunakan *kebab-case* deskriptif.
- [ ] Penggunaan shorthand `padding` dan `margin` tepat dan bebas error.
- [ ] Tampilan kartu rapi di tengah layar dan nyaman dibaca.
