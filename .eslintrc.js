module.exports = {
  env: {
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly',
  },
  plugins: ['prettier', 'unused-imports'],
  extends: [
    '@vue/typescript/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],

  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/component-api-style': ['error', ['script-setup']],
    'vue/match-component-import-name': ['error'],
    'vue/no-empty-component-block': ['error'],
    'vue/no-multiple-objects-in-class': ['error'],
    'vue/no-restricted-call-after-await': ['error'],
    'vue/no-template-target-blank': ['error'],
    'vue/no-useless-mustaches': ['error'],
    'vue/no-useless-v-bind': ['error'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/prefer-separate-static-class': ['error'],
    'vue/prefer-true-attribute-shorthand': ['warn'],
    'vue/v-on-function-call': ['error'],
    'vue/no-undef-components': [
      'error',
      {
        ignorePatterns: ['Router.*'],
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    camelcase: [
      'error',
      {
        properties: 'never',
        ignoreDestructuring: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {},
      {
        usePrettierrc: true,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
  },
};
