/**
 * Centralized route metadata for SEO
 * Each route has: title, description, canonicalPath, robots
 * 
 * Canonical rules:
 * - Homepage: "/" 
 * - All other routes: NO trailing slash
 * - Base domain: https://swindonblockeddrains.co.uk
 */

import { BRAND } from "@/config/brand";

export interface RouteMeta {
  title: string;
  description: string;
  canonicalPath: string;
  robots: string;
  ogImage?: string;
  noIndex?: boolean;
}

const BASE_URL = `https://${BRAND.domain}`;
const DEFAULT_OG_IMAGE = `${BASE_URL}/og/swindonblockeddrains-og.jpg`;

// Routes that should not be indexed
const NOINDEX_ROUTES = [
  "/admin",
  "/login",
  "/reset-password",
  "/auth",
  "/dashboard",
];

export function shouldNoIndex(pathname: string): boolean {
  const normalizedPath = pathname.toLowerCase().replace(/\/+$/, "");
  return NOINDEX_ROUTES.some(
    (route) => normalizedPath === route || normalizedPath.startsWith(`${route}/`)
  );
}

/**
 * Normalize canonical path: no trailing slash except homepage
 */
export function normalizeCanonicalPath(path: string): string {
  if (path === "/" || path === "") return "/";
  return path.replace(/\/+$/, "");
}

/**
 * Get full canonical URL
 */
export function getCanonicalUrl(pathname: string): string {
  return `${BASE_URL}${normalizeCanonicalPath(pathname)}`;
}

/**
 * Static route metadata map
 * Dynamic routes (with params) are handled in getSeoForRoute()
 */
export const STATIC_ROUTE_META: Record<string, Omit<RouteMeta, "canonicalPath" | "robots">> = {
  "/": {
    title: "Blocked Drains Swindon | 24/7 Local Drain Unblocking",
    description: "Professional drain unblocking in Swindon. Emergency call-outs, CCTV surveys, drain repairs. No call-out fee, fixed pricing. Call 01793 487489.",
    ogImage: DEFAULT_OG_IMAGE,
  },
  "/services": {
    title: "Drainage Services Swindon | All Drain Solutions",
    description: "Complete drainage services in Swindon. Blocked drains, CCTV surveys, drain jetting, and 24/7 emergency callouts. No call-out fee. Get a quote today.",
  },
  "/locations": {
    title: "Areas We Cover | Drain Services Near Swindon",
    description: "Drainage services across Swindon and surrounding areas including Highworth, Wroughton, Cricklade, and Royal Wootton Bassett. Find your area.",
  },
  "/about": {
    title: "About Us | Swindon Drainage Specialists",
    description: "Meet Blocked Drains Swindon, your trusted local drainage experts. Reliable, professional service available 24/7 across Swindon and surrounding areas.",
  },
  "/contact": {
    title: "Contact Us | Get a Free Quote in Swindon",
    description: "Contact Blocked Drains Swindon for a free quote. Call 01793 487489 or use our online form. Fast response for all drainage enquiries.",
  },
  "/faq": {
    title: "FAQs | Drain Services Questions Answered",
    description: "Common questions about drainage services in Swindon answered. Learn about costs, response times, what's included, and when to call a professional.",
  },
  "/blog": {
    title: "Drainage Tips & Advice | Swindon Expert Blog",
    description: "Expert drainage advice from Swindon specialists. Tips to prevent blocked drains, maintain your drainage system, and know when to call for help.",
  },
  "/sitemap": {
    title: "Sitemap | Blocked Drains Swindon",
    description: "Browse all pages on Blocked Drains Swindon. Find drainage services, local areas, blog articles, and contact information.",
    noIndex: true,
  },
  "/privacy": {
    title: "Privacy Policy | Blocked Drains Swindon",
    description: "Privacy policy for Blocked Drains Swindon. Learn how we collect, use, and protect your personal information when using our services.",
  },
  "/terms": {
    title: "Terms of Service | Blocked Drains Swindon",
    description: "Terms and conditions for Blocked Drains Swindon drainage services. Read before booking our drain unblocking and survey services.",
  },
  "/cookies": {
    title: "Cookie Policy | Blocked Drains Swindon",
    description: "Cookie policy for Blocked Drains Swindon website. Learn about the cookies we use and how to manage your preferences.",
  },
};

