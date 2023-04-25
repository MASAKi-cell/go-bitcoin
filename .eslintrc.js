const elLintRules = require('./.eslint-rules')
const esLintPluginVueRules = require('./.eslint-plugin-vue-rules')

module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  rules: {
    ...elLintRules,
    ...esLintPluginVueRules,
  }
}
