/**
 * Multiply by 12.
 *
 * @param {number} times How many times?
 * @returns {number} 12 times times.
 */
export function foo(times) {
  /* webpackIgnore: true */
  const bar = 12;
  // c8 ignore next
  return bar * times;
}
