import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import VoiceMap from './VoiceMap'

const mockStore = configureStore()
const store = mockStore({ locations: { lastLocation: '', history: [] } })

test('should render VoiceMap component', () => {
	const view = render(
		<Provider store={store}>
			<VoiceMap />
		</Provider>
	)

	expect(view).toMatchSnapshot()
})