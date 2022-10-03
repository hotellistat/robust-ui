import { ref } from 'vue'
import DataTable from './Datatable.vue'

import { data, options, serverSideOptions } from './mockData.ts'

export default {
  title: 'Ui/DataTable',
  component: DataTable,
  argTypes: {
    options: { control: { type: 'array' } },
    data: { control: { type: 'object' } },
  },
}

const DefaultTemplate = (args) => ({
  components: { DataTable },
  template: `
  <DataTable v-bind="args">
  </DataTable>`,
  setup() {
    return { args }
  },
})

const LoadingTemplate = (args) => ({
  components: { DataTable },
  template: `
  <div class="w-screen">
  <DataTable v-bind="args" :loading="loading" class="w-full h-full"> 
  </DataTable>
  </div>
  `,
  setup() {
    const loading = ref(false)
    setInterval(() => (loading.value = !loading.value), 2000)
    return { args, loading }
  },
})

const ServerSideTemplate = (args) => ({
  components: { DataTable },
  template: `
  <DataTable v-bind="args"
    :data="ssData"
    @update:page="pageUpdated"
    @update:rowsLimit="rowsLimitUpdated"
    @update:sort="sortUpdated"
    :loading="loading"
  >
  </DataTable>`,
  setup() {
    const ssData = ref([])

    const loading = ref(true)
    setTimeout(() => {
      ssData.value = data
      loading.value = false
    }, 5000)

    const pageUpdated = (p) => {
      console.log('page is updated', p)
    }
    const rowsLimitUpdated = (r) => {
      console.log('rowsLimit is updated', r)
    }
    const sortUpdated = (s) => {
      console.log('sort is updated', s)
    }
    return { args, ssData, pageUpdated, sortUpdated, rowsLimitUpdated, loading }
  },
})

export const Default = DefaultTemplate.bind({})
Default.args = {
  data,
  options,
}

export const Loading = LoadingTemplate.bind({})
Loading.args = {
  data,
  options,
}

export const ServerSide = ServerSideTemplate.bind({})
ServerSide.args = {
  data,
  options: serverSideOptions,
}
