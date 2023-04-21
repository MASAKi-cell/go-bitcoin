/**
 * plugin:vue/vue3-recommended
 * https://eslint.vuejs.org/rules/
 */


module.exports = {
  /** 公式ドキュメント：https://www.npmjs.com/package/eslint-plugin-vue */


  // コンポーネント定義名を、kebab-caseに統一する
  "vue/component-definition-name-casing": ["error", "kebab-case"],

  // 終了タグの強制
  'vue/html-end-tags': ['off'],

  // タグの閉じ括弧(>)の前に改行を要求または禁止する
     'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
  ],

  //  属性指定時のクオートをdoubleに設定
  'vue/html-quotes': ['error', 'double', { avoidEscape: false }],

  // {{}} 構文の内側の両端にスペースを設定
  'vue/mustache-interpolation-spacing': ['error', 'always'],


  // emitsで指定されていないイベントのemit禁止
  'vue/require-explicit-emits': [
    'error',
    {
      allowProps: false,
    },
  ],

  // propsタイプの必須
  'vue/require-prop-types': ['error'],

  // テンプレート内で仕様されていないプロパティが存在するか否か
  'vue/no-unused-properties': [
    'error',
    {
      groups: ['props', 'data', 'computed', 'methods', 'setup'],
    },
  ],

  // propsの、requiredがtrueではない場合のdefault値を必須に設定
  'vue/require-default-prop': ['error'],
}
