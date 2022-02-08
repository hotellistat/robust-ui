<template>
  <div class="input-container">
    <label>
      <span class="label-name">{{ label }}</span>
      <div class="input-section">
        <div v-if="prefix" class="prefix" :class="{ small }">{{ prefix }}</div>

        <textarea
          v-bind="$attrs"
          :class="{ small, prefixed: prefix, suffixed: suffix }"
          @input="onInput"
        ></textarea>

        <div v-if="suffix" class="suffix" :class="{ small }">{{ suffix }}</div>
      </div>
      <div v-if="helper" class="helper">{{ helper }}</div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

  inheritAttrs: false,
  model: {
    event: 'update',
  },
  props: {
    label: {
      type: String,
    },
    small: {
      type: Boolean,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    helper: {
      type: String,
    },
  },

  setup(props, { emit }) {
    const onInput = (event: any) => {
      emit('update', event.value)
    }

    return {
      onInput,
    }
  },
})
</script>

<style lang="postcss" scoped>
.input-container {
  display: inline-block;
  margin-bottom: 20px;
}
.label-name {
  user-select: none;
  display: block;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 5px;
  background-color: white;
  font-size: 12px;
  color: #525252;
}
.input-section {
  display: flex;
  flex-direction: row;
}

.prefix,
.suffix {
  user-select: none;
  color: #8b8b8b;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(210, 9%, 96%);
  padding: 0 10px;
  border: 2px solid rgb(224, 224, 224);
}
.prefix {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-right: none;
}
.suffix {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left: none;
}

.small {
  height: 36px;
}

label {
  height: 100%;
}
textarea {
  resize: vertical;

  padding: 10px 10px;
  height: 100%;
  font-size: 1rem;
  display: block;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  border-radius: 6px;
  color: #353535;
  border: 1px solid transparent;
  background-color: hsl(210, 9%, 96%);
  transition: border 150ms ease-in-out;

  &.prefixed {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }

  &.suffixed {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  &:invalid {
    border: 1px solid theme("colors.yellow.500");
  }

  &:focus {
    border: 1px solid theme("colors.primary.500");
  }

  &:disabled {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
  }
}

.helper {
  margin-top: 6px;
  font-size: 10pt;
  letter-spacing: 0px;
  color: #9c9c9c;
}
</style>
