import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CitiesAPI, { citiesAPI } from './redux/features/CitiesAPI'
import Itinerary from './redux/features/ItineraryAPI'
import ActivitiesaAPI from './redux/features/ActivitiesAPI'
import CommentsAPI from './redux/features/CommentsAPI'
import userAPI from './redux/features/userAPI'
import myTineraryAPI from './redux/features/myTineraryAPI'
import ReloadSlice from './redux/slices/ReloadSlice'
import messageSlice from './redux/slices/messageSlice'
import userSlice from './redux/slices/userSlice'

export default configureStore({
    reducer: {
        [CitiesAPI.reducerPath]: CitiesAPI.reducer,
        [Itinerary.reducerPath]: Itinerary.reducer,
        [ActivitiesaAPI.reducerPath]: ActivitiesaAPI.reducer,
        [CommentsAPI.reducerPath]: CommentsAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
        [myTineraryAPI.reducerPath]: myTineraryAPI.reducer,
        reload: ReloadSlice,
        message: messageSlice,
        auth: userSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        CitiesAPI.middleware, Itinerary.middleware, ActivitiesaAPI.middleware, CommentsAPI.middleware, userAPI.middleware, myTineraryAPI.middleware
    )
})