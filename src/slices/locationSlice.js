import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lastLocation: ''
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.lastLocation = action.payload
        }
    }
})

export const { addLocation } = locationSlice.actions

export default locationSlice.reducer