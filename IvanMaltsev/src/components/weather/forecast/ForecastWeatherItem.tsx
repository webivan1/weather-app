import { FC } from "react";
import { ForecastWeatherItemType } from "../../../store/weather/forecast/types";
import style from './ForecastWeatherItem.module.css'

type PropTypes = {
  weather: ForecastWeatherItemType
}

export const ForecastWeatherItem: FC<PropTypes> = ({ weather }) => {
  return (
    <div className={style.Item}>
      <div className={style.Week}>
        {weather.week}
      </div>
      <div className={style.Deg}>
        {weather.main.temp}°
      </div>
      <div>
        {weather.weather[0].description}
      </div>
    </div>
  )
}
