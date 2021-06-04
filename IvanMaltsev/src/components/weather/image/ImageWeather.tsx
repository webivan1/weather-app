import { FC } from 'react'

type PropTypes = {
  icon: string
  className?: string
}

export const ImageWeather: FC<PropTypes> = ({ icon, className = '' }) => (
  <img
    src={`http://openweathermap.org/img/wn/${icon}.png`}
    className={className}
    width={50}
    height={50}
    alt=""
  />
)