import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import ClockApp from './ClockApp.jsx'
import CounterApp from './CounterApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ClockApp /> */}
    <CounterApp />
  </StrictMode>,
)
