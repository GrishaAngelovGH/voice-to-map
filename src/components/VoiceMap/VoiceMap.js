import Layout from './Layout'
import MapHeader from './Header'

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
            Body
        </div>
    </div>
)

const VoiceMap = () => (
    <div className="row g-0" data-testid="voice-map">
        <div className="col-md-12">
            <Layout header={<Header />} body={<Body />} />
        </div>
    </div>
)

export default VoiceMap