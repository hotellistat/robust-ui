<template>
  <div class="mb-6">
    <Button variant="primary">Button</Button>
  </div>
  <div class="mb-6">
    <Button variant="primary-outline">Button</Button>
  </div>
  <div class="mb-6">
    <Button variant="warn">Button</Button>
  </div>
  <div class="mb-6">
    <Button label="Text" type="text" />
  </div>
  <div>
    <Button label="Disabled" type="text" disabled />
  </div>
</template>
<script>
import { Button } from '../../../src/index'

export default {
  name: 'ButtonExample',
  components: {
    Button,
  },
}
</script>
