<template>
  <div class="favorites">
    <form class="favorites__form" action="#" @submit.prevent="onSubmit">
      <app-input
          type="text"
          name="favorite"
          placeholder="Name of the city"
          v-model="searchValue"
          :is-valid="isValid"
          :empty-error-message="'Enter the name of the city'"
          :search-error-message="searchError"
      />
    </form>

    <ul
        v-if="favoritesPageForecasts.length"
        class="favorites__list"
    >
      <li
          v-for="forecast in favoritesPageForecasts"
          class="favorites__item"
      >
        <transition name="list" appear>
          <city-card
              :to="{ name: 'detailed', params: { city: forecast.location.name } }"
              :title="forecast.location.name"
              :weatherIcon="forecast.currentDayIcon"
              :weatherName="capitalizeFirstLetter(weatherConditions[forecast.current.condition.code])"
          />
        </transition>
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppInput from '@/common/components/AppInput.vue';
import CityCard from '@/modules/city-card/CityCard.vue';
import weatherConditions from '@/common/enums/weatherConditions.js';
import {computed, onMounted, ref, watch} from 'vue';
import { useWeatherStore } from '@/stores/weather.js';
import { useFavoritesStore } from '@/stores/favorites.js';
import { useRouter } from 'vue-router';
import { capitalizeFirstLetter } from '@/common/helpers/capitalizeFirstLetter.js';
import {useLoadingIndicatorStore} from "@/stores/loadingIndicator.js";
import {useRecentSearchesStore} from "@/stores/recentSearches.js";

const isValid = ref(true);
const searchValue = ref('');
const searchError = ref('');

watch(searchValue, () => {
  isValid.value = true;
})

const router = useRouter();
const weatherStore = useWeatherStore();
const recentSearchesStore = useRecentSearchesStore();
const favoritesStore = useFavoritesStore();

const onSubmit = async () => {
  if (!searchValue.value) {
    isValid.value = false;
    searchError.value = '';
    return;
  }

  try {
    await weatherStore.setCityWeather(searchValue.value, 7);
    recentSearchesStore.setRecentSearch(searchValue.value);
    searchError.value = '';

    await router.push({ name: 'detailed', params: { city: searchValue.value }});
  } catch (e) {
    searchError.value = 'Couldn`t find the city';
  }
}

const favoritesPageForecasts = ref([]);
onMounted(async () => {
  for (const city of favoritesStore.favorites) {
    await weatherStore.setCityWeather(city, 1);
    favoritesPageForecasts.value.push(weatherStore.getCityWeather(city, 1));
  }
})

// Индикация загрузки
const loadingIndicatorStore = useLoadingIndicatorStore();

const isLoading = computed(() => favoritesPageForecasts.value.length !== favoritesStore.favorites.length);

watch(isLoading, (value) => {
  loadingIndicatorStore.setLoadingIndicator(value);
}, {immediate: true})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/mixins/mixins';

.favorites {
  &__form {
    margin-bottom: 40px;
    padding: 0 4px;
  }

  &__list {
    @include clear-list;

    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
