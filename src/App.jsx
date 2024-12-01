import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import {Home, About, Projects, Contact} from './pages/index'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className='bg-slate-200/20  min-h-[100vh]'>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App