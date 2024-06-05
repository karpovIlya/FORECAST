import { onMounted, ref } from 'vue'
import { API_KEY, BASE_URL, ZERO_KELVIN } from '@/constants/index'
import axios, { type AxiosResponse } from 'axios'
import { type IWeatherResponse } from '@/types/WeatherDataType'

export function useWeatherData() {
  const temperature = ref(0)
  const city = ref('-')
  const country = ref('-')
  const description = ref('')

  const fetchWeatherData = async (enteredCity: string) => {
    try {
      const response: AxiosResponse<IWeatherResponse> = await axios.get(BASE_URL, {
        params: {
          q: enteredCity,
          appid: API_KEY
        }
      })

      if (response.status === 200) {
        const data = response.data

        temperature.value = +(data.main.temp - ZERO_KELVIN).toFixed(1)
        country.value = data.sys.country
        city.value = data.name
        description.value = data.weather[0].description.toUpperCase()
      }
    } catch (_) {
      console.log('Some mistake')
    }
  }

  return {
    temperature,
    city,
    country,
    description,
    fetchWeatherData
  }
}
