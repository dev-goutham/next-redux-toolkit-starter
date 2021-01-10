import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/index'

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
	},
})

const state = store.getState()

export type State = typeof state

export default store
