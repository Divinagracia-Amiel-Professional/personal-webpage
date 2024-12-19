import { useState } from 'react'
import { Outlet } from 'react-router'
import { ThemeProvider } from './hooks/hooksIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  )
}

export default App
