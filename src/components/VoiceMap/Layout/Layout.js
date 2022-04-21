import PropTypes from 'prop-types'

const Layout = ({ header, body }) => (
    <div className="row g-0" data-testid="layout">
        <div className="col-md-12">
            <Layout.Header>
                {header}
            </Layout.Header>

            <Layout.Header>
                {body}
            </Layout.Header>
        </div>
    </div>
)

Layout.Header = ({ children }) => (
    <div className="row g-0" data-testid="layout-header">
        <div className="col-md-12">
            {children}
        </div>
    </div>
)

Layout.Body = ({ children }) => (
    <div className="row g-0" data-testid="layout-body">
        <div className="col-md-12">
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