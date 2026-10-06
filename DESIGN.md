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
