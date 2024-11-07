/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import MyApp, { Button, Button2, Profile } from './tes.jsx'
// import App from './App.jsx'
// import Hook from './Hooks.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Login from './Latihan/Login.jsx'
// import TodoList from './Latihan/Todo.jsx'
// import Cart from './Latihan/Cart.jsx'
// import Done from './Latihan/done.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.jsx'
import { LoginProvider } from './context/LoginContext.jsx'
import { NotificationProvider } from './context/NotificationContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* daisy ui */}
    <Provider store={store}>
      <BrowserRouter>
        <LoginProvider>
          <NotificationProvider>
            <AppRoutes />
          </NotificationProvider>
        </LoginProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
