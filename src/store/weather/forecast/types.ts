import { WeatherItemResponseType } from '../types'

export type ForecastWeatherItemType = WeatherItemResponseType & {
  dt_txt: string
  week?: string
}

export type ForecastWeatherResponseType = {
  cod: number | string
  list: ForecastWeatherItemType[]
  city: {
    timezone: number
  }
}

export type ForecastWeatherStateType = {
  loader: boolean
  errorMessage?: string
  forecast: ForecastWeatherItemType[]
}
