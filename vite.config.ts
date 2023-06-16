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
  esbuild: {
    pure: ['console.log'],
  },
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
        '@floating-ui/vue',
        '@vueuse/core',
        '@vueuse/shared',
        'vee-validate',
        'fuse.js',
        '@phosphor-icons/vue',
        'vuedraggable',
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
