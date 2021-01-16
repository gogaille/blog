export function postRoute(slug: string): string {
  return `/posts/${slug}`;
}

export function rssFeedRoute(): string {
  return `/feed/rss.xml`;
}
