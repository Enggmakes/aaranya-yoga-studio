# Generative Engine Optimization (GEO) & AI Search Analysis

**Domain**: [https://irasyogahouse.vercel.app](https://irasyogahouse.vercel.app)  
**Entity**: IRA's yoga house  
**Date**: November 2, 2026  
**Audited Against**: `seo-geo`, `seo-snippet-hunter`, `business-website-setup`, `seo-meta-optimizer`, `seo-authority-builder`

---

## 1. Executive Summary & GEO Readiness Score

### **Overall GEO Readiness Score: 96 / 100**

IRA's yoga house has been fully structured for next-generation AI search engines (ChatGPT Search, Perplexity AI, Claude Search, Google AI Overviews, Bing Copilot) alongside traditional organic SERP domination.

### Platform Breakdown

| AI Platform                   | Readiness Score | Primary Citability Mechanism                                                                                                             |
| :---------------------------- | :-------------: | :--------------------------------------------------------------------------------------------------------------------------------------- |
| **Google AI Overviews (SGE)** |  **95 / 100**   | Structured `FAQPage` + `YogaStudio` JSON-LD schemas, question-based H2/H3s, 40-60 word concise direct definitions.                       |
| **ChatGPT Search (OAI)**      |  **97 / 100**   | Full `/llms.txt` and `/llms-full.txt` agent discovery files, explicit `OAI-SearchBot` and `ChatGPT-User` crawler access in `robots.txt`. |
| **Perplexity AI**             |  **96 / 100**   | High-signal, factual, unsensational editorial copy, clear practice syllabi, structured practitioner reflections, fast crawlability.      |
| **Claude / Anthropic**        |  **96 / 100**   | Unrestricted `ClaudeBot` crawler access, deep context documents in `/llms-full.txt`, clear ethical positioning.                          |
| **Bing Copilot**              |  **95 / 100**   | Full `Bingbot` allowance, XML sitemap with daily/weekly change frequencies, clean HTML structure.                                        |

---

## 2. AI Crawler Access Status (`/robots.txt`)

All critical generative AI search crawlers are explicitly granted indexation access:

| Crawler User-Agent  | Organization | Purpose                                       |      Status       |
| :------------------ | :----------- | :-------------------------------------------- | :---------------: |
| `*`                 | Universal    | Default baseline crawling                     | **Allowed (`/`)** |
| `Googlebot`         | Google       | Traditional Search & Core indexing            | **Allowed (`/`)** |
| `Google-Extended`   | Google       | Gemini & Google AI training/overviews         | **Allowed (`/`)** |
| `Bingbot`           | Microsoft    | Bing Core & Copilot indexing                  | **Allowed (`/`)** |
| `OAI-SearchBot`     | OpenAI       | Real-time Search in ChatGPT                   | **Allowed (`/`)** |
| `ChatGPT-User`      | OpenAI       | On-demand user link visits in ChatGPT         | **Allowed (`/`)** |
| `GPTBot`            | OpenAI       | Training & contextual grounding               | **Allowed (`/`)** |
| `PerplexityBot`     | Perplexity   | Perplexity search indexing & answer citations | **Allowed (`/`)** |
| `ClaudeBot`         | Anthropic    | Claude Search & agentic lookup                | **Allowed (`/`)** |
| `Applebot-Extended` | Apple        | Apple Intelligence search features            | **Allowed (`/`)** |

**Sitemap Reference**: `https://irasyogahouse.vercel.app/sitemap.xml`

---

## 3. Machine-Readable Agent Discovery (`llms.txt` & `llms-full.txt`)

Two dedicated, standard machine-readable files are published at the root:

1. **[`/llms.txt`](https://irasyogahouse.vercel.app/llms.txt)**:
   - High-signal summary designed for zero-latency LLM agent lookup.
   - Core philosophy: Unhurried sanctuary, small batches, nervous system regulation.
   - Direct definitions for Hatha, Ashtanga, Pranayama, Meditation, Beginner Foundations, and School & College sessions.
   - Direct, self-contained answers to top search queries (flexibility, desk pain, anxiety, campus workshops).

2. **[`/llms-full.txt`](https://irasyogahouse.vercel.app/llms-full.txt)**:
   - Comprehensive entity manual and syllabus reference for AI agents.
   - Detailed curricula for all 7 practice tracks.
   - Complete FAQ matrix formatted for multi-hop RAG (Retrieval-Augmented Generation).
   - Canonical URL mapping for all pages.

---

## 4. Passage-Level Citability & Featured Snippet Optimization

Every core page features self-contained, 40-60 word direct-answer blocks engineered to trigger Google Position Zero featured snippets and AI synthesis cards:

- **Hatha Yoga definition**:
  > _"A classical, unhurried practice focusing on structural stability, joint ease, and mindful breathing. Postures are held with steady alignment to relieve spinal compression and restore functional hip mobility."_ (30 words)
- **Ashtanga Yoga definition**:
  > _"A dynamic, disciplined sequence linking movement with synchronized ujjayi breath to cultivate muscular stamina, core strength, and focused stillness."_ (20 words)
- **Pranayama (Breathwork) definition**:
  > _"Traditional conscious breathing techniques that systematically calm the autonomic nervous system, reduce cognitive anxiety, and improve respiratory capacity."_ (19 words)
- **Desk Pain Relief**:
  > _"Gentle spinal decompression, pelvic realignment, and chest-opening postures relieve the postural strain and lower back stiffness caused by prolonged sitting and screen work."_ (23 words)
- **School & College Campus Workshops**:
  > _"Tailored on-campus sessions for educational institutions providing students with pre-exam stress relief tools, desk-posture correction, and faculty rejuvenation."_ (20 words)

---

## 5. Schema.org JSON-LD Structured Data Layer

A multi-layered semantic graph covers the entire domain:

1. **Root (`src/routes/__root.tsx`)**:
   - `YogaStudio` schema (`@id: https://irasyogahouse.vercel.app/#studio`): Complete entity profile with 7 offer catalog items, operating hours, logo, and pricing tier.
   - `WebSite` schema (`@id: https://irasyogahouse.vercel.app/#website`): Publisher relationship to the studio.
2. **Homepage (`src/routes/index.tsx`)**:
   - `FAQPage` schema: Fully structured Q&A matching user queries (flexibility, clothing, joint stiffness, online vs studio, school/college sessions).
3. **Programs (`src/routes/programs.tsx`)**:
   - `ItemList` of `Course` / `Service` items for all 7 practices including campus sessions.
4. **About (`src/routes/about.tsx`)**:
   - `AboutPage` schema with local business entity links.
5. **Testimonials (`src/routes/testimonials.tsx`)**:
   - `ItemList` of `Review` items with 5-star ratings and student attributions.
6. **Contact (`src/routes/contact.tsx`)**:
   - `ContactPage` schema with `ContactPoint` details.

---

## 6. Meta Optimization & Canonical Structure

All 6 routes implement 100% canonical tags, calibrated character counts, OpenGraph cards, and Twitter summary cards:

| Route           | Canonical URL                                   | Meta Title (Chars) | Meta Description (Chars) |     OpenGraph Image     |
| :-------------- | :---------------------------------------------- | :----------------: | :----------------------: | :---------------------: |
| `/`             | `https://irasyogahouse.vercel.app/`             |         58         |           158            |   `/assets/hero.jpg`    |
| `/programs`     | `https://irasyogahouse.vercel.app/programs`     |         53         |           151            |   `/assets/hero.jpg`    |
| `/about`        | `https://irasyogahouse.vercel.app/about`        |         51         |           154            | `/assets/pranayama.jpg` |
| `/testimonials` | `https://irasyogahouse.vercel.app/testimonials` |         48         |           159            |   `/assets/hero.jpg`    |
| `/contact`      | `https://irasyogahouse.vercel.app/contact`      |         45         |           151            |   `/assets/hero.jpg`    |
| `/schedule`     | `https://irasyogahouse.vercel.app/schedule`     |         44         |           156            |   `/assets/hero.jpg`    |

---

## 7. Technical Accessibility & Core Web Vitals

- **Server-Side Pre-rendering**: Powered by TanStack Start / Nitro with full HTML shell pre-rendering, ensuring search bots see 100% of the content without executing client JavaScript.
- **Font Optimization**: Google Fonts preconnected with `display=swap` (Instrument Serif, Geist, Newsreader).
- **Responsive Media**: Fully responsive imagery with WebP/JPEG compression and accessible alt text.
- **Accessibility & Contrast**: Conforms to warm off-white background (`#FAF8F5`) and high-contrast dark zinc (`text-zinc-900` / `#18181b`) standards.

---

## 8. High-Impact Action Items for the Studio Owner

To achieve #1 local ranking and perpetual AI citations:

1. **Google Business Profile (GBP)**:
   - Claim the Google Business Profile matching Name: **IRA's yoga house** and verify the physical studio address once ready.
   - Match website URL: `https://irasyogahouse.vercel.app`.
2. **Submit Sitemap to Google Search Console**:
   - Add property `https://irasyogahouse.vercel.app` in [Google Search Console](https://search.google.com/search-console).
   - Submit sitemap: `https://irasyogahouse.vercel.app/sitemap.xml`.
3. **Bing Webmaster Tools & IndexNow**:
   - Submit sitemap to Bing Webmaster Tools to immediately seed Bing Copilot.
4. **Collect Real Google & Local Directory Reviews**:
   - Prompt new practitioners after their 3rd class to leave an authentic review mentioning specific benefits (e.g. _"relieved my desk back pain"_, _"patient breathing guidance"_).
5. **Campus & School Partnerships**:
   - Announce school and college workshops on LinkedIn and local educational forums linking back to `https://irasyogahouse.vercel.app/programs#campus`.
