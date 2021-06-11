import { useAppDispatch } from '../../../store/hooks'
import { useEffect, useState } from 'react'
import { fetchCurrentWeatherAsync } from '../../../store/weather/current/currentWeatherSlice'
import { fetchForecastWeatherAsync } from '../../../store/weather/forecast/forecastWeatherSlice'

let animationId: ReturnType<typeof requestAnimationFrame> | undefined
let previousTime: number | undefined

export const useProgressBar = (seconds: number) => {
  const dispatch = useAppDispatch()
  const [progressBarWidth, setProgressBarWidth] = useState<number>()
  const [curSecond, setSecond] = useState<number>(0)

  const animationProgressBar = async (time: number) => {
    if (!previousTime) {
      previousTime = time
    }

    setSecond((time - previousTime) / 1000)

    animationId = requestAnimationFrame(animationProgressBar)
  }

  const callUpdateWeather = async (): Promise<void> => {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    previousTime = undefined
    await Promise.all([dispatch(fetchCurrentWeatherAsync()), dispatch(fetchForecastWeatherAsync())])
    animationId = requestAnimationFrame(animationProgressBar)
  }

  useEffect(() => {
    animationId = requestAnimationFrame(animationProgressBar)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [dispatch])

  useEffect(() => {
    ;(async () => {
      if (curSecond < seconds) {
        setProgressBarWidth((100 * curSecond) / seconds)
      } else {
        await callUpdateWeather()
      }
    })()
  }, [curSecond])

  return {
    second: Math.ceil(seconds - curSecond),
    progressBarWidth,
  }
}
