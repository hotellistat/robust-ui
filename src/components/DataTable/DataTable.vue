<template>
  <div>
    <div class="flex flex-wrap mb-1.5 items-center justify-between">
      <div
        v-if="isTurnOnInlineMode && isShowInlineTab"
        class="flex items-start mr-4 my-2"
      >
        <label class="mr-1 whitespace-nowrap">Inline edit:</label>
        <base-tab-switch
          v-model="isInlineEditMode"
          :tabs="isInlineEditModeTabs"
        />
      </div>

      <data-search-box
        class="mr-2"
        v-if="!tableConfig.hideSearch || tableConfig.hideSearch === false"
        @search-submit="(val) => $emit('search-submit', val)"
      />
      <div class="flex justify-end">
        <data-table-settings
          :columns="allColumns"
          :config="tableConfig"
          :active-column="filteredColumns"
          @toggle-column="toggleColumn"
        />
      </div>
    </div>
    <div
      :key="columnData.length"
      class="grid sm:block grid-cols-2 border border-gray-700"
    >
      <table-header
        v-model="columnData"
        :data="bodyData"
        :config="tableConfig"
        :grid-template-columns-css="gridTemplateColumnsCss"
        :is-inline-edit-mode="isInlineEditMode === 'true'"
        :has-action-column="hasActionColumn"
      />
      <table-body
        :columns="columnData"
        :is-inline-edit-mode="isInlineEditMode === 'true'"
        v-model:data="bodyData"
        v-model:config="tableConfig"
        @toggleGroup="toggleGroup"
        @clickRecord="recordClickHandler"
        :grid-template-columns-css="gridTemplateColumnsCss"
        :action-component="actionComponent"
        :has-action-column="hasActionColumn"
        @reload="$emit('reload')"
        @action="(e) => $emit('action', e)"
      >
        <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
          <slot :name="slot" v-bind="scope || {}" />
        </template>
      </table-body>
    </div>
    <table-footer
      :config="tableConfig"
      @patch-records="(records) => $emit('patch-records', records)"
    />
    <div v-if="isLoading" class="loading min-h-[400px]">
      <div
        class="relative w-full h-full flex items-center justify-center text-white"
      >
        <Spinner :size="100" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, toRefs, computed, inject, watch, onMounted } from "vue";
import TableHeader from "./DataTableHeader/DataTableHeaderContainer.vue";
import TableFooter from "./DataTableFooter";
import TableBody from "./DataTableBody/DataTableBody.vue";
import DataTableSettings from "./DataTableSettings";
import DataSearchBox from "./DataSearchBox/DataSearchBox.vue";
import { useTableGroup } from "./composables";
import { StateSymbol, UpdateSymbol } from "./ProvideDataTableSettings";
import Spinner from '../Spinner/Spinner.vue'

