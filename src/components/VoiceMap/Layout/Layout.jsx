import PropTypes from 'prop-types'
import './Layout.css'

const Layout = ({ header, body }) => (
	<div className='row g-0'>
		<div className='col-md-12'>
			<Layout.Header>
				{header}
			</Layout.Header>

			<Layout.Body>
				{body}
			</Layout.Body>
		</div>
	</div>
)

Layout.Header = ({ children }) => (
	<div className='row g-0'>
		<div className='col-md-12'>
			{children}
		</div>
	</div>
)

Layout.Body = ({ children }) => (
	<div id='layout-body' className='row g-0'>
		<div className='col-md-12'>
			{children}
		</div>
	</div>
)

Layout.Header.propTypes = {
	children: PropTypes.element.isRequired
}

Layout.Body.propTypes = {
	children: PropTypes.element.isRequired
}

Layout.propTypes = {
	header: PropTypes.element.isRequired,
	body: PropTypes.element.isRequired
}

export default Layout