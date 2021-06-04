import { ForecastWeatherResponseType } from '../../../store/weather/forecast/types'
import { mockDataGenerate } from '../../../store/weather/forecast/mockData'
import { renderWithRedux } from '../../../store/testStore'
import { ForecastWeather } from './ForecastWeather'
import { fetchForecastWeatherApi } from '../../../store/weather/forecast/api'

jest.mock('../../../store/weather/forecast/api')

const forecastWeatherData = mockDataGenerate()

const mockSuccessDataPromise: Promise<ForecastWeatherResponseType> = Promise.resolve({
  cod: 200,
  city: { timezone: 3600 },
  list: [...forecastWeatherData],
})

describe('ForecastWeather', () => {
  test('Check renders all forecast weather', async () => {
    // @ts-ignore
    fetchForecastWeatherApi.mockResolvedValueOnce(mockSuccessDataPromise)

    const { getByTestId, findByTestId } = renderWithRedux(<ForecastWeather />)

    expect(getByTestId('forecast')).toBeInTheDocument()

    forecastWeatherData.forEach(async ({ dt }) => {
      const item = await findByTestId(`weather-item-${dt}`)
      expect(item).toBeInTheDocument()
    })
  })

  // @todo add different test, fail response
})
