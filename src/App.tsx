import { useState } from 'react'
import './App.css'

interface Task {
  text: string
  done: boolean
}

function App() {
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])

  function addTask() {
    if (taskText.trim() === '') {
      return
    }

    setTasks([...tasks, { text: taskText, done: false }])
    setTaskText('')
  }

  function toggleTask(index: number) {
    setTasks(tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    ))
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  return (
    <main>
      <h1>我的待办事项</h1>

      <label>
        新任务：
        <input
	  value={taskText}
	  onChange={(event) => setTaskText(event.target.value)}
	  onKeyDown={(event) => {
	    if (event.key === 'Enter') {
	      addTask()
	    }
	  }}
	/>
      </label>

      <button onClick={addTask}>
        添加
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label className="task-label">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(index)}
              />
              <span className={task.done ? 'done' : ''}>{task.text}</span>
            </label>
            <button onClick={() => deleteTask(index)}>
              删除
            </button>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
