# Vladuzzul's developer portfolio

A responsive, six-page portfolio for Vlad Cozma. Built with plain HTML, CSS, and JavaScript, with no build step or runtime dependencies.

## Run locally

From the repository directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open <http://127.0.0.1:4173>. Stop the server with Ctrl+C. The same files can be hosted directly on GitHub Pages.

## Where to make changes

| File                      | Purpose                                                                          |
| ------------------------- | -------------------------------------------------------------------------------- |
| `index.html`              | Homepage introduction, two selected projects, and short biography                |
| `projects.html`           | Five projects, including featured AI Deepfake Detection and Movie Recommender    |
| `movie-recommender.html`  | Movie recommendation overview, ranking pipeline, features, and engineering notes |
| `deepfake-detection.html` | Image classifier overview, model pipeline, training, and evaluation scope        |
| `css/project-details.css` | Layout and responsive styles for the two project presentations                   |
| `about.html`              | Biography, competition achievements, and grouped technical skills                |
| `contact.html`            | Email, phone, location, and social profiles                                      |
| `css/style.css`           | Shared colors, typography, component styles, motion, and breakpoints             |
| `js/theme.js`             | Restores theme and accent before the stylesheet loads                                |
| `js/script.js`            | Appearance panel, mobile menu, email copying, and section reveals                    |
| `assets/images/`          | Optimized local artwork and a small copy of the original logo                    |
| `assets/fonts/`           | Self-hosted Outfit variable font and its SIL Open Font License                   |
| `DESIGN.md`               | Design decisions, original-site audit, and artwork provenance                    |

## Adjust the design

Start with the custom properties in `:root` at the top of `css/style.css`. For example, `--accent` controls the selected color used for important actions and headings, and `--bg` controls the page background. There are matching dark-theme values in both the system-preference media query and the manual `[data-theme="dark"]` rule. Keep those two dark token sets synchronized.

The layout uses CSS Grid on desktop and switches to one column below 768px. Containers have explicit side margins so content cannot touch the viewport edges. Surfaces use 16px corners, buttons use 8px corners, and small project tags use fully rounded corners.

The header and footer are intentionally ordinary HTML in each page. When updating navigation, make the same edit in all six files. Keep `aria-current="page"` only on the link for that page. The project detail pages use `aria-current="location"` on Projects to identify their parent section. Homepage project summaries are also duplicated in `projects.html`, so update both when a project changes.

## Theme and accessibility behavior

- Without a saved preference, the entire site follows the device's light/dark setting.
- The Settings button opens the shared Appearance panel with Light, Dark, and System choices. System is the default; choosing it removes the explicit CSS theme override so device changes apply live. Existing saved Light/Dark preferences are preserved.
- Accent presets are Purple (default), Lime, Yellow, Blue, Teal, and Rose. Each has light/dark foreground, hover, tint, and button-text values in `css/style.css`; shared semantic variables recolor the site.
- Theme and accent selections apply immediately and persist through `localStorage` (`theme` and `accent`). `js/theme.js` restores them before CSS loads to avoid a flash; `js/script.js` creates the panel once per page and synchronizes other tabs.
- The panel uses native radio inputs with keyboard navigation. Escape and the close button restore focus to Settings; clicking or tabbing outside dismisses it.
- Storage errors are caught, so private browsing does not break the page.
- The mobile menu exposes its open state through `aria-expanded`, supports Escape, and restores focus to the menu button.
- Every page includes a skip link, one primary heading, and visible keyboard focus.
- Motion is limited to short entrance and hover effects and is disabled by `prefers-reduced-motion`.
- Content and navigation remain available when JavaScript is disabled.
- Copy email reports success or a manual-copy fallback in an accessible status region. The email and phone links work independently of JavaScript.

## Images and performance

The original `98985996.png` and favicon are retained. The header displays the Vlad Cozma wordmark; the smaller WebP version of the original logo remains available in the assets. At the owner's request, both the homepage and Projects page are now text-only, with no hero or project photos. The original generated artwork remains in `assets/images/`; the code sculpture is still referenced by social-sharing metadata. The two project detail pages use their own AI-generated conceptual covers, clearly captioned as illustrations. They are optimized WebP images in 720px and 1200px sizes with reserved dimensions and responsive selection. Artwork provenance and prompts are recorded in `DESIGN.md`.

The CSS and main script URLs include a revision query (for example, `?v=9`) to refresh old browser caches after this redesign. Increment the relevant query in all affected HTML files after future changes if visitors are seeing cached assets.

## Content to keep current

Machine learning skills, the InfoTRON 2026 result, and AI Deepfake Detection were added from the owner-provided CV. The school name replaces the outdated grade reference. AI Deepfake Detection and Movie Recommender are featured on both the homepage and Projects page. SafeBuy, Hotel Management, and Discord Bot remain in the regular project list. Keep course status and skills current as experience changes; avoid adding unsupported accuracy metrics or proficiency ratings.

## Verification

The redesign was checked in the browser for desktop and mobile layouts, both themes, working navigation, menu keyboard behavior, and contact controls. Local Lighthouse results and remaining limitations are recorded in `DESIGN.md`. Lighthouse is a lab test, not a guarantee of production performance.

## Featured project presentations

The homepage and Projects links open `deepfake-detection.html` and `movie-recommender.html` in the same tab. Each presentation includes an overview, a four-part explanation of the processing pipeline, implementation highlights, native `<details>` disclosures, the repository link, and a direct README link. The two presentations link to each other and back to the featured list.

Content is static HTML and remains usable without JavaScript. Edit the text directly in the respective page. Shared layout rules live in `css/project-details.css`, which reuses the theme, font, spacing conventions, and animation from `css/style.css`; no runtime dependencies or build step were added. Existing primary page filenames and navigation labels remain unchanged.

The content was adapted from the repositories' README files on 6 October 2026:

- [Movie Recommender README](https://github.com/vladuzzul/Movie-Recommender#readme)
- [Deepfake Detection README](https://github.com/vladuzzul/Deepfake-Detection#readme)

Update these summaries when their READMEs change. Do not present recommendation ranking scores as confidence percentages, or model/dataset availability checks as evidence of detection accuracy.

## AI Engineer certificate

The About page includes a Certifications section linking to `assets/documents/ai-engineer-vlad-cozma.pdf`, an unchanged copy of the owner-provided two-page certificate. It confirms graduation from Software Development Academy's 539-hour AI Engineer program and was issued on 29 July 2026. The biography now reflects completion. Car Rental System has been removed from the portfolio at the owner's request.
