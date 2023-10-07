import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.push(action.payload);
    },
   
    removeStudent: (state, action) => {
      const studentIdToRemove = action.payload;
      return state.filter((student) => student.studentId !== studentIdToRemove);
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;

export default studentSlice.reducer;
