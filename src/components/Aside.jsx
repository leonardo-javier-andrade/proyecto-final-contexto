import { useContext, useEffect, useState } from "react"
import { ChatContext } from "../context/Chatcontext";
// import {users} from "../services/mockApi.js"

const Aside = () => {
const [search, setSearch] = useState("")

const {users, handleSelectedUser} = useContext(ChatContext)



const handleChange = (event)=>{
setSearch(event.target.value)}

const filteredUsers = users.filter((user) => {
  const fullName = `${user.firstName} ${user.lastName}`.toLowerCase()
  return fullName.includes(search.toLowerCase())
})

const handleClick =(id)=>{
  console.log(id)
  handleSelectedUser(id)
}


  return (
    <aside> 
        <h1>Chat de UTN</h1>
        <input className="seach" type="search" placeholder="Buscar usuario" onChange={handleChange}/>
        {filteredUsers.length === 0 && <p>No se encontraron contactos</p>}
        <ul>
            {
            filteredUsers.map((user)=>(
                <li key= {user.id} onClick= {()=>handleClick(user.id)}>
                  <img src={user.image} alt="" />
                  <div>
                    {user.firstName} {user.lastName}
                  
                  <span>{user.address.city}</span>
                  </div>
                </li>
       
            ))
            }
        </ul>

    </aside>
  )
}

export {Aside}