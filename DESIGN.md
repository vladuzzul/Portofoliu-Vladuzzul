# Portfolio redesign notes

## Current owner preferences

The homepage and Projects page now omit all hero and project photos. The brand logo remains. The homepage uses a single-column text hero and open project summaries; the Projects page highlights the first two projects with compact rows and thin purple accent lines. The audit and generation prompts below document the original redesign.

## CV-based content update

The owner-provided CV supports the machine learning libraries and workflows, SDA Academy AI Engineering course, school name, InfoTRON 2026 third-place result (ESP32 category, StratoX), and AI Deepfake Detection repository and implementation summary. Deepfake Detection replaces Hotel Management in both featured placements; Hotel Management is retained as a regular project. No personal address, date of birth, or CV file was added to the site.

## Design read and scope

A developer portfolio for recruiters and potential collaborators. The direction is clean sans-serif typography, an asymmetric hero, restrained purple accents, and tangible supporting imagery. This is an evolution of the existing brand, with recomposed page layouts.

Design settings: `DESIGN_VARIANCE: 6`, `MOTION_INTENSITY: 5`, `VISUAL_DENSITY: 4`. Native CSS suits the existing static site; introducing a JavaScript framework or an unrelated enterprise component system would add maintenance without serving these pages.

## Original-site audit

- Identity: Vladuzzul wordmark, existing car logo, purple `#6c00d7` accent, Inter typography.
- Structure: `index.html`, `about.html`, `projects.html`, `contact.html`; primary navigation labels About, Projects, Contact.
- Content: four projects, biography, programming skills, a national robotics result, and direct contact links.
- Main issues: a very tall two-row header, a sparse centered homepage, duplicated and conflicting CSS, mixed button styles, contact-only inline styles, and incomplete mobile-menu behavior.
- Existing design settings were approximately variance 3, motion 3, density 3. The refresh introduces moderate asymmetry and feedback while retaining a readable layout.
- SEO baseline: generic page titles, no meta descriptions, no Open Graph cards or structured data in the source. The Projects document incorrectly declared Romanian for English content. Search rankings and analytics were not available for inspection.
- Preserved: all four route filenames, primary navigation labels, original logo and favicon, CNAME, project destinations, contact destinations, biography facts, skill levels, and footer legal text. No forms or analytics events existed in the inspected source.

## Why the changes work

The homepage now introduces Vlad and immediately leads into real project names and descriptions. A larger left-aligned headline creates a clear entry point. A single compact header gives the content more space. Homepage project previews use open image-and-text compositions. At the owner’s request, the Projects page uses text-only featured rows with a subtle purple accent line; supporting projects use simple rows. The About page highlights an existing achievement instead of inventing new claims.

Outfit is self-hosted so typography does not require a third-party font request. Purple remains the brand accent, with separate accessible values for light and dark backgrounds. Shared CSS tokens keep the four pages consistent. Dark mode changes the whole page together.

Animations communicate reading order or respond to interaction. There are no perpetual loops, scroll hijacking, or scroll-position calculations. IntersectionObserver triggers a single section entrance and unobserves the section. Content remains visible if the observer is unavailable.

## Asset provenance

Created with the built-in image-generation tool. Final WebP assets live inside the project; runtime code does not depend on the tool's output directory. The original logo was only resized and compressed for the header; the original PNG remains untouched.

### Hero: `assets/images/code-sculpture-{720,1200}.webp`

Prompt:

> Use case: stylized-concept. Asset type: original hero artwork for a software developer portfolio. Create a refined photorealistic 3D still life of three solid sculptural code characters < / >, thick extruded brushed aluminum angle brackets and a lavender purple acrylic slash, arranged as one coherent sculpture sitting on a pale cool gray lilac studio surface. Architectural, tactile, beautifully composed, soft directional daylight, realistic shadows and reflections, sophisticated industrial design, no glowing effects, no gradients as graphics, no particles, no extra symbols, no lettering, no watermark. Landscape 3:2 composition, whole sculpture visible centered with breathing room around it. Brackets silver, only accent muted violet. Quiet background, rendered as a high end design magazine product photograph.

### Hotel: `assets/images/hotel-{720,1200}.webp`

Prompt:

> Use case: photorealistic-natural. Asset type: editorial cover image for a hotel management software project, conceptual hospitality illustration, not a screenshot. Landscape 3:2. An architectural closeup photograph of a refined contemporary hotel exterior with rhythmic balconies, white travertine concrete, deep window shadows, a few olive trees, muted silver green landscaping, soft afternoon light, pale gray blue sky. Sophisticated architectural photography with subtle film texture. No people, no logos, no text, no lettering, no UI, no watermark. Building fills most of the frame; calm restrained neutral palette.

