import { render } from '@testing-library/react'
import Layout from './Layout'

test('should render component', () => {
    const container = render(
        <Layout
            header={<div>header</div>}
            body={<div>body</div>}
        />
    )

    expect(container).toMatchSnapshot()
})

test('should render Header', () => {
    const container = render(
        <Layout.Header>
            <div>Header</div>
        </Layout.Header>
    )

    expect(container).toMatchSnapshot()
})

test('should render Body', () => {
    const container = render(
        <Layout.Body>
            <div>Body</div>
        </Layout.Body>
    )

    expect(container).toMatchSnapshot()
})