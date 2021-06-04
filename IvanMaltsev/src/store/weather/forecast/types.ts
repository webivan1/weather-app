import { Moment } from 'moment'
import { WeatherItemResponseType } from '../types'

export type ForecastWeatherItemType = WeatherItemResponseType & {
  dt_text: string
  date?: Moment
  week?: string
}

export type ForecastWeatherResponseType = {
  cod: number | string
  city: {
    timezone: number
  }
  list: ForecastWeatherItemType[]
}

export type ForecastWeatherStateType = {
  loader: boolean
  errorMessage?: string
  forecast: ForecastWeatherItemType[]
}
