import React from 'react'
import Hero from './pages/Hero'
import { Routes, Route } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import AccountSetup from './pages/AccountSetup'
import Payment from './pages/Payment'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/create" element={<CreatePage/>} />
      <Route path="/account-setup" element={<AccountSetup/>} />
      <Route path="/payment" element={<Payment/>} />
    </Routes>
  )
}

export default App