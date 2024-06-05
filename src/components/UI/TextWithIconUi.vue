<template>
  <div class="text">
    <img :src="imgSrc" alt="Text image" class="text__img" />
    <div class="text__info">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    default: '/src/assets/icons/weather.svg'
  }
})
</script>

<style lang="sass">
.text
	display: flex
	align-items: center
	&__img
		width: 20px
		height: 20px
		margin-right: 6px
	&__info
		font-size: var(--small-font)
		display: flex
		align-items: center
</style>
