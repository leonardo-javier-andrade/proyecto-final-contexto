import { BrowserRouter,Routes,Route } from "react-router-dom"   
import {Home} from '../pages/Home.jsx' 
import{NotFound} from'../pages/NotFound.jsx'
import { Login } from "../pages/Login.jsx"
import {Register} from "../pages/Register.jsx"
import {Acerca} from "../pages/Acerca.jsx"
import { Routeprotected } from "../components/Routeprotected.jsx"
const RouterApp =() =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/"  element={<Routeprotected><Home/></Routeprotected>}/>             
                <Route path="*" element={<NotFound/>}/>
                <Route path="/Registro" element ={<Register/>}/>
                <Route path="/acerca" element={<Acerca/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export {RouterApp}