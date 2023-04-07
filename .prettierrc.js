const PrettierPluginSortImports = require('@ianvs/prettier-plugin-sort-imports');

const packages = ['@angular/core/(.*)', '@angular/(.*)', 'rxjs(.*)'];

/** @type{import('prettier').Config} */
module.exports = {
  plugins: [PrettierPluginSortImports],
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
  arrowParens: 'avoid',
  endOfLine: 'lf',
  importOrderSeparation: false,
  importOrderMergeDuplicateImports: true,
  importOrderSortSpecifiers: true,
  importOrder: packages.concat('', [
    '^(?:\\W){0,}([A-Z]|components|((button|template|modals|blocks|feed|overlays|screens|message(s|-settings))\\/[A-Z]))(?!(.*)(icons|Icon))',
    '<THIRD_PARTY_MODULES>',
  ]),
  overrides: [
    {
      "files": "*.ts",
      "options": {
        "parser": "babel-ts"
      },
    },
    {
      "files": "*.html",
      "options": {
        "parser": "html"
      }
    }
  ],
};
