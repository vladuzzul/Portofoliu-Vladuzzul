# Vladuzzul's developer portfolio

A responsive, four-page portfolio for Vlad Cozma. Built with plain HTML, CSS, and JavaScript, with no build step or runtime dependencies.

## Run locally

From the repository directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173>. Stop the server with Ctrl+C. The same files can be hosted directly on GitHub Pages. The existing custom-domain configuration is in `CNAME`.

## Where to make changes

| File             | Purpose                                                              |
| ---------------- | -------------------------------------------------------------------- |
| `index.html`     | Homepage introduction, two selected projects, and short biography    |
| `projects.html`  | Four projects, including featured AI Deepfake Detection and SafeBuy  |
| `about.html`     | Biography, competition achievements, and grouped technical skills    |
| `contact.html`   | Email, phone, location, and social profiles                          |
| `css/style.css`  | Shared colors, typography, component styles, motion, and breakpoints |
| `js/theme.js`    | Reads the saved theme before the stylesheet loads                    |
| `js/script.js`   | Theme toggle, mobile menu, email copying, and section reveals        |
| `assets/images/` | Optimized local artwork and a small copy of the original logo        |
| `assets/fonts/`  | Self-hosted Outfit variable font and its SIL Open Font License       |
| `DESIGN.md`      | Design decisions, original-site audit, and artwork provenance        |

## Adjust the design

Start with the custom properties in `:root` at the top of `css/style.css`. For example, `--accent` controls the purple used for important actions and headings, and `--bg` controls the page background. There are matching dark-theme values in both the system-preference media query and the manual `[data-theme="dark"]` rule. Keep those two dark token sets synchronized.

The layout uses CSS Grid on desktop and switches to one column below 768px. Containers have explicit side margins so content cannot touch the viewport edges. Surfaces use 16px corners, buttons use 8px corners, and small project tags use fully rounded corners.

The header and footer are intentionally ordinary HTML in each page. When updating navigation, make the same edit in all four files. Keep `aria-current="page"` only on the link for that page. Homepage project summaries are also duplicated in `projects.html`, so update both when a project changes.

## Theme and accessibility behavior

- Without a saved preference, the entire site follows the device's light/dark setting.
- The theme button stores a preference in `localStorage`; existing `theme` preferences continue to work. Clear that key to follow the system again.
- Storage errors are caught, so private browsing does not break the page.
- The mobile menu exposes its open state through `aria-expanded`, supports Escape, and restores focus to the menu button.
- Every page includes a skip link, one primary heading, and visible keyboard focus.
- Motion is limited to short entrance and hover effects and is disabled by `prefers-reduced-motion`.
- Content and navigation remain available when JavaScript is disabled.
- Copy email reports success or a manual-copy fallback in an accessible status region. The email and phone links work independently of JavaScript.

## Images and performance

The original `98985996.png` and favicon are retained. The header uses a smaller WebP version of the same logo. At the owner's request, both the homepage and Projects page are now text-only, with no hero or project photos. The original generated artwork remains in `assets/images/`; the code sculpture is still referenced by social-sharing metadata. Artwork provenance and prompts are recorded in `DESIGN.md`.

The CSS and main script URLs include a revision query (for example, `?v=9`) to refresh old browser caches after this redesign. Increment the relevant query in all four HTML files after future changes if visitors are seeing cached assets.

## Content to keep current

Machine learning skills, the InfoTRON 2026 result, and AI Deepfake Detection were added from the owner-provided CV. The school name replaces the outdated grade reference. Hotel Management remains in the regular project list, while AI Deepfake Detection and SafeBuy are featured. Keep course status and skills current as experience changes; avoid adding unsupported accuracy metrics or proficiency ratings.

## Verification

The redesign was checked in the browser for desktop and mobile layouts, both themes, working navigation, menu keyboard behavior, and contact controls. Local Lighthouse results and remaining limitations are recorded in `DESIGN.md`. Lighthouse is a lab test, not a guarantee of production performance.

## AI Engineer certificate

The About page includes a Certifications section linking to `assets/documents/ai-engineer-vlad-cozma.pdf`, an unchanged copy of the owner-provided two-page certificate. It confirms graduation from Software Development Academy's 539-hour AI Engineer program and was issued on 29 July 2026. The biography now reflects completion. Car Rental System has been removed from the portfolio at the owner's request.
