/**
 * Non-critical script loader utility.
 * Loads third-party scripts after the page is idle to avoid blocking initial render.
 * Uses requestIdleCallback when available, fallback to setTimeout.
 */

type ScriptConfig = {
  src: string;
  async?: boolean;
  defer?: boolean;
  id?: string;
  onLoad?: () => void;
};

/**
 * Load a single script element
 */
function loadScript(config: ScriptConfig): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if already loaded
    if (config.id && document.getElementById(config.id)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = config.src;
    
    if (config.async !== false) script.async = true;
    if (config.defer) script.defer = true;
    if (config.id) script.id = config.id;

    script.onload = () => {
      config.onLoad?.();
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load script: ${config.src}`));

    document.head.appendChild(script);
  });
}

/**
 * Schedule callback for idle time
 */
function onIdle(callback: () => void, timeout = 2000): void {
  if ('requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (cb: IdleRequestCallback, opts?: IdleRequestOptions) => number })
      .requestIdleCallback(callback, { timeout });
  } else {
    // Fallback for Safari and older browsers
    setTimeout(callback, 1500);
  }
}

/**
 * Load non-critical scripts after page is idle.
 * Call this from your app after initial render.
 * 
 * @example
 * useEffect(() => {
 *   loadNonCriticalScripts();
 * }, []);
 */
export function loadNonCriticalScripts(): void {
  onIdle(() => {
    // Add any non-critical scripts here
    // GA4 is already handled via index.html with user interaction trigger
    // This function can be extended for additional third-party scripts
    
    // Example: Load chat widget after idle
    // loadScript({ src: 'https://example.com/chat-widget.js', id: 'chat-widget' });
  });
}

/**
 * Load a script only after user interaction (scroll, click, touch)
 * This is the most aggressive deferral for analytics/tracking scripts
 */
export function loadOnInteraction(config: ScriptConfig): void {
  let loaded = false;

  function load() {
    if (loaded) return;
    loaded = true;
    loadScript(config);
  }

  ['scroll', 'click', 'touchstart'].forEach((event) => {
    document.addEventListener(event, load, { once: true, passive: true });
  });
}

/**
 * Initialize post-hydration scripts
 * Call this after React hydration is complete
 */
export function initPostHydration(): void {
  // Non-critical initializations that can wait until after render
  
  // Register service worker (if PWA)
  if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, but that's okay
      });
    });
  }
}
