import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        
        </Route>
      </Routes>
    </div>
  )
}

export default App
