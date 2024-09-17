import { build, transform } from '~/system/base'

const m = {
  お: 'o',
  オ: 'o',
  こ: 'ko',
  コ: 'ko',
  そ: 'so',
  ソ: 'so',
  と: 'to',
  ト: 'to',
  の: 'no',
  ノ: 'no',
  ほ: 'ho',
  ホ: 'ho',
  も: 'mo',
  モ: 'mo',
  よ: 'yo',
  ヨ: 'yo',
  ろ: 'ro',
  ロ: 'ro',
  を: 'wo',
  ヲ: 'wo',
  え: 'e',
  エ: 'e',
  け: 'ke',
  ケ: 'ke',
  せ: 'se',
  セ: 'se',
  て: 'te',
  テ: 'te',
  ね: 'ne',
  ネ: 'ne',
  へ: 'he',
  ヘ: 'he',
  め: 'me',
  メ: 'me',
  れ: 're',
  レ: 're',
  ゑ: 'we',
  ヱ: 'we',
  う: 'u',
  ウ: 'u',
  く: 'ku',
  ク: 'ku',
  す: 'su',
  ス: 'su',
  つ: 'tu',
  ツ: 'tu',
  ぬ: 'nu',
  ヌ: 'nu',
  ふ: 'hu',
  フ: 'hu',
  む: 'mu',
  ム: 'mu',
  ゆ: 'yu',
  ユ: 'yu',
  る: 'ru',
  ル: 'ru',
  き: 'ki',
  キ: 'ki',
  し: 'si',
  シ: 'si',
  ち: 'ti',
  チ: 'ti',
  に: 'ni',
  ニ: 'ni',
  ひ: 'hi',
  ヒ: 'hi',
  み: 'mi',
  ミ: 'mi',
  り: 'ri',
  リ: 'ri',
  ゐ: 'wi',
  ヰ: 'wi',
  あ: 'a',
  ア: 'a',
  か: 'ka',
  カ: 'ka',
  さ: 'sa',
  サ: 'sa',
  た: 'ta',
  タ: 'ta',
  な: 'na',
  ナ: 'na',
  は: 'ha',
  ハ: 'ha',
  ま: 'ma',
  マ: 'ma',
  や: 'ya',
  ヤ: 'ya',
  ら: 'ra',
  ラ: 'ra',
  わ: 'wa',
  ワ: 'wa',
  い: 'i',
  イ: 'i',
}

const s = build(m)

const form = (t: string) => transform(t, s, m)

export default form