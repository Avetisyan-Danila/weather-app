<template>
  <header class="header">
    <router-link to="" class="header__button">
      <img
          :src="getImage('icons/menu.svg')"
          alt="Меню"
          width="16"
          height="16"
      />
    </router-link>
    <div class="header__title title title--md">Moscow</div>
    <router-link to="" class="header__button">
      <img
          :src="getImage('icons/refresh.svg')"
          alt="Меню"
          width="16"
          height="16"
      />
    </router-link>
  </header>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";

</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";

.header {
  box-sizing: border-box;
  position: sticky;
  z-index: 10;
  top: 0;
  left: 50%;
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
  flex: 1 0 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
  background-color: rgba($white, 0.3);
  border-radius: 5px;
}

.header__title {
  text-align: center;
}
</style>
