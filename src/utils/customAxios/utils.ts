export const ensureLeadingSlash = (url: string) =>
  url.startsWith('/') ? url : `/${url}`;

export const ensureEndingSlash = (url: string) =>
  url.endsWith('/') ? url : `${url}/`;
