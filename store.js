import { configureStore } from '@reduxjs/toolkit';
import CitiesAPI from './redux/features/CitiesAPI'

export default configureStore({
    reducer: {
        [CitiesAPI.reducerPath]: CitiesAPI.reducer
    }
})