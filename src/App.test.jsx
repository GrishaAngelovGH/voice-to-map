import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

test('should render component', () => {
  const mockStore = configureStore()
  const store = mockStore({ locations: { lastLocation: '' } })

  const view = render(
    <Provider store={store}>
      <App />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})
