<template>
  <div class="default-layout">
    <app-header />
    <slot />
    <app-menu />
  </div>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppMenu from "@/layouts/AppMenu.vue";
</script>