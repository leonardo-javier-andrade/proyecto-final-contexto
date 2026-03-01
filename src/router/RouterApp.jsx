import { BrowserRouter,Routes,Route } from "react-router-dom"   
import {Home} from '../pages/Home.jsx' 
import{NotFound} from'../pages/NotFound.jsx'
import { Login } from "../pages/Login.jsx"
import {Register} from "../pages/Register.jsx"
import { Routeprotected } from "../components/Routeprotected.jsx"
const RouterApp =() =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/"  element={<Routeprotected><Home/></Routeprotected>}/>             
                <Route path="*" element={<NotFound/>}/>
                <Route path="/Register" element ={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export {RouterApp}