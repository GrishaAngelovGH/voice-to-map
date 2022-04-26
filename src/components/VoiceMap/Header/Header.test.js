import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Header from './Header'

test('should render component', () => {
    const mockStore = configureStore()
    const store = mockStore({ locations: { lastLocation: '', history: [] } })

    render(
        <Provider store={store}>
            <Header />
        </Provider>
    )

    expect(screen.getAllByTestId('header')).toBeTruthy()
})
