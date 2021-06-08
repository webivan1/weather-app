import { FC } from 'react'
import { ForecastWeatherItem } from './ForecastWeatherItem'
import { useForecastWeather } from './useForecastWeather'

export const ForecastWeather: FC = () => {
  const { forecast } = useForecastWeather()

  return (
    <div data-testid="forecast">
      {forecast.map((item) => (
        <ForecastWeatherItem data-testid={`weather-item-${item.dt}`} weather={item} key={item.dt} />
      ))}
    </div>
  )
}
