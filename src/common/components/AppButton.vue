<template>
  <button
    class="app-button"
    :class="{'app-button--bordered': bordered}"
    :type="type"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button'
  },
  bordered: {
    type: Boolean,
    default: false,
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/mixins/mixins';

.app-button {
  @include m-s16-h16;

  height: 41px;
  border-radius: 100px;

  background: $purple-gradient;
  border: none;
  color: $white;
  cursor: pointer;

  &--bordered {
    background: none;
    height: auto;

    border: 2px solid $white;
    border-radius: 6px;
    padding: 5px 15px;
  }
}
</style>
