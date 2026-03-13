import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Update from './pages/Update'
import Login from './common/Login'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/update' element={<Update />} />



    </Routes>
  </BrowserRouter>
)
