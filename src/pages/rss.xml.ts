import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { siteConfig } from '@config/site';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const publishedPosts = posts
    .filter((post): post is typeof post & { data: typeof post.data & { date: Date } } => post.data.date instanceof Date)
    .sort((a, b) => (b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0));

  return rss({
    title: siteConfig.name,
    description: siteConfig.description,
    site: context.site ?? siteConfig.url,
    items: publishedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/${post.slug}/`,
      categories: post.data.categories || [],
      customData: post.data.tags?.length ? `<tags>${post.data.tags.join(',')}</tags>` : undefined,
    })),
    stylesheet: '/rss/styles.xsl',
  });
}
