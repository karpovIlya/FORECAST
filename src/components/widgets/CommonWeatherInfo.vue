<template>
  <div class="common-info">
    <weather-summary />
    <today-highlights class="highlight" />
    <div class="red red_first"></div>
    <div class="red red_second"></div>
  </div>
</template>

<script setup lang="ts">
import WeatherSummary from '@/components/widgets/WeatherSummary.vue'
import TodayHighlights from '@/components/widgets/TodayHighlights.vue'
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

.red
	height: 300px
	background: red
	border-radius: 16px
	&_second
		grid-row: 2
		grid-column: 1 / span 2
</style>
