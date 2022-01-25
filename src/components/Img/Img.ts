import { defineComponent, h, onMounted, ref } from 'vue'
import HsSpinner from '../Spinner/Spinner.vue'
export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
    },
  },

  setup(props, { emit }) {
    const loading = ref(true)

    const image = new Image()

    image.onload = () => {
      emit('loaded', true)
      loading.value = false
    }

    onMounted(() => {
      image.src = props.src
    })

    return {
      loading,
    }
  },

  render() {
    if (this.loading) {
      return h(
        'div',
        {
          class: 'flex items-center justify-center',
        },
        h(HsSpinner)
      )
    } else {
      return h('img', {
        src: this.src,
      })
    }
  },
})
