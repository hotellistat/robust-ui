module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
  // "@storybook/addon-links",
  "@storybook/addon-essentials", "@storybook/addon-interactions", 'storybook-addon-themes'],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  docs: {
    autodocs: true
  }
};