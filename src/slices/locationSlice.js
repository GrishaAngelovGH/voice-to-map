import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lastLocation: '',
    history: []
}

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    // Redux Toolkit allows us to write "mutating" logic in reducers. 
    // It doesn't actually mutate the state.
    // https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-state-slice
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