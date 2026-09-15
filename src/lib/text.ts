const ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  ldquo: '\u201c',
  rdquo: '\u201d',
  lsquo: '\u2018',
  rsquo: '\u2019',
  mdash: '\u2014',
  ndash: '\u2013',
  hellip: '\u2026',
  times: '\u00d7',
  divide: '\u00f7',
  middot: '\u00b7',
  bull: '\u2022',
  deg: '\u00b0',
  copy: '\u00a9',
  reg: '\u00ae',
  trade: '\u2122',
  larr: '\u2190',
  rarr: '\u2192',
};

/** Strip inline markup and decode entities, for meta tags and summaries. */
export function toPlainText(html: string): string {
  return html
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITIES[name.toLowerCase()] ?? match)
    .replace(/\s+/g, ' ')
    .trim();
}

/** First sentence, used as the standfirst on the project index. */
export function firstSentence(html: string): string {
  const text = toPlainText(html);
  return text.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? text;
}
