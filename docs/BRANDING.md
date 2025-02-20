# Branding Guide

## Color Palette & Tailwind Configuration  
**Core Concept:** A dual-theme system combining medical trust (teal/blue) with financial stability (navy/gray)

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9', // Base teal
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
        },
        secondary: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
        accent: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E', // Vitality green
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        }
      }
    }
  }
}
```

**Light/Dark Mode Implementation:**
```html
<div class="bg-primary-50 dark:bg-primary-900 text-primary-900 dark:text-primary-50">
  <!-- Content -->
</div>
```

**Design Rationale:**
- Teal (500) conveys medical trust while maintaining tech-forward energy[5][11]
- Navy secondary palette ensures financial gravitas[3]
- Green accent aligns with healthcare vitality[5]
- Full 9-step gradients enable UI depth[4]
- WCAG-compliant contrast ratios between light/dark modes[10]

## Typography System  
**Header Font:** Playfair Display (Google Fonts)  
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```
**Body Font:** Source Sans Pro (Google Fonts)  
```html
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600&display=swap" rel="stylesheet">
```

**Pairing Strategy:**
| Element          | Font              | Weight   | Use Case                     |
|------------------|-------------------|----------|------------------------------|
| Logo/Main Header | Playfair Display  | 700      | Brand identity emphasis       |
| Section Headers  | Playfair Display  | 400      | Content hierarchy             |  
| Body Text         | Source Sans Pro   | 300/400  | Readability optimization      |
| CTAs             | Source Sans Pro   | 600      | Visual prominence             |

**Accessibility Features:**
- Minimum 4.5:1 contrast ratio for text[8]
- x-height optimized for screen legibility[7]
- OpenType features for number clarity[9]

## Implementation Considerations  
1. **Logo Composition:**  
   - Combine abstract health symbol (DNA helix/cross) with bold typography
   - Animate with SVG filters for digital platforms
   - Color variants for light/dark contexts

2. **UI Pattern Library:**  
```html
<button class="bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Invest Now
</button>
```

3. **Brand Extension:**  
- Marketing materials using primary-500/accent-500 gradient overlays
- Interactive charts with secondary-700 baseline colors
- Email templates using primary-100 background tones

This system balances medical authority (teal/green) with financial stability (navy/gray), while the font pairing merges editorial credibility with approachable professionalism[6][12]. The Tailwind configuration supports seamless light/dark mode transitions with built-in accessibility safeguards[10].

