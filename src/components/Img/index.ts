import { defineComponent, h, onMounted, ref, toRefs, watch } from 'vue';
import RobustSpinner from '../Spinner/index.vue';
import { PhWarning } from '@phosphor-icons/vue';
export default defineComponent({
  name: 'RobustImg',

  props: {
    src: {
      type: String,
      required: true,
    },
    fallbackSrc: {
      type: String,
      default: undefined,
    },
  },

  emits: ['loaded', 'error'],

  setup(props, { emit }) {
    const loading = ref(true);
    const error = ref(false);

    const { src } = toRefs(props);

    const image = new Image();

    image.onload = () => {
      emit('loaded', true);
      loading.value = false;
    };

    image.onerror = (e) => {
      emit('error', e);
      error.value = true;
      loading.value = false;
    };

    onMounted(() => {
      image.src = src.value;
    });

    watch(src, () => {
      image.src = src.value;
    });

    return {
      error,
      loading,
    };
  },

  render() {
    if (this.loading) {
      return h(
        'div',
        {
          class: 'flex items-center justify-center',
        },
        h(RobustSpinner, {
          size: 24,
          stroke: 2,
        })
      );
    } else if (this.error) {
      if (this.fallbackSrc) {
        return h('img', {
          src: this.fallbackSrc,
        });
      } else {
        return h(PhWarning, {
          size: 20,
        });
      }
    } else {
      return h('img', {
        src: this.src,
      });
    }
  },
});
