<template>
  <div
    ref="slider"
    class="base-slider select-none"
    role="slider"
    :aria-valuemax="moderatedMax()"
    :aria-valuemin="moderatedMin()"
    :aria-valuenow="localValue"
    :class="classes"
    :tabindex="disabled ? null : tabindex || '0'"
    @blur="onBlur"
    @focus="onFocus"
    @keydown.down.prevent="decrementValue"
    @keydown.left.prevent="decrementValue"
    @keydown.right.prevent="incrementValue"
    @keydown.up.prevent="incrementValue"
  >
    <input
      v-if="name"
      class="base-slider__hidden-input"
      type="hidden"
      :name="name"
      :value="modelValue"
    />

    <div
      ref="track"
      class="base-slider__track relative"
      :class="[vertical ? 'vertical ' : '']"
      @mousedown="onDragStart"
      @touchstart="onDragStart"
    >
      <div
        class="base-slider__track-background bg-gray-300 dark:bg-gray-400"
        :class="[vertical ? 'vertical ' : '']"
      >
        <div v-if="snapToSteps">
          <span
            v-for="(point, idx) in snapPoints"
            :key="idx"
            class="base-slider__snap-point"
            :style="{
              [vertical ? 'bottom' : 'left']: 100 * relativeValue(point) + '%',
            }"
          ></span>
        </div>
      </div>

      <div
        class="base-slider__track-fill bg-primary-400"
        :class="[vertical ? 'vertical ' : '']"
        :style="fillStyle"
      ></div>

      <div
        ref="thumb"
        class="base-slider__thumb bg-primary-400"
        :class="[vertical ? 'vertical ' : '']"
        :style="thumbStyle"
      >
        <div
          v-if="showMarker"
          class="base-slider__marker text-xs"
          :class="[vertical ? 'vertical ' : '']"
        >
          <span class="text-xs text-gray-400 dark:text-gray-500">{{
            markerText
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const props = defineProps({
  name: {
    type: String,
    default: undefined,
  },
  tabindex: {
    type: [String, Number],
    default: undefined,
  },
  modelValue: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  step: {
    type: Number,
    default: 10,
  },
  snapToSteps: {
    type: Boolean,
    default: false,
  },
  showMarker: {
    type: Boolean,
    default: false,
  },
  markerValue: {
    type: [String, Number],
    default: undefined,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'focus',
  'blur',
  'update:modelValue',
  'change',
  'dragstart',
  'dragend',
]);

const initialValue = ref(props.modelValue);
const isActive = ref(false);
const isDragging = ref(false);
const localValue = ref(props.modelValue);
const slider = ref<HTMLDivElement>();
const track = ref<HTMLDivElement>();
const thumb = ref<HTMLDivElement>();

const classes = computed(() => {
  return [
    { 'is-dragging': isDragging.value },
    { 'is-disabled': props.disabled },
    { 'is-active': isActive.value },
    { 'has-marker': props.showMarker },
  ];
});

const fillStyle = computed(() => {
  console.log();

  return {
    transform: `scale(${
      !props.vertical ? relativeValue(localValue.value) : 1
    },  ${props.vertical ? relativeValue(localValue.value) : 1})`,
  };
});

const thumbStyle = computed(() => {
  return {
    left: props.vertical
      ? undefined
      : relativeValue(localValue.value) * 100 + '%',
    top: props.vertical
      ? 100 - relativeValue(localValue.value) * 100 + '%'
      : undefined,
  };
});

const markerText = computed(() => {
  return props.markerValue === undefined ? props.modelValue : props.markerValue;
});

const snapPoints = computed(() => {
  const points = [];
  let point = props.step * Math.ceil(moderatedMin() / props.step);

  while (point <= moderatedMax()) {
    points.push(point);
    point += props.step;
  }

  return points;
});

const moderatedMin = () => {
  return props.max > props.min ? props.min : 0;
};

const moderatedMax = () => {
  return props.max > props.min ? props.max : 100;
};

const focus = () => {
  slider.value.focus();
};

const reset = () => {
  setValue(initialValue);
};

const onFocus = () => {
  isActive.value = true;
  emit('focus');
};

const onBlur = () => {
  isActive.value = false;
  emit('blur');
};

const onExternalClick = (e) => {
  if (!slider.value.contains(e.target)) {
    onBlur();
  }
};

const setValueWithSnap = (value) => {
  value = moderateValue(value);

  if (props.snapToSteps) {
    value = getNearestSnapPoint(value);
  }

  setValue(value);
};

const setValue = (value) => {
  value = moderateValue(value);

  if (value === localValue.value) {
    return;
  }

  localValue.value = value;
  emit('update:modelValue', value);
  emit('change', value);
};

const incrementValue = () => {
  setValueWithSnap(localValue.value + props.step);
};

const decrementValue = () => {
  setValueWithSnap(localValue.value - props.step);
};

const getPointStyle = (point) => {
  return {
    left: point + '%',
  };
};

const initializeSlider = () => {
  document.addEventListener('touchend', onDragStop);
  document.addEventListener('mouseup', onDragStop);
  document.addEventListener('click', onExternalClick);
  document.addEventListener('touchstart', onExternalClick);
  initializeDrag();
};

const teardownSlider = () => {
  document.removeEventListener('touchend', onDragStop);
  document.removeEventListener('mouseup', onDragStop);
  document.removeEventListener('click', onExternalClick);
};

const initializeDrag = () => {
  const value = moderateValue(localValue.value ? localValue.value : 0);
  setValue(value);
};

const onDragStart = (e) => {
  if (props.disabled) {
    return;
  }

  if (!isActive.value) {
    onFocus();
  }

  isDragging.value = true;
  dragUpdate(e);

  document.addEventListener('touchmove', onDragMove);
  document.addEventListener('mousemove', onDragMove);

  emit('dragstart', localValue.value, e);
};

const onDragMove = (e) => {
  dragUpdate(e);
};

const dragUpdate = (e) => {
  if (!track.value) {
    return;
  }

  const bounds = track.value.getBoundingClientRect();

  let relativeValue: number;
  if (props.vertical) {
    const position = e.touches ? e.touches[0].pageY : e.pageY;
    const trackLength = track.value.offsetHeight;
    relativeValue = (bounds.bottom - position) / trackLength;
  } else {
    const position = e.touches ? e.touches[0].pageX : e.pageX;
    const trackLength = track.value.offsetWidth;
    relativeValue = (position - bounds.left) / trackLength;
  }

  const value = moderateValue(
    moderatedMin() + relativeValue * (moderatedMax() - moderatedMin())
  );

  if (isDragging.value) {
    setValue(Math.round(value));
  }
};

const onDragStop = (e) => {
  if (isDragging.value) {
    isDragging.value = false;

    if (props.snapToSteps && props.modelValue % props.step !== 0) {
      setValueWithSnap(props.modelValue);
    }

    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('mousemove', onDragMove);

    emit('dragend', localValue.value, e);
  }
};

const getNearestSnapPoint = (value) => {
  const previousSnapPoint = Math.floor(value / props.step) * props.step;
  const nextSnapPoint = previousSnapPoint + props.step;
  const midpoint = (previousSnapPoint + nextSnapPoint) / 2;

  if (previousSnapPoint < moderatedMin()) {
    if (nextSnapPoint > moderatedMax()) {
      return value;
    }
    return nextSnapPoint;
  }
  if (value >= midpoint && nextSnapPoint <= moderatedMax()) {
    return nextSnapPoint;
  }
  return previousSnapPoint;
};

const relativeValue = (value) => {
  return (value - moderatedMin()) / (moderatedMax() - moderatedMin());
};

const moderateValue = (value) => {
  if (value < moderatedMin()) {
    return moderatedMin();
  }

  if (value > moderatedMax()) {
    return moderatedMax();
  }

  return value;
};

// debugging needs to be done
/*watch(props.value, () => {
      setValue(props.modelValue);
    });*/

onMounted(() => {
  initializeSlider();
});

onBeforeUnmount(() => {
  teardownSlider();
});

defineExpose({
  getPointStyle,
  focus,
  reset,
});
</script>

<style>
.base-slider {
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
}

.base-slider:not(.is-disabled).is-active .base-slider__marker,
.base-slider:not(.is-disabled).is-dragging .base-slider__marker {
  opacity: 1;
  transform: scale(1) translateY(-26px);
}

.base-slider:not(.is-disabled).is-active .base-slider__marker.vertical,
.base-slider:not(.is-disabled).is-dragging .base-slider__marker.vertical {
  opacity: 1;
  transform: scale(1) translateX(26px);
}

.base-slider:not(.is-disabled).is-active .base-slider__marker-text,
.base-slider:not(.is-disabled).is-dragging .base-slider__marker-text {
  color: white;
}

.base-slider:not(.is-disabled).is-active .base-slider__snap-point,
.base-slider:not(.is-disabled).is-dragging .base-slider__snap-point {
  opacity: 1;
}

.base-slider.is-disabled .base-slider__track {
  cursor: default;
}

.base-slider.is-disabled .base-slider__track-fill {
  background-color: transparent;
}

.base-slider.is-disabled .base-slider__thumb {
  background-color: #ddd;
  border: 2px solid white;
}

.base-slider__track {
  cursor: default;
  height: 18px;
  margin: 0 auto;
  position: relative;
  min-width: 60px;
  width: 100%;
}

.base-slider__track.vertical {
  flex-direction: column;
  height: 100%;
  min-height: 60px;
  min-width: 18px;
  width: 18px;
}

.base-slider__track-background,
.base-slider__track-fill {
  content: '';
  display: block;
  height: 3px;
  left: 0;
  position: absolute;
  top: 7px;
}

.base-slider__track-background.vertical,
.base-slider__track-fill.vertical {
  content: '';
  display: block;
  height: 100%;
  width: 3px;
  top: 0;
  position: absolute;
  left: 7px;
}

.base-slider__track-background {
  width: 100%;
}

.base-slider__track-background.vertical {
  height: 100%;
}

.base-slider__snap-point {
  background-color: rgba(0, 0, 0, 0.25);
  height: 3px;
  opacity: 0;
  position: absolute;
  transition: opacity 0.2s ease;
  width: 2px;
  z-index: 1;
}

.base-slider__track-fill {
  transform-origin: left;
  width: 100%;
}
.base-slider__track-fill.vertical {
  transform-origin: bottom;
  height: 100%;
}

.base-slider__thumb {
  border-radius: 50%;
  cursor: inherit;
  display: block;
  height: 14px;
  left: 0;
  position: absolute;
  width: 14px;
  z-index: 1;
  margin-left: -7px;
  bottom: 2px;
}

.base-slider__thumb.vertical {
  margin-left: 2px;
  margin-top: -7px;
  bottom: 0;
}

.base-slider__thumb::before {
  background-color: #93c5fd;
  opacity: 0.3;
  border-radius: 50%;
  content: '';
  display: block;
  height: 36px;
  margin-left: -12px;
  margin-top: -12px;
  position: absolute;
  transform-origin: center;
  transform: scale(0);
  transition: transform 0.2s ease;
  width: 36px;
}

.base-slider__marker {
  height: 24px;
  opacity: 0;
  position: absolute;
  transform: scale(0) translateY(0);
  transition: all 0.2s ease;
  margin-left: -5px;
  width: 24px;
  user-select: none;
}

.base-slider__marker svg {
  fill: #7f97ee;
  height: 24px;
  width: 24px;
}

.base-slider__marker-text {
  color: white;
  font-size: 13px;
  font-weight: 600;
  left: 4.5px;
  position: absolute;
  text-align: center;
  top: 1px;
  transition: color 0.2s ease;
  width: 14px;
}

.base-slider--is-dragging {
  user-select: none;
}
</style>
