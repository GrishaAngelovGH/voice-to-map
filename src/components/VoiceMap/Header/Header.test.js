import { render, screen } from '@testing-library/react'
import Header from './Header'

test('should render component', () => {
    render(<Header />)

    expect(screen.getAllByTestId('header')).toBeTruthy()
})
