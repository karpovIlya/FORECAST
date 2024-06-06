<template>
  <div class="common-info">
    <weather-summary class="summary" />
    <today-highlights class="highlight" />

    <big-info-block class="coords" :img-src="coordsImage">
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

    <big-info-block class="humidity" :img-src="humidityImage">
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
import coordsImage from '@/assets/icons/compass.png'
import humidityImage from '@/assets/icons/humidity.png'

const store = useStore()
const coords: ComputedRef<ICoord> = computed(() => store.getters.getCoordsInfo)
const humidity: ComputedRef<number> = computed(() => store.getters.getHumidity)
</script>

<style lang="sass">
@use 'src/assets/styles/mixin.sass' as mixin

.common-info
  width: 1240px
  padding: 20px
  border-radius: 25px
  background: var(--background-color)
  display: grid
  grid-template-columns: repeat(4, 1fr)
  align-items: center
  gap: 20px
  @include mixin.adaptive(lg)
    width: 900px
  @include mixin.adaptive(md)
    width: 600px
  @include mixin.adaptive(sm)
    width: 90%

.summary
  @include mixin.adaptive(lg)
    grid-row: 1
    grid-column: 1 / span 4

.highlight
  grid-row: 1
  grid-column: 2 / span 3
  @include mixin.adaptive(lg)
    grid-row: 2
    grid-column: 1 / span 4

.coords
  grid-row: 2
  grid-column: 1 / span 2
  @include mixin.adaptive(lg)
    grid-row: 3
  @include mixin.adaptive(sm)
    grid-column: 1 / span 4

.humidity
  grid-row: 2
  grid-column: 3 / span 2
  @include mixin.adaptive(lg)
    grid-row: 3
  @include mixin.adaptive(sm)
    grid-row: 4
    grid-column: 1 / span 4
</style>
