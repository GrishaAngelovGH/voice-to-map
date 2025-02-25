import { useMap } from 'react-leaflet'

const CenterView = ({ locations }) => {
	const m = useMap()

	if (locations.length > 0) {
		m.setView([locations[0].lat, locations[0].lon], 15)
	}

	// https://github.com/facebook/react/blob/main/CHANGELOG.md#react-2
	// Components can now render undefined

	return undefined
}

export default CenterView