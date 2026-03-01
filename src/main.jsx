import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// Estilos de la App
import "./styles/main.css"

//Importaciones de componentes y rutas
import { ChatProvider } from './context/ChatContext.jsx'

import {RouterApp} from './router/RouterApp.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp/>
    </ChatProvider>
  </StrictMode>,
)
