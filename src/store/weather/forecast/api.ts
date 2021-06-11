import { ForecastWeatherResponseType } from './types'

const API_KEY: string = process.env.REACT_APP_WEATHER_API_KEY ?? ''
const CITY: string = process.env.REACT_APP_WEATHER_CITY_NAME ?? ''

export const fetchForecastWeatherApi = (): Promise<ForecastWeatherResponseType> =>
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
  ).then(async (data) => (await data.json()) as ForecastWeatherResponseType)
