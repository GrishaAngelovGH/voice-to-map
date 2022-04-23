import Layout from './Layout'
import MapHeader from './Header'
import OpenStreetMap from './OpenStreetMap'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Header = () => (
    <div className="row g-0" data-testid="vm-header">
        <div className="col-md-12">
            <MapHeader />
        </div>
    </div>
)

export const Body = () => (
    <div className="row g-0" data-testid="vm-body">
        <div className="col-md-12">
            <OpenStreetMap />
        </div>
    </div>
)

const VoiceMap = () => (
    <div className="row g-0" data-testid="voice-map">
        <div className="col-md-12">
            <Layout header={<Header />} body={<Body />} />
            <ToastContainer position="top-center" />
        </div>
    </div>
)

export default VoiceMap