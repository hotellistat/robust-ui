const path = require('path')

module.exports = {
  async viteFinal(config, { configType }) {
    config.resolve.alias = [
      { find: '@', replacement: '/src/' },
      { find: 'vue', replacement: 'vue/dist/vue.esm-bundler.js' },
    ]

    config.base = '/robust-ui/'

    return config
  },
  stories: ['../src/**/*.stories.md', '../src/**/*.stories.@(js|ts)'],
  addons: [
    'storybook-addon-themes/register',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'storybook-builder-vite',
  },
}
