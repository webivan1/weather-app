import { render } from '@testing-library/react'
import { ImageWeather } from './ImageWeather'

describe('Image', () => {
  test('Render image', () => {
    const icon = '10n'
    const { getByTestId } = render(<ImageWeather icon={icon} />)

    const image = getByTestId('image-weather')

    expect(image).toBeInTheDocument()
    expect(image.getAttribute('src').indexOf(icon) !== -1).toBeTruthy()
  })
})
