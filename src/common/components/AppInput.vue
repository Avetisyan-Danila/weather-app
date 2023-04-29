<template>
  <label class="app-input">
    <input
        :value="modelValue"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        @input="emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
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
  }
})

const emit = defineEmits(['update:modelValue'])

const input = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
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

    background-image: url(../../assets/img/icons/search.svg);
    background-size: 100% 100%;
  }
}
</style>
