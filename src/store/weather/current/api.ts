import { CurrentWeatherResponseType } from './types'

const API_KEY: string = process.env.REACT_APP_WEATHER_API_KEY ?? ''
const CITY: string = process.env.REACT_APP_WEATHER_CITY_NAME ?? ''

export const fetchCurrentWeatherApi = (): Promise<CurrentWeatherResponseType> =>
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
  ).then(async (data) => (await data.json()) as CurrentWeatherResponseType)
