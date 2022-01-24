<template>
  <div
    class="base-slider"
    role="slider"
    ref="slider"
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
      class="base-slider__hidden-input"
      type="hidden"
      :name="name"
      :value="value"
      v-if="name"
    />

    <div class="base-slider__icon" v-if="hasIcon">
      <slot name="icon">
        <feather :type="icon" size="20" />
      </slot>
    </div>

    <div
      class="base-slider__track"
      ref="track"
      @mousedown="onDragStart"
      @touchstart="onDragStart"
    >
      <div class="base-slider__track-background bg-gray-300 dark:bg-gray-500">
        <div v-if="snapToSteps">
          <span
            class="base-slider__snap-point"
            :style="{ left: 100 * relativeValue(point) + '%' }"
            v-for="(point, idx) in snapPoints"
            :key="idx"
          ></span>
        </div>
      </div>

      <div
        class="base-slider__track-fill bg-primary-400"
        :style="fillStyle"
      ></div>

      <div
        class="base-slider__thumb bg-primary-400"
        ref="thumb"
        :style="thumbStyle"
      >
        <div class="base-slider__marker text-xs" v-if="showMarker">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
          >
            <path
              d="M11 .5c-1.7.2-3.4.9-4.7 2-1.1.9-2 2-2.5 3.2-1.2 2.4-1.2 5.1-.1 7.7 1.1 2.6 2.8 5 5.3 7.5 1.2 1.2 2.8 2.7 3 2.7 0 0 .3-.2.6-.5 3.2-2.7 5.6-5.6 7.1-8.5.8-1.5 1.1-2.6 1.3-3.8.2-1.4 0-2.9-.5-4.3-1.2-3.2-4.1-5.4-7.5-5.8-.5-.2-1.5-.2-2-.2z"
            />
          </svg>

          <span class="base-slider__marker-text text-xs">{{ markerText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, onMounted, ref, watch } from "vue";
export default defineComponent({
  name: "base-slider",

  props: {
    name: String,
    tabindex: [String, Number],
    icon: String,
    modelValue: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
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
    markerValue: [String, Number],
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const initialValue = ref(props.modelValue);
    const isActive = ref(false);
    const isDragging = ref(false);
    const localValue = ref(props.modelValue);
    const slider = ref();
    const track = ref();
    const thumb = ref();

    const classes = computed(() => {
      return [
        { "is-dragging": isDragging.value },
        { "is-disabled": props.disabled },
        { "is-active": isActive.value },
        { "has-icon": hasIcon },
        { "has-marker": props.showMarker },
      ];
    });

    const hasIcon = computed(() => {
      return Boolean(props.icon);
    });

    const fillStyle = computed(() => {
      return { transform: "scaleX(" + relativeValue(localValue.value) + ")" };
    });

    const thumbStyle = computed(() => {
      return {
        left: relativeValue(localValue.value) * 100 + "%",
      };
    });

    const markerText = computed(() => {
      return props.markerValue === undefined
        ? props.modelValue
        : props.markerValue;
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
      emit("focus");
    };

    const onBlur = () => {
      isActive.value = false;
      emit("blur");
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
      emit("update:modelValue", value);
      emit("change", value);
    };

    const incrementValue = () => {
      setValueWithSnap(localValue.value + props.step);
    };

    const decrementValue = () => {
      setValueWithSnap(localValue.value - props.step);
    };

    const getTrackOffset = () => {
      let el = track.value;
      let offset = el.offsetLeft;

      while (el.offsetParent) {
        el = el.offsetParent;
        offset += el.offsetLeft;
      }

      return offset;
    };

    const getPointStyle = (point) => {
      return {
        left: point + "%",
      };
    };

    const initializeSlider = () => {
      document.addEventListener("touchend", onDragStop);
      document.addEventListener("mouseup", onDragStop);
      document.addEventListener("click", onExternalClick);
      document.addEventListener("touchstart", onExternalClick);
      initializeDrag();
    };

    const teardownSlider = () => {
      document.removeEventListener("touchend", onDragStop);
      document.removeEventListener("mouseup", onDragStop);
      document.removeEventListener("click", onExternalClick);
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

      document.addEventListener("touchmove", onDragMove);
      document.addEventListener("mousemove", onDragMove);

      emit("dragstart", localValue.value, e);
    };

    const onDragMove = (e) => {
      dragUpdate(e);
    };

    const dragUpdate = (e) => {
      const position = e.touches ? e.touches[0].pageX : e.pageX;
      const trackLength = track.value.offsetWidth;
      const relativeValue = (position - getTrackOffset()) / trackLength;
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

        document.removeEventListener("touchmove", onDragMove);
        document.removeEventListener("mousemove", onDragMove);

        emit("dragend", localValue.value, e);
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

    return {
      slider,
      track,
      thumb,
      initialValue,
      isActive,
      isDragging,
      localValue,
      classes,
      hasIcon,
      fillStyle,
      thumbStyle,
      markerText,
      snapPoints,
      moderatedMin,
      moderatedMax,
      focus,
      reset,
      onFocus,
      onBlur,
      onExternalClick,
      setValueWithSnap,
      setValue,
      incrementValue,
      decrementValue,
      getTrackOffset,
      getPointStyle,
      initializeSlider,
      teardownSlider,
      initializeDrag,
      onDragStart,
      onDragMove,
      dragUpdate,
      onDragStop,
      getNearestSnapPoint,
      relativeValue,
      moderateValue,
    };
  },
})
</script>

<style>
.base-slider {
  align-items: center;
  display: flex;
  outline: none;
}
.base-slider:not(.is-disabled).is-active:not(.has-marker)
  .base-slider__thumb::before,
.base-slider:not(.is-disabled).is-dragging:not(.has-marker)
  .base-slider__thumb::before {
  transform: scale(1);
}
.base-slider:not(.is-disabled).is-active .base-slider__marker,
.base-slider:not(.is-disabled).is-dragging .base-slider__marker {
  opacity: 1;
  transform: scale(1) translateY(-26px);
}
.base-slider:not(.is-disabled).is-active .base-slider__marker-text,
.base-slider:not(.is-disabled).is-dragging .base-slider__marker-text {
  color: white;
}
.base-slider:not(.is-disabled).is-active .base-slider__snap-point,
.base-slider:not(.is-disabled).is-dragging .base-slider__snap-point {
  opacity: 1;
}
.base-slider:not(.is-disabled).is-active .base-slider__icon .ui-icon,
.base-slider:not(.is-disabled).is-dragging .base-slider__icon .ui-icon {
  color: black;
}
.base-slider.is-disabled .base-slider__icon {
  opacity: 0.6;
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
.base-slider__icon {
  margin-right: 16px;
}
.base-slider__icon .ui-icon {
  color: white;
  transition: color 0.2s ease;
}
.base-slider__track {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 18px;
  margin: 0 auto;
  position: relative;
  width: 100%;
}
.base-slider__track-background,
.base-slider__track-fill {
  content: "";
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
  position: relative;
  width: 14px;
  z-index: 1;
  margin-left: -14px / 2;
}
.base-slider__thumb::before {
  background-color: #93c5fd;
  opacity: 0.3;
  border-radius: 50%;
  content: "";
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
