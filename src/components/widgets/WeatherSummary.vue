<template>
  <div class="weather">
    <form @submit.prevent="() => fetchWeatherData(cityInputValue)">
      <input-ui v-model="cityInputValue" :placeholder-text="cityInputPlaceholder" />
    </form>

    <img
      :src="`src/assets/icons/weather/${description.toLowerCase()}.png`"
      alt="Weather image"
      class="weather__image"
    />

    <div class="temp">
      <div class="temp__main">{{ temperature }} °C</div>
      <text-with-icon img-src="/src/assets/icons/weather.svg" class="temp__descr">
        {{ description }}
      </text-with-icon>
    </div>

    <div class="line"></div>

    <text-with-icon img-src="/src/assets/icons/location.svg" class="city">
      {{ city }}, {{ country }}
    </text-with-icon>

    <text-with-icon img-src="/src/assets/icons/calendar.svg" class="date">
      {{ new Date().toDateString() }}
    </text-with-icon>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputUi from '@/components/UI/InputUi.vue'
import TextWithIcon from '@/components/UI/TextWithIconUi.vue'
import { useWeatherData } from '@/hooks/useWeatherData'

const cityInputValue = ref('')
const cityInputPlaceholder = 'Enter your city'
const { temperature, city, country, description, fetchWeatherData } = useWeatherData()
</script>

<style lang="sass">
.weather
	width: 100%
	border-radius: 25px
	padding: 16px
	background-image: var(--gradient)
	&__image
		width: 60px
		height: 60px
		margin-top: var(--medium-margin)

.temp
	color: var(--font-color)
	font-size: var(--big-font)
	margin-top: var(--medium-margin)

.line
	margin-top: var(--big-margin)
	background: var(--font-color)
	height: 1px
	width: 100%

.city
	margin-top: var(--big-margin)
	font-size: var(--small-font)
	color: var(--font-color)

.date
	margin-top: 6px
	font-size: var(--small-font)
	color: var(--font-color)
</style>
