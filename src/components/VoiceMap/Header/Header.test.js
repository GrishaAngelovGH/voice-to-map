import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Header from './Header'

test('should render component', () => {
    const mockStore = configureStore()
    const store = mockStore({ locations: { lastLocation: '', history: [] } })

    const container = render(
        <Provider store={store}>
            <Header />
        </Provider>
    )

    expect(container).toMatchSnapshot()
})
