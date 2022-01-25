<template>
  <div style="margin-bottom: 16px">
    <p>Default</p>
    <Input />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with label - {{ labelText }}</p>
    <Input v-model="labelText" label="Example text" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with placeholder - {{ placeholderLabelText }}</p>
    <Input v-model="placeholderLabelText" placeholder="Write something here" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example without label - {{ noLabelText }}</p>
    <Input v-model="noLabelText" />
  </div>
  <div style="margin-bottom: 16px">
    <p>Example with required - {{ requiredText }}</p>
    <Input v-model="requiredText" label="I am required" required />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled</p>
    <Input label="Oh :(" disabled />
  </div>
  <div style="margin-bottom: 16px">
    <p>Disabled with a label</p>
    <Input label="Oh :(" model-value="Hello" disabled />
  </div>
</template>
<script>
import { Input } from '../../../src/index'

export default {
  name: 'InputExample',
  components: {
    Input,
  },
  data() {
    return {
      labelText: '',
      placeholderLabelText: '',
      noLabelText: '',
      requiredText: '',
    }
  },
}
</script>
