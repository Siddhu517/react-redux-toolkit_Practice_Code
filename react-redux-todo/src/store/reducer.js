import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    tasks: [],
  },
  reducers: {
    saveTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveTask } = counterSlice.actions;

export default counterSlice.reducer;
