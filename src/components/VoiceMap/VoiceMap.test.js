import { render, screen } from '@testing-library/react'
import VoiceMap from './VoiceMap'

test('should render component', () => {
    render(<VoiceMap />)

    expect(screen.getAllByTestId('voice-map')).toBeTruthy()
})

test('should render Header', () => {
    render(<VoiceMap />)

    expect(screen.getAllByTestId('vm-header')).toBeTruthy()
})

test('should render Body', () => {
    render(<VoiceMap />)

    expect(screen.getAllByTestId('vm-body')).toBeTruthy()
})