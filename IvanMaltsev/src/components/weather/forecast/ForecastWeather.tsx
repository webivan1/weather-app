import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { ForecastWeatherItem } from "./ForecastWeatherItem";
import { fetchForecastWeatherAsync } from "../../../store/weather/forecast/forecastWeatherSlice";

export const ForecastWeather: FC = () => {

  const dispatch = useAppDispatch()
  const { forecast, loader } = useAppSelector(state => state.forecastWeather)

  useEffect(() => {
    dispatch(fetchForecastWeatherAsync())
  }, [dispatch])

  return (
    <div>
      {forecast.map(item => (
        <ForecastWeatherItem weather={item} key={item.dt} />
      ))}
    </div>
  )
}
