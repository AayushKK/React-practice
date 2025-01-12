import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,  // Use the latest ECMAScript features
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',  // Allow latest ECMAScript features
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },  // Auto-detect React version (recommended)
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',  // Disable the rule for target="_blank"
      'react-refresh/only-export-components': [
        'warn', { allowConstantExport: true },  // Warn when not exporting components (with an exception for constants)
      ],
      'react/react-in-jsx-scope': 'off',  // Disable this for React 17+ (not needed)
      'react/jsx-uses-vars': 'error',     // Ensure all JSX variables are used
      'react/jsx-uses-react': 'off',      // React 17+ doesn't need the React import in scope
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],  // Handle unused vars in TS, ignoring leading underscores
    },
  },
]

