import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import Header from './Header'

test('should render Header component', () => {
	const view = render(
		<Provider store={globalThis.mockStore}>
			<Header />
		</Provider>
	)

	expect(view).toMatchSnapshot()
})
