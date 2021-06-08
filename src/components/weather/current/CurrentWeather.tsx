import { FC } from 'react'
import style from './CurrentWeather.module.css'
import { AnimateTimes } from './AnimateTimes'
import { useCurrentWeather } from './useCurrentWeather'
import { useAnimateValue } from '../../animate-value/useAnimateValue'

export const CurrentWeather: FC = () => {
  const { loader, weather, lastUpdated } = useCurrentWeather()
  const { animatedClass } = useAnimateValue(weather?.main?.temp)

  return (
    <div data-testid="current-weather" className={style.CurrentWeather}>
      <div className={style.Heading}>London</div>
      <div className={style.CurrentTimeBlock}>
        <AnimateTimes animate={!loader} />
        <div data-testid="cur-weather-updated" className={style.CurrentTime}>
          {lastUpdated} GTM
        </div>
        <AnimateTimes animate={!loader} reverse={true} />
      </div>
      <div className={style.Deg}>
        <div data-testid="cur-weather-temp" className={animatedClass}>
          {weather?.main?.temp}°
        </div>
      </div>
    </div>
  )
}
