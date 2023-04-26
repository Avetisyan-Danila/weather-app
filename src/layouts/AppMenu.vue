<template>
  <div class="menu">
    <ul class="menu__list">
      <li class="menu__item menu__item--active">
        <img
            :src="getImage('icons/home.svg')"
            alt="Home"
            width="24"
            height="24"
        >
      </li>
      <li class="menu__item">
        <img
            :src="getImage('icons/search.svg')"
            alt="Search"
            width="24"
            height="24"
        >
      </li>
      <li class="menu__item">
        <img
            :src="getImage('icons/feedback.svg')"
            alt="Feedback"
            width="24"
            height="24"
        >
      </li>
      <li class="menu__item">
        <img
            :src="getImage('icons/bell.svg')"
            alt="Bell"
            width="24"
            height="24"
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";

</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.menu {
  position: sticky;
  z-index: 10;
  bottom: 0;
  left: 50%;
  width: 375px;

  @media (max-width: 415px) {
    position: fixed;
    width: 100%;
    left: 0;
  }

  &:before {
    @media (max-width: 415px) {
      content: '';
      position: absolute;
      z-index: -1;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 70px;
      background: $dark-purple-gradient-no-rotate;
      opacity: 0.95;
    }
  }
}

.menu__list {
  @include clear-list;

  display: flex;
  justify-content: space-between;

  padding: 0 30px;
}

.menu__item {
  display: flex;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 14px;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &--active {
    @include purple-gradient;

    &:after {
      border-radius: 22px 22px 0 0;
    }
  }
}
</style>
