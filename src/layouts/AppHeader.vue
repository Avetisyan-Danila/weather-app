<template>
  <header class="header">
    <transition-group name="fade" mode="out-in">
      <div
          v-if="route.name === 'home'"
          class="header__button header__button--left"
      >
        <img
            :src="getImage('icons/menu.svg')"
            alt="Menu"
            width="16"
            height="16"
        />
      </div>
      <div
          v-else-if="hasHistory && route.name !== 'success'"
          class="header__button header__button--left"
          @click="router.go(-1)"
      >
        <img
            :src="getImage('icons/back.svg')"
            alt="Menu"
            width="16"
            height="16"
        />
      </div>
      <!-- В случае, если на сайт зашли по ссылке на какой-нибудь маршрут (например: /search) -->
      <div
          v-else-if="route.name !== 'success' && route.name !== 'detailed'"
          class="header__button header__button--left"
      >
        <img
            :src="getImage('icons/menu.svg')"
            alt="Menu"
            width="16"
            height="16"
        />
      </div>
    </transition-group>

    <h2 class="header__title title title--md">
      <transition name="fade-title" mode="out-in">
        <div :key="title">
          {{ title ?? MAIN_CITY }}
        </div>
      </transition>
    </h2>

    <transition name="fade" appear>
      <div
          v-if="route.name === 'home'"
          class="header__button header__button--right"
          @click="onRefresh"
      >
        <img
            :src="getImage('icons/refresh.svg')"
            alt="Меню"
            width="16"
            height="16"
        />
      </div>
    </transition>

    <transition name="fade" appear>
      <div
          v-if="hasHistory && route.name === 'success' || hasHistory && route.meta.title === '7 Days'"
          class="header__button header__button--right"
          @click="router.go(-1)"
      >
        <img
            :src="getImage('icons/close.svg')"
            alt="Меню"
            width="16"
            height="16"
        />
      </div>
    </transition>

    <transition name="fade" appear>
      <div
          v-if="loadingIndicatorStore.loading === true"
          class="header__button header__button--right header__button--loading"
      >
        <loading-indicator />
      </div>
    </transition>
  </header>
</template>

<script setup>
import { getImage } from '@/common/helpers/getImage.js';
import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import { MAIN_CITY } from '@/common/constants';
import { useWeatherStore } from '@/stores/weather.js';
import { useLoadingIndicatorStore } from '@/stores/loadingIndicator.js';
import otherCitiesNames from '@/mocks/other-cities-names.json';
import LoadingIndicator from "@/modules/loading-indicator/LoadingIndicator.vue";

const router = useRouter();
const route = useRoute();

const hasHistory = ref(!!window.history.state.back);
const title = ref('');

router.afterEach(() => {
  hasHistory.value = !!window.history.state.back;
})

// Наблюдение за изменением маршрута
watch(
    () => route.meta,
    async meta => {
      title.value = meta.title;
    }
)

const weatherStore = useWeatherStore();
// Обновление информации о погоде на главной при клике на кнопку refresh
const onRefresh = async () => {
  // Получение информации по главному городу
  await weatherStore.setCityWeather(MAIN_CITY, 2);

  // Получение информации по Other cities
  for (const value of otherCitiesNames) {
    await weatherStore.setCityWeather(value.name, 1)
  }
}

const loadingIndicatorStore = useLoadingIndicatorStore();
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/breakpoints';

.header {
  box-sizing: border-box;
  position: absolute;
  z-index: 10;
  top: 0;
  width: 375px;
  height: 55px;

  @media (max-width: $sm) {
    position: fixed;
    width: 100%;
    left: 0;
  }

  &:before {
    @media (max-width: $sm) {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      width: 100%;
      height: 75px;
      background: $dark-purple-gradient-no-rotate;
      opacity: 0.95;
    }
  }
}

.header__button {
  position: absolute;
  top: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  background-color: rgba($white, 0.3);
  border-radius: 5px;
  cursor: pointer;

  &--left {
    left: 0;

    @media (max-width: $sm) {
      left: 20px;
    }
  }

  &--right {
    right: 0;

    & + .header__button--right {
      right: 50px;

      @media (max-width: $sm) {
        right: 70px;
      }
    }

    @media (max-width: $sm) {
      right: 20px;
    }
  }

  &--loading {
    cursor: default;
    background: none;
  }
}

.header__title {
  @include sb-s18-h18;

  position: absolute;
  z-index: -1;
  top: 30px;
  text-align: center;
}
</style>
