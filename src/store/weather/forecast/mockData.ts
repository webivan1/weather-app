import { ForecastWeatherItemType } from './types'
import moment from 'moment'

export const mockDataGenerate = (): ForecastWeatherItemType[] => {
  const data: ForecastWeatherItemType[] = []

  const hours = [6, 12, 15, 18, 20]

  for (let d = 0; d < 6; d++) {
    for (const t of hours) {
      const date = moment().set({
        hour: t,
        minute: 0,
        second: 0,
      })

      if (d > 0) {
        date.add(d, 'days')
      }

      data.push({
        dt: date.unix(),
        main: {
          temp: 15.44,
        },
        weather: [{ description: 'clear sky', icon: '01d' }],
        dt_txt: date.format('YYYY-MM-DD HH:mm:ss'),
      })
    }
  }

  return data
}