### SafeBuy: `assets/images/safebuy-{720,1200}.webp`

Prompt:

> Use case: product-mockup. Asset type: conceptual editorial project cover for SafeBuy, software that analyzes reviews to help check product authenticity. Create a sophisticated photorealistic studio still life: two small matte off-white unbranded retail packaging boxes and a large thick translucent muted violet glass checkmark leaning against one box. Pale lavender studio background and surface, sculptural composition, soft long shadows, diffuse sunlight from left, tactile paper material, premium product photography. Landscape 3:2 composition. No readable text, no logos, no labels, no UI, no watermark. Restrained palette of lilac, off-white, graphite. Objects centered and clearly readable at small thumbnail size.

## Preflight

- One accent family, consistent semantic tokens, and a documented radius system.
- Original navigation labels and destinations retained; action labels consistent for the same intent.
- Desktop hero has two headline lines, nine description words, and visible primary action.
- One eyebrow on the four-section homepage; no section-number labels, status dots, decorative locale strips, scrolling marquees, fake metrics, or fake product interfaces.
- Real raster artwork, local fonts, responsive images, intrinsic image dimensions, and lazy project covers.
- Responsive collapse for each grid; no blank grid cells, clipped controls, or horizontal page overflow at checked widths.
- Keyboard focus, skip links, current-page navigation, mobile menu state, dark theme, and reduced-motion styles.
- Loading/error states apply only to the copy action; it disables repeated activation while pending and reports success or failure. Static project content has no remote-data loading or empty state.
- No em/en dashes in public-page copy. Biography facts remain sourced from the original pages.
- No framework, icon package, analytics, build tool, or backend added.

## Validation

Final local mobile Lighthouse homepage audit: performance 99, accessibility 100, best practices 100, SEO 100. Largest Contentful Paint 2.3 seconds, First Contentful Paint 1.1 seconds, Cumulative Layout Shift 0, Total Blocking Time 30ms. Contact audit: accessibility 100, best practices 100, SEO 100.

These are local lab results, not production measurements. Caching and HTTP compression depend on the deployment host. No field INP data or search ranking data was available. No deployment was performed.

## Certificate update

The owner-provided AI Engineer certificate supersedes the CV's in-progress course status. About now states graduation and includes a text-only Certifications section with the issuer, 539-hour program scope, issue date (29 July 2026), and a link to the original two-page PDF, copied unchanged into `assets/documents/ai-engineer-vlad-cozma.pdf`. Car Rental System was removed from Projects as requested. AI Deepfake Detection and SafeBuy remain featured.

## Featured project presentations (6 October 2026)

Mode: targeted extension, preserving the portfolio brand. Current tokens are Outfit, purple #7141bd in light mode / #c4a3f2 in dark mode, 16px surfaces and 8px controls. The homepage and Projects remain text-only, honoring the recorded owner preference. Existing filenames, primary navigation, legal footer, and theme behavior are preserved. Two standalone presentation pages were explicitly requested.

Design settings: DESIGN_VARIANCE 6, MOTION_INTENSITY 4, VISUAL_DENSITY 4. Native HTML/CSS remains the foundation. The new stylesheet reuses existing semantic tokens rather than introducing another theme or framework. The layout combines an asymmetric cover, a compact definition list, a narrative overview, a four-part processing flow, an open two-column feature grouping, and native expandable engineering notes. All multi-column content becomes one column below 768px. Sections share one theme; the generated artwork is an image, not a section theme change.

Movie Recommender replaces SafeBuy in both featured placements. SafeBuy retains its description and repository link in the regular project list. Featured titles and Explore project links now open their local presentation; the source repositories remain available through View code. The two presentations have unique titles, descriptions, canonical URLs, and Open Graph images, plus README and cross-project navigation.

Sources read on 6 October 2026:

- https://raw.githubusercontent.com/vladuzzul/Movie-Recommender/main/README.md
- https://raw.githubusercontent.com/vladuzzul/Deepfake-Detection/main/README.md

Movie Recommender copy distinguishes genre-based TF-IDF/cosine ranking from semantic embedding or collaborative-filtering systems. Deepfake Detection is identified as an AI Engineer course project; availability tests are not described as accuracy tests, and the README's original dataset and notebook are credited. No invented accuracy, adoption, or performance claims were added.

### New artwork provenance

Generated using the built-in image-generation tool. These are conceptual illustrations, not screenshots or model outputs. Each carries a visible AI-generated illustration caption. Optimized local WebP variants use explicit dimensions, responsive srcset, and high fetch priority. The movie variants are approximately 26/58 KB and the deepfake variants approximately 15/35 KB.

Movie cover: assets/images/movie-recommender-{720,1200}.webp

Prompt:

