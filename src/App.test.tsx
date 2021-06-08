import React from 'react'
import { App } from './App'
import { renderWithRedux } from './store/testStore'

test('Renders heading text', () => {
  const { getByText, getByTestId } = renderWithRedux(<App />)

  expect(getByText(/London/i)).toBeInTheDocument()
  expect(getByTestId('header')).toBeInTheDocument()
  expect(getByTestId('current-weather')).toBeInTheDocument()
  expect(getByTestId('forecast')).toBeInTheDocument()
  expect(getByTestId('progress-bar')).toBeInTheDocument()
})
