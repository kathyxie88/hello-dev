import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <h1>Hello Kathy</h1>
      <p>这是我的第一个 React 小功能。</p>

      <button onClick={() => setCount(count + 1)}>
        点击次数：{count}
      </button>
    </main>
  )
}

export default App
