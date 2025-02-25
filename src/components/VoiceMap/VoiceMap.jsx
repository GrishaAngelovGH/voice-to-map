import Layout from './Layout'
import Header from './Header'
import OpenStreetMap from './OpenStreetMap'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const VoiceMap = () => (
	<div className='row g-0'>
		<div className='col-md-12'>
			<Layout header={<Header />} body={<OpenStreetMap />} />
			<ToastContainer position='top-center' />
		</div>
	</div>
)

export default VoiceMap