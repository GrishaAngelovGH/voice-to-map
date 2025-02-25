import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { setupStore } from 'store'

import History from './History'

const store = setupStore({
	locations: {
		lastLocation: '',
		history: [
			{
				'place_id': '245424010',
				'licence': 'https://locationiq.com/attribution',
				'osm_type': 'way',
				'osm_id': '744663875',
				'boundingbox': [
					'51.501678',
					'51.5017063',
					'-0.1618417',
					'-0.1614632'
				],
				'lat': '51.501691',
				'lon': '-0.1616784',
				'display_name': 'Knightsbridge, Knightsbridge, Westminster, Greater London, England, SW1X 7QS, United Kingdom',
				'class': 'highway',
				'type': 'primary',
				'importance': 0.32
			}
		]
	}
})

test('should render History component', () => {
	const view = render(
		<Provider store={store}>
			<History />
		</Provider>
	)

	expect(view).toMatchSnapshot()
})