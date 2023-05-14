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

    <ul class="favorites__list">
      <li class="favorites__item">
        <city-card
            :to="{ name: 'detailed', params: { city: 'test' } }"
            title="Surat"
            weatherIcon="sunny"
            weatherName="Sunny"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppInput from "@/common/components/AppInput.vue";
import CityCard from "@/modules/city-card/CityCard.vue";
import { ref, watch } from "vue";
import {useWeatherStore} from "@/stores/weather.js";
import {useRecentSearchesStore} from "@/stores/recentSearches.js";
import {useFavoritesStore} from "@/stores/favorites.js";
import {useRouter} from "vue-router";

const isValid = ref(true);
const searchValue = ref('');
const searchError = ref('');

watch(searchValue, () => {
  isValid.value = true;
})

const router = useRouter();
const weatherStore = useWeatherStore();

const onSubmit = async () => {
  if (!searchValue.value) {
    isValid.value = false;
    searchError.value = '';
    return;
  }

  try {
    await weatherStore.setCityWeather(searchValue.value, 7);
    searchError.value = '';

    await router.push({ name: 'detailed', params: { city: searchValue.value }});
  } catch (e) {
    searchError.value = 'Couldn`t find the city';
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

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
