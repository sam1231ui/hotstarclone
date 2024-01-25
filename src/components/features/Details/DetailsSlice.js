import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data : {},
    loading : false,
    error : null
}

export const DetailsSlice = createSlice({
    name: 'Details',
    initialState,
    reducers: {
        increment: (state) => {
            state.data = state
            console.log(state.data + " increment reducer")
        },
        decrement: (state) => {
            state.data = {}
            console.log(state.data + " decrement reducer")
        }
    }
})

// export reducer
export const { increment, decrement } = DetailsSlice.actions
export default DetailsSlice.reducer
