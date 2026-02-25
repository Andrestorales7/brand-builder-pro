/**
 * Sitemap Generator for the application
 * Generate an XML sitemap for SEO purposes
 */

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const BASE_URL = process.env.VITE_BASE_URL || 'https://homechefweekly.com';

export const routes: SitemapEntry[] = [
  {
    loc: '/',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    loc: '/SkillsPage',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: '/Contact',
    lastmod: new Date().toISOString().split('T')[0],
    changefreq: 'monthly',
    priority: 0.8,
  },
];

/**
 * Generate XML sitemap content
 */
export const generateSitemapXML = (entries: SitemapEntry[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetEnd = '</urlset>';

  const urlEntries = entries
    .map((entry) => {
      const fullUrl = `${BASE_URL}${entry.loc}`;
      return `  <url>
    <loc>${escapeXml(fullUrl)}</loc>
    ${entry.lastmod ? `<lastmod>${entry.lastmod}</lastmod>\n    ` : ''}${entry.changefreq ? `<changefreq>${entry.changefreq}</changefreq>\n    ` : ''}${entry.priority ? `<priority>${entry.priority}</priority>\n    ` : ''}</url>\n`;
    })
    .join('');

  return xmlHeader + urlsetStart + urlEntries + urlsetEnd;
};

/**
 * Escape XML special characters
 */
const escapeXml = (unsafe: string): string => {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
};

/**
 * Get full URL with base URL
 */
export const getFullUrl = (path: string): string => {
  return `${BASE_URL}${path}`;
};
