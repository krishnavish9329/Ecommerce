import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import { ToastContainer, toast } from 'react-toastify';

import {  AuthProvider } from './context/Auth.jsx'

  
createRoot(document.getElementById('root')).render(
  <AuthProvider>
  <BrowserRouter>   
     <App />
  </BrowserRouter>
  </AuthProvider>
)

