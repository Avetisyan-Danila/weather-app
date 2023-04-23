<template>
  <div class="content">
    <h1 class="visually-hidden">Weather forecast App</h1>

    <div class="content__wrapper">
      <div class="detailed-forecast">
        <h2 class="detailed-forecast__title">Sunny</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";

.content {
  padding-top: 30px;
}

.detailed-forecast {
  &__title {
    text-align: center;
    @include sb-s12-h18;
  }
}
</style>
