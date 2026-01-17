import { StudentsList } from '../parts/students/StudentsList'
import { NewStudentForm } from '../parts/students/NewStudentForm'

function Root() {
  return (
    <div id="main">
      <div id="menu">
        <nav>
          <a>Students</a>
          <a>Teachers</a>
        </nav>
      </div>
      <div id="main_page">
        <h2>Students App</h2>
        <hr />
        <NewStudentForm />
        <StudentsList />
      </div>
    </div>
  )
}

export default Root
