# Portfolio Review: Optimizing for Recruiter Conversion

## Scope and framing
This review focuses on one question: **does the portfolio make a recruiter quickly believe "this person can do the job I need" and take action?**

I reviewed the current app structure, section hierarchy, and content/data sources:
- `src/App.tsx`
- `src/sections/intro/index.tsx`
- `src/sections/skills/index.tsx`
- `src/sections/journey/index.tsx`
- `src/sections/projects/index.tsx`
- `src/sections/projects/components/ProjectItem.tsx`
- `src/sections/articles/index.tsx`
- `src/sections/articles/components/ArticleItem.tsx`
- `src/sections/outro/index.tsx`
- `src/data/projects.tsx`
- `src/data/timeline.tsx`
- `src/data/articles.tsx`
- `index.html`

---

## Executive summary
Your portfolio is visually strong and clearly demonstrates technical range, but it currently **under-converts recruiter traffic** because the page prioritizes "interesting builder content" over "hiring signal clarity."

The largest conversion blockers:
1. Weak top-of-page hiring proposition and CTA strategy.
2. Great experience details are buried in timeline prose instead of promoted as proof.
3. Projects present tools, but not outcomes, constraints, and measurable impact.
4. Resume is not clearly part of the conversion funnel.
5. Content freshness and chronology create ambiguity (heavy 2023-2024 article emphasis vs current role).

Net: good credibility foundation, but you are leaving interviews on the table.

---

## Recruiter scorecard (current)
1. Role clarity (10-second scan): **6/10**
2. Proof of impact (business outcomes): **6/10**
3. Scannability for non-technical recruiters: **5/10**
4. Conversion path (resume/contact/book call): **4/10**
5. Relevance targeting (role-specific framing): **5/10**
6. Freshness and confidence signal: **6/10**

---

## High-priority findings (fix first)

### 1) Hero section lacks a sharp hiring proposition and primary CTA
Evidence:
- Hero title is generic (`AI / Software Engineer`) and no value proposition in one line: `src/sections/intro/index.tsx:49`, `src/sections/intro/index.tsx:91`
- Primary buttons are `/ PROJECTS` and `/ ARTICLES`, not recruiter-intent actions: `src/sections/intro/index.tsx:95`, `src/sections/intro/index.tsx:101`

Why this hurts:
- Recruiters need fast answers: role fit, seniority signal, domain relevance, location/work authorization, and how to evaluate you quickly.

Recommendation:
1. Add a one-line recruiter proposition directly under name/title.
2. Replace current primary CTA set with:
   - `Download Resume`
   - `View 3 Case Studies`
   - `Book 15-min Intro` or `Email Me`
3. Keep `/Projects` as secondary navigation, not primary conversion.

Suggested copy:
- "AI Engineer building production LLM and ML systems that reduce manual ops and decision latency."

### 2) Resume is not integrated as a first-class conversion asset
Evidence:
- No resume CTA in intro or outro sections (`src/sections/intro/index.tsx`, `src/sections/outro/index.tsx`)
- Existing footer CTA is LinkedIn-only: `src/sections/outro/index.tsx:76`

Why this hurts:
- Many recruiters open portfolio + resume in parallel. Missing one-click download is friction and drop-off.

Recommendation:
1. Add `Download Resume (PDF)` in hero and footer.
2. Add `Last updated: <Month YYYY>` near CTA.
3. Add `Open in new tab` fallback link.
4. Track clicks (analytics event) to measure conversion.

### 3) Strong achievements exist, but are buried in timeline storytelling
Evidence:
- Excellent quantified outcomes exist in timeline text (response time 3h -> 30s, 95% compliance accuracy): `src/data/timeline.tsx:106`, `src/data/timeline.tsx:107`
- These are not elevated to top-level "Impact Highlights" near hero.

Why this hurts:
- Recruiters often bounce before reaching deep timeline content.

Recommendation:
1. Add an **Impact Highlights** strip under hero with 3-4 metrics.
2. Reuse quantified outcomes from current timeline.
3. Keep timeline as supporting narrative, not primary proof container.

### 4) Projects emphasize tech stack over impact and decision quality
Evidence:
- Project cards mainly show title, short description, chips, and links: `src/sections/projects/components/ProjectItem.tsx:37`, `src/sections/projects/components/ProjectItem.tsx:43`, `src/sections/projects/components/ProjectItem.tsx:51`
- Descriptions are mostly feature-level, not outcome-level: `src/data/projects.tsx:45`, `src/data/projects.tsx:75`, `src/data/projects.tsx:132`, `src/data/projects.tsx:171`

Why this hurts:
- Hiring managers screen for "can this person solve production constraints?" not "used many tools."

Recommendation:
For top 3 projects, standardize each card into:
1. Problem/context.
2. What you built (architecture summary).
3. Measurable outcome (latency, accuracy, adoption, cost, reliability).
4. Your explicit role ownership.

### 5) Content ordering favors breadth before relevance
Evidence:
- App section order: Intro -> Skills -> Journey -> Projects -> Articles -> Outro: `src/App.tsx:11`

Why this hurts:
- Recruiters usually want: fit signal -> proof -> experience -> contact.
- Articles are valuable but should not compete with project proof or hiring CTA.

