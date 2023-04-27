<template>
  <div class="search-page">
    <div class="search__top">
      <label class="search__input">
        <input type="text" placeholder="Name of the city">
      </label>
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
          <div class="popular__info">
            <div class="popular__title">Surat</div>
            <div class="popular__weather">Sunny</div>
          </div>
          <img
              class="popular__img"
              :src="getImage('weather/cloudy.png')"
              alt="Cloudy"
              width="135"
              height="106"
          />
        </li>
        <li class="popular__item">
          <div class="popular__info">
            <div class="popular__title">Mumbai</div>
            <div class="popular__weather">Rainy</div>
          </div>
          <img
              class="popular__img"
              :src="getImage('weather/rain.png')"
              alt="Rain"
              width="135"
              height="106"
          />
        </li>
        <li class="popular__item">
          <div class="popular__info">
            <div class="popular__title">Chennai</div>
            <div class="popular__weather">Rainy</div>
          </div>
          <img
              class="popular__img"
              :src="getImage('weather/rain-night.png')"
              alt="Rain night"
              width="135"
              height="106"
          />
        </li>
        <li class="popular__item">
          <div class="popular__info">
            <div class="popular__title">Manali</div>
            <div class="popular__weather">Sunny</div>
          </div>
          <img
              class="popular__img"
              :src="getImage('weather/sunny.png')"
              alt="Sunny"
              width="135"
              height="106"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { getImage } from "@/common/helpers/getImage.js";

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

    input {
      box-sizing: border-box;
      width: 100%;
      height: 38px;
      padding: 5px 20px 5px 50px;

      @include r-s15-h15;
      color: $white;
      background: transparent;
      border: none;
      border-radius: 15px;
      outline: none;
    }

    @include purple-gradient;

    &:after {
      border-radius: 15px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 16px;

      width: 16px;
      height: 16px;

      background-image: url(../assets/img/icons/search.svg);
      background-size: 100% 100%;
    }
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

  &__item {
    @include purple-gradient;

    box-sizing: border-box;
    display: flex;
    align-items: center;

    padding: 20px 30px;
    height: 90px;

    &:after {
      width: 80%;
      border-radius: 15px;
    }
  }

  &__title {
    @include sb-s20-h20;

    margin-bottom: 10px;
  }

  &__weather {
    @include m-s14-h14;
  }

  &__img {
    position: absolute;
    top: -15px;
    right: 0px;
  }
}
</style>
