<template>
  <div>
    <input
      class="input-ui"
      type="text"
      :placeholder="placeholderText"
      :value="modelValue"
      @input="(event: any) => $emit('update:modelValue', event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholderText: {
    type: String,
    default: ''
  }
})
</script>

<style lang="sass" scoped>
.input-ui
	width: 100%
	padding: 16px
	color: var(--font-color)
	background-color: var(--background-color)
	border-radius: 16px
	border: none
	outline: none
	cursor: pointer
</style>
