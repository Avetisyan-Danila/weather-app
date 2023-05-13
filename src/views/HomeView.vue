<template>
  <div class="home">
    <h1 class="visually-hidden">Weather forecast App</h1>

    <transition name="fade" appear>
      <div class="detailed-forecast" v-if="mainCityForecast">
        <h2 class="detailed-forecast__title title title--sm">{{ capitalizeFirstLetter(weatherConditions[mainCityForecast.current.condition.code]) }}</h2>
        <img
            class="detailed-forecast__img"
            :src="getImage(`weather/${mainCityForecast.currentDayIcon}.svg`)"
            :alt="mainCityForecast.currentDayIcon"
            width="172"
            height="172"
        >
        <div class="detailed-forecast__degrees">{{ Math.round(mainCityForecast.current.temp_c) }}</div>
        <div class="detailed-forecast__date">
          <span>{{ mainCityForecast.localtimeInfo.weekDay }}, </span>
          <span>{{ mainCityForecast.localtimeInfo.date }}</span>
          <span> | {{ mainCityForecast.localtimeInfo.time }}</span>
        </div>

        <stats-info
            :weather-info="mainCityForecast"
            class="detailed-forecast__stats"
        />
      </div>
    </transition>

    <transition name="fade" appear>
      <div class="hourly-forecast" v-if="mainCityForecast">
        <div class="hourly-forecast__header">
          <div class="hourly-forecast__title">24h forecast</div>
          <router-link :to="{ name: 'detailed', params: { city: MAIN_CITY } }">
            <app-button class="hourly-forecast__button" bordered>7-Day Forecasts</app-button>
          </router-link>
        </div>
        <swiper
            class="hourly-forecast__list"
            :slides-per-view="'auto'"
            :space-between="10"
        >
          <swiper-slide
              v-for="hourInfo in mainCityForecastCurrentDayHourly.slice(mainCityCurrentTime.getHours() + 1, mainCityForecastCurrentDayHourly.length)"
              :key="hourInfo.time"
              class="hourly-forecast__item"
          >
            <div class="hourly-forecast__time">
              {{ normalizeTime(new Date(hourInfo.time).getHours()) }}
              :
              {{ normalizeTime(new Date(hourInfo.time).getMinutes()) }}
            </div>
            <div class="hourly-forecast__img">
              <img
                  :src="getImage(`weather/${getWeatherIconName(hourInfo.condition.code, new Date(hourInfo.time).getHours())}.svg`)"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="hourly-forecast__degrees">{{ Math.round(hourInfo.temp_c) }}</div>
          </swiper-slide>
          <swiper-slide
              v-for="hourInfo in mainCityForecastNextDayHourly.slice(0, mainCityCurrentTime.getHours() + 1)"
              :key="hourInfo.time"
              class="hourly-forecast__item"
          >
            <div class="hourly-forecast__time">
              {{ normalizeTime(new Date(hourInfo.time).getHours()) }}
              :
              {{ normalizeTime(new Date(hourInfo.time).getMinutes()) }}
            </div>
            <div class="hourly-forecast__img">
              <img
                  :src="getImage(`weather/${getWeatherIconName(hourInfo.condition.code, new Date(hourInfo.time).getHours())}.svg`)"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="hourly-forecast__degrees">{{ Math.round(hourInfo.temp_c) }}</div>
          </swiper-slide>
        </swiper>
      </div>
    </transition>

    <div class="other-cities" v-if="otherCitiesForecast.length">
      <div class="other-cities__header">
        <div class="other-cities__title">Other Cities</div>
      </div>
      <swiper
          class="other-cities__list"
          :slides-per-view="'auto'"
          :space-between="10"
      >
        <swiper-slide
            v-for="city in otherCitiesForecast"
            :key="city.location.name"
            class="other-cities__item"
        >
          <router-link class="other-cities__link" :to="{ name: 'detailed', params: { city: city.location.name } }">
            <div class="other-cities__img">
              <img
                  :src="getImage(`weather/${city.currentDayIcon}.svg`)"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">{{ city.location.name }}</div>
              <div class="other-cities__weather">{{ capitalizeFirstLetter(weatherConditions[city.current.condition.code]) }}</div>
            </div>
            <div class="other-cities__degrees">{{ Math.round(city.current.temp_c) }}</div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import StatsInfo from "@/modules/stats/StatsInfo.vue";
import AppButton from "@/common/components/AppButton.vue";
import weatherConditions from "@/common/enums/weatherConditions.js";
import otherCitiesNames from "@/mocks/other-cities-names.json";
import { getImage } from "@/common/helpers/getImage.js";
import { MAIN_CITY } from "@/common/constants";
import { useWeatherStore } from "@/stores/weather.js";
import { computed, onMounted, ref } from "vue";
import { normalizeTime } from "@/common/helpers/normalizeTime.js";
import { getWeatherIconName } from "@/common/helpers/getWeatherIconName.js";
import { capitalizeFirstLetter } from "@/common/helpers/capitalizeFirstLetter.js";

const weatherStore = useWeatherStore();

const mainCityForecast = ref(null);

// Почасовая погода главного города на сегодня
const mainCityForecastCurrentDayHourly = computed(() => {
  return mainCityForecast?.value?.forecast.forecastday[0].hour;
});

// Почасовая погода главного города на завтра
const mainCityForecastNextDayHourly = computed(() => {
  return mainCityForecast?.value?.forecast.forecastday[1].hour;
});

// Время в главном городе
const mainCityCurrentTime = computed(() => {
  return new Date(mainCityForecast?.value?.location.localtime);
});

const otherCitiesForecast = ref([]);

onMounted(async () => {
  // Получение информации по главному городу
  await weatherStore.setCityWeather(MAIN_CITY, 2);
  mainCityForecast.value = weatherStore.getCityWeather(MAIN_CITY);

  // Получение информации по Other cities
  for (const value of otherCitiesNames) {
    await weatherStore.setCityWeather(value.name, 1)
    otherCitiesForecast.value.push(weatherStore.getCityWeather(value.name))
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.detailed-forecast {
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 458px;
  margin-bottom: 40px;

  &__title {
    @include sb-s12-h18;

    text-align: center;
    margin-bottom: 18px;
  }

  &__img {
    margin-bottom: 28px;
  }

  &__degrees {
    @include degrees_circle(16px, 3px, -9px, -16px  );
    @include sb-s80-h80;

    margin-bottom: 5px;
  }

  &__date {
    margin-bottom: 20px;
  }

  &__stats {
    max-width: 320px;
  }
}

.hourly-forecast {
  margin-bottom: 30px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  &__title {
    @include sb-s12-h18;
  }

  &__button.app-button {
    @include sb-s12-h18;
  }

  &__item {
    @include purple-gradient;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 20%;
    padding: 5px 0;
    height: 90px;
  }

  &__time {
    @include sb-s12-h18;
  }

  &__degrees {
    @include sb-s12-h18;
    @include degrees_circle(5px, 1px, -2px, -6px);
  }
}

.other-cities {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__item {
    width: 43%;
  }

  &__link {
    @include purple-gradient;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 10px 10px;
    height: 70px;
  }

  &__img {
    flex: 1 0 auto;
  }

  &__name {
    @include sb-s12-h14;

    color: $white;
    margin-bottom: 3px;
  }

  &__weather {
    @include r-s10-h12;

    color: $white;
  }

  &__degrees {
    @include degrees_circle(5px, 1px, -2px, 2px);
    @include sb-s16-h16;

    flex: 1 0 auto;
    text-align: right;
    padding-right: 10px;

    color: $white;
  }
}
</style>
