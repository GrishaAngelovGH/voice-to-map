import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'

test('should render component', () => {
  const view = render(
    <Provider store={globalThis.mockStore}>
      <App />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})
