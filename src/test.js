/**
 * This is a function.
 *
 * @param {string} n - A string param
 * @param {string} [o] - A optional string param
 * @param {string} [d=DefaultValue] - A optional string param
 * @return {string} A good string
 *
 * @example
 *
 *     foo('hello')
 */

function foo(n, o, d) {
  return n
}

/**
 * A song
 * @typedef {{title: string, artist: string, year: number}} Song
 */

/**
 * Plays a song
 * @param {Song} song - The {@link Song} to be played
 */

function play(song) {}

/**
 * @typedef {import('./Foo').default} Bar
 */

/**
 * @param {Bar} x
 */

function test(x) {}

/**
 * @type {number}
 */
var FOO = 1
