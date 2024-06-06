<template>
  <div class="highlight">
    <h2 class="highlight__title">Today's Highlights</h2>

    <div class="highlight__grid">
      <small-info-block img-src="src/assets/icons/wind.png" title="wind">
        <div class="wind">
          <div class="wind__speed">
            <span class="wind__value">{{ windInfo.speed }}</span> m/s
          </div>
          <div class="wind__deg">
            <span class="wind__value">{{ windInfo.deg }}</span> deg
          </div>
        </div>
      </small-info-block>

      <small-info-block img-src="src/assets/icons/sun-moving.png" title="Sunrise and sunset">
        <div class="sun">
          <div>
            <div class="sun__title">Sunrise</div>
            <div class="sun__info">{{ sunrise.toLocaleTimeString() }}</div>
          </div>

          <div class="sun_set">
            <div class="sun__title">Sunset</div>
            <div class="sun__info">{{ sunset.toLocaleTimeString() }}</div>
          </div>
        </div>
      </small-info-block>

      <small-info-block img-src="src/assets/icons/barometer.png" title="Pressure">
        <div class="pressure">
          <span class="pressure__value">{{ pressure }}</span> m/s
        </div>
      </small-info-block>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type ComputedRef } from 'vue'
import { useStore } from 'vuex'
import { type IWind } from '@/types/WeatherDataType'
import SmallInfoBlock from '@/components/widgets/SmallInfoBlock.vue'

const store = useStore()
const windInfo: ComputedRef<IWind> = computed(() => store.getters.getWindInfo)
const sunrise: ComputedRef<Date> = computed(() => store.getters.getSunrise)
const sunset: ComputedRef<Date> = computed(() => store.getters.getSunset)
const pressure: ComputedRef<number> = computed(() => store.getters.getPressure)
</script>

<style lang="sass">
.highlight
	width: 100%
	height: 100%
	background: var(--gradient)
	border-radius: 25px
	padding: 16px
	&__title
		font-size: var(--big-font)
		color: var(--font-color)
	&__grid
		margin-top: var(--medium-margin)
		display: grid
		grid-template-columns: repeat(3, 1fr)
		gap: 20px
</style>
