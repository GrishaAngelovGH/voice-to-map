import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import VoiceMap from './VoiceMap'

test('should render VoiceMap component', () => {
	const view = render(
		<Provider store={globalThis.mockStore}>
			<VoiceMap />
		</Provider>
	)

	expect(view).toMatchSnapshot()
})