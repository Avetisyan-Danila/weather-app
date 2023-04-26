<template>
  <div class="content">
    <h1 class="visually-hidden">Weather forecast App</h1>

    <div class="content__wrapper">
      <div class="detailed-forecast">
        <h2 class="detailed-forecast__title title title--small">Sunny</h2>
        <img
            class="detailed-forecast__img"
            :src="getImage('weather/sunny.png')"
            alt="Sunny"
            width="172"
            height="139"
        >
        <div class="detailed-forecast__degrees">23</div>
        <div class="detailed-forecast__date">
          <span>Friday, </span>
          <span>26 August 2022</span>
          <span> | 10:00</span>
        </div>
        <ul class="stats">
          <li class="stats__point">
            <img
                class="stats__img"
                :src="getImage('stats/precipitation.png')"
                alt="Precipitation"
                width="24"
                height="24"
            >
            <span class="stats__value">30%</span>
            <span class="stats__name">Precipitation</span>
          </li>
          <li class="stats__point">
            <img
                class="stats__img"
                :src="getImage('stats/humidity.png')"
                alt="Humidity"
                width="24"
                height="24"
            >
            <span class="stats__value">20%</span>
            <span class="stats__name">Humidity</span>
          </li>
          <li class="stats__point">
            <img
                class="stats__img"
                :src="getImage('stats/wind-speed.png')"
                alt="Wind speed"
                width="24"
                height="24"
            >
            <span class="stats__value">9km/h</span>
            <span class="stats__name">Precipitation</span>
          </li>
        </ul>
      </div>
      <div class="weekly-forecast">
        <div class="weekly-forecast__header">
          <div class="weekly-forecast__title">Today</div>
          <div class="weekly-forecast__title">7-Day Forecasts</div>
        </div>
        <swiper
            class="weekly-forecast__list"
            :slides-per-view="'auto'"
            :space-between="10"
        >
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">10 AM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/cloudy.png')"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">12 AM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/rain.png')"
                  alt="Rain"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">1 PM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/rain.png')"
                  alt="Rain"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">3 PM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/thunder.png')"
                  alt="Thunder"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">5 PM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/rain-night.png')"
                  alt="Rain night"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">10 PM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/rain-night.png')"
                  alt="Rain night"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">1 AM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/cloudy.png')"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">4 AM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/cloudy.png')"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
          <swiper-slide class="weekly-forecast__item">
            <div class="weekly-forecast__time">7 AM</div>
            <div class="weekly-forecast__img">
              <img
                  :src="getImage('weather/cloudy.png')"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="weekly-forecast__degrees">23</div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="other-cities">
        <div class="other-cities__header">
          <div class="other-cities__title">Other Cities</div>
          <div class="other-cities__add-button">
            <img
                :src="getImage('icons/plus.svg')"
                alt="Add new city to others"
                width="14"
                height="14"
            >
          </div>
        </div>
        <swiper
            class="other-cities__list"
            :slides-per-view="'auto'"
            :space-between="10"
        >
          <swiper-slide class="other-cities__item">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/cloudy.png')"
                  alt="Cloudy"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Delhi</div>
              <div class="other-cities__weather">Cloudy</div>
            </div>
            <div class="other-cities__degrees">9</div>
          </swiper-slide>
          <swiper-slide class="other-cities__item">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/sunny.png')"
                  alt="Sunny"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Kolkata</div>
              <div class="other-cities__weather">Sunny</div>
            </div>
            <div class="other-cities__degrees">20</div>
          </swiper-slide>
          <swiper-slide class="other-cities__item">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/thunder.png')"
                  alt="Thunder"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Chennai</div>
              <div class="other-cities__weather">Thunder</div>
            </div>
            <div class="other-cities__degrees">12</div>
          </swiper-slide>
          <swiper-slide class="other-cities__item">
            <div class="other-cities__img">
              <img
                  :src="getImage('weather/sunny.png')"
                  alt="Sunny"
                  width="40"
                  height="40"
              >
            </div>
            <div class="other-cities__info">
              <div class="other-cities__name">Manali</div>
              <div class="other-cities__weather">Sunny</div>
            </div>
            <div class="other-cities__degrees">33</div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.content {
  padding-top: 45px;
}

.detailed-forecast {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__title {
    @include sb-s12-h18;

    text-align: center;
    margin-bottom: 18px;
  }

  &__img {
    margin-bottom: 28px;
  }

  &__degrees {
    @include degrees_circle(16px, 3px, -5px, -12px  );
    @include sb-s80-h80;

    margin-bottom: 5px;
  }

  &__date {
    margin-bottom: 20px;
  }
}

.stats {
  @include clear-list;
  @include purple-gradient;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 294px;
  box-sizing: border-box;
  padding: 15px 20px;
  margin-bottom: 40px;

  &__point {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__img {
    margin-bottom: 5px;
  }

  &__value {
    @include sb-s14-h21;
    margin-bottom: 3px;
  }

  &__name {
    @include m-s12-h18;
  }
}

.weekly-forecast {
  margin-bottom: 30px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__title {
    @include sb-s12-h18;
  }

  &__item {
    @include purple-gradient;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 20%;
    padding: 5px 0;
    height: 90px;
  }

  &__time {
    @include sb-s12-h18;
  }

  &__degrees {
    @include sb-s12-h18;
    @include degrees_circle(5px, 1px, -2px, -6px);
  }
}

.other-cities {
  margin-bottom: 60px;

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__item {
    @include purple-gradient;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    width: 39%;
    padding: 5px 10px;
    min-height: 50px;
  }

  &__name {
    @include sb-s14-h14;

    margin-bottom: 5px;
  }

  &__weather {
    @include sb-s10-h14;
  }

  &__degrees {
    @include degrees_circle(5px, 1px, -2px, 2px);
    @include sb-s16-h16;

    flex: 1 0 auto;
    text-align: right;
    padding-right: 10px;
  }
}
</style>
