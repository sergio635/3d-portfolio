import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import {ReactThreeFiber} from '@react-three/fiber'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugin: {
      react,
      'react-refresh': reactRefresh,
      'react-hooks': reactHooks,
      '@react-three': ReactThreeFiber,
    },
    rules: {
      'react/no-unknown-property': 'off',
    }
  },
])