/**
 * Service-specific SEO metadata
 */
export const SERVICE_META: Record<string, { title: string; description: string }> = {
  "blocked-drains": {
    title: "Blocked Drains Swindon | 24/7 Drain Clearing",
    description: "Fast blocked drain clearance in Swindon. Our local engineers use professional equipment to clear all blockages. No call-out fee, fixed prices.",
  },
  "drain-unblocking": {
    title: "Drain Unblocking Swindon | Sinks, Toilets & Baths",
    description: "Expert drain unblocking across Swindon. We clear blocked sinks, toilets, baths, and showers fast. No call-out charges, fixed pricing guaranteed.",
  },
  "cctv-drain-surveys": {
    title: "CCTV Drain Surveys Swindon | HD Camera Inspections",
    description: "Professional CCTV drain surveys in Swindon with detailed video reports. Identify blockages, damage, and root ingress accurately. Book today.",
  },
  "drain-jetting": {
    title: "Drain Jetting Swindon | High-Pressure Cleaning",
    description: "Powerful high-pressure drain jetting in Swindon. Clears stubborn blockages, fat buildup, and debris. Safe for all pipe types. Book now.",
  },
  "emergency-drain-services": {
    title: "Emergency Drains Swindon | 24/7 Callouts",
    description: "24/7 emergency drain services across Swindon. Rapid response to flooding, sewage backups, and urgent blockages. Call us day or night.",
  },
};

/**
 * Sub-service SEO metadata
 */
export const SUBSERVICE_META: Record<string, { title: string; description: string }> = {
  "blocked-toilet": {
    title: "Blocked Toilet Swindon | Fast Unblocking Service",
    description: "Blocked toilet in Swindon? We clear toilet blockages quickly and hygienically. Same-day service, no call-out fee. Domestic and commercial.",
  },
  "blocked-sink": {
    title: "Blocked Sink Swindon | Fast Local Unblocking",
    description: "Blocked sink in Swindon? Our local drainage experts clear kitchen and bathroom sinks fast. No call-out fee, fixed pricing. Call now.",
  },
  "blocked-bath": {
    title: "Blocked Bath & Shower Swindon | Drainage Experts",
    description: "Bath or shower blocked in Swindon? We clear standing water and slow drains fast. Wet rooms and ensuites included. Fixed pricing.",
  },
  "external-drain-unblocking": {
    title: "External Drain Unblocking Swindon | Outside Drains",
    description: "Blocked outside drain in Swindon? We clear external drains, gullies, and manholes professionally. Prevent flooding and odours.",
  },
  "internal-drain-unblocking": {
    title: "Internal Drain Unblocking Swindon | Inside Drains",
    description: "Internal drain problems in Swindon? We unblock drains throughout your property quickly. Minimal disruption, professional service.",
  },
  "pre-purchase-survey": {
    title: "Pre-Purchase Drain Survey Swindon | Homebuyers",
    description: "Buying a home in Swindon? Get a CCTV drain survey before you commit. Reveals hidden problems, structural issues, and repair costs.",
  },
  "drainage-investigation": {
    title: "Drainage Investigation Swindon | Problem Diagnosis",
    description: "Recurring drain issues in Swindon? Our detailed investigations find the root cause using CCTV and professional expertise.",
  },
  "domestic-jetting": {
    title: "Domestic Drain Jetting Swindon | Home Services",
    description: "High-pressure drain jetting for Swindon homes. Clears fat, grease, and root ingress safely. Professional equipment, no mess.",
  },
  "commercial-jetting": {
    title: "Commercial Drain Jetting Swindon | Business Services",
    description: "Industrial-strength drain jetting for Swindon businesses. Restaurants, offices, and retail. Minimise downtime with fast service.",
  },
  "flooding-emergency": {
    title: "Flooding Emergency Swindon | Rapid Response",
    description: "Flooding emergency in Swindon? We respond fast to drain-related flooding. Pumping, clearance, and repairs. Available 24/7.",
  },
  "sewage-emergency": {
    title: "Sewage Emergency Swindon | Urgent Response",
    description: "Sewage backup in Swindon? We handle sewage emergencies safely and hygienically. 24/7 urgent response. Call immediately.",
  },
};
