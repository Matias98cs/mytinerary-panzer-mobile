import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import apiurl from '../../api'

export const actitiesAPI = createApi({
    reducerPath: "actitiesAPI",

    baseQuery: fetchBaseQuery({
        baseUrl: apiurl
    }),
    endpoints: (builder) => ({
        getActivity: builder.query({
            query: (itineraryId) => `/activities/query?itinerary=${itineraryId}`
        }),

        updateActivity: builder.mutation({
            query: ({id, ...payload}) => ({
                url: `/activities/update-activity/${id}`,
                method: "PATCH",
                body: payload,
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        }),
        createActivity: builder.mutation({
            query: (payload) => ({
                url: '/activities',
                method: 'POST',
                body: payload,
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            })
        })
    })

})


export default actitiesAPI
export const { useGetActivityQuery, useUpdateActivityMutation, useCreateActivityMutation } = actitiesAPI

