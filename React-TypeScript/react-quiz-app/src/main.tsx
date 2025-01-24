import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// import GameForm from './components/GameForm.tsx'
import { FormProvider } from './store/StoreGameForm.tsx'

createRoot(document.getElementById('root')!).render(
  <FormProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FormProvider>
)
