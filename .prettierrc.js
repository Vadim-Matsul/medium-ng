const packages = ['@angular/core(.*)', '@angular/(.*)', 'ngrx(.*)', 'immer(.*)', 'rxjs(.*)', 'zod$', 'query-string$', 'TagCloud$'];

/** @type{import('prettier').Config} */
module.exports = {
  plugins: [require('@ianvs/prettier-plugin-sort-imports')],
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'never',
  endOfLine: 'lf',

  importOrderSeparation: false,
  importOrderMergeDuplicateImports: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrder: packages.concat('', [
    '(.*).module$',
    '(.*).component$',
    '(.*).service$',
    '(.*).action(s?)$',
    '(.*).effect(s?)$',
    '(.*).model$',
    `(.*).directive$`,
    '<THIRD_PARTY_MODULES>',
  ]),
};
