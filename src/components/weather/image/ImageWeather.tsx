import { FC } from 'react'

type PropTypes = {
  icon: string
  className?: string
}

export const ImageWeather: FC<PropTypes> = ({ icon, className = '' }) => (
  <img
    data-testid="image-weather"
    src={`http://openweathermap.org/img/wn/${icon}.png`}
    className={className}
    width={40}
    height={40}
    alt=""
  />
)
