import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clubId: null,
  coeId: null,
  isAuthorised: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSucess: (state, action) => {
      state.isAuthorised = true;
      if (action.payload.clubId !== null) {
        state.clubId = action.payload.clubId;
      } else {
        state.coeId = action.payload.coeId;
      }
    },
    loginFail: (state) => {
      state.isAuthorised = false;
      state.clubId = null;
      state.coeId = null;
    },
    logoutSuccess: (state) => {
      state.isAuthorised = false;
      state.clubId = null;
      state.coeId = null;
    },
    logoutFail: (state) => {
      state.isAuthorised = false;
      state.clubId = null;
      state.coeId = null;
    },
  },
});

export const { loginSucess, loginFail,logoutSuccess,logoutFail } = authSlice.actions;

export default authSlice.reducer;
