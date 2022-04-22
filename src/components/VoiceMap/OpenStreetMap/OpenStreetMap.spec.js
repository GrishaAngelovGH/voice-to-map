import { render, screen } from '@testing-library/react'
import OpenStreetMap from './OpenStreetMap'

test('should render component', () => {
    render(<OpenStreetMap />)

    expect(screen.getAllByTestId('osm')).toBeTruthy()
})