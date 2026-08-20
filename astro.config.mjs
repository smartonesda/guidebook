const isGithub = process.env.GITHUB_ACTIONS === "true";

// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: isGithub
    ? "https://smartonesda.github.io"
    : "https://css-guidebook.vercel.app",
  base: isGithub ? "/css-guidebook/" : "/",
  integrations: [
    starlight({
      title: "CSS Guidebook",
      favicon: "/images/light-smartone.png",
      head: [
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://css-guidebook.vercel.app/images/cover-learn.png",
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
            content: "https://css-guidebook.vercel.app/images/cover-learn.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.googleapis.com",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "",
          },
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/smartonesda/guidebook/tree/css",
        },
      ],
      components: {
        Hero: "./src/components/Hero.astro",
      },
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "BAB 0 — Getting Started",
          collapsed: true,
          items: [
            { label: "0.1 Introduction", link: "/bab0/introduction/" },
            { label: "0.2 Selamat Datang", link: "/bab0/selamat-datang/" },
            { label: "0.3 Cara Menggunakan Guidebook", link: "/bab0/cara-menggunakan-guidebook/" },
            { label: "0.4 Apa itu CSS?", link: "/bab0/apa-itu-web/" },
            { label: "0.5 Cara Browser Membaca CSS", link: "/bab0/bagaimana-browser-bekerja/" },
            { label: "0.6 HTML vs CSS vs JavaScript", link: "/bab0/html-css-javascript/" },
            { label: "0.7 Apa yang Dilakukan CSS?", link: "/bab0/mengapa-belajar-html/" },
            { label: "0.8 Tools yang Digunakan", link: "/bab0/persiapan-software/" },
            { label: "0.9 Setup VS Code", link: "/bab0/install-vscode/" },
            { label: "0.10 Tiga Cara Memasang CSS", link: "/bab0/file-pertama/" },
            { label: "0.11 Cara Membaca Dokumentasi", link: "/bab0/membuka-di-browser/" },
            { label: "0.12 Mengenal Browser DevTools", link: "/bab0/mengenal-devtools/" },
            { label: "0.13 Error Corner (5 Kesalahan)", link: "/bab0/error-corner/" },
            { label: "0.14 Ringkasan & Mini Project", link: "/bab0/ringkasan/" },
          ],
        },
        {
          label: "BAB 1 — CSS Fundamentals",
          collapsed: true,
          items: [
            { label: "1.0 Introduction", link: "/bab1/introduction/" },
            { label: "1.1 Apa itu CSS?", link: "/bab1/apa-itu-css/" },
            { label: "1.2 Anatomi Ruleset", link: "/bab1/anatomi-ruleset/" },
            { label: "1.3 Selector Dasar", link: "/bab1/selector-dasar/" },
            { label: "1.4 Komentar & Whitespace", link: "/bab1/komentar-whitespace/" },
            { label: "1.5 Shorthand vs Longhand", link: "/bab1/shorthand-longhand/" },
            { label: "1.6 Error Handling di CSS", link: "/bab1/invalid-css-browser/" },
            { label: "1.7 Pipeline Browser & CSSOM", link: "/bab1/browser-cssom/" },
            { label: "1.8 Mengenal DevTools", link: "/bab1/mengenal-devtools/" },
            { label: "1.9 Studi Kasus", link: "/bab1/studi-kasus/" },
            { label: "1.10 Mini Project", link: "/bab1/mini-project/" },
            { label: "1.11 Challenge Lab", link: "/bab1/challenge/" },
            { label: "1.12 Error Corner", link: "/bab1/error-corner/" },
            { label: "1.13 Ringkasan & Kuis", link: "/bab1/ringkasan/" },
          ],
        },
        {
          label: "BAB 2 — Selectors & Specificity",
          collapsed: true,
          items: [
            { label: "2.0 Introduction", link: "/bab2/introduction/" },
            { label: "2.1 Basic Selectors", link: "/bab2/basic-selectors/" },
            { label: "2.2 Combinators", link: "/bab2/combinators/" },
            { label: "2.3 Attribute Selectors", link: "/bab2/attribute-selectors/" },
            { label: "2.4 Pseudo-Classes: State & Form", link: "/bab2/pseudo-classes-state/" },
            { label: "2.5 Pseudo-Classes: Struktural", link: "/bab2/pseudo-classes-structural/" },
            { label: "2.6 Pseudo-Elements", link: "/bab2/pseudo-elements/" },
            { label: "2.7 Modern Functional Selectors", link: "/bab2/modern-functional-selectors/" },
            { label: "2.8 Selector Strategy", link: "/bab2/selector-strategy/" },
            { label: "2.9 Studi Kasus", link: "/bab2/studi-kasus/" },
            { label: "2.10 Mini Project", link: "/bab2/mini-project/" },
            { label: "2.11 Challenge Lab", link: "/bab2/challenge/" },
            { label: "2.12 Error Corner", link: "/bab2/error-corner/" },
            { label: "2.13 Ringkasan", link: "/bab2/ringkasan/" },
          ],
        },
        {
          label: "BAB 3 — The Cascade",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab3/introduction/" },
            { label: "Studi Kasus", link: "/bab3/studi-kasus/" },
            { label: "Mini Project", link: "/bab3/mini-project/" },
            { label: "Challenge", link: "/bab3/challenge/" },
            { label: "Error Corner", link: "/bab3/error-corner/" },
            { label: "Ringkasan", link: "/bab3/ringkasan/" },
          ],
        },
        {
          label: "BAB 4 — Box Model",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab4/introduction/" },
            { label: "Studi Kasus", link: "/bab4/studi-kasus/" },
            { label: "Mini Project", link: "/bab4/mini-project/" },
            { label: "Challenge", link: "/bab4/challenge/" },
            { label: "Error Corner", link: "/bab4/error-corner/" },
            { label: "Ringkasan", link: "/bab4/ringkasan/" },
          ],
        },
        {
          label: "BAB 5 — Typography & Colors",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab5/introduction/" },
            { label: "Studi Kasus", link: "/bab5/studi-kasus/" },
            { label: "Mini Project", link: "/bab5/mini-project/" },
            { label: "Challenge", link: "/bab5/challenge/" },
            { label: "Error Corner", link: "/bab5/error-corner/" },
            { label: "Ringkasan", link: "/bab5/ringkasan/" },
          ],
        },
        {
          label: "BAB 6 — Flexbox",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab6/introduction/" },
            { label: "Studi Kasus", link: "/bab6/studi-kasus/" },
            { label: "Mini Project", link: "/bab6/mini-project/" },
            { label: "Challenge", link: "/bab6/challenge/" },
            { label: "Error Corner", link: "/bab6/error-corner/" },
            { label: "Ringkasan", link: "/bab6/ringkasan/" },
          ],
        },
        {
          label: "BAB 7 — CSS Grid",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab7/introduction/" },
            { label: "Studi Kasus", link: "/bab7/studi-kasus/" },
            { label: "Mini Project", link: "/bab7/mini-project/" },
            { label: "Challenge", link: "/bab7/challenge/" },
            { label: "Error Corner", link: "/bab7/error-corner/" },
            { label: "Ringkasan", link: "/bab7/ringkasan/" },
          ],
        },
        {
          label: "BAB 8 — Responsive Design",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab8/introduction/" },
            { label: "Studi Kasus", link: "/bab8/studi-kasus/" },
            { label: "Mini Project", link: "/bab8/mini-project/" },
            { label: "Challenge", link: "/bab8/challenge/" },
            { label: "Error Corner", link: "/bab8/error-corner/" },
            { label: "Ringkasan", link: "/bab8/ringkasan/" },
          ],
        },
        {
          label: "BAB 9 — Transitions & Animations",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab9/introduction/" },
            { label: "Studi Kasus", link: "/bab9/studi-kasus/" },
            { label: "Mini Project", link: "/bab9/mini-project/" },
            { label: "Challenge", link: "/bab9/challenge/" },
            { label: "Error Corner", link: "/bab9/error-corner/" },
            { label: "Ringkasan", link: "/bab9/ringkasan/" },
          ],
        },
        {
          label: "BAB 10 — CSS Architecture",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab10/introduction/" },
            { label: "Studi Kasus", link: "/bab10/studi-kasus/" },
            { label: "Mini Project", link: "/bab10/mini-project/" },
            { label: "Challenge", link: "/bab10/challenge/" },
            { label: "Error Corner", link: "/bab10/error-corner/" },
            { label: "Ringkasan", link: "/bab10/ringkasan/" },
          ],
        },
        {
          label: "BAB 11 — CSS Best Practices",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab11/introduction/" },
            { label: "Studi Kasus", link: "/bab11/studi-kasus/" },
            { label: "Mini Project", link: "/bab11/mini-project/" },
            { label: "Challenge", link: "/bab11/challenge/" },
            { label: "Error Corner", link: "/bab11/error-corner/" },
            { label: "Ringkasan", link: "/bab11/ringkasan/" },
          ],
        },
        {
          label: "BAB 12 — Mini Project Collection",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab12/introduction/" },
            { label: "Project 1 — Personal Biodata", link: "/bab12/project-1-biodata/" },
            { label: "Project 2 — School Profile", link: "/bab12/project-2-school-profile/" },
            { label: "Project 3 — Blog Article", link: "/bab12/project-3-blog-article/" },
            { label: "Project 4 — Product Showcase", link: "/bab12/project-4-product-showcase/" },
            { label: "Project 5 — Event Registration", link: "/bab12/project-5-event-registration/" },
            { label: "Everything Comes Together", link: "/bab12/everything-comes-together/" },
            { label: "Rubrik & Self-Review", link: "/bab12/mini-project-rubrik/" },
            { label: "Challenge", link: "/bab12/challenge/" },
            { label: "Error Corner", link: "/bab12/error-corner/" },
            { label: "Ringkasan", link: "/bab12/ringkasan/" },
          ],
        },
        {
          label: "BAB 13 — Final Project",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab13/introduction/" },
            { label: "Pilihan Project Briefs", link: "/bab13/project-briefs/" },
            { label: "Persyaratan & Spesifikasi", link: "/bab13/project-requirements/" },
            { label: "Arsitektur Informasi", link: "/bab13/information-architecture/" },
            { label: "Panduan Alur Kerja", link: "/bab13/workflow-guide/" },
            { label: "Everything Comes Together", link: "/bab13/everything-comes-together/" },
            { label: "Quality Gate & Validasi", link: "/bab13/quality-gate-validation/" },
            { label: "Panduan Presentasi Karya", link: "/bab13/presentation-guide/" },
            { label: "Rubrik Penilaian", link: "/bab13/rubrik-penilaian/" },
            { label: "Error Corner", link: "/bab13/error-corner/" },
            { label: "Ringkasan", link: "/bab13/ringkasan/" },
          ],
        },
        {
          label: "BAB 14 — Challenge Collection",
          collapsed: true,
          items: [
            { label: "Introduction", link: "/bab14/introduction/" },
            { label: "Lab 1 — Selectors & Specificity", link: "/bab14/lab-1-syntax-structure/" },
            { label: "Lab 2 — The Cascade", link: "/bab14/lab-2-text-links/" },
            { label: "Lab 3 — Box Model", link: "/bab14/lab-3-media-tables/" },
            { label: "Lab 4 — Flexbox & Grid", link: "/bab14/lab-4-forms-inputs/" },
            { label: "Lab 5 — Responsive", link: "/bab14/lab-5-attributes-data/" },
            { label: "Lab 6 — Animation & A11y", link: "/bab14/lab-6-semantic-a11y/" },
            { label: "The Ultimate Boss Challenge", link: "/bab14/boss-challenge/" },
            { label: "Everything Can Break", link: "/bab14/everything-you-learned-can-break/" },
            { label: "Error Corner", link: "/bab14/error-corner/" },
            { label: "Ringkasan", link: "/bab14/ringkasan/" },
          ],
        },
        {
          label: "BAB 15 — CSS Handbook",
          collapsed: true,
          items: [
            { label: "Introduction & Quick Start", link: "/bab15/introduction/" },
            { label: "Kamus Properti CSS", link: "/bab15/elements-reference/" },
            { label: "Kamus Selector CSS", link: "/bab15/attributes-reference/" },
            { label: "Kamus At-Rules", link: "/bab15/input-types-reference/" },
            { label: "CSS Functions Reference", link: "/bab15/entities-reference/" },
            { label: "Decision Guide", link: "/bab15/decision-guide/" },
            { label: "A11y & CSS Reference", link: "/bab15/accessibility-reference/" },
            { label: "Performance Reference", link: "/bab15/seo-metadata-reference/" },
            { label: "Properti Deprecated", link: "/bab15/deprecated-elements/" },
            { label: "VS Code Snippets & Tools", link: "/bab15/vscode-snippets/" },
            { label: "Penutup Roadmap", link: "/bab15/ringkasan/" },
          ],
        },
      ],
    }),
  ],
});

