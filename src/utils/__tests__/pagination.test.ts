import { describe, it, expect } from 'vitest';
import { getPagination } from '@utils/pagination';

describe('getPagination', () => {
  it('derives pagination details with defaults', () => {
    const pagination = getPagination({
      page: 2,
      totalPosts: 25,
      basePath: '/blog',
    });

    expect(pagination.currentPage).toBe(2);
    expect(pagination.totalPages).toBe(3);
    expect(pagination.startIndex).toBe(10);
    expect(pagination.endIndex).toBe(20);
    expect(pagination.prevUrl).toBe('/blog');
    expect(pagination.nextUrl).toBe('/blog/page/3/');
    expect(pagination.postsPerPage).toBe(10);
  });

  it('clamps the current page to the available range', () => {
    const pagination = getPagination({
      page: 10,
      totalPosts: 5,
      basePath: '/blog',
    });

    expect(pagination.currentPage).toBe(1);
    expect(pagination.totalPages).toBe(1);
    expect(pagination.prevUrl).toBeNull();
    expect(pagination.nextUrl).toBeNull();
    expect(pagination.startIndex).toBe(0);
    expect(pagination.endIndex).toBe(5);
  });

  it('respects custom page size and trailing slashes', () => {
    const pagination = getPagination({
      page: 3,
      totalPosts: 12,
      postsPerPage: 5,
      basePath: '/articles/',
    });

    expect(pagination.currentPage).toBe(3);
    expect(pagination.totalPages).toBe(3);
    expect(pagination.prevUrl).toBe('/articles/page/2/');
    expect(pagination.nextUrl).toBeNull();
    expect(pagination.startIndex).toBe(10);
    expect(pagination.endIndex).toBe(12);
    expect(pagination.postsPerPage).toBe(5);
  });
});
