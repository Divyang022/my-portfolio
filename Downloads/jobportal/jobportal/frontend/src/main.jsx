import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Usercontext from './Components/Usercontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Usercontext>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Usercontext>,
)
