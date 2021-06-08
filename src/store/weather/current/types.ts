import { WeatherItemResponseType } from '../types'

export type CurrentWeatherResponseType = WeatherItemResponseType & {
  cod: number | string
}

export type CurrentWeatherStateType = {
  loader: boolean
  fetched: boolean
  errorMessage?: string
  weather?: WeatherItemResponseType
}
