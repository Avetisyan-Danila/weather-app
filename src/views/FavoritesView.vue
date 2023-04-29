<template>
  <div class="favorites">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>

    <app-input
        class="favorites__input"
        type="text"
        name="favorite"
        placeholder="Name of the city"
    />

    <ul class="favorites__list">
      <li class="favorites__item">
        <city-card
            :to="{ name: 'detailed-favorites', params: { city: 'test' } }"
            title="Surat"
            weather="Sunny"
        />
      </li>
      <li class="favorites__item">
        <city-card
            :to="{ name: 'detailed-favorites', params: { city: 'test' } }"
            title="Mumbai"
            weather="Rain"
        />
      </li>
      <li class="favorites__item">
        <city-card
            :to="{ name: 'detailed-favorites', params: { city: 'test' } }"
            title="Chennai"
            weather="Thunder"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import AppInput from "@/common/components/AppInput.vue";
import CityCard from "@/modules/city-card/CityCard.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.favorites {
  &__input {
    margin-bottom: 40px;
  }

  &__list {
    @include clear-list;

    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
