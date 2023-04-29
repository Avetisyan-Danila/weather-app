<template>
  <div class="feedback">
    <h2 class="feedback__title title title--lg">Your feedback can help everyone see more
      accurate weather conditions!</h2>
    <ul class="feedback__list">
      <li class="feedback__item">
        <div class="feedback__img">
          <img
              class="detailed__img"
              :src="getImage('weather/sunny.png')"
              alt="Sunny"
              width="70"
              height="70"
              style="transform: translateX(2px)"
          >
        </div>
        <div class="feedback__weather">Sunny</div>
      </li>
      <li class="feedback__item">
        <div class="feedback__img">
          <img
              class="detailed__img"
              :src="getImage('weather/cloudy.png')"
              alt="Cloudy"
              width="70"
              height="70"
          >
        </div>
        <div class="feedback__weather">Cloudy</div>
      </li>
      <li class="feedback__item">
        <div class="feedback__img">
          <img
              class="detailed__img"
              :src="getImage('weather/rain.png')"
              alt="Rain"
              width="70"
              height="70"
          >
        </div>
        <div class="feedback__weather">Rain</div>
      </li>
      <li class="feedback__item">
        <div class="feedback__img">
          <img
              class="detailed__img"
              :src="getImage('weather/snow.png')"
              alt="Snow"
              width="70"
              height="70"
          >
        </div>
        <div class="feedback__weather">Snow</div>
      </li>
      <li class="feedback__item">
        <div class="feedback__img">
          <img
              class="detailed__img"
              :src="getImage('weather/storm.png')"
              alt="Storm"
              width="70"
              height="70"
          >
        </div>
        <div class="feedback__weather">Storm</div>
      </li>
      <li class="feedback__item">
        <div class="feedback__img">
          <img
              class="detailed__img"
              :src="getImage('weather/thunder.png')"
              alt="Thunder"
              width="70"
              height="70"
          >
        </div>
        <div class="feedback__weather">Thunder</div>
      </li>
    </ul>

    <app-button class="feedback__button" type="button">Submit</app-button>
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

.feedback__item {
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;
  gap: 20px;
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
