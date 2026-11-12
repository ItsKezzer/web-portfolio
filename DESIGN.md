---
name: Dev Terminal Minimal
colors:
  surface: '#101418'
  surface-dim: '#101418'
  surface-bright: '#363a3e'
  surface-container-lowest: '#0b0f12'
  surface-container-low: '#181c20'
  surface-container: '#1c2024'
  surface-container-high: '#262a2f'
  surface-container-highest: '#313539'
  on-surface: '#e0e3e8'
  on-surface-variant: '#c4c5d6'
  inverse-surface: '#e0e3e8'
  inverse-on-surface: '#2d3135'
  outline: '#8e909f'
  outline-variant: '#444654'
  surface-tint: '#b7c4ff'
  primary: '#b7c4ff'
  on-primary: '#002681'
  primary-container: '#3e63dd'
  on-primary-container: '#eeeeff'
  inverse-primary: '#2c54ce'
  secondary: '#6ddc9e'
  on-secondary: '#003920'
  secondary-container: '#30a46c'
  on-secondary-container: '#00311b'
  tertiary: '#ffb4a4'
  on-tertiary: '#640d00'
  tertiary-container: '#c8381b'
  on-tertiary-container: '#ffece8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b7c4ff'
  on-primary-fixed: '#001551'
  on-primary-fixed-variant: '#0039b4'
  secondary-fixed: '#8af8b9'
  secondary-fixed-dim: '#6ddc9e'
  on-secondary-fixed: '#002111'
  on-secondary-fixed-variant: '#005231'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a4'
  on-tertiary-fixed: '#3e0500'
  on-tertiary-fixed-variant: '#8d1700'
  background: '#101418'
  on-background: '#e0e3e8'
  surface-variant: '#313539'
  surface-base: '#0E1013'
  surface-panel: '#14171A'
  surface-raised: '#1C2024'
  surface-border: '#2B3036'
  text-primary: '#F1F3F5'
  text-secondary: '#8D94A0'
  text-muted: '#606770'
  status-active: '#30A46C'
  status-alert: '#E54D2E'
  accent-focus: '#3E63DD'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
  code:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.5rem
  margin: 1.25rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
---

## Brand & Style

This design system establishes an ultra-clean, utilitarian developer environment built for precision, high legibility, and technical credibility. Rooted in modern terminal aesthetics and engineering consoles, it balances absolute minimalism with refined interactive affordances.

The target audience encompasses technical recruiters, engineering directors, and collaborative developers looking for high-competence infrastructure and software engineering services (Python, Docker, DevOps). The emotional tone is disciplined, dependable, quiet, and hyper-competent.

Key aesthetic characteristics:
- Monochromatic dark surfaces with calibrated contrast steps rather than stark black-and-white.
- Subtle hairline borders (1px) for surface delineation instead of diffuse drop shadows.
- Utilitarian monospace typography handling data points, metrics, code tags, and status cues.
- Radix cobalt accents providing deliberate visual focus for actionable states, active links, and operational status.

## Colors

The palette leverages a technical dark mode structure anchored by Radix blue (`#3E63DD`) and deep graphite slate surfaces.

- **Primary (`#3E63DD`)**: Reserved for critical actions, interactive hover borders, active tabs, and primary anchors.
- **Secondary (`#30A46C`)**: Terminal green; indicates "Service Online", active deployment indicators, and operational metrics.
- **Tertiary (`#E54D2E`)**: Telemetry coral/red; reserved for degraded performance indicators, error banners, or critical tags.
- **Neutrals (`#0E1013` to `#1C2024`)**: Tiered background values designed to structure the page without heavy drop shadows. Borders sit at `#2B3036` to create sharp, architectural lines.
- **Text hierarchy**: `#F1F3F5` (high-contrast primary), `#8D94A0` (supporting technical text), and `#606770` (metadata, line numbers, and subtle indicators).

## Typography

The typographic hierarchy pairs clean structural sans-serif headings with high-utility monospace body and detail typography:

1. **Headlines (`Inter`)**: Used for page headers, profile names, section titles, and modal designations. Tracked slightly tight (`-0.01em` to `-0.02em`) to maintain an authoritative, compact footprint.
2. **Body & Interface Text (`JetBrains Mono`)**: Implements strict monospace cadence for biographical content, CV career history, and service definitions. This grounds the site in an authentic, developer-first aesthetic.
3. **Labels & Metadata (`JetBrains Mono`)**: Uppercase or small tracking for tags, build versions, commit digests, and dates (`0.02em` to `0.04em` letter spacing).

