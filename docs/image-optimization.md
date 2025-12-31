# Image Optimization Guide

This project uses `vite-imagetools` for build-time image optimization.

## Current Setup

The hero image (`src/assets/hero-bg.webp`) is already in WebP format, which provides good compression. The `ResponsiveHeroImage` component handles:

- Eager loading with high fetch priority for LCP optimization
- Smooth fade-in transitions
- Preload link injection for faster loading
- CSS object-fit for responsive display

## Adding True Multi-Resolution Images

To generate multiple resolutions and formats at build time, you need source images in **PNG or JPG format** (not WebP - vite-imagetools can't re-encode WebP to other formats).

### Step 1: Add Source Images

Place high-resolution source images (preferably 1920px+ wide) in `src/assets/`:

```
src/assets/
  hero-bg.jpg  (or .png)
  feature-image.jpg
```

### Step 2: Import with vite-imagetools Directives

```tsx
// Generate specific sizes
import heroSm from "@/assets/hero-bg.jpg?w=640&format=webp";
import heroMd from "@/assets/hero-bg.jpg?w=1024&format=webp";
import heroLg from "@/assets/hero-bg.jpg?w=1920&format=webp";

// Or generate all at once with srcset output
import heroSrcset from "@/assets/hero-bg.jpg?w=640;1024;1920&format=webp&as=srcset";
```

### Step 3: Use in Picture Element

```tsx
<picture>
  {/* AVIF - best compression */}
  <source
    type="image/avif"
    srcSet={`${heroSmAvif} 640w, ${heroMdAvif} 1024w, ${heroLgAvif} 1920w`}
    sizes="100vw"
  />
  {/* WebP - wide support */}
  <source
    type="image/webp"
    srcSet={`${heroSm} 640w, ${heroMd} 1024w, ${heroLg} 1920w`}
    sizes="100vw"
  />
  {/* Fallback */}
  <img src={heroLg} alt="Hero" />
</picture>
```

## Available Directives

| Directive | Description | Example |
|-----------|-------------|---------|
| `w=640` | Resize to 640px width | `?w=640` |
| `w=640;1024;1920` | Multiple widths | `?w=640;1024;1920` |
| `format=webp` | Convert to WebP | `?format=webp` |
| `format=avif` | Convert to AVIF | `?format=avif` |
| `quality=80` | Set quality (1-100) | `?quality=80` |
| `as=srcset` | Output as srcset string | `?as=srcset` |
| `aspect=16:9` | Crop to aspect ratio | `?aspect=16:9` |

## Recommended Breakpoints

For responsive images, use these common breakpoints:

- **Mobile**: 640px
- **Tablet**: 1024px  
- **Desktop**: 1920px

## Performance Tips

1. **Use WebP** for wide browser support with good compression
2. **Add AVIF** as a progressive enhancement (30-50% smaller than WebP)
3. **Set `loading="lazy"`** for below-fold images
4. **Use `fetchPriority="high"`** for LCP images (hero, above-fold)
5. **Add `sizes` attribute** to help browser pick the right image size
