# Świat Wrażeń Website

A modern marketing site for Świat Wrażeń built with Astro. The project includes a landing page, service catalog, blog, full-text search, structured data, and bespoke components tailored to the brand.

## Features

- 🚀 **Built with Astro** - Benefit from Astro's speed and flexibility
- 📱 **Fully Responsive** - Looks great on all devices
- 🎨 **Customizable** - Easy to adapt to your brand
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and JSON-LD
- 📝 **Blog Ready** - Support for posts, categories, tags, and series
- 🔎 **Search Functionality** - Client-side search with Fuse.js
- 📊 **Pagination** - For blog posts, categories, tags, and authors
- 📰 **RSS Feed** - Automatically generated RSS feed
- 🗺️ **Sitemap** - Automatically generated sitemap
- 🖋️ **MDX Support** - Use components in your markdown
- 🔤 **Typography** - Beautiful typography with Tailwind CSS
- 🌙 **Icons** - Easy icon usage with Astro Icon

## Project Structure

```
├── public/             # Static assets (logo, manifest, favicons)
├── src/
│   ├── assets/         # Images and other assets
│   ├── config/         # Site configuration
│   ├── content/        # Content collections (blog posts, authors, etc.)
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components and routes
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── astro.config.mjs    # Astro configuration
├── package.json        # Scripts and dependencies
```

### Key Directories and Files

- **src/config/**: Contains configuration files for the site, menus, and social links
- **src/content/**: Contains all content collections (blog posts, authors, pages)
- **src/layouts/**: Contains layout components used throughout the site
- **src/pages/**: Contains all page components and defines the routing structure

## Components

Key building blocks:

- **Layout.astro** – global wrapper with SEO, navigation, and footer
- **Nav / Header / Footer** – custom UI matching Świat Wrażeń branding
- **Landing components** – Hero, TrustSection, PricePackageCard, FaqAccordion, etc.
- **PostLayout** – blog layout with breadcrumbs, schema, share buttons
- **Pagination** – unified logic across blog, categories, tags, authors
- **Search** – JSON API + client-side Fuse.js search
- **SEO.astro** – OpenGraph, Schema.org (Organization, Breadcrumbs, FAQ, Video), canonical, robots

## Getting Started

### Prerequisites

- Node.js (version 16.12.0 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone repository:
   ```bash
   git clone git@github.com:swiatwrazen/bitdoze-astro-theme.git swiat-wrazen-site
   cd swiat-wrazen-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:4321`

### Configuration

1. `src/config/config.json` – company info, CTA content, contact details
2. `src/config/site.ts` – global SEO data, pagination, noindex flags
3. `src/config/menu.json` – navigation and footer links
4. `src/config/social.json` – social links used in footer and SEO schema
5. `src/config/company.ts` – company name, slogan, theme colors, contact data

### Content Collections

#### Blog Posts

Markdown/MDX files in `src/content/posts/`:

```md
---
title: "Your Post Title"
meta_title: "SEO Title (optional)"
description: "Post description for SEO"
date: 2023-06-01
image: "../../assets/images/your-image.jpg"
authors: ["author-id"]
categories: ["category-name"]
tags: ["tag1", "tag2"]
series: ["Series Name", "Part Number"]
---

Your post content goes here...
```

#### Authors

Markdown files in `src/content/authors/`:

```md
---
title: "Author Name"
meta_title: "Author Name - Astro Blog Theme"
image: "../../assets/images/authors/author-image.jpg"
description: "Author description"
social:
  facebook: "https://facebook.com/username"
  twitter: "https://twitter.com/username"
  website: "https://example.com"
---

Author bio goes here...
```

## Customization

### Styling

The project uses Tailwind CSS plus global styles:

1. Customize colors/fonts in `tailwind.config.cjs`
2. Extend global utilities in `src/styles/global.css`
3. Branding utilities (`bg-sw-primary`, `font-luckiest`, etc.) are defined in Tailwind config

### Pages and Content

- Files in `src/pages/` map directly to routes
- Rich content pages (e.g., `/oferta`, `/karta-warszawiaka`) live in `src/content/pages/` and are rendered via `src/pages/[...slug].astro`
- Pagination routes (`/blog/page-n/`, `/categories/<slug>/page-n/`, etc.) are auto-generated and include unique metadata

## Deployment

Build your site for production:

```bash
npm run build
```

The built site will be in the `dist/` directory, ready to be deployed to your favorite hosting platform.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Astro](https://astro.build)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons via [Astro Icon](https://github.com/natemoo-re/astro-icon)
- Search powered by [Fuse.js](https://fusejs.io)
