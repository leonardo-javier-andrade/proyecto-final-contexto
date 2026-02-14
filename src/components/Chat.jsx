import { useContext ,useState, useRef, useEffect, use, act } from "react"
// import { messages as mockMessages } from "../services/mockApi.js";
import { ChatContext } from "../context/Chatcontext.jsx";

const Chat = () => {

  // const [messages, setMessages] = useState(mockMessages)
  const [text, setText] = useState("")
 

  const chatContainerRef = useRef(null)


const {selectedUser} = useContext(ChatContext)


  const hadleChange = (event) => {
    setText(event.target.value)
  }

const downkey = (event) => {
  if (event.key === "Enter") {
    clickSubmit()
  }}

  const clickSubmit = (event) => {

    if (text.length === 0) {
      return}
      
    console.log("Hiciste click")
    const ahora = new Date()
    const hour = ahora.getHours()
    const minutes = ahora.getMinutes()
    const newchat = {
      id: messages.length + 1,
      author: "Robin",
      text: text,
      time: `${hour}:${minutes}`

    }
    setText("")
 
 
  }
 
  useEffect(()=>{
    if(chatContainerRef.current){
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
  }},[])


if (!selectedUser) {
    return ( <section className="chat-cont-empty">
      <p className="chat-empty">Selecciona un usuario para comenzar</p>
      </section>
    )
  }

  return (
    <section className="chat">
      <header>
        <h2> {selectedUser.firstName} {selectedUser.lastName}</h2>
        <h2>{selectedUser.address.city}</h2>
        <p>Ultima conexión hace 1 minuto</p>
      </header>
      <div className="chat-container" ref={chatContainerRef}>
        {
          selectedUser.messages.map((message) =>
            <div className={`message ${message.author === "me" ? "me" : "received"}`}>
             <p> <b>{message.author === "me" ? "Tú" : message.author}: </b>
                {message.text}
              </p>
              <p className="timeStamp">{message.time}</p>

            </div>
          )
        }
      </div>
      <div className="chat-input">
        <input className= "input" onChange={hadleChange} onKeyDown={downkey} type="text" placeholder="Escribe un mensaje..." value={text}/>
        <button onClick={clickSubmit}>Enviar</button>
      </div>
    </section>
  )
}

export { Chat }