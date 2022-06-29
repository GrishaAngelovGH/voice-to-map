import { render } from '@testing-library/react'

import Menu from './Menu'

test('should render component', () => {
    const container = render(<Menu />)

    expect(container).toMatchSnapshot()
})