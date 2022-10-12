<template>
  <div
    class="data-table-body col-span-1 block sm:grid"
    :style="{ 'grid-template-columns': gridTemplateColumnsCss }"
  >
    <template v-if="config.groupBy">
      <template v-for="(group, groupKey) in bodyData" :key="groupKey">
        <DataTableGroupRecord
          :model-value="{ group: groupKey, count: group.children.length }"
          :columns="groupColumns"
          :total-count="columns.length"
          :collapsed="config.collapsed && config.collapsed[groupKey]"
          @toggle="toggleGroup"
        />
        <template v-if="!(config.collapsed && config.collapsed[groupKey])">
          <Record
            v-for="(record, key) in bodyData[groupKey].children"
            :key="record.id"
            v-model="bodyData[groupKey]['children'][key]"
            :columns="columns"
            is-grouped
          />
        </template>
      </template>
    </template>
    <template v-for="(record, key) in bodyData" v-else :key="key">
      <Record
        v-model="bodyData[key]"
        :columns="columns"
        :is-inline-edit-mode="isInlineEditMode"
        :action-component="actionComponent"
        :has-action-column="hasActionColumn"
        @edit="openRecordEditModal(key)"
        @click="$emit('clickRecord', bodyData[key])"
        @reload="$emit('reload')"
        @action="(e) => $emit('action', e)"
      >
        <template v-for="(_, slot) in $slots" #[slot]="scope">
          <slot :name="slot" v-bind="scope || {}" />
        </template>
      </Record>
    </template>
  </div>

  <Modal ref="modalRef" name="update-field">
    <div class="grid grid-cols-2 px-6 pt-8 pb-4">
      <div
        v-for="column in (columns as any)"
        :key="column.key"
        class="mx-2 my-4 flex items-center"
      >
        <span class="flex min-w-[5.6rem] items-center"
          >{{ column.title }}:</span
        >
        <div class="flex w-full overflow-hidden">
          <slot name="leftIcon"></slot>
          <Input
            v-if="column.type === 'text' || column.type === 'number'"
            v-model="selectedRecord[column.key]"
            :type="column.type"
            class="truncate bg-transparent"
          />

          <Checkbox
            v-if="column.type === 'checkbox'"
            v-model="selectedRecord[column.key]"
            type="checkbox"
            class="truncate bg-transparent"
          />

          <DatePicker
            v-if="column.type === 'date'"
            class="truncate bg-transparent"
            :model-value="new Date(selectedRecord[column.key])"
            @update:modelValue="(v) => (selectedRecord[column.key] = v)"
          />

          <Select
            v-if="column.type === 'enum'"
            v-model="selectedRecord[column.key]"
            class="truncate rounded bg-transparent"
            :options="column.options"
          />
        </div>
      </div>
    </div>
    <div class="flex justify-end p-4 pt-0">
      <Button @click="updateSelectedRecord">Save</Button>
      <Button class="ml-2 bg-gray-400 hover:bg-gray-500" @click="modalRef.close"
        >Cancel</Button
      >
    </div>
  </Modal>
</template>

<script lang="ts">
import {
  toRefs,
  reactive,
  computed,
  ref,
  inject,
  defineComponent,
  Ref,
} from 'vue'
import Record from './DataTableRecord.vue'
import DataTableGroupRecord from './DataTableGroupRecord.vue'
import { AddUpdatedRecordSymbol } from '../ProvideDataTableSettings'
import DatePicker from '../../DatePicker/DatePicker.vue'
import Modal from '../../Modal/Modal.vue'
import Select from '../../Select/Select.vue'
import Button from '../../Button/Button.vue'
import Input from '../../Input/Input.vue'
import Checkbox from '../../Checkbox/Checkbox.vue'
export default defineComponent({
  components: {
    Record,
    DataTableGroupRecord,
    DatePicker,
    Modal,
    Select,
    Button,
    Input,
    Checkbox,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Object,
      default: () => ({}),
    },
    config: Object,
    isInlineEditMode: {
      type: Boolean,
    },
    hasActionColumn: {
      type: Boolean,
      default: false,
    },
    gridTemplateColumnsCss: String,
    actionComponent: {
      type: Object,
    },
  },
  emits: [
    'update:modelData',
    'update:modelConfig',
    'toggleGroup',
    'clickRecord',
    'reload',
    'action',
  ],
  setup(props, { emit, slots }) {
    const { data, columns, config, isInlineEditMode } = toRefs(props)
    const modalRef = ref(null)
    const selectedRecord = ref(null)

    const addUpdatedRecord: any = inject(AddUpdatedRecordSymbol)
    const bodyData: Ref<any> = computed({
      get() {
        return data.value
      },
      set(value) {
        emit('update:modelData', value)
      },
    })

    const groupColumns = config.value.groupBy
      ? computed(() => {
          return [
            columns.value.find(
              (column: any) => column.key === config.value.groupBy
            ),
            {
              title: 'Count',
              key: 'count',
              sortable: true,
              editable: true,
              hidden: false,
              sortDirection: 0,
            },
          ]
        })
      : ''

    const toggleGroup = (groupKey) => {
      emit('toggleGroup', groupKey)
    }

    const openRecordEditModal = (index) => {
      if (!isInlineEditMode.value) {
        selectedRecord.value = bodyData.value[index]
        modalRef.value.open()
      }
    }

    const updateSelectedRecord = () => {
      addUpdatedRecord(selectedRecord.value)
      modalRef.value.close()
    }

    return {
      $slots: slots,
      bodyData,
      config,
      groupColumns,
      toggleGroup,
      modalRef,
      openRecordEditModal,
      selectedRecord,
      updateSelectedRecord,
      ...reactive({ size: columns.value.length }),
    }
  },
})
</script>

<style scoped>
@media (min-width: 640px) {
  .data-table-body {
    grid-template-columns: repeat(v-bind(size), minmax(0, 1fr));
    grid-column: span v-bind(size) / span v-bind(size);
  }
}
</style>
