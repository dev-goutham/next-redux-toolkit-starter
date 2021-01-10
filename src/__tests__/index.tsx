import React, { ReactElement } from 'react'
import {
	fireEvent,
	render as rtlRender,
	screen,
	cleanup,
	RenderOptions,
	RenderResult,
} from '@testing-library/react'
import Queries from '@testing-library/dom/types/queries'
import { Provider } from 'react-redux'

import Index from 'pages/index'
import { Store, configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../lib/redux/slices/counterSlice'

const createStore = (): Store => {
	const store = configureStore({ reducer: { counter: counterSlice.reducer } })
	return store
}

const render = (
	ui: ReactElement,
	renderOptions?: RenderOptions
): RenderResult<typeof Queries> => {
	const Wrapper: React.FC = ({ children }) => {
		return <Provider store={createStore()}>{children}</Provider>
	}
	return rtlRender(ui, {
		wrapper: Wrapper,
		...renderOptions,
	})
}

describe('<Index/>', () => {
	beforeEach(() => {
		render(<Index />)
	})

	afterEach(cleanup)

	it('increases the count when hit the inc button', () => {
		const incBtn = screen.getByText('+')
		const count = screen.getByTestId('count')

		fireEvent.click(incBtn)
		expect(count.innerHTML).toBe('1')
		fireEvent.click(incBtn)
		expect(count.innerHTML).toBe('2')
		fireEvent.click(incBtn)
		expect(count.innerHTML).toBe('3')
	})

	it('decreases the count when hit the dec button', () => {
		const decBtn = screen.getByText('-')
		const count = screen.getByTestId('count')
		console.log({ count: count.innerHTML })
		fireEvent.click(decBtn)
		expect(count.innerHTML).toBe('-1')
		fireEvent.click(decBtn)
		expect(count.innerHTML).toBe('-2')
		fireEvent.click(decBtn)
		expect(count.innerHTML).toBe('-3')
	})
})
