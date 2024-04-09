/**
 * Replaces the link strings with proxy ones
 * @param html
 * @returns
 */
export function replaceLinks(html: String, base: string) {
  const regex = /href=\"\/(recipes\/.*")/gm;

  // Alternative syntax using RegExp constructor
  // const regex = new RegExp('href=\\"\\\/(recipes\\\/.*\\")', 'gm')

  const str = html;
  const subst = `href="${base}/$1`;

  // The substituted value will be contained in the result variable
 return str.replace(regex, subst);
}