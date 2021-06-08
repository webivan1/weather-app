import { renderWithRedux } from '../../store/testStore'
import { Container } from './Container'

describe('Container', () => {
  test('Should be contain any children', () => {
    const { getByText } = renderWithRedux(
      <Container>
        <div>Test content</div>
      </Container>
    )

    expect(getByText('Test content')).toBeInTheDocument()
  })
})
