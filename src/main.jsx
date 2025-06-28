import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <App /> {/* this component is rendered in the div block of the html file wh
     with id = "root" */}
  </StrictMode>,
)
