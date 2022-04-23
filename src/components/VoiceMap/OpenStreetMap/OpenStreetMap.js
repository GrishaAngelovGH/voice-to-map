import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import axios from 'axios'

import MarkerIcon from './MarkerIcon'
import CenterView from './CenterView'

const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

const map = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13
}

const OpenStreetMap = () => {
    const [locations, setLocations] = useState([])

    const lastLocation = useSelector(state => state.locations.lastLocation)

    const position = [map.lat, map.lng]

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const key = process.env.REACT_APP_DEMO_GEOCODING_API_ACCESS_TOKEN
                const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${lastLocation}&format=json`
                const { data } = await axios.get(url)
                setLocations(data)
            }
            catch (err) {
                toast.error('An unexpected error has occurred, please try again', { theme: 'colored' })
            }
        }

        lastLocation.length > 0 && fetchLocation()

    }, [lastLocation])

    return (
        <div data-testid="osm">
            <style>{'.leaflet-container {height: 100vh;}'}</style>
            <MapContainer center={position} zoom={map.zoom}>
                <TileLayer url={url} />
                {
                    locations.map(v => (
                        <Marker key={v.place_id} position={[v.lat, v.lon]} icon={MarkerIcon}>
                            <Popup>
                                <div className="fw-bold">{v.display_name}</div>
                            </Popup>
                        </Marker>
                    ))
                }
                <CenterView locations={locations} />
            </MapContainer>
        </div>
    )
}

export default OpenStreetMap