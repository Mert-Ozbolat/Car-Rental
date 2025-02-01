import { FC } from 'react'
import Header from './components/header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-dark-gray text-white'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App