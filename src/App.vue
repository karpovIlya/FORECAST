<template>
  <weather-summary />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import WeatherSummary from '@/components/widgets/WeatherSummary.vue'

const inputValue = ref('asd')
</script>
