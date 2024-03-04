import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './components/context/userContext'
import  CartContext  from './components/context/productContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartContext>
      <UserProvider>
        <App />
      </UserProvider>
      </CartContext>
    </BrowserRouter>
  </React.StrictMode>,
)