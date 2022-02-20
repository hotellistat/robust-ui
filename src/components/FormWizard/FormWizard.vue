<template>
  <div class="flex flex-col gap-y-3 w-full">
    <div class="flex items-center gap-x-2">

      <div v-if="stepsFinished() > 0" class="flex items-center gap-x-2">
        <PhArrowLeft class="text-gray-400"/>
        <div
          class="
            flex
            items-center
            justify-center
            text-center
            rounded-full
            cursor-pointer
            sm:h-8
            sm:w-8
            h-8
            w-8
            text-white
            bg-hs-green-30
          "
          @click="navigateToTab(0)"
        >
          <div>+{{ stepsFinished() }}</div>
        </div>
        <div class="flex items-center sm:gap-x-4 gap-x-2 font-semibold text-gray-400">
          <div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
        </div>
        <!-- <div class="flex items-center gap-x-4 font-semibold text-gray-400">
          <div class="h-0.5 w-2 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="h-0.5 w-2 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="h-0.5 w-2 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="h-0.5 w-2 bg-gray-300 dark:bg-gray-600">
          </div>
        </div> -->
      </div>
      
      <slot
        name="step"
        v-for="(tab, index) in displayedTabs"
        :key="index"
        :tab="tab"
        :index="index"
      >

        <div class="flex items-center" :class="[
            isOnLastDisplayedStep(index) ? 'gap-x-2' : 'gap-x-0 sm:gap-x-2'
          ]
        ">
            <div
            class="
              flex
              items-center
              justify-center
              rounded-full
              cursor-pointer
              sm:h-8
              sm:w-8
              h-8
              w-8
              text-gray-400
            "
            :class="[
              isActive(tab) ? 'bg-primary-400 text-white' : '',
              isValidated(tab) && !isActive(tab) ? 'bg-hs-green-30 text-white' : '',
              !isValidated(tab) && !isActive(tab) ? 'bg-gray-300 dark:bg-gray-700 text-gray-500' : ''
            ]"
            @click="navigateToTab(index)"
          >
            <div v-if="!isValidated(tab)">{{ index + 1 }}</div>
            <div v-else>
                <PhCheck></PhCheck>
              </div>
          </div>
          <!-- labels -->
          <div class="sm:flex hidden w-fit" :class="[
                isActive(tab) ? 'dark:text-gray-300 text-gray-500' : 'text-gray-400'
              ]"
          >
              {{tab.ctx.title}}
          </div>
          <!-- label line -->
          <div v-if="isOnLastDisplayedStep(index)" class="h-0.5 sm:w-16 w-4" :class="[
            isValidated(tab) ? 'bg-hs-green-30' : 'bg-gray-300 dark:bg-gray-600'
          ]">
          </div>
        </div>
      </slot>
      <div v-if="stepsLeft() > 0" class="flex items-center gap-x-2">
        <div class="flex items-center sm:gap-x-4 gap-x-2 font-semibold text-gray-400">
          <div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
          <div class="sm:flex hidden h-1 rounded-full w-1 bg-gray-300 dark:bg-gray-600">
          </div>
        </div>
        <div
          class="
            flex
            items-center
            justify-center
            rounded-full
            cursor-pointer
            sm:h-8
            sm:w-8
            h-8
            w-8
            bg-gray-300
            text-gray-500
            dark:bg-gray-700
          "
          @click="navigateToTab(0)"
        >
          <div>+{{ stepsLeft() }}</div>
        </div>
        <PhArrowRight class="text-gray-400"/>
      </div>
    </div>
    <div class="bg-white dark:bg-gray-700 rounded-md overflow-hidden shadow p-5">
      <div ref="defaultSlot" class="py-3">
        <slot />
      </div>
      <div class="flex justify-between">
        <hs-button @click="prevTab" :disabled="loading" variant="muted">BACK</hs-button>
        <hs-button @click="nextTab" :disabled="loading" v-if="isLastStep">FINISH</hs-button>
        <hs-button @click="nextTab" :disabled="loading" v-else>NEXT</hs-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, provide, ref, toRefs } from 'vue'
import Button from '../Button/Button.vue'
import { PhCheck, PhArrowLeft, PhDotsThree, PhArrowRight } from '@dnlsndr/vue-phosphor-icons'

