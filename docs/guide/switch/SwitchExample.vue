<template>
  <div style="margin-bottom: 16px">
    <p>State: {{ state }}</p>
    <Switch v-model="state" label="Switch" />
  </div>
  <div style="margin-bottom: 16px">
    <Switch label="Unchecked disabled" :model-value="false" disabled />
  </div>
  <div style="margin-bottom: 16px">
    <Switch label="Checked disabled" :model-value="true" disabled />
  </div>
</template>
<script>
import { Switch } from '../../../src/index'

export default {
  name: 'SwitchExample',
  components: {
    Switch,
  },
  data() {
    return {
      state: false,
    }
  },
}
</script>
