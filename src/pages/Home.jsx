import { Aside } from "../components/Aside"
import { Chat } from "../components/Chat"
import { useContext } from "react"
import { ChatContext } from "../context/ChatContext.jsx"

const Home =() => {

  const{selectedUserId} = useContext(ChatContext)
  console.log(selectedUserId, "desde la app de HOME---------" )



return (
     <main className={`app ${selectedUserId ? 'user-selected' : ''}`}>
      <Aside />
      <Chat />
    </main>)
}

export {Home}