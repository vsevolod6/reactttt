import { useSelector } from 'react-redux'

export const StudentsList = () => {
  const students = useSelector((state) => state.students)

  const dispStudents = students.map((student) => (
    <div key={student.id}>
      <h3>{student.firstName} {student.lastName}</h3>
      <p>Age: {student.age}</p>
      <p>Specialty: {student.specialty}</p>
    </div>
  ))

  return (
    <div>
      <h2>Students List</h2>
      {dispStudents}
    </div>
  )
}
