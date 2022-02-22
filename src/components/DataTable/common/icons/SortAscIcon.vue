<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    stroke="currentColor"
    :width="size"
    :height="size"
  >
    <path
      class="icon"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
    />
  </svg>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "24px"
    }
  }
};
</script>

<style scoped>
.icon {
  stroke: currentColor;
}
</style>
