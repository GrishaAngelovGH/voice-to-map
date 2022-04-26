import { render, screen } from '@testing-library/react'

import Suggestions from './Suggestions'

test('should render component', () => {
    render(<Suggestions />)

    expect(screen.getAllByTestId('suggestions')).toBeTruthy()
})