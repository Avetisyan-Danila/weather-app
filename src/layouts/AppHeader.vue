<template>
  <header class="header">
    <transition-group name="fade-without-jump" mode="out-in">
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
          v-else-if="hasHistory && route.name !== 'success' && route.name !== 'detailed'"
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
      <transition name="fade-without-jump" mode="out-in">
        <div :key="title">
          {{ title ?? MAIN_CITY }}
        </div>
      </transition>
    </h2>

    <transition name="fade" appear>
      <div
          v-if="route.name === 'home'"
          class="header__button header__button--right"
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
          v-if="route.name === 'success' || route.meta.title === '7 Days'"
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
  </header>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";
import { MAIN_CITY } from "@/common/constants";

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
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/breakpoints";

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
    transform: translateX(-2px);

    @media (max-width: $sm) {
      right: 20px;
    }
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
