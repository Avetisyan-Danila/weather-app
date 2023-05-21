<template>
  <div class="menu">
    <ul class="menu__list">
      <li
          class="menu__item"
      >
        <router-link
            class="menu__link"
            :class="{'menu__link--active': route.name === 'home' || isDetailedOpen('home')}"
            to="/"
        >
          <img
              :src="getImage('icons/home.svg')"
              alt="Home"
              width="24"
              height="24"
          >
        </router-link>
      </li>
      <li
          class="menu__item"
      >
        <router-link
            class="menu__link"
            :class="{'menu__link--active': route.name === 'search' || isDetailedOpen('search')}"
            :to="{ name: 'search' }"
        >
          <img
              :src="getImage('icons/search.svg')"
              alt="Search"
              width="20"
              height="20"
          >
        </router-link>
      </li>
      <li class="menu__item">
        <router-link
            class="menu__link"
            :class="{'menu__link--active': route.name === 'feedback' || route.name === 'success'}"
            :to="{ name: 'feedback' }"
        >
          <img
              :src="getImage('icons/feedback.svg')"
              alt="Feedback"
              width="24"
              height="24"
          >
        </router-link>
      </li>
      <li class="menu__item">
        <router-link
            class="menu__link"
            :class="{'menu__link--active': route.name === 'favorites' || isDetailedOpen('favorites')}"
            :to="{ name: 'favorites' }"
        >
          <img
              :src="getImage('icons/heart.svg')"
              alt="Bell"
              width="24"
              height="24"
          >
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getImage } from '@/common/helpers/getImage.js';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const prevRoute = ref(null);
router.afterEach((to, from) => prevRoute.value = from);

const isDetailedOpen = (name) => route.name === 'detailed' && prevRoute.value.name === name;
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/breakpoints';
@import '@/assets/scss/mixins/mixins';

.menu {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;

  @media (max-width: $sm) {
    position: fixed;
    width: 100%;
    left: 0;
    transform: translateX(0);
  }

  &:before {
    @media (max-width: $sm) {
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

.menu__link {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  padding: 14px;
  width: 50px;
  height: 50px;

  cursor: pointer;
  transition: 0.3s;
  border-radius: 22px 22px 0 0;

  &--active {
    background-color: #5d4894;
  }
}
</style>
