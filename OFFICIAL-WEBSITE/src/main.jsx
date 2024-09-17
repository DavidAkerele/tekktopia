import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OurTeam from './pages/OurTeam'
import ContactUs from './pages/ContactUs'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route path='/OurTeam' element={<OurTeam/>}/>
      <Route path='/ContactUs' element={<ContactUs/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
