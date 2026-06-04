import { useState } from 'react'
import './App.css'

function App() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState<string[]>([])

  function addTask() {
    if (taskText.trim() === '') {
      return
    }

    setTasks([...tasks, taskText])
    setTaskText('')
  }

  return (
    <main>
      <h1>我的待办事项</h1>

      <label>
        新任务：
        <input
          value={taskText}
          onChange={(event) => setTaskText(event.target.value)}
        />
      </label>

      <button onClick={addTask}>
        添加
      </button>

      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </main>
  )
}

export default App