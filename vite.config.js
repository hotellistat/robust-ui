import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    ssr: true,
    minify: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'robust-ui',
      fileName: (format) => `robust-ui.${format}.js`
    },
    rollupOptions: {
      input: ["src/index.ts"],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        'date-fns',
        'gsap',
        '@popperjs/core',
        'vue-router',
        'vuex',
        'gridstack',
        "vee-validate",
        "yup"
      ],
      output: {
        entryFileNames: 'robust-ui.[format].js',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
