import { ref } from 'vue'
import DataTable from './DataTableContainer.vue'

export default {
  title: 'Ui/DataTable',
  component: DataTable,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#00aced' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
}
const columns = [
  {
    title: 'Hotel',
    key: 'name',
    sortable: true,
    editable: true,
    hidden: false,
    type: 'text',
    sortDirection: 0,
    width: 40,
  },

  {
    title: 'City',
    key: 'city',
    sortable: true,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'Country',
    key: 'country_name',
    sortable: true,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'enum',
    options: [
      {
        title: 'DEU',
        value: 'DEU',
      },
    ],
    width: 30,
  },
  {
    title: 'Chain',
    key: 'chain_name',
    sortable: false,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'Brand',
    key: 'brand_name',
    sortable: false,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'Contract',
    key: 'contract_name',
    sortable: false,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'text',
    width: 30,
  },
  {
    title: 'End Date',
    key: 'enddate_contract_formatted',
    sortable: true,
    editable: true,
    hidden: false,
    sortDirection: 0,
    type: 'date',
    sort: (a, b) => new Date(a) - new Date(b),
    width: 40,
  },
  {
    title: 'Custom Render',
    key: 'custom_render',
    width: 40,
  },
]

const data = [
  {
    id: '1d5b8be1-13ba-4b04-a76f-53105076f1e6',
    name: 'Hartmann LLC',
    country: 'DEU',
    city: 'Lake Vivienneton',
    country_name: 'Germany',
    chain_name: 'Graham, Hilll and Sawayn',
    brand_name: 'Megane',
    enddate_contract_formatted: '05/04/2022',
    contract_name: 'Intelligent',
  },
  {
    id: '1d6f17a9-0e4c-4839-8cab-0e2f59921a4b',
    name: 'Adams LLC',
    country: 'DEU',
    city: 'South Charlotte',
    country_name: 'Germany',
    chain_name: 'Kautzer LLC',
    brand_name: 'Clarabelle',
    enddate_contract_formatted: '06/04/2022',
    contract_name: 'Clever',
  },
  {
    id: '83be9c92-ed3a-4875-825c-8db64e0ca7b9',
    name: 'Gorczany Inc',
    country: 'DEU',
    city: 'Konopelskiborough',
    country_name: 'Germany',
    chain_name: 'Gerhold - Kris',
    brand_name: 'Andy',
    enddate_contract_formatted: '07/04/2022',
    contract_name: 'Intelligent',
  },
]
const config = {
  totalCount: 200,
  pageSize: 25,
  page: 1,
  updatedRecords: {},
  isDirty: false,
}
const DefaultTemplate = (args) => ({
  template: `
  <DataTable
      :totalCount="totalCount"
      v-model="tableData"
      :columns="tableColumns"
      :config="tableConfig"
      :is-loading="isLoading"
      @page="setPaginationParams"
      @search="setKeyword"
      @record-click="handleClickRecord"
    >

      <template #name="{row, value, column}">
        <div class="flex items-center w-full pl-2">
          <span class="text-rose-500">{{value}}</span>
        </div>
      </template>

      <template #custom_render="{row, value, column}">
        <div class="flex items-center w-full">
          <span class="w-4 h-2 bg-green-600"></span>
          <span class="w-4 h-2 bg-amber-600"></span>
          <span class="w-4 h-2 bg-red-600"></span>
          <span class="w-4 h-2 bg-green-600"></span>
          <span class="w-4 h-2 bg-amber-600"></span>
          <span class="w-4 h-2 bg-red-600"></span>
        </div>
      </template>

    </DataTable>
`,
  components: { DataTable },
  setup() {
    const totalCount = ref(200)
    const tableColumns = ref(columns)
    const tableData = ref(data)
    const tableConfig = ref(config)
    const isLoading = ref(false)
    const keyword = ref('')
    const paginationParams = ref({ offset: 0, limit: 25 })
    const setPaginationParams = (params) => {
      paginationParams.value = params
    }
    const setKeyword = (value) => {
      keyword.value = value
    }
    const handleClickRecord = function (record) {
      console.log(record)
    }
    return {
      args,
      totalCount,
      tableColumns,
      tableConfig,
      tableData,
      isLoading,
      setPaginationParams,
      setKeyword,
      handleClickRecord,
    }
  },
})

export const Default = DefaultTemplate.bind()
Default.parameters = {
  backgrounds: { default: 'dark' },
}
