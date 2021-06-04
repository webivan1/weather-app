import { FC } from 'react'
import style from './CurrentWeather.module.css'
import { AnimateTimes } from './AnimateTimes'
import { useCurrentWeather } from './useCurrentWeather'

export const CurrentWeather: FC = () => {
  const { loader, weather, lastUpdated } = useCurrentWeather()

  return (
    <div className={style.CurrentWeather}>
      <div className={style.Heading}>London</div>
      <div className={style.CurrentTimeBlock}>
        <AnimateTimes animate={!loader} />
        <div className={style.CurrentTime}>{lastUpdated} GTM</div>
        <AnimateTimes animate={!loader} reverse={true} />
      </div>
      <div className={style.Deg}>{weather?.main?.temp}°</div>
    </div>
  )
}
