import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import currentWeatherSlice from './weather/current/currentWeatherSlice'
import forecastWeatherSlice from './weather/forecast/forecastWeatherSlice'

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherSlice,
    forecastWeather: forecastWeatherSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
