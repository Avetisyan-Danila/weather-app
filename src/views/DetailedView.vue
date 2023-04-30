<template>
  <div class="detailed">
    <div class="detailed__add">
      <div class="detailed__add-button">
        <img
            :src="getImage('icons/heart.svg')"
            alt="Bell"
            width="20"
            height="20"
        >
      </div>
    </div>

    <div class="detailed__info">
      <div class="detailed__top">
        <img
            class="detailed__img"
            :src="getImage('weather/cloudy.png')"
            alt="Cloudy"
            width="169"
            height="132"
        >
        <div class="detailed__degrees-block">
          <div class="detailed__degrees-afternoon">23</div>
          <div class="detailed__degrees-night">17</div>
        </div>
      </div>

      <stats-info class="detailed__stats" />
    </div>

    <div class="weekly-weather">
      <ul class="weekly-weather__list">
        <li class="weekly-weather__item">
          <div class="weekly-weather__day">Monday</div>
          <div class="weekly-weather__weather">
            <img
                class="weekly-weather__img"
                :src="getImage('weather/cloudy.png')"
                alt="Cloudy"
                width="50"
                height="50"
            >
            <div class="weekly-weather__weather-name">Cloudy</div>
          </div>
          <div class="weekly-weather__degrees-block">
            <div class="weekly-weather__degrees-item"><span>+</span>26</div>
            <div class="weekly-weather__degrees-item"><span>+</span>11</div>
          </div>
        </li>
        <li class="weekly-weather__item">
          <div class="weekly-weather__day">Monday</div>
          <div class="weekly-weather__weather">
            <img
                class="weekly-weather__img"
                :src="getImage('weather/cloudy.png')"
                alt="Cloudy"
                width="50"
                height="50"
            >
            <div class="weekly-weather__weather-name">Cloudy</div>
          </div>
          <div class="weekly-weather__degrees-block">
            <div class="weekly-weather__degrees-item"><span>+</span>26</div>
            <div class="weekly-weather__degrees-item"><span>+</span>11</div>
          </div>
        </li>
        <li class="weekly-weather__item">
          <div class="weekly-weather__day">Monday</div>
          <div class="weekly-weather__weather">
            <img
                class="weekly-weather__img"
                :src="getImage('weather/cloudy.png')"
                alt="Cloudy"
                width="50"
                height="50"
            >
            <div class="weekly-weather__weather-name">Cloudy</div>
          </div>
          <div class="weekly-weather__degrees-block">
            <div class="weekly-weather__degrees-item"><span>+</span>26</div>
            <div class="weekly-weather__degrees-item"><span>+</span>11</div>
          </div>
        </li>
        <li class="weekly-weather__item">
          <div class="weekly-weather__day">Monday</div>
          <div class="weekly-weather__weather">
            <img
                class="weekly-weather__img"
                :src="getImage('weather/cloudy.png')"
                alt="Cloudy"
                width="50"
                height="50"
            >
            <div class="weekly-weather__weather-name">Cloudy</div>
          </div>
          <div class="weekly-weather__degrees-block">
            <div class="weekly-weather__degrees-item"><span>+</span>26</div>
            <div class="weekly-weather__degrees-item"><span>+</span>11</div>
          </div>
        </li>
        <li class="weekly-weather__item">
          <div class="weekly-weather__day">Monday</div>
          <div class="weekly-weather__weather">
            <img
                class="weekly-weather__img"
                :src="getImage('weather/cloudy.png')"
                alt="Cloudy"
                width="50"
                height="50"
            >
            <div class="weekly-weather__weather-name">Cloudy</div>
          </div>
          <div class="weekly-weather__degrees-block">
            <div class="weekly-weather__degrees-item"><span>+</span>26</div>
            <div class="weekly-weather__degrees-item"><span>+</span>11</div>
          </div>
        </li>
        <li class="weekly-weather__item">
          <div class="weekly-weather__day">Monday</div>
          <div class="weekly-weather__weather">
            <img
                class="weekly-weather__img"
                :src="getImage('weather/cloudy.png')"
                alt="Cloudy"
                width="50"
                height="50"
            >
            <div class="weekly-weather__weather-name">Cloudy</div>
          </div>
          <div class="weekly-weather__degrees-block">
            <div class="weekly-weather__degrees-item"><span>+</span>26</div>
            <div class="weekly-weather__degrees-item"><span>+</span>11</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import StatsInfo from "@/modules/stats/StatsInfo.vue";
import { getImage } from "@/common/helpers/getImage.js";
import { onMounted } from "vue";

onMounted(() => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 250)
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/breakpoints";
@import "@/assets/scss/mixins/mixins";

.detailed {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;

  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 100px 20px 100px 20px;

  background: $dark-purple-gradient;

  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__add {
    display: flex;
    justify-content: flex-end;
  }

  &__add-button {
    display: inline-flex;
    align-items: center;
    gap: 5px;

    margin-bottom: 20px;
    padding: 5px 8px;

    border: 2px solid $white;
    border-radius: 6px;

    &--active {
      background-color: $white;
      color: $black;
    }
  }

  &__info {
    @include purple-gradient;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    margin-bottom: 40px;

    &:after {
      border-radius: 15px;
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;
    width: 100%;
    margin-bottom: 20px;
    padding-right: 15px;
  }

  &__degrees-block {
    position: relative;

    display: flex;
    align-items: flex-end;
    gap: 30px;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 63%;
      transform: rotate(19deg) translate(-50%, -50%);

      height: 35px;
      width: 3px;
      background-color: $white;
    }
  }

  &__degrees-afternoon {
    @include sb-s55-h80;
    @include degrees_circle(10px, 2px, 6px, -10px);

    margin-bottom: 26px;
  }

  &__degrees-night {
    @include sb-s25-h80;
    @include degrees_circle(8px, 1px, 20px, -12px);
  }

  &__stats {
    max-width: 320px;

    &:after {
      content: none;
    }
  }
}

.weekly-weather {
  @media (max-width: $sm) {
    margin-bottom: 80px;
  }

  &__list {
    @include clear-list;

    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__day {
    @include r-s16-h24;

    flex: 0 0 100px;
  }

  &__weather {
    display: flex;
    align-items: center;

    gap: 8px;
  }

  &__weather-name {
    @include m-s14-h21;

    opacity: 0.6;
  }

  &__degrees-block {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;

    flex: 0 0 100px;
  }

  &__degrees-item {
    @include m-s16-h24;
    @include degrees_circle(6px, 1px, 0px, -8px);
  }
}
</style>
