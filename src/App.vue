<template>
  <app-layout>
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </app-layout>
</template>

<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import { useRecentSearchesStore } from '@/stores/recentSearches.js';
import { useFavoritesStore } from '@/stores/favorites.js';

const recentSearchesStore = useRecentSearchesStore();
const favoritesStore = useFavoritesStore();

// Загрузка первоначальных данных
// Загружаем последние 6 город, которые искал пользователь
void recentSearchesStore.initRecentStore();
// Загружаем избранные города
void favoritesStore.initFavoritesStore();
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>
