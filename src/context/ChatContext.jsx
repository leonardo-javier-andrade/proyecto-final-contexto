import { createContext, useState } from "react";
import{users as mockUsers} from "../services/mockApi"



const ChatContext = createContext()

const ChatProvider = ({children}) => {
    
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("newApi")) || mockUsers)
    const [selectedUserId, setSelectedUserId] = useState(null)
    const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("user")) || null)


    console.log(loggedUser, "valor del usuario logueado desde el context ---------------")

    const handleUser =(user) =>{
        setLoggedUser(user)
        localStorage.setItem("user",JSON.stringify(user))
    }


    
    const handleSelectedUserId = (id) =>{
        setSelectedUserId(id)
    }

    const login =(userData) =>{
        console.log( userData, "datos del login")
        const userfound = users.find(user=> user.email === userData.email)

        if (!userfound){
            return false
        }
        if (userfound.password === userData.password){
            return true
        }

    }

    const logout =()=>{
        localStorage.removeItem("user")
    }

    const handleMessages = (newChat) =>{
        setUsers((prevValue)=> prevValue.map((user)=>
            user.id=== selectedUserId ?
        {
            ...user,
            messages: [...user.messages,newChat]
        }:
        user))
       
    }
            

    const selectedUser = users.find(user => user.id === selectedUserId)

    const  handleRegisterNexUser = (newUser)=>{
        setUsers((prevValue) => [...prevValue, newUser])
        console.log(newUser, "datos del nuevo usuario desde el context añadidos a la lista de usuario")
        localStorage.setItem("newApi",JSON.stringify(users))


    }


    return(
        <ChatContext.Provider value={{users, selectedUser, handleRegisterNexUser, handleSelectedUserId, login , handleUser, loggedUser, logout, handleMessages}}>
            {children}
        </ChatContext.Provider>
    )
}

export {ChatContext ,ChatProvider}