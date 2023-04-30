<template>
  <div class="feedback">
    <h2 class="feedback__title title title--lg">
      Your feedback can help everyone see more
      accurate weather conditions!
    </h2>
    <form action="#" @submit.prevent>
      <ul class="feedback__list">
        <li class="feedback__item">
          <input class="feedback__input" type="radio" name="weather" value="sunny" id="sunny">
          <label class="feedback__label" for="sunny">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/sunny.png')"
                  alt="Sunny"
                  width="70"
                  height="70"
                  style="transform: translateX(2px)"
              >
            </span>
            <div class="feedback__weather">Sunny</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" type="radio" name="weather" value="cloudy" id="cloudy">
          <label class="feedback__label" for="cloudy">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/cloudy.png')"
                  alt="Cloudy"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Cloudy</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" type="radio" name="weather" value="rain" id="rain">
          <label class="feedback__label" for="rain">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/rain.png')"
                  alt="Rain"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Rain</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" type="radio" name="weather" value="snow" id="snow">
          <label class="feedback__label" for="snow">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/snow.png')"
                  alt="Snow"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Snow</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" type="radio" name="weather" value="storm" id="storm">
          <label class="feedback__label" for="storm">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/storm.png')"
                  alt="Storm"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Storm</div>
          </label>
        </li>
        <li class="feedback__item">
          <input class="feedback__input" type="radio" name="weather" value="thunder" id="thunder">
          <label class="feedback__label" for="thunder">
            <span class="feedback__img">
              <img
                  :src="getImage('weather/thunder.png')"
                  alt="Thunder"
                  width="70"
                  height="70"
              >
            </span>
            <div class="feedback__weather">Thunder</div>
          </label>
        </li>
      </ul>

      <app-button class="feedback__button" type="submit">Submit</app-button>
    </form>
  </div>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";
import AppButton from "@/common/components/AppButton.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

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
  border-radius: 50%;
}

.feedback__button {
  width: 100%;
}
</style>
