/* eslint-disable sort-keys/sort-keys-fix */

import { build, transform } from './base'

const consonant = {
  b: 'b',
  d: 'd',
  g: 'g',
  ḫ: 'H',
  k: 'k',
  l: 'l',
  m: 'm',
  n: 'n',
  p: 'p',
  q: 'K',
  r: 'r',
  s: 's',
  ṣ: 's~',
  š: 'x',
  t: 't',
  ṭ: 't~',
  w: 'w',
  y: 'y',
  z: 'z',
  ŋ: 'q',
  ʾ: "'",
}

const vowel = {
  a: 'a',
  ā: 'a',
  â: 'a',
  e: 'E',
  ē: 'e',
  ê: 'e',
  i: 'I',
  ī: 'i',
  î: 'i',
  u: 'O',
  ū: 'u',
  û: 'u',
}

const m = {
  ...vowel,
  ...consonant,
}

const s = build(m)

const form = (t: string) => transform(t, s, m)

export default form
