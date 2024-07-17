const disabledRules = {
  'react-hooks/exhaustive-deps': 'off',
  'react/prop-types': 'off',
};

const warnings = {
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { argsIgnorePattern: '^_', ignoreRestSiblings: true },
  ],
  'react/jsx-sort-props': 'warn',
  'react/jsx-curly-brace-presence': 'warn',
  'react/no-multi-comp': 'warn',
  'react-refresh/only-export-components': 'warn',
};

const errors = {
  '@typescript-eslint/consistent-type-imports': 'error',
  'react/jsx-no-bind': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-leaked-render': 'error',
  'react/no-object-type-as-default-prop': 'error',
  'react/no-unstable-nested-components': 'error',
  'react/iframe-missing-sandbox': 'error',
};

const restrictedImports = {
  // Disable the base rule in favor of @typescript-eslint/no-restricted-imports
  'no-restricted-imports': 'off',
  '@typescript-eslint/no-restricted-imports': [
    'error',
    {
      paths: [
        {
          name: '@mui/material',
          message: `Please import MUI components individually instead of importing the entire library.\n\nEx. \`import Button from '@mui/material/Button';\`\ninstead of \`import { Button } from '@mui/material';\``,
        },
        {
          name: '@mui/system',
          message: `Please import MUI components individually instead of importing the entire library.`,
        },
        {
          name: 'lodash',
          message: `If possible, please use native array methods instead. Lodash methods are fine as long as there is a good reason to use them over native methods. If you would like to use a Lodash function, please import the function individually instead of importing the entire Lodash library.\n\nEx. \`import map from 'lodash/map';\`\ninstead of \`import { map } from 'lodash';\``,
        },
      ],
      patterns: [
        {
          group: ['.*'],
          message: 'Please use alias imports instead of relative imports.',
        },
        {
          group: ['!@mui/material/*', '!@mui/system/*', '!lodash/*'],
          message: 'Exclude valid imports from restriction.',
        },
      ],
    },
  ],
};

const importSortingRules = {
  'sort-imports': [
    'warn',
    {
      // sort-imports can't sort import lines so we'll use eslint-plugin-import instead
      ignoreDeclarationSort: true,
    },
  ],
  'import/order': [
    'warn',
    {
      groups: [
        'builtin', // built-in imports go first
        'external', // then external imports
        'internal', // then absolute imports
        ['sibling', 'parent'], // then relative imports (siblings and parents can go together)
        'index', // then index imports
        'unknown', // then everything else
      ],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
};

module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    // 'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'react', 'react-refresh'],
  root: true,
  rules: {
    ...disabledRules,
    ...warnings,
    ...errors,
    ...restrictedImports,
    ...importSortingRules,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
