export type BreadcrumbItem = {
  name: string;
  url: string;
};

const cleanTitle = (title?: string): string | undefined => {
  if (!title) return undefined;
  const trimmed = title.trim();
  const separators = [" | ", " – ", " — "];

  for (const separator of separators) {
    if (trimmed.includes(separator)) {
      const [firstPart] = trimmed.split(separator);
      if (firstPart?.trim()) {
        return firstPart.trim();
      }
    }
  }

  return trimmed;
};

const toTitleCase = (value: string): string => {
  return value
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
};

const formatSegment = (segment: string): string => {
  try {
    const decoded = decodeURIComponent(segment);
    return toTitleCase(decoded);
  } catch {
    return toTitleCase(segment);
  }
};

const ensureTrailingSlash = (value: string): string => {
  if (!value) return "/";
  return value.endsWith("/") ? value : `${value}/`;
};

export const generateBreadcrumbs = (
  pathname: string,
  pageTitle?: string
): BreadcrumbItem[] | undefined => {
  if (!pathname || pathname === "/") {
    return undefined;
  }

  const normalizedPath = ensureTrailingSlash(pathname);
  const segments = normalizedPath.split("/").filter(Boolean);

  if (!segments.length) {
    return undefined;
  }

  const crumbs: BreadcrumbItem[] = [{ name: "Świat Wrażeń", url: "/" }];
  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;
    const url = isLast ? normalizedPath : ensureTrailingSlash(currentPath);
    const name = isLast
      ? cleanTitle(pageTitle) || formatSegment(segment)
      : formatSegment(segment);

    crumbs.push({ name, url });
  });

  return crumbs;
};
