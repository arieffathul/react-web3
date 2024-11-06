import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MyApp, { Button, Button2, Profile } from './tes.jsx'
import App from './App.jsx'
// import Hook from './Hooks.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Latihan/Login.jsx'
import TodoList from './Latihan/Todo.jsx'
import Cart from './Latihan/Cart.jsx'
import Done from './Latihan/done.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <MyApp/>
    <Profile/>
    <Button/>
    <Button2/> */}
    {/* <Hook/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/done' element={<Done/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