Sources
[1] curcuminpro.com https://curcuminpro.com
[2] . https://myfirmtech.com/.
[3] Colors - Core concepts - Tailwind CSS https://tailwindcss.com/docs/customizing-colors
[4] How to produce custom colour palettes in Tailwind CSS - Tom Southall https://tomsouthall.com/blog/tailwind-custom-colours
[5] The Best 15 Medical Color Palette Combinations - Piktochart https://piktochart.com/tips/medical-color-palette
[6] Help me choose a font for my medical website : r/web_design - Reddit https://www.reddit.com/r/web_design/comments/1h67t3u/help_me_choose_a_font_for_my_medical_website/
[7] Top 10 Font Pairings For Medical Websites In 2024 - Digital Arcane https://digitalarcane.com/font-pairings-for-medical-websites/
[8] Best Medical Font for Printed Materials | The Print Authority https://theprintauthority.com/best-fonts-for-medical-printed-materials/
[9] medical font pairings - Typ.io https://typ.io/tags/medical
[10] Tailwind Theming: Create Light and Dark Modes with Tailwind CSS https://pieces.app/blog/tailwind-theming-create-light-and-dark-modes
[11] Mastering the Art of Medical Colors in Healthcare Branding https://thinkpodagency.com/mastering-the-art-of-medic-colors-in-healthcare-branding/
[12] 10 Fonts to Consider for Your Wellness Brand - Inside Out Brands https://www.insideoutbrands.com/blog/10-wellness-fonts
[13] Most Used Google Fonts on Hospital Websites in 2025 - ILOVEWP https://www.ilovewp.com/resources/medical/wordpress-for-hospitals/most-used-google-fonts-on-hospital-websites/
[14] Tweaking Tailwind Color Pallette to Fit Your Brand - Stackbit https://www.stackbit.com/blog/tweaking-tailwind-colors
[15] ibodev1/tailwindcss-palette-generator - GitHub https://github.com/ibodev1/tailwindcss-palette-generator
[16] How do you choose colors for a healthcare logo? - 99Designs https://99designs.com/logo-design/psychology-of-color/healthcare
[17] Any dark color palettes for tailwind? : r/tailwindcss - Reddit https://www.reddit.com/r/tailwindcss/comments/1ciqgfz/any_dark_color_palettes_for_tailwind/
[18] Web based color Generator / Palette #2405 - GitHub https://github.com/tailwindlabs/tailwindcss/discussions/2405
[19] 7 Healthcare - Colour Palette ideas - Pinterest https://in.pinterest.com/valgeks/healthcare-colour-palette/
[20] Dark mode themed colors #9108 - GitHub https://github.com/tailwindlabs/tailwindcss/discussions/9108
[21] AI Color Palette Generator Examples - Loopple https://www.loopple.com/color-palette-generator/examples
[22] Healthcare Brand Color Palette - Pinterest https://www.pinterest.com/ideas/healthcare-brand-color-palette/961398228681/
[23] Tailwind colors based on dark mode - Stack Overflow https://stackoverflow.com/questions/72117668/tailwind-colors-based-on-dark-mode
[24] Tailwind CSS color generator & editing tool : r/tailwindcss - Reddit https://www.reddit.com/r/tailwindcss/comments/su4l9t/tailwind_css_color_generator_editing_tool/
[25] Colors associated with health: Choose the right brand colors | Verô https://www.verobranding.com/blog/colors-for-wellness-brand
[26] Color Palettes | Uncommon TailwindCSS - YouTube https://www.youtube.com/watch?v=y4DrhAz6ewI
[27] Shaded color palette generator for the web - Boing Boing https://boingboing.net/2024/02/02/shaded-color-palette-generator-for-the-web.html
[28] Oxygen - Google Fonts https://fonts.google.com/specimen/Oxygen
[29] Belleza - Google Fonts https://fonts.google.com/specimen/Belleza
[30] Effective Fonts for Healthcare Marketing: A Guide for Practitioners https://onion-lobster-xw3y.squarespace.com/blog/understanding-the-best-fonts-for-healthcare-marketing
[31] 12 Gorgeous Font Pairings using Google Fonts https://sugarstudiosdesign.com/2017/04/26/12-gorgeous-font-pairings-using-google-fonts/
[32] Google Fonts: Browse Fonts https://fonts.google.com
[33] Free Google Fonts for Aesthetic Health Branding - Pinterest https://www.pinterest.com/pin/free-google-fonts-for-aesthetic-health-branding--1058627456155351798/
[34] Top 50 Google Font Pairings [Handpicked by Pro Designers] https://www.pagecloud.com/blog/best-google-fonts-pairings
[35] 15 Best Google Fonts by the Numbers (Plus Tips on Using Them) https://kinsta.com/blog/best-google-fonts/
[36] 10 Elegant Google Display Fonts for Your Brand - Chroma https://www.madebychroma.com/typography/10-elegant-google-display-fonts-for-your-brand/
[37] Varela - Google Fonts https://fonts.google.com/specimen/Varela
[38] selection - Google Fonts https://fonts.google.com/selection
[39] Atkinson Hyperlegible - Google Fonts https://fonts.google.com/specimen/Atkinson+Hyperlegible
[40] Fonts and Colors for the Retail, Healthcare, and Financial Industries https://piktochart.com/blog/fonts-and-colors/
[41] 8 Free Fonts for Wellness Brands - The Denizen Co. https://www.thedenizenco.com/journal/8-free-fonts-for-the-wellness-brand
[42] Typography & Color - University of Utah Health Sciences https://uofuhealth.utah.edu/brand-and-style-guide/typography-color
[43] Medical Fonts | MyFonts https://www.myfonts.com/pages/tags/medical-fonts
[44] Build your brand: How to choose the right fonts - Canva https://www.canva.com/learn/canva-for-work-brand-fonts/
[45] 10 best fonts to use in your next Google Slides presentation https://www.brightcarbon.com/blog/google-slides-fonts/
[46] Dark mode - Core concepts - Tailwind CSS https://tailwindcss.com/docs/dark-mode
