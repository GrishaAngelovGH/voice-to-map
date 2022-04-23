import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import OpenStreetMap from './OpenStreetMap'

const mockStore = configureStore()
const store = mockStore({ locations: { lastLocation: '' } })

test('should render component', () => {
    render(
        <Provider store={store}>
            <OpenStreetMap />
        </Provider>
    )

    expect(screen.getAllByTestId('osm')).toBeTruthy()
})