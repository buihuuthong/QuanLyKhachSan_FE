import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roleList: {},
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoleList(state, { payload }) {
      state.roleList = payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
      // Add user to the state array
      state.roleList = payload;
    });
  },
});

export const roleListSelector = (state) => state.user.roleList;

export const { setRoleList } = roleSlice.actions;

export default roleSlice.reducer;
