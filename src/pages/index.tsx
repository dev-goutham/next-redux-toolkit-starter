import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { decActionCreator, incActionCreator } from 'lib/redux/slices'
import { State } from '../lib/redux/store'

const Index: React.FC = () => {
	const dispatch = useDispatch()
	const { count } = useSelector((state: State) => ({
		count: state.counter.count,
	}))

	return (
		<div>
			<button onClick={() => dispatch(incActionCreator())}>+</button>
			<span data-testid="count">{count}</span>
			<button id="dec" onClick={() => dispatch(decActionCreator())}>
				-
			</button>
		</div>
	)
}

export default Index
