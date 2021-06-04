export type WeatherItemResponseType = {
  dt: number
  main: {
    temp: number
  }
  weather: Array<{
    description: string
    icon: string
  }>
}
