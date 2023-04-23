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
    <div>Москва</div>
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__button {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 35px;
  height: 35px;
  background-color: rgba($white, 0.3);
  border-radius: 5px;
}
</style>
