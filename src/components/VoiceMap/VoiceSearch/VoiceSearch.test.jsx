import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import VoiceSearch from './VoiceSearch'

test('should render VoiceSearch component', () => {
	const view = render(
		<Provider store={globalThis.mockStore}>
			<VoiceSearch />
		</Provider>
	)

	expect(view).toMatchSnapshot()
})