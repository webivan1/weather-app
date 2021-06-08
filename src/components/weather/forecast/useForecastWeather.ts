import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { useEffect } from 'react'
import { fetchForecastWeatherAsync } from '../../../store/weather/forecast/forecastWeatherSlice'

export const useForecastWeather = () => {
  const dispatch = useAppDispatch()
  const { forecast } = useAppSelector((state) => state.forecastWeather)

  useEffect(() => {
    dispatch(fetchForecastWeatherAsync())
  }, [dispatch])

  return { forecast }
}
