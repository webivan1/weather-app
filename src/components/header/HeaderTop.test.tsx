import { renderWithRedux } from '../../store/testStore'
import { HeaderTop } from './HeaderTop'

describe('HeaderTop', () => {
  test('Should be contain some text', () => {
    const { getByText } = renderWithRedux(
      <HeaderTop>
        <div>Test header</div>
      </HeaderTop>
    )

    expect(getByText('Test header')).toBeInTheDocument()
  })
})
