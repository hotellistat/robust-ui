import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import visualizer from 'rollup-plugin-visualizer';

export default defineConfig(async (config) => ({
  base: '/robust-ui/',
  plugins: [
    vue(),
    config.mode === 'analyze'
      ? visualizer({ open: true, title: 'Robust-UI Bundle Visualizer' })
      : undefined,
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'robust-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'date-fns',
        '@popperjs/core',
        '@vueuse/core',
        '@vueuse/shared',
        'vee-validate',
        'gsap',
        'fuse.js',
        '@phosphor-icons/vue',
      ],
      output: [
        {
          preserveModules: true,
          format: 'esm',
          entryFileNames: (asset: ChunkInfo) => {
            return asset.name.replace('.vue', '') + '.mjs';
          },
          dir: 'dist/src',
        },
      ],
    },
  },
}));
