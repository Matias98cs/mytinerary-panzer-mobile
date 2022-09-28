import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CitiesAPI, { citiesAPI } from './redux/features/CitiesAPI'
import Itinerary from './redux/features/ItineraryAPI'
import ActivitiesaAPI from './redux/features/ActivitiesAPI'

export default configureStore({
    reducer: {
        [CitiesAPI.reducerPath]: CitiesAPI.reducer,
        [Itinerary.reducerPath]: Itinerary.reducer,
        [ActivitiesaAPI.reducerPath]: ActivitiesaAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        CitiesAPI.middleware, Itinerary.middleware, ActivitiesaAPI.middleware
    )
})