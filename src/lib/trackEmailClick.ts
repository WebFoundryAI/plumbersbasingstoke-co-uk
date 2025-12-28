import { supabase } from "@/integrations/supabase/client";
import { BRAND } from "@/config/brand";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export async function trackEmailClick(sourcePage: string) {
  // Track conversion in GA4
  if (typeof window !== "undefined" && window.gtag) {
    // Primary email click event
    window.gtag("event", "email_click", {
      event_category: "conversion",
      event_label: sourcePage,
      email_address: BRAND.email,
      value: 25, // Lower value than phone/form
      currency: "GBP",
    });

    // Also track as standard contact event
    window.gtag("event", "contact", {
      method: "email",
      source_page: sourcePage,
    });
  }

  // Track in database
  try {
    await supabase.from("leads").insert({
      name: "",
      phone: "",
      email: BRAND.email,
      postcode: "",
      service: "email-enquiry",
      location: BRAND.primaryLocation,
      message: "Email link clicked",
      source_page: sourcePage,
    });
  } catch (error) {
    // Silently fail - don't interrupt the email action
    console.error("Failed to track email click:", error);
  }
}
