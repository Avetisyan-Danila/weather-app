<template>
  <div class="default-layout">
    <app-header />
    <div class="main">
      <slot />
    </div>
    <app-menu />
  </div>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppMenu from "@/layouts/AppMenu.vue";
</script>

<style lang="scss" scoped>
.default-layout {
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  max-height: 800px;
  padding: 20px;
}

.main {
  flex-grow: 1;
}
</style>
