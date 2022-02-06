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
  stories: [
    // '../stories/**/*.stories.md',
    '../stories/**/*.stories.@(js|ts)',
  ],
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
