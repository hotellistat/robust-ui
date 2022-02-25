import { ref, watch } from 'vue'
import Pagination from './Pagination.vue'

export default {
  title: 'Ui/Pagination',
  component: Pagination,
}

const DefaultTemplate = (args) => ({
  template:
    '<Pagination v-bind="args" :totalCount="200" v-model:page="page" v-model:pageSize="pageSize"/>',
  components: { Pagination },
  setup() {
    const page = ref(2)
    const pageSize = ref(10)
    return { args, page, pageSize }
  },
})

export const Default = DefaultTemplate.bind({})
