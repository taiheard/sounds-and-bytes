import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configure for GitHub Pages project repository
  site: 'https://taiheard.github.io',
  base: '/',
  image: {
    domains: ['img.youtube.com'],
  },
  security: {
    checkOrigin: true,
  },
  // Add Content Security Policy headers
  headers: {
    'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.youtube.com https://www.youtube-nocookie.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https: blob:; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com https://www.youtube.com/embed/; connect-src 'self' https://formspree.io; font-src 'self' data:; media-src 'self' https: data: blob:; object-src 'none'; base-uri 'self'; form-action 'self' https://formspree.io;",
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  },
});

