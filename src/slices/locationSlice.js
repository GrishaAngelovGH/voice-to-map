import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lastLocation: '',
    history: []
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        addLocation: (state, action) => {
            state.lastLocation = action.payload
        },
        addToHistory: (state, action) => {
            state.history = [
                ...state.history,
                ...action.payload
            ]
        }
    }
})

export const { addLocation, addToHistory } = locationSlice.actions

export default locationSlice.reducer