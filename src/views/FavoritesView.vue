<template>
  <div class="favorites">
    <form class="favorites__form" action="#" @submit.prevent="onSubmit">
      <app-input
          type="text"
          name="favorite"
          placeholder="Name of the city"
          v-model="searchValue"
          :is-valid="isValid"
          :empty-error-message="'Enter the name of the city'"
      />
    </form>

    <ul class="favorites__list">
      <li class="favorites__item">
        <city-card
            :to="{ name: 'detailed', params: { city: 'test' } }"
            title="Surat"
            weather="Sunny"
        />
      </li>
      <li class="favorites__item">
        <city-card
            :to="{ name: 'detailed', params: { city: 'test' } }"
            title="Mumbai"
            weather="Rain"
        />
      </li>
      <li class="favorites__item">
        <city-card
            :to="{ name: 'detailed', params: { city: 'test' } }"
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
import { ref, watch } from "vue";

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

.favorites {
  &__form {
    margin-bottom: 40px;
    padding: 0 4px;
  }

  &__list {
    @include clear-list;

    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
