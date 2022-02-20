<template>
  <div v-show="active"
       role="tabpanel"
       :id="tabId"
       :aria-hidden="!active"
       :aria-labelledby="`step-${tabId}`">
    <div class="text-red-600 sm:text-base text-sm flex justify-center rounded-md overflow-hidden p-1 bg-red-400 border border-red-600" v-if="validationError.length > 1">{{ validationError }}</div>
    <slot :active="active">
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, inject, onMounted, ref } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    beforeChange: {
      type: Function
    }
  },
  setup () {
    const instance = getCurrentInstance()
    const addTab: any = inject('addTab')
    const active = ref(false)
    const tabId = ref('')
    const validationError = ref('')
    const validated = ref(false)

    const activate = () => {
      active.value = true
    }

    const deactivate = () => {
      active.value = false
      setValidationError("")
    }

    const validate = () => {
      validated.value = true
    }

    const devalidate = () => {
      console.log('called devalidate')
      validated.value = false
    }

    const setTabId = (id: string) => {
      tabId.value = id
    }

    const setValidationError = (error: string) => {
      validationError.value = error
    }

    onMounted(() => {
      addTab(instance)
    })

    return {
      addTab,
      tabId,
      activate,
      deactivate,
      setTabId,
      active,
      validationError,
      validated,
      validate,
      devalidate,
      setValidationError
    }
  }
})
</script>

<style></style>
