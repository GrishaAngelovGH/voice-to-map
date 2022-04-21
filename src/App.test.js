import { render, screen } from '@testing-library/react'
import App from './App'

test('should render component', async () => {
  render(<App />)

  expect(screen.getAllByTestId('voice-map')).toBeTruthy()
})
