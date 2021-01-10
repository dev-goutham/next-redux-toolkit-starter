import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		inc: (state) => {
			state.count++
		},
		dec: (state) => {
			state.count--
		},
	},
})

export const {
	dec: decActionCreator,
	inc: incActionCreator,
} = counterSlice.actions
