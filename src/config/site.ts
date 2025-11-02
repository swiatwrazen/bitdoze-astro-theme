// Site configuration
export const siteConfig = {
  // Site details
  name: "Świat Wrażeń",
  description: "Animacje, urodziny tematyczne i atrakcje dla dzieci w Warszawie i okolicach.",
  url: "https://www.swiatwrazen.pl",
  
  // Pagination settings
  postsPerPage: 10, // Number of posts per page
  
  // SEO settings
  noindex: {
    tags: true, // Set to true to add noindex meta tag to tag pages
    categories: false, // Set to true to add noindex meta tag to category pages
    authors: false, // Set to true to add noindex meta tag to author pages
  },
  
  // Default social image
  defaultImage: "/images/swiat-wrazen/hero-kids.jpg",
};
