import { cn } from "@/lib/utils";

interface SiteImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  decorative?: boolean;
}

/**
 * SiteImage - Enforced alt text for all site images.
 * 
 * Usage:
 * - For content images: <SiteImage src="..." alt="Descriptive alt text" />
 * - For decorative images: <SiteImage src="..." alt="" decorative />
 * 
 * Dev-time guard: throws in development if alt is undefined/null.
 */
export function SiteImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  decorative = false,
  className,
  ...props
}: SiteImageProps) {
  // Dev-time guard: catch missing alt text early
  if (process.env.NODE_ENV === 'development') {
    if (alt === undefined || alt === null) {
      throw new Error(
        `SiteImage: alt prop is required. Use alt="" with decorative={true} for decorative images. src="${src}"`
      );
    }
    if (alt === '' && !decorative) {
      console.warn(
        `SiteImage: Empty alt with decorative=false. Set decorative={true} for decorative images. src="${src}"`
      );
    }
  }

  // For decorative images, set aria-hidden and ensure empty alt
  const isDecorative = decorative || alt === '';
  
  return (
    <img
      src={src}
      alt={isDecorative ? '' : alt}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      aria-hidden={isDecorative ? true : undefined}
      className={cn(className)}
      {...props}
    />
  );
}
