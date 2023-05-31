import { configureStore, createSlice } from "@reduxjs/toolkit"

const userDataSlice = createSlice({
    name: "userData",
    initialState: [
        { firstName: "john", lastName: "doe" }
    ],
    reducers: {
        addUserData: (state, action) => {
            state = []
            const newUserData = {
                firstName: action.payload,
                lastName: action.payload,
            }
            state.push(newUserData );
        }
    }
})

export const store = configureStore({
    reducer: {
        todo: userDataSlice.reducer,
    }
})

export const {addUserData} = userDataSlice.actions