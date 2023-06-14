import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    token: null,
    username: null,
    userId: null,
    accountType: null,
  },
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      console.log("updated user data", action);
      state.user = action.payload;
    },
    userLogout: (state, action) => {
      state.user = {
        token: null,
        username: null,
        userId: null,
        accountType: null,
      };
    },
  },
});

//export actions

export const { userLogin, userLogout } = userSlice.actions;

//export selector

export const selectUser = (state) => state.userData.user;

export default userSlice.reducer;
