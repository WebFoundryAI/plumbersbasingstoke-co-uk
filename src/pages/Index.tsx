import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HeroWithForm } from "@/components/hero/HeroWithForm";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { PillarContent } from "@/components/sections/PillarContent";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { RouteSEOHead } from "@/components/seo/RouteSEOHead";
import { LOCATIONS } from "@/config/locations";
import { SERVICES } from "@/config/services";
import {
  generateWebsiteSchema,
  generateLocalBusinessSchema,
  generateAggregateRatingSchema,
  generateReviewSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { MapPin, ArrowRight } from "lucide-react";
// Import static data for schemas (not the components)
import { testimonials } from "@/components/sections/TestimonialsSection";
import { manchesterFaqs } from "@/components/sections/ManchesterFAQSection";
// Lazy sections for below-fold content
import {
  LazyServicesGrid,
  LazyTestimonialsSection,
  LazyLocationsGrid,
  LazyGuaranteesSection,
  LazyManchesterFAQSection,
  LazyCTASection,
  LazyBlockedDrainsContent,
  LazySectionWrapper,
} from "@/components/lazy/LazySections";

const Index = () => {
  // Priority service-in-location combinations for internal linking
  const priorityLinks = SERVICES.slice(0, 3).flatMap((service) =>
    LOCATIONS.slice(0, 2).map((location) => ({
      href: `/locations/${location.slug}/${service.slug}`,
      label: `${service.name} in ${location.name}`,
      icon: service.icon,
    }))
  );

  return (
    <Layout>
      <RouteSEOHead />
      <SchemaScript
        schema={[
          generateWebsiteSchema(),
          generateLocalBusinessSchema(),
          generateAggregateRatingSchema(testimonials),
          ...generateReviewSchema(testimonials),
          generateFAQSchema(manchesterFaqs),
        ]}
      />

      {/* EXPANSION: Manchester-specific content */}
      <HeroWithForm />
      
      <TrustBadges />

      {/* Pillar content - existing service overview */}
      <PillarContent />
      
      {/* Expanded blocked drains content - ~1500 words with FAQs, process steps, internal links */}
      <LazySectionWrapper height="h-[600px]">
        <LazyBlockedDrainsContent />
      </LazySectionWrapper>

      {/* Below-fold content - lazy loaded for performance */}
      <LazySectionWrapper height="h-96">
        <LazyServicesGrid />
      </LazySectionWrapper>
      <LazySectionWrapper height="h-80">
        <LazyTestimonialsSection />
      </LazySectionWrapper>
      <LazySectionWrapper height="h-72">
        <LazyLocationsGrid />
      </LazySectionWrapper>

      {/* Priority Service-in-Location Links (SEO) */}
      <section className="section-padding content-visibility-auto">
        <div className="container-wide px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Popular Services by Area
            </h2>
            <p className="text-muted-foreground">
              Quick links to our most requested services in your area
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {priorityLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-3 p-4 bg-card rounded-lg card-elevated hover:bg-muted/50 transition-colors group"
              >
                <span className="text-2xl">{link.icon}</span>
                <span className="flex-1 font-medium text-sm">{link.label}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <MapPin className="h-4 w-4" />
              View all service areas
            </Link>
          </div>
        </div>
      </section>

      <LazySectionWrapper height="h-64">
        <LazyGuaranteesSection />
      </LazySectionWrapper>
      <LazySectionWrapper height="h-96">
        <LazyManchesterFAQSection />
      </LazySectionWrapper>
      <LazySectionWrapper height="h-48">
        <LazyCTASection />
      </LazySectionWrapper>
    </Layout>
  );
};

export default Index;
