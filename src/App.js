import React from 'react'
import { TaskForm } from './components/TaskForm'
import Tasks from './components/Tasks'
import "./style/style.css"

function App() {
  return (
    <div className="container">
      <div className="row mt-5 border bg-light">
            <div className="col-12 px-3 mt-3 border-bottom">
              <h2>Todo</h2>
              <TaskForm />
            </div>
            <div className="col-11 mb-5 h-50 mx-auto">
              <h3 className="text-center mt-3 mb-5">Список задач</h3>
              <Tasks tasks={[]} />
            </div>
        </div>
    </div>
  );
}

export default App;