import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Update from './pages/Update'
import Login from './common/Login'
import ProtectedRoute from './Protected'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<Login />} />

      <Route
        path='/home'
        element={<ProtectedRoute> <Home /> </ProtectedRoute> }
      />

      <Route
        path='/update'
        element={<ProtectedRoute> <Update /> </ProtectedRoute>}
          
      />



    </Routes>
  </BrowserRouter>
)
