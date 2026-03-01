import { useContext, useState } from "react"
import { ChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const Aside = () => {

  const [search, setSearch] = useState("")

  const { users, handleSelectedUserId, logout } = useContext(ChatContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")

  }
  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
    return fullName.includes(search.toLowerCase())
  })

  const handleClick = (id) => {
    console.log(id)
    handleSelectedUserId(id)
  }


  return (
    <aside>
      <div className="header-aside">

        <button onClick={handleLogout} className="btn-logout" >
          <span className="icon">🏃‍♂️</span>
          <span className="text">Cerrar Sesión</span>
        </button>
        <h1>Chat de UTN</h1>
      </div>

      <input className="seach" type="search" placeholder="Buscar usuario" onChange={handleChange} />
      {filteredUsers.length === 0 && <p>No se encontraron contactos</p>}
      <ul>
        {
          filteredUsers.map((user) => (
            <li key={user.id} onClick={() => handleClick(user.id)}>
              <img src={user.image} alt="" />
              <div>
                {user.firstName} {user.lastName}
               
                <span>{user.address.city}</span>
               {user.address.city.length === 0 && <span> - Sin ciudad</span>}
              </div>
            </li>

          ))
        }
      </ul>

    </aside>
  )
}

export { Aside }