<template>
  <router-link class="city-card" :to="to">
    <div class="city-card__info">
      <div class="city-card__title">{{ title }}</div>
      <div class="city-card__weather">{{ weatherName }}</div>
    </div>
    <img
        class="city-card__img"
        :src="getImage(`weather/${weatherIcon}.svg`)"
        alt="Cloudy"
        width="135"
        height="106"
    />
  </router-link>
</template>

<script setup>
import { getImage } from '@/common/helpers/getImage.js';

defineProps({
  to: {
    type: Object,
    default: () => {},
  },
  title: {
    type: String,
    default: '',
  },
  weatherIcon: {
    type: String,
    default: '',
  },
  weatherName: {
    type: String,
    default: '',
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/mixins/mixins';

.city-card {
  @include purple-gradient;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  padding: 20px 30px;
  height: 90px;

  &:after {
    width: 80%;
    border-radius: 15px;
  }

  &__title {
    @include sb-s20-h20;

    color: $white;
    margin-bottom: 10px;
  }

  &__weather {
    @include m-s14-h14;

    color: $white;
  }

  &__img {
    position: absolute;
    top: -20px;
    right: 0px;
  }
}
</style>
