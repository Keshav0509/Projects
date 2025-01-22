import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TodoProvider } from './store/TodoStore'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <TodoProvider>
      <StrictMode>
        <App />
      </StrictMode>,
    </TodoProvider>
  </BrowserRouter>
)
