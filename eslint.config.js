import standardWithTypeScript from 'eslint-config-standard-with-typescript'
import prettier from 'eslint-config-prettier'

export default [
  {
    plugins: { standardWithTypeScript, prettier },
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-assertions': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
]
