import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import VoiceSearch from './VoiceSearch'

const mockStore = configureStore()
const store = mockStore({ locations: { lastLocation: '', history: [] } })

beforeEach(() => {
    render(
        <Provider store={store}>
            <VoiceSearch />
        </Provider>
    )
})

test('should render component', () => {
    expect(screen.getAllByTestId('voice-search')).toBeTruthy()
})