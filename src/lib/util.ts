import { getCollection } from 'astro:content';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix site-relative links and images with the base path (needed on the github.io preview). */
export function href(url?: string): string {
  if (!url) return '#';
  if (/^(https?:|mailto:|tel:|#)/.test(url)) return url;
  return BASE + (url.startsWith('/') ? url : '/' + url);
}

export const isExternal = (url?: string) => !!url && /^https?:/.test(url);

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/** "Sat 27 Feb" */
export function shortDate(d: Date): string {
  return `${DAYS[d.getUTCDay()]} ${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`;
}

export async function concerts() {
  const all = (await getCollection('concerts')).filter((c) => !c.data.hidden);
  return all.sort((a, b) => +a.data.performances[0].date - +b.data.performances[0].date);
}
