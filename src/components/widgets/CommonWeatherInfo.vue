<template>
  <div class="common-info">
    <weather-summary />
    <today-highlights class="highlight" />

    <big-info-block class="coords" :img-src="coordsImgSrc">
      <div class="big-info__title">Longitude: {{ coords.lon }}</div>
      <div class="big-info__text">
        Longitude measures distance east or west of the prime meridian
      </div>

      <div class="big-info__title big-info__title_margin">Latitude: {{ coords.lat }}</div>
      <div class="big-info__text">
        Latitude lines start at the equator (0 degrees latitude) and run east and west, parallel to
        the equator.
      </div>
    </big-info-block>

    <big-info-block class="humidity" :img-src="humidityImgSrc">
      <div class="big-info__title">Humidity: {{ humidity }}%</div>
      <div class="big-info__text">
        Humidity is the concentration of water vapor present in the air. Water vapor, the gaseous
        state of water, is generally invisible to the human eye
      </div>
    </big-info-block>
  </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { type ICoord } from '@/types/WeatherDataType'
import WeatherSummary from '@/components/widgets/WeatherSummary.vue'
import TodayHighlights from '@/components/widgets/TodayHighlights.vue'
import BigInfoBlock from '@/components/widgets/BigInfoBlock.vue'

const store = useStore()
const coordsImgSrc = 'src/assets/icons/compass.png'
const humidityImgSrc = 'src/assets/icons/humidity.png'
const coords: ComputedRef<ICoord> = computed(() => store.getters.getCoordsInfo)
const humidity: ComputedRef<number> = computed(() => store.getters.getHumidity)
</script>

<style lang="sass">
.common-info
	width: 1240px
	padding: 20px
	border-radius: 25px
	background: var(--background-color)
	display: grid
	grid-template-columns: repeat(4, 1fr)
	align-items: center
	gap: 20px

.highlight
	grid-row: 1
	grid-column: 2 / span 3

.coords
	grid-row: 2
	grid-column: 1 / span 2

.humidity
	grid-row: 2
	grid-column: 3 / span 2
</style>
