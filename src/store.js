import { configureStore } from '@reduxjs/toolkit'
import locationReducer from '../src/slices/locationSlice'

const store = configureStore({
    reducer: {
        locations: locationReducer
    }
})

export default store