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

  function deleteTask(taskToDelete: string) {
    setTasks(tasks.filter((task) => task !== taskToDelete))
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
          <li key={task}>
            <span>{task}</span>
            <button onClick={() => deleteTask(task)}>
              删除
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App