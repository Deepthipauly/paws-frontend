import { configureStore } from "@reduxjs/toolkit";
import breedReducer from '../features/breed/breedSlice'
import userReducer from '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        breeds: breedReducer,
        userData: userReducer
    },
  });