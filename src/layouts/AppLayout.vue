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
  display: flex;
  flex-direction: column;

  padding: 20px;
}
</style>