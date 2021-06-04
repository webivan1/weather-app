import { CurrentWeatherResponseType } from "./types";

const API_KEY: string = process.env['REACT_APP_WEATHER_API_KEY'] ?? ''

export const fetchCurrentWeatherApi = (): Promise<CurrentWeatherResponseType> =>
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=${API_KEY}&units=metric`)
    .then(async data => await data.json() as CurrentWeatherResponseType)