## Layout & Spacing

The layout is built on a contained, fixed-max-width technical grid:
- **Maximum canvas width**: 960px for documentation and CV viewing; 1140px for broad dashboard views.
- **Section structure**: Centered column orientation with strict linear vertical flow.
- **Grid alignment**: 12-column grid system utilizing `1.25rem` gutters on mobile/tablet and `1.5rem` on desktop.
- **Vertical rhythm**: Standard rhythm uses `space-md` (1rem) for interior container padding, `space-lg` (1.5rem) between stacked items, and `space-2xl` (4rem) for distinct CV sections (e.g., Experience, Core Services, Tech Stack).
- **Responsive adaptation**: Mobile views condense section padding from `margin-desktop` (3rem) down to `margin` (1.25rem), shifting multi-column service tiles into a vertical single-column card stack.

## Elevation & Depth

Visual hierarchy does not use diffuse blurs or dramatic drop shadows. Depth is achieved via architectural surface layering and low-contrast perimeter lines:

1. **Surface 0 (Base)**: `#0E1013` (canvas background).
2. **Surface 1 (Card/Container)**: `#14171A` enclosed in a 1px border (`#2B3036`).
3. **Surface 2 (Interactive/Raised)**: `#1C2024` with 1px border (`#3E63DD33` on hover or focused states).
4. **Active/Glow Accents**: Micro-glows (`0 0 12px rgba(62, 99, 221, 0.15)`) applied only to focused primary action triggers and active service telemetry pings.
5. **Separators**: 1px horizontal and vertical rules in `#2B3036` to denote timeline sections in the CV without breaking terminal continuity.

## Shapes

The design uses a restrained, crisp corner radius:
- **Level 1 (Soft)**: Standard components (buttons, input fields, code blocks, service cards) use a `0.25rem` (4px) corner radius.
- **Internal elements**: Inline tags, badges, and chips use a `0.25rem` radius for a disciplined structural look.
- **Status indicators & icon badges**: Small circular status pings (`rounded-full`) are reserved strictly for system state indicators (e.g., green pulsating dots for active availability).
- **Interactive containers**: High-level parent cards use `0.5rem` (8px) outer corners to gently break strict box geometry while preserving technical rigor.

## Components

### Buttons
- **Primary**: Background `#3E63DD`, text `#FFFFFF`, border `1px solid transparent`, radius `0.25rem`. On hover: `#3358D4`.
- **Secondary / Outline**: Background transparent, border `1px solid #2B3036`, text `#F1F3F5`. On hover: background `#1C2024`, border `#3E63DD`.
- **Terminal Action (Ghost)**: Monospace text with leading glyph (e.g., `> download_cv.pdf`), text `#8D94A0`, hover text `#F1F3F5`.

### Chips & Tech Badges
- Surface `#14171A`, border `1px solid #2B3036`, text `#8D94A0`, font `JetBrains Mono` (`12px`).
- Accent variations (e.g., `Python`, `Docker`): include a 6px colored dot indicator (`#3E63DD` for networking/devops, `#30A46C` for runtime).

### Service Tiles
- Structured rectangular cards with background `#14171A`, border `1px solid #2B3036`, and `space-md` internal padding.
- Includes a live status indicator (e.g., `[ ONLINE ]` in `#30A46C` or a pulse dot).
- Subtle scale micro-interaction on hover: border shifts to `#3E63DD`, background tints to `#1C2024`.

### CV Career & Experience List
- Timeline list connected by a subtle 1px vertical hairline rule (`#2B3036`).
- Company, role, and period displayed in tabular monospace format (`2021 — PRESENT`).
- Core achievements structured with technical bullet markers (`-` or `→`).

### Form Inputs & Terminal Fields
- Background `#0E1013`, border `1px solid #2B3036`, text `#F1F3F5`.
- Focus state: border `1px solid #3E63DD`, outline `none`, subtle shadow `0 0 0 1px #3E63DD`.
- Fixed monospace font (`JetBrains Mono`) for uniform input calibration.