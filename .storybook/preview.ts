import '../src/styles/tailwind.css'
import '../src/styles/storybook.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    disable: true,
  },

  themes: {
    clearable: false,
    default: 'light',
    list: [
      {
        name: 'light',
        class: ['light-mode'],
        color: '#fbfcfd'
      },
      {
        name: 'dark',
        class: ['dark', 'dark-mode'],
        color: '#12171d',
      },
    ],
  },
}
