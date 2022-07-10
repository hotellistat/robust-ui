import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
// visualizer({
//   open: true
// })

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
      external: [
        'vue',
        'date-fns',
        'gsap',
        '@popperjs/core',
        'vue-router',
        'vuex',
        'gridstack',
        "vee-validate",
        "yup",
        '@dnlsndr/vue-phosphor-icons'
      ],
      output: {
        globals: {
          vue: 'Vue',
          'date-fns': "dateFns",
          '@popperjs/core': "popperJs",
          gsap: "gsap",
          gridstack: "gridStack",
          '@dnlsndr/vue-phosphor-icons': "phosphor"
        },
      }
    },
  },
})
