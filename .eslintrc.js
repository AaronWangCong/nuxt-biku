module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/html-indent': 0,
    'vue/attributes-order': 0,
    'vue/no-dupe-keys': 0,
    'vue/no-multi-spaces': 0,
    'vue/attribute-hyphenation': 0,
    'vue/require-default-prop': 0
  }
}
