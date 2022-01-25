import '../src/styles/main.postcss'
import '../src/styles/storybook.postcss'

import { app } from '@storybook/vue3'
import clickOutside from '../src/directives/click-outside'
import PhosphorVue from 'phosphor-vue'

app.use(PhosphorVue)
app.directive('click-outside', clickOutside)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    disable: true,
  },
  themes: {
    clearable: false,
    default: 'Light',
    list: [
      {
        name: 'Light',
        class: ['light-mode'],
        color: '#f3f4f6',
      },
      {
        name: 'Dark',
        class: ['dark', 'dark-mode'],
        color: '#111827',
      },
    ],
  },
}
