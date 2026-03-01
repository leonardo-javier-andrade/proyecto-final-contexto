import { ChatContext } from "../context/ChatContext"
import { useContext } from "react"
import { Navigate } from "react-router-dom"


const Routeprotected =({children})=>{
    
    const {loggedUser}= useContext(ChatContext)

    if(!loggedUser){
        return <Navigate to ="/login" replace/>
    }

    return (children)
    }

export {Routeprotected}