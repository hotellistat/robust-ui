import { ref } from 'vue';
import DataTable from './index.vue';

import { data, options, serverSideOptions } from './__test__/mockData.ts';

export default {
  title: 'Ui/DataTable',
  component: DataTable,
  argTypes: {
    options: { control: { type: 'array' } },
    data: { control: { type: 'object' } },
  },
};

const DefaultTemplate = (args) => ({
  components: { DataTable },
  template: `
  <DataTable v-bind="args" header-class="bg-slate-200 dark:bg-slate-800/25 rounded-t-xl shadow-sm">
  </DataTable>`,
  setup() {
    return { args };
  },
});

const LoadingTemplate = (args) => ({
  components: { DataTable },
  template: `
  <div class="w-screen">
  <DataTable v-bind="args" :loading="loading" class="w-full h-full">
  </DataTable>
  </div>
  `,
  setup() {
    const loading = ref(false);
    // setInterval(() => (loading.value = !loading.value), 2000)
    return { args, loading };
  },
});

const ServerSideTemplate = (args) => ({
  components: { DataTable },
  template: `
  <div class="w-screen">
  <DataTable class="w-full" v-bind="args"
    :data="ssData"
    @update:page="pageUpdated"
    @update:rowsLimit="rowsLimitUpdated"
    @update:sort="sortUpdated"
    @update:search="searchUpdated"
    @update:selectedRows="selectedRowsUpdated"
    @update:resize="resizeUpdated"
    @click-cell="handleCellClick"
    :loading="loading"
    :options="options"
  >
    <template #rating="{data:row, onClick}">
      <span @click="onClick">{{ row.rating }} &#9733;</span>
    </template>
  </DataTable>
  </div>`,
  setup() {
    const ssData = ref([]);
    const options = ref(serverSideOptions);
    options.value.resize = true;

    const loading = ref(true);
    setTimeout(() => {
      ssData.value = data.slice(0, options.value.rowsLimit);
      // ssData.value = data
      loading.value = false;
    }, 500);

    const pageUpdated = (p) => {
      console.log('page updated', p);
      if (!p || p > options.value.maxPage) {
        return;
      }
      options.value.page = p;
      const pageOffset = p - 1;
      const currPage = pageOffset * options.value.rowsLimit;
      ssData.value = data.slice(currPage, currPage + options.value.rowsLimit);
      console.log('page is updated', p);
    };
    const rowsLimitUpdated = (r) => {
      console.log('rows limit is updated: ', r);
      options.value.maxPage = Math.ceil(data.length / r);
      console.log('maxPage', options.value.maxPage);
      if (options.value.maxPage < options.value.page) {
        options.value.page = options.value.maxPage;
      }
      options.value.rowsLimit = r;
    };
    const sortUpdated = (s) => {
      console.log('sort is updated', s);
    };
    const searchUpdated = (s) => {
      console.log('search is updated', s);
    };
    const selectedRowsUpdated = (sr) => {
      console.log('selected rows are updated: ', sr);
    };
    const resizeUpdated = (sizes) => {
      console.log(sizes);
    };
    const handleCellClick = (value) => {
      console.log('clicked on cell:', value);
    };

    return {
      args,
      options,
      ssData,
      pageUpdated,
      sortUpdated,
      rowsLimitUpdated,
      searchUpdated,
      resizeUpdated,
      handleCellClick,
      loading,
      selectedRowsUpdated,
    };
  },
});

export const Default = DefaultTemplate.bind({});
Default.args = {
  data,
  options,
};

export const Loading = LoadingTemplate.bind({});
Loading.args = {
  data,
  options: {
    ...options,
    resize: true,
  },
};

export const ServerSide = ServerSideTemplate.bind({});
ServerSide.args = {
  data,
};

export const Virtualised = DefaultTemplate.bind({});
Virtualised.args = {
  data,
  options: {
    ...options,
    isVirtualised: true,
  },
};
