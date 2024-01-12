export const ensureLeadingSlash = (url: string) =>
  url.startsWith('/') ? url : `/${url}`;

export const ensuerEndingSlash = (url: string) =>
  url.endsWith('/') ? url : `${url}/`;
