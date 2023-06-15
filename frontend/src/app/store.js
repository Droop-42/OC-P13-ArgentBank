import { configureStore } from "@reduxjs/toolkit"
import { argentbankApi } from "./services/argentbankApi"
import authReducer from '../features/login/loginSlice'
import getNameReducer from '../features/getProfile/getProfileSlice'

export const store = configureStore({
    reducer: {
        [argentbankApi.reducerPath]: argentbankApi.reducer,
        auth: authReducer,
        getName: getNameReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(argentbankApi.middleware),
    devTools: true,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})