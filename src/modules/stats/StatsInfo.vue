<template>
  <ul class="stats">
    <li class="stats__point">
      <img
          class="stats__img"
          :src="getImage('stats/precipitation.png')"
          alt="Precipitation"
          width="24"
          height="24"
      >
      <span class="stats__value">30%</span>
      <span class="stats__name">Precipitation</span>
    </li>
    <li class="stats__point">
      <img
          class="stats__img"
          :src="getImage('stats/humidity.png')"
          alt="Humidity"
          width="24"
          height="24"
      >
      <span class="stats__value">20%</span>
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
      <span class="stats__value">9km/h</span>
      <span class="stats__name">Wind speed</span>
    </li>
  </ul>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";

</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.stats {
  @include clear-list;
  @include purple-gradient;

  display: flex;
  align-items: center;
  justify-content: space-between;

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
