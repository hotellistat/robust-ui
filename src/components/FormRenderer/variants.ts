export default {
  primary:
    'bg-primary-500 hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-500 text-white  ring-primary-500 shadow-glow shadow-primary-500/50',

  'primary-outline':
    'bg-transparent border border-primary-500 text-primary-500 active:bg-primary-500/10',

  warn: 'bg-yellow-500 active:bg-yellow-600 text-gray-900/75 shadow ring-yellow-500 shadow-glow shadow-yellow-500/50',

  danger:
    'bg-rose-400 active:bg-rose-600 text-gray-900 shadow ring-rose-500 shadow-glow shadow-rose-500/50',
  'danger-text':
    'hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500',
  'danger-outline':
    'border border-rose-500 hover:bg-rose-500/20 active:bg-rose-500/30 text-rose-500 ring-rose-500',

  muted:
    'bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700 text-gray-900 dark:text-white ring-gray-200',

  transparent:
    'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white',

  dark: 'hover:bg-gray-900 bg-gray-800 text-gray-200 ring-gray-800',
} as Record<string, string>;
