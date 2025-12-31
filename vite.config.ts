import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";
import { imagetools } from "vite-imagetools";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    // Enable source maps for debugging (no sensitive logic in this local service site)
    sourcemap: true,
    // Optimize chunk splitting for better caching and smaller initial load
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React - always needed
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // SEO - needed for every page
          'vendor-seo': ['react-helmet-async'],
          // Query client - needed for data fetching
          'vendor-query': ['@tanstack/react-query'],
          // Form libraries - deferred (lazy loaded with LeadForm)
          'vendor-form': ['react-hook-form', '@hookform/resolvers', 'zod'],
          // UI components - deferred (only loaded when needed)
          'vendor-ui': [
            '@radix-ui/react-select',
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-switch',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-label',
            '@radix-ui/react-separator',
            '@radix-ui/react-slot',
          ],
        },
      },
    },
    // Target modern browsers for smaller bundle
    target: 'es2020',
    // Minimize CSS
    cssMinify: true,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Image optimization - generates multiple formats and sizes at build time
    imagetools({
      defaultDirectives: (url) => {
        // Only apply to images in src/assets
        if (url.pathname.includes('/src/assets/')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '80',
          });
        }
        return new URLSearchParams();
      },
    }),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "script-defer",
      includeAssets: ["favicon.png", "og/*.jpg", "images/*.webp", "sitemap.xml", "robots.txt"],
      manifest: {
        name: "Blocked Drains Manchester",
        short_name: "Drain Help",
        description: "Professional drain unblocking and CCTV surveys in Manchester. 24/7 emergency service.",
        theme_color: "#f97316", // Updated to orange theme
        background_color: "#f5f7fa",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        // Skip waiting to activate new service worker immediately
        skipWaiting: true,
        clientsClaim: true,
        // Precache essential assets for offline support
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2,webp}"],
        // More aggressive caching strategies
        runtimeCaching: [
          {
            // HTML pages - Network first with fast fallback
            urlPattern: /^https:\/\/.*\.lovableproject\.com\/(?!api).*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
              },
              networkTimeoutSeconds: 3, // Fast fallback to cache
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Static JS/CSS assets (hashed = immutable)
            urlPattern: /\.(?:js|css)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "static-assets-v2",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Google Fonts stylesheets
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "google-fonts-stylesheets-v2",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Google Fonts webfonts - cache first (immutable)
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-webfonts-v2",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Images - cache first with size limit
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|avif)$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "images-v2",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
                purgeOnQuotaError: true, // Clear cache if storage is full
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Google Maps static images
            urlPattern: /^https:\/\/maps\.googleapis\.com\/maps\/api\/staticmap.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-maps-v2",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 7, // 1 week
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // Supabase API calls - network first with offline fallback
            urlPattern: /^https:\/\/.*\.supabase\.co\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache-v2",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24, // 1 day
              },
              networkTimeoutSeconds: 5,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            // External resources - stale while revalidate
            urlPattern: /^https:\/\/(?!.*supabase|.*googleapis|.*gstatic).*/i,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "external-v2",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24, // 1 day
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
