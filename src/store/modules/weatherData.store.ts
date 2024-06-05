import { API_KEY, BASE_URL, ZERO_KELVIN } from '@/constants/index'
import axios, { type AxiosResponse } from 'axios'
import { type IWeatherResponse } from '@/types/WeatherDataType'

interface IWeatherDataState {
  city: string
  temperature: number
  country: string
  description: string
}

interface IContext {
  state: IWeatherDataState
  commit: any
}

export const weatherDataModule = {
  state: (): IWeatherDataState => ({
    city: localStorage.getItem('city') ?? 'New York',
    temperature: 0,
    country: 'USA',
    description: 'few clouds'
  }),
  getters: {
    getCity(state: IWeatherDataState) {
      return state.city
    },
    getTemperature(state: IWeatherDataState) {
      return state.temperature
    },
    getCountry(state: IWeatherDataState) {
      return state.country
    },
    getDescription(state: IWeatherDataState) {
      return state.description
    }
  },
  mutations: {
    switchCity(state: IWeatherDataState, payload: string) {
      state.city = payload
      localStorage.setItem('city', state.city)
    },
    setTemperature(state: IWeatherDataState, payload: number) {
      state.temperature = payload
    },
    setCountry(state: IWeatherDataState, payload: string) {
      state.country = payload
    },
    setDescription(state: IWeatherDataState, payload: string) {
      state.description = payload
    }
  },
  actions: {
    async fetchWeatherData({ state, commit }: IContext, newCity?: string) {
      try {
        const response: AxiosResponse<IWeatherResponse> = await axios.get(BASE_URL, {
          params: {
            q: newCity ?? state.city,
            appid: API_KEY
          }
        })

        if (response.status === 200) {
          const data = response.data

          commit('setTemperature', +(data.main.temp - ZERO_KELVIN).toFixed(1))
          commit('setCountry', data.sys.country)
          commit('switchCity', data.name)
          commit('setDescription', data.weather[0].description)
        }
      } catch (_) {
        alert('You entered wrong answer!')
      }
    }
  }
}