export default {
  components: {
    DataTableSettings,
    DataSearchBox,
    TableHeader,
    TableFooter,
    TableBody,
    Spinner
  },
  emits: ["patch-records", "page", "search", "record-click", "search-submit"],
  data() {
    return {
      isInlineEditModeTabs: [
        { title: "Enable", value: "true" },
        { title: "Disable", value: "false" }
      ],
      fieldTypes: [
        {
          title: "Text",
          value: "text"
        },
        {
          title: "Number",
          value: "number"
        },
        {
          title: "Enum",
          value: "enum"
        },
        {
          title: "Date",
          value: "date"
        }
      ]
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    modelValue: {
      type: Object,
      default: () => ({})
    },
    config: {
      type: Object,
      default: () => ({})
    },
    totalCount: {
      type: Number,
      default: 0
    },
    isTurnOnInlineMode: {
      type: Boolean,
      default: false
    },
    isShowInlineTab: {
      type: Boolean,
      default: false
    },
    actionComponent: {
      type: Object
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    hasActionColumn: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit, slots }) {
    const {
      columns,
      modelValue,
      config,
      totalCount,
      isTurnOnInlineMode,
      hasActionColumn,
    } = toRefs(props);
    const updateSettings = inject(UpdateSymbol);
    const { pageSize, page, keyword } = inject(StateSymbol);
    const isInlineEditMode = ref("true");
    if (!isTurnOnInlineMode.value) {
      isInlineEditMode.value = "false";
    }
    let defaultPageSize = pageSize.value;

    const allColumns = ref(columns.value);
    const filteredColumns = ref(
      allColumns.value.filter((column) => !column.hidden)
    );

    const getGridTemplateColumnsCss = () => {
      let result = "";
      let totalWidth = 0;
      for (const column of filteredColumns.value) {
        totalWidth += column.width;
      }

      const actionsColumnWidth =
        (isInlineEditMode.value === "false") && filteredColumns.value.length && hasActionColumn.value
          ? 100 / filteredColumns.value.length
          : 0;
      for (const column of filteredColumns.value) {
        result +=
          (column.width * (100 - actionsColumnWidth)) / totalWidth + "% ";
      }
      if (actionsColumnWidth !== 0) {
        result += actionsColumnWidth + "%";
      }
      return result;
    };

    const gridTemplateColumnsCss = ref(getGridTemplateColumnsCss());

    const updateTotalCount = (value) => updateSettings("totalCount", value);

    watch(totalCount, () => updateTotalCount(totalCount.value));
    onMounted(() => {
      updateTotalCount(totalCount.value)
    })

    watch([pageSize, page], () => {
      let offset = pageSize.value * (page.value - 1);
      const limit = pageSize.value;

      // if the offset changed and the page is not page 1
      if (defaultPageSize !== pageSize.value && page.value !== 1) {
        offset = 0;
        updateSettings("page", 1);
      } else {
        defaultPageSize = pageSize.value;
      }

      emit("page", { offset, limit });
    });

    watch(keyword, (newValue) => {
      emit("search", newValue);
    });

    // const { sortedData } = useTableSort(data, filteredColumns);
    // console.log("sortedData:", sortedData.value, filteredColumns.value);
    const { groupedData: bodyData, groupedColumn: columnData } = useTableGroup(
      modelValue,
      filteredColumns,
      ref(config.value.groupBy)
    );

    const refConfig = ref(config.value);

    const toggleGroup = (groupKey) => {
      if (refConfig.value.collapsed === undefined) {
        refConfig.value = {
          ...refConfig.value,
          collapsed: { [groupKey]: true }
        };
      } else if (refConfig.value.collapsed[groupKey] === undefined) {
        refConfig.value.collapsed = {
          ...refConfig.value.collapsed,
          [groupKey]: true
        };
      } else {
        refConfig.value.collapsed = {
          ...refConfig.value.collapsed,
          [groupKey]: !refConfig.value.collapsed[groupKey]
        };
      }
    };

    const tableConfig = computed({
      get() {
        return {
          ...refConfig.value,
          size: columnData.value.length
        };
      }
    });

    const toggleColumn = (key) => {
      allColumns.value = allColumns.value.map((column) => {
        if (column.key === key) column.hidden = !column.hidden;
        return column;
      });
      filteredColumns.value = allColumns.value.filter(
        (column) => !column.hidden
      );
    };

    watch([filteredColumns, isInlineEditMode], () => {
      gridTemplateColumnsCss.value = getGridTemplateColumnsCss();
    });

    const recordClickHandler = (record) => {
      if (isInlineEditMode.value === "false") {
        emit("record-click", record);
      }
    };

    return {
      $slots: slots,
      columnData,
      bodyData,
      toggleGroup,
      tableConfig,
      allColumns,
      filteredColumns,
      toggleColumn,
      isInlineEditMode,
      gridTemplateColumnsCss,
      recordClickHandler
    };
  }
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #000;
  opacity: 0.5;
  top: 0;
  left: 0;
}
</style>
