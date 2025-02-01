import React, { FC } from 'react'
import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App