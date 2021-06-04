import { filterForecastWeather } from './helper'
import { mockDataGenerate } from './mockData'

const mockData = mockDataGenerate()

describe('Forecast weather helper', () => {
  test('Check the helper', () => {
    const data = filterForecastWeather(mockData)
    expect(data.length === 5).toBeTruthy()
    // @todo add different tests
  })
})
