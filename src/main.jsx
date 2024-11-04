import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyApp, { Button, Button2, Profile } from './tes.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <MyApp/>
    <Profile/>
    <Button/>
    <Button2/>
  </StrictMode>,
)