export default defineComponent({
  components: {
    'hs-button': Button,
    PhCheck,
    PhArrowLeft,
    PhDotsThree,
    PhArrowRight
  },
  props: {
    validateOnBack: {
      type: Boolean,
      default: false
    },
    numberOfDisplayedSteps: {
      type: Number,
      default: 3
    }
  },
  setup (props, { emit }) {
    const { validateOnBack, numberOfDisplayedSteps } = toRefs(props)
    const defaultSlot = ref()
    const tabs = ref<any>([])
    const activeTabIndex = ref(Number.POSITIVE_INFINITY)
    const loading = ref(false)
    const maxStep = ref(0)
    const displayedTabs = ref()

    const DISPLAY_NUMBER_OF_TABS = numberOfDisplayedSteps.value

    const addTab = (item: any) => {
      console.log(tabs.value)
      const nodes = Array.prototype.slice.call(defaultSlot.value.children)
      const index = nodes.indexOf(item.vnode.el)
      item.ctx.setTabId(`${item.ctx.title.replace(/ /g, '')}${index}`)
      tabs.value.splice(index, 0, item)
      if (index < activeTabIndex.value) {
        maxStep.value = index
        changeTab(activeTabIndex.value + 1, index)
      }
    }

    const reset = () => {
      maxStep.value = 0
      navigateToTab(0)
    }

    const isActive = (tab) => {
        return tab.ctx.active
    }

    const isValidated = (tab) => {
      return tab.ctx.validated
    }

    const getTabs = (oldStepIndex: number | null, newStepIndex: number | null) => {
      // if there's no values getting initial number of DISPLAY_NUMBER_OF_TABS tabs or 
      // all tabs if tabs length is less than DISPLAY_NUMBER_OF_TABS
      if(oldStepIndex === null && newStepIndex === null) {
        const endStep = (activeTabIndex.value + DISPLAY_NUMBER_OF_TABS) <= tabs.value.length ?  activeTabIndex.value + DISPLAY_NUMBER_OF_TABS : tabs.value.length
        return tabs.value.slice(activeTabIndex.value, endStep)
      }

      // if switched back to previous step from first step of displayed steps
      // displaying previous DISPLAY_NUMBER_OF_TABS where active step is last step
      if(oldStepIndex > newStepIndex && oldStepIndex % DISPLAY_NUMBER_OF_TABS == 0) {
        return tabs.value.slice(oldStepIndex - DISPLAY_NUMBER_OF_TABS, oldStepIndex)
      }

      if (newStepIndex % DISPLAY_NUMBER_OF_TABS == 0) {
          const endStep = newStepIndex + DISPLAY_NUMBER_OF_TABS <= tabs.value.length ? newStepIndex + DISPLAY_NUMBER_OF_TABS : tabs.value.length
          return tabs.value.slice(newStepIndex, endStep)
      }

      return displayedTabs.value
    }

    const isOnLastDisplayedStep = (index: number) => {
      return index < displayedTabs.value.length - 1
    }

    onMounted(() => {
      console.log("called mount")
      displayedTabs.value = getTabs(null, null)
    })

    const activateAll = () => {
      maxStep.value = tabs.value.length - 1
    }

    provide('addTab', addTab)

    const isPromise = (func: any) => {
      return func?.then && typeof func.then === 'function'
    }

    const isLastStep = computed(() => {
      return activeTabIndex.value === tabCount.value - 1
    })

    const tabCount = computed(() => {
      return tabs.value.length
    })

    const setValidationError = (error: string | null) => {
      tabs.value[activeTabIndex.value].ctx.setValidationError(error)
      if(error) tabs.value[activeTabIndex.value].ctx.devalidate()
      emit('on-error', error)
    }

    const stepsFinished = () => {
      let offset = activeTabIndex.value / DISPLAY_NUMBER_OF_TABS
      offset = Math.trunc(offset) * DISPLAY_NUMBER_OF_TABS
      return offset
    }

    const stepsLeft = () => {
      let offset = DISPLAY_NUMBER_OF_TABS - (activeTabIndex.value % DISPLAY_NUMBER_OF_TABS)
      let numberOfSteps = tabs.value.length - (activeTabIndex.value + offset)
      return numberOfSteps
    }

    const validateBeforeChange = (promiseFn: any, callback: any) => {
      // we have a promise
      if (isPromise(promiseFn)) {
        loading.value = true
        promiseFn.then((res: any) => {
          loading.value = false
          const validationResult = res === true
          executeBeforeChange(validationResult, callback)
        }).catch((error: any) => {
          loading.value = false
          setValidationError(error)
          console.log(error)
        })
        // we have a simple function
      } else {
        const validationResult = promiseFn === true
        executeBeforeChange(validationResult, callback)
      }
    }
    const executeBeforeChange = (validationResult: any, callback: any) => {
      emit('on-validate', validationResult, activeTabIndex.value)
      if (validationResult) {
        tabs.value[activeTabIndex.value].ctx.validate()
        callback()
      } else {
        console.log("errrrrrorrrr")
        tabs.value[activeTabIndex.value].ctx.validationError = 'error'
        tabs.value[activeTabIndex.value].ctx.devalidate()
      }
    }
    const beforeTabChange = (index: number, callback: any) => {
      if (loading.value) {
        return
      }
      const oldTab = tabs.value[index]
      if (oldTab && oldTab.ctx.beforeChange !== undefined) {
        const tabChangeRes = oldTab.ctx.beforeChange()
        validateBeforeChange(tabChangeRes, callback)
      } else {
        callback()
      }
    }

    const afterTabChange = (index: number) => {
      if (loading.value) {
        return
      }
      const newTab = tabs.value[index]
      if (newTab && newTab.afterChange !== undefined) {
        newTab.afterChange()
      }
    }

    const navigateToTab = (index: number) => {
      const validate = index > activeTabIndex.value
      if (index <= maxStep.value) {
        const cb = () => {
          if (validate && index - activeTabIndex.value > 1) {
            // validate all steps recursively until destination index
            changeTab(activeTabIndex.value, activeTabIndex.value + 1)
            beforeTabChange(activeTabIndex.value, cb)
          } else {
            changeTab(activeTabIndex.value, index)
            afterTabChange(activeTabIndex.value)
          }
        }
        if (validate) {
          beforeTabChange(activeTabIndex.value, cb)
        } else {
          setValidationError(null)
          cb()
        }
      }
      return index <= maxStep.value
    }

    const nextTab = () => {
      console.log(tabs.value)
      const cb = () => {
        if (activeTabIndex.value < tabCount.value - 1) {
          changeTab(activeTabIndex.value, activeTabIndex.value + 1)
          afterTabChange(activeTabIndex.value)
        } else {
          emit('on-complete')
        }
      }
      beforeTabChange(activeTabIndex.value, cb)
    }

    const prevTab = () => {
      const cb = () => {
        if (activeTabIndex.value > 0) {
          setValidationError(null)
          changeTab(activeTabIndex.value, activeTabIndex.value - 1)
        }
      }
      if (validateOnBack.value) {
        beforeTabChange(activeTabIndex.value, cb)
      } else {
        cb()
      }
    }

    const changeTab = (
      oldIndex: number,
      newIndex: number,
      emitChangeEvent = true
    ) => {
      const oldTab = tabs.value[oldIndex]
      const newTab = tabs.value[newIndex]
      if (oldTab) {
        oldTab.ctx.deactivate()
      }
      if (newTab) {
        newTab.ctx.activate()
      }
      if (emitChangeEvent && activeTabIndex.value !== newIndex) {
        emitTabChange(oldIndex, newIndex)
      }
      activeTabIndex.value = newIndex
      activateTabAndCheckStep(activeTabIndex.value)

      displayedTabs.value = getTabs(oldIndex, newIndex)
      
      return true
    }

    const emitTabChange = (prevIndex: number, nextIndex: number) => {
      emit('on-change', prevIndex, nextIndex)
      emit('update:startIndex', nextIndex)
    }

    const activateTabAndCheckStep = (index: number) => {
      activateTab(index)
      if (index > maxStep.value) {
        maxStep.value = index
      }
      activeTabIndex.value = index
    }

    const deactivateTabs = () => {
      tabs.value.forEach((tab: any) => {
        tab.ctx.deactivate()
      })
    }

    const activateTab = (index: number) => {
      deactivateTabs()
      const tab = tabs.value[index]
      if (tab) {
        tab.ctx.activate()
      }
    }

    return {
      tabs,
      defaultSlot,
      loading,
      activeTabIndex,
      activateTabAndCheckStep,
      addTab,
      reset,
      activateAll,
      maxStep,
      isLastStep,
      tabCount,
      activateTab,
      changeTab,
      setValidationError,
      navigateToTab,
      prevTab,
      nextTab,
      getTabs,
      displayedTabs,
      stepsFinished,
      stepsLeft,
      isOnLastDisplayedStep,
      isActive,
      isValidated
      //visibleTabs
    }
  }
})
</script>

<style>
</style>
