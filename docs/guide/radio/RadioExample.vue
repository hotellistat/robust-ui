<template>
  <div style="margin-bottom: 16px">
    <p>Selected value: {{ selectedValue }}</p>
    <Radio v-model="selectedValue" name="example" :items="items" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Here is an example of a disabled radio group</p>
    <Radio
      v-model="selectedValue"
      name="disabled-example"
      :items="items"
      disabled
    />
  </div>
</template>
<script>
import { Radio } from '../../../src/index'

export default {
  name: 'RadioExample',
  components: {
    Radio,
  },
  data() {
    return {
      items: [
        {
          label: 'Label 1',
          value: 'value1',
        },
        {
          label: 'Label 2',
          value: 'value2',
        },
      ],
      selectedValue: 'value1',
    }
  },
}
</script>
