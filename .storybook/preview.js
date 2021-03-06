import '../src/styles/tailwind.css'
import '../src/styles/storybook.css'
import withEvents from 'storybook-auto-events';

export const decorators = [
  withEvents,
];

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
