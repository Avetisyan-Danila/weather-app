<template>
  <div class="success">
    <div class="success__content">
      Thank you for feedback!
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.success {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($black, 0.45);

  display: flex;
  justify-content: center;
  align-items: center;
}

.success__content {
  @include sb-s18-h18;

  box-sizing: border-box;
  width: 320px;
  padding: 40px;

  text-align: center;
  background: $purple-gradient;
  border-radius: 15px;
}
</style>
