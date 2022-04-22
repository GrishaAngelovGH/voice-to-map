import { render, screen } from '@testing-library/react'
import App from './App'

test('should render component', () => {
  render(<App />)

  expect(screen.getAllByTestId('voice-map')).toBeTruthy()
})
