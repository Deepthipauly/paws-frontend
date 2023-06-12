import { configureStore } from "@reduxjs/toolkit";
import breedReducer from '../features/breed/breedSlice'

export const store = configureStore({
    reducer: {
        breeds: breedReducer
    },
  });