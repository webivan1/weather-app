import { ForecastWeatherItemType, ForecastWeatherStateType } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterForecastWeather } from "./helper";
import { AppThunk } from "../../store";
import { fetchForecastWeatherApi } from "./api";

const initialState: ForecastWeatherStateType = {
  loader: false,
  errorMessage: undefined,
  forecast: []
}

export const forecastWeatherSlice = createSlice({
  name: 'forecastWeather',
  initialState,
  reducers: {
    startFetching: state => {
      state.loader = true
      state.errorMessage = undefined
    },
    stopFetching: state => {
      state.loader = false
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload
      console.error(payload)
    },
    setForecastWeather: (state, { payload }: PayloadAction<ForecastWeatherItemType[]>) => {
      state.forecast = filterForecastWeather(payload)
    }
  }
})

export const { startFetching, stopFetching, setError, setForecastWeather } = forecastWeatherSlice.actions

export const fetchCurrentWeatherAsync = (): AppThunk => async dispatch => {
  try {
    dispatch(startFetching())
    const { code, list } = await fetchForecastWeatherApi()
    if (+code === 200) {
      dispatch(setForecastWeather(list))
    } else {
      dispatch(setError('Error fetching current weather'))
    }
  } catch (e) {
    dispatch(setError(e.message))
  } finally {
    dispatch(stopFetching())
  }
}

export default forecastWeatherSlice.reducer
