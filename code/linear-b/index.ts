import { build, transform } from '~/base'

const syllables = {
  𐀀: 'a',
  𐀁: 'e',
  𐀂: 'i',
  𐀃: 'o',
  𐀄: 'u',
  𐀅: 'da',
  𐀆: 'de',
  𐀇: 'di',
  𐀈: 'do',
  𐀉: 'du',
  𐀊: 'ya',
  𐀋: 'ye',
  𐀍: 'yo',
  𐀏: 'ka',
  𐀐: 'ke',
  𐀑: 'ki',
  𐀒: 'ko',
  𐀓: 'ku',
  𐀔: 'ma',
  𐀕: 'me',
  𐀖: 'mi',
  𐀗: 'mo',
  𐀘: 'mu',
  𐀙: 'na',
  𐀚: 'ne',
  𐀛: 'ni',
  𐀜: 'no',
  𐀝: 'nu',
  𐀞: 'pa',
  𐀟: 'pe',
  𐀠: 'pi',
  𐀡: 'po',
  𐀢: 'pu',
  𐀣: 'Ka',
  𐀤: 'Ke',
  𐀥: 'Ki',
  𐀦: 'Ko',
  𐀨: 'ra',
  𐀩: 're',
  𐀪: 'ri',
  𐀫: 'ro',
  𐀬: 'ru',
  𐀭: 'sa',
  𐀮: 'se',
  𐀯: 'si',
  𐀰: 'so',
  𐀱: 'su',
  𐀲: 'ta',
  𐀳: 'te',
  𐀴: 'ti',
  𐀵: 'to',
  𐀶: 'tu',
  𐀷: 'wa',
  𐀸: 'we',
  𐀹: 'wi',
  𐀺: 'wo',
  𐀼: 'za',
  𐀽: 'ze',
  𐀿: 'zo',
}

const specialValues = {
  𐁀: 'ha',
  𐁁: 'ai',
  𐁂: 'au',
  𐁃: 'dw~e',
  𐁄: 'dw~o',
  𐁅: 'nw~a',
  𐁇: 'pte',
  𐁆: 'ph~u',
  𐁈: 'ry~a',
  𐁉: 'rai',
  𐁊: 'ry~o',
  𐁋: 'ty~a',
  𐁌: 'tw~e',
  𐁍: 'tw~o',
}

const m = {
  ...specialValues,
  ...syllables,
}

export const untranscribedValues = {
  '𐁐': '',
  '𐁑': '',
  '𐁒': '',
  '𐁓': '',
  '𐁔': '',
  '𐁕': '',
  '𐁖': '',
  '𐁗': '',
  '𐁘': '',
  '𐀎': '',
  '𐁙': '',
  '𐁚': '',
  '𐁛': '',
  '𐁜': '',
  '𐁝': '',
}

export const people = {
  '𐂀': '',
  '𐂁': '',
}

export const animals = {
  '𐂂': '',
  '𐂃': '',
  '𐂄': '',
  '𐂅': '',
  '𐀥': '',
  '𐀸': '',
  '𐂆': '',
  '𐂇': '',
  '𐁒': '',
  '𐂈': '',
  '𐂉': '',
  '𐁂': '',
  '𐂊': '',
  '𐂋': '',
  '𐀘': '',
  '𐂌': '',
  '𐂍': '',
}

export const measurements = {
  '𐄿': '',
  '𐄾': '',
  '𐄼': '',
  '𐄽': '',
  '𐄻': '',
  '𐄺': '',
  '𐄹': '',
  '𐄸': '',
  '𐄷': '',
  '𐂎': '',
  '𐂏': '',
  '𐂐': '',
  '𐀛': '',
  '𐀎': '',
  '𐂑': '',
  '𐀭': '',
  '𐂒': '',
  '𐂓': '',
  '𐂔': '',
  '𐂕': '',
  '𐂖': '',
  '𐂘': '',
  '𐂙': '',
  '𐃟': '',
  '𐃠': '',
  '𐃡': '',
  '𐃢': '',
  '𐃣': '',
  '𐃤': '',
  '𐃥': '',
  '𐃦': '',
  '𐃧': '',
  '𐃨': '',
  '𐃩': '',
  '𐃪': '',
  '𐃫': '',
  '𐃬': '',
}
// Furniture
// 𐃄
// 𐃅
// Weapons
// 𐃆
// 𐃇
// 𐃈
// 𐃉
// 𐃊
// chariots
// 𐃌
// 𐃍
// 𐃎
// 𐃏

/**
 * Build trie.
 */

const trie = build(m)

/**
 * Transform the text.
 */

const make = (text: string) => transform(text, trie, m)

export default make
