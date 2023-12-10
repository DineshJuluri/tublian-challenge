import React from 'react'
import Hero from './pages/Hero'
import { Routes, Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import AccountSetup from './pages/AccountSetup'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/account-setup" element={<AccountSetup/>} />
    </Routes>
  )
}

export default App