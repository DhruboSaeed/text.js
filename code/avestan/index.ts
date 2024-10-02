import { Map, Mark, build, transform } from '~/base'

const consonants = {
  '𐬐': 'k',
  '𐬑': 'H',
  '𐬒': 'Hy~',
  '𐬓': 'Hw~',
  '𐬔': 'g',
  '𐬕': 'gy~',
  '𐬖': 'G',
  '𐬗': 'tx',
  '𐬘': 'dj',
  '𐬙': 't',
  '𐬚': 'c',
  '𐬛': 'd',
  '𐬜': 'C',
  '𐬝': 't.',
  '𐬞': 'p',
  '𐬟': 'f',
  '𐬠': 'b',
  '𐬡': 'V',
  '𐬢': 'q',
  '𐬣': 'qy~',
  '𐬤': 'qw~',
  '𐬥': 'n',
  '𐬦': 'ny~',
  '𐬧': 'q',
  '𐬨': 'm',
  '𐬩': 'm',
  '𐬪': 'y',
  '𐬫': 'y',
  '𐬌𐬌': 'i_',
  '𐬬': 'w',
  '𐬎𐬎': 'u_',
  '𐬭': 'r',
  '𐬮': 'l',
  '𐬯': 's',
  '𐬰': 'z',
  '𐬱': 'x',
  '𐬲': 'j',
  '𐬳': 'xy~',
  '𐬴': 'X',
  '𐬵': 'h',
}

const vowels = {
  '𐬀': 'a',
  '𐬁': 'a_',
  '𐬂': 'a',
  '𐬃': 'a_',
  '𐬄': 'a&',
  '𐬅': 'a&_',
  '𐬆': 'U',
  '𐬇': 'U_',
  '𐬈': 'e',
  '𐬉': 'e_',
  '𐬊': 'o$',
  '𐬋': 'o_',
  '𐬌': 'I',
  '𐬍': 'i_',
  '𐬎': 'O',
  '𐬏': 'u_',
}

const map: Map = {
  ...vowels,
  ...consonants,
}

const tree = build(map)

const make = (text: string) => transform(text, tree, map)

export default make
