import { ForecastWeatherItemType } from './types'
import moment from 'moment'

type GroupForecastWeatherType = {
  [key in string]: ForecastWeatherItemType[]
}

const setGroupByDays = (data: ForecastWeatherItemType[]): ForecastWeatherItemType[][] => {
  return Object.values(
    data.reduce((acc: GroupForecastWeatherType, cur: ForecastWeatherItemType) => {
      const curDate = moment(cur.dt_txt)
      const curWeek = curDate.format('ddd')

      const item: ForecastWeatherItemType = {
        ...cur,
        week: curWeek.toUpperCase(),
      }

      if (!acc.hasOwnProperty(curWeek)) {
        acc[curWeek] = []
      }

      acc[curWeek].push(item)

      return acc
    }, {})
  )
}

const getDiffValue = (from: number, to: number): number => (from > to ? from - to : to - from)

const getTheMostOptimalWeather = (data: ForecastWeatherItemType[]): ForecastWeatherItemType => {
  return data.reduce((acc: ForecastWeatherItemType, cur: ForecastWeatherItemType) => {
    const date = moment(cur.dt_txt)

    const newDate = moment().set({
      year: date.year(),
      month: date.month(),
      date: date.date(),
    })

    const leftDiffSec = getDiffValue(acc.dt, newDate.unix())
    const rightDiffSec = getDiffValue(cur.dt, newDate.unix())

    if (rightDiffSec < leftDiffSec) {
      acc = cur
    }

    return acc
  }, data[0])
}

export const filterForecastWeather = (
  data: ForecastWeatherItemType[]
): ForecastWeatherItemType[] => {
  return setGroupByDays(data)
    .map((group) => getTheMostOptimalWeather(group))
    .slice(-5)
}
