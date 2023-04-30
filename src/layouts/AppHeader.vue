<template>
  <header class="header">
    <div
        v-if="route.name === 'home'"
        class="header__button"
    >
      <img
          :src="getImage('icons/menu.svg')"
          alt="Menu"
          width="16"
          height="16"
      />
    </div>
    <div
        v-else-if="hasHistory"
        class="header__button"
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
        v-else
        class="header__button"
    >
      <img
          :src="getImage('icons/menu.svg')"
          alt="Menu"
          width="16"
          height="16"
      />
    </div>

    <h2 class="header__title title title--md">
      <transition name="slide-title" mode="out-in">
        <div :key="title">
          {{ title ?? 'Surat' }}
        </div>
      </transition>
    </h2>

    <transition name="fade" appear>
      <div
          v-if="route.name === 'home'"
          class="header__button header__button--refresh"
      >
        <img
            :src="getImage('icons/refresh.svg')"
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

const router = useRouter();
const route = useRoute();

const hasHistory = ref(!!window.history.state.back);
const title = ref('');

router.afterEach(async () => {
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

.header {
  box-sizing: border-box;
  position: sticky;
  z-index: 10;
  top: 0;
  width: 375px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 20px;

  @media (max-width: $sm) {
    position: fixed;
    width: 100%;
    left: 0;
    padding: 20px 20px 0;
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
  flex: 0 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
  background-color: rgba($white, 0.3);
  border-radius: 5px;
  cursor: pointer;

  &--refresh {
    transform: translateX(-2px);
  }
}

.header__title {
  @include sb-s18-h18;

  position: absolute;
  z-index: -1;
  top: 50%;
  text-align: center;
}
</style>
