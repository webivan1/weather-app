import React, { FC } from 'react'
import { Container } from './components/container/Container'
import { CurrentWeather } from './components/weather/current/CurrentWeather'
import { HeaderTop } from './components/header/HeaderTop'
import { ReloadBar } from './components/weather/reload-bar/ReloadBar'
import { ForecastWeather } from './components/weather/forecast/ForecastWeather'

export const App: FC = () => {
  return (
    <>
      <HeaderTop>
        <CurrentWeather />
        <ReloadBar seconds={60} />
      </HeaderTop>

      <Container>
        <ForecastWeather />
      </Container>
    </>
  )
}
