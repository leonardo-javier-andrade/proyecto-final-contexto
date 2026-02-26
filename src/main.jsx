import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'


// Agregado de estilos css
import "./styles/main.css"
import { ChatProvider } from './context/ChatContext.jsx'

import {RouterApp} from './router/RouterApp.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <RouterApp/>
    </ChatProvider>
  </StrictMode>,
)
