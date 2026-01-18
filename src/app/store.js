import { configureStore } from '@reduxjs/toolkit'
import studentsReducer from '../parts/students/studentsSlice'

export default configureStore({
  reducer: {
    students: studentsReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})

