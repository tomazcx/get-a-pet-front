import { useState } from 'react'
import { Footer } from './components/sections/footer'
import { Header } from './components/sections/header'
import { Router } from './Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-between min-h-screen text-sm'>
      <Header />
      <Router />
      <Footer />
    </div>

  )
}

export default App
