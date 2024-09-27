import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GlobalProvider } from './utils/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalProvider />
  </StrictMode>
)
