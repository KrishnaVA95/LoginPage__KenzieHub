import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from './providers/Providers'
// import { UserRegisterProvider } from './providers/UserRegisterContext'
import App from './App'
import GlobalStyle from './Styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers>
          <App />
      </Providers>
    </BrowserRouter>
  </React.StrictMode>,
)
