import { FC } from 'react'
import { ForecastWeatherItemType } from '../../../store/weather/forecast/types'
import style from './ForecastWeatherItem.module.css'
import { ImageWeather } from '../image/ImageWeather'

type PropTypes = {
  weather: ForecastWeatherItemType
}

export const ForecastWeatherItem: FC<PropTypes> = ({ weather: { weather, week, main } }) => {
  const desc = weather[0]

  return (
    <div className={style.Item}>
      <div className={style.Week}>{week}</div>
      <div className={style.Deg}>{main?.temp}°</div>
      <div className={style.Desc}>
        <ImageWeather icon={desc.icon} className={style.Image} />
        <div className={style.DescText}>{desc.description}</div>
      </div>
    </div>
  )
}
