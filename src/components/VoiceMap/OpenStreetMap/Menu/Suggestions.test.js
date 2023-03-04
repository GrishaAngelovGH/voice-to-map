import { render } from '@testing-library/react'

import Suggestions from './Suggestions'

test('should render Suggestions component', () => {
    const view = render(<Suggestions />)

    expect(view).toMatchSnapshot()
})