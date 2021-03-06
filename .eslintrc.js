module.exports = {
    root: true,
    env: {
        node: true,
        browser: true
    },
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    // TODO: consider removing these rules and improving the source code
    rules: {
        'prefer-const': 1,
        'no-useless-escape': 1,
        'prefer-rest-params': 1,
        'prefer-spread': 1,
        'no-prototype-builtins': 1,
        '@typescript-eslint/explicit-module-boundary-types': 1,
        '@typescript-eslint/ban-ts-comment': 1,
        '@typescript-eslint/ban-types': 1,
        '@typescript-eslint/no-var-requires': 1,
        '@typescript-eslint/no-explicit-any': 1,
        '@typescript-eslint/no-empty-function': 1,
        '@typescript-eslint/no-namespace': 1,
        '@typescript-eslint/no-inferrable-types': 1,
        '@typescript-eslint/no-unused-vars': 1
    }
  };