> Use case: stylized-concept. Asset type: conceptual cover artwork for Movie Recommender, a developer portfolio case study. Create a refined photographic 3D still life of a brushed aluminum film reel with a short translucent muted violet film strip gently curling forward across a cool pale-gray studio surface. A few film frames catch soft light. Tangible realistic materials, architectural clean composition, directional studio light, elegant restrained detail. Landscape 3:2 framing, entire reel visible with space around, off-white and silver with only a muted violet accent. No people, no text, no logos, no UI, no watermarks, no glowing neon. This is conceptual cinema artwork, not an application screenshot. Save the final image as a local file.

Deepfake cover: assets/images/deepfake-detection-{720,1200}.webp

Prompt:

> Use case: stylized-concept. Asset type: conceptual cover artwork for AI Deepfake Detection, a developer portfolio case study. Create a refined photographic 3D studio still life of two sculptural human face masks standing upright side by side: one smooth matte porcelain gray face, one matching face constructed of small precise brushed aluminum geometric facets. A thin translucent muted violet glass sheet sits between them. Abstract anonymous sculptures, clearly not real people. Cool pale-gray studio background, soft directional light, subtle material shadows, sophisticated restrained composition. Landscape 3:2 framing with complete masks visible and breathing room. Off-white and silver with only muted violet accent. No text, no logos, no UI, no classification markers, no arrows, no neon, no watermark. Conceptual illustration only, not evidence of model performance. Save the final image as a local file.

### Project presentation preflight

One hero eyebrow per page, one accent family, consistent corners, two-line desktop titles, readable non-wrapping CTAs, no decorative counters or invented metrics, and no em/en dashes in public HTML. Artwork stays out of the main project listing and homepage. The existing entrance/reveal effects communicate reading order and honor reduced motion. All disclosures, local links, and source links work without JavaScript; only the existing theme/menu enhancements use it. There are no new asynchronous data-loading states.

### Validation of the project pages

Both new pages were checked in the in-app browser in light and dark themes. Responsive checks covered 320px, 390px, 1024px, and 1280px widths with no horizontal overflow in the checked layouts. Confirmed the homepage and Projects entry points, SafeBuy's regular-list placement, cross-project navigation, return anchor, the How it works link, keyboard-operated disclosures, theme changes, and mobile menu Escape behavior.

A static audit passed for all six pages: one primary heading each, unique IDs, valid local assets, existing local link destinations and fragment targets, and no em/en dashes. New motion uses the existing reduced-motion media guards. Formatting and git diff whitespace checks passed.

Local mobile Lighthouse results (6 October 2026):

| Page                  | Performance | Accessibility | Best practices | SEO | LCP   | CLS | TBT  |
| --------------------- | ----------- | ------------- | -------------- | --- | ----- | --- | ---- |
| Movie Recommender     | 99          | 100           | 100            | 100 | 2.1 s | 0   | 0 ms |
| AI Deepfake Detection | 99          | 100           | 100            | 100 | 2.0 s | 0   | 0 ms |

A follow-up accessibility audit after aligning the new pages' home-link accessible name with the visible wordmark remained at 100; the label-match check passed. Shared existing pages were not otherwise redesigned. These are local lab measurements; hosting compression and caching affect production performance. No production INP measurement or deployment was performed.


## Appearance settings (6 October 2026)

The header theme toggle is now a Settings button on all six pages. Its anchored,
non-modal panel retains the existing Outfit font, neutral surfaces, 16px panel
corners, and 8px controls. Theme choices are Light, Dark, and System (default).
Purple remains the default accent; Lime, Yellow, Blue, Teal, and Rose offer
alternatives with separate light/dark palettes. Bright swatches identify each
color, while darker light-mode accent text preserves readability.

The shared script generates one panel per page. Native radio groups provide
arrow-key navigation, explicit labels, checked states, and visible focus. Escape
and the close button restore focus; clicking or tabbing outside dismisses the
panel. Opening settings closes mobile navigation. Selections apply immediately,
restore before CSS loads, and synchronize between tabs using storage events.
System removes the explicit theme override, leaving the existing CSS media query
to follow device appearance. No new dependencies or build step were introduced.

Validation: all six pages opened the panel with saved selections; all six presets
were checked in light and dark mode. Reload/navigation persistence, System's
removed override, arrow-key selection, Escape/close focus restoration, and mobile
menu interaction passed. The 320px mobile panel fit without horizontal overflow.
All palette text pairs (accent on page/surfaces/tint, button text on accent/hover)
passed 4.5:1 contrast, with a minimum of 4.51:1. Startup checks passed for empty,
System, saved, invalid, and blocked storage. JavaScript syntax and diff whitespace
checks passed. Live OS switching was not simulated; System uses CSS media queries.
