import { API_KEY, BASE_URL, ZERO_KELVIN, MS_IN_SECOND } from '@/constants/index'
import axios, { type AxiosResponse } from 'axios'
import { type IWeatherResponse, type IWind, type ICoord } from '@/types/WeatherDataType'

interface IWeatherDataState {
  city: string
  temperature: number
  country: string
  description: string
  pressure: number
  wind: IWind
  coords: ICoord
  sunrise: Date
  sunset: Date
  humidity: number
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
    description: 'few clouds',
    pressure: 0,
    wind: {
      speed: 0,
      deg: 0
    },
    coords: {
      lat: 0,
      lon: 0
    },
    sunrise: new Date(),
    sunset: new Date(),
    humidity: 0
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
    },
    getPressure(state: IWeatherDataState) {
      return state.pressure
    },
    getWindInfo(state: IWeatherDataState) {
      return state.wind
    },
    getCoordsInfo(state: IWeatherDataState) {
      return state.coords
    },
    getSunrise(state: IWeatherDataState) {
      return state.sunrise
    },
    getSunset(state: IWeatherDataState) {
      return state.sunset
    },
    getHumidity(state: IWeatherDataState) {
      return state.humidity
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
    },
    setPressure(state: IWeatherDataState, payload: number) {
      state.pressure = payload
    },
    setWind(state: IWeatherDataState, payload: IWind) {
      state.wind = payload
    },
    setCoords(state: IWeatherDataState, payload: ICoord) {
      state.coords = payload
    },
    setSunrise(state: IWeatherDataState, payload: Date) {
      state.sunrise = payload
    },
    setSunset(state: IWeatherDataState, payload: Date) {
      state.sunset = payload
    },
    setHumidity(state: IWeatherDataState, payload: number) {
      state.humidity = payload
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
          commit('setPressure', data.main.pressure)
          commit('setWind', data.wind)
          commit('setCoords', data.coord)
          commit('setSunrise', new Date(data.sys.sunrise * MS_IN_SECOND))
          commit('setSunset', new Date(data.sys.sunset * MS_IN_SECOND))
          commit('setHumidity', data.main.humidity)
        }
      } catch (_) {
        alert('Oooops... Something went wrong!')
      }
    }
  }
}
