const packages = ['@angular/core(.*)', '@angular/(.*)', 'ngrx(.*)', 'rxjs(.*)', ];

/** @type{import('prettier').Config} */
module.exports = {
  plugins: [require('@ianvs/prettier-plugin-sort-imports')],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  endOfLine: 'lf',

  importOrderSeparation: false,
  importOrderMergeDuplicateImports: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["typescript", "decorators-legacy"],
  importOrder: packages.concat('', [
    '(.*)module(.*)',
    '',
    '(.*)component(.*)',
    '',
    '(.*)service(.*)',
    '',
    '<THIRD_PARTY_MODULES>',
  ]),
};
