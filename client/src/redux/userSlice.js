import { createSlice } from '@reduxjs/toolkit'

// use reduxThunk to fetch user automatically and put in redux state in the initialState

const initialState = {
    user: null
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = null
        }
    }
})

export const { setUser, logoutUser } = userSlice.actions
export default userSlice.reducer