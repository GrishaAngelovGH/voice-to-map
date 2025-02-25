import { configureStore } from '@reduxjs/toolkit'
import locationReducer from 'slices/locationSlice'

const store = configureStore({
	reducer: {
		locations: locationReducer
	}
})

export const setupStore = preloadedState => {
	return configureStore({
		reducer: {
			locations: locationReducer
		},
		preloadedState
	})
}

export default store