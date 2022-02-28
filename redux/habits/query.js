import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

const headers = {headers: { 'Content-Type': 'application/json' }}
const baseUrl = 'http://localhost:3000/api/habits'

const createRequest = (url) => ({ url, headers})

export const habitsApi = createApi({
  reducerPath: 'getHabits',
  baseQuery: fetchBaseQuery({ baseUrl }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getHabits: builder.query({
      query: () => createRequest('/')
    })
  })
})

export const { useGetHabitsQuery } = habitsApi;

//https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering