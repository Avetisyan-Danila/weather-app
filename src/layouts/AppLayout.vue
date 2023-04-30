<template>
  <div class="default-layout">
    <div class="default-layout__side-bg default-layout__side-bg--header"></div>
    <div class="default-layout__side-bg default-layout__side-bg--footer"></div>
    <div class="default-layout__bg">
      <img
          :src="getImage('clouds/variant-1.png')"
      >
    </div>

    <div class="wrapper">
      <app-header />
      <div class="main">
        <transition name="fade" appear>
          <slot />
        </transition>
      </div>
      <app-menu />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppMenu from "@/layouts/AppMenu.vue";
import { getImage } from "@/common/helpers/getImage.js";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/breakpoints";
@import "@/assets/scss/mixins/mixins";

.default-layout {
  position: relative;

  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  max-height: 800px;
  overflow: hidden;

  padding: 0 20px;
  border: 1px solid black;
  border-radius: 35px;
  box-shadow: $shadow-medium;

  @media (max-width: $sm) {
    max-height: 100%;
    border-radius: 0;
  }

  &__bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    mix-blend-mode: soft-light;
    opacity: 0.5;

    @media (max-width: $sm) {
      position: fixed;
    }
  }

  &__side-bg {
    position: absolute;
    z-index: 10;
    left: 0;
    width: 100%;
    height: 75px;
    background: $dark-purple-gradient-no-rotate;
    opacity: 0.9;

    @media (max-width: $sm) {
      display: none;
    }

    &--header {
      top: 0;
    }

    &--footer {
      bottom: 0;
    }
  }
}

.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: $sm) {
    margin: 60px 0 40px 0;
  }
}

.main {
  flex-grow: 1;
  padding: 45px 0 70px 0;
}
</style>
