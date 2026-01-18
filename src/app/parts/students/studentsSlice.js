import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', firstName: 'Ivan', lastName: 'Petrov', age: 20, specialty: 'Computer Science' },
  { id: '2', firstName: 'Anna', lastName: 'Smirnova', age: 22, specialty: 'Mathematics' },
]

const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    studentAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export const { studentAdded } = studentsSlice.actions
export default studentsSlice.reducer

