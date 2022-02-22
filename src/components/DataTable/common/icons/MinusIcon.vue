<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    :width="size"
    :height="size"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20 12H4"
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
