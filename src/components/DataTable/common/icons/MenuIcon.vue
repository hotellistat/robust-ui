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
      class="icon"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 6h16M4 12h16M4 18h16"
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
