<template>
  <ul class="stats" v-if="weatherInfo">
    <li class="stats__point">
      <img
          class="stats__img"
          :src="getImage('stats/precipitation.png')"
          alt="Precipitation"
          width="24"
          height="24"
      >
      <span class="stats__value">{{ weatherInfo.forecast.forecastday[0].day.daily_chance_of_rain }}%</span>
      <span class="stats__name">Chance of rain</span>
    </li>
    <li class="stats__point">
      <img
          class="stats__img"
          :src="getImage('stats/humidity.png')"
          alt="Humidity"
          width="24"
          height="24"
      >
      <span class="stats__value">{{ weatherInfo.current.humidity }}%</span>
      <span class="stats__name">Humidity</span>
    </li>
    <li class="stats__point">
      <img
          class="stats__img"
          :src="getImage('stats/wind-speed.png')"
          alt="Wind speed"
          width="24"
          height="24"
      >
      <span class="stats__value">{{ Math.round(weatherInfo.current.wind_kph) }}km/h</span>
      <span class="stats__name">Wind speed</span>
    </li>
  </ul>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";

defineProps({
  weatherInfo: {
    type: Object,
    required: true,
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.stats {
  @include clear-list;
  @include purple-gradient;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  width: 100%;
  box-sizing: border-box;
  padding: 15px 20px;

  &__point {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img {
    margin-bottom: 5px;
  }

  &__value {
    @include sb-s14-h21;
    margin-bottom: 3px;
  }

  &__name {
    @include m-s12-h18;
  }
}
</style>
