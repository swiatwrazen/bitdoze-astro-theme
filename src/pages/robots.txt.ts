import type { APIRoute } from 'astro';
import { siteConfig } from '@config/site';

const disallowPaths = [
  '/search/',
  '/blog/page-',
  '/tags/',
  '/500/',
  '/cennik-archiwalny/',
];

export const GET: APIRoute = () => {
  const rules = [
    'User-agent: *',
    ...disallowPaths.map((path) => `Disallow: ${path}`),
    `Sitemap: ${siteConfig.url}/sitemap.xml`,
  ].join('\n');

  return new Response(rules, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
