<template>
  <div class="search">
    <div class="search__top">
      <form class="search__form" action="#" @submit.prevent="onSubmit">
        <app-input
            type="text"
            name="search"
            placeholder="Name of the city"
            v-model="searchValue"
            :is-valid="isValid"
            :empty-error-message="'Enter the name of the city'"
            :search-error-message="searchError"
        />
      </form>

      <div
          @click="onLocationClick"
          class="search__location"
      >
        <img
            :src="getImage('icons/location.svg')"
            alt="Geolocation"
            width="22"
            height="22"
        />
      </div>
    </div>

    <transition name="fade" appear>
      <div
          v-if="searchPageForecasts.length"
          class="recent"
      >
        <div class="recent__title">Recent searches</div>
        <ul class="recent__list">
          <li
              v-for="forecast in searchPageForecasts"
              class="recent__item"
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
    </transition>
  </div>
</template>

<script setup>
import AppInput from '@/common/components/AppInput.vue';
import CityCard from '@/modules/city-card/CityCard.vue';
import weatherConditions from '@/common/enums/weatherConditions.js';
import { getImage } from '@/common/helpers/getImage.js';
import { onMounted, ref, watch } from 'vue';
import { useWeatherStore } from '@/stores/weather.js';
import { capitalizeFirstLetter } from '@/common/helpers/capitalizeFirstLetter.js';
import { useRecentSearchesStore } from '@/stores/recentSearches.js';
import { useRouter } from 'vue-router';
import { getUserCityName } from '@/common/helpers/getUserCityName.js';

const isValid = ref(true);
const searchValue = ref('');
const searchError = ref('');
const userCity = ref('');

const router = useRouter();

watch(searchValue, () => {
  isValid.value = true;
})

const weatherStore = useWeatherStore();
const recentSearchesStore = useRecentSearchesStore();

const searchPageForecasts = ref([]);

const onLocationClick = async (evt) => {
  userCity.value = await getUserCityName();
  await onSubmit(evt, true);
}

const onSubmit = async (evt, isLocationClicked) => {
  if (!isLocationClicked && !searchValue.value) {
    isValid.value = false;
    searchError.value = '';
    return;
  }

  const value = isLocationClicked ? userCity.value : searchValue.value;

  try {
    await weatherStore.setCityWeather(value, 3);
    recentSearchesStore.setRecentSearch(value);
    searchError.value = '';

    await router.push({ name: 'detailed', params: { city: value }});
  } catch (e) {
    searchError.value = 'Couldn`t find the city';
  }
}

onMounted(async () => {
  for (const city of recentSearchesStore.recentSearches) {
    await weatherStore.setCityWeather(city, 1);
    searchPageForecasts.value.push(weatherStore.getCityWeather(city, 1));
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/mixins/mixins';

.search {
  &__top {
    display: flex;
    align-items: flex-start;
    gap: 15px;

    padding: 0 4px;
    margin-bottom: 40px;
  }

  &__form {
    flex-grow: 1;
  }

  &__location {
    right: 0;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 38px;
    height: 38px;
    cursor: pointer;

    @include purple-gradient;

    &:after {
      border-radius: 50%;
    }
  }
}

.recent {
  &__title {
    margin-bottom: 20px;
  }
  &__list {
    @include clear-list;

    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
