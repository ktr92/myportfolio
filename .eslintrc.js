module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  plugins: ['github'],
  root: true,
  rules: {
    'no-multiple-empty-lines': [1, {'max': 1, 'maxEOF': 0}],
    'semi': 'off',
    'linebreak-style': 0,
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'max-len': 'off',

  },
};
