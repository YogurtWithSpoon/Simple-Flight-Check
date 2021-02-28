import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    correctUser: { email: "test@test.com", password: "test1234" },
  },
  reducers: {},
});

export const selectAuth = (state) => state.auth.correctUser;
export default authSlice.reducer;
