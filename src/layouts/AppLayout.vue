<template>
  <div class="default-layout">
    <div class="default-layout__side-bg default-layout__side-bg--header"></div>
    <div class="wrapper">
      <app-header />
      <div class="main">
        <transition name="fade" appear>
          <slot />
        </transition>
      </div>
      <app-menu />
    </div>
    <div class="default-layout__side-bg default-layout__side-bg--footer"></div>
  </div>
</template>

<script setup>
import AppHeader from "@/layouts/AppHeader.vue";
import AppMenu from "@/layouts/AppMenu.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
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
  border-radius: 35px;

  @media (max-width: 415px) {
    max-height: 100%;
    border-radius: 0;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(@/assets/img/clouds/variant-1.png) no-repeat;
    background-size: 100%;
    mix-blend-mode: soft-light;
    opacity: 0.5;
    backdrop-filter: blur(40px);
    z-index: -1;
  }

  &__side-bg {
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    height: 75px;
    background: $dark-purple-gradient-no-rotate;
    opacity: 0.9;

    @media (max-width: 415px) {
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

  @media (max-width: 415px) {
    margin: 60px 0 40px 0;
  }
}

.main {
  flex-grow: 1;
  padding-top: 45px;
}
</style>
