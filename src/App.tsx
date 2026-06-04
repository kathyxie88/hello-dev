import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Kathy')

  return (
    <main>
      <h1>你好，{name}！</h1>

      <label>
        你的名字：
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <p>当前数字：{count}</p>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(0)}>
        重置
      </button>
    </main>
  )
}

export default App