import { Aside } from "./Aside"
import { Chat } from "./Chat"


const App =() => {
// Agregando funcion en el main para renderizar los componentes Aside y Chat dentro de un main con clase app, y envolviendo todo en StrictMode para evitar errores en el futuro.


  return (
     <main className="app">
      <Aside />
      <Chat />
    </main>)
}

export {App}