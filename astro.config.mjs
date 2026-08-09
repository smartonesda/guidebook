const isGithub = process.env.GITHUB_ACTIONS === "true";

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: isGithub
    ? "https://smartonesda.github.io"
    : "https://html5-guidebook.vercel.app",
  base: isGithub ? "/html-guidebook/" : "/",
  integrations: [
    starlight({
      title: "HTML Guidebook",
      favicon: "/images/light-smartone.png",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content:
              "https://html5-guidebook.vercel.app/images/cover-learn.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:width",
            content: "1200",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:height",
            content: "630",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content:
              "https://html5-guidebook.vercel.app/images/cover-learn.png",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/smartonesda/guidebook/tree/html",
        },
      ],
      components: {
        Hero: "./src/components/Hero.astro",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "BAB 0 — Pengenalan",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab0/introduction/" },
            { label: "Selamat Datang", link: "/bab0/selamat-datang/" },
            {
              label: "Cara Menggunakan Guidebook",
              link: "/bab0/cara-menggunakan-guidebook/",
            },
            { label: "Apa itu Web?", link: "/bab0/apa-itu-web/" },
            {
              label: "Bagaimana Browser Bekerja",
              link: "/bab0/bagaimana-browser-bekerja/",
            },
            {
              label: "HTML, CSS, JavaScript",
              link: "/bab0/html-css-javascript/",
            },
            {
              label: "Mengapa Belajar HTML",
              link: "/bab0/mengapa-belajar-html/",
            },
            { label: "Persiapan Software", link: "/bab0/persiapan-software/" },
            { label: "Install VS Code", link: "/bab0/install-vscode/" },
            { label: "File Pertama", link: "/bab0/file-pertama/" },
            { label: "Membuka di Browser", link: "/bab0/membuka-di-browser/" },
            { label: "Mengenal DevTools", link: "/bab0/mengenal-devtools/" },
            { label: "Error Corner", link: "/bab0/error-corner/" },
            { label: "Ringkasan", link: "/bab0/ringkasan/" },
          ],
        },
        {
          label: "BAB 1 — HTML Fundamentals",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab1/introduction/" },
            { label: "Apa itu HTML?", link: "/bab1/apa-itu-html/" },
            { label: "Sejarah HTML", link: "/bab1/sejarah-html/" },
            { label: "HTML5 — Standar Modern", link: "/bab1/html5/" },
            { label: "Browser Rendering", link: "/bab1/browser-rendering/" },
            {
              label: "Struktur Dokumen HTML",
              link: "/bab1/struktur-dokumen-html/",
            },
            { label: "Anatomi Elemen HTML", link: "/bab1/anatomy-element/" },
            { label: "Komentar HTML", link: "/bab1/komentar-html/" },
            {
              label: "Whitespace & Indentasi",
              link: "/bab1/whitespace-indentation/",
            },
            { label: "HTML Validator", link: "/bab1/html-validator/" },
            { label: "Studi Kasus", link: "/bab1/studi-kasus/" },
            { label: "Mini Project", link: "/bab1/mini-project/" },
            { label: "Challenge", link: "/bab1/challenge/" },
            { label: "Error Corner", link: "/bab1/error-corner/" },
            { label: "Ringkasan", link: "/bab1/ringkasan/" },
          ],
        },
        {
          label: "BAB 2 — Teks & Tipografi",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab2/introduction/" },
            { label: "Heading h1–h6", link: "/bab2/heading/" },
            { label: "Paragraf", link: "/bab2/paragraf/" },
            { label: "Line Break & HR", link: "/bab2/line-break-hr/" },
            {
              label: "Bold, Italic, Underline",
              link: "/bab2/bold-italic-underline/",
            },
            { label: "Teks Semantik", link: "/bab2/teks-semantik/" },
            { label: "Blockquote & Kutipan", link: "/bab2/blockquote/" },
            { label: "Pre & Code", link: "/bab2/pre-code/" },
            {
              label: "Subscript & Superscript",
              link: "/bab2/subscript-superscript/",
            },
            { label: "Studi Kasus", link: "/bab2/studi-kasus/" },
            { label: "Mini Project", link: "/bab2/mini-project/" },
            { label: "Challenge", link: "/bab2/challenge/" },
            { label: "Error Corner", link: "/bab2/error-corner/" },
            { label: "Ringkasan", link: "/bab2/ringkasan/" },
          ],
        },
        {
          label: "BAB 3 — Tautan & Navigasi",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab3/introduction/" },
            { label: "Elemen Anchor", link: "/bab3/elemen-anchor/" },
            {
              label: "URL Relatif vs Absolut",
              link: "/bab3/url-relatif-absolut/",
            },
            { label: "Atribut target", link: "/bab3/atribut-target/" },
            { label: "Anchor Internal", link: "/bab3/anchor-internal/" },
            {
              label: "Link Email & Telepon",
              link: "/bab3/link-email-telepon/",
            },
            { label: "Navigasi Website", link: "/bab3/navigasi-website/" },
            { label: "Studi Kasus", link: "/bab3/studi-kasus/" },
            { label: "Mini Project", link: "/bab3/mini-project/" },
            { label: "Challenge", link: "/bab3/challenge/" },
            { label: "Error Corner", link: "/bab3/error-corner/" },
            { label: "Ringkasan", link: "/bab3/ringkasan/" },
          ],
        },
        {
          label: "BAB 4 — Gambar & Media",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab4/introduction/" },
            { label: "Elemen img", link: "/bab4/elemen-img/" },
            { label: "Atribut alt", link: "/bab4/atribut-alt/" },
            { label: "Format Gambar", link: "/bab4/format-gambar/" },
            { label: "figure & figcaption", link: "/bab4/figure-figcaption/" },
            { label: "Elemen video", link: "/bab4/elemen-video/" },
            { label: "Elemen audio", link: "/bab4/elemen-audio/" },
            { label: "Elemen iframe", link: "/bab4/elemen-iframe/" },
            { label: "Studi Kasus", link: "/bab4/studi-kasus/" },
            { label: "Mini Project", link: "/bab4/mini-project/" },
            { label: "Challenge", link: "/bab4/challenge/" },
            { label: "Error Corner", link: "/bab4/error-corner/" },
            { label: "Ringkasan", link: "/bab4/ringkasan/" },
          ],
        },
        {
          label: "BAB 5 — List",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab5/introduction/" },
            { label: "Unordered List", link: "/bab5/unordered-list/" },
            { label: "Ordered List", link: "/bab5/ordered-list/" },
            { label: "Description List", link: "/bab5/description-list/" },
            { label: "Nested List", link: "/bab5/nested-list/" },
            { label: "List sebagai Navigasi", link: "/bab5/list-navigasi/" },
            { label: "Studi Kasus", link: "/bab5/studi-kasus/" },
            { label: "Mini Project", link: "/bab5/mini-project/" },
            { label: "Challenge", link: "/bab5/challenge/" },
            { label: "Error Corner", link: "/bab5/error-corner/" },
            { label: "Ringkasan", link: "/bab5/ringkasan/" },
          ],
        },
        {
          label: "BAB 6 — Tabel",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab6/introduction/" },
            { label: "Struktur Tabel", link: "/bab6/struktur-tabel/" },
            { label: "thead, tbody, tfoot", link: "/bab6/thead-tbody-tfoot/" },
            { label: "colspan & rowspan", link: "/bab6/colspan-rowspan/" },
            { label: "Tabel Aksesibel", link: "/bab6/tabel-aksesibel/" },
            { label: "Studi Kasus", link: "/bab6/studi-kasus/" },
            { label: "Mini Project", link: "/bab6/mini-project/" },
            { label: "Challenge", link: "/bab6/challenge/" },
            { label: "Error Corner", link: "/bab6/error-corner/" },
            { label: "Ringkasan", link: "/bab6/ringkasan/" },
          ],
        },
        {
          label: "BAB 7 — Form & Input",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab7/introduction/" },
            { label: "Elemen form", link: "/bab7/elemen-form/" },
            { label: "Input Types", link: "/bab7/input-types/" },
            { label: "Elemen label", link: "/bab7/elemen-label/" },
            { label: "textarea & select", link: "/bab7/textarea-select/" },
            { label: "Tombol & Submit", link: "/bab7/tombol-submit/" },
            { label: "Validasi HTML", link: "/bab7/validasi-html/" },
            { label: "Fieldset & Legend", link: "/bab7/fieldset-legend/" },
            { label: "Studi Kasus", link: "/bab7/studi-kasus/" },
            { label: "Mini Project", link: "/bab7/mini-project/" },
            { label: "Challenge", link: "/bab7/challenge/" },
            { label: "Error Corner", link: "/bab7/error-corner/" },
            { label: "Ringkasan", link: "/bab7/ringkasan/" },
          ],
        },
        {
          label: "BAB 8 — Semantic HTML",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab8/introduction/" },
            { label: "Mengapa Semantic?", link: "/bab8/mengapa-semantic/" },
            { label: "header & nav", link: "/bab8/header-nav/" },
            { label: "main & article", link: "/bab8/main-article/" },
            { label: "section & aside", link: "/bab8/section-aside/" },
            { label: "footer", link: "/bab8/footer/" },
            { label: "div vs Semantic", link: "/bab8/div-vs-semantic/" },
            {
              label: "Struktur Halaman Nyata",
              link: "/bab8/struktur-halaman-nyata/",
            },
            { label: "Studi Kasus", link: "/bab8/studi-kasus/" },
            { label: "Mini Project", link: "/bab8/mini-project/" },
            { label: "Challenge", link: "/bab8/challenge/" },
            { label: "Error Corner", link: "/bab8/error-corner/" },
            { label: "Ringkasan", link: "/bab8/ringkasan/" },
          ],
        },
        {
          label: "BAB 9 — HTML Lanjutan",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab9/introduction/" },
            { label: "Meta Tags SEO", link: "/bab9/meta-tags-seo/" },
            { label: "Open Graph", link: "/bab9/open-graph/" },
            { label: "Data Attributes", link: "/bab9/data-attributes/" },
            { label: "Template & Slot", link: "/bab9/template-slot/" },
            { label: "Picture & srcset", link: "/bab9/picture-srcset/" },
            { label: "Details & Summary", link: "/bab9/details-summary/" },
            { label: "Studi Kasus", link: "/bab9/studi-kasus/" },
            { label: "Mini Project", link: "/bab9/mini-project/" },
            { label: "Challenge", link: "/bab9/challenge/" },
            { label: "Error Corner", link: "/bab9/error-corner/" },
            { label: "Ringkasan", link: "/bab9/ringkasan/" },
          ],
        },
        {
          label: "BAB 10 — Aksesibilitas",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab10/introduction/" },
            {
              label: "Mengapa Aksesibilitas?",
              link: "/bab10/mengapa-aksesibilitas/",
            },
            { label: "WCAG Dasar", link: "/bab10/wcag-dasar/" },
            { label: "Alt Text yang Baik", link: "/bab10/alt-text/" },
            { label: "ARIA Roles", link: "/bab10/aria-roles/" },
            {
              label: "Keyboard Navigation",
              link: "/bab10/keyboard-navigation/",
            },
            { label: "Skip Navigation", link: "/bab10/skip-navigation/" },
            { label: "Studi Kasus", link: "/bab10/studi-kasus/" },
            { label: "Mini Project", link: "/bab10/mini-project/" },
            { label: "Challenge", link: "/bab10/challenge/" },
            { label: "Error Corner", link: "/bab10/error-corner/" },
            { label: "Ringkasan", link: "/bab10/ringkasan/" },
          ],
        },
        {
          label: "BAB 11 — HTML & Browser",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab11/introduction/" },
            { label: "Rendering Browser", link: "/bab11/rendering-browser/" },
            { label: "DOM — Document Object Model", link: "/bab11/dom/" },
            { label: "DevTools Deep Dive", link: "/bab11/devtools-deep-dive/" },
            { label: "Inspeksi Elemen", link: "/bab11/inspeksi-elemen/" },
            { label: "HTML & Performance", link: "/bab11/html-performance/" },
            { label: "Studi Kasus", link: "/bab11/studi-kasus/" },
            { label: "Mini Project", link: "/bab11/mini-project/" },
            { label: "Challenge", link: "/bab11/challenge/" },
            { label: "Error Corner", link: "/bab11/error-corner/" },
            { label: "Ringkasan", link: "/bab11/ringkasan/" },
          ],
        },
        {
          label: "BAB 12 — Best Practice",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab12/introduction/" },
            { label: "Clean HTML", link: "/bab12/clean-html/" },
            {
              label: "Naming & Struktur File",
              link: "/bab12/naming-struktur/",
            },
            { label: "Validasi & Linting", link: "/bab12/validasi-linting/" },
            { label: "HTML yang Accessible", link: "/bab12/html-accessible/" },
            { label: "HTML untuk SEO", link: "/bab12/html-seo/" },
            {
              label: "Checklist Sebelum Deploy",
              link: "/bab12/checklist-deploy/",
            },
            { label: "Studi Kasus", link: "/bab12/studi-kasus/" },
            { label: "Challenge", link: "/bab12/challenge/" },
            { label: "Ringkasan", link: "/bab12/ringkasan/" },
          ],
        },
        {
          label: "BAB 13 — Roadmap Selanjutnya",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab13/introduction/" },
            { label: "Dari HTML ke CSS", link: "/bab13/dari-html-ke-css/" },
            {
              label: "Dari CSS ke JavaScript",
              link: "/bab13/dari-css-ke-javascript/",
            },
            {
              label: "Mengenal Framework Modern",
              link: "/bab13/framework-modern/",
            },
            { label: "Portfolio & GitHub", link: "/bab13/portfolio-github/" },
            { label: "Persiapan Karier", link: "/bab13/persiapan-karier/" },
            { label: "Resources Lanjutan", link: "/bab13/resources/" },
            { label: "Penutup", link: "/bab13/penutup/" },
          ],
        },
      ],
    }),
  ],
});
