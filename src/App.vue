<template>
  <div class="app">
    <common-weather-info />
  </div>
</template>

<script setup lang="ts">
import CommonWeatherInfo from '@/components/widgets/CommonWeatherInfo.vue'
</script>

<style lang="sass">
.app
  padding: 20px 0
  background: #59585d
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
</style>
