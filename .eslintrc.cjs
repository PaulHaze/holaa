module.exports = {
  // Configuration for JavaScript files
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb-base',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        semi: true,
        trailingComma: 'all',
        printWidth: 80,
        tabWidth: 2,
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint', 'unused-imports'],
      extends: ['airbnb-typescript', 'prettier', 'plugin:prettier/recommended'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        'no-undef': 'error',
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'jsx-a11y/anchor-is-valid': 'off', // Next.js uses its own internal link system
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
        'react-hooks/exhaustive-deps': 'off', // Incorrectly report needed dependency with Next.js router
        '@next/next/no-img-element': 'off', // We currently not using next/image because it isn't supported with SSG mode
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        '@typescript-eslint/consistent-type-imports': 'error', // Ensure `import type` is used when it's necessary
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        'import/extensions': [
          'warn',
          'ignorePackages',
          {
            '': 'never',
            ts: 'never',
            tsx: 'never',
            js: 'never',
            jsx: 'never',
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true },
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        'unused-imports/no-unused-imports': 'error',
      },
    },
    // Configuration for unit/rtl testing
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      plugins: ['vitest', 'jest-formatting', 'testing-library', 'jest-dom'],
      extends: [
        'plugin:vitest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
        'plugin:jest-dom/recommended',
      ],
    },
    // Configuration for e2e testing (Playwright)
    {
      files: ['**/*.spec.ts'],
      extends: ['plugin:playwright/recommended'],
    },
  ],
  globals: {
    React: true,
    JSX: true,
  },
};
