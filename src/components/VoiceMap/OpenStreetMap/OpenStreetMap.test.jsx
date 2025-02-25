import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import OpenStreetMap from './OpenStreetMap'

test('should render OpenStreetMap component', () => {
	const view = render(
		<Provider store={globalThis.mockStore}>
			<OpenStreetMap />
		</Provider>
	)

	expect(view).toMatchSnapshot()
})