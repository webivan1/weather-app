import { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../store/hooks'
import { fetchCurrentWeatherAsync } from '../../../store/weather/current/currentWeatherSlice'
import { fetchForecastWeatherAsync } from '../../../store/weather/forecast/forecastWeatherSlice'
import style from './ReloadBar.module.css'

type PropTypes = {
  seconds: number
}

let timer: ReturnType<typeof setInterval> | undefined

export const ReloadBar: FC<PropTypes> = ({ seconds }) => {
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

  return (
    <div className={style.Wrapper}>
      <div className={style.Heading}>Reloading in {second < 10 ? `0${second}` : second}s</div>
      <div className={style.Bar}>
        <div style={{ width: `${progressBarWidth}%` }} className={style.ProgressBar} />
      </div>
    </div>
  )
}
