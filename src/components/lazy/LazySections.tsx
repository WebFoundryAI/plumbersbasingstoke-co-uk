import { lazy, Suspense, ComponentType } from "react";

// Lazy load below-fold sections
export const LazyServicesGrid = lazy(() =>
  import("@/components/sections/ServicesGrid").then((m) => ({
    default: m.ServicesGrid,
  }))
);

export const LazyTestimonialsSection = lazy(() =>
  import("@/components/sections/TestimonialsSection").then((m) => ({
    default: m.TestimonialsSection,
  }))
);

export const LazyLocationsGrid = lazy(() =>
  import("@/components/sections/LocationsGrid").then((m) => ({
    default: m.LocationsGrid,
  }))
);

export const LazyGuaranteesSection = lazy(() =>
  import("@/components/sections/GuaranteesSection").then((m) => ({
    default: m.GuaranteesSection,
  }))
);

export const LazyManchesterFAQSection = lazy(() =>
  import("@/components/sections/ManchesterFAQSection").then((m) => ({
    default: m.ManchesterFAQSection,
  }))
);

export const LazyCTASection = lazy(() =>
  import("@/components/sections/CTASection").then((m) => ({
    default: m.CTASection,
  }))
);

export const LazyBlockedDrainsContent = lazy(() =>
  import("@/components/sections/BlockedDrainsContent").then((m) => ({
    default: m.BlockedDrainsContent,
  }))
);

// Generic section placeholder
function SectionPlaceholder({ height = "h-64" }: { height?: string }) {
  return (
    <div className={`${height} bg-muted/30 animate-pulse`} />
  );
}

// Wrapper component with suspense
interface LazySectionWrapperProps {
  children: React.ReactNode;
  height?: string;
}

export function LazySectionWrapper({ children, height }: LazySectionWrapperProps) {
  return (
    <Suspense fallback={<SectionPlaceholder height={height} />}>
      {children}
    </Suspense>
  );
}
