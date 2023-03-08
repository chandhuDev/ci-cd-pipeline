import React from 'react'
import { Routes,Route } from 'react-router-dom'
import App from './App'
import Payment from './Stripe/Payment'
import Success from './Success'

const index = () => {
  return (
    <>
      <Routes>
         <Route exact path='/' element={<App />}></Route>
         <Route path='/success' element={<Success />}></Route>
         <Route path='/payment' element={<Payment />}></Route>
      </Routes>
    </>
  )
}

export default index
