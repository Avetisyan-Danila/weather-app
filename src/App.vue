<template>
  <app-layout>
    <router-view />
  </app-layout>
</template>

<script setup>
import AppLayout from "@/layouts/AppLayout.vue";
import { useRecentSearchesStore } from "@/stores/recentSearches.js";

const recentSearchesStore = useRecentSearchesStore();

// Загрузка первоначальных данных
// Загружаем последние 6 город, которые искал пользователь
void recentSearchesStore.initRecentStore();
// Загружаем избранные города
void recentSearchesStore.initRecentStore();
</script>

<style lang="scss">
@import "@/assets/scss/app.scss";
</style>
