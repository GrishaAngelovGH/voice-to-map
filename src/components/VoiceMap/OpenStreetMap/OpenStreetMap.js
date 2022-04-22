import { useState } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'

const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const OpenStreetMap = () => {
    const [map, setMap] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
        markers: []
    })

    const position = [map.lat, map.lng]

    return (
        <div data-testid="osm">
            <style>{'.leaflet-container {height: 100vh;}'}</style>
            <MapContainer center={position} zoom={map.zoom}>
                <TileLayer url={url} />
            </MapContainer>
        </div>
    )
}

export default OpenStreetMap