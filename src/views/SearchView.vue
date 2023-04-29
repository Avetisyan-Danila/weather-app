<template>
  <div class="search">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <div class="search__top">
      <app-input
          class="search__input"
          type="text"
          name="search"
          placeholder="Name of the city"
      />

      <div class="search__location">
        <img
            :src="getImage('icons/location.svg')"
            alt="Geolocation"
            width="22"
            height="22"
        />
      </div>
    </div>

    <div class="popular">
      <ul class="popular__list">
        <li class="popular__item">
          <city-card
              :to="{ name: 'detailed-search', params: { city: 'test' } }"
              title="Surat"
              weather="Sunny"
          />
        </li>
        <li class="popular__item">
          <city-card
              :to="{ name: 'detailed-search', params: { city: 'test' } }"
              title="Mumbai"
              weather="Rain"
          />
        </li>
        <li class="popular__item">
          <city-card
              :to="{ name: 'detailed-search', params: { city: 'test' } }"
              title="Chennai"
              weather="Thunder"
          />
        </li>
        <li class="popular__item">
          <city-card
              :to="{ name: 'detailed-search', params: { city: 'test' } }"
              title="Manali"
              weather="Sunny"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";
import AppInput from "@/common/components/AppInput.vue";
import CityCard from "@/modules/city-card/CityCard.vue";

</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.search {
  &__top {
    display: flex;
    align-items: center;
    gap: 15px;

    margin-bottom: 40px;
  }

  &__input {
    flex-grow: 1;
  }

  &__location {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    cursor: pointer;

    @include purple-gradient;

    &:after {
      border-radius: 50%;
    }
  }
}

.popular {
  &__list {
    @include clear-list;

    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
