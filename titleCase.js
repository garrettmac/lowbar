
/**
 * Converts `string` to [title case](https://en.wikipedia.org/wiki/TitleCase).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the title cased string.
 * @see lowerCase, kebabCase, camelCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * titleCase('Foo Bar')
 * // => 'Foo Bar'
 *
 * titleCase('--foo-bar--')
 * // => 'Foo Bar'
 *
 * titleCase('foo bar')
 * // => 'Foo Bar'
 */

const titleCase = (s = '') => s.split(' ').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export default titleCase
