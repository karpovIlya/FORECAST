<template>
  <div class="weather">
    <form @submit.prevent="requestWeatherData">
      <input-ui v-model="cityInputValue" :placeholder-text="cityInputPlaceholder" />
    </form>

    <img :src="weatherImage" alt="Weather image" class="weather__image" />

    <div class="temp">
      <div class="temp__main">{{ temperature }} °C</div>
      <text-with-icon :img-src="weatherIcon" class="temp__descr">
        {{ description }}
      </text-with-icon>
    </div>

    <div class="line"></div>

    <text-with-icon :img-src="locationIcon" class="city">
      {{ city }}, {{ country }}
    </text-with-icon>

    <text-with-icon :img-src="dateIcon" class="date">
      {{ currentDate }}
    </text-with-icon>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, type ComputedRef, watch, onUnmounted } from 'vue'
import InputUi from '@/components/UI/InputUi.vue'
import TextWithIcon from '@/components/UI/TextWithIconUi.vue'
import { useStore } from 'vuex'
import weatherIcon from '@/assets/icons/weather.svg'
import locationIcon from '@/assets/icons/location.svg'
import dateIcon from '@/assets/icons/calendar.svg'

const cityInputValue = ref('')
const cityInputPlaceholder = 'Enter your city'
const store = useStore()

const currentDate: string = new Date().toDateString()
const city: ComputedRef<string> = computed(() => store.getters.getCity)
const temperature: ComputedRef<number> = computed(() => store.getters.getTemperature)
const country: ComputedRef<string> = computed(() => store.getters.getCountry)
const description: ComputedRef<string> = computed(() => store.getters.getDescription)

const weatherImage = ref('')
const updateInterval = 60000

const updateIntervalId = setInterval(() => {
  store.dispatch('fetchWeatherData')
}, updateInterval)

watch(
  description,
  async (newDescription) => {
    try {
      const image = await import(`@/assets/icons/weather/${newDescription}.png`)
      weatherImage.value = image.default
    } catch (_) {
      weatherImage.value = (await import(`@/assets/icons/weather/clear sky.png`)).default
    }
  },
  { immediate: true }
)

const requestWeatherData = (): void => {
  store.dispatch('fetchWeatherData', cityInputValue.value)
  cityInputValue.value = ''
}

onMounted(() => {
  store.dispatch('fetchWeatherData')
})

onUnmounted(() => {
  clearInterval(updateIntervalId)
})
</script>

<style lang="sass">
.weather
	width: 100%
	height: 100%
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
