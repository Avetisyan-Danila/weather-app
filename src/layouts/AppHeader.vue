<template>
  <header class="header">
    <div
        v-if="!historyBack"
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
        v-else
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

    <h2 class="header__title title title--md">Moscow</h2>

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
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const historyBack = ref(window.history.state.back);

router.afterEach(async () => {
  historyBack.value = window.history.state.back;
})

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

  @media (max-width: 415px) {
    position: fixed;
    width: 100%;
    left: 0;
    padding: 20px 20px 0;
  }

  &:before {
    @media (max-width: 415px) {
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
  position: absolute;
  z-index: -1;
  top: 50%;
  text-align: center;
}
</style>
