import { render, screen } from '@testing-library/react'
import Layout from './Layout'

test('should render component', async () => {
    render(
        <Layout
            header={<div>header</div>}
            body={<div>body</div>}
        />
    )

    expect(screen.getAllByTestId('layout')).toBeTruthy()
})

test('should render Header', () => {
    render(
        <Layout.Header>
            <div>Header</div>
        </Layout.Header>
    )

    expect(screen.getAllByTestId('layout-header')).toBeTruthy()
})

test('should render Body', () => {
    render(
        <Layout.Body>
            <div>Body</div>
        </Layout.Body>
    )

    expect(screen.getAllByTestId('layout-body')).toBeTruthy()
})