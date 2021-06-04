import { CurrentWeatherStateType } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WeatherItemResponseType } from "../types";
import { AppThunk } from "../../store";
import { fetchCurrentWeatherApi } from "./api";

const initialState: CurrentWeatherStateType = {
  loader: false,
  fetched: false,
  errorMessage: undefined,
  weather: undefined
}

export const currentWeatherSlice = createSlice({
  name: 'currentWeather',
  initialState,
  reducers: {
    startFetching: state => {
      state.loader = true
      state.errorMessage = undefined
    },
    stopFetching: state => {
      state.loader = false
      state.fetched = true
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload
      console.error(payload)
    },
    setWeather: (state, { payload }: PayloadAction<WeatherItemResponseType>) => {
      state.weather = payload
    }
  }
})

export const { startFetching, stopFetching, setError, setWeather } = currentWeatherSlice.actions

export const fetchCurrentWeatherAsync = (): AppThunk => async dispatch => {
  try {
    dispatch(startFetching())
    const { code, ...weather } = await fetchCurrentWeatherApi()
    if (+code === 200) {
      dispatch(setWeather(weather))
    } else {
      dispatch(setError('Error fetching current weather'))
    }
  } catch (e) {
    dispatch(setError(e.message))
  } finally {
    dispatch(stopFetching())
  }
}

export default currentWeatherSlice.reducer
