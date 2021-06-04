import { WeatherItemResponseType } from "../types";

export type CurrentWeatherResponseType = WeatherItemResponseType & {
  code: number
}

export type CurrentWeatherStateType = {
  loader: boolean
  fetched: boolean
  errorMessage?: string
  weather?: WeatherItemResponseType
}
