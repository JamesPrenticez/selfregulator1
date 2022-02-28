import { configureStore } from '@reduxjs/toolkit';

import hamburger from "./reducers/hamburger"
import habits from "./reducers/habits"
import { habitsApi } from "./query/habits";

export const store = configureStore({
  reducer: {
    habits: habits,
    hamburger: hamburger,
    [habitsApi.reducerPath]: habitsApi.reducer
  },
});