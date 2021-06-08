export type WeatherItemResponseType = {
  dt: number
  main: {
    temp: number
  }
  weather: {
    description: string
    icon: string
  }[]
}
