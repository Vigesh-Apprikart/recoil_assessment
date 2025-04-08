import React from 'react'
import Counter from './components/Counter'


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🔢 Recoil Counter</h1>
      <Counter />
    </div>
  )
}

export default App
