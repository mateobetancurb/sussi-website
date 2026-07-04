---
name: Artisanal Strategy Narrative
colors:
  surface: '#fff8f6'
  surface-dim: '#e5d7d2'
  surface-bright: '#fff8f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff1ec'
  surface-container: '#faebe6'
  surface-container-high: '#f4e5e0'
  surface-container-highest: '#eee0db'
  on-surface: '#211a17'
  on-surface-variant: '#53433d'
  inverse-surface: '#372f2c'
  inverse-on-surface: '#fceee9'
  outline: '#86736c'
  outline-variant: '#d9c2b9'
  surface-tint: '#8f4c2f'
  primary: '#8c4a2d'
  on-primary: '#ffffff'
  primary-container: '#aa6243'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb597'
  secondary: '#8e4d32'
  on-secondary: '#ffffff'
  secondary-container: '#ffa989'
  on-secondary-container: '#793c23'
  tertiary: '#006764'
  on-tertiary: '#ffffff'
  tertiary-container: '#1e817e'
  on-tertiary-container: '#f3fffd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcd'
  primary-fixed-dim: '#ffb597'
  on-primary-fixed: '#360f00'
  on-primary-fixed-variant: '#72351a'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb59a'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#71361d'
  tertiary-fixed: '#9af2ed'
  tertiary-fixed-dim: '#7dd5d1'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504d'
  background: '#fff8f6'
  on-background: '#211a17'
  surface-variant: '#eee0db'
typography:
  display-lg:
    fontFamily: Literata
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Literata
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Literata
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 40px
  headline-sm:
    fontFamily: Literata
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
  button:
    fontFamily: Source Sans 3
    fontSize: 15px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  section-padding: 80px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
  container-max: 1140px
---

## Brand & Style

The design system is built for a digital strategist whose work sits at the intersection of intellectual rigor and tactile creativity. The brand personality is warm, organic, and deeply personal—eschewing the coldness of traditional tech for the refined, "lived-in" aesthetic of a boutique editorial house or an artisanal gastronomy brand.

The design style is **Warm Minimalism with an Organic Editorial tilt**. It focuses on:
- **Human-Centricity:** Using high-quality, natural-light photography that captures authentic moments and textures.
- **Intentional Restraint:** Every element serves a purpose; whitespace is treated as a premium material rather than empty space.
- **Tactile Sophistication:** Creating a digital experience that feels as tangible as high-end stationery or linen paper.
- **Authoritative Warmth:** Combining professional strategic insight with a welcoming, approachable tone.

## Colors

The palette is derived from natural earth tones, specifically avoiding the harshness of pure white (#FFFFFF) or pure black (#000000).

- **Linen (#F7F2EC):** The primary canvas. This off-white provides a soft, organic foundation that reduces eye strain and feels more premium than standard white.
- **Parchment (#EDE3D5):** Used for subtle section differentiation, creating a layered, paper-like depth.
- **Terracotta (#C97B5A):** The communicative accent. Used for iconography, decorative separators, and highlights.
- **Adobe (#8B4A30):** The high-contrast functional color. Reserved for call-to-action elements and primary interactive states.
- **Espresso (#2A2420):** High-legibility text color with a warm undertone to maintain harmony with the background.

## Typography

The typography system uses a pairing of a literary serif and a humanist sans-serif to bridge the gap between "Author" and "Strategist."

- **Headlines:** Use a refined serif (Literata used as a replacement for Radnick) in regular weights. Headlines should feel editorial and expansive.
- **Body & Navigation:** Use a clean, legible sans-serif (Source Sans 3 used as a replacement for Gill Sans MT). This ensures clarity in strategic messaging and technical details.
- **Rhythm:** Maintain generous line heights to enhance the "airy" feel of the design.
- **Labels:** Small-caps or all-caps with increased tracking (letter spacing) should be used for category labels or eyebrow text to add a touch of formality.

## Layout & Spacing

The layout philosophy follows a **Centered Editorial Grid**. It prioritizes focus and legibility over information density.

- **Section Spacing:** A standard 80px vertical padding between major sections creates a breathable, calm pace for the user.
- **The Centered Column:** Primary content—especially "About" and "Philosophy" sections—should be constrained to a narrow, centered column (approx. 700px-800px) to mimic the feel of a printed book.
- **Mobile Adaptation:** On mobile, section padding reduces to 48px. Grids reflow from multi-column to single-column stacks.
- **Visual Breakers:** Use full-bleed imagery occasionally to break the vertical rhythm and provide visual rest.

## Elevation & Depth

This design system avoids traditional shadows in favor of **Tonal Layering**.

- **Surface Levels:** Depth is created by placing "Linen" elements on "Parchment" backgrounds or vice-versa.
- **Outlines:** Instead of shadows, use very fine (1px) borders in a slightly darker shade than the background (e.g., #DED4C7) to define cards or containers.
- **Photography:** Depth is primarily introduced through images with a shallow depth of field, bringing a sense of "real life" into the flat UI.
- **Zero Elevation:** Buttons and cards should appear flat on the surface. Interaction is indicated by color shifts rather than "lifting" off the page.

## Shapes

The shape language is primarily **Pill-Shaped and Circular**, emphasizing the "Organic" brand pillar.

- **Buttons:** Always use a full-pill radius (999px).
- **Images:** Can alternate between sharp editorial corners and soft, organic circular crops or large-radius rounded corners (rounded-xl).
- **Separators:** Use custom glyphs (small stars, monograms, or thin Terracotta lines) to divide content without the harshness of a full-width rule.

## Components

### Buttons
Primary CTAs are pill-shaped with the **Adobe** background and **Linen** text. Hover states should subtly darken the background. Secondary buttons use a **Terracotta** outline with **Espresso** text.

### Cards
Cards are used for services or portfolio items. They should have no shadow and no border by default, using a **Parchment** background to stand out against the **Linen** main canvas. Content inside cards is centered.

### Input Fields
Inputs are minimalist: a single 1px bottom border in **Soft Espresso**. Labels are placed above in the **label-caps** style.

### Lists
Lists for strategic services should use organic markers—such as small Terracotta dots or custom icons—rather than standard bullets. Increase the vertical spacing between list items to maintain the editorial feel.

### Separators
In place of horizontal rules, use a centered "star" glyph or the brand monogram in **Terracotta**. This reinforces the "Artisanal/Author" aesthetic.

### Navigation
The header should be minimalist and centered, with the "Header Name" in the serif typeface. Navigation links use the **label-caps** style with generous horizontal spacing.