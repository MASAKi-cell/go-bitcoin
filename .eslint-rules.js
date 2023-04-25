/**
 * eslint:recommended
 * https://eslint.org/docs/rules/
 */

module.exports = {

  // 等式演算子 === 、 !== の使用 ==、!=の使用禁止
  eqeqeq: ['error', 'always'],

  // オブジェクト(={})の先頭と末尾にはスペースをあける
  'object-curly-spacing': ['error', 'always'],

  // ifやtryの前後にスペースを設定する
  'keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
    },
  ],

  // 三項演算子の改行を統一する
  'multiline-ternary': ['error', 'always-multiline'],

  // シングルクオートの設定
  quotes: ['error', 'single'],

  // インデントはスペース2つ。
  indent: ['error', 2, { SwitchCase: 1 }],
}
