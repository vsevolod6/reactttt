import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { studentAdded } from './studentsSlice'

export const NewStudentForm = () => {
  // Локальные стейты для полей формы
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)
  const [specialty, setSpecialty] = useState('')

  // Доступ к dispatch
  const dispatch = useDispatch()

  // Обработчики изменений полей
  const onFirstNameChanged = (e) => setFirstName(e.target.value)
  const onLastNameChanged = (e) => setLastName(e.target.value)
  const onAgeChanged = (e) => setAge(e.target.value)
  const onSpecialtyChanged = (e) => setSpecialty(e.target.value)

  // Обработчик клика по кнопке "Save"
  const onSaveStudentClick = () => {
    // Проверка, что все поля заполнены
    if (firstName && lastName && age && specialty) {
      // Отправка action в Redux store
      dispatch(
        studentAdded({
          id: nanoid(),
          firstName,
          lastName,
          age,
          specialty,
        })
      )

      // Сброс локальных стейтов
      setFirstName('')
      setLastName('')
      setAge(0)
      setSpecialty('')
    }
  }

  return (
    <div>
      <h2>Add a New Student</h2>
      <form>
        <p>
          <label htmlFor="studentFirstName">First Name:</label>
          <input
            id="studentFirstName"
            name="studentFirstName"
            value={firstName}
            onChange={onFirstNameChanged}
          />
        </p>
        <p>
          <label htmlFor="studentLastName">Last Name:</label>
          <input
            id="studentLastName"
            name="studentLastName"
            value={lastName}
            onChange={onLastNameChanged}
          />
        </p>
        <p>
          <label htmlFor="studentAge">Age:</label>
          <input
            id="studentAge"
            name="studentAge"
            type="number"
            value={age}
            onChange={onAgeChanged}
          />
        </p>
        <p>
          <label htmlFor="studentSpecialty">Specialty:</label>
          <input
            id="studentSpecialty"
            name="studentSpecialty"
            value={specialty}
            onChange={onSpecialtyChanged}
          />
        </p>
        <button type="button" onClick={onSaveStudentClick}>
          Save
        </button>
      </form>
    </div>
  )
}
