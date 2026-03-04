import { useContext, useState, useRef, useEffect } from "react"
import { ChatContext } from "../context/ChatContext.jsx";

const Chat = () => {

  const [text, setText] = useState("")

  const chatContainerRef = useRef(null)

  const { selectedUser, handleMessages, handleSelectedUserId } = useContext(ChatContext)


  const hadleChange = (event) => {
    setText(event.target.value)
  }

  const downkey = (event) => {
    if (event.key === "Enter" && event.shiftKey) {
      return
    }

    if (event.key === "Enter") {
      event.preventDefault() // Evita el salto de línea al presionar Enter
      clickSubmit()
    }
  }

  const clickSubmit = (event) => {
    if (text.trim() === "") {
      return
    }

    const ahora = new Date()
    const hour = ahora.getHours()
    const minutes = ahora.getMinutes()
    const newchat = {
      author: "me",
      text: text,
      time: `${hour}:${minutes}`

    }
    handleMessages(newchat)
    setText("")


  }

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [selectedUser?.messages])

const ClickBack = () => {
handleSelectedUserId(null)}


  if (!selectedUser) {
    return (<section className="chat-cont-empty">
      <p className="chat-empty">Selecciona un usuario para comenzar</p>
    </section>
    )
  }


  return (
    <section className="chat">
      <header>

        <img src={selectedUser.image} alt="Imagen del usuario" />
        <div>
           <h2> {selectedUser.firstName} {selectedUser.lastName}</h2>
            <h2>{selectedUser.address.city}</h2>
            <p>Ultima conexión hace 1 minuto</p>
        </div>

        <button className="btn-back-mobile" onClick={()=>ClickBack(null)}>
          ⬅️
        </button>


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
        <textarea className="input" onChange={hadleChange} onKeyDown={downkey} type="text" placeholder="Escribe un mensaje..." value={text} />
        <button onClick={clickSubmit}>Enviar</button>
      </div>
    </section>
  )
}

export { Chat }