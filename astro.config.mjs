import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Since you're likely hosting on a custom domain or root,
  // we'll keep the site configuration simple for now.
  site: 'https://taiwoheard.com',
  image: {
    domains: ['img.youtube.com'],
  },
  security: {
    checkOrigin: true,
  },
  // Add Content Security Policy headers
  headers: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.youtube.com/embed/; connect-src 'self' https://formspree.io; font-src 'self' data:; media-src 'self' https: data:; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io;",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
});

