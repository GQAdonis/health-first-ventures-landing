# Font Setup Guide

## Fonts Used
This project uses two Google Fonts:
1. **Playfair Display** - For headings and display text
2. **Source Sans 3** - For body text and general UI (Note: This is the newer version of Source Sans Pro)

## Implementation
The fonts are automatically loaded and optimized through Next.js's built-in font optimization system. No manual download is required.

## Usage in Components

### Font Classes
- Use `font-display` for headings (Playfair Display)
- Use `font-sans` for body text (Source Sans 3)

### Example Usage
```tsx
// Heading
<h1 className="font-display font-bold">Main Heading</h1>

// Body text
<p className="font-sans font-normal">Body text content</p>

// Button with semibold text
<button className="font-sans font-semibold">Click Me</button>
```

### Font Weights Available
**Playfair Display:**
- Regular (400)
- Bold (700)

**Source Sans 3:**
- Light (300)
- Regular (400)
- Semibold (600)

## Best Practices
1. Use appropriate font weights as defined in the branding guide:
   - Main Headers: Playfair Display Bold (700)
   - Section Headers: Playfair Display Regular (400)
   - Body Text: Source Sans 3 Light/Regular (300/400)
   - CTAs/Buttons: Source Sans 3 Semibold (600)

2. Maintain consistent font usage:
   - Use Playfair Display sparingly for impact
   - Use Source Sans 3 for most UI text
   - Ensure proper contrast and readability

## Technical Details
The fonts are configured in:
- `app/layout.tsx` - Font loading and configuration
- `tailwind.config.ts` - Font family definitions
- `app/globals.css` - Font utility classes

No additional setup or font files are needed as everything is handled through Next.js's Google Fonts integration.
