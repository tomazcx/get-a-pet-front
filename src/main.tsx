import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/global.css'
import { BrowserRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';
import { UserProvider } from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
