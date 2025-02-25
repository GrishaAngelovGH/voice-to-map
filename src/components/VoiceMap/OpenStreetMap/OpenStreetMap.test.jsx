import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import OpenStreetMap from './OpenStreetMap'

const mockStore = configureStore()
const store = mockStore({ locations: { lastLocation: '', history: [] } })

test('should render OpenStreetMap component', () => {
    const view = render(
        <Provider store={store}>
            <OpenStreetMap />
        </Provider>
    )

    expect(view).toMatchSnapshot()
})