Recommendation:
Reorder to:
1. Intro + Impact Highlights
2. Featured Case Studies (3)
3. Experience Timeline (condensed)
4. Skills/Certifications (compressed)
5. Writing/Articles (optional deep dive)
6. Contact + Resume CTA

---

## Medium-priority findings

### 6) Timeline includes polarizing narrative without enough framing
Evidence:
- "Dropped out of school" appears as a standalone milestone: `src/data/timeline.tsx:36`

Why this can hurt:
- Some recruiters may anchor on risk unless reframed around outcomes, discipline, and full-time progression.

Recommendation:
- Reframe milestone as: "Chose full-time, self-directed engineering track" and immediately pair with outcomes achieved afterward.

### 7) Skills section reads as broad inventory, not hiring fit map
Evidence:
- Very large skill lists/chips: `src/sections/skills/index.tsx:77`, `src/data/skills.tsx:1`
- "TOOLS MASTERED" label may overstate and trigger skepticism: `src/sections/skills/index.tsx:48`

Recommendation:
1. Split into `Primary (job-relevant)` and `Working knowledge`.
2. Rename stat language to less absolute wording (e.g., "Tools Used in Production").
3. Tie skills to proof links ("Used in: Project X, Project Y").

### 8) Articles are strong for credibility, but too many old entries can dilute current focus
Evidence:
- 2023-2024 heavy article list: `src/data/articles.tsx:37`
- All entries rendered in full list: `src/sections/articles/index.tsx:47`

Recommendation:
1. Show only latest 3-4 by default.
2. Add "View all writing" link to Medium.
3. Prioritize articles that align to target roles.

### 9) Contact strategy is passive and geographically narrow
Evidence:
- Outro copy focuses on Melbourne IRL meetings: `src/sections/outro/index.tsx:55`

Recommendation:
1. Add remote/cross-time-zone-friendly language.
2. Include direct email CTA and optional calendly link.
3. Add response expectation ("Usually reply within 24h").

### 10) SEO/recruiter-link-preview hygiene is incomplete
Evidence:
- Generic Vite favicon still used: `index.html:5`
- Minimal metadata and no social preview tags observed: `index.html:3`

Recommendation:
1. Add `meta description`, OG tags, Twitter card tags.
2. Use custom favicon and social preview image.
3. Add structured data (`Person`, `sameAs`, `worksFor`).

---

## Low-priority but valuable improvements

### 11) Inconsistent terminology and capitalization
Evidence:
- Tech naming inconsistency like `Next.JS`: `src/data/timeline.tsx:83`

Recommendation:
- Normalize naming (`Next.js`, `MLOps`, etc.) for professionalism and ATS keyword consistency.

### 12) Visual polish can better support scanning
Evidence:
- Strong style, but recruiter-critical items (impact metrics, resume CTA, current scope) are not visually dominant.

Recommendation:
- Use one dense recruiter panel near top with role, experience years, key outcomes, resume, and contact.

---

## What to change in your content (not just layout)

### Rewrite your narrative around recruiter questions
Recruiters implicitly ask:
1. What role are you targeting?
2. What outcomes prove you can do it?
3. Where have you done this in production?
4. How do I evaluate/contact you quickly?

Your copy should answer these in the first 30 seconds.

### Recommended top-of-page copy block
- Headline: `AI Engineer | Production LLM + ML Systems`
- Subheadline: `Built and shipped AI products that reduced response times from hours to seconds and automated compliance workflows at enterprise scale.`
- CTAs: `Download Resume`, `View Case Studies`, `Contact`

---

## Resume and experience integration plan

### Portfolio-resume sync model
Treat your resume as source-of-truth for:
1. Titles and dates.
2. Impact metrics.
3. Technologies used in production.

Mirror this exactly in:
- `src/data/timeline.tsx`
- `src/data/projects.tsx`
- Hero impact metrics panel (new)

### Experience bullet framework (for both resume and portfolio)
Use this formula:
`[Action] + [System/Scope] + [Metric] + [Business Impact]`

Example format:
- "Built a RAG support assistant across X knowledge sources, reducing average resolution time from 3h+ to <30s and increasing agent throughput by Y%."

### Data you should gather for each recent role
1. Time/cost saved.
2. Latency/reliability changes.
3. Accuracy/quality improvements.
4. Scale (users, requests/day, docs indexed, regions).
5. Ownership scope (solo, led, cross-functional).

---

## Recommended implementation backlog

### Week 1 (highest ROI)
1. Hero rewrite + new CTA hierarchy.
2. Add resume download CTA in hero + footer.
3. Add Impact Highlights strip with 3-4 quantified outcomes.
4. Rework top 3 projects into case-study-style cards.
5. Add direct email CTA and response-time line.

### Week 2
1. Reorder sections for recruiter flow.
2. Reduce article list to recent featured entries.
3. Normalize skill taxonomy and terminology.
4. Add metadata/OG tags and custom favicon.
5. Add click tracking for resume/contact/case-study links.

---

## Final assessment
You already have the raw ingredients recruiters want: real shipped systems, enterprise-adjacent impact, and evidence of technical depth.  
The main opportunity is packaging: **move from "builder showcase" to "hire-me proof funnel."**

Once the hero proposition, resume funnel, and outcome-led case studies are in place, this portfolio should convert substantially better for recruiter and hiring-manager traffic.
