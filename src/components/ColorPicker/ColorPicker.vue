<template>
  <div
    class="hu-color-picker shadow"
    :class="{ light: isLightTheme }"
    :style="{ width: totalWidth + 'px' }"
  >
    <div class="color-set">
      <Saturation
        ref="saturation"
        :color="rgbString"
        :hsv="hsv"
        :size="hueHeight"
        @selectSaturation="selectSaturation"
      />
      <Hue
        ref="hue"
        :hsv="hsv"
        :width="hueWidth"
        :height="hueHeight"
        @selectHue="selectHue"
      />
    </div>
    <div :style="{ height: previewHeight + 'px' }" class="color-show">
      <Preview
        :color="rgbaString"
        :width="previewWidth"
        :height="previewHeight"
      />
    </div>
    <Box name="HEX" :color="modelHex" @inputColor="inputHex" />
    <Box name="RGBA" :color="modelRgba" @inputColor="inputRgba" />
    <Colors
      :color="rgbaString"
      :colors-default="colorsDefault"
      :colors-history-key="colorsHistoryKey"
      @selectColor="selectColor"
    />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  toRefs,
  watchEffect,
  nextTick,
} from 'vue'
import { setColorValue, rgb2hex } from './composable'

import Saturation from './Saturation.vue'
import Hue from './Hue.vue'
import Preview from './Preview.vue'
import Box from './Box.vue'
import Colors from './Colors.vue'

