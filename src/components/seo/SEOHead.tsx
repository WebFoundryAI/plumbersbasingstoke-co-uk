import { useEffect } from "react";
import { BRAND } from "@/config/brand";
import { SEOMetadata } from "@/config/seo";

interface SEOHeadProps {
  metadata: SEOMetadata;
}

export function SEOHead({ metadata }: SEOHeadProps) {
  useEffect(() => {
    document.title = metadata.title;

    // Google Search Console verification
    let googleVerification = document.querySelector('meta[name="google-site-verification"]');
    if (!googleVerification) {
      googleVerification = document.createElement("meta");
      googleVerification.setAttribute("name", "google-site-verification");
      googleVerification.setAttribute("content", "NsHdtpHnQwP_k83k4Z2-v5NSIDC6qiTuGiSpNkxp3ZU");
      document.head.appendChild(googleVerification);
    }

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", metadata.description);

    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (metadata.canonicalUrl) {
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.setAttribute("rel", "canonical");
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute(
        "href",
        `https://${BRAND.domain}${metadata.canonicalUrl}`
      );
    }

    // Handle noindex meta tag for content not ready for indexing
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (metadata.noIndex) {
      if (!robotsMeta) {
        robotsMeta = document.createElement("meta");
        robotsMeta.setAttribute("name", "robots");
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else {
      // Remove noindex if it exists and page should be indexed
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }

    // Cleanup function to reset robots meta when component unmounts
    return () => {
      const existingRobotsMeta = document.querySelector('meta[name="robots"]');
      if (existingRobotsMeta) {
        existingRobotsMeta.remove();
      }
    };
  }, [metadata]);

  return null;
}
