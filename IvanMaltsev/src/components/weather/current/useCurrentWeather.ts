import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { useEffect } from 'react'
import { fetchCurrentWeatherAsync } from '../../../store/weather/current/currentWeatherSlice'
import moment from 'moment'

export const useCurrentWeather = () => {
  const dispatch = useAppDispatch()
  const { weather, loader } = useAppSelector((state) => state.currentWeather)

  useEffect(() => {
    dispatch(fetchCurrentWeatherAsync())
  }, [dispatch])

  const lastUpdated: string = weather ? moment(weather.dt * 1000).format('HH:mm') : ''

  return {
    loader,
    weather,
    lastUpdated,
  }
}
