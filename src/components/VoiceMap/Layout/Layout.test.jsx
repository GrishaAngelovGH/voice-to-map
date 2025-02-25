import { render } from '@testing-library/react'
import Layout from './Layout'

test('should render Layout component', () => {
	const view = render(
		<Layout
			header={<div>header</div>}
			body={<div>body</div>}
		/>
	)

	expect(view).toMatchSnapshot()
})

test('should render Layout.Header component', () => {
	const view = render(
		<Layout.Header>
			<div>Header</div>
		</Layout.Header>
	)

	expect(view).toMatchSnapshot()
})

test('should render Layout.Body component', () => {
	const view = render(
		<Layout.Body>
			<div>Body</div>
		</Layout.Body>
	)

	expect(view).toMatchSnapshot()
})