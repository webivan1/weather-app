import { WeatherItemResponseType } from "../types";

export type ForecastWeatherItemType = WeatherItemResponseType & {
  dt_text: string
}

export type ForecastWeatherResponseType = {
  code: number
  city: {
    timezone: number
  }
  list: ForecastWeatherItemType[]
}

export type ForecastWeatherStateType = {
  loader: boolean
  fetched: boolean
  errorMessage?: string
  forecast: WeatherItemResponseType[]
}
