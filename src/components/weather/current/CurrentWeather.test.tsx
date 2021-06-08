import { fetchCurrentWeatherApi } from '../../../store/weather/current/api'
import { CurrentWeatherResponseType } from '../../../store/weather/current/types'
import moment from 'moment'
import { renderWithRedux } from '../../../store/testStore'
import { CurrentWeather } from './CurrentWeather'

jest.mock('../../../store/weather/current/api')

const mockDate = moment('2020-01-01 13:25:00')
const mockSuccessDataPromise: Promise<CurrentWeatherResponseType> = Promise.resolve({
  cod: 200,
  dt: mockDate.unix(),
  weather: [{ description: 'test desc', icon: 'test icon' }],
  main: {
    temp: 15.89,
  },
})

describe('CurrentWeather', () => {
  test('Check success load data', async () => {
    // @ts-ignore
    fetchCurrentWeatherApi.mockResolvedValueOnce(mockSuccessDataPromise)

    const { findByTestId } = renderWithRedux(<CurrentWeather />)

    const lastUpdated = await findByTestId('cur-weather-updated')
    const deg = await findByTestId('cur-weather-temp')

    expect(lastUpdated).toHaveTextContent(mockDate.format('HH:mm'))
    expect(deg).toHaveTextContent('16')
  })

  test('Check fail load data', async () => {
    // @ts-ignore
    fetchCurrentWeatherApi.mockResolvedValueOnce(
      new Promise((resolve, reject) => {
        reject(new Error('Some error'))
      })
    )

    const { findByTestId } = renderWithRedux(<CurrentWeather />)

    const lastUpdated = await findByTestId('cur-weather-updated')
    const deg = await findByTestId('cur-weather-temp')

    expect(lastUpdated.textContent.trim()).toEqual('GTM')
    expect(deg.textContent.trim()).toEqual('°')
  })
})
