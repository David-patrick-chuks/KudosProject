import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GlobalProvider } from './utils/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider />
  </StrictMode>
)
