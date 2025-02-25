import { render } from '@testing-library/react'

import Menu from './Menu'

test('should render Menu component', () => {
	const view = render(<Menu />)

	expect(view).toMatchSnapshot()
})