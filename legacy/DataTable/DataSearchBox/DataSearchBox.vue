<template>
  <div class="flex flex-1 justify-end">
    <Input
      v-model="keyword"
      placeholder="search..."
      @keyup.enter="submitSearch"
    >
      <template #prefix>
        <PhMagnifyingGlass class="text-gray-500 dark:text-gray-50" size="18" />
      </template>
    </Input>
  </div>
</template>

<script>
import { inject, ref, watch } from 'vue'
import { UpdateSymbol } from '../ProvideDataTableSettings'
import { PhMagnifyingGlass } from '@dnlsndr/vue-phosphor-icons'
import Input from '../../Input/Input.vue'

export default {
  components: { PhMagnifyingGlass, Input },
  emits: ['search-submit'],
  setup(props, { emit }) {
    const keyword = ref('')
    const updateSettings = inject(UpdateSymbol)

    watch(keyword, (newValue) => {
      updateSettings('keyword', newValue)
    })

    return {
      keyword,
      submitSearch() {
        emit('search-submit', keyword.value)
      },
    }
  },
}
</script>
