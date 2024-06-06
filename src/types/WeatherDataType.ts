interface IWeather {
  id: number
  main: string
  description: string
  icon: string
}

interface IMain {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

interface IClouds {
  all: number
}

interface ISys {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

export interface ICoord {
  lon: number
  lat: number
}

export interface IWind {
  speed: number
  deg: number
}

export interface IWeatherResponse {
  base: 'stations'
  coord: ICoord
  clouds: IClouds
  weather: IWeather[]
  wind: IWind
  main: IMain
  sys: ISys
  name: string
  cod: number
  dt: number
  id: number
  timezone: number
  visibility: number
}
