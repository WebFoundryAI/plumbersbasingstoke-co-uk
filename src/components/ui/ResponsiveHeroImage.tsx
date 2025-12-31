import { useState, useEffect } from "react";

// Import hero image - already optimized as WebP
import heroBgFull from "@/assets/hero-bg.webp";

interface ResponsiveHeroImageProps {
  className?: string;
  priority?: boolean;
}

/**
 * Responsive hero background component with optimized loading.
 * Uses the existing WebP image with responsive sizing via CSS.
 * 
 * Note: For true multi-resolution srcset, you would need:
 * 1. Source images in PNG/JPG format (not WebP - can't re-encode)
 * 2. vite-imagetools to generate multiple sizes at build time
 * 
 * Current optimizations:
 * - WebP format (already compressed)
 * - Eager loading with high fetch priority for LCP
 * - CSS object-fit for responsive display
 * - Smooth fade-in transition
 */
export function ResponsiveHeroImage({ 
  className = "",
  priority = true 
}: ResponsiveHeroImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the hero image for LCP optimization
  useEffect(() => {
    if (priority && typeof document !== 'undefined') {
      // Check if preload link already exists
      const existingLink = document.querySelector(`link[href="${heroBgFull}"]`);
      if (existingLink) return;

      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = heroBgFull;
      link.type = "image/webp";
      document.head.appendChild(link);
      
      return () => {
        if (link.parentNode) {
          document.head.removeChild(link);
        }
      };
    }
  }, [priority]);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Low-quality placeholder for instant display */}
      <div 
        className={`absolute inset-0 bg-muted transition-opacity duration-300 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
      
      {/* Picture element for format fallback support */}
      <picture className="absolute inset-0 w-full h-full">
        {/* WebP source - primary format */}
        <source
          type="image/webp"
          srcSet={heroBgFull}
          sizes="100vw"
        />
        {/* Fallback img element */}
        <img
          src={heroBgFull}
          alt=""
          role="presentation"
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          sizes="100vw"
        />
      </picture>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}
