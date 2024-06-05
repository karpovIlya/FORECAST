import { createStore } from 'vuex'
import { weatherDataModule } from '@/store/modules/weatherData.store'

export default createStore({
  modules: {
    weather: weatherDataModule
  }
})
