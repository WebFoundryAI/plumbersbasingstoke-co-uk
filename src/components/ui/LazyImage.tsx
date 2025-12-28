import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderClassName?: string;
}

/**
 * LazyImage component with native lazy loading and CSS-only transitions.
 * Uses Intersection Observer for visibility detection.
 * Optimized to avoid forced synchronous layouts.
 */
export function LazyImage({
  src,
  alt,
  className,
  placeholderClassName,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    // Use Intersection Observer - no layout reads required
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0,
      }
    );

    observer.observe(img);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn("relative overflow-hidden", placeholderClassName)}>
      {/* CSS-only placeholder - no layout thrashing */}
      <div
        className={cn(
          "absolute inset-0 bg-muted",
          // Use opacity for GPU-accelerated hide/show
          isLoaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
        style={{ transition: "opacity 0.3s ease-out" }}
        aria-hidden="true"
      />
      
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          // Use opacity for GPU-accelerated fade-in (no layout trigger)
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        style={{ transition: "opacity 0.3s ease-out" }}
        {...props}
      />
    </div>
  );
}
