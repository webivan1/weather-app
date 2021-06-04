import { ForecastWeatherResponseType } from './types'

const API_KEY: string = process.env.REACT_APP_WEATHER_API_KEY ?? ''

export const fetchForecastWeatherApi = (): Promise<ForecastWeatherResponseType> =>
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=London,UK&appid=${API_KEY}&units=metric`
  ).then(async (data) => (await data.json()) as ForecastWeatherResponseType)
