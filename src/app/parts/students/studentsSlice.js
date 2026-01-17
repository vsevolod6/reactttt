import { createSlice } from '@reduxjs/toolkit'

// Начальное состояние слайса students
const initialState = [
  {
    id: '1',
    firstName: 'Ivan',
    lastName: 'Petrov',
    age: 20,
    specialty: 'Computer Science',
  },
  {
    id: '2',
    firstName: 'Anna',
    lastName: 'Smirnova',
    age: 22,
    specialty: 'Mathematics',
  },
]

// Создание слайса students
const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    // Редьюсер для добавления нового студента
    studentAdded(state, action) {
      state.push(action.payload)
    },
  },
})

// Экспорт action creator для использования в компонентах
export const { studentAdded } = studentsSlice.actions

// Экспорт редьюсера для подключения к store
export default studentsSlice.reducer
