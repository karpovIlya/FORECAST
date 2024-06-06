<template>
  <div class="info">
    <h2 class="info__title">{{ title }}</h2>
    <img :src="imgSrc" alt="info image" class="info__img" />
    <div class="info__main">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Weather Info Block'
  },
  imgSrc: {
    type: String,
    default: 'src/assets/icons/wind.png'
  }
})
</script>

<style lang="sass">
.info
	min-height: 230px
	background: var(--background-color)
	padding: 16px
	border-radius: 25px
	&__title
		font-weight: 200
		color: var(--font-color)
		font-size: var(--small-font)
	&__img
		margin-top: var(--medium-margin)
		display: block
		margin: 0 auto
		margin-top: var(--medium-margin)
		height: 120px

.sun
	display: flex
	justify-content: space-between
	color: var(--font-color)
	margin-top: var(--medium-margin)
	&__title
		color: var(--font-color-sun)
	&__info
		font-size: var(--small-font)
		font-weight: 800
	&_set
		text-align: right

.wind
	display: flex
	justify-content: space-between
	margin-top: var(--medium-margin)
	color: var(--font-color)
	font-size: var(--small-font)
	&__value
		font-size: var(--big-font)

.pressure
	text-align: center
	margin-top: var(--medium-margin)
	color: var(--font-color)
	font-size: var(--small-font)
	&__value
		font-size: var(--big-font)
</style>
