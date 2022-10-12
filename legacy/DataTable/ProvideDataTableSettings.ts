import { provide, reactive, readonly, toRefs, watch } from 'vue'

export const StateSymbol = Symbol(
  'Data Table settings state provider identifier'
)
export const UpdateSymbol = Symbol(
  'Data Table settings update provider identifier'
)
export const AddUpdatedRecordSymbol = Symbol(
  'Data Table settings add udpated record provider identifier'
)
export const DataTableSettingsNextPageSymbol = Symbol(
  'Data Table settings next page provider identifier'
)
export const DataTableSettingsPrevPageSymbol = Symbol(
  'Data Table settings prev page provider identifier'
)

export default {
  setup() {
    const state = reactive({
      totalCount: 0,
      pageSize: 25,
      page: 1,
      updatedRecords: {},
      isDirty: false,
      keyword: '',
    })

    watch(
      state.updatedRecords,
      () => {
        if (!state.isDirty) state.isDirty = true
      },
      { deep: true }
    )

    const update = (
      property: string | number,
      value: number | object | string
    ) => {
      state[property] = value
    }
    const addUpdatedRecord = (record) => {
      state.updatedRecords[record.id] = record
    }

    provide(StateSymbol, toRefs(readonly(state)))
    provide(AddUpdatedRecordSymbol, addUpdatedRecord)
    provide(UpdateSymbol, update)
  },
  render() {
    return this.$slots.default()
  },
}
