import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // all data
  breedData: [],
};

export const breedSlice = createSlice({
  name: "breeds",
  initialState,
  reducers: {
    fetchBreed: (state, action) => {
        console.log("updating data",action);
      state.breedData = action.payload;
    },

  },
});

export const { fetchBreed } = breedSlice.actions;


//selcetor

export const selectBreed = (state)=> state.breeds.breedData;

//exporting

export default breedSlice.reducer