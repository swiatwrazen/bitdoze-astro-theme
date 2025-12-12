import { siteConfig } from "../config/site";

export interface PaginationProps {
  page: number;
  totalPosts: number;
  postsPerPage?: number;
  basePath: string;
}

export function getPagination({ page, totalPosts, postsPerPage = siteConfig.postsPerPage, basePath }: PaginationProps) {
  // Calculate total pages
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));
  
  // Ensure page is within valid range
  const currentPage = Math.min(Math.max(1, page), totalPages);
  
  // Calculate start and end indices for slicing the posts array
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = Math.min(startIndex + postsPerPage, totalPosts);
  
  const stripTrailingSlash = (path: string) => {
    if (path === '/' || path === '') return '';
    return path.endsWith('/') ? path.slice(0, -1) : path;
  };

  const buildPageUrl = (pageNumber: number) => {
    const normalizedBase = stripTrailingSlash(basePath);
    if (!normalizedBase) {
      return `/page-${pageNumber}/`;
    }
    return `${normalizedBase}/page-${pageNumber}/`;
  };

  const prevUrl = currentPage > 1
    ? currentPage === 2
      ? basePath
      : buildPageUrl(currentPage - 1)
    : null;

  const nextUrl = currentPage < totalPages
    ? buildPageUrl(currentPage + 1)
    : null;
  
  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    prevUrl,
    nextUrl,
    postsPerPage,
  };
}