export default defineComponent({
  components: {
    Saturation,
    Hue,
    Preview,
    Box,
    Colors,
  },
  emits: ['changeColor'],
  props: {
    color: {
      type: String,
      default: '#000000',
    },
    theme: {
      type: String,
      default: 'dark',
    },
    colorsDefault: {
      type: Array,
      default: () => [
        '#000000',
        '#FFFFFF',
        '#FF1900',
        '#F47365',
        '#FFB243',
        '#FFE623',
        '#6EFF2A',
        '#1BC7B1',
        '#00BEFF',
        '#2E81FF',
        '#5D61FF',
        '#FF89CF',
        '#FC3CAD',
        '#BF3DCE',
        '#8E00A7',
      ],
    },
    colorsHistoryKey: {
      type: String,
      default: 'vue-colorpicker-history',
    },
  },
  setup(props, { emit }) {
    const hueWidth = ref(15)
    const hueHeight = ref(152)
    const previewHeight = ref(20)
    const modelRgba = ref('')
    const modelHex = ref('')
    const r = ref(0)
    const g = ref(0)
    const b = ref(0)
    const a = ref(1)
    const h = ref(0)
    const s = ref(0)
    const v = ref(0)
    const hue = ref()
    const saturation = ref()

    const { theme, color } = toRefs(props)

    const isLightTheme = computed((): boolean => {
      return theme.value === 'light'
    })

    const totalWidth = computed((): number => {
      return hueHeight.value + (hueWidth.value + 8) * 2
    })

    const previewWidth = computed((): number => {
      return totalWidth.value - previewHeight.value
    })

    const rgba = computed((): Record<string, unknown> => {
      return {
        r: r.value,
        g: g.value,
        b: b.value,
        a: a.value,
      }
    })

    const hsv = computed((): Record<string, unknown> => {
      return {
        h: h.value,
        s: s.value,
        v: v.value,
      }
    })

    const rgbString = computed((): string => {
      return `rgb(${r.value}, ${g.value}, ${b.value})`
    })

    const rgbStringShort = computed((): string => {
      return `${r.value}, ${g.value}, ${b.value}`
    })

    const rgbaString = computed((): string => {
      return `rgb(${rgbStringShort.value})`
    })

    const hexString = computed((): string => {
      return rgb2hex(rgba.value, true)
    })

    const setText = () => {
      modelHex.value = hexString.value
      modelRgba.value = rgbStringShort.value
    }

    onMounted(() => {
      const rgbaValues = setColorValue(color.value)
      r.value = rgbaValues.r
      g.value = rgbaValues.g
      b.value = rgbaValues.b
      a.value = rgbaValues.a
      h.value = rgbaValues.h
      s.value = rgbaValues.s
      v.value = rgbaValues.v
      setText()
    })

    watchEffect(() => {
      emit('changeColor', {
        rgba: rgba.value,
        hsv: hsv.value,
        hex: modelHex.value,
      })
    })

    const selectSaturation = (color: any) => {
      const rgbaValues = setColorValue(color)
      r.value = rgbaValues.r
      g.value = rgbaValues.g
      b.value = rgbaValues.b
      a.value = rgbaValues.a
      h.value = rgbaValues.h
      s.value = rgbaValues.s
      v.value = rgbaValues.v
      setText()
    }

    const selectHue = (color: any) => {
      const rgbaValues = setColorValue(color)
      r.value = rgbaValues.r
      g.value = rgbaValues.g
      b.value = rgbaValues.b
      a.value = rgbaValues.a
      h.value = rgbaValues.h
      s.value = rgbaValues.s
      v.value = rgbaValues.v
      setText()
      nextTick(() => {
        saturation.value.renderColor(saturation.value.canvasSaturation)

        saturation.value.renderSlide()
      })
    }

    const inputHex = (color: string) => {
      const rgbaValues = setColorValue(color)
      r.value = rgbaValues.r
      g.value = rgbaValues.g
      b.value = rgbaValues.b
      a.value = rgbaValues.a
      h.value = rgbaValues.h
      s.value = rgbaValues.s
      v.value = rgbaValues.v
      modelHex.value = color
      modelRgba.value = rgbStringShort.value
      nextTick(() => {
        saturation.value.renderColor(saturation.value.canvasSaturation)
        saturation.value.renderSlide()
        hue.value.renderSlide()
      })
    }

    const inputRgba = (color: string) => {
      const rgbaValues = setColorValue(color)
      r.value = rgbaValues.r
      g.value = rgbaValues.g
      b.value = rgbaValues.b
      a.value = rgbaValues.a
      h.value = rgbaValues.h
      s.value = rgbaValues.s
      v.value = rgbaValues.v
      modelHex.value = hexString.value
      modelRgba.value = `${r.value}, ${g.value}, ${b.value}`
      nextTick(() => {
        saturation.value.renderColor(saturation.value.canvasSaturation)
        saturation.value.renderSlide()
        hue.value.renderSlide()
      })
    }

    const selectColor = (color: string) => {
      const rgbaValues = setColorValue(color)
      r.value = rgbaValues.r
      g.value = rgbaValues.g
      b.value = rgbaValues.b
      a.value = rgbaValues.a
      h.value = rgbaValues.h
      s.value = rgbaValues.s
      v.value = rgbaValues.v
      setText()
      nextTick(() => {
        saturation.value.renderColor(saturation.value.canvasSaturation)
        saturation.value.renderSlide()
        hue.value.renderSlide()
      })
    }

    return {
      hueWidth,
      hueHeight,
      previewHeight,
      modelRgba,
      modelHex,
      r,
      g,
      b,
      a,
      h,
      s,
      v,
      isLightTheme,
      totalWidth,
      previewWidth,
      rgba,
      hsv,
      rgbString,
      rgbStringShort,
      rgbaString,
      hexString,
      setText,
      selectSaturation,
      selectHue,
      inputHex,
      inputRgba,
      selectColor,
      saturation,
      hue,
      color,
      theme,
    }
  },
})
</script>

<style>
.hu-color-picker {
  padding: 10px;
  background: #1d2024;
  border-radius: 4px;
  z-index: 1;
}

.hu-color-picker.light {
  background: #f7f8f9;
}

.hu-color-picker .color-set {
  display: flex;
}

.name {
  background: #e7e8e9;
}

.value {
  color: #666;
  background: #eceef0;
}

.colors.history {
  border-top: 1px solid #eee;
}

canvas {
  vertical-align: top;
}

.hu-color-picker .color-show {
  margin-top: 8px;
  display: flex;
}
</style>
