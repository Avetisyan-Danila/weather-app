<template>
  <label class="app-input">
    <input
        :value="modelValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        @input="emit('update:modelValue', $event.target.value)"
        :class="{'error': !isValid}"
        @focus="onFocus"
    />
  </label>
  <div v-if="!isValid" class="error-message">{{ emptyErrorMessage }}</div>
  <div v-if="searchErrorMessage" class="error-message">{{ searchErrorMessage }}</div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  isValid: {
    type: Boolean,
    default: true,
  },
  emptyErrorMessage: {
    type: String,
    default: '',
  },
  searchErrorMessage: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['update:modelValue']);

// Для того, чтобы убрать белое пространство сверху при вводе в инпут (Safari)
const onFocus = () => {
  setTimeout(() => {
    window.scrollTo({ top: 1, behavior: "smooth" });
  }, 100)
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds";
@import "@/assets/scss/mixins/mixins";

.app-input {
  display: block;

  input {
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    padding: 5px 20px 5px 50px;

    @include r-s16-h24;
    color: $white;
    background: transparent;
    border: 2px solid transparent;
    border-radius: 15px;
    transition: 0.4s;

    &:focus {
      outline: none;
      box-shadow: 0 0 3pt 2pt $purple;
    }

    &.error {
      box-shadow: 0 0 3pt 2pt $red;
    }
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

    background-image: url(../../assets/img/icons/search.svg);
    background-size: 100% 100%;
  }
}

.error-message {
  color: $red;
  margin-top: 10px;
  padding-left: 10px;
}
</style>
