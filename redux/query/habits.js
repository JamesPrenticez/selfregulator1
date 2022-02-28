import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const headers = {headers: { 'Content-Type': 'application/json' }}
const baseUrl = 'http://localhost:3000/api/habits'

const createRequest = (url) => ({ url, headers})

export const habitsApi = createApi({
  reducerPath: 'getHabits',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getHabits: builder.query({
      query: () => createRequest('/')
    })
  })
})

export const { useGetHabitsQuery } = habitsApi;