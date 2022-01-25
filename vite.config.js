import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'robust-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'date-fns', 'gsap', '@popperjs/core', 'vue-router', 'vuex'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'date-fns': 'date-fns',
          vue: 'Vue',
        },
      },
    },
  },
})
