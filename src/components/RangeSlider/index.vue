<template>
  <div
    ref="slider"
    class="base-slider relative"
    role="slider"
    :aria-valuemax="moderatedMax()"
    :aria-valuemin="moderatedMin()"
    :aria-valuenow="localValue[0]"
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
      :value="modelValue[0]"
    />

    <div
      ref="track"
      class="base-slider__track relative w-full"
      @mousedown="onDragStart"
      @touchstart="onDragStart"
    >
      <div class="base-slider__track-background bg-gray-300 dark:bg-gray-400">
        <div v-if="snapToSteps">
          <span
            v-for="(point, idx) in snapPoints"
            :key="idx"
            class="base-slider__snap-point"
            :style="{ left: 100 * relativeValue(point) + '%' }"
          ></span>
        </div>
      </div>

      <div
        class="base-slider__track-fill bg-primary-400"
        :style="fillStyle"
      ></div>

      <div
        ref="firstThumb"
        class="base-slider__thumb bg-primary-400"
        :style="firstThumbStyle"
      >
        <div v-if="showMarker" class="base-slider__marker text-xs">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" -->
          <!--   height="36"> -->
          <!--   <path -->
          <!--     d="M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z" /> -->
          <!-- </svg> -->

          <span class="text-sm text-gray-400">{{ markerText() }}</span>
        </div>
      </div>
      <div
        ref="secondThumb"
        class="base-slider__thumb bg-primary-400"
        :style="secondThumbStyle"
      >
        <div v-if="showMarker" class="base-slider__marker text-xs">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" -->
          <!--   height="36"> -->
          <!--   <path -->
          <!--     d="M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z" /> -->
          <!-- </svg> -->

          <span class="text-sm text-gray-400">{{ markerText(1) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
  toRefs,
} from 'vue';

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
    type: Array as PropType<number[]>,
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

const {
  min,
  max,
  markerValue,
  disabled,
  showMarker,
  step,
  snapToSteps,
  modelValue,
} = toRefs(props);

const initialValue = ref(modelValue.value);
const isActive = ref(false);
const isDragging = ref(false);
const localValue = ref<number[]>(modelValue.value);
const slider = ref();
const track = ref();
const firstThumb = ref();
const secondThumb = ref();
const handleIndex = ref(0);

if (
  Array.isArray(modelValue.value) &&
  (modelValue.value.length > 2 || modelValue.value.length < 2)
) {
  throw Error('modelValue must be number or array of 2 numbers');
}

const classes = computed(() => {
  return [
    { 'is-dragging': isDragging.value },
    { 'is-disabled': disabled.value },
    { 'is-active': isActive.value },
    { 'has-marker': showMarker.value },
  ];
});

const fillStyle = computed(() => {
  const scaleX =
    relativeValue(localValue.value[1]) - relativeValue(localValue.value[0]);
  return {
    transform: 'scaleX(' + scaleX + ')',
    left: firstThumbStyle.value.left,
  };
});

const firstThumbStyle = computed(() => {
  return {
    left: relativeValue(localValue.value[0]) * 100 + '%',
  };
});

const secondThumbStyle = computed(() => {
  return {
    left: relativeValue(localValue.value[1]) * 100 + '%',
  };
});

const markerText = (index = 0) => {
  return markerValue.value ?? localValue.value[index];
};

const snapPoints = computed(() => {
  const points = [];
  let point = step.value * Math.ceil(moderatedMin() / step.value);

  while (point <= moderatedMax()) {
    points.push(point);
    point += step.value;
  }

  return points;
});

const moderatedMin = () => {
  return max.value > min.value ? min.value : 0;
};

const moderatedMax = () => {
  return max.value > min.value ? max.value : 100;
};

const focus = () => {
  slider.value.focus();
};

const reset = () => {
  for (let i = 0; i < 2; i++) {
    handleIndex.value = i;
    setValue(initialValue.value[i]);
  }
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
  if (!slider.value?.contains(e.target)) {
    onBlur();
  }
};

const setValueWithSnap = (value) => {
  value = moderateValue(value);

  if (snapToSteps.value) {
    value = getNearestSnapPoint(value);
  }

  setValue(value);
};

const setValue = (value: number) => {
  value = moderateValue(value);

  if (value === localValue.value[handleIndex.value]) {
    return;
  }

  if (handleIndex.value === 0 && value >= localValue.value[1]) {
    value = localValue.value[1];
  }
  if (handleIndex.value === 1 && value <= localValue.value[0]) {
    value = localValue.value[0];
  }

  localValue.value[handleIndex.value] = value;
  emit('update:modelValue', localValue.value);
  emit('change', localValue.value);
};

const incrementValue = () => {
  setValueWithSnap(localValue.value[handleIndex.value] + step.value);
};

const decrementValue = () => {
  setValueWithSnap(localValue.value[handleIndex.value] - step.value);
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
  // const value = moderateValue(localValue.value ? localValue.value : 0)
  // setValue(value)
  reset();
};

const onDragStart = (e) => {
  if (disabled.value) {
    return;
  }

  if (!isActive.value) {
    onFocus();
  }

  const value = getDragValue(e);
  handleIndex.value = closestHandle(value);

  console.log(handleIndex.value);

  isDragging.value = true;
  dragUpdate(e);

  document.addEventListener('touchmove', onDragMove);
  document.addEventListener('mousemove', onDragMove);

  emit('dragstart', localValue.value, e);
};

const onDragMove = (e) => {
  dragUpdate(e);
};

const closestHandle = (value: number) => {
  let tempHandleIndex = 0;
  if (localValue.value[0] === localValue.value[1]) {
    const avg = localValue.value[0];
    if (value > avg) {
      return 1;
    }
    return 0;
  }

  const firstHandleDiff = Math.abs(localValue.value[0] - value);
  const secondHandleDiff = Math.abs(localValue.value[1] - value);

  if (secondHandleDiff < firstHandleDiff) {
    tempHandleIndex = 1;
  }
  return tempHandleIndex;
};

const getDragValue = (e) => {
  const sliderOffsetLeft = track.value!.getBoundingClientRect().left;
  const position = e.touches ? e.touches[0].pageX : e.pageX;
  const trackLength = track.value.offsetWidth;
  const relativeValue = (position - sliderOffsetLeft) / trackLength;

  const value = moderateValue(
    moderatedMin() + relativeValue * (moderatedMax() - moderatedMin())
  );
  return Math.round(value);
};

const dragUpdate = (e) => {
  const value = getDragValue(e);

  if (isDragging.value) {
    setValue(Math.round(value));
  }
};

const onDragStop = (e) => {
  if (isDragging.value) {
    isDragging.value = false;

    if (
      snapToSteps.value &&
      modelValue.value[handleIndex.value] % step.value !== 0
    ) {
      setValueWithSnap(modelValue.value[handleIndex.value]);
    }

    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('mousemove', onDragMove);

    emit('dragend', localValue.value, e);
  }
};

const getNearestSnapPoint = (value) => {
  const previousSnapPoint = Math.floor(value / step.value) * step.value;
  const nextSnapPoint = previousSnapPoint + step.value;
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

  //if(handleIndex.value === 0 && value >= localValue.value[1]) return localValue.value[1]
  //if(handleIndex.value === 1 && value <= localValue.value[0]) return localValue.value[0]

  return value;
};

onMounted(() => {
  initializeSlider();
});

onBeforeUnmount(() => {
  teardownSlider();
});

defineExpose({
  getPointStyle,
  focus,
});
</script>

<style>
.base-slider {
  align-items: center;
  display: flex;
  outline: none;
}

.base-slider:not(.is-disabled).is-active .base-slider__marker,
.base-slider:not(.is-disabled).is-dragging .base-slider__marker {
  opacity: 1;
  transform: scale(1) translateY(-26px);
}

/* .base-slider:not(.is-disabled).is-active .base-slider__marker-text, */
/* .base-slider:not(.is-disabled).is-dragging .base-slider__marker-text { */
/*   color: white; */
/* } */

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
  align-items: center;
  cursor: default;
  display: flex;
  height: 18px;
  margin: 0 auto;
  position: relative;
  width: 100%;
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

.base-slider__track-background {
  width: 100%;
}

.base-slider__snap-point {
  background-color: rgba(0, 0, 0, 0.75);
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
