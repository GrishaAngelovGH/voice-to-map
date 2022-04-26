import { render, screen } from '@testing-library/react'

import Menu from './Menu'

test('should render component', () => {
    render(<Menu />)

    expect(screen.getAllByTestId('menu')).toBeTruthy()
})