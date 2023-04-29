<template>
  <button
    class="app-button"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.app-button {
  @include m-s16-h16;

  height: 41px;
  border-radius: 100px;

  background: $purple-gradient;
  border: none;
  color: $white;
  cursor: pointer;
}
</style>
