# Parkeys Design System

## Colors

### Primary Colors
- `primary` (#00b8ff) - Main brand color, used for CTAs and important UI elements
  - `primary-dark` (#0099ff) - Hover state
  - `primary-light` (#e6f7ff) - Backgrounds, subtle highlights

### Secondary Colors
- `secondary` (#1A73E8) - Supporting color for secondary actions
  - `secondary-dark` (#1557b0) - Hover state
  - `secondary-light` (#f5f8ff) - Subtle backgrounds

### Accent Colors
- `accent` (#00D2FF) - Highlights and special elements
  - `accent-dark` (#00bfe6) - Hover state

### Neutral Colors
- `neutral` (#1A1A1A) - Text and UI elements
  - `neutral-dark` (#003366) - Dark backgrounds
  - `neutral-darker` (#002347) - Deepest shade
  - `neutral-light` (#f8fafc) - Light backgrounds

## Typography

### Font Family
- Primary: Inter
- Fallback: system-ui, sans-serif

### Font Sizes
- `display-1`: 4rem (64px) - Hero headlines
- `display-2`: 3.5rem (56px) - Section headlines
- `heading-1`: 2.5rem (40px) - Major section headers
- `heading-2`: 2rem (32px) - Sub-sections
- `heading-3`: 1.5rem (24px) - Card titles, smaller sections
- `body-large`: 1.125rem (18px) - Featured paragraphs
- `body`: 1rem (16px) - Regular text
- `small`: 0.875rem (14px) - Labels, captions

## Spacing

### Layout
- `layout-sm`: 1rem (16px) - Compact spacing
- `layout-md`: 1.5rem (24px) - Standard spacing
- `layout-lg`: 2rem (32px) - Generous spacing
- `layout-xl`: 3rem (48px) - Section spacing

### Sections
- `section-sm`: 3rem (48px) - Compact sections
- `section-md`: 4rem (64px) - Standard sections
- `section-lg`: 6rem (96px) - Large sections

## Components

### Buttons
```tsx
// Primary Button
<button className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-btn transition-colors">
  Button Text
</button>

// Secondary Button
<button className="px-4 py-2 bg-secondary hover:bg-secondary-dark text-white rounded-btn transition-colors">
  Button Text
</button>

// Outline Button
<button className="px-4 py-2 border-2 border-primary text-primary hover:bg-primary-light rounded-btn transition-colors">
  Button Text
</button>
```

### Cards
```tsx
// Basic Card
<div className="bg-white rounded-card shadow-card hover:shadow-card-hover transition-shadow p-layout-md">
  Content
</div>

// Featured Card
<div className="bg-primary-light rounded-card shadow-card hover:shadow-card-hover transition-shadow p-layout-lg">
  Content
</div>
```

### Form Elements
```tsx
// Text Input
<input 
  className="w-full p-3 rounded-input border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent"
  type="text"
/>

// Select
<select className="w-full p-3 rounded-input border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent">
  <option>Option</option>
</select>
```

## Usage Guidelines

### Spacing Hierarchy
- Use `layout-*` for component internal spacing
- Use `section-*` for page-level spacing
- Maintain consistent vertical rhythm with these tokens

### Color Usage
- Use `primary` for main CTAs and important actions
- Use `secondary` for supporting actions and links
- Use `accent` sparingly for highlights and special features
- Use `neutral` variants for text and backgrounds

### Typography Best Practices
- Use proper heading hierarchy (h1 → h6)
- Maintain consistent line-height ratios
- Use appropriate font sizes for different screen sizes

### Responsive Design
- Mobile-first approach
- Use layout tokens consistently
- Adjust typography scale for mobile
- Maintain touch-friendly tap targets (min 44px) 