import { render } from '@testing-library/react'

import Suggestions from './Suggestions'

test('should render component', () => {
    const container = render(<Suggestions />)

    expect(container).toMatchSnapshot()
})