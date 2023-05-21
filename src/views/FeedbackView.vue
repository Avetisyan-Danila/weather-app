<template>
  <div class="feedback">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>

    <h2 class="feedback__title title title--lg">
      Your feedback can help everyone see more
      accurate weather conditions!
    </h2>
    <form action="#" @submit.prevent="onSubmit">
      <ul class="feedback__list">
        <li class="feedback__item">
          <input class="feedback__input" v-model="picked" type="radio" name="weather" value="sunny" id="sunny">
          <label class="feedback__label" for="sunny">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/sunny.svg')"
                  alt="Sunny"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Sunny</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" v-model="picked" type="radio" name="weather" value="cloudy" id="cloudy">
          <label class="feedback__label" for="cloudy">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/cloudy.svg')"
                  alt="Cloudy"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Cloudy</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" v-model="picked" type="radio" name="weather" value="rain" id="rain">
          <label class="feedback__label" for="rain">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/rain.svg')"
                  alt="Rain"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Rain</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" v-model="picked" type="radio" name="weather" value="snow" id="snow">
          <label class="feedback__label" for="snow">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/snow.svg')"
                  alt="Snow"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Snow</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" v-model="picked" type="radio" name="weather" value="storm" id="storm">
          <label class="feedback__label" for="storm">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/storm.svg')"
                  alt="Storm"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Storm</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" v-model="picked" type="radio" name="weather" value="thunder" id="thunder">
          <label class="feedback__label" for="thunder">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/thunder.svg')"
                  alt="Thunder"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Thunder</div>
          </label>
        </li>
      </ul>

      <div class="feedback__error">
        <transition name="fade" appear>
          <span v-if="showError">Select weather conditions</span>
        </transition>
      </div>

      <app-button class="feedback__button" type="submit">Submit</app-button>
    </form>
  </div>
</template>

<script setup>
import AppButton from '@/common/components/AppButton.vue';
import { getImage } from '@/common/helpers/getImage.js';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const picked = ref('');
const showError = ref(false);

watch(picked, () => showError.value = false);

const onSubmit = () => {
  if (!picked.value) {
    showError.value = true;
    return;
  }

  showError.value = false;
  router.push({name: 'success'});
  picked.value = '';
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/ds-system/ds';
@import '@/assets/scss/mixins/mixins';

.feedback {
  display: flex;
  flex-direction: column;
}

.feedback__title {
  margin-bottom: 30px;
}

.feedback__list {
  @include clear-list;

  display: flex;
  flex-wrap: wrap;
  gap: 36px;

  margin-bottom: 40px;
}

.feedback__label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  gap: 20px;
}

.feedback__input {
  display: none;

  &:checked + .feedback__label .feedback__img {
    background-color: rgba($white, 0.30);
  }
}

.feedback__img {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 100px;

  background-color: rgba(3, 3, 3, 0.23);
  transition: 0.3s;
  border-radius: 50%;
}

.feedback__error {
  @include m-s14-h14;
  height: 20px;
  color: $red;
  text-align: center;
  margin-bottom: 20px;
}

.feedback__button {
  width: 100%;
}
</style>
