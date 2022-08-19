import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../App/App'
import GlobalStyle  from './GlobalStyle'
import { BrowserRouter } from "react-router-dom"
import { ContextProvider } from "../../contexts/Context"

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <React.StrictMode>
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ContextProvider>
)
