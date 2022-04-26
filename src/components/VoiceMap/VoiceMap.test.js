import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import VoiceMap from './VoiceMap'

const mockStore = configureStore()
const store = mockStore({ locations: { lastLocation: '', history: [] } })

beforeEach(() => {
    render(
        <Provider store={store}>
            <VoiceMap />
        </Provider>
    )
})

test('should render component', () => {
    expect(screen.getAllByTestId('voice-map')).toBeTruthy()
})

test('should render Header', () => {
    expect(screen.getAllByTestId('vm-header')).toBeTruthy()
})

test('should render Body', () => {
    expect(screen.getAllByTestId('vm-body')).toBeTruthy()
})