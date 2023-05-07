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

    <transition>
      <div class="hourly-forecast" v-if="mainCityForecast">
        <div class="hourly-forecast__header">
          <div class="hourly-forecast__title">Today</div>
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

    <div class="other-cities">
      <div class="other-cities__header">
        <div class="other-cities__title">Other Cities</div>
        <div class="other-cities__add-button">
          <img
              :src="getImage('icons/plus.svg')"
              alt="Add new city to others"
              width="14"
              height="14"
          >
        </div>
      </div>
      <swiper
          class="other-cities__list"
          :slides-per-view="'auto'"
          :space-between="10"
      >
        <swiper-slide class="other-cities__item">
          <router-link class="other-cities__link" :to="{ name: 'detailed', params: { city: 'test' } }">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/cloudy.svg')"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Delhi</div>
              <div class="other-cities__weather">Cloudy</div>
            </div>
            <div class="other-cities__degrees">9</div>
          </router-link>
        </swiper-slide>
        <swiper-slide class="other-cities__item">
          <router-link class="other-cities__link" :to="{ name: 'detailed', params: { city: 'test' } }">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/sunny.svg')"
                  alt="Sunny"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Kolkata</div>
              <div class="other-cities__weather">Sunny</div>
            </div>
            <div class="other-cities__degrees">20</div>
          </router-link>
        </swiper-slide>
        <swiper-slide class="other-cities__item">
          <router-link class="other-cities__link" :to="{ name: 'detailed', params: { city: 'test' } }">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/thunder.svg')"
                  alt="Thunder"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Chennai</div>
              <div class="other-cities__weather">Thunder</div>
            </div>
            <div class="other-cities__degrees">12</div>
          </router-link>
        </swiper-slide>
        <swiper-slide class="other-cities__item">
          <router-link class="other-cities__link" :to="{ name: 'detailed', params: { city: 'test' } }">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/sunny.svg')"
                  alt="Sunny"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Manali</div>
              <div class="other-cities__weather">Sunny</div>
            </div>
            <div class="other-cities__degrees">33</div>
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
import { getImage } from "@/common/helpers/getImage.js";
import { MAIN_CITY } from "@/common/constants";
import { useWeatherStore } from "@/stores/weather.js";
import {computed, onMounted, ref} from "vue";
import {normalizeTime} from "../common/helpers/normalizeTime.js";
import {getWeatherIconName} from "@/common/helpers/getWeatherIconName.js";
import weatherConditions from "../common/enums/weatherConditions.js";
import {capitalizeFirstLetter} from "../common/helpers/capitalizeFirstLetter.js";
import AppButton from "@/common/components/AppButton.vue";

const weatherStore = useWeatherStore();

const mainCityForecast = ref(null);

const mainCityForecastCurrentDayHourly = computed(() => {
  return mainCityForecast?.value?.forecast.forecastday[0].hour;
});

const mainCityForecastNextDayHourly = computed(() => {
  return mainCityForecast?.value?.forecast.forecastday[1].hour;
});

const mainCityCurrentTime = computed(() => {
  return new Date(mainCityForecast?.value?.location.localtime);
});

onMounted(async () => {
  await weatherStore.setCityWeather(MAIN_CITY, 2);
  mainCityForecast.value = weatherStore.getCityWeather(MAIN_CITY);
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
    max-width: 295px;
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
    width: 39%;
  }

  &__link {
    @include purple-gradient;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 5px 10px;
    min-height: 50px;
  }

  &__name {
    @include sb-s14-h14;

    color: $white;
    margin-bottom: 5px;
  }

  &__weather {
    @include sb-s10-h14;

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
