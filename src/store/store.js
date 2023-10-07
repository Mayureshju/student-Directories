import { configureStore } from '@reduxjs/toolkit'
import studentSlice from './slice/studentSlice'
export const store = configureStore({
  reducer: {
    student: studentSlice,
  },
})