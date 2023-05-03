<template>
  <div class="search">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <div class="search__top">
      <form class="search__form" action="#" @submit.prevent="onSubmit">
        <app-input
            type="text"
            name="search"
            placeholder="Name of the city"
            v-model="searchValue"
            :is-valid="isValid"
            :error-message="'Enter the name of the city'"
        />
      </form>

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
import {ref, watch} from "vue";
import AppInput from "@/common/components/AppInput.vue";
import CityCard from "@/modules/city-card/CityCard.vue";

const isValid = ref(true);
const searchValue = ref('');

watch(searchValue, () => {
  isValid.value = true;
})

const onSubmit = () => {
  if (!searchValue.value) {
    isValid.value = false;
    return;
  }

  console.log('Success')
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.search {
  &__top {
    display: flex;
    align-items: center;
    gap: 15px;

    padding: 0 4px;
    margin-bottom: 40px;
  }

  &__form {
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
