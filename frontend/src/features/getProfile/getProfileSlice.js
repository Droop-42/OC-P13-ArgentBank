import { createSlice } from "@reduxjs/toolkit"

const getProfileSlice = createSlice({
    name: 'getName',
    initialState: { firstName: null, lastName: null },
    reducers: {
        setUserName: (state, action) => {
            const { userFirstName, userLastName } = action.payload
            state.firstName = userFirstName
            state.lastName = userLastName
        }
    }
})

export const { setUserName} = getProfileSlice.actions
export default getProfileSlice.reducer

export const selectCurrentFirstName = (state) => state.getName.firstName
export const selectCurrentLastName = (state) => state.getName.lastName