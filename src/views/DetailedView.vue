<template>
  <div class="detailed" v-if="cityForecast">
    <div class="detailed__add">
      <div
          @click="onAddButtonClick"
          class="detailed__add-button"
          :class="{'detailed__add-button--active': isFavoriteCity}"
      >
        <img
            :src="isFavoriteCity ? getImage('icons/heart-red.svg') : getImage('icons/heart.svg')"
            alt="Bell"
            width="20"
            height="20"
        >
      </div>
    </div>

    <h2 class="detailed__title">{{ detailedCity }}</h2>

    <div class="detailed__info">
      <div class="detailed__info-top">
        <img
            class="detailed__img"
            :src="getImage(`weather/${cityForecast.currentDayIcon}.svg`)"
            alt="Cloudy"
            width="169"
            height="132"
        >
        <div class="detailed__degrees-block">
          <div class="detailed__degrees-afternoon">{{ Math.round(cityForecast.forecast.forecastday[0].day.maxtemp_c) }}</div>
          <div class="detailed__degrees-separator"></div>
          <div class="detailed__degrees-night">{{ Math.round(cityForecast.forecast.forecastday[0].day.mintemp_c) }}</div>
        </div>
      </div>

      <stats-info
          :weather-info="cityForecast"
          class="detailed__stats"
      />
    </div>

    <div class="weekly-weather">
      <ul class="weekly-weather__list">
        <li
            v-for="forecast in cityWeekForecast"
            :key="forecast.date"
            class="weekly-weather__item"
        >
          <div class="weekly-weather__day">{{ weekDays[new Date(forecast.date).getDay()] }}</div>
          <div class="weekly-weather__forecast">
            <img
                class="weekly-weather__img"
                :src="getImage(`weather/${getWeatherIconName(forecast.day.condition.code, 12)}.svg`)"
                alt="Cloudy"
                width="50"
                height="50"
            >
            <div class="weekly-weather__weather-name">Cloudy</div>
          </div>
          <div class="weekly-weather__degrees-block">
            <div class="weekly-weather__degrees-item">{{ Math.round(forecast.day.maxtemp_c) }}</div>
            <div class="weekly-weather__degrees-item">{{ Math.round(forecast.day.mintemp_c) }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import StatsInfo from "@/modules/stats/StatsInfo.vue";
import { getImage } from "@/common/helpers/getImage.js";
import { useRoute } from "vue-router";
import { computed, onMounted, ref } from "vue";
import { useWeatherStore } from "@/stores/weather.js";
import { weekDays } from "@/common/constants/index.js";
import { getWeatherIconName } from "@/common/helpers/getWeatherIconName.js";
import { useFavoritesStore } from "@/stores/favorites.js";

const route = useRoute();

const weatherStore = useWeatherStore();
const favoritesStore = useFavoritesStore();

const cityForecast = ref(null);
const detailedCity = route.params.city;

const cityWeekForecast = computed(() => {
  return cityForecast?.value?.forecast.forecastday;
})

const isFavoriteCity = computed(() => favoritesStore.getFavoriteCity(detailedCity));

const onAddButtonClick = () => {
  if (favoritesStore.getFavoriteCity(detailedCity)) {
    favoritesStore.removeFavoriteCity(detailedCity)
  } else {
    favoritesStore.setFavoriteCity(detailedCity)
  }
}

onMounted(async () => {
  // Получение информации по главному городу
  await weatherStore.setCityWeather(detailedCity, 3);
  cityForecast.value = weatherStore.getCityWeather(detailedCity, 3);
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/breakpoints';
@import '@/assets/scss/mixins/mixins';

.detailed {
  &__add {
    display: flex;
    justify-content: flex-end;
  }

  &__add-button {
    display: inline-flex;
    align-items: center;
    gap: 5px;

    padding: 5px 8px;

    cursor: pointer;
    border: 2px solid $white;
    border-radius: 6px;

    transition: 0.3s;

    &--active {
      background-color: $white;
      color: $black;
    }
  }

  &__title {
    @include sb-s18-h18;
    text-align: center;
  }

  &__info {
    @include purple-gradient;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    margin-bottom: 40px;

    &:after {
      border-radius: 15px;
    }
  }

  &__info-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
    padding-right: 15px;
  }

  &__degrees-block {
    position: relative;

    display: flex;
    align-items: flex-end;
  }

  &__degrees-afternoon {
    @include sb-s55-h55;
    @include degrees_circle(8px, 2px, -4px, -10px);

    margin-right: 10px;
    margin-bottom: 5px;
  }

  &__degrees-separator {
    height: 35px;
    width: 3px;
    background-color: $white;
    transform: rotate(19deg);
  }

  &__degrees-night {
    @include sb-s25-h25;
    @include degrees_circle(8px, 2px, -4px, -12px);

    margin-left: 15px;
    transform: translateY(5px);
  }

  &__stats {
    max-width: 320px;

    &:after {
      content: none;
    }
  }
}

.weekly-weather {
  @media (max-width: $sm) {
    margin-bottom: 80px;
  }

  &__list {
    @include clear-list;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__day {
    @include r-s16-h24;

    flex: 0 0 100px;
  }

  &__forecast {
    display: flex;
    align-items: center;

    gap: 10px;
  }

  &__weather-name {
    @include m-s14-h21;

    opacity: 0.6;
  }

  &__degrees-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin-right: 10px;

    flex: 0 0 100px;
  }

  &__degrees-item {
    @include m-s16-h24;
    @include degrees_circle(6px, 1px, 0px, -8px);
  }
}
</style>
