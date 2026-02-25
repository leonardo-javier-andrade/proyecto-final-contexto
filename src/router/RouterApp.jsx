import { Fragment } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"   
import {Home} from '../pages/Home.jsx' 
import{NotFound} from'../pages/NotFound.jsx'
import { Login } from "../pages/Login.jsx"
import {Register} from "../pages/Register.jsx"
const RouterApp =() =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/"  element={<Home/>}/>             
                <Route path="*" element={<NotFound/>}/>
                <Route path="/Register" element ={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export {RouterApp}