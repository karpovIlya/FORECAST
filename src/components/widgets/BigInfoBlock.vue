<template>
  <div class="big-info">
    <img :src="imgSrc" alt="big-info image" class="big-info__img" />
    <div class="big-info__main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  imgSrc: {
    type: String,
    default: 'src/assets/icons/compass.png'
  }
})
</script>

<style lang="sass">
.big-info
	min-height: 230px
	background: var(--gradient)
	padding: 16px
	border-radius: 25px
	display: flex
	align-items: center
	&__img
		display: block
		height: 70px
		margin-right: var(--medium-margin)
	&__title
		font-size: var(--medium-font)
		color: var(--font-color)
		font-weight: 800
		&_margin
			margin-top: var(--medium-margin)
	&__text
		font-size: var(--small-font)
		color: var(--light-color)
		margin-top: var(--small-margin)
	&__value
		font-size: var(--big-font)
</style>
