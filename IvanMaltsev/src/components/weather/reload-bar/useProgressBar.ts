import { useAppDispatch } from '../../../store/hooks'
import { useEffect, useState } from 'react'
import { fetchCurrentWeatherAsync } from '../../../store/weather/current/currentWeatherSlice'
import { fetchForecastWeatherAsync } from '../../../store/weather/forecast/forecastWeatherSlice'

let timer: ReturnType<typeof setInterval> | undefined

export const useProgressBar = (seconds: number) => {
  const dispatch = useAppDispatch()
  const [second, setSecond] = useState<number>(seconds)

  const startTimer = (): void => {
    timer = setInterval(() => setSecond((cur) => cur - 1), 1000)
  }

  const stopTimer = (): void => {
    if (timer) {
      clearInterval(timer)
    }
  }

  useEffect(() => {
    if (second === 0) {
      stopTimer()
      ;(async () => {
        await Promise.all([
          dispatch(fetchCurrentWeatherAsync()),
          dispatch(fetchForecastWeatherAsync()),
        ])

        setSecond(seconds)
        startTimer()
      })()
    }
  }, [second])

  useEffect(() => {
    startTimer()

    return () => {
      stopTimer()
    }
  }, [dispatch])

  const progressBarWidth = Math.ceil((second * 100) / seconds)

  return {
    second,
    progressBarWidth,
  }
}